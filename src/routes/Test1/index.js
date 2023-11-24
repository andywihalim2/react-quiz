import { useState } from "react";

const Test1 = () => {
  const [value, setValue] = useState("")
  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {value}
      </p>
      <input type="text" placeholder="input here" value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}

export default Test1;