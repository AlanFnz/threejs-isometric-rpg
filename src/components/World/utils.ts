import * as THREE from 'three';

const createTerrain = (group: THREE.Group, width: number, height: number) => {
  const terrainMaterial = new THREE.MeshStandardMaterial({
    color: 0x50a000,
  });

  const terrainGeometry = new THREE.PlaneGeometry(width, height, width, height);
  const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
  terrain.rotation.x = -Math.PI / 2;
  terrain.position.set(width / 2, 0, height / 2);

  terrain.receiveShadow = true;
  group.add(terrain);
};

const createTrees = (
  group: THREE.Group,
  width: number,
  height: number,
  treeCount: number,
  objectMap: Map<string, THREE.Mesh>
) => {
  const treeRadius = 0.2;
  const treeHeight = 1;

  const treeGeometry = new THREE.ConeGeometry(treeRadius, treeHeight, 8);
  const treeMaterial = new THREE.MeshStandardMaterial({
    color: 0x305010,
    flatShading: true,
  });

  for (let i = 0; i < treeCount; i++) {
    const coords = new THREE.Vector2(
      Math.floor(width * Math.random()),
      Math.floor(height * Math.random())
    );

    if (objectMap.has(`${coords.x}-${coords.y}`)) continue;

    const treeMesh = new THREE.Mesh(treeGeometry, treeMaterial);
    treeMesh.position.set(coords.x + 0.5, treeHeight / 2, coords.y + 0.5);
    treeMesh.castShadow = true;

    group.add(treeMesh);
    objectMap.set(`${coords.x}-${coords.y}`, treeMesh);
  }
};

const createRocks = (
  group: THREE.Group,
  width: number,
  height: number,
  rockCount: number,
  objectMap: Map<string, THREE.Mesh>
) => {
  const minRockRadius = 0.1;
  const maxRockRadius = 0.3;
  const minRockHeight = 0.5;
  const maxRockHeight = 0.8;

  const rockMaterial = new THREE.MeshStandardMaterial({
    color: 0xb0b0b0,
    flatShading: true,
  });

  for (let i = 0; i < rockCount; i++) {
    const radius =
      minRockRadius + Math.random() * (maxRockRadius - minRockRadius);
    const height =
      minRockHeight + Math.random() * (maxRockHeight - minRockHeight);
    const rockGeometry = new THREE.SphereGeometry(radius, 6, 5);
    const rockMesh = new THREE.Mesh(rockGeometry, rockMaterial);

    const coords = new THREE.Vector2(
      Math.floor(width * Math.random()),
      Math.floor(height * Math.random())
    );

    if (objectMap.has(`${coords.x}-${coords.y}`)) continue;

    rockMesh.position.set(coords.x + 0.5, 0, coords.y + 0.5);
    rockMesh.scale.y = height;
    rockMesh.castShadow = true;

    group.add(rockMesh);
    objectMap.set(`${coords.x}-${coords.y}`, rockMesh);
  }
};

const createBushes = (
  group: THREE.Group,
  width: number,
  height: number,
  bushCount: number,
  objectMap: Map<string, THREE.Mesh>
) => {
  const minBushRadius = 0.1;
  const maxBushRadius = 0.3;

  const bushMaterial = new THREE.MeshStandardMaterial({
    color: 0x80a040,
    flatShading: true,
  });

  for (let i = 0; i < bushCount; i++) {
    const radius =
      minBushRadius + Math.random() * (maxBushRadius - minBushRadius);
    const bushGeometry = new THREE.SphereGeometry(radius, 8, 8);
    const bushMesh = new THREE.Mesh(bushGeometry, bushMaterial);

    const coords = new THREE.Vector2(
      Math.floor(width * Math.random()),
      Math.floor(height * Math.random())
    );

    if (objectMap.has(`${coords.x}-${coords.y}`)) continue;

    bushMesh.position.set(coords.x + 0.5, radius, coords.y + 0.5);
    bushMesh.castShadow = true;

    group.add(bushMesh);
    objectMap.set(`${coords.x}-${coords.y}`, bushMesh);
  }
};

const clear = (group: THREE.Group, objectMap: Map<string, THREE.Mesh>) => {
  group.children.forEach((child) => {
    if (child instanceof THREE.Mesh) {
      child.geometry.dispose();
      child.material.dispose();
    }
  });
  group.clear();
  objectMap.clear();
};

export { createTerrain, createTrees, createRocks, createBushes, clear };
