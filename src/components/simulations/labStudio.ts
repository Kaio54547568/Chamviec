import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export type LabKind = 'semiconductor' | 'architecture' | 'agriculture' | 'circuit' | 'automotive';
export type LabQuality = 'balanced' | 'cinematic' | 'battery';
const palettes = {
  semiconductor: { background: 0x111d2a, accent: 0x5eead4, floor: -2.02 },
  architecture: { background: 0xcbd5db, accent: 0xf1c787, floor: -0.025 },
  agriculture: { background: 0xb8c9ba, accent: 0xb6dda1, floor: -0.52 },
  circuit: { background: 0x17202d, accent: 0xffd18c, floor: -1.03 },
  automotive: { background: 0x19232b, accent: 0x7dd3fc, floor: -0.57 },
};

// Local micro-surface maps: subtle brushed metal and plaster grain without network assets.
function finishTexture(brushed: boolean) {
  const size = 128, pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const noise = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    const grain = noise - Math.floor(noise);
    const value = Math.round(brushed ? 150 + Math.sin(y * 1.7) * 16 + grain * 15 : 180 + grain * 35);
    const offset = (y * size + x) * 4;
    pixels[offset] = pixels[offset + 1] = pixels[offset + 2] = value; pixels[offset + 3] = 255;
  }
  const texture = new THREE.DataTexture(pixels, size, size, THREE.RGBAFormat);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter; texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true; texture.needsUpdate = true;
  return texture;
}

/** PBR surface shader: subtle aggregate and joints, with normal lighting and shadows intact. */
export function studioSurface(color: number, scale = 1) {
  const material = new THREE.MeshStandardMaterial({ color, roughness: 0.78, metalness: 0.12 });
  material.onBeforeCompile = shader => {
    shader.uniforms.labScale = { value: scale };
    shader.vertexShader = `varying vec3 labWorldPosition;\n${shader.vertexShader}`.replace(
      '#include <worldpos_vertex>',
      '#include <worldpos_vertex>\nlabWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;'
    );
    shader.fragmentShader = `varying vec3 labWorldPosition;\nuniform float labScale;\n${shader.fragmentShader}`.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
       vec2 tile = labWorldPosition.xz * labScale;
       vec2 edge = abs(fract(tile) - 0.5);
       float joint = smoothstep(0.475, 0.495, max(edge.x, edge.y));
       float grain = fract(sin(dot(floor(tile * 340.0), vec2(12.9898, 78.233))) * 43758.5453);
       diffuseColor.rgb *= mix(0.96, 1.04, grain) * mix(1.0, 0.68, joint);`
    );
  };
  material.customProgramCacheKey = () => 'lab-surface-v1';
  return material;
}

export function createLabStudio(scene: THREE.Scene, renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera, container: HTMLElement, kind: LabKind) {
  const palette = palettes[kind];
  const outdoors = kind === 'architecture' || kind === 'agriculture';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let quality: LabQuality = 'balanced';
  try { quality = (localStorage.getItem('cham_lab_quality') as LabQuality) || 'balanced'; } catch {}
  if (!['balanced', 'cinematic', 'battery'].includes(quality)) quality = 'balanced';
  scene.background = new THREE.Color(palette.background);
  scene.fog = new THREE.Fog(palette.background, outdoors ? 26 : 22, 65);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = outdoors ? 0.98 : 1.02;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.setAttribute('aria-label', 'Interactive 3D career workspace');

  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, 0.06);
  scene.environment = environment.texture;
  scene.environmentIntensity = outdoors ? 0.45 : 0.65;
  room.dispose();
  pmrem.dispose();

  // Keep the existing dynamic sun and task lights. Only one directional source casts shadows.
  let hasKey = false;
  scene.traverse(object => {
    if (object instanceof THREE.AmbientLight) object.intensity = 0.22;
    if (object instanceof THREE.PointLight) object.castShadow = false;
    if (object instanceof THREE.DirectionalLight) {
      object.intensity = outdoors ? 2.6 : 2.2;
      object.castShadow = !hasKey;
      hasKey = true;
      Object.assign(object.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 0.1, far: 55 });
      object.shadow.camera.updateProjectionMatrix();
      object.shadow.bias = -0.00015;
      object.shadow.normalBias = 0.025;
    }
    if (object instanceof THREE.GridHelper) {
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach(material => { material.transparent = true; material.opacity = 0.13; material.depthWrite = false; });
    }
    if (object instanceof THREE.Mesh) {
      object.receiveShadow = true;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      object.castShadow = materials.every(material => !material.transparent);
      materials.forEach(material => {
        if (material instanceof THREE.MeshStandardMaterial) material.envMapIntensity = 0.8;
      });
    }
  });
  scene.add(new THREE.HemisphereLight(outdoors ? 0xe3f2ff : 0xb7d6ed, outdoors ? 0x6b7358 : 0x293141, outdoors ? 1.3 : 0.75));
  if (!hasKey) {
    const sun = new THREE.DirectionalLight(0xfff1d4, 2.8);
    sun.position.set(6, 10, 4);
    sun.castShadow = true;
    Object.assign(sun.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, far: 40 });
    sun.shadow.camera.updateProjectionMatrix();
    sun.shadow.normalBias = 0.025;
    scene.add(sun);
  }
  const rim = new THREE.DirectionalLight(palette.accent, outdoors ? 0.5 : 1.1);
  rim.position.set(-7, 5, -8);
  scene.add(rim);

  const dressing = new THREE.Group();
  dressing.name = 'studio-environment';
  const box = (size: number[], position: number[], material: THREE.Material) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(size[0], size[1], size[2]), material);
    mesh.position.set(position[0], position[1], position[2]);
    mesh.castShadow = true; mesh.receiveShadow = true;
    dressing.add(mesh);
    return mesh;
  };
  const alloy = new THREE.MeshStandardMaterial({ color: 0x647781, roughness: 0.32, metalness: 0.8 });
  const graphite = new THREE.MeshStandardMaterial({ color: 0x263440, roughness: 0.6, metalness: 0.35 });
  const warmWood = new THREE.MeshStandardMaterial({ color: 0x967358, roughness: 0.68 });
  const lamp = new THREE.MeshStandardMaterial({ color: 0xe4f5ff, emissive: 0xc6e7ff, emissiveIntensity: 2.1, roughness: 0.3 });

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(70, 70), kind === 'architecture'
    ? new THREE.MeshStandardMaterial({ color: 0x788765, roughness: 1 })
    : studioSurface(outdoors ? 0x89918b : 0x35434d, outdoors ? 0.5 : 0.7));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = palette.floor;
  floor.receiveShadow = true;
  dressing.add(floor);

  if (kind === 'semiconductor' || kind === 'circuit') {
    // An actual bench silhouette, machined edge trim, feet and overhead light bars.
    const benchY = kind === 'semiconductor' ? -0.6 : -0.78;
    if (kind === 'semiconductor') box([12, 0.24, 9], [0, benchY, 0], graphite);
    for (const x of [-5.5, 5.5]) for (const z of [-3.8, 3.8]) box([0.18, 1.2, 0.18], [x, -1.35, z], alloy);
    for (const z of [-4.25, 4.25]) box([12, 0.05, 0.05], [0, benchY + 0.14, z], alloy);
    for (const x of [-5, 5]) {
      box([0.12, 5.8, 0.12], [x, 1.4, -4.5], alloy);
      box([0.18, 0.1, 3.4], [x, 4.25, -3.5], lamp);
    }
    box([4, 1.7, 0.35], [0, 1.1, -5.4], graphite);
    box([3.6, 1.3, 0.04], [0, 1.1, -5.18], new THREE.MeshStandardMaterial({ color: 0x102932, emissive: 0x12505e, emissiveIntensity: 0.45, roughness: 0.25 }));
    for (let i = 0; i < 9; i++) box([0.17, 0.12 + (i % 4) * 0.17, 0.03], [-1.4 + i * 0.34, 0.9, -5.14], lamp);
  }
  if (kind === 'architecture') {
    // A landscaped architectural presentation plinth and timber pathways.
    box([10.4, 0.16, 8.4], [0, -0.09, 0], new THREE.MeshStandardMaterial({ color: 0xa6ada7, roughness: 0.85 }));
    for (let i = 0; i < 9; i++) box([0.55, 0.045, 1.5], [-2.5 + i * 0.64, 0.025, 4.7], warmWood);
    const foliage = new THREE.MeshStandardMaterial({ color: 0x7f975a, roughness: 0.85, side: THREE.DoubleSide });
    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, -0.13); leafShape.bezierCurveTo(-0.11, -0.04, -0.09, 0.08, 0, 0.15);
    leafShape.bezierCurveTo(0.09, 0.08, 0.11, -0.04, 0, -0.13);
    const leafGeometry = new THREE.ShapeGeometry(leafShape, 3);
    const leafTransform = new THREE.Object3D();
    const random = (seed: number) => { const value = Math.sin(seed * 127.1) * 43758.5453; return value - Math.floor(value); };
    for (const x of [-6.2, 6.2]) for (const z of [-4.5, 4]) {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.11, 1.8, 10), warmWood);
      trunk.position.set(x, 0.9, z); trunk.castShadow = true; dressing.add(trunk);
      for (let branch = 0; branch < 5; branch++) {
        const angle = branch * 2.4;
        const curve = new THREE.LineCurve3(new THREE.Vector3(x, 1.1 + branch * 0.15, z), new THREE.Vector3(x + Math.cos(angle) * 0.45, 2.1 + branch * 0.12, z + Math.sin(angle) * 0.45));
        const twig = new THREE.Mesh(new THREE.TubeGeometry(curve, 1, 0.023, 6), warmWood); dressing.add(twig);
      }
      const leaves = new THREE.InstancedMesh(leafGeometry, foliage, 500);
      for (let i = 0; i < 500; i++) {
        const azimuth = random(i + 1) * Math.PI * 2, vertical = random(i + 610) * 2 - 1;
        const radial = Math.cbrt(random(i + 1200)), ring = Math.sqrt(1 - vertical * vertical);
        leafTransform.position.set(x + Math.cos(azimuth) * ring * radial * 0.85, 2.2 + vertical * radial * 1.05, z + Math.sin(azimuth) * ring * radial * 0.85);
        leafTransform.rotation.set(random(i + 33) * Math.PI, azimuth, random(i + 44) * Math.PI);
        leafTransform.scale.setScalar(0.8 + random(i + 9) * 0.7); leafTransform.updateMatrix();
        leaves.setMatrixAt(i, leafTransform.matrix); leaves.setColorAt(i, new THREE.Color().setHSL(0.22 + random(i + 17) * 0.025, 0.3, 0.38 + random(i + 32) * 0.22));
      }
      leaves.castShadow = true; leaves.receiveShadow = true; dressing.add(leaves);
    }
  }
  if (kind === 'agriculture') {
    const glass = new THREE.MeshPhysicalMaterial({ color: 0xcbe2d9, roughness: 0.17, metalness: 0, transparent: true, opacity: 0.13, side: THREE.DoubleSide, depthWrite: false });
    for (const z of [-5, -2.5, 0, 2.5, 5]) {
      const arch = new THREE.Mesh(new THREE.TorusGeometry(6.5, 0.045, 6, 48, Math.PI), alloy);
      arch.position.set(0, -0.5, z); dressing.add(arch);
    }
    for (const x of [-6.4, 6.4]) {
      box([0.06, 0.06, 11], [x, 0.2, 0], alloy);
      box([0.025, 3, 11], [x, 1.0, 0], glass).castShadow = false;
    }
    for (const x of [-3.8, 3.8]) {
      box([1.25, 0.8, 6.8], [x, -0.08, 0], graphite);
      box([1.15, 0.06, 6.5], [x, 0.35, 0], new THREE.MeshStandardMaterial({ color: 0x473d2c, roughness: 1 }));
      for (let z = -2.5; z <= 2.5; z += 0.7) {
        const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), new THREE.MeshStandardMaterial({ color: z > 0 ? 0x638842 : 0x45753b, roughness: 0.75 }));
        leaf.scale.set(1.2, 0.7, 1); leaf.position.set(x, 0.65, z); leaf.castShadow = true; dressing.add(leaf);
      }
    }
  }
  if (kind === 'automotive') {
    box([18, 5, 0.25], [0, 1.9, -8], graphite);
    for (let x = -7; x <= 7; x += 2) box([0.045, 3.5, 0.035], [x, 2.0, -7.84], alloy);
    box([4, 1.2, 0.9], [-5, 0.15, -5.5], new THREE.MeshStandardMaterial({ color: 0x8d3634, roughness: 0.4, metalness: 0.6 }));
    for (let i = 0; i < 4; i++) box([3.7, 0.035, 0.06], [-5, -0.2 + i * 0.25, -5.02], alloy);
    for (const x of [-3.4, 3.4]) box([0.12, 0.025, 8], [x, -0.535, 0], new THREE.MeshStandardMaterial({ color: 0xd6ba63, roughness: 0.8 }));
    for (const x of [-4, 4]) box([0.25, 0.08, 5], [x, 4.1, -1.4], lamp);
  }
  scene.add(dressing);

  const brushed = finishTexture(true), matte = finishTexture(false);
  scene.traverse(object => {
    if (!(object instanceof THREE.Mesh)) return;
    (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => {
      if (!(material instanceof THREE.MeshStandardMaterial) || material.transparent) return;
      if (material.metalness > 0.5 && material.roughness > 0.12) {
        material.roughnessMap = brushed;
        material.bumpMap = brushed; material.bumpScale = 0.006;
      } else if (material.roughness > 0.7) {
        material.bumpMap = matte; material.bumpScale = 0.012;
      }
      material.needsUpdate = true;
    });
  });

  let composer: EffectComposer | undefined;
  let bloom: UnrealBloomPass | undefined;
  const observer = new ResizeObserver(() => resize());
  function resize() {
    const width = Math.max(1, container.clientWidth), height = Math.max(1, container.clientHeight);
    camera.aspect = width / height; camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    composer?.setSize(width, height);
  }
  function applyQuality() {
    const ratio = quality === 'battery' ? 1 : quality === 'cinematic' ? 1.75 : 1.35;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, ratio));
    renderer.shadowMap.enabled = quality !== 'battery';
    scene.traverse(object => {
      if (object instanceof THREE.DirectionalLight && object.castShadow) {
        object.shadow.mapSize.set(quality === 'cinematic' ? 2048 : 1024, quality === 'cinematic' ? 2048 : 1024);
        object.shadow.map?.dispose(); object.shadow.map = null;
      }
    });
    if (quality === 'cinematic' && !composer) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      bloom = new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 0.18, 0.35, 2.5);
      composer.addPass(bloom); composer.addPass(new OutputPass());
    }
    composer?.setPixelRatio(renderer.getPixelRatio());
    resize();
  }
  const onQuality = (event: Event) => {
    quality = (event as CustomEvent<LabQuality>).detail;
    applyQuality();
  };
  window.addEventListener('cham-lab-quality', onQuality);
  observer.observe(container);
  applyQuality();
  let lastFrame = 0;
  return {
    render() {
      const now = performance.now();
      if (document.hidden || (quality === 'battery' && now - lastFrame < 32)) return;
      lastFrame = now;
      if (composer && quality === 'cinematic') composer.render(); else renderer.render(scene, camera);
    },
    reducedMotion,
    dispose() {
      observer.disconnect(); window.removeEventListener('cham-lab-quality', onQuality);
      composer?.passes.forEach(pass => pass.dispose()); composer?.dispose();
      scene.environment = null; environment.dispose();
      const geometries = new Set<THREE.BufferGeometry>(), materials = new Set<THREE.Material>(), textures = new Set<THREE.Texture>();
      scene.traverse(object => {
        if (object instanceof THREE.InstancedMesh) object.dispose();
        if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) {
          geometries.add(object.geometry);
          (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => materials.add(material));
        }
        if (object instanceof THREE.Light && 'shadow' in object) (object as THREE.DirectionalLight).shadow?.dispose();
      });
      materials.forEach(material => Object.values(material).forEach(value => { if (value instanceof THREE.Texture) textures.add(value); }));
      geometries.forEach(value => value.dispose()); materials.forEach(value => value.dispose()); textures.forEach(value => value.dispose());
      // Some shared dressing materials are unused for a particular lab.
      alloy.dispose(); graphite.dispose(); warmWood.dispose(); lamp.dispose();
      brushed.dispose(); matte.dispose();
    },
  };
}
