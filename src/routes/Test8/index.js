import Modal from './Modal';
import { cssForm } from './style';

const Test8 = () => {
  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = () => {
    //...
  };

  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm}>
        <input type="text" placeholder="name" onChange={handleInput}/>
        <input type="text" placeholder="age" onChange={handleInput}/>
        <textarea type="text" placeholder="address" onChange={handleInput}/>
        <button>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      <Modal />
    </div>
  )
}

export default Test8;