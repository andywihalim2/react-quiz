import { useRef } from "react";

const Test3 = () => {
  const ref = useRef()

  return(
    <div>
      <ul>
        <li>Please focus to the text field when user click the focus button</li>
      </ul>
      <p>
        <button type="button" onClick={() => ref.current.focus()}>Focus Text Field</button>
      </p>
      <input ref={ref} type="text" placeholder="focus me"/>
    </div>
  )
}

export default Test3;