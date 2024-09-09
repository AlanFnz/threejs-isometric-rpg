import React from 'react';
import { Canvas } from '@react-three/fiber';

const App: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default App;
