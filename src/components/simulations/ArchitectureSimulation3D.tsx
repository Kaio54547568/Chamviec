import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Building2, 
  RotateCcw, 
  X, 
  Eye, 
  CheckCircle2, 
  HelpCircle, 
  Sun,
  Layers,
  Sparkles,
  Compass
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface ArchitectureSimulation3DProps {
  onClose: () => void;
  onComplete?: () => void;
}

export const ArchitectureSimulation3D: React.FC<ArchitectureSimulation3DProps> = ({ onClose, onComplete }) => {
  const { t, language } = useLanguage();
  const mountRef = useRef<HTMLDivElement>(null);

  // Modular Architectural Components State
  const [hasFoundation, setHasFoundation] = useState(true);
  const [hasWalls, setHasWalls] = useState(true);
  const [roofType, setRoofType] = useState<'gable' | 'flat' | 'none'>('gable');
  const [hasWindows, setHasWindows] = useState(true);
  const [hasGarden, setHasGarden] = useState(true);
  const [sunAngle, setSunAngle] = useState(45); // Sun elevation angle in degrees
  const [is2DMode, setIs2DMode] = useState(false);
  const [reflectionAnswer, setReflectionAnswer] = useState('');
  const [reflectionSaved, setReflectionSaved] = useState(false);

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);

  // Meshes group
  const houseGroupRef = useRef<THREE.Group | null>(null);
  const wallsMeshRef = useRef<THREE.Mesh | null>(null);
  const roofMeshRef = useRef<THREE.Mesh | null>(null);
  const gardenGroupRef = useRef<THREE.Group | null>(null);
  const windowsGroupRef = useRef<THREE.Group | null>(null);

  // Orbit rotation
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraAngleRef = useRef({ theta: Math.PI / 3, phi: Math.PI / 3.5, radius: 18 });

  useEffect(() => {
    if (is2DMode || !mountRef.current) return;

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
      console.warn('WebGL failed, fallback to 2D:', e);
      setIs2DMode(true);
      return;
    }

    // Grid terrain & Ground
    const grid = new THREE.GridHelper(20, 20, 0x06b6d4, 0x1e293b);
    grid.position.y = -0.01;
    scene.add(grid);

    const groundGeo = new THREE.PlaneGeometry(24, 24);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Ambient light
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    // Sun Directional Light
    const sunLight = new THREE.DirectionalLight(0xffedd5, 1.2);
    sunLight.position.set(10, 14, 8);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // Building Group
    const houseGroup = new THREE.Group();
    scene.add(houseGroup);
    houseGroupRef.current = houseGroup;

    // 1. Foundation Slab (Concrete)
    const foundationGeo = new THREE.BoxGeometry(8, 0.4, 6);
    const foundationMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8 });
    const foundation = new THREE.Mesh(foundationGeo, foundationMat);
    foundation.position.y = 0.2;
    foundation.receiveShadow = true;
    foundation.castShadow = true;
    houseGroup.add(foundation);

    // 2. Exterior Main Walls
    const wallGeo = new THREE.BoxGeometry(7.2, 3.2, 5.2);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.y = 2.0;
    wall.castShadow = true;
    wall.receiveShadow = true;
    houseGroup.add(wall);
    wallsMeshRef.current = wall;

    // 3. Wooden Front Door
    const doorGeo = new THREE.BoxGeometry(1.2, 2.2, 0.1);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.4 });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(0, 1.5, 2.65);
    door.castShadow = true;
    houseGroup.add(door);

    // 4. Windows Group (Glass & frames)
    const windowsGroup = new THREE.Group();
    const winGeo = new THREE.BoxGeometry(1.4, 1.2, 0.15);
    const winMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
      roughness: 0.1,
      metalness: 0.3
    });

    // Front Left Window
    const win1 = new THREE.Mesh(winGeo, winMat);
    win1.position.set(-2.2, 2.2, 2.62);
    windowsGroup.add(win1);

    // Front Right Window
    const win2 = new THREE.Mesh(winGeo, winMat);
    win2.position.set(2.2, 2.2, 2.62);
    windowsGroup.add(win2);

    // Side Windows
    const sideWinGeo = new THREE.BoxGeometry(0.15, 1.2, 1.6);
    const win3 = new THREE.Mesh(sideWinGeo, winMat);
    win3.position.set(-3.62, 2.2, 0);
    windowsGroup.add(win3);

    houseGroup.add(windowsGroup);
    windowsGroupRef.current = windowsGroup;

    // 5. Roof Mesh (initially Gable)
    const roofConeGeo = new THREE.ConeGeometry(5.4, 2.0, 4);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.4 });
    const roofMesh = new THREE.Mesh(roofConeGeo, roofMat);
    roofMesh.position.y = 4.6;
    roofMesh.rotation.y = Math.PI / 4;
    roofMesh.castShadow = true;
    houseGroup.add(roofMesh);
    roofMeshRef.current = roofMesh;

    // 6. Landscaping & Garden Trees
    const gardenGroup = new THREE.Group();
    const createTree = (x: number, z: number, scale = 1) => {
      const trunkGeo = new THREE.CylinderGeometry(0.15 * scale, 0.2 * scale, 1.5 * scale, 8);
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f });
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.set(x, 0.75 * scale, z);
      trunk.castShadow = true;

      const foliageGeo = new THREE.ConeGeometry(1.2 * scale, 2.4 * scale, 8);
      const foliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.6 });
      const foliage = new THREE.Mesh(foliageGeo, foliageMat);
      foliage.position.set(x, (1.5 + 1.0) * scale, z);
      foliage.castShadow = true;

      const tree = new THREE.Group();
      tree.add(trunk);
      tree.add(foliage);
      return tree;
    };

    gardenGroup.add(createTree(6, 4, 1.1));
    gardenGroup.add(createTree(-6, 3, 0.9));
    gardenGroup.add(createTree(-6, -4, 1.2));
    houseGroup.add(gardenGroup);
    gardenGroupRef.current = gardenGroup;

    // Mouse & Touch Controls
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;
      cameraAngleRef.current.theta -= deltaX * 0.01;
      cameraAngleRef.current.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, cameraAngleRef.current.phi - deltaY * 0.01));
      updateCamera();
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraAngleRef.current.radius = Math.max(8, Math.min(30, cameraAngleRef.current.radius + e.deltaY * 0.015));
      updateCamera();
    };

    // Touch support
    let touchStartX = 0;
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;
        cameraAngleRef.current.theta -= deltaX * 0.015;
        cameraAngleRef.current.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, cameraAngleRef.current.phi - deltaY * 0.015));
        updateCamera();
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    dom.addEventListener('wheel', handleWheel, { passive: false });
    dom.addEventListener('touchstart', handleTouchStart, { passive: true });
    dom.addEventListener('touchmove', handleTouchMove, { passive: true });

    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      dom.removeEventListener('wheel', handleWheel);
      dom.removeEventListener('touchstart', handleTouchStart);
      dom.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && dom) {
        mountRef.current.removeChild(dom);
      }
      renderer.dispose();
    };
  }, [is2DMode]);

  function updateCamera() {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraAngleRef.current;
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = radius * Math.cos(phi);
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(0, 1.8, 0);
  }

  // React to architectural component toggles
  useEffect(() => {
    if (wallsMeshRef.current) {
      wallsMeshRef.current.visible = hasWalls;
    }
    if (windowsGroupRef.current) {
      windowsGroupRef.current.visible = hasWindows && hasWalls;
    }
    if (gardenGroupRef.current) {
      gardenGroupRef.current.visible = hasGarden;
    }

    if (roofMeshRef.current && houseGroupRef.current) {
      houseGroupRef.current.remove(roofMeshRef.current);
      roofMeshRef.current.geometry.dispose();

      if (roofType === 'gable') {
        const gableGeo = new THREE.ConeGeometry(5.4, 2.0, 4);
        const gableMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.4 });
        const mesh = new THREE.Mesh(gableGeo, gableMat);
        mesh.position.y = 4.6;
        mesh.rotation.y = Math.PI / 4;
        mesh.castShadow = true;
        houseGroupRef.current.add(mesh);
        roofMeshRef.current = mesh;
      } else if (roofType === 'flat') {
        const flatGeo = new THREE.BoxGeometry(8.2, 0.4, 6.2);
        const flatMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 });
        const mesh = new THREE.Mesh(flatGeo, flatMat);
        mesh.position.y = 3.8;
        mesh.castShadow = true;
        houseGroupRef.current.add(mesh);
        roofMeshRef.current = mesh;
      } else {
        roofMeshRef.current = null;
      }
    }

    // Update Sun position & shadow direction based on slider
    if (sunLightRef.current) {
      const rad = (sunAngle * Math.PI) / 180;
      sunLightRef.current.position.set(14 * Math.cos(rad), 14 * Math.sin(rad), 8);
    }
  }, [hasWalls, hasWindows, hasGarden, roofType, sunAngle]);

  const handleResetCamera = () => {
    cameraAngleRef.current = { theta: Math.PI / 3, phi: Math.PI / 3.5, radius: 18 };
    updateCamera();
  };

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    setReflectionSaved(true);
    if (onComplete) onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-5xl w-full p-4 sm:p-6 shadow-2xl flex flex-col space-y-4 my-auto max-h-[95vh] overflow-y-auto text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Building2 className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                {t.simulation.archTitle}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {language === 'vi' ? 'Phòng Thí Nghiệm 3D: Lắp Ráp Không Gian Nhà Ở & Kiểm Tra Hướng Nắng' : '3D Spatial Studio: Modular Assembly & Sun Path Analysis'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIs2DMode(prev => !prev)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">{is2DMode ? 'Chế độ 3D' : 'Bản vẽ 2D'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-white transition-colors"
              title={t.common.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mission Banner */}
        <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <div className="font-bold text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{t.simulation.missionGoal}: Lắp ghép các cấu kiện nhà ở (Tường, Mái, Cửa sổ, Cây xanh) và quan sát bóng đổ theo góc chiếu mặt trời</span>
            </div>
            <p className="text-slate-400">
              {language === 'vi'
                ? 'Kiểm tra thông gió và độ đón sáng tự nhiên - một trong những năng lực cốt lõi của Kiến trúc sư.'
                : 'Assess natural lighting, cross-ventilation, and thermal shade.'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800 shrink-0">
            <Compass className="w-3.5 h-3.5" />
            <span>Kích thước: 8m x 6m (48 m²)</span>
          </div>
        </div>

        {/* 3D Viewport or 2D Blueprint */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video sm:aspect-[16/9] max-h-[460px] flex items-center justify-center">
          {is2DMode ? (
            <div className="w-full h-full p-8 flex flex-col items-center justify-center space-y-4 bg-slate-950">
              <div className="w-80 h-56 border-2 border-cyan-500/60 rounded-xl p-4 relative grid grid-cols-2 gap-2 bg-slate-900/80">
                <div className="border border-slate-700 p-2 rounded flex flex-col justify-between text-[11px]">
                  <span className="font-bold text-cyan-300">Phòng Khách (24m²)</span>
                  <span className="text-slate-400">Cửa sổ hướng Nam</span>
                </div>
                <div className="border border-slate-700 p-2 rounded flex flex-col justify-between text-[11px]">
                  <span className="font-bold text-amber-300">Bếp & Ăn (16m²)</span>
                  <span className="text-slate-400">Thông gió tự nhiên</span>
                </div>
                <div className="col-span-2 border border-dashed border-emerald-600/80 p-2 rounded text-[11px] text-emerald-300 flex items-center justify-between">
                  <span>Ban công & Sân vườn sinh thái (8m²)</span>
                  <span>Cây xanh che nắng Tây</span>
                </div>
              </div>
              <p className="text-xs text-slate-400">Bản vẽ mặt bằng kiến trúc 2D (Floorplan Concept)</p>
            </div>
          ) : (
            <>
              <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 text-[11px] text-slate-400 flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.simulation.controlsHelp}</span>
              </div>

              <button
                onClick={handleResetCamera}
                className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs flex items-center gap-1.5 backdrop-blur-md"
                title={t.simulation.resetView}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="text-[11px]">{t.simulation.resetView}</span>
              </button>
            </>
          )}
        </div>

        {/* Modular Customization Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs">
          {/* Walls Toggle */}
          <div className="space-y-1.5">
            <span className="font-bold text-slate-300">1. Tường bao che:</span>
            <button
              onClick={() => setHasWalls(prev => !prev)}
              className={`w-full py-2 px-3 rounded-xl font-bold transition-all border ${
                hasWalls ? 'bg-cyan-600 text-white border-cyan-500' : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              {hasWalls ? '✓ Đang lắp tường' : '○ Bỏ tường (Xem kết cấu)'}
            </button>
          </div>

          {/* Roof Style */}
          <div className="space-y-1.5">
            <span className="font-bold text-slate-300">2. Kiểu dáng mái:</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setRoofType('gable')}
                className={`py-1.5 px-2 rounded-lg font-bold border transition-colors ${
                  roofType === 'gable' ? 'bg-amber-600 text-white border-amber-500' : 'bg-slate-700 text-slate-300 border-slate-600'
                }`}
              >
                Mái Dốc (Ngói)
              </button>
              <button
                onClick={() => setRoofType('flat')}
                className={`py-1.5 px-2 rounded-lg font-bold border transition-colors ${
                  roofType === 'flat' ? 'bg-slate-600 text-white border-slate-500' : 'bg-slate-700 text-slate-300 border-slate-600'
                }`}
              >
                Mái Bằng
              </button>
            </div>
          </div>

          {/* Windows & Garden Toggles */}
          <div className="space-y-1.5">
            <span className="font-bold text-slate-300">3. Cửa kính & Cây xanh:</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setHasWindows(prev => !prev)}
                className={`flex-1 py-1.5 rounded-lg font-semibold border ${
                  hasWindows ? 'bg-sky-600 text-white border-sky-500' : 'bg-slate-700 text-slate-400 border-slate-600'
                }`}
              >
                Cửa sổ ({hasWindows ? 'Bật' : 'Tắt'})
              </button>
              <button
                onClick={() => setHasGarden(prev => !prev)}
                className={`flex-1 py-1.5 rounded-lg font-semibold border ${
                  hasGarden ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-700 text-slate-400 border-slate-600'
                }`}
              >
                Cây xanh ({hasGarden ? 'Có' : 'Không'})
              </button>
            </div>
          </div>

          {/* Sun Altitude Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-300 flex items-center gap-1">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Góc chiếu nắng:</span>
              </span>
              <span className="font-mono font-bold text-amber-400">{sunAngle}°</span>
            </div>
            <input
              type="range"
              min={15}
              max={85}
              value={sunAngle}
              onChange={(e) => setSunAngle(Number(e.target.value))}
              className="w-full accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Sáng sớm / Chiều tà (15°)</span>
              <span>Giữa trưa (85°)</span>
            </div>
          </div>
        </div>

        {/* Kolb Experiential Reflection Form */}
        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3 text-xs">
          <h4 className="font-bold text-cyan-400 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>Phản tư trải nghiệm ngành Kiến trúc & Kỹ sư Công trình (Kolb Learning):</span>
          </h4>

          <ol className="list-decimal list-inside space-y-1 text-slate-300 leading-relaxed">
            <li><strong>Trải nghiệm:</strong> Khi thay đổi góc chiếu mặt trời, bóng đổ của mái dốc và hàng cây xanh đã che chắn nhiệt cho ngôi nhà thế nào?</li>
            <li><strong>Quan sát:</strong> Kiến trúc sư cần kết hợp giữa mắt thẩm mỹ (A - Artistic) và khả năng tính toán kết cấu vật liệu (R - Realistic) ra sao?</li>
            <li><strong>Khái niệm hóa:</strong> Khái niệm "Kiến trúc xanh & Thông gió tự nhiên" giúp tiết kiệm điện năng điều hòa cho đô thị Việt Nam.</li>
            <li><strong>Ứng dụng:</strong> Ngôi nhà em đang ở có những điểm đón sáng hoặc bí khí nào cần được cải thiện nếu em là kiến trúc sư?</li>
          </ol>

          <form onSubmit={handleSaveReflection} className="space-y-2 pt-1">
            <textarea
              value={reflectionAnswer}
              onChange={(e) => setReflectionAnswer(e.target.value)}
              placeholder="Ghi lại cảm nhận về tính thẩm mỹ và công năng không gian của em..."
              className="w-full h-16 p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
            <div className="flex items-center justify-between">
              {reflectionSaved ? (
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Đã lưu phản tư ngành Kiến trúc vào báo cáo!
                </span>
              ) : (
                <span className="text-[11px] text-slate-500">
                  Phản tư này giúp củng cố nhận thức cho nhóm ngành Kiến trúc - Quy hoạch đô thị.
                </span>
              )}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-medium"
                >
                  {t.common.close}
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs"
                >
                  Lưu phản tư
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
