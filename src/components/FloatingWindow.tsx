import React, { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

const FloatingWindow: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ position: 'absolute', top: position.y, left: position.x }}>
      {/* Your content here */}
    </div>
  );
};

export default FloatingWindow;