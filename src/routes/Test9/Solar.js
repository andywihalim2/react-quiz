import Canvas from './Canvas';
import { cssSpace, cssSun, cssPlanet } from './style';

const Solar = ({ planet }) => {
  return (
    <div className={cssSpace}>
      {/* <div className={cssSun}/> */}
      {/* answer */}
      {/* <div className={cssSun}>
        <div className={cssPlanet()} />
      </div> */}
      <Canvas planet={planet} />
    </div>
  )
};

export default Solar;
