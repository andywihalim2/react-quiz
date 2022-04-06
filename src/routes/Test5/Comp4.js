import { useContext } from "react";
import { cssWrapper, cssModalRight } from './style';
import { TestContext } from ".";

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const [_, setInput] = useContext(TestContext);

  const handleChange = (e) => {
    setInput(parseInt(e.target.value || 0), 10);
  };
  
  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button">⊗</button>
        </div>
        <input id="mynumber2" type="text" placeholder="input mynumber2" onChange={handleChange}></input>
      </div>
    </>
  )
}

export default Comp4;