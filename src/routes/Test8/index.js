import { useState } from "react";
import Modal from "./Modal";
import { cssForm } from "./style";

const Test8 = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    address: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    const currentName = e.currentTarget.name;
    const newVal = e.currentTarget.value;

    setData({
      ...data,
      [currentName]: newVal,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => {
    setData({
      name: "",
      age: "",
      address: "",
    });
    setIsOpen(false);
  };

  return (
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>
          Reset the form and close the modal when user click the reset button
        </li>
      </ul>
      <form className={cssForm} onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleInput}
        />
        <input
          name="age"
          type="text"
          placeholder="age"
          onChange={handleInput}
        />
        <textarea
          name="address"
          type="text"
          placeholder="address"
          onChange={handleInput}
        />
        <button>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {isOpen && <Modal data={data} onClose={handleClose} />}
    </div>
  );
};

export default Test8;
