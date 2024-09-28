import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import RotatingCube from './RotatingCube';

const App: React.FC = () => {
  const {
    lightIntensity,
    cubeColor,
    cubePositionX,
    cubePositionY,
    cubePositionZ,
  } = useControls({
    lightIntensity: { value: 1.5, min: 0, max: 5, step: 0.1 },
    cubeColor: '#ff6347',
    cubePositionX: { value: 0, min: -10, max: 10 },
    cubePositionY: { value: 0, min: -10, max: 10 },
    cubePositionZ: { value: 0, min: -10, max: 10 },
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
          color="red"
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
      </Canvas>

      <Leva />
    </>
  );
};

export default App;
