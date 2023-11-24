import { cssWrapper } from './style';

import { useEffect, useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = ({mynumber, globalnumber}) => {
  const [value, setValue] = useState(false);
  const [mynumber1, setMynumber1] = useState(0)

  const [latestSource, setLatestSource] = useState("")
  const [latestNum, setLatestNum] = useState(0)

  useEffect(() => {
    setLatestSource("Test5/index")
    setLatestNum(mynumber)
  }, [mynumber])

  useEffect(() => {
    setLatestSource("Test5/Comp4")
    setLatestNum(globalnumber)
    setMynumber1(globalnumber)
  }, [globalnumber])

  const handleChange = (e) => {
    const newVal = Number(e.currentTarget.value)
    setMynumber1(newVal)
    setLatestNum(newVal)
    setLatestSource("Test5/Comp1")
  }

  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>[{latestSource}]</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" value={value} onChange={() => setValue(!value)}/>
        {/* only show when overwrite is checked */}
        {value && <input id="mynumber1" type="number" placeholder="input mynumber1" value={mynumber1} onChange={handleChange}/>}
      </label>
      <Comp2 latestVal={latestNum} />
    </div>
  )
}

export default Comp1;