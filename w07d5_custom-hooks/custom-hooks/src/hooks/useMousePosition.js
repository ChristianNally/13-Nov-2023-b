import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener('mousemove', event => {
      setCoords({ x: event.clientX, y: event.clientY});
    });
  }, []);

  return coords;
};

export default useMousePosition;
