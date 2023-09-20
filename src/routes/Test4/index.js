import Input from './Input'
import Table from './Table'
import { useRef, useState } from 'react'

const Test4 = () => {
  const inputRef = useRef()
  const [keyword, setKeyword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setKeyword(inputRef.current.value)
  }

  return (
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input inputRef={inputRef} onSubmit={onSubmit} />
      <div>
        <Table keyword={keyword} />
      </div>
    </div>
  )
}

export default Test4
