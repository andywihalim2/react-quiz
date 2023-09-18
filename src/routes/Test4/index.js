import Input from "./Input";
import Table from "./Table";
import _data from './_data'
import { useState } from 'react'

const Test4 = () => {
  const [data, setData] = useState(_data)
  const [keyword, setKeyword] = useState('')

  const onSearchClick = () => {
    const filtered = _data?.filter((item) => item?.name?.toLowerCase().includes(keyword.toLowerCase()))
    setData(filtered)
  }

  return (
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input keyword={keyword} setKeyword={setKeyword} onSearchClick={onSearchClick} />
      <div>
        <Table data={data} />
      </div>
    </div>
  )
}

export default Test4;