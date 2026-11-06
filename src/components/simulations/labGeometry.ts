import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export function beveledBox(width = 1, height = 1, depth = 1) {
  return new RoundedBoxGeometry(width, height, depth, 2, Math.min(width, height, depth) * 0.065);
}

/** Curved, tapered leaf blade with a slightly serrated outline and a raised central rib. */
export function leafBlade() {
  const positions: number[] = [], uvs: number[] = [], indices: number[] = [];
  const rows = 20, columns = 8;
  for (let i = 0; i <= rows; i++) {
    const u = i / rows;
    const width = Math.pow(Math.sin(Math.PI * u), 0.85) * (0.96 + 0.04 * Math.cos(u * Math.PI * 20));
    for (let j = 0; j <= columns; j++) {
      const v = j / columns * 2 - 1;
      positions.push((u - 0.5) * 1.45, Math.sin(Math.PI * u) * (0.14 - Math.abs(v) * 0.11), v * width * 0.31);
      uvs.push(u, j / columns);
      if (i < rows && j < columns) {
        const a = i * (columns + 1) + j, b = a + columns + 1;
        indices.push(a, b, a + 1, a + 1, b, b + 1);
      }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices); geometry.computeVertexNormals();
  return geometry;
}

export function furnishedObject(type: 'bed' | 'desk' | 'sofa' | 'dining' | 'wall') {
  const group = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: 0x896850, roughness: 0.65 });
  const linen = new THREE.MeshStandardMaterial({ color: 0xdbd5c5, roughness: 0.95 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x35444c, roughness: 0.35, metalness: 0.65 });
  const fabric = new THREE.MeshStandardMaterial({ color: type === 'bed' ? 0x708b93 : 0x788779, roughness: 0.9 });
  const block = (size: number[], at: number[], mat: THREE.Material) => {
    const mesh = new THREE.Mesh(beveledBox(...size as [number, number, number]), mat);
    mesh.position.set(...at as [number, number, number]); mesh.castShadow = true; mesh.receiveShadow = true; group.add(mesh);
    return mesh;
  };
  if (type === 'bed') {
    block([2, 0.22, 1.6], [0, 0.15, 0], wood);
    block([1.92, 0.22, 1.52], [0, 0.36, 0], linen);
    block([0.1, 0.9, 1.65], [-0.98, 0.48, 0], wood);
    block([1.25, 0.08, 1.54], [0.32, 0.51, 0], fabric);
    for (const z of [-0.4, 0.4]) block([0.42, 0.14, 0.58], [-0.66, 0.54, z], linen);
  } else if (type === 'sofa') {
    block([2.15, 0.3, 0.85], [0, 0.32, 0], fabric);
    block([2.15, 0.62, 0.2], [0, 0.66, -0.35], fabric);
    for (const x of [-1, 1]) block([0.18, 0.52, 0.9], [x, 0.51, 0], fabric);
    for (const x of [-0.48, 0.48]) block([0.91, 0.15, 0.62], [x, 0.54, 0.1], linen);
    for (const x of [-0.85, 0.85]) for (const z of [-0.28, 0.28]) block([0.07, 0.2, 0.07], [x, 0.1, z], wood);
  } else if (type === 'wall') {
    block([2, 2.4, 0.15], [0, 1.2, 0], linen);
    block([2, 0.08, 0.19], [0, 0.04, 0], wood);
  } else {
    const width = type === 'desk' ? 1.4 : 1.6;
    const depth = type === 'desk' ? 0.7 : 0.9;
    block([width, 0.075, depth], [0, 0.74, 0], wood);
    for (const x of [-width / 2 + 0.12, width / 2 - 0.12]) for (const z of [-depth / 2 + 0.1, depth / 2 - 0.1]) block([0.065, 0.72, 0.065], [x, 0.36, z], metal);
    if (type === 'desk') {
      block([0.65, 0.38, 0.04], [0, 1.03, -0.2], metal);
      block([0.58, 0.3, 0.012], [0, 1.03, -0.173], new THREE.MeshStandardMaterial({ color: 0x183d4f, emissive: 0x153447, emissiveIntensity: 0.3 }));
      block([0.07, 0.16, 0.07], [0, 0.84, -0.2], metal);
      block([0.48, 0.025, 0.18], [0, 0.8, 0.1], metal);
    }
    const chairPositions = type === 'desk' ? [[0, 0.7]] : [[-0.5, 0.8], [0.5, 0.8], [-0.5, -0.8], [0.5, -0.8]];
    chairPositions.forEach(([x, z]) => {
      block([0.42, 0.08, 0.43], [x, 0.43, z], fabric);
      block([0.42, 0.43, 0.065], [x, 0.66, z + Math.sign(z) * 0.19], fabric);
      for (const dx of [-0.15, 0.15]) for (const dz of [-0.15, 0.15]) block([0.035, 0.4, 0.035], [x + dx, 0.2, z + dz], metal);
    });
  }
  // Do not retain materials that weren't used by this furnishing type.
  const used = new Set(group.children.map(child => (child as THREE.Mesh).material));
  [wood, linen, metal, fabric].forEach(material => { if (!used.has(material)) material.dispose(); });
  return group;
}
