import { useState } from "react";
import Solar from "./Solar";

const Test9 = () => {
  const [planet, setPlanet] = useState(0);

  const handleChange = (e) => {
    const currPlanet = parseInt(e.target.value, 10);
    
    if(currPlanet > 7) {
      alert('Max planet is 7');
      return;
    }

    setPlanet(parseInt(e.target.value, 10));
  }

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="text" placeholder="number of planet" onChange={handleChange} />
      <Solar planet={planet} />
    </>
  )
}

export default Test9;