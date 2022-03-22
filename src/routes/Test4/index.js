import { useState } from "react";
import Input from "./Input";
import Table from "./Table";

const Test4 = () => {
  const [filter, setFilter] = useState('');

  const handleFilter = value => {
    setFilter(value);
  };

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input onSubmit={handleFilter} />
      <div>
        <Table filter={filter} />
      </div>
    </div>
  )
}

export default Test4;