import { cssModal } from "./style"

const Modal = ({ isModalOpen, value, onReset }) => {

  if (!isModalOpen) return null;

  return (
    <div className={cssModal}>
      Name: {value?.name}
      <br />
      Age: {value?.age}
      <br />
      Address: {value?.address}
      <br />
      <button onClick={(e) => {
        e.preventDefault()
        onReset()
      }}>Reset</button>
    </div>
  );
};

export default Modal;
