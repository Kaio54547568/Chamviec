import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Wrench, 
  RotateCcw, 
  X, 
  Eye, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Zap, 
  Gauge, 
  Droplet, 
  Flame, 
  AlertTriangle,
  Play,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export interface AutomotiveTechnicianSimulationProps {
  onClose?: () => void;
  onComplete?: () => void;
  embedded?: boolean;
}

export interface EngineComponentItem {
  id: string;
  name: string;
  nameVi: string;
  category: 'electrical' | 'intake' | 'ignition' | 'cooling' | 'lubrication';
  meshName: string;
  nominalStatus: string;
  problemStatus: string;
  checked: boolean;
  fixed: boolean;
  reading: string;
  instructions: string;
  successMessage: string;
  colorHex: number;
}

export const AutomotiveTechnicianSimulation: React.FC<AutomotiveTechnicianSimulationProps> = ({
  onClose,
  onComplete,
  embedded = false
}) => {
  const { language } = useLanguage();
  const mountRef = useRef<HTMLDivElement>(null);

  // 3D Scene Refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const engineGroupRef = useRef<THREE.Group | null>(null);
  const clickableMeshesRef = useRef<THREE.Mesh[]>([]);
  const animFrameIdRef = useRef<number | null>(null);

  // Dynamic component meshes references
  const batteryMeshRef = useRef<THREE.Mesh | null>(null);
  const airFilterMeshRef = useRef<THREE.Mesh | null>(null);
  const sparkPlugsGroupRef = useRef<THREE.Group | null>(null);
  const coolantTankMeshRef = useRef<THREE.Mesh | null>(null);
  const oilDipstickMeshRef = useRef<THREE.Mesh | null>(null);
  const alternatorMeshRef = useRef<THREE.Mesh | null>(null);
  const headLightsRef = useRef<THREE.PointLight[]>([]);

  // Simulation State
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>('battery');
  const [engineRunning, setEngineRunning] = useState<boolean>(false);
  const [rpmValue, setRpmValue] = useState<number>(0);
  const [activeToast, setActiveToast] = useState<{ title: string; desc: string; type: 'success' | 'info' | 'warning' } | null>({
    title: 'Hệ thống chẩn đoán khoang máy sẵn sàng',
    desc: 'Nhấp chuột hoặc chạm vào các chi tiết 3D để kiểm tra và khắc phục sự cố.',
    type: 'info'
  });

  // Track components status
  const [components, setComponents] = useState<EngineComponentItem[]>([
    {
      id: 'battery',
      name: '12V Lead-Acid Battery',
      nameVi: 'Ắc-quy khởi động 12V 60Ah',
      category: 'electrical',
      meshName: 'battery',
      nominalStatus: '12.6V – 12.8V (Ắc quy đầy)',
      problemStatus: '10.2V (Yếu điện / Không đủ khởi động)',
      checked: false,
      fixed: false,
      reading: '10.2V — Cần nạp hoặc thay mới',
      instructions: 'Đo điện áp 2 cọc âm/dương bằng đồng hồ vạn năng. Nếu < 11.8V cần thay bình mới và siết lại cọc tiếp xúc.',
      successMessage: 'Đã thay ắc-quy 12V 60Ah mới! Điện áp đo được 12.65V, dòng phóng CCA đạt 540A đạt chuẩn.',
      colorHex: 0x2563eb
    },
    {
      id: 'air_filter',
      name: 'Engine Air Filter Box',
      nameVi: 'Hộp lọc gió động cơ',
      category: 'intake',
      meshName: 'air_filter',
      nominalStatus: 'Lõi lọc thông thoáng, không bụi',
      problemStatus: 'Lõi lọc bám muội than & bụi bẩn nặng',
      checked: false,
      fixed: false,
      reading: 'Lưu lượng nạp bị nghẽn 32%',
      instructions: 'Mở 4 lẫy kẹp nắp hộp lọc gió, kiểm tra bề mặt nếp gấp giấy lọc và thay thế bằng lõi lọc OEM mới.',
      successMessage: 'Đã thay lõi lọc gió mới tinh! Cung cấp đủ oxy sạch cho buồng đốt, tăng 28% lưu lượng khí nạp.',
      colorHex: 0xf59e0b
    },
    {
      id: 'spark_plugs',
      name: 'Spark Plugs & Ignition Coils',
      nameVi: 'Cụm Bugi & Bô-bin đánh lửa (4 xi-lanh)',
      category: 'ignition',
      meshName: 'spark_plugs',
      nominalStatus: 'Khe hở cực 1.1mm, đánh lửa xanh bén',
      problemStatus: 'Bám muội đen carbon, đánh lửa yếu',
      checked: false,
      fixed: false,
      reading: 'Điện trở bô-bin tăng cao, bỏ máy nhẹ',
      instructions: 'Rút giắc nguồn bô-bin, dùng tuýp mở bugi kiểm tra khe hở điện cực và vệ sinh muội than carbon.',
      successMessage: 'Đã vệ sinh điện cực bugi và hiệu chỉnh khe hở 1.1mm. Tia lửa điện xanh đều cả 4 máy!',
      colorHex: 0xef4444
    },
    {
      id: 'coolant',
      name: 'Coolant Reservoir Tank',
      nameVi: 'Bình nước làm mát phụ',
      category: 'cooling',
      meshName: 'coolant',
      nominalStatus: 'Mức chất lỏng ở vạch FULL',
      problemStatus: 'Mức nước dưới vạch LOW (Nguy cơ quá nhiệt)',
      checked: false,
      fixed: false,
      reading: 'Mức: LOW (Chỉ còn 30% dung tích)',
      instructions: 'Kiểm tra mức dung dịch làm mát chống sôi/đông đặc. Châm bổ sung nước làm mát hữu cơ (OAT) đến vạch FULL.',
      successMessage: 'Đã châm dung dịch làm mát đạt vạch F (Full). Đảm bảo giải nhiệt an toàn khi động cơ tải nặng.',
      colorHex: 0x06b6d4
    },
    {
      id: 'oil_dipstick',
      name: 'Engine Oil Dipstick & Sump',
      nameVi: 'Que thăm dầu bôi trơn động cơ',
      category: 'lubrication',
      meshName: 'oil_dipstick',
      nominalStatus: 'Mức dầu giữa vạch Min-Max, màu vàng hổ phách',
      problemStatus: 'Dầu đen, có cặn bẩn sau 10.000km',
      checked: false,
      fixed: false,
      reading: 'Dầu bôi trơn xuống cấp, độ nhớt suy giảm',
      instructions: 'Rút que thăm dầu, lau sạch bằng giẻ chuyên dụng, cắm ngập lại và rút ra kiểm tra độ trong và mực dầu.',
      successMessage: 'Đã thay dầu động cơ 5W-30 chuẩn API SP. Mức dầu chuẩn xác, màng bôi trơn bảo vệ pít-tông tối ưu.',
      colorHex: 0x84cc16
    }
  ]);

  // Kolb Reflection state
  const [reflectionInterest, setReflectionInterest] = useState<number>(5);
  const [reflectionComment, setReflectionComment] = useState<string>('');
  const [reflectionSaved, setReflectionSaved] = useState<boolean>(false);
  const [showReflectionModal, setShowReflectionModal] = useState<boolean>(false);

  // Camera Orbit angles
  const cameraAngleRef = useRef({ theta: Math.PI / 4, phi: Math.PI / 3.2, radius: 9 });
  const isDraggingRef = useRef(false);
  const previousPointerPosRef = useRef({ x: 0, y: 0 });

  // Update Camera position from spherical coordinates
  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraAngleRef.current;
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = radius * Math.cos(phi);
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(0, 0.4, 0);
  };

  // Zoom control
  const handleZoom = (delta: number) => {
    cameraAngleRef.current.radius = Math.max(4.5, Math.min(15, cameraAngleRef.current.radius + delta));
    updateCameraPosition();
  };

  // Preset Views
  const setPresetView = (view: 'engine' | 'front' | 'top') => {
    if (view === 'engine') {
      cameraAngleRef.current = { theta: 0.1, phi: Math.PI / 3.4, radius: 6.2 };
    } else if (view === 'front') {
      cameraAngleRef.current = { theta: 0, phi: Math.PI / 2.3, radius: 9.5 };
    } else if (view === 'top') {
      cameraAngleRef.current = { theta: 0.1, phi: 0.2, radius: 8.5 };
    }
    updateCameraPosition();
  };

  // Three.js Scene Setup
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 520;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c1322); // Deep navy workshop ambient
    scene.fog = new THREE.FogExp2(0x0c1322, 0.04);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    updateCameraPosition();

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const workshopSun = new THREE.DirectionalLight(0xffffff, 1.3);
    workshopSun.position.set(6, 12, 8);
    workshopSun.castShadow = true;
    workshopSun.shadow.mapSize.width = 1024;
    workshopSun.shadow.mapSize.height = 1024;
    scene.add(workshopSun);

    const bayFillLight = new THREE.PointLight(0x38bdf8, 1.8, 12);
    bayFillLight.position.set(0, 3, 0.5);
    scene.add(bayFillLight);

    // Car headlights
    const leftHeadlight = new THREE.PointLight(0xfffbeb, 0, 10);
    leftHeadlight.position.set(-1.1, 0.5, 2.7);
    scene.add(leftHeadlight);

    const rightHeadlight = new THREE.PointLight(0xfffbeb, 0, 10);
    rightHeadlight.position.set(1.1, 0.5, 2.7);
    scene.add(rightHeadlight);
    headLightsRef.current = [leftHeadlight, rightHeadlight];

    // 5. Workshop Garage Floor
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({ 
      color: 0x111827, 
      roughness: 0.85, 
      metalness: 0.2 
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.55;
    floor.receiveShadow = true;
    scene.add(floor);

    // Workshop floor markings
    const grid = new THREE.GridHelper(24, 24, 0x0ea5e9, 0x1e293b);
    grid.position.y = -0.54;
    scene.add(grid);

    // Lift Service Pillars
    const liftPillarGeo = new THREE.BoxGeometry(0.3, 3.5, 0.3);
    const liftMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.6, roughness: 0.4 });
    const liftLeft = new THREE.Mesh(liftPillarGeo, liftMat);
    liftLeft.position.set(-2.2, 1.2, 0);
    liftLeft.castShadow = true;
    scene.add(liftLeft);

    const liftRight = new THREE.Mesh(liftPillarGeo, liftMat);
    liftRight.position.set(2.2, 1.2, 0);
    liftRight.castShadow = true;
    scene.add(liftRight);

    // 6. BUILD PROCEDURAL 3D CAR & ENGINE BAY
    const carRootGroup = new THREE.Group();
    scene.add(carRootGroup);
    engineGroupRef.current = carRootGroup;

    // --- CAR CHASSIS & FRONT BODY ---
    const carPaintMat = new THREE.MeshStandardMaterial({ 
      color: 0x0284c7, // Metallic Ocean Blue
      metalness: 0.8, 
      roughness: 0.25 
    });

    const bodyFrameMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.7,
      roughness: 0.5
    });

    // Lower front chassis
    const chassisGeo = new THREE.BoxGeometry(2.4, 0.5, 3.8);
    const chassis = new THREE.Mesh(chassisGeo, bodyFrameMat);
    chassis.position.set(0, -0.2, 0.4);
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    carRootGroup.add(chassis);

    // Left and Right Fenders
    const fenderGeo = new THREE.BoxGeometry(0.35, 0.8, 2.2);
    const leftFender = new THREE.Mesh(fenderGeo, carPaintMat);
    leftFender.position.set(-1.25, 0.4, 1.1);
    leftFender.castShadow = true;
    carRootGroup.add(leftFender);

    const rightFender = new THREE.Mesh(fenderGeo, carPaintMat);
    rightFender.position.set(1.25, 0.4, 1.1);
    rightFender.castShadow = true;
    carRootGroup.add(rightFender);

    // Front Bumper & Grille
    const bumperGeo = new THREE.BoxGeometry(2.6, 0.6, 0.4);
    const bumper = new THREE.Mesh(bumperGeo, carPaintMat);
    bumper.position.set(0, 0.1, 2.3);
    bumper.castShadow = true;
    carRootGroup.add(bumper);

    const grilleGeo = new THREE.BoxGeometry(1.6, 0.35, 0.05);
    const grilleMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9 });
    const grille = new THREE.Mesh(grilleGeo, grilleMat);
    grille.position.set(0, 0.15, 2.51);
    carRootGroup.add(grille);

    // Front Headlight lenses
    const lightLensGeo = new THREE.BoxGeometry(0.4, 0.2, 0.1);
    const lightLensMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.85
    });
    const leftLight = new THREE.Mesh(lightLensGeo, lightLensMat);
    leftLight.position.set(-1.0, 0.35, 2.45);
    carRootGroup.add(leftLight);

    const rightLight = new THREE.Mesh(lightLensGeo, lightLensMat);
    rightLight.position.set(1.0, 0.35, 2.45);
    carRootGroup.add(rightLight);

    // Open Hood (Capo xe mở nghiêng lên)
    const hoodGeo = new THREE.BoxGeometry(2.1, 0.06, 1.8);
    const hood = new THREE.Mesh(hoodGeo, carPaintMat);
    hood.position.set(0, 1.5, 0.4);
    hood.rotation.x = -Math.PI / 4.8; // Angled open
    hood.castShadow = true;
    carRootGroup.add(hood);

    // Hood support hydraulic strut
    const strutGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.2, 8);
    const strutMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });
    const strut = new THREE.Mesh(strutGeo, strutMat);
    strut.position.set(-1.0, 0.9, 0.6);
    strut.rotation.z = 0.2;
    strut.rotation.x = -0.3;
    carRootGroup.add(strut);

    // Front Wheels
    const tireGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.32, 24);
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8, roughness: 0.3 });

    const wheelLeft = new THREE.Mesh(tireGeo, tireMat);
    wheelLeft.rotation.z = Math.PI / 2;
    wheelLeft.position.set(-1.3, -0.1, 1.4);
    wheelLeft.castShadow = true;
    carRootGroup.add(wheelLeft);

    const wheelRight = new THREE.Mesh(tireGeo, tireMat);
    wheelRight.rotation.z = Math.PI / 2;
    wheelRight.position.set(1.3, -0.1, 1.4);
    wheelRight.castShadow = true;
    carRootGroup.add(wheelRight);

    // --- ENGINE COMPARTMENT COMPONENTS (Interactive clickable meshes) ---
    const clickableList: THREE.Mesh[] = [];

    // 1. ENGINE BLOCK & VALVE COVER (Khối động cơ 4 xi-lanh)
    const engineBlockGroup = new THREE.Group();
    engineBlockGroup.position.set(0, 0.3, 0.9);

    const blockGeo = new THREE.BoxGeometry(0.9, 0.55, 0.85);
    const blockMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.35 });
    const engineBlock = new THREE.Mesh(blockGeo, blockMat);
    engineBlock.castShadow = true;
    engineBlockGroup.add(engineBlock);

    // Valve cover
    const valveGeo = new THREE.BoxGeometry(0.85, 0.14, 0.8);
    const valveMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, metalness: 0.5, roughness: 0.3 }); // Red valve head
    const valveCover = new THREE.Mesh(valveGeo, valveMat);
    valveCover.position.y = 0.33;
    engineBlockGroup.add(valveCover);

    // Drive belt & Pulley
    const pulleyGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.06, 16);
    const pulleyMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9, roughness: 0.2 });
    const pulley = new THREE.Mesh(pulleyGeo, pulleyMat);
    pulley.rotation.z = Math.PI / 2;
    pulley.position.set(0.48, 0.05, 0.2);
    engineBlockGroup.add(pulley);

    carRootGroup.add(engineBlockGroup);

    // 2. 12V BATTERY (Ắc-quy xe) - Clickable Target
    const batteryGeo = new THREE.BoxGeometry(0.48, 0.42, 0.38);
    const batteryMat = new THREE.MeshStandardMaterial({ 
      color: 0x1e3a8a, 
      roughness: 0.4,
      metalness: 0.3 
    });
    const batteryMesh = new THREE.Mesh(batteryGeo, batteryMat);
    batteryMesh.position.set(-0.78, 0.42, 1.3);
    batteryMesh.castShadow = true;
    batteryMesh.userData = { componentId: 'battery' };
    carRootGroup.add(batteryMesh);
    batteryMeshRef.current = batteryMesh;
    clickableList.push(batteryMesh);

    // Terminals (+ red, - black)
    const termGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.09, 12);
    const posTermMat = new THREE.MeshStandardMaterial({ color: 0xdc2626 });
    const posTerm = new THREE.Mesh(termGeo, posTermMat);
    posTerm.position.set(-0.14, 0.24, -0.08);
    batteryMesh.add(posTerm);

    const negTermMat = new THREE.MeshStandardMaterial({ color: 0x18181b });
    const negTerm = new THREE.Mesh(termGeo, negTermMat);
    negTerm.position.set(0.14, 0.24, -0.08);
    batteryMesh.add(negTerm);

    // 3. AIR FILTER BOX (Hộp lọc gió) - Clickable Target
    const airFilterGeo = new THREE.BoxGeometry(0.55, 0.3, 0.45);
    const airFilterMat = new THREE.MeshStandardMaterial({ 
      color: 0x27272a, 
      roughness: 0.6 
    });
    const airFilterMesh = new THREE.Mesh(airFilterGeo, airFilterMat);
    airFilterMesh.position.set(0.75, 0.42, 1.25);
    airFilterMesh.castShadow = true;
    airFilterMesh.userData = { componentId: 'air_filter' };
    carRootGroup.add(airFilterMesh);
    airFilterMeshRef.current = airFilterMesh;
    clickableList.push(airFilterMesh);

    // Intake Hose tube
    const hoseGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 12);
    const hoseMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.8 });
    const hose = new THREE.Mesh(hoseGeo, hoseMat);
    hose.rotation.z = Math.PI / 2.3;
    hose.position.set(-0.35, 0.05, -0.1);
    airFilterMesh.add(hose);

    // 4. SPARK PLUGS & IGNITION COILS (Cụm Bugi) - Clickable Target
    const plugsGroup = new THREE.Group();
    plugsGroup.position.set(0, 0.72, 0.9);
    for (let i = 0; i < 4; i++) {
      const coilGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.14, 12);
      const coilMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.5 });
      const coil = new THREE.Mesh(coilGeo, coilMat);
      coil.position.set(-0.28 + i * 0.18, 0, 0);
      coil.castShadow = true;
      plugsGroup.add(coil);
    }
    // Invisible click bounding box for spark plugs
    const sparkClickGeo = new THREE.BoxGeometry(0.8, 0.2, 0.3);
    const sparkClickMat = new THREE.MeshBasicMaterial({ visible: false });
    const sparkClickMesh = new THREE.Mesh(sparkClickGeo, sparkClickMat);
    sparkClickMesh.userData = { componentId: 'spark_plugs' };
    plugsGroup.add(sparkClickMesh);
    clickableList.push(sparkClickMesh);

    carRootGroup.add(plugsGroup);
    sparkPlugsGroupRef.current = plugsGroup;

    // 5. COOLANT EXPANSION TANK (Bình nước làm mát) - Clickable Target
    const coolantGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.38, 16);
    const coolantMat = new THREE.MeshStandardMaterial({ 
      color: 0x06b6d4, 
      roughness: 0.2, 
      transparent: true, 
      opacity: 0.75 
    });
    const coolantMesh = new THREE.Mesh(coolantGeo, coolantMat);
    coolantMesh.position.set(-0.85, 0.42, 0.55);
    coolantMesh.castShadow = true;
    coolantMesh.userData = { componentId: 'coolant' };
    carRootGroup.add(coolantMesh);
    coolantTankMeshRef.current = coolantMesh;
    clickableList.push(coolantMesh);

    // Pressure cap
    const capGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.06, 12);
    const capMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.y = 0.21;
    coolantMesh.add(cap);

    // 6. OIL DIPSTICK (Que thăm dầu) - Clickable Target
    const dipstickGroup = new THREE.Group();
    dipstickGroup.position.set(0.35, 0.65, 0.75);

    const ringGeo = new THREE.TorusGeometry(0.05, 0.015, 8, 16);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.3 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    dipstickGroup.add(ring);

    const stickGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.25, 8);
    const stickMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 });
    const stick = new THREE.Mesh(stickGeo, stickMat);
    stick.position.y = -0.12;
    dipstickGroup.add(stick);

    const dipClickGeo = new THREE.BoxGeometry(0.2, 0.3, 0.2);
    const dipClickMat = new THREE.MeshBasicMaterial({ visible: false });
    const dipClickMesh = new THREE.Mesh(dipClickGeo, dipClickMat);
    dipClickMesh.userData = { componentId: 'oil_dipstick' };
    dipstickGroup.add(dipClickMesh);
    clickableList.push(dipClickMesh);

    carRootGroup.add(dipstickGroup);
    oilDipstickMeshRef.current = dipClickMesh;

    // 7. ALTERNATOR (Máy phát điện)
    const altGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.25, 16);
    const altMat = new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.8, roughness: 0.4 });
    const altMesh = new THREE.Mesh(altGeo, altMat);
    altMesh.rotation.z = Math.PI / 2;
    altMesh.position.set(0.5, 0.15, 0.6);
    carRootGroup.add(altMesh);
    alternatorMeshRef.current = altMesh;

    clickableMeshesRef.current = clickableList;

    // --- POINTER / MOUSE / TOUCH EVENTS ---
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDraggingRef.current = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousPointerPosRef.current = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousPointerPosRef.current.x;
      const deltaY = clientY - previousPointerPosRef.current.y;

      cameraAngleRef.current.theta += deltaX * 0.007;
      cameraAngleRef.current.phi = Math.max(0.15, Math.min(Math.PI / 2.05, cameraAngleRef.current.phi - deltaY * 0.007));

      previousPointerPosRef.current = { x: clientX, y: clientY };
      updateCameraPosition();
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    // Component Click Selection via Raycasting
    const handleClick = (e: MouseEvent) => {
      if (!container || !cameraRef.current) return;
      const rect = container.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, cameraRef.current);
      const intersects = raycaster.intersectObjects(clickableMeshesRef.current, true);

      if (intersects.length > 0) {
        let hitObject: THREE.Object3D | null = intersects[0].object;
        while (hitObject && !hitObject.userData?.componentId) {
          hitObject = hitObject.parent;
        }
        if (hitObject?.userData?.componentId) {
          const compId = hitObject.userData.componentId;
          setSelectedComponentId(compId);
          const found = components.find((c) => c.id === compId);
          if (found) {
            setActiveToast({
              title: `Đã chọn: ${found.nameVi}`,
              desc: `Trạng thái: ${found.fixed ? 'Đã chuẩn' : found.problemStatus}. Nhấn "Kiểm tra & Xử lý" bên dưới.`,
              type: 'info'
            });
          }
        }
      }
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handlePointerDown);
    domElement.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    domElement.addEventListener('touchstart', handlePointerDown, { passive: true });
    domElement.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    domElement.addEventListener('click', handleClick);

    // --- ANIMATION LOOP ---
    let vibrationClock = 0;
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      // Engine Vibration when running
      if (engineGroupRef.current) {
        if (engineRunning) {
          vibrationClock += 0.35;
          engineGroupRef.current.position.y = Math.sin(vibrationClock) * 0.012;
          engineGroupRef.current.position.x = Math.cos(vibrationClock * 1.5) * 0.006;
          if (alternatorMeshRef.current) {
            alternatorMeshRef.current.rotation.x += 0.25;
          }
        } else {
          engineGroupRef.current.position.y = 0;
          engineGroupRef.current.position.x = 0;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      cameraRef.current.aspect = newW / newH;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', handlePointerDown);
      domElement.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      domElement.removeEventListener('touchstart', handlePointerDown);
      domElement.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      domElement.removeEventListener('click', handleClick);

      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [engineRunning]);

  // Handle checking & fixing a component
  const handleCheckAndFixComponent = (componentId: string) => {
    setComponents((prev) =>
      prev.map((item) => {
        if (item.id === componentId) {
          return {
            ...item,
            checked: true,
            fixed: true,
            reading: item.nominalStatus
          };
        }
        return item;
      })
    );

    const target = components.find((c) => c.id === componentId);
    if (target) {
      setActiveToast({
        title: `Thao tác thành công: ${target.nameVi}`,
        desc: target.successMessage,
        type: 'success'
      });

      // Visual updates in 3D
      if (componentId === 'battery' && batteryMeshRef.current) {
        (batteryMeshRef.current.material as THREE.MeshStandardMaterial).color.setHex(0x10b981); // Emerald green for fresh battery
      }
      if (componentId === 'air_filter' && airFilterMeshRef.current) {
        (airFilterMeshRef.current.material as THREE.MeshStandardMaterial).color.setHex(0xf59e0b); // Fresh filter
      }
      if (componentId === 'coolant' && coolantTankMeshRef.current) {
        (coolantTankMeshRef.current.material as THREE.MeshStandardMaterial).color.setHex(0x06b6d4); // Vibrant cyan
        (coolantTankMeshRef.current.material as THREE.MeshStandardMaterial).opacity = 0.95;
      }
    }
  };

  // Test engine start
  const handleToggleEngine = () => {
    const unCheckedRequired = components.filter((c) => !c.fixed && (c.id === 'battery' || c.id === 'spark_plugs'));
    if (unCheckedRequired.length > 0 && !engineRunning) {
      setActiveToast({
        title: 'Chưa đủ điều kiện khởi động!',
        desc: `Cần hoàn thành kiểm tra và thay mới: ${unCheckedRequired.map((u) => u.nameVi).join(', ')} trước khi đề máy.`,
        type: 'warning'
      });
      return;
    }

    if (!engineRunning) {
      setEngineRunning(true);
      setRpmValue(850);
      headLightsRef.current.forEach((l) => (l.intensity = 2.5));
      setActiveToast({
        title: 'Động cơ khởi động thành công! (850 RPM)',
        desc: 'Tiếng nổ êm dịu, dòng nạp máy phát 14.2V, hệ thống điện và làm mát vận hành trơn tru.',
        type: 'success'
      });
    } else {
      setEngineRunning(false);
      setRpmValue(0);
      headLightsRef.current.forEach((l) => (l.intensity = 0));
      setActiveToast({
        title: 'Đã tắt máy',
        desc: 'Động cơ dừng hoạt động an toàn.',
        type: 'info'
      });
    }
  };

  // Reset entire simulation
  const handleResetSimulation = () => {
    setEngineRunning(false);
    setRpmValue(0);
    headLightsRef.current.forEach((l) => (l.intensity = 0));
    setComponents((prev) =>
      prev.map((c) => ({
        ...c,
        checked: false,
        fixed: false,
        reading: c.problemStatus
      }))
    );
    if (batteryMeshRef.current) {
      (batteryMeshRef.current.material as THREE.MeshStandardMaterial).color.setHex(0x1e3a8a);
    }
    setActiveToast({
      title: 'Đã đặt lại mô phỏng',
      desc: 'Khoang máy đã trở về trạng thái ban đầu để em thực hành lại từ đầu.',
      type: 'info'
    });
  };

  const selectedComponent = components.find((c) => c.id === selectedComponentId) || components[0];
  const completedCount = components.filter((c) => c.fixed).length;
  const isAllCompleted = completedCount === components.length;

  return (
    <div className={`relative flex flex-col bg-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 ${embedded ? 'w-full h-full' : 'max-w-6xl mx-auto my-6'}`}>
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                Mô Phỏng 3D: Kỹ Thuật Viên Sửa Chữa & Chẩn Đoán Ô Tô
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-900/60 text-teal-300 border border-teal-700/50">
                Three.js WebGL
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Khám phá khoang máy động cơ, đo đạc điện áp, tháo lắp thay thế linh kiện và thử nghiệm nổ máy thực tế.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleResetSimulation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white transition-all font-semibold"
            title="Đặt lại mô phỏng ban đầu"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Đặt lại</span>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-900/60 hover:text-rose-300 text-slate-400 transition-all"
              title="Đóng mô phỏng"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Simulation Viewport & Controls */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* 3D Canvas Area (Left / Center) */}
        <div className="relative lg:col-span-8 flex flex-col bg-slate-950">
          <div ref={mountRef} className="w-full h-[400px] sm:h-[480px] lg:h-full cursor-grab active:cursor-grabbing relative">
            {/* Overlay 3D Navigation Controls */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-700/70 backdrop-blur-md text-xs">
              <button
                onClick={() => setPresetView('engine')}
                className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-200 hover:text-white transition-all font-medium"
              >
                Khoang máy
              </button>
              <button
                onClick={() => setPresetView('front')}
                className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-200 hover:text-white transition-all font-medium"
              >
                Chính diện
              </button>
              <button
                onClick={() => setPresetView('top')}
                className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-200 hover:text-white transition-all font-medium"
              >
                Góc trên xuống
              </button>
            </div>

            {/* Zoom In/Out Buttons */}
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-700/70 backdrop-blur-md">
              <button
                onClick={() => handleZoom(-1.2)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all"
                title="Phóng to"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleZoom(1.2)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all"
                title="Thu nhỏ"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-slate-400 px-1 hidden sm:block">
                Kéo chuột/chạm để xoay 360°
              </div>
            </div>

            {/* Engine Status HUD */}
            <div className="absolute top-4 right-4 z-10 bg-slate-900/85 border border-slate-700/80 p-3 rounded-2xl backdrop-blur-md flex items-center gap-3">
              <div className={`w-3.5 h-3.5 rounded-full ${engineRunning ? 'bg-emerald-400 animate-ping' : 'bg-slate-600'}`} />
              <div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Trạng thái máy</div>
                <div className="text-sm font-extrabold text-white flex items-center gap-2">
                  <span>{engineRunning ? 'ĐANG CHẠY' : 'ĐÃ TẮT'}</span>
                  {engineRunning && (
                    <span className="text-emerald-400 text-xs font-mono font-bold">
                      {rpmValue} RPM
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Floating Toast Notification */}
            {activeToast && (
              <div className={`absolute bottom-4 right-4 max-w-sm p-3.5 rounded-2xl border shadow-xl backdrop-blur-md z-20 transition-all ${
                activeToast.type === 'success' 
                  ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200' 
                  : activeToast.type === 'warning'
                  ? 'bg-amber-950/90 border-amber-500/50 text-amber-200'
                  : 'bg-slate-900/90 border-teal-500/40 text-teal-200'
              }`}>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-white">{activeToast.title}</div>
                    <div className="text-xs opacity-90 mt-0.5 leading-relaxed">{activeToast.desc}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Diagnostic Panel & Task Workflow (Right Side) */}
        <div className="lg:col-span-4 bg-slate-900/95 border-t lg:border-t-0 lg:border-l border-slate-800 p-5 flex flex-col justify-between overflow-y-auto max-h-[640px]">
          <div className="space-y-4">
            {/* Checklist Progress */}
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Tiến độ chẩn đoán & bảo dưỡng</span>
                <span className="text-teal-400 font-mono">{completedCount} / {components.length} hạng mục</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${(completedCount / components.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Quick Component Selector Buttons */}
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Danh sách chi tiết khoang máy (Click để chọn):
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {components.map((comp) => {
                  const isSelected = comp.id === selectedComponentId;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => {
                        setSelectedComponentId(comp.id);
                        setActiveToast({
                          title: `Đã chọn: ${comp.nameVi}`,
                          desc: comp.fixed ? 'Chi tiết đã được kiểm tra đạt chuẩn.' : comp.instructions,
                          type: 'info'
                        });
                      }}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all ${
                        isSelected 
                          ? 'bg-teal-950/80 border-teal-500 text-white shadow-xs' 
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold truncate">
                        <span className={`w-2 h-2 rounded-full ${comp.fixed ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
                        <span className="truncate">{comp.nameVi}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                        comp.fixed 
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
                          : 'bg-amber-950 text-amber-300 border border-amber-800'
                      }`}>
                        {comp.fixed ? 'ĐẠT CHUẨN' : 'CẦN XỬ LÝ'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Component Inspection Card */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-teal-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  Chi tiết đang kiểm tra
                </span>
                <span className="text-xs text-slate-400 font-mono">ID: {selectedComponent.id}</span>
              </div>

              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-white">
                  {selectedComponent.nameVi}
                </h4>
                <div className="text-[11px] text-slate-400 italic">
                  {selectedComponent.name}
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-start justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Thông số kỹ thuật:</span>
                  <span className={`font-mono font-bold ${selectedComponent.fixed ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {selectedComponent.reading}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 leading-relaxed text-xs">
                  <span className="font-bold text-teal-300">Hướng dẫn kỹ thuật viên: </span>
                  {selectedComponent.instructions}
                </div>
              </div>

              {/* Action Button: Check & Fix */}
              <button
                onClick={() => handleCheckAndFixComponent(selectedComponent.id)}
                disabled={selectedComponent.fixed}
                className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                  selectedComponent.fixed
                    ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 cursor-default'
                    : 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-extrabold shadow-md hover:scale-[1.02]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {selectedComponent.fixed ? 'Đã kiểm tra & Xử lý đạt chuẩn' : 'Kiểm tra & Thay thế linh kiện này'}
                </span>
              </button>
            </div>
          </div>

          {/* Engine Ignition Test & Reflection Launch */}
          <div className="pt-4 space-y-2 border-t border-slate-800 mt-4">
            <button
              onClick={handleToggleEngine}
              className={`w-full py-3 px-4 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                engineRunning
                  ? 'bg-rose-600 hover:bg-rose-500 text-white'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 hover:scale-[1.02]'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>{engineRunning ? 'Tắt động cơ' : 'Đề nổ & Thử máy thực tế'}</span>
            </button>

            {isAllCompleted && (
              <button
                onClick={() => setShowReflectionModal(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-teal-600/90 hover:bg-teal-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Hoàn thành & Xem đúc kết nghề</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Kolb Experiential Learning Reflection Modal */}
      {showReflectionModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-teal-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-teal-900/60 text-teal-300 text-xs font-bold border border-teal-700/50">
                  Mô hình Kolb: Đúc kết trải nghiệm nghề nghiệp
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Tổng kết Mô phỏng Kỹ thuật viên Ô tô
                </h3>
              </div>
              <button
                onClick={() => setShowReflectionModal(false)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Ethical Notice */}
            <div className="p-3.5 rounded-2xl bg-teal-950/60 border border-teal-800 text-teal-200 text-xs leading-relaxed">
              <strong>Nguyên tắc CHẠM VIỆC:</strong> Kết quả mô phỏng giúp em làm quen với không gian làm việc kỹ thuật thực tế và tự cảm nhận hứng thú của bản thân. <em>Hệ thống không đánh giá hay gắn nhãn em phù hợp hay không phù hợp với nghề chỉ qua một bài thử nghiệm.</em>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  1. Mức độ hứng thú của em khi thao tác máy móc & đo đạc kỹ thuật:
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setReflectionInterest(star)}
                      className={`w-10 h-10 rounded-xl font-extrabold text-sm border transition-all ${
                        reflectionInterest >= star
                          ? 'bg-amber-400 text-slate-950 border-amber-300'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      ★ {star}
                    </button>
                  ))}
                  <span className="text-xs text-slate-400 ml-2">
                    {reflectionInterest >= 4 ? 'Rất thích thú' : reflectionInterest === 3 ? 'Bình thường' : 'Chưa cảm thấy hứng thú'}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  2. Cảm nhận của em về kỹ năng quan trọng nhất cần có ở nghề này:
                </label>
                <textarea
                  value={reflectionComment}
                  onChange={(e) => setReflectionComment(e.target.value)}
                  placeholder="Ví dụ: Em nhận thấy nghề này cần tính kiên nhẫn, sự tỉ mỉ khi đo điện áp và tuân thủ an toàn cháy nổ..."
                  rows={3}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowReflectionModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  setReflectionSaved(true);
                  setShowReflectionModal(false);
                  if (onComplete) onComplete();
                  setActiveToast({
                    title: 'Đã lưu phản tư thành công!',
                    desc: 'Cảm nhận của em đã được ghi nhận vào hồ sơ hướng nghiệp cá nhân.',
                    type: 'success'
                  });
                }}
                className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-extrabold shadow-md"
              >
                Lưu vào Hồ sơ cá nhân
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
