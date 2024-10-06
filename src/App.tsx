import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { button, Leva, useControls } from 'leva';
import RotatingCube from './RotatingCube';
import World from './World';

const App: React.FC = () => {
  const {
    lightIntensity,
    cubeColor,
    cubePositionX,
    cubePositionY,
    cubePositionZ,
  } = useControls('Cube Controls', {
    lightIntensity: { value: 3, min: 0, max: 5, step: 0.1 },
    cubeColor: '#ff6347',
    cubePositionX: { value: 0, min: -10, max: 10 },
    cubePositionY: { value: 0, min: -10, max: 10 },
    cubePositionZ: { value: 0, min: -10, max: 10 },
  });

  const { width, height, treeCount, rockCount, bushCount } = useControls(
    'World Controls',
    {
      width: { value: 20, min: 1, max: 100, step: 1 },
      height: { value: 20, min: 1, max: 100, step: 1 },
      treeCount: { value: 10, min: 1, max: 100, step: 1 },
      rockCount: { value: 20, min: 1, max: 100, step: 1 },
      bushCount: { value: 10, min: 1, max: 100, step: 1 },
    }
  );

  useControls('World Controls', {
    generate: button(() => {
      console.log('Generating world with current parameters:', {
        width,
        height,
        treeCount,
        rockCount,
        bushCount,
      });
    }),
  });

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
