import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Zap, 
  RotateCcw, 
  X, 
  Eye, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface CircuitSimulation3DProps {
  onClose: () => void;
  onComplete?: () => void;
}

export const CircuitSimulation3D: React.FC<CircuitSimulation3DProps> = ({ onClose, onComplete }) => {
  const { t, language } = useLanguage();
  const mountRef = useRef<HTMLDivElement>(null);

  // Simulation State
  const [isSwitchClosed, setIsSwitchClosed] = useState(false);
  const [wireConnected, setWireConnected] = useState(true);
  const [voltage, setVoltage] = useState(12); // Volts: 6V, 12V, 24V
  const [is2DMode, setIs2DMode] = useState(false);
  const [missionStep, setMissionStep] = useState(1);
  const [reflectionAnswer, setReflectionAnswer] = useState('');
  const [reflectionSaved, setReflectionSaved] = useState(false);

  // Three.js refs for live updates
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const bulbLightRef = useRef<THREE.PointLight | null>(null);
  const bulbMeshRef = useRef<THREE.Mesh | null>(null);
  const switchLeverRef = useRef<THREE.Mesh | null>(null);

  // Orbit controls state
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const cameraAngleRef = useRef({ theta: Math.PI / 4, phi: Math.PI / 3, radius: 14 });

  useEffect(() => {
    if (is2DMode || !mountRef.current) return;

    const width = mountRef.current.clientWidth || 800;
    const height = mountRef.current.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    updateCameraPosition();

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    } catch (e) {
      console.warn('WebGL not supported, falling back to 2D:', e);
      setIs2DMode(true);
      return;
    }

    // Grid Floor / Workbench
    const gridHelper = new THREE.GridHelper(16, 16, 0x38bdf8, 0x1e293b);
    gridHelper.position.y = -0.5;
    scene.add(gridHelper);

    const tableGeo = new THREE.BoxGeometry(14, 0.5, 10);
    const tableMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const tableMesh = new THREE.Mesh(tableGeo, tableMat);
    tableMesh.position.y = -0.75;
    tableMesh.receiveShadow = true;
    scene.add(tableMesh);

    // Ambient & Directional Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 12, 7);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // 1. Power Supply / Battery 12V (Left: x = -4, z = 0)
    const batteryGeo = new THREE.BoxGeometry(2.2, 1.8, 1.6);
    const batteryMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3, metalness: 0.2 });
    const battery = new THREE.Mesh(batteryGeo, batteryMat);
    battery.position.set(-4, 0.4, 0);
    battery.castShadow = true;
    scene.add(battery);

    // Battery terminals (+ Red, - Black)
    const termGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.4, 16);
    const posTermMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.8 });
    const negTermMat = new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.8 });

    const posTerm = new THREE.Mesh(termGeo, posTermMat);
    posTerm.position.set(-3.5, 1.4, -0.4);
    scene.add(posTerm);

    const negTerm = new THREE.Mesh(termGeo, negTermMat);
    negTerm.position.set(-3.5, 1.4, 0.4);
    scene.add(negTerm);

    // 2. Light Bulb & Socket (Right: x = 4, z = 0)
    const socketGeo = new THREE.CylinderGeometry(0.9, 1.1, 0.6, 24);
    const socketMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.5 });
    const socket = new THREE.Mesh(socketGeo, socketMat);
    socket.position.set(4, -0.2, 0);
    scene.add(socket);

    const bulbGlassGeo = new THREE.SphereGeometry(0.8, 24, 24);
    const bulbGlassMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      roughness: 0.1,
      metalness: 0.1,
      emissive: 0x000000,
    });
    const bulbMesh = new THREE.Mesh(bulbGlassGeo, bulbGlassMat);
    bulbMesh.position.set(4, 0.7, 0);
    scene.add(bulbMesh);
    bulbMeshRef.current = bulbMesh;

    // Glowing PointLight inside Bulb
    const bulbLight = new THREE.PointLight(0xfef08a, 0, 10, 1.5);
    bulbLight.position.set(4, 0.7, 0);
    scene.add(bulbLight);
    bulbLightRef.current = bulbLight;

    // 3. Knife Switch (Center: x = 0, z = -2.5)
    const switchBaseGeo = new THREE.BoxGeometry(2, 0.25, 1.2);
    const switchBaseMat = new THREE.MeshStandardMaterial({ color: 0x78350f });
    const switchBase = new THREE.Mesh(switchBaseGeo, switchBaseMat);
    switchBase.position.set(0, -0.35, -2.5);
    scene.add(switchBase);

    // Lever
    const leverGeo = new THREE.BoxGeometry(1.6, 0.12, 0.25);
    const leverMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.2 });
    const lever = new THREE.Mesh(leverGeo, leverMat);
    lever.position.set(0, 0.2, -2.5);
    lever.rotation.z = Math.PI / 4; // Open by default
    scene.add(lever);
    switchLeverRef.current = lever;

    // 4. Electrical Wires (Tubes)
    const createWire = (points: THREE.Vector3[], color: number) => {
      const curve = new THREE.CatmullRomCurve3(points);
      const wireGeo = new THREE.TubeGeometry(curve, 32, 0.08, 8, false);
      const wireMat = new THREE.MeshStandardMaterial({ color, roughness: 0.4 });
      const mesh = new THREE.Mesh(wireGeo, wireMat);
      scene.add(mesh);
      return mesh;
    };

    // Wire 1: Battery (+) to Switch
    createWire([
      new THREE.Vector3(-3.5, 1.4, -0.4),
      new THREE.Vector3(-2.5, 0.5, -2),
      new THREE.Vector3(-0.9, -0.2, -2.5),
    ], 0xef4444);

    // Wire 2: Switch to Bulb
    createWire([
      new THREE.Vector3(0.9, -0.2, -2.5),
      new THREE.Vector3(2.5, 0.5, -1.8),
      new THREE.Vector3(3.6, 0.1, -0.5),
    ], 0xef4444);

    // Wire 3: Bulb return to Battery (-)
    createWire([
      new THREE.Vector3(3.6, 0.1, 0.5),
      new THREE.Vector3(1.5, -0.2, 2.5),
      new THREE.Vector3(-1.5, -0.2, 2.5),
      new THREE.Vector3(-3.5, 1.4, 0.4),
    ], 0x1e293b);

    // Mouse & Touch Orbit Controls
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
      updateCameraPosition();
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraAngleRef.current.radius = Math.max(6, Math.min(22, cameraAngleRef.current.radius + e.deltaY * 0.015));
      updateCameraPosition();
    };

    // Touch support for mobile
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
        updateCameraPosition();
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

    // Window resize
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
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

  function updateCameraPosition() {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraAngleRef.current;
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = radius * Math.cos(phi);
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(0, 0, 0);
  }

  // React to circuit states: switch & voltage & wire
  useEffect(() => {
    const isCircuitClosed = isSwitchClosed && wireConnected;

    if (switchLeverRef.current) {
      switchLeverRef.current.rotation.z = isSwitchClosed ? 0 : Math.PI / 4;
      switchLeverRef.current.position.y = isSwitchClosed ? -0.2 : 0.2;
    }

    if (bulbLightRef.current && bulbMeshRef.current) {
      if (isCircuitClosed) {
        const intensity = (voltage / 12) * 4;
        bulbLightRef.current.intensity = intensity;
        const color = voltage > 12 ? 0xffedd5 : 0xfef08a;
        bulbLightRef.current.color.setHex(color);
        (bulbMeshRef.current.material as THREE.MeshStandardMaterial).emissive.setHex(color);
        (bulbMeshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = Math.min(2.5, intensity * 0.8);
      } else {
        bulbLightRef.current.intensity = 0;
        (bulbMeshRef.current.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000);
        (bulbMeshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0;
      }
    }

    if (isCircuitClosed && missionStep === 1) {
      setMissionStep(2);
    }
  }, [isSwitchClosed, wireConnected, voltage, missionStep]);

  const handleToggleSwitch = () => {
    setIsSwitchClosed(prev => !prev);
  };

  const handleResetCamera = () => {
    cameraAngleRef.current = { theta: Math.PI / 4, phi: Math.PI / 3, radius: 14 };
    updateCameraPosition();
  };

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    setReflectionSaved(true);
    if (onComplete) onComplete();
  };

  const isLit = isSwitchClosed && wireConnected;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-5xl w-full p-4 sm:p-6 shadow-2xl flex flex-col space-y-4 my-auto max-h-[95vh] overflow-y-auto text-slate-100">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                {t.simulation.circuitTitle}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {language === 'vi' ? 'Phòng Thí Nghiệm 3D: Đóng Mạch & Điều Khiển Điện Áp' : '3D Lab: Circuit Wiring & Voltage Control'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIs2DMode(prev => !prev)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 flex items-center gap-1.5"
              title={is2DMode ? t.simulation.toggle3D : t.simulation.toggle2DFallback}
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">{is2DMode ? 'Chế độ 3D' : 'Chế độ 2D'}</span>
            </button>

            {/* Explicit Close Button */}
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
              <span>{t.simulation.missionGoal}: Đóng mạch kín và nâng điện áp nguồn lên 12V để thắp sáng bóng đèn nhà xưởng</span>
            </div>
            <p className="text-slate-400">
              {language === 'vi'
                ? 'Thao tác: Bấm nút "Đóng / Ngắt cầu dao" hoặc kéo thanh trượt điện áp bên dưới.'
                : 'Action: Click "Toggle Switch" or slide voltage controls to observe circuit behavior.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className={`px-3 py-1 rounded-full font-bold text-[11px] ${
              isLit ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
            }`}>
              {isLit 
                ? (language === 'vi' ? '✓ Mạch Kín (Đèn Sáng)' : '✓ Closed Circuit (Lit)') 
                : (language === 'vi' ? '○ Mạch Hở (Đèn Tắt)' : '○ Open Circuit (Off)')}
            </span>
          </div>
        </div>

        {/* Main Simulation View (3D or 2D Fallback) */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video sm:aspect-[16/9] max-h-[460px] flex items-center justify-center">
          {is2DMode ? (
            /* 2D Fallback SVG / Schematic Diagram */
            <div className="w-full h-full p-6 flex flex-col items-center justify-center space-y-6 bg-slate-950">
              <div className="relative w-72 sm:w-96 h-48 border-2 border-dashed border-slate-700 rounded-2xl p-4 flex items-center justify-between">
                {/* Battery */}
                <div className="flex flex-col items-center p-3 rounded-xl bg-sky-950 border border-sky-600">
                  <span className="font-mono font-bold text-sky-400 text-sm">+{voltage}V</span>
                  <span className="text-[10px] text-slate-400">Nguồn Pin</span>
                </div>

                {/* Switch */}
                <button
                  onClick={handleToggleSwitch}
                  className={`p-3 rounded-xl border font-bold text-xs transition-all ${
                    isSwitchClosed ? 'bg-emerald-950 border-emerald-500 text-emerald-300' : 'bg-rose-950 border-rose-500 text-rose-300'
                  }`}
                >
                  {isSwitchClosed ? 'Cầu dao: ĐÓNG' : 'Cầu dao: MỞ'}
                </button>

                {/* Bulb */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${
                  isLit ? 'bg-amber-300 border-amber-100 shadow-amber-400/50 scale-110' : 'bg-slate-800 border-slate-600 text-slate-500'
                }`}>
                  <Zap className={`w-6 h-6 ${isLit ? 'text-amber-950 fill-current' : 'text-slate-500'}`} />
                </div>
              </div>
              <p className="text-xs text-slate-400">Chế độ 2D sơ đồ mạch điện nguyên lý</p>
            </div>
          ) : (
            <>
              {/* 3D WebGL Canvas Container */}
              <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

              {/* Floating Camera / Controls Tip */}
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

        {/* Interactive Controls Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs">
          {/* Switch Toggle */}
          <div className="flex flex-col justify-center space-y-1.5">
            <span className="font-bold text-slate-300">1. Cầu dao điều khiển (Switch):</span>
            <button
              onClick={handleToggleSwitch}
              className={`py-2 px-4 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                isSwitchClosed
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-amber-600 hover:bg-amber-500 text-white'
              }`}
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>{isSwitchClosed ? (language === 'vi' ? 'Ngắt Cầu Dao (Mở Mạch)' : 'Open Circuit') : (language === 'vi' ? 'Đóng Cầu Dao (Kín Mạch)' : 'Close Circuit')}</span>
            </button>
          </div>

          {/* Voltage Selector */}
          <div className="flex flex-col justify-center space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-300">2. Điện áp nguồn DC:</span>
              <span className="font-mono font-bold text-cyan-400">{voltage} V</span>
            </div>
            <div className="flex items-center gap-2">
              {[6, 12, 24].map((v) => (
                <button
                  key={v}
                  onClick={() => setVoltage(v)}
                  className={`flex-1 py-1.5 rounded-lg font-mono font-semibold transition-colors ${
                    voltage === v
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {v}V
                </button>
              ))}
            </div>
          </div>

          {/* Circuit Health Indicator */}
          <div className="flex flex-col justify-center space-y-1">
            <span className="font-bold text-slate-300">3. Thông số kỹ thuật mạch:</span>
            <div className="text-[11px] text-slate-400 space-y-0.5">
              <div>Dòng điện dự tính: <strong className="text-white font-mono">{isLit ? (voltage / 6).toFixed(1) + ' A' : '0.0 A'}</strong></div>
              <div>Công suất tiêu thụ: <strong className="text-white font-mono">{isLit ? ((voltage * voltage) / 6).toFixed(0) + ' W' : '0 W'}</strong></div>
            </div>
          </div>
        </div>

        {/* Kolb Experiential Reflection Form */}
        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3 text-xs">
          <h4 className="font-bold text-amber-400 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>{t.simulation.kolbTitle}</span>
          </h4>

          <ol className="list-decimal list-inside space-y-1 text-slate-300 leading-relaxed">
            <li><strong>Trải nghiệm (Experience):</strong> Khi đóng cầu dao và tăng điện áp từ 6V lên 24V, bóng đèn và dòng điện thay đổi thế nào?</li>
            <li><strong>Quan sát (Reflect):</strong> Tại sao nếu hở bất kỳ đoạn dây nào thì toàn bộ hệ thống không thể hoạt động?</li>
            <li><strong>Khái niệm hóa (Think):</strong> Định luật Ohm (I = U / R) và an toàn lao động điện trong nhà máy công nghiệp.</li>
            <li><strong>Thử nghiệm (Apply):</strong> Trong nhà máy sản xuất tự động, kỹ sư điện sử dụng rơ-le và cảm biến để tự ngắt mạch khi quá tải ra sao?</li>
          </ol>

          <form onSubmit={handleSaveReflection} className="space-y-2 pt-1">
            <textarea
              value={reflectionAnswer}
              onChange={(e) => setReflectionAnswer(e.target.value)}
              placeholder="Ghi lại bài học hoặc cảm nhận của em sau khi hoàn thành phòng thí nghiệm mạch điện..."
              className="w-full h-16 p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
            <div className="flex items-center justify-between">
              {reflectionSaved ? (
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Đã lưu phản tư vào báo cáo!
                </span>
              ) : (
                <span className="text-[11px] text-slate-500">
                  Hoàn thành chu trình Kolb giúp em đánh giá độ phù hợp với nhóm nghề Kỹ thuật (R - Realistic).
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
