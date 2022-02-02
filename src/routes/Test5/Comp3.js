import { cssWrapper } from "./style";

import { useState } from "react";
import Comp4 from "./Comp4";

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [ showModal ] = useState(true);

  return(
    <>
      <div className={cssWrapper}>The Inputted Value is: ______*</div>
      <button type="button">Show Modal</button>
      {showModal && <Comp4/>}
    </>
  )
}

export default Comp3;