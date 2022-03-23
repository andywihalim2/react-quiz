import { useRef, useEffect } from 'react';

const Canvas = ({ x, y, radius, color, velocity = 0, orbitRadius = 0 }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const draw = (c) => {
        c.beginPath();
        c.lineWidth = 2;
        c.arc(
            x, y, orbitRadius,
            0,
            Math.PI * 2,
            false
        );
        c.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        c.stroke();

        // Planet
        c.shadowBlur = 15;
        c.shadowColor = color;
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.fillStyle = color;
        c.fill();
        c.shadowBlur = 0;

        if(velocity > 0) {
            c.beginPath();
            c.arc(x + orbitRadius + radius, y, 2, 0, Math.PI * 2, false);
            c.fillStyle = 'gray';
            c.fill();
        }
    }

    //Our draw come here
    draw(context)
  }, [x, y, radius, color, velocity, orbitRadius])

  return (
      <canvas ref={canvasRef} width={800} height={800} />
  )
};

export default Canvas;
