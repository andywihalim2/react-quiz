import { createRef } from "react";
import useRenderLog from "../../hooks/useRenderLog";
import Input from "./Input";
import Table from "./Table";

const Test7 = () => {
  const inputRef = createRef('');
  useRenderLog('Test7', 1);

  return(
    <div>
      <ul>
        <li>Please filter the table by name search (after press enter or click search button)</li>
        <li>No rerender allowed in <code>Test7</code> component</li>
      </ul>
      <Input ref={inputRef} />
      <div>
        <Table ref={inputRef} />
      </div>
    </div>
  )
}

export default Test7;