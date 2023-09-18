import useRenderLog from "../../hooks/useRenderLog";
import Input from "./Input";
import Table from "./Table";
import _data from './_data'
import { useState, useRef, useCallback, useMemo } from 'react'

const Test7 = () => {
  useRenderLog('Test7', 1);

  const inputRef = useRef();
  const [filteredData, setFilteredData] = useState(_data);

  const handleFilter = useCallback(() => {
    const name = inputRef.current.value.toLowerCase();
    const filtered = _data.filter(item => item.name.toLowerCase().includes(name));
    setFilteredData(filtered); // trigger rerender
  }, []);

  const filteredDataMemo = useMemo(() => filteredData, [filteredData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    handleFilter();
  }, [handleFilter]);

  return (
    <div>
      <ul>
        <li>Please filter the table by name search (after press enter or click search button)</li>
        <li>No rerender allowed in <code>Test7</code> component</li>
      </ul>
      <Input inputRef={inputRef} onSubmit={handleSubmit} />
      <div>
        <Table data={filteredDataMemo} />
      </div>
    </div>
  )
}

export default Test7;