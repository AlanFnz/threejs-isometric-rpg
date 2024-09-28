import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import RotatingCube from './RotatingCube';

const App: React.FC = () => {
  return (
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
        intensity={1.5}
        castShadow={true}
      />

      <Stats />

      <OrbitControls />

      <RotatingCube />
    </Canvas>
  );
};

export default App;
