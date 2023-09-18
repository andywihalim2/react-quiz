import { useValue } from '.';
import { useModal } from './Comp3';
import { cssWrapper, cssModalRight } from './style';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const { setValue } = useValue()
  const { setIsShowModal } = useModal()

  return (
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button" onClick={() => setIsShowModal(false)}>⊗</button>
        </div>
        <input id="mynumber2" type="text" placeholder="input mynumber2" onChange={(e) => setValue(e.target.value)}></input>
      </div>
    </>
  )
}

export default Comp4;