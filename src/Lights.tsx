import React from 'react';

export const DirectionalLight: React.FC<{
  position: [number, number, number];
  intensity: number;
}> = ({ position, intensity }) => (
  <directionalLight position={position} intensity={intensity} />
);

export const AmbientLight: React.FC<{ intensity: number }> = ({
  intensity,
}) => <ambientLight intensity={intensity} />;
