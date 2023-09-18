import { cssSpace, cssSun, cssPlanet } from './style';

const Solar = ({ planet }) => {
  return (
    <div className={cssSpace}>
      {/* <div className={cssSun} /> */}
      {/* answer */}
      <div className={cssSun}>
        <div className={cssPlanet()} />
      </div>
    </div>
  )
};

export default Solar;
