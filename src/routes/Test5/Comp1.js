
import { useState, useContext, useEffect} from "react";

import Comp2 from "./Comp2";
import { cssWrapper } from './style';
import { TestContext } from ".";

const Comp1 = ({ prevInput }) => {
  const [value] = useContext(TestContext);
  const [check, setCheck] = useState(false);
  const [input, setInput] = useState(0);

  const handleCheck = () => {
    setCheck(prev => !prev);
  };

  const handleChange = e => {
    setInput(parseInt(e.target.value || 0, 10));
  };

  useEffect(() => {
    if(check) setInput(value);
  }, [value, check])

  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>{input}</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" onChange={handleCheck} />
        {/* only show when overwrite is checked */}
        {check && <input id="mynumber1" type="number" value={input} placeholder="input mynumber1" onChange={handleChange} />}
      </label>
      <Comp2 input={input} prevInput={prevInput} />
    </div>
  )
}

export default Comp1;