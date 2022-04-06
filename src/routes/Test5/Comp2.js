import { useState, useEffect } from 'react';
import { cssWrapper } from './style';

const Comp2 = ({ input, prevInput }) => {
  const [value, setValue] = useState(input);

  useEffect(() => {
    setValue(prevInput);
  }, [prevInput]);

  useEffect(() => {
    setValue(input);
  }, [input]);
 
  return(
    <>
      <div className={cssWrapper}>Latest inputted value is: {value}</div>
    </>
  )
}

export default Comp2;