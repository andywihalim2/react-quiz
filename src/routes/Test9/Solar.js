import React from "react";
import { cssSpace, cssSun, cssPlanet, cssOrbit } from "./style";

const Solar = ({ numPlanets }) => {
  const sunRadius = 40;

  return (
    <div className={cssSpace}>
      <div className={cssSun}>
        {Array.from({ length: numPlanets }).map((_, index) => (
          <Planet
            key={index}
            distance={(index + 1) * (sunRadius * 2)}
            planetNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

const Planet = ({ distance, planetNumber }) => {
  console.log(distance);
  const planetStyle = cssPlanet(distance);
  const orbitStyle = cssOrbit(distance, planetNumber);

  return (
    <div className={orbitStyle}>
      <div className={planetStyle}>-</div>
    </div>
  );
};

export default Solar;
