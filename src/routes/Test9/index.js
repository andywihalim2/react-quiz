import { useState } from "react";
import Solar from "./Solar";

const Test9 = () => {
  const [numPlanets, setNumPlanets] = useState(5);

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input
        value={numPlanets}
        onChange={(e) => setNumPlanets(e.currentTarget.value)}
        type="text"
        placeholder="number of planet"
      />
      <Solar numPlanets={numPlanets} />
    </>
  );
};

export default Test9;
