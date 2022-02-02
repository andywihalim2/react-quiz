import { cssModal } from "./style"

const Modal = () => {
  return (
    <div className={cssModal}>
      Name: _____
      <br/>
      Age: _____
      <br/>
      Address: _____
      <br/>
      <button>Reset</button>
    </div>
  );
};

export default Modal;
