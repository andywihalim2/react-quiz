import Canvas from './Canvas';
import { cssSpace, cssSun, cssPlanet } from './style';

const Solar = () => {
  const width = 800;
  const height = 800;

  return (
    <div className={cssSpace}>
      {/* <div className={cssSun}/> */}
      {/* answer */}
      {/* <div className={cssSun}>
        <div className={cssPlanet()} />
      </div> */}
      <Canvas x={width/2} y={height/2} radius={35} color="yellow" velocity={0} orbitRadius={0} />
      {/* <Canvas x={width/2} y={height/2} radius={5} color="gray" velocity={0.005} orbitRadius={65} /> */}
    </div>
  )
};

export default Solar;
