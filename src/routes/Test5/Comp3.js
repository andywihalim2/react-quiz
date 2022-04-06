import { cssWrapper } from "./style";

import { useState, useContext } from "react";
import Comp4 from "./Comp4";
import { TestContext } from ".";

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [ showModal, setShowModal ] = useState(false);
  const [value] = useContext(TestContext);

  const handleModal = () => {
    setShowModal(prev => !prev)
  };

  return(
    <>
      <div className={cssWrapper}>The Inputted Value is: {value}</div>
      <button type="button" onClick={handleModal}>Show Modal</button>
      {showModal && <Comp4 />}
    </>
  )
}

export default Comp3;