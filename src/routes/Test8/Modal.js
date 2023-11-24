import { cssModal } from "./style";

const Modal = ({ data, onClose }) => {
  return (
    <div className={cssModal}>
      Name: {data.name}
      <br />
      Age: {data.age}
      <br />
      Address: {data.address}
      <br />
      <button onClick={onClose}>Reset</button>
    </div>
  );
};

export default Modal;
