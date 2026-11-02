import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Cpu, 
  RotateCcw, 
  X, 
  CheckCircle2, 
  AlertTriangle,
  Play, 
  Layers, 
  HelpCircle, 
  Sparkles,
  Activity,
  Zap,
  Radio,
  Eye,
  Info
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface SemiconductorSimulation3DProps {
  onClose: () => void;
  onComplete?: () => void;
}

// 4 phases of semiconductor value chain
type ValueChainPhase = 'design' | 'fab' | 'packaging' | 'testing';

export const SemiconductorSimulation3D: React.FC<SemiconductorSimulation3DProps> = ({ onClose, onComplete }) => {
  const { t, language } = useLanguage();
  const mountRef = useRef<HTMLDivElement>(null);

  // Simulation State
  const [selectedPhase, setSelectedPhase] = useState<ValueChainPhase>('testing');
  const [chipRotationDeg, setChipRotationDeg] = useState<number>(180); // Start misaligned (180deg) to require student interaction!
  const [isChipPlaced, setIsChipPlaced] = useState<boolean>(false);
  const [probesConnected, setProbesConnected] = useState<boolean>(false);
  const [diagnosticState, setDiagnosticState] = useState<'idle' | 'running' | 'success' | 'failed'>('idle');
  const [diagnosticMessage, setDiagnosticMessage] = useState<string>('');
  const [activeViewMode, setActiveViewMode] = useState<'testbed' | 'wafer' | 'die'>('testbed');
  const [reflectionAnswer, setReflectionAnswer] = useState<string>('');
  const [reflectionSaved, setReflectionSaved] = useState<boolean>(false);

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Meshes groups
  const testbedGroupRef = useRef<THREE.Group | null>(null);
  const waferGroupRef = useRef<THREE.Group | null>(null);
  const chipMeshRef = useRef<THREE.Group | null>(null);
  const probeLeftRef = useRef<THREE.Group | null>(null);
  const probeRightRef = useRef<THREE.Group | null>(null);
  const pin1MarkerRef = useRef<THREE.Mesh | null>(null);
  const glowLightRef = useRef<THREE.PointLight | null>(null);

  // Orbit rotation interaction
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraAngleRef = useRef({ theta: Math.PI / 3.5, phi: Math.PI / 3, radius: 14 });

  const updateCamera = () => {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraAngleRef.current;
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = radius * Math.cos(phi);
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(0, 0, 0);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || 800;
    const height = mountRef.current.clientHeight || 500;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0f1d);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    updateCamera();

    // 3. Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    } catch (err) {
      console.warn('WebGL init failed:', err);
      return;
    }

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(8, 14, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Blue diagnostic glow light
    const glowLight = new THREE.PointLight(0x06b6d4, 0, 10);
    glowLight.position.set(0, 2, 0);
    scene.add(glowLight);
    glowLightRef.current = glowLight;

    // Grid Floor
    const gridHelper = new THREE.GridHelper(20, 20, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    // ==========================================
    // BUILD 3D TESTBED & ATE SOCKET
    // ==========================================
    const testbedGroup = new THREE.Group();
    testbedGroupRef.current = testbedGroup;
    scene.add(testbedGroup);

    // Main Test PCB Board (Dark Green Glossy)
    const pcbGeo = new THREE.BoxGeometry(9, 0.4, 7);
    const pcbMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b, // Deep PCB emerald green
      roughness: 0.3,
      metalness: 0.2
    });
    const pcbMesh = new THREE.Mesh(pcbGeo, pcbMat);
    pcbMesh.receiveShadow = true;
    testbedGroup.add(pcbMesh);

    // Golden Copper Traces on PCB
    const traceMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.2,
      metalness: 0.9
    });
    for (let i = -3; i <= 3; i += 0.8) {
      const traceGeo = new THREE.BoxGeometry(0.12, 0.02, 6);
      const traceMesh = new THREE.Mesh(traceGeo, traceMat);
      traceMesh.position.set(i, 0.21, 0);
      testbedGroup.add(traceMesh);
    }

    // Socket Base (Black Thermoplastic with central pin bed)
    const socketBaseGeo = new THREE.BoxGeometry(4.2, 0.5, 4.2);
    const socketBaseMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.6,
      metalness: 0.1
    });
    const socketBase = new THREE.Mesh(socketBaseGeo, socketBaseMat);
    socketBase.position.set(0, 0.4, 0);
    testbedGroup.add(socketBase);

    // Socket Cavity (where chip goes in)
    const cavityGeo = new THREE.BoxGeometry(3.2, 0.1, 3.2);
    const cavityMat = new THREE.MeshStandardMaterial({
      color: 0x09090b,
      roughness: 0.8
    });
    const cavity = new THREE.Mesh(cavityGeo, cavityMat);
    cavity.position.set(0, 0.61, 0);
    testbedGroup.add(cavity);

    // Gold Contact Pins Grid inside Socket (8x8 tiny pins)
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.1
    });
    const pinGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.15, 6);
    for (let px = -1.2; px <= 1.2; px += 0.4) {
      for (let pz = -1.2; pz <= 1.2; pz += 0.4) {
        const pinMesh = new THREE.Mesh(pinGeo, pinMat);
        pinMesh.position.set(px, 0.68, pz);
        testbedGroup.add(pinMesh);
      }
    }

    // SOCKET PIN 1 ALIGNMENT TRIANGLE MARK (Top-Left corner of socket: x=-1.4, z=-1.4)
    const socketMarkGeo = new THREE.ConeGeometry(0.18, 0.2, 3);
    const socketMarkMat = new THREE.MeshBasicMaterial({ color: 0xef4444 }); // Red indicator on socket
    const socketMark = new THREE.Mesh(socketMarkGeo, socketMarkMat);
    socketMark.rotation.x = Math.PI / 2;
    socketMark.position.set(-1.6, 0.66, -1.6);
    testbedGroup.add(socketMark);

    // ==========================================
    // BUILD CHIP (BGA Package Substrate + Bare Die + Pin 1 Notch)
    // ==========================================
    const chipGroup = new THREE.Group();
    chipMeshRef.current = chipGroup;
    chipGroup.position.set(0, isChipPlaced ? 0.8 : 2.5, 0);
    chipGroup.rotation.y = (chipRotationDeg * Math.PI) / 180;
    testbedGroup.add(chipGroup);

    // 1. Organic BGA Substrate (Dark Green / Blue Laminate)
    const substrateGeo = new THREE.BoxGeometry(3.0, 0.2, 3.0);
    const substrateMat = new THREE.MeshStandardMaterial({
      color: 0x0f766e,
      roughness: 0.4,
      metalness: 0.3
    });
    const substrateMesh = new THREE.Mesh(substrateGeo, substrateMat);
    chipGroup.add(substrateMesh);

    // 2. Silicon Bare Die in center (Glossy Iridescent / Mirror Silver-Blue)
    const dieGeo = new THREE.BoxGeometry(1.8, 0.12, 1.8);
    const dieMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.05,
      metalness: 0.95
    });
    const dieMesh = new THREE.Mesh(dieGeo, dieMat);
    dieMesh.position.set(0, 0.14, 0);
    chipGroup.add(dieMesh);

    // Microscopic circuits etching pattern on die
    const dieCircuitMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    for (let c = -0.6; c <= 0.6; c += 0.3) {
      const lineGeo = new THREE.BoxGeometry(0.04, 0.01, 1.4);
      const lineMesh = new THREE.Mesh(lineGeo, dieCircuitMat);
      lineMesh.position.set(c, 0.21, 0);
      chipGroup.add(lineMesh);
    }

    // 3. CHIP PIN 1 INDEX NOTCH (Golden dot on Top-Left corner of substrate: x=-1.2, z=-1.2)
    const pin1DotGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 12);
    const pin1DotMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15, // Golden yellow Pin 1 dot
      metalness: 0.9,
      roughness: 0.2
    });
    const pin1Dot = new THREE.Mesh(pin1DotGeo, pin1DotMat);
    pin1Dot.position.set(-1.2, 0.12, -1.2);
    chipGroup.add(pin1Dot);
    pin1MarkerRef.current = pin1Dot;

    // ==========================================
    // BUILD ATE TEST PROBES (Left and Right robotic arms)
    // ==========================================
    const probeLeft = new THREE.Group();
    probeLeftRef.current = probeLeft;
    testbedGroup.add(probeLeft);

    const probeRight = new THREE.Group();
    probeRightRef.current = probeRight;
    testbedGroup.add(probeRight);

    // Left probe arm
    const armMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });
    const tipMat = new THREE.MeshStandardMaterial({ color: 0xeab308, metalness: 0.95, roughness: 0.1 });

    const armGeoL = new THREE.CylinderGeometry(0.1, 0.1, 2.5);
    const armMeshL = new THREE.Mesh(armGeoL, armMat);
    armMeshL.rotation.z = Math.PI / 4;
    armMeshL.position.set(-3.2, 2.0, 0);
    probeLeft.add(armMeshL);

    const needleGeoL = new THREE.CylinderGeometry(0.03, 0.01, 1.0);
    const needleMeshL = new THREE.Mesh(needleGeoL, tipMat);
    needleMeshL.position.set(-2.2, 1.1, 0);
    needleMeshL.rotation.z = Math.PI / 6;
    probeLeft.add(needleMeshL);

    // Right probe arm
    const armMeshR = new THREE.Mesh(armGeoL, armMat);
    armMeshR.rotation.z = -Math.PI / 4;
    armMeshR.position.set(3.2, 2.0, 0);
    probeRight.add(armMeshR);

    const needleMeshR = new THREE.Mesh(needleGeoL, tipMat);
    needleMeshR.position.set(2.2, 1.1, 0);
    needleMeshR.rotation.z = -Math.PI / 6;
    probeRight.add(needleMeshR);

    // ==========================================
    // BUILD 300MM SILICON WAFER (Alternative view)
    // ==========================================
    const waferGroup = new THREE.Group();
    waferGroupRef.current = waferGroup;
    waferGroup.visible = false;
    scene.add(waferGroup);

    const waferDiscGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.08, 64);
    const waferMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.1,
      metalness: 0.9
    });
    const waferDisc = new THREE.Mesh(waferDiscGeo, waferMat);
    waferGroup.add(waferDisc);

    // Grid of dies on wafer
    const gridDieMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true });
    const dieGridGeo = new THREE.PlaneGeometry(6, 6, 16, 16);
    const dieGrid = new THREE.Mesh(dieGridGeo, gridDieMat);
    dieGrid.rotation.x = -Math.PI / 2;
    dieGrid.position.y = 0.05;
    waferGroup.add(dieGrid);

    // Mouse drag handlers for 3D rotation
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      cameraAngleRef.current.theta -= deltaX * 0.008;
      cameraAngleRef.current.phi = Math.max(0.2, Math.min(Math.PI / 2.1, cameraAngleRef.current.phi - deltaY * 0.008));

      updateCamera();
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      cameraAngleRef.current.radius = Math.max(7, Math.min(22, cameraAngleRef.current.radius + e.deltaY * 0.015));
      updateCamera();
      e.preventDefault();
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('wheel', onWheel);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle breathing glow when diagnostic running or successful
      if (glowLightRef.current) {
        if (diagnosticState === 'running') {
          glowLightRef.current.intensity = 1.5 + Math.sin(elapsedTime * 8) * 1.0;
        } else if (diagnosticState === 'success') {
          glowLightRef.current.intensity = 2.0;
        } else {
          glowLightRef.current.intensity = 0;
        }
      }

      // Slowly rotate wafer if in wafer view
      if (waferGroupRef.current && waferGroupRef.current.visible) {
        waferGroupRef.current.rotation.y = elapsedTime * 0.2;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('wheel', onWheel);

      if (mountRef.current && domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Sync Chip Rotation in 3D
  useEffect(() => {
    if (chipMeshRef.current) {
      chipMeshRef.current.rotation.y = (chipRotationDeg * Math.PI) / 180;
    }
  }, [chipRotationDeg]);

  // Sync Chip Placed height in 3D
  useEffect(() => {
    if (chipMeshRef.current) {
      chipMeshRef.current.position.y = isChipPlaced ? 0.82 : 2.6;
    }
  }, [isChipPlaced]);

  // Sync Probe connection positions
  useEffect(() => {
    if (probeLeftRef.current && probeRightRef.current) {
      if (probesConnected) {
        probeLeftRef.current.position.set(0.6, -0.4, 0);
        probeRightRef.current.position.set(-0.6, -0.4, 0);
      } else {
        probeLeftRef.current.position.set(0, 0, 0);
        probeRightRef.current.position.set(0, 0, 0);
      }
    }
  }, [probesConnected]);

  // Sync View Mode
  useEffect(() => {
    if (testbedGroupRef.current && waferGroupRef.current) {
      if (activeViewMode === 'wafer') {
        testbedGroupRef.current.visible = false;
        waferGroupRef.current.visible = true;
      } else {
        testbedGroupRef.current.visible = true;
        waferGroupRef.current.visible = false;
      }
    }
  }, [activeViewMode]);

  // Handlers for student tasks
  const handleRotateChip = () => {
    if (isChipPlaced) {
      alert('Em hãy nhấc chip ra khỏi socket trước khi xoay chiều!');
      return;
    }
    setChipRotationDeg((prev) => (prev + 90) % 360);
    setDiagnosticState('idle');
    setDiagnosticMessage('');
  };

  const handleTogglePlaceChip = () => {
    setIsChipPlaced((prev) => !prev);
    setDiagnosticState('idle');
    setDiagnosticMessage('');
  };

  const handleToggleProbes = () => {
    if (!isChipPlaced) {
      alert('Vui lòng gắn chip vào socket trước khi kết nối đầu dò kiểm thử!');
      return;
    }
    setProbesConnected((prev) => !prev);
    setDiagnosticState('idle');
    setDiagnosticMessage('');
  };

  const handleRunDiagnostic = () => {
    if (!isChipPlaced) {
      setDiagnosticState('failed');
      setDiagnosticMessage('LỖI KIỂM THỬ: Chưa gắn chip vào socket thử nghiệm.');
      return;
    }

    if (!probesConnected) {
      setDiagnosticState('failed');
      setDiagnosticMessage('LỖI TÍN HIỆU: Đầu dò kiểm thử ATE chưa kết nối vào các điểm đo test pads.');
      return;
    }

    setDiagnosticState('running');
    setDiagnosticMessage('Đang chạy chu trình quét kiểm thử ATE scan test (100.000 patterns)...');

    setTimeout(() => {
      // Pin 1 notch must be at 0 degrees to align with top-left socket notch!
      if (chipRotationDeg === 0) {
        setDiagnosticState('success');
        setDiagnosticMessage('ATE TEST PASSED: Chip hoạt động hoàn hảo! Tần số xung nhịp: 3.2 GHz | Điện áp lõi: 1.05V | Công suất tiêu thụ: 12.4W | Nhiệt độ vận hành: 42°C.');
        if (onComplete) onComplete();
      } else {
        setDiagnosticState('failed');
        setDiagnosticMessage(`LỖI CHẬP NGUỒN: Góc đặt lệch ${chipRotationDeg}°. Điểm khuyết Pin 1 bị ngược chiều với socket! Hệ thống tự động ngắt nguồn bảo vệ chip.`);
      }
    }, 1500);
  };

  const handleSaveReflection = () => {
    if (!reflectionAnswer.trim()) return;
    setReflectionSaved(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-2 sm:p-4">
      <div className="relative w-full max-w-6xl h-[95vh] bg-slate-900 border border-slate-700 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  MÔ PHỎNG 3D TƯƠNG TÁC
                </span>
                <span className="text-xs text-slate-400">Trạm 2 • Kỹ thuật Bán dẫn & Vi mạch</span>
              </div>
              <h2 className="text-lg font-bold text-white">
                Phòng Lab Đo kiểm & Đóng gói Chip Bán dẫn (ATE Testing Lab)
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            title="Đóng mô phỏng"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 4 PHASES VALUE CHAIN SELECTOR */}
        <div className="grid grid-cols-4 border-b border-slate-800 bg-slate-950 text-xs">
          <button
            onClick={() => { setSelectedPhase('design'); setActiveViewMode('testbed'); }}
            className={`py-3 px-3 text-center border-b-2 transition ${
              selectedPhase === 'design'
                ? 'border-cyan-500 text-cyan-400 bg-cyan-950/20 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            1. Thiết kế (Design - RTL)
          </button>
          <button
            onClick={() => { setSelectedPhase('fab'); setActiveViewMode('wafer'); }}
            className={`py-3 px-3 text-center border-b-2 transition ${
              selectedPhase === 'fab'
                ? 'border-cyan-500 text-cyan-400 bg-cyan-950/20 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            2. Chế tạo phiến (Fab - Wafer)
          </button>
          <button
            onClick={() => { setSelectedPhase('packaging'); setActiveViewMode('testbed'); }}
            className={`py-3 px-3 text-center border-b-2 transition ${
              selectedPhase === 'packaging'
                ? 'border-cyan-500 text-cyan-400 bg-cyan-950/20 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            3. Đóng gói (Packaging - BGA)
          </button>
          <button
            onClick={() => { setSelectedPhase('testing'); setActiveViewMode('testbed'); }}
            className={`py-3 px-3 text-center border-b-2 transition ${
              selectedPhase === 'testing'
                ? 'border-cyan-500 text-cyan-400 bg-cyan-950/20 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            4. Đo kiểm (ATE Testing)
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0 overflow-hidden">
          {/* 3D WebGL Canvas (8 cols on lg) */}
          <div className="lg:col-span-8 relative bg-slate-950 flex flex-col">
            <div ref={mountRef} className="flex-1 w-full h-full cursor-grab active:cursor-grabbing" />

            {/* In-canvas Guidance Overlay */}
            <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 p-3 rounded-xl max-w-sm text-xs text-slate-300 pointer-events-none">
              <div className="flex items-center gap-2 font-semibold text-cyan-400 mb-1">
                <Info className="w-4 h-4" /> Hướng dẫn thao tác 3D:
              </div>
              <p>• Kéo chuột để xoay 360° quan sát chân tiếp xúc.</p>
              <p>• Lăn chuột để phóng to / thu nhỏ linh kiện.</p>
              <p>• 🔴 Góc đỏ trên socket: Vị trí chân số 1 chuẩn.</p>
              <p>• 🟡 Chấm vàng trên chip: Điểm khuyết Pin 1 của chip.</p>
            </div>

            {/* Quick View Switches */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button
                onClick={() => setActiveViewMode('testbed')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                  activeViewMode === 'testbed'
                    ? 'bg-cyan-600 text-white border-cyan-400'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                Bo mạch kiểm thử ATE
              </button>
              <button
                onClick={() => setActiveViewMode('wafer')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                  activeViewMode === 'wafer'
                    ? 'bg-cyan-600 text-white border-cyan-400'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                Phiến Wafer 300mm
              </button>
            </div>
          </div>

          {/* Right Control & Diagnostics Panel (4 cols on lg) */}
          <div className="lg:col-span-4 bg-slate-900/70 border-l border-slate-800 flex flex-col overflow-y-auto p-4 sm:p-5 gap-4">
            {/* Step-by-step Interactive Tasks */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <Activity className="w-4 h-4 text-cyan-400" />
                Nhiệm vụ kiểm thử chip:
              </h3>

              <div className="space-y-3 text-xs">
                {/* Task 1: Check Pin 1 & Rotate */}
                <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-700/60">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-200">1. Định hướng Pin 1:</span>
                    <span className={`px-2 py-0.5 rounded font-mono ${chipRotationDeg === 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      {chipRotationDeg}° {chipRotationDeg === 0 ? '(Chuẩn Pin 1)' : '(Lệch)'}
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] mb-2.5">
                    Xoay chip sao cho chấm vàng (Pin 1) trùng góc với tam giác đỏ trên socket.
                  </p>
                  <button
                    onClick={handleRotateChip}
                    className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-600 rounded-lg font-medium flex items-center justify-center gap-2 transition"
                  >
                    <RotateCcw className="w-4 h-4" /> Xoay chip 90° (+90°)
                  </button>
                </div>

                {/* Task 2: Insert into socket */}
                <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-700/60">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-200">2. Gắn chip vào socket:</span>
                    <span className={`px-2 py-0.5 rounded font-mono ${isChipPlaced ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-300'}`}>
                      {isChipPlaced ? 'Đã gắn' : 'Đang nhấc'}
                    </span>
                  </div>
                  <button
                    onClick={handleTogglePlaceChip}
                    className={`w-full py-2 rounded-lg font-medium border flex items-center justify-center gap-2 transition ${
                      isChipPlaced
                        ? 'bg-amber-600/30 text-amber-300 border-amber-500/40 hover:bg-amber-600/40'
                        : 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-400'
                    }`}
                  >
                    {isChipPlaced ? 'Nhấc chip ra khỏi socket' : 'Hạ chip vào khay socket'}
                  </button>
                </div>

                {/* Task 3: Connect ATE Test Probes */}
                <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-700/60">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-200">3. Đầu dò kiểm thử ATE:</span>
                    <span className={`px-2 py-0.5 rounded font-mono ${probesConnected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-300'}`}>
                      {probesConnected ? 'Đã kết nối' : 'Chưa tiếp xúc'}
                    </span>
                  </div>
                  <button
                    onClick={handleToggleProbes}
                    className={`w-full py-2 rounded-lg font-medium border flex items-center justify-center gap-2 transition ${
                      probesConnected
                        ? 'bg-slate-800 text-slate-300 border-slate-700'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    {probesConnected ? 'Rút đầu dò kiểm thử' : 'Tiếp xúc đầu dò ATE (Test Probes)'}
                  </button>
                </div>

                {/* Task 4: Run Diagnostic */}
                <button
                  onClick={handleRunDiagnostic}
                  disabled={diagnosticState === 'running'}
                  className="w-full py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/30 flex items-center justify-center gap-2 transition disabled:opacity-50"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Chạy chương trình chẩn đoán ATE
                </button>
              </div>
            </div>

            {/* Diagnostic Result Screen */}
            {diagnosticMessage && (
              <div
                className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                  diagnosticState === 'success'
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200'
                    : diagnosticState === 'failed'
                    ? 'bg-rose-950/60 border-rose-500/50 text-rose-200'
                    : 'bg-cyan-950/60 border-cyan-500/50 text-cyan-200'
                }`}
              >
                <div className="flex items-center gap-2 font-bold mb-1">
                  {diagnosticState === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  {diagnosticState === 'failed' && <AlertTriangle className="w-4 h-4 text-rose-400" />}
                  {diagnosticState === 'running' && <Activity className="w-4 h-4 animate-spin text-cyan-400" />}
                  <span>
                    {diagnosticState === 'success' && 'KẾT QUẢ ĐO KIỂM: ĐẠT CHUẨN (PASS)'}
                    {diagnosticState === 'failed' && 'KẾT QUẢ ĐO KIỂM: LỖI (FAIL)'}
                    {diagnosticState === 'running' && 'HỆ THỐNG ĐANG QUÉT TÍN HIỆU...'}
                  </span>
                </div>
                <p>{diagnosticMessage}</p>
              </div>
            )}

            {/* Knowledge Box */}
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-3.5 text-xs text-slate-300">
              <h4 className="font-semibold text-cyan-400 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Kiến thức chuỗi bán dẫn:
              </h4>
              <p className="leading-relaxed text-[11px] text-slate-400">
                Ở giai đoạn 4 (Testing), con chip sau khi đóng gói được thử nghiệm tự động bằng máy ATE với hàng triệu xung tín hiệu để phát hiện lỗi logic, rò rỉ điện hoặc quá nhiệt trước khi lắp vào điện thoại hay ô tô.
              </p>
            </div>

            {/* Reflection Form */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 text-xs">
              <h4 className="font-bold text-white mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                Cảm nhận sau trải nghiệm:
              </h4>
              <p className="text-slate-400 text-[11px] mb-2">
                Sau khi quan sát vi mạch và thử xoay chip đúng điểm khuyết Pin 1, em thấy công việc kỹ sư đo kiểm bán dẫn đòi hỏi đức tính gì nhất?
              </p>
              <textarea
                value={reflectionAnswer}
                onChange={(e) => setReflectionAnswer(e.target.value)}
                placeholder="Ví dụ: Em thấy công việc này đòi hỏi sự chính xác tuyệt đối, cẩn thận và tính kỷ luật cao vì một sai sót nhỏ sẽ gây chập nguồn linh kiện..."
                className="w-full h-20 p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
              />
              <button
                onClick={handleSaveReflection}
                disabled={reflectionSaved || !reflectionAnswer.trim()}
                className="mt-2.5 w-full py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {reflectionSaved ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : null}
                {reflectionSaved ? 'Đã lưu cảm nhận vào hồ sơ cá nhân' : 'Lưu phản tư của em'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
