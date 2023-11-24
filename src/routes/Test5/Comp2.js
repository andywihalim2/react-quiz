import { cssWrapper } from './style';

const Comp2 = ({latestVal}) => {
  return(
    <>
      <div className={cssWrapper}>Latest inputted value is: {latestVal}</div>
    </>
  )
}

export default Comp2;