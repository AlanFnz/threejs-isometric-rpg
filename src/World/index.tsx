import React, { useEffect, useRef, useMemo } from 'react';
import { Group, Mesh } from 'three';
import { useThree } from '@react-three/fiber';
import {
  clear,
  createBushes,
  createRocks,
  createTerrain,
  createTrees,
} from './utils';

interface WorldProps {
  width: number;
  height: number;
  treeCount?: number;
  rockCount?: number;
  bushCount?: number;
}

const World: React.FC<WorldProps> = ({
  width,
  height,
  treeCount = 10,
  rockCount = 20,
  bushCount = 10,
}) => {
  const groupRef = useRef<Group>(new Group());
  const objectMap = useMemo(() => new Map<string, Mesh>(), []);

  const { scene } = useThree();

  useEffect(() => {
    const worldGroup = groupRef.current;

    createTerrain(worldGroup, width, height);
    createTrees(worldGroup, width, height, treeCount, objectMap);
    createRocks(worldGroup, width, height, rockCount, objectMap);
    createBushes(worldGroup, width, height, bushCount, objectMap);

    scene.add(worldGroup);

    return () => {
      clear(worldGroup, objectMap);
      scene.remove(worldGroup);
    };
  }, [scene, width, height, treeCount, rockCount, bushCount, objectMap]);

  return null;
};

export default World;
