import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import { useCubeControls, useWorldControls } from './hooks/useControlsConfig';
import { Leva } from 'leva';
import RotatingCube from './RotatingCube';
import World from './components/World';
import CameraController from './components/CameraController';

const App: React.FC = () => {
  const {
    lightIntensity,
    cubeColor,
    cubePositionX,
    cubePositionY,
    cubePositionZ,
  } = useCubeControls();

  const { width, height, treeCount, rockCount, bushCount } = useWorldControls();

  return (
    <>
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <ambientLight intensity={0.1} />

        <directionalLight
          position={[10, 10, 5]}
          intensity={lightIntensity}
          castShadow={true}
        />

        <Stats />

        <CameraController width={width} height={height} />

        <RotatingCube
          position={[cubePositionX, cubePositionY, cubePositionZ]}
          color={cubeColor}
        />

        <World
          width={width}
          height={height}
          treeCount={treeCount}
          rockCount={rockCount}
          bushCount={bushCount}
        />
      </Canvas>
      <Leva />
    </>
  );
};

export default App;
