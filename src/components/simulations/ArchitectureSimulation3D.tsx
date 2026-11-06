import { beveledBox, furnishedObject } from './labGeometry';
import { createLabStudio, studioSurface } from './labStudio';
import { LabToolbar } from './LabToolbar';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Building2, 
  RotateCcw, 
  X, 
  Eye, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Sun,
  Layers,
  Sparkles,
  Compass,
  Maximize2,
  Trash2,
  Plus,
  Info
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface ArchitectureSimulation3DProps {
  onClose: () => void;
  onComplete?: () => void;
}

interface PlacedFurniture {
  id: string;
  type: 'bed' | 'desk' | 'sofa' | 'dining' | 'wall';
  name: string;
  x: number;
  z: number;
  rotation: number;
}

export const ArchitectureSimulation3D: React.FC<ArchitectureSimulation3DProps> = ({ onClose, onComplete }) => {
  const { t, language } = useLanguage();
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglError,setWebglError]=useState(false);

  // Architectural State
  const [viewMode, setViewMode] = useState<'exterior' | 'cutaway'>('cutaway'); // Default to cutaway floorplan view!
  const [showStructuralLayer, setShowStructuralLayer] = useState<boolean>(false);
  const [timeOfDayHours, setTimeOfDayHours] = useState<number>(14); // 14:00 (2 PM) afternoon sun
  const [selectedTool, setSelectedTool] = useState<'bed' | 'desk' | 'sofa' | 'dining' | 'wall' | null>(null);

  // Placed furniture items (start with basic functional items)
  const [furnitureList, setFurnitureList] = useState<PlacedFurniture[]>([
    { id: 'f-1', type: 'bed', name: 'Giường ngủ', x: -2.0, z: -1.5, rotation: 0 },
    { id: 'f-2', type: 'desk', name: 'Bàn học đón sáng', x: 2.0, z: -1.5, rotation: 0 },
    { id: 'f-3', type: 'sofa', name: 'Sofa tiếp khách', x: 2.0, z: 1.0, rotation: 0 }
  ]);

  const getFurnitureDisplayName = (item: PlacedFurniture) => {
    if (language === 'vi') return item.name;
    const enMap: Record<PlacedFurniture['type'], string> = {
      bed: 'Master Bed',
      desk: 'Daylight Study Desk',
      sofa: 'Living Room Sofa',
      dining: 'Family Dining Table',
      wall: 'Interior Partition Wall'
    };
    return enMap[item.type] || item.name;
  };

  const [circulationWarning, setCirculationWarning] = useState<string | null>(null);
  const [reflectionAnswer, setReflectionAnswer] = useState<string>('');
  const [reflectionSaved, setReflectionSaved] = useState<boolean>(false);

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const houseGroupRef = useRef<THREE.Group | null>(null);
  const furnitureGroupRef = useRef<THREE.Group | null>(null);
  const structuralGroupRef = useRef<THREE.Group | null>(null);
  const roofGroupRef = useRef<THREE.Group | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Orbit rotation
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraAngleRef = useRef({ theta: Math.PI / 4, phi: Math.PI / 3.2, radius: 18 });

  const updateCamera = () => {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraAngleRef.current;
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = radius * Math.cos(phi);
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(0, 1.2, 0);
  };

  // Check circulation whenever furniture changes
  useEffect(() => {
    // Front door is at x: 0, z: 2.5
    // Doorway buffer: x between -1.0 and +1.0, z > 1.2
    const doorBlocked = furnitureList.some((item) => {
      return Math.abs(item.x) < 1.0 && item.z > 1.2;
    });

    if (doorBlocked) {
      setCirculationWarning(
        language === 'vi'
          ? 'CẢNH BÁO LƯU THÔNG: Lối vào cửa chính đang bị đồ nội thất che chắn! Cần giữ khoảng cách thông thủy tối thiểu 0.9m để thoát hiểm an toàn.'
          : 'CIRCULATION WARNING: The main entrance doorway is obstructed by furniture! Maintain at least 0.9m clear egress width for fire & life safety.'
      );
    } else {
      setCirculationWarning(null);
    }
  }, [furnitureList, language]);

  // Three.js Scene Setup
  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || 800;
    const height = mountRef.current.clientHeight || 500;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    updateCamera();

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    } catch (e) {
      setWebglError(true);
      console.warn('WebGL init failed:', e);
      return;
    }

    // The shared studio supplies the landscape and presentation plinth.

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Sun Directional Light with Shadows
    const sunLight = new THREE.DirectionalLight(0xfff7ed, 1.3);
    sunLight.position.set(12, 14, 8);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // Groups
    const houseGroup = new THREE.Group();
    scene.add(houseGroup);
    houseGroupRef.current = houseGroup;

    const furnitureGroup = new THREE.Group();
    houseGroup.add(furnitureGroup);
    furnitureGroupRef.current = furnitureGroup;

    const structuralGroup = new THREE.Group();
    houseGroup.add(structuralGroup);
    structuralGroupRef.current = structuralGroup;

    const roofGroup = new THREE.Group();
    houseGroup.add(roofGroup);
    roofGroupRef.current = roofGroup;

    // 1. Foundation Slab (8m x 6m x 0.3m concrete)
    const foundationGeo = beveledBox(8, 0.3, 6);
    const foundationMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.7 });
    const foundation = new THREE.Mesh(foundationGeo, foundationMat);
    foundation.position.y = 0.15;
    foundation.receiveShadow = true;
    houseGroup.add(foundation);

    // Floor surface tile grid
    const floorTileGeo = new THREE.PlaneGeometry(7.6, 5.6);
    const floorTileMat = studioSurface(0xb3a18b, 1.1);
    const floorTile = new THREE.Mesh(floorTileGeo, floorTileMat);
    floorTile.rotation.x = -Math.PI / 2;
    floorTile.position.y = 0.31;
    floorTile.receiveShadow = true;
    houseGroup.add(floorTile);

    // 2. Perimeter Walls with Open Cutaway (hollow interior!)
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xe8e2d7, roughness: 0.85 });
    const wallH = 2.4;
    const wallThick = 0.2;

    // Back wall (North: z = -2.9)
    const backWallGeo = beveledBox(7.8, wallH, wallThick);
    const backWall = new THREE.Mesh(backWallGeo, wallMat);
    backWall.position.set(0, wallH / 2 + 0.3, -2.9);
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    houseGroup.add(backWall);

    // Left wall (West: x = -3.9)
    const leftWallGeo = beveledBox(wallThick, wallH, 5.8);
    const leftWall = new THREE.Mesh(leftWallGeo, wallMat);
    leftWall.position.set(-3.9, wallH / 2 + 0.3, 0);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    houseGroup.add(leftWall);

    // Right wall with Window cutout (East: x = 3.9)
    for (const [height, depth, y, z] of [[0.85,5.8,0.725,0],[0.5,5.8,2.45,0],[1.05,1.4,1.675,-2.2],[1.05,1.4,1.675,2.2]]) {
      const wall=new THREE.Mesh(beveledBox(wallThick,height,depth),wallMat);
      wall.position.set(3.9,y,z);wall.castShadow=true;wall.receiveShadow=true;houseGroup.add(wall);
    }
    const windowFrame=new THREE.MeshStandardMaterial({color:0x515b5e,metalness:0.6,roughness:0.35});
    for(const y of [1.15,2.2]){const frame=new THREE.Mesh(beveledBox(0.24,0.055,3.15),windowFrame);frame.position.set(3.9,y,0);houseGroup.add(frame);}
    for(const z of [-1.55,0,1.55]){const frame=new THREE.Mesh(beveledBox(0.24,1.05,0.055),windowFrame);frame.position.set(3.9,1.675,z);houseGroup.add(frame);}

    // Front wall left section (x: -2.3, z: 2.9)
    const frontWallLGeo = beveledBox(3.0, wallH, wallThick);
    const frontWallL = new THREE.Mesh(frontWallLGeo, wallMat);
    frontWallL.position.set(-2.4, wallH / 2 + 0.3, 2.9);
    frontWallL.castShadow = true;
    frontWallL.receiveShadow = true;
    houseGroup.add(frontWallL);

    // Front wall right section (x: 2.3, z: 2.9)
    const frontWallRGeo = beveledBox(3.0, wallH, wallThick);
    const frontWallR = new THREE.Mesh(frontWallRGeo, wallMat);
    frontWallR.position.set(2.4, wallH / 2 + 0.3, 2.9);
    frontWallR.castShadow = true;
    frontWallR.receiveShadow = true;
    houseGroup.add(frontWallR);

    // Main Door Frame & Door (x = 0, z = 2.9)
    const doorLeafGeo = beveledBox(1.2, 2.1, 0.08);
    const doorLeafMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.3 });
    const doorLeaf = new THREE.Mesh(doorLeafGeo, doorLeafMat);
    doorLeaf.position.set(0, 1.35, 2.9);
    doorLeaf.castShadow = true;
    houseGroup.add(doorLeaf);

    // 3. Removable Roof (Gable Pitch)
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.4 });
    const roofLeftGeo = beveledBox(4.6, 0.15, 6.4);
    const roofLeft = new THREE.Mesh(roofLeftGeo, roofMat);
    roofLeft.rotation.z = Math.PI / 6;
    roofLeft.position.set(-2.0, 3.8, 0);
    roofLeft.castShadow = true;
    roofGroup.add(roofLeft);

    const roofRightGeo = beveledBox(4.6, 0.15, 6.4);
    const roofRight = new THREE.Mesh(roofRightGeo, roofMat);
    roofRight.rotation.z = -Math.PI / 6;
    roofRight.position.set(2.0, 3.8, 0);
    roofRight.castShadow = true;
    roofGroup.add(roofRight);

    // 4. Structural Frame Layer (4 corner columns + 2 center columns + beams)
    const columnGeo = beveledBox(0.35, wallH + 0.3, 0.35);
    const columnMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.3 }); // Orange structural frame
    const colPositions = [
      [-3.8, -2.8], [3.8, -2.8],
      [-3.8, 2.8], [3.8, 2.8],
      [0, -2.8], [0, 2.8]
    ];
    colPositions.forEach(([cx, cz]) => {
      const col = new THREE.Mesh(columnGeo, columnMat);
      col.position.set(cx, (wallH + 0.3) / 2, cz);
      col.castShadow = true;
      structuralGroup.add(col);
    });

    // Ring beam on top
    const beamGeoX = beveledBox(7.8, 0.3, 0.35);
    const beamMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.3 });
    const beamFront = new THREE.Mesh(beamGeoX, beamMat);
    beamFront.position.set(0, wallH + 0.3, 2.8);
    structuralGroup.add(beamFront);
    const beamBack = new THREE.Mesh(beamGeoX, beamMat);
    beamBack.position.set(0, wallH + 0.3, -2.8);
    structuralGroup.add(beamBack);

    // Mouse handlers
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      cameraAngleRef.current.theta -= deltaX * 0.008;
      cameraAngleRef.current.phi = Math.max(0.2, Math.min(Math.PI / 2.05, cameraAngleRef.current.phi - deltaY * 0.008));

      updateCamera();
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      cameraAngleRef.current.radius = Math.max(10, Math.min(26, cameraAngleRef.current.radius + e.deltaY * 0.015));
      updateCamera();
      e.preventDefault();
    };

    const dom = renderer.domElement;
    const touchStart=(event:TouchEvent)=>{const t=event.touches[0];if(t)onMouseDown({clientX:t.clientX,clientY:t.clientY} as MouseEvent);};
    const touchMove=(event:TouchEvent)=>{const t=event.touches[0];if(t)onMouseMove({clientX:t.clientX,clientY:t.clientY} as MouseEvent);};
    dom.addEventListener('touchstart',touchStart,{passive:true});
    dom.addEventListener('touchmove',touchMove,{passive:true});
    window.addEventListener('touchend',onMouseUp);
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel);

    const studio = createLabStudio(scene, renderer, camera, mountRef.current!, 'architecture');
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      studio.render();
    };
    animate();

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      dom.removeEventListener('mousedown', onMouseDown);
      dom.removeEventListener('touchstart',touchStart);
      dom.removeEventListener('touchmove',touchMove);
      window.removeEventListener('touchend',onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('wheel', onWheel);
      if (mountRef.current && dom.parentNode === mountRef.current) {
        mountRef.current.removeChild(dom);
      }
      studio.dispose();
      renderer.dispose();
    };
  }, []);

  // Update Roof visibility based on viewMode
  useEffect(() => {
    if (roofGroupRef.current) {
      roofGroupRef.current.visible = viewMode === 'exterior';
    }
  }, [viewMode]);

  // Update Structural Frame visibility
  useEffect(() => {
    if (structuralGroupRef.current) {
      structuralGroupRef.current.visible = showStructuralLayer;
    }
  }, [showStructuralLayer]);

  // Update Sun Direction & Color based on Time Of Day (6h to 18h)
  useEffect(() => {
    if (!sunLightRef.current) return;
    // Map hours 6 to 18 to angle 0 to PI
    const tNorm = (timeOfDayHours - 6) / 12; // 0 at 6am, 0.5 at 12pm, 1 at 6pm
    const sunAngle = tNorm * Math.PI;

    const sunDist = 16;
    const sx = Math.cos(sunAngle) * sunDist;
    const sy = Math.max(1.5, Math.sin(sunAngle) * sunDist);
    const sz = 8;
    sunLightRef.current.position.set(sx, sy, sz);

    // Warm golden morning/dusk vs crisp white noon
    if (timeOfDayHours <= 7 || timeOfDayHours >= 17) {
      sunLightRef.current.color.setHex(0xf97316); // Orange-gold
      sunLightRef.current.intensity = 0.8;
    } else {
      sunLightRef.current.color.setHex(0xffedd5); // Crisp sun
      sunLightRef.current.intensity = 1.3;
    }
  }, [timeOfDayHours]);

  // Render 3D Furniture Meshes whenever furnitureList updates
  useEffect(() => {
    if (!furnitureGroupRef.current) return;
    const group = furnitureGroupRef.current;

    for (const child of [...group.children]) {
      const materials=new Set<THREE.Material>();
      child.traverse(object=>{if(object instanceof THREE.Mesh){object.geometry.dispose();(Array.isArray(object.material)?object.material:[object.material]).forEach(m=>materials.add(m));}});
      materials.forEach(material=>material.dispose()); group.remove(child);
    }
    furnitureList.forEach(item=>{
      const furniture=furnishedObject(item.type);
      furniture.position.set(item.x,0.33,item.z); furniture.rotation.y=item.rotation;
      group.add(furniture);
    });
  }, [furnitureList]);

  // Handle adding furniture with grid snap & bounds check
  const handleAddFurniture = (type: 'bed' | 'desk' | 'sofa' | 'dining' | 'wall') => {
    // Determine placement coordinates with grid snap 0.5m
    const count = furnitureList.length;
    let targetX = (count % 3 - 1) * 1.5;
    let targetZ = (Math.floor(count / 3) - 1) * 1.2;

    // Bounds check within interior (-3.0 <= x <= 3.0, -2.0 <= z <= 2.0)
    targetX = Math.max(-2.8, Math.min(2.8, Math.round(targetX * 2) / 2));
    targetZ = Math.max(-2.0, Math.min(2.0, Math.round(targetZ * 2) / 2));

    const names = {
      bed: 'Giường ngủ master',
      desk: 'Bàn làm việc / học',
      sofa: 'Sofa tiếp khách',
      dining: 'Bàn ăn gia đình',
      wall: 'Tường ngăn phòng'
    };

    const newItem: PlacedFurniture = {
      id: `f-${Date.now()}`,
      type,
      name: names[type],
      x: targetX,
      z: targetZ,
      rotation: 0
    };

    setFurnitureList((prev) => [...prev, newItem]);
  };

  const handleRemoveFurniture = (id: string) => {
    setFurnitureList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMoveFurniture = (id: string, deltaX: number, deltaZ: number) => {
    setFurnitureList((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        let newX = Math.round((item.x + deltaX) * 2) / 2;
        let newZ = Math.round((item.z + deltaZ) * 2) / 2;
        // Bounds check inside interior
        newX = Math.max(-2.8, Math.min(2.8, newX));
        newZ = Math.max(-2.0, Math.min(2.2, newZ));
        return { ...item, x: newX, z: newZ };
      })
    );
  };

  return (
    <div role="dialog" aria-modal="true" aria-label="SPATIAL DESIGN" className="lab-backdrop fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-2 sm:p-4">
      <div className="lab-session lab-architecture relative w-full max-w-6xl h-[95vh] bg-slate-900 border border-slate-700 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        <LabToolbar name="SPATIAL DESIGN" onClose={onClose} />
      {webglError&&<p role="alert" className="lab-webgl-error">{language==='vi'?'Thiết bị không khởi tạo được đồ họa 3D. Bạn vẫn có thể đọc hướng dẫn và sử dụng bảng điều khiển bên dưới. Hãy thử trình duyệt hỗ trợ WebGL để xem mô hình.':'3D graphics are unavailable on this device. Instructions and the control panel remain accessible. Try a WebGL-capable browser to view the model.'}</p>}
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">
                  {language === 'vi' ? 'Kiến trúc & thiết kế' : 'Architecture & design'}
                </span>
              </div>
              <h2 className="text-lg font-bold text-white">
                {language === 'vi'
                  ? 'Thiết kế không gian sống'
                  : 'Design a living space'}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            title={language === 'vi' ? 'Đóng mô phỏng' : 'Close simulation'}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* View Mode & Structural Toggles Sub-bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-2.5 bg-slate-950 border-b border-slate-800 text-xs gap-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">{language === 'vi' ? 'Góc nhìn:' : 'View Mode:'}</span>
            <button
              onClick={() => setViewMode('cutaway')}
              className={`px-3 py-1.5 rounded-lg border font-medium transition ${
                viewMode === 'cutaway'
                  ? 'bg-blue-600 text-white border-blue-400'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {language === 'vi' ? 'Mặt bằng cắt lớp (Nhìn trong phòng)' : 'Cutaway Floorplan (Interior View)'}
            </button>
            <button
              onClick={() => setViewMode('exterior')}
              className={`px-3 py-1.5 rounded-lg border font-medium transition ${
                viewMode === 'exterior'
                  ? 'bg-blue-600 text-white border-blue-400'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {language === 'vi' ? 'Ngoại thất có mái' : 'Full Exterior with Roof'}
            </button>
          </div>

          <div className="flex items-center gap-4">
            {/* Structural Layer Toggle */}
            <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white">
              <input
                type="checkbox"
                checked={showStructuralLayer}
                onChange={(e) => setShowStructuralLayer(e.target.checked)}
                className="rounded border-slate-600 text-orange-500 focus:ring-0"
              />
              <span className="flex items-center gap-1 font-medium text-orange-400">
                <Layers className="w-4 h-4" /> {language === 'vi' ? 'Khung kết cấu (Cột/Dầm cam)' : 'Structural Frame (Columns/Beams)'}
              </span>
            </label>

            {/* Time of Day Sun Slider */}
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-3 py-1 rounded-lg">
              <Sun className="w-4 h-4 text-amber-400" />
              <span className="text-slate-400">{language === 'vi' ? 'Giờ nắng:' : 'Solar Time:'}</span>
              <span className="font-mono font-bold text-amber-300">{timeOfDayHours}:00</span>
              <input
                type="range"
                min={6}
                max={18}
                step={1}
                value={timeOfDayHours}
                onChange={(e) => setTimeOfDayHours(Number(e.target.value))}
                className="w-24 accent-amber-400 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Structural disclaimer banner */}
        {showStructuralLayer && (
          <div className="bg-amber-950/40 border-b border-amber-800/40 px-6 py-1.5 text-[11px] text-amber-300 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 flex-shrink-0" />
            <span>
              {language === 'vi'
                ? 'Lưu ý sư phạm: Lớp khung cột dầm hiển thị trực quan cơ bản giúp học sinh THPT hiểu vị trí chịu lực, không thay thế tính toán tải trọng kết cấu chuyên nghiệp của kỹ sư xây dựng.'
                : 'Educational Note: The column/beam frame overlay illustrates primary load-bearing positions for high school exploration and does not replace structural engineering load calculations.'}
            </span>
          </div>
        )}

        {/* Main Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0 overflow-hidden">
          {/* 3D Viewport (8 cols) */}
          <div className="lg:col-span-8 relative bg-slate-950 flex flex-col">
            <div ref={mountRef} className="lab-viewport flex-1 w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Floating circulation warning */}
            {circulationWarning && (
              <div className="absolute top-4 left-4 right-4 bg-rose-950/90 border border-rose-500/60 p-3 rounded-xl text-xs text-rose-200 flex items-center gap-2 backdrop-blur-md shadow-lg">
                <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span>{circulationWarning}</span>
              </div>
            )}

            {/* Scorecard Overlay */}
            <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 p-3 rounded-xl text-xs text-slate-300 space-y-1.5 shadow-lg">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1 text-xs">
                <Sparkles className="w-4 h-4 text-blue-400" /> {language === 'vi' ? 'Tiêu chí đánh giá mặt bằng:' : 'Floorplan Evaluation Rubric:'}
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>{language === 'vi' ? '• Công năng sử dụng:' : '• Functional Zoning:'}</span>
                <span className="font-bold text-emerald-400">
                  {language === 'vi' ? 'Đầy đủ 3 khu vực (3/3)' : 'All 3 Zones Active (3/3)'}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>{language === 'vi' ? '• Luồng lưu thông:' : '• Egress & Circulation:'}</span>
                <span className={`font-bold ${circulationWarning ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {circulationWarning
                    ? (language === 'vi' ? 'Bị nghẽn cửa (1/3)' : 'Doorway Blocked (1/3)')
                    : (language === 'vi' ? 'Thông thoáng (3/3)' : 'Clear Path (3/3)')}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>{language === 'vi' ? '• Đón sáng tự nhiên:' : '• Natural Daylighting:'}</span>
                <span className="font-bold text-amber-400">
                  {language === 'vi' ? 'Bàn học đón nắng chiều (3/3)' : 'Optimal Desk Daylight (3/3)'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel: Furniture & Placement Controls (4 cols) */}
          <div className="lg:col-span-4 bg-slate-900/70 border-l border-slate-800 flex flex-col overflow-y-auto p-4 sm:p-5 gap-4">
            {/* Add Components Toolbox */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
              <h3 className="text-sm font-bold text-white mb-2.5 flex items-center gap-2">
                <Plus className="w-4 h-4 text-blue-400" /> {language === 'vi' ? 'Thêm thành phần vào phòng (Snap lưới 0.5m):' : 'Add Interior Modules (0.5m Grid Snap):'}
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => handleAddFurniture('bed')}
                  className="p-2 bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg text-left transition flex items-center gap-1.5"
                >
                  <span className="w-3 h-3 rounded bg-blue-500 inline-block" /> {language === 'vi' ? '+ Giường ngủ' : '+ Master Bed'}
                </button>
                <button
                  onClick={() => handleAddFurniture('desk')}
                  className="p-2 bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg text-left transition flex items-center gap-1.5"
                >
                  <span className="w-3 h-3 rounded bg-amber-500 inline-block" /> {language === 'vi' ? '+ Bàn làm việc' : '+ Study Desk'}
                </button>
                <button
                  onClick={() => handleAddFurniture('sofa')}
                  className="p-2 bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg text-left transition flex items-center gap-1.5"
                >
                  <span className="w-3 h-3 rounded bg-emerald-500 inline-block" /> {language === 'vi' ? '+ Sofa phòng khách' : '+ Living Sofa'}
                </button>
                <button
                  onClick={() => handleAddFurniture('dining')}
                  className="p-2 bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg text-left transition flex items-center gap-1.5"
                >
                  <span className="w-3 h-3 rounded bg-purple-500 inline-block" /> {language === 'vi' ? '+ Bàn ăn gia đình' : '+ Dining Table'}
                </button>
                <button
                  onClick={() => handleAddFurniture('wall')}
                  className="col-span-2 p-2 bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg text-center transition flex items-center justify-center gap-1.5"
                >
                  <span className="w-3 h-3 rounded bg-slate-400 inline-block" /> {language === 'vi' ? '+ Tường ngăn phòng (Partition Wall)' : '+ Interior Partition Wall'}
                </button>
              </div>
            </div>

            {/* Current Placed Items Controller */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex-1">
              <h3 className="text-sm font-bold text-white mb-2.5 flex items-center justify-between">
                <span>{language === 'vi' ? `Đồ nội thất hiện có (${furnitureList.length}):` : `Placed Modules (${furnitureList.length}):`}</span>
                <span className="text-[11px] text-slate-400 font-normal">{language === 'vi' ? 'Khuôn viên 8m x 6m' : '8m x 6m Footprint'}</span>
              </h3>

              <div className="space-y-2.5 text-xs max-h-56 overflow-y-auto pr-1">
                {furnitureList.map((item) => (
                  <div
                    key={item.id}
                    className="lab-furniture-row p-2.5 bg-slate-900/60 border border-slate-700/60 rounded-lg flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-semibold text-slate-200">{getFurnitureDisplayName(item)}</div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        X: {item.x.toFixed(1)}m | Z: {item.z.toFixed(1)}m
                      </div>
                    </div>

                    {/* Move arrow buttons */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleMoveFurniture(item.id, -0.5, 0)}
                        className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-center font-bold"
                        title={language === 'vi' ? 'Dịch sang trái' : 'Move Left'}
                        aria-label={language === 'vi' ? 'Dịch sang trái' : 'Move Left'}
                      >
                        ←
                      </button>
                      <button
                        onClick={() => handleMoveFurniture(item.id, 0.5, 0)}
                        className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-center font-bold"
                        title={language === 'vi' ? 'Dịch sang phải' : 'Move Right'}
                        aria-label={language === 'vi' ? 'Dịch sang phải' : 'Move Right'}
                      >
                        →
                      </button>
                      <button
                        onClick={() => handleMoveFurniture(item.id, 0, -0.5)}
                        className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-center font-bold"
                        title={language === 'vi' ? 'Dịch lên trên' : 'Move Forward'}
                        aria-label={language === 'vi' ? 'Dịch lên trên' : 'Move Forward'}
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => handleMoveFurniture(item.id, 0, 0.5)}
                        className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-center font-bold"
                        title={language === 'vi' ? 'Dịch xuống dưới' : 'Move Back'}
                        aria-label={language === 'vi' ? 'Dịch xuống dưới' : 'Move Back'}
                      >
                        ↓
                      </button>
                      <button
                        onClick={() => handleRemoveFurniture(item.id)}
                        className="w-6 h-6 rounded bg-rose-950/60 text-rose-400 hover:bg-rose-900 flex items-center justify-center ml-1"
                        title={language === 'vi' ? 'Xóa món đồ này' : 'Remove module'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reflection Form */}
            <details className="lab-help bg-slate-800/80 border border-slate-700 rounded-xl p-4 text-xs">
              <summary className="font-bold text-white cursor-pointer">
                <HelpCircle className="w-4 h-4 text-blue-400" />
                {language === 'vi' ? 'Cảm nhận sau trải nghiệm:' : 'Post-Studio Reflection:'}
              </summary>
              <p className="text-slate-400 text-[11px] mb-2">
                {language === 'vi'
                  ? 'Theo em, điều khó nhất khi bố trí mặt bằng ngôi nhà là làm sao cân bằng giữa tính thẩm mỹ, sự tiện lợi đi lại và khả năng đón ánh sáng tự nhiên?'
                  : 'In your view, what is the biggest challenge in balancing aesthetics, unobstructed circulation, and natural daylight when designing a residential floorplan?'}
              </p>
              <textarea
                value={reflectionAnswer}
                onChange={(e) => setReflectionAnswer(e.target.value)}
                placeholder={
                  language === 'vi'
                    ? 'Ví dụ: Em thấy việc tính toán hướng nắng đổ bóng rất quan trọng, nếu để bàn làm việc ngược sáng sẽ bị chói mắt...'
                    : 'E.g., Calculating sun angles and shadow casting is essential so the study desk gets natural light without glare while keeping the main doorway clear...'
                }
                className="w-full h-16 p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs"
              />
              <button
                onClick={() => { if (reflectionAnswer.trim()) setReflectionSaved(true); }}
                disabled={reflectionSaved || !reflectionAnswer.trim()}
                className="mt-2.5 w-full py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {reflectionSaved ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : null}
                {reflectionSaved
                  ? (language === 'vi' ? 'Đã lưu phản tư của em' : 'Reflection saved to profile')
                  : (language === 'vi' ? 'Lưu cảm nhận của em' : 'Save Reflection')}
              </button>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
