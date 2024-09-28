import React from 'react';
import { Canvas } from '@react-three/fiber';
import RotatingCube from './RotatingCube';

const App: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <RotatingCube />
    </Canvas>
  );
};

export default App;
