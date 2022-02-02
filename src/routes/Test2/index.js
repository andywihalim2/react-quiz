import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label />
      </p>
      <Input />
    </div>
  )
}

export default Test2;