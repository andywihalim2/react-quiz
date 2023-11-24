import { useTest5Context } from '.';
import { cssWrapper, cssModalRight } from './style';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const {setShowModal, handleGlobalNumber} = useTest5Context()
  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button" onClick={() => setShowModal(false)}>⊗</button>
        </div>
        <input id="mynumber2" type="text" placeholder="input mynumber2" onChange={(e) => handleGlobalNumber(Number(e.currentTarget.value))}></input>
      </div>
    </>
  )
}

export default Comp4;