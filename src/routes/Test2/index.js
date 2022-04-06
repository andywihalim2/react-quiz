import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onRemove = (e) => {
    setInput('');
  };

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label input={input} onRemove={onRemove} />
      </p>
      <Input input={input} onChange={onChange} value={input} />
    </div>
  )
}

export default Test2;