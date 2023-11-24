import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  const [value, setValue] = useState("")

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label value={value} clearInput={() => setValue("")} />
      </p>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export default Test2;