import { useRef, useEffect, useState } from 'react';

const PLANETS = [
  { radius: 5, velocity: 5, orbitRadius: 65, color: 'gray'},
  { radius: 10, velocity: 4, orbitRadius: 90, color: 'orange'},
  { radius: 15, velocity: 3, orbitRadius: 125, color: 'blue'},
  { radius: 20, velocity: 3.5, orbitRadius: 175, color: 'red'},
  { radius: 25, velocity: 3, orbitRadius: 225, color: 'pink'},
  { radius: 15, velocity: 2, orbitRadius: 325, color: 'purple'},
  { radius: 7, velocity: 1, orbitRadius: 450, color: 'green'},
];

const x = 400; // center
const y = 400; // center

const Canvas = ({ planet = 0 }) => {
  const canvasRef = useRef();
  const [radianPlanets, setRadianPlanets] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const draw = (c) => {
        // clear canvas when planet change
        c.clearRect(0, 0, canvas.width, canvas.height);

        // Sun
        c.beginPath();
        c.arc(x, y , 50, 0, Math.PI * 2, false);
        c.fillStyle = 'yellow';
        c.fill();

        // Planets
        for(let i=0; i<planet; i++){
          const { velocity, orbitRadius, color, radius } = PLANETS[i];
          setRadianPlanets(prev => [...prev, velocity])
          c.beginPath();
          c.arc(x + Math.cos(velocity) * orbitRadius, y + Math.sin(velocity) * orbitRadius, radius, 0, Math.PI * 2, false);
          c.fillStyle = color;
          c.fill();
        }
    }

    

    //Our draw come here
    draw(context);
  }, [planet]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const update = (c) => {
      // Planets
      let newRadianPlanets = [];
      for(let i=0; i<planet; i++){
        const { velocity, orbitRadius, color, radius } = PLANETS[i];
        newRadianPlanets = [...newRadianPlanets, radianPlanets[i]+velocity];
        c.beginPath();
        c.arc(x + Math.cos(velocity) * orbitRadius, y + Math.sin(velocity) * orbitRadius, radius, 0, Math.PI * 2, false);
        c.fillStyle = color;
        c.fill();
     }
     setRadianPlanets(newRadianPlanets);
    }

    requestAnimationFrame(() => update(context));
  })

  return (
      <canvas ref={canvasRef} width={800} height={800} />
  )
};

export default Canvas;
