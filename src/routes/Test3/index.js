import { useRef } from "react";

const Test3 = () => {
  const ref = useRef();

  const handleClick = () => {
    ref.current.focus();
  };

  return(
    <div>
      <ul>
        <li>Please focus to the text field when user click the focus button</li>
      </ul>
      <p>
        <button type="button" onClick={handleClick}>Focus Text Field</button>
      </p>
      <input type="text" placeholder="focus me" ref={ref}/>
    </div>
  )
}

export default Test3;