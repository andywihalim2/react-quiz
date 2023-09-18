import { cssWrapper } from "./style";

import { useState } from "react";
import Comp4 from "./Comp4";
import { useValue } from ".";
import { createContext, useContext } from 'react'

const ModalContext = createContext()

export const useModal = () => {
  return useContext(ModalContext);
};

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { value } = useValue()

  return (
    <ModalContext.Provider value={{ setIsShowModal }}>
      <div className={cssWrapper}>The Inputted Value is: {value}*</div>
      <button type="button" onClick={() => setIsShowModal(true)}>Show Modal</button>
      {isShowModal && <Comp4 />}
    </ModalContext.Provider>
  )
}

export default Comp3;