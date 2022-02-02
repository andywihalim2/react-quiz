import { cssWrapper } from './style';

import { useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = () => {
  const [value] = useState(0);

  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" value={value}/>
        {/* only show when overwrite is checked */}
        <input id="mynumber1" type="text" placeholder="input mynumber1"/>
      </label>
      <Comp2 />
    </div>
  )
}

export default Comp1;