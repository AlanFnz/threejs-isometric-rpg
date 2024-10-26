import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const CameraController: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const cameraPositionX = width;
    const cameraPositionY = Math.max(width, height);
    const cameraPositionZ = height;

    camera.position.set(cameraPositionX, cameraPositionY, cameraPositionZ);

    controlsRef.current.target.set(width / 2, 0, height / 2);
    controlsRef.current.update();

    camera.lookAt(width / 2, 100, height / 2);
  }, [camera, width, height]);

  return <OrbitControls ref={controlsRef} />;
};

export default CameraController;
