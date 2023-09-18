import Input from "./Input";
import Label from "./Label";
import { useState } from 'react'

const Test2 = () => {
  const [value, setValue] = useState('')

  const props = {
    value,
    setValue
  }

  return (
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label {...props} />
      </p>
      <Input {...props} />
    </div>
  )
}

export default Test2;