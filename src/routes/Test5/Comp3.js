import { cssWrapper } from "./style";

import { useState } from "react";
import Comp4 from "./Comp4";
import { useTest5Context } from ".";

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const {mynumber, showModal, setShowModal} = useTest5Context()

  return(
    <>
      <div className={cssWrapper}>The Inputted Value is: {mynumber}</div>
      <button type="button" onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && <Comp4/>}
    </>
  )
}

export default Comp3;