import { beveledBox, leafBlade } from './labGeometry';
import { createLabStudio, studioSurface } from './labStudio';
import { LabToolbar } from './LabToolbar';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Sprout, 
  RotateCcw, 
  X, 
  Eye, 
  CheckCircle2, 
  HelpCircle, 
  Sun, 
  Droplets, 
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface AgricultureSimulation3DProps {
  onClose: () => void;
  onComplete?: () => void;
}

export const AgricultureSimulation3D: React.FC<AgricultureSimulation3DProps> = ({ onClose, onComplete }) => {
  const { t, language } = useLanguage();
  const mountRef = useRef<HTMLDivElement>(null);

  // Environmental Controls State
  const [lightLux, setLightLux] = useState(28000); // 0 to 50,000 lux (Optimal: 25,000 - 35,000)
  const [moisture, setMoisture] = useState(65); // 0% to 100% (Optimal: 60% - 75%)
  const [nutrientEC, setNutrientEC] = useState(2.2); // 0 to 4.0 mS/cm (Optimal: 2.0 - 2.8)
  const [is2DMode, setIs2DMode] = useState(false);
  const [reflectionAnswer, setReflectionAnswer] = useState('');
  const [reflectionSaved, setReflectionSaved] = useState(false);

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const plantGroupRef = useRef<THREE.Group | null>(null);
  const leavesRef = useRef<THREE.Mesh[]>([]);
  const fruitsRef = useRef<THREE.Mesh[]>([]);
  const growLightRef = useRef<THREE.PointLight | null>(null);

  // Orbit rotation
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraAngleRef = useRef({ theta: Math.PI / 4, phi: Math.PI / 3, radius: 12 });

  // Calculate Plant Health Index (0 - 100%)
  const calculatePlantHealth = () => {
    // Optimal: Lux 30000, Moisture 70%, EC 2.4
    const luxPenalty = Math.abs(lightLux - 30000) / 30000;
    const moistPenalty = Math.abs(moisture - 68) / 68;
    const ecPenalty = Math.abs(nutrientEC - 2.4) / 2.4;

    const penalty = (luxPenalty * 0.35 + moistPenalty * 0.35 + ecPenalty * 0.30);
    return Math.max(10, Math.min(100, Math.round((1 - penalty) * 100)));
  };

  const healthScore = calculatePlantHealth();

  useEffect(() => {
    if (is2DMode || !mountRef.current) return;

    const width = mountRef.current.clientWidth || 800;
    const height = mountRef.current.clientHeight || 500;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a1612);
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
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    } catch (e) {
      console.warn('WebGL failed, fallback to 2D:', e);
      setIs2DMode(true);
      return;
    }

    // Greenhouse Bed & Floor
    const floorGeo = new THREE.PlaneGeometry(16, 16);
    const floorMat = studioSurface(0x788777, 0.55);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.5;
    floor.receiveShadow = true;
    scene.add(floor);

    // Hydroponic Trough / Planter Box
    const boxGeo = beveledBox(4.5, 0.9, 2.2);
    const boxMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
    const box = new THREE.Mesh(boxGeo, boxMat);
    box.position.y = -0.05;
    box.castShadow = true;
    box.receiveShadow = true;
    scene.add(box);

    // Coco-coir substrate (soil substitute)
    const soilGeo = beveledBox(4.3, 0.1, 2.0);
    const soilMat = new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.9 });
    const soil = new THREE.Mesh(soilGeo, soilMat);
    soil.position.y = 0.42;
    scene.add(soil);

    // Drip irrigation tube
    const dripGeo = new THREE.CylinderGeometry(0.04, 0.04, 4.2, 16);
    const dripMat = new THREE.MeshStandardMaterial({ color: 0x273831, roughness: 0.8 });
    const dripTube = new THREE.Mesh(dripGeo, dripMat);
    dripTube.rotation.z = Math.PI / 2;
    dripTube.position.set(0, 0.5, 0.3);
    scene.add(dripTube);

    // Greenhouse Structural Arch Frame (Plexiglass outline)
    const archGeo = new THREE.TorusGeometry(6, 0.06, 8, 32, Math.PI);
    const archMat = new THREE.MeshStandardMaterial({ color: 0x81938d, metalness: 0.8, roughness: 0.32 });
    const arch1 = new THREE.Mesh(archGeo, archMat);
    arch1.position.set(0, -0.5, -2);
    scene.add(arch1);

    const arch2 = new THREE.Mesh(archGeo, archMat);
    arch2.position.set(0, -0.5, 2);
    scene.add(arch2);

    // Ambient Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    // Grow Light (Top center hanging lamp)
    const growLight = new THREE.PointLight(0xffffff, 2.0, 14, 1.2);
    growLight.position.set(0, 5, 0);
    growLight.castShadow = true;
    scene.add(growLight);
    growLightRef.current = growLight;

    // Hanging Lamp Fixture
    const lampGeo = new THREE.CylinderGeometry(0.8, 1.0, 0.3, 16);
    const lampMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 });
    const lamp = new THREE.Mesh(lampGeo, lampMat);
    lamp.position.set(0, 5.2, 0);
    scene.add(lamp);

    // Plant Group (Procedural Tomato Plant)
    const plantGroup = new THREE.Group();
    scene.add(plantGroup);
    plantGroupRef.current = plantGroup;

    // Stem
    const stemGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.48, 0), new THREE.Vector3(0.06, 1.4, -0.03), new THREE.Vector3(-0.08, 2.4, 0.04), new THREE.Vector3(0, 3.35, 0),
    ]), 24, 0.045, 8);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x4b7133, roughness: 0.85 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.castShadow = true;
    plantGroup.add(stem);

    // Foliage / Leaves
    const leafGeo = leafBlade();
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x45813a, roughness: 0.75, side: THREE.DoubleSide });

    leavesRef.current = [];
    leafMat.onBeforeCompile=shader=>{
      shader.vertexShader='varying vec2 labLeafUv;\n'+shader.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nlabLeafUv=uv;');
      shader.fragmentShader='varying vec2 labLeafUv;\n'+shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
        float rib=1.0-smoothstep(0.008,0.03,abs(labLeafUv.y-0.5));
        float veins=pow(max(0.0,cos((labLeafUv.x+abs(labLeafUv.y-0.5)*0.9)*70.0)),16.0);
        diffuseColor.rgb*=mix(0.87,1.13,max(rib,veins*0.45));`);
    };
    // Clones retain this shader callback, so all leaves share the same vein definition.
    // Alternating compound branches and smaller leaflets give the tomato its natural silhouette.
    for (let branch = 0; branch < 7; branch++) {
      const angle = branch * 2.4, y = 0.9 + branch * 0.32, length = 1.15 - branch * 0.055;
      const end = new THREE.Vector3(Math.cos(angle) * length, y + 0.18, Math.sin(angle) * length);
      const petiole = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, y, 0), end.clone().multiplyScalar(0.5).setY(y + 0.16), end,
      ]), 12, 0.018, 6), stemMat);
      plantGroup.add(petiole);
      for (let leaflet = 0; leaflet < 5; leaflet++) {
        const side = leaflet === 4 ? 0 : leaflet % 2 ? -1 : 1;
        const distance = leaflet === 4 ? 1 : 0.35 + Math.floor(leaflet / 2) * 0.3;
        const material = leafMat.clone(); material.onBeforeCompile = leafMat.onBeforeCompile;
        const leaf = new THREE.Mesh(leafGeo, material);
        leaf.position.set(end.x * distance - Math.sin(angle) * side * 0.19, y + 0.16, end.z * distance + Math.cos(angle) * side * 0.19);
        leaf.rotation.set(0.25 + branch * 0.06, -angle + side * 0.75, side * 0.16);
        leaf.userData.restScale = leaflet === 4 ? 0.65 : 0.48;
        leaf.scale.setScalar(leaf.userData.restScale);
        leaf.castShadow = true; plantGroup.add(leaf); leavesRef.current.push(leaf);
      }
    }
    // Vertical support string, drip emitters and coco-coir granules.
    const support = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 4.7, 6), new THREE.MeshStandardMaterial({ color: 0xd6caae, roughness: 0.9 }));
    support.position.set(0.16, 2.85, -0.08); plantGroup.add(support);
    for (const x of [-1.4, 0, 1.4]) {
      const emitter = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.07, 12), dripMat);
      emitter.position.set(x, 0.55, 0.3); scene.add(emitter);
    }
    const granules = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.035, 0), soilMat, 120);
    const matrix = new THREE.Matrix4();
    for (let i = 0; i < 120; i++) {
      matrix.makeTranslation(Math.sin(i * 137.5) * 2.05, 0.49, Math.cos(i * 47.3) * 0.93); granules.setMatrixAt(i, matrix);
    }
    scene.add(granules);

    // Tomato Fruits
    fruitsRef.current = [];
    const fruitGeo = new THREE.SphereGeometry(0.24, 16, 16);
    const fruitMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.2 });

    const fruitPositions = [
      { x: 0.35, y: 1.8, z: 0.4 },
      { x: 0.45, y: 1.6, z: 0.35 },
      { x: -0.35, y: 2.2, z: -0.3 },
    ];

    fruitPositions.forEach(p => {
      const fruit = new THREE.Mesh(fruitGeo, fruitMat.clone());
      fruit.position.set(p.x, p.y, p.z);
      fruit.castShadow = true;
      plantGroup.add(fruit);
      fruitsRef.current.push(fruit);
      const calyx = new THREE.Group();
      for (let i = 0; i < 5; i++) {
        const sepal = new THREE.Mesh(leafGeo, stemMat); sepal.scale.set(0.18, 0.1, 0.25);
        sepal.rotation.y = i * Math.PI * 2 / 5; calyx.add(sepal);
      }
      calyx.position.set(p.x, p.y + 0.23, p.z); plantGroup.add(calyx);
    });

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
      cameraAngleRef.current.radius = Math.max(6, Math.min(20, cameraAngleRef.current.radius + e.deltaY * 0.015));
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
    const studio = createLabStudio(scene, renderer, camera, mountRef.current!, 'agriculture');
    const animate = () => {
      animId = requestAnimationFrame(animate);
      studio.render();
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
      studio.dispose();
      renderer.dispose();
    };
  }, [is2DMode]);

  function updateCamera() {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraAngleRef.current;
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = radius * Math.cos(phi);
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(0, 1.6, 0);
  }

  // Dynamic feedback update based on sliders
  useEffect(() => {
    // 1. Grow light brightness
    if (growLightRef.current) {
      const intensity = (lightLux / 30000) * 2.5;
      growLightRef.current.intensity = Math.max(0.2, intensity);
      // Light color temperature: cooler white at high lux, warm yellow at low lux
      const colorHex = lightLux > 35000 ? 0xffffff : lightLux > 18000 ? 0xfffbeb : 0xfef08a;
      growLightRef.current.color.setHex(colorHex);
    }

    // 2. Leaf color based on health (Deep vibrant green -> Yellowish wilted)
    const health = calculatePlantHealth();
    let leafColor = 0x15803d; // Healthy deep green
    if (health < 40) {
      leafColor = 0xa16207; // Yellow-brown (wilted/scorch)
    } else if (health < 70) {
      leafColor = 0x65a30d; // Light yellowish green (slight deficit)
    }

    leavesRef.current.forEach(leaf => {
      (leaf.material as THREE.MeshStandardMaterial).color.setHex(leafColor);
      // Slight scale wilt if health is low
      const s = 0.75 + (health / 100) * 0.25;
      const baseScale = leaf.userData.restScale || 1;
      leaf.scale.set(1.1 * s * baseScale, s * baseScale, s * baseScale);
    });

    // 3. Fruits scale and color
    fruitsRef.current.forEach(fruit => {
      const fruitScale = 0.6 + (health / 100) * 0.4;
      fruit.scale.set(fruitScale, fruitScale, fruitScale);
      const fruitColor = health > 60 ? 0xdc2626 : 0xca8a04;
      (fruit.material as THREE.MeshStandardMaterial).color.setHex(fruitColor);
    });
  }, [lightLux, moisture, nutrientEC, is2DMode]);

  const handleResetCamera = () => {
    cameraAngleRef.current = { theta: Math.PI / 4, phi: Math.PI / 3, radius: 12 };
    updateCamera();
  };

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    setReflectionSaved(true);
    if (onComplete) onComplete();
  };

  return (
    <div role="dialog" aria-modal="true" aria-label="LIVING SYSTEMS" className="lab-backdrop fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in overflow-y-auto">
      <div className="lab-session lab-agriculture bg-slate-900 border border-slate-700 rounded-3xl max-w-5xl w-full p-4 sm:p-6 shadow-2xl flex flex-col space-y-4 my-auto max-h-[95vh] overflow-y-auto text-slate-100">
        <LabToolbar name="LIVING SYSTEMS" onClose={onClose} />
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Sprout className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                {t.simulation.agriTitle}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {language === 'vi' ? 'Nhà kính thông minh' : 'Smart greenhouse'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIs2DMode(prev => !prev)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">{is2DMode ? (language === 'vi' ? 'Chế độ 3D' : '3D View') : (language === 'vi' ? 'Dashboard 2D' : '2D Dashboard')}</span>
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

        {/* Mission & Health Score Bar */}
        <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <div className="font-bold text-emerald-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>
                {language === 'vi'
                  ? `${t.simulation.missionGoal}: Điều chỉnh 3 chỉ số vào dải tối ưu để đạt Chỉ số Sức sống cây trồng > 85%`
                  : `${t.simulation.missionGoal}: Tune the 3 microclimate parameters into the optimal band to reach Plant Vitality > 85%`}
              </span>
            </div>
            <p className="text-slate-400">
              {language === 'vi'
                ? 'Dải tối ưu cho Cà chua bi: Ánh sáng (25k - 35k Lux), Độ ẩm (60% - 75%), Dinh dưỡng EC (2.0 - 2.8 mS/cm).'
                : 'Optimal band for cherry tomatoes: Lux (25k - 35k), Moisture (60% - 75%), EC (2.0 - 2.8 mS/cm).'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-slate-700">
              <Activity className="w-4 h-4 text-emerald-400" />
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block leading-none">
                  {language === 'vi' ? 'Chỉ số sinh trưởng:' : 'Plant Vitality:'}
                </span>
                <span className={`font-mono font-bold text-sm ${healthScore >= 80 ? 'text-emerald-400' : healthScore >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {healthScore}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Canvas Viewport or 2D Dashboard */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video sm:aspect-[16/9] max-h-[460px] flex items-center justify-center">
          {is2DMode ? (
            <div className="w-full h-full p-8 flex flex-col items-center justify-center space-y-4 bg-slate-950">
              <div className="w-80 sm:w-96 p-6 rounded-2xl bg-slate-900 border border-emerald-500/40 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">
                    {language === 'vi' ? 'Cảm biến IoT Nhà Màng 4.0' : 'Greenhouse 4.0 IoT Telemetry'}
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">ONLINE</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>{language === 'vi' ? 'Ánh sáng quang hợp:' : 'Photosynthetic Light:'}</span>
                    <strong className="font-mono text-amber-300">{lightLux.toLocaleString()} Lux</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>{language === 'vi' ? 'Độ ẩm cơ chất tưới:' : 'Substrate Moisture:'}</span>
                    <strong className="font-mono text-cyan-300">{moisture}%</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>{language === 'vi' ? 'Dẫn điện dinh dưỡng EC:' : 'Nutrient EC Level:'}</span>
                    <strong className="font-mono text-emerald-300">{nutrientEC} mS/cm</strong>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm">
                    <span>{language === 'vi' ? 'Đánh giá sức khỏe cây:' : 'Crop Health Status:'}</span>
                    <span className={healthScore >= 80 ? 'text-emerald-400' : 'text-amber-400'}>
                      {healthScore >= 80
                        ? (language === 'vi' ? 'Phát triển xuất sắc' : 'Thriving Growth')
                        : (language === 'vi' ? 'Cần tối ưu vi khí hậu' : 'Needs Microclimate Tuning')}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                {language === 'vi' ? 'Chế độ 2D Bảng Điều Khiển Cảm Biến Nông Nghiệp Thông Minh' : '2D Smart Agriculture IoT Sensor Control Panel'}
              </p>
            </div>
          ) : (
            <>
              <div ref={mountRef} className="lab-viewport w-full h-full cursor-grab active:cursor-grabbing" />

              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 text-[11px] text-slate-400 flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
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

        {/* 3 Parameter Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs">
          {/* Light Lux */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-300 flex items-center gap-1">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'vi' ? '1. Cường độ ánh sáng:' : '1. Light Intensity:'}</span>
              </span>
              <span className="font-mono font-bold text-amber-400">{lightLux.toLocaleString()} Lux</span>
            </div>
            <input
              type="range"
              min={5000}
              max={50000}
              step={1000}
              value={lightLux}
              onChange={(e) => setLightLux(Number(e.target.value))}
              className="w-full accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>{language === 'vi' ? 'Thiếu sáng (5k)' : 'Low Light (5k)'}</span>
              <span className="text-emerald-400 font-semibold">{language === 'vi' ? 'Tối ưu (25k-35k)' : 'Optimal (25k-35k)'}</span>
              <span>{language === 'vi' ? 'Cháy lá (50k)' : 'Leaf Scorch (50k)'}</span>
            </div>
          </div>

          {/* Moisture % */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-300 flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'vi' ? '2. Độ ẩm giá thể (Tưới nhỏ giọt):' : '2. Substrate Moisture (Drip):'}</span>
              </span>
              <span className="font-mono font-bold text-cyan-400">{moisture}%</span>
            </div>
            <input
              type="range"
              min={20}
              max={100}
              step={1}
              value={moisture}
              onChange={(e) => setMoisture(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>{language === 'vi' ? 'Khô héo (20%)' : 'Wilted (20%)'}</span>
              <span className="text-emerald-400 font-semibold">{language === 'vi' ? 'Tối ưu (60%-75%)' : 'Optimal (60%-75%)'}</span>
              <span>{language === 'vi' ? 'Ngập úng (100%)' : 'Waterlogged (100%)'}</span>
            </div>
          </div>

          {/* EC Nutrient */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-300 flex items-center gap-1">
                <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'vi' ? '3. Nồng độ dinh dưỡng EC:' : '3. Nutrient EC Concentration:'}</span>
              </span>
              <span className="font-mono font-bold text-emerald-400">{nutrientEC} mS/cm</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={4.0}
              step={0.1}
              value={nutrientEC}
              onChange={(e) => setNutrientEC(Number(e.target.value))}
              className="w-full accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>{language === 'vi' ? 'Suy dinh dưỡng (0.5)' : 'Deficient (0.5)'}</span>
              <span className="text-emerald-400 font-semibold">{language === 'vi' ? 'Chuẩn (2.0-2.8)' : 'Optimal (2.0-2.8)'}</span>
              <span>{language === 'vi' ? 'Ngộ độc muối (4.0)' : 'Salt Stress (4.0)'}</span>
            </div>
          </div>
        </div>

        {/* Kolb Experiential Reflection Form */}
        <details className="lab-help p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3 text-xs">
          <summary className="font-bold text-emerald-400 cursor-pointer">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>
              {language === 'vi'
                ? 'Ghi lại trải nghiệm của bạn'
                : 'Reflect on your experience'}
            </span>
          </summary>

          {language === 'vi' ? (
            <ol className="list-decimal list-inside space-y-1 text-slate-300 leading-relaxed">
              <li><strong>Trải nghiệm:</strong> Khi độ ẩm vượt quá 85% hoặc dưới 40%, cây cà chua biến đổi màu lá và sức sống ra sao?</li>
              <li><strong>Quan sát:</strong> Tại sao nông nghiệp công nghệ cao lại giảm được 70% lượng nước tưới so với tưới tràn truyền thống?</li>
              <li><strong>Khái niệm hóa:</strong> Tìm hiểu về công nghệ tưới nhỏ giọt hồi lưu (Drip Fertigation) và vai trò của vi sinh học rễ cây.</li>
              <li><strong>Ứng dụng:</strong> Nếu gia đình em hoặc địa phương có vườn cây, em có thể đề xuất giải pháp cảm biến tự động nào đơn giản?</li>
            </ol>
          ) : (
            <ol className="list-decimal list-inside space-y-1 text-slate-300 leading-relaxed">
              <li><strong>Experience:</strong> When substrate moisture exceeds 85% or drops below 40%, how do leaf color and plant vitality change?</li>
              <li><strong>Observation:</strong> Why does precision drip irrigation save up to 70% more water than traditional flood irrigation?</li>
              <li><strong>Conceptualization:</strong> Explore closed-loop drip fertigation and the role of root-zone microbiology.</li>
              <li><strong>Application:</strong> If your family or local community has a garden or farm, what simple automated sensor setup could you propose?</li>
            </ol>
          )}

          <form onSubmit={handleSaveReflection} className="space-y-2 pt-1">
            <textarea
              value={reflectionAnswer}
              onChange={(e) => setReflectionAnswer(e.target.value)}
              placeholder={
                language === 'vi'
                  ? 'Ghi lại cảm nghĩ của em về nông nghiệp hiện đại và cơ hội phát triển nông sản quê hương...'
                  : 'Write your thoughts on modern precision agriculture and opportunities for sustainable local farming...'
              }
              className="w-full h-16 p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <div className="flex items-center justify-between">
              {reflectionSaved ? (
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  {language === 'vi' ? 'Đã lưu phản tư ngành Nông nghiệp CNC vào báo cáo!' : 'Saved Smart Agriculture reflection to your career report!'}
                </span>
              ) : (
                <span className="text-[11px] text-slate-500">
                  {language === 'vi'
                    ? 'Phản tư này giúp học sinh đánh giá mức độ gắn bó với thiên nhiên và khoa học ứng dụng.'
                    : 'This reflection helps evaluate your interest in nature, sustainability, and applied biosciences.'}
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
                  className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                >
                  {language === 'vi' ? 'Lưu phản tư' : 'Save Reflection'}
                </button>
              </div>
            </div>
          </form>
        </details>
      </div>
    </div>
  );
};
