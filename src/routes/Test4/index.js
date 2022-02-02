import Input from "./Input";
import Table from "./Table";

const Test4 = () => {
  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input />
      <div>
        <Table />
      </div>
    </div>
  )
}

export default Test4;