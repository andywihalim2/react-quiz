
import { useState, createContext } from 'react';

import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import { cssWrapper } from './style';

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

export const TestContext = createContext(0);

const Test5 = () => {
  const [input, setInput] = useState(0);
  const [valueContext, setValueContext] = useState();

  const handleChange = (e) => {
    setInput(parseInt(e.target.value || 0, 10));
  };

  const handleAdd = () => {
    setInput(prev => prev + 1);
  };

  const handleMin = () => {
    setInput(prev=> prev - 1);
  };

  return(
    <TestContext.Provider value={[valueContext, setValueContext]}>
      {question}
      <button id="numbermin" type="button" onClick={handleMin}>-</button>
      <input id="mynumber" type="text" placeholder="input mynumber" value={valueContext} onChange={handleChange} />
      <button id="numberplus" type="button" onClick={handleAdd}>+</button>
      <br/>
      <br/>
      <div className={cssWrapper}>
        The inputted value is {input % 2===0 ? 'EVEN' : 'ODD'}
      </div>
      <Comp1 prevInput={input}/>
      <Comp3 />
    </TestContext.Provider>
  )
}

export default Test5;