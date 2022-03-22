import { cssModal } from "./style"

const Modal = ({ value, onReset }) => {
  const { name, age, address } = value;
  return (
    <div className={cssModal}>
      Name: {name}
      <br/>
      Age: {age}
      <br/>
      Address: {address}
      <br/>
      <button id="reset" onClick={onReset}>Reset</button>
    </div>
  );
};

export default Modal;
