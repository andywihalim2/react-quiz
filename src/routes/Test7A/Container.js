import { useState } from "react";
import Input from "./Input";
import Table from "./Table";

const Container = () => {
  const [input, setInput] = useState('');

  const handleSearch = value => {
    setInput(value);
  };

  return(
    <>
      <Input onSearch={handleSearch} />
      <div>
        <Table input={input} />
      </div>
    </>
  )
}

export default Container;