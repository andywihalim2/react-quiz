import { useState } from "react";
import Input from "./Input";
import Table from "./Table";

const Test4 = () => {
  const [query, setQuery] = useState("")

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input handleFilter={(q) => setQuery(q)} />
      <div>
        <Table filterQuery={query} />
      </div>
    </div>
  )
}

export default Test4;