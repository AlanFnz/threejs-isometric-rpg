import { button, useControls } from 'leva';

export const useCubeControls = () => {
  return useControls('Cube Controls', {
    lightIntensity: { value: 3, min: 0, max: 5, step: 0.1 },
    cubeColor: '#ff6347',
    cubePositionX: { value: 0, min: -10, max: 10 },
    cubePositionY: { value: 0, min: -10, max: 10 },
    cubePositionZ: { value: 0, min: -10, max: 10 },
  });
};

export const useWorldControls = () => {
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

  return { width, height, treeCount, rockCount, bushCount };
};
