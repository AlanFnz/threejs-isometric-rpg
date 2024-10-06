import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { button, Leva, useControls } from 'leva';
import RotatingCube from './RotatingCube';
import World from './World';
import { useCubeControls, useWorldControls } from './hooks/useControlsConfig';

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
      <Canvas
        camera={{ position: [5, 5, 5], fov: 75 }}
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={lightIntensity}
          castShadow={true}
        />

        <Stats />

        <OrbitControls />

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
