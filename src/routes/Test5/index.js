
import { cssWrapper } from './style';

import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import { createContext, useContext, useState } from 'react';

const question = (
  <ul>
    <li>primarily, user can input the value from <code>#mynumber</code></li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>Show <b>ODD</b> or <b>EVEN</b> in first render section</li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code> checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of input in <code>Comp1</code> and it's value in{' '}<code>Comp2</code>
    </li>
    <li><code>Comp2</code> will display latest inputted from <code>#mynumber</code> &amp; <code>#mynumber1</code></li>
    <li><code>Comp3</code> will display <code>#mynumber</code></li>
    <li>show <code>Comp4</code> modal when user click <b>Show Modal</b> button in <code>Comp3</code></li>
    <li>update whole <code>input</code> and value render when user input <code>#mynumber2</code></li>
  </ul>
);

const Test5Context = createContext()

export const useTest5Context = () => useContext(Test5Context)

const Test5 = () => {
  const [mynumber, setMynumber] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [globalnumber, setGlobalnumber] = useState(0)

  const handleGlobalNumber = (num) => {
    setMynumber(num)
    setGlobalnumber(num)
  }

  return(
    <div>
      {question}
      <button id="numbermin" type="button" onClick={() => setMynumber(mynumber - 1)}>-</button>
      <input id="mynumber" type="number" placeholder="input mynumber" value={mynumber} onChange={(e) => setMynumber(Number(e.currentTarget.value))}/>
      <button id="numberplus" type="button" onClick={() => setMynumber(mynumber + 1)}>+</button>
      <br/>
      <br/>
      <div className={cssWrapper}>
        The inputted value is {mynumber % 2 === 0 ? "EVEN" : "ODD"}
      </div>
      <Comp1 mynumber={mynumber} globalnumber={globalnumber} />
      <Test5Context.Provider value={{
        mynumber,
        showModal,
        setShowModal,
        handleGlobalNumber
      }}>
      <Comp3/>
      </Test5Context.Provider>
    </div>
  )
}

export default Test5;