import { useState, useRef } from 'react';
import Modal from './Modal';
import { cssForm } from './style';

const Test8 = () => {
  const formRef = useRef();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({});

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    if(e.target.id === 'reset') {
      setValue({});
      setVisible(false);
      formRef.current.reset();
    }
    else setValue({ ...value, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisible(true);
  };
  
  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm} ref={formRef}>
        <input type="text" placeholder="name" id="name" onChange={handleInput} />
        <input type="text" placeholder="age" id="age" onChange={handleInput} />
        <textarea type="text" placeholder="address" id="address" onChange={handleInput}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {visible && <Modal value={value} onReset={handleInput} />}
    </div>
  )
}

export default Test8;