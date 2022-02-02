import { cssWrapper, cssModalRight } from './style';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button">⊗</button>
        </div>
        <input id="mynumber2" type="text" placeholder="input mynumber2"></input>
      </div>
    </>
  )
}

export default Comp4;