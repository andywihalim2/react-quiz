import { useState } from 'react'
import Input from './Input'
import Table from './Table'

const Container = () => {
  const [keyword, setKeyword] = useState('')

  const onSearch = (value) => {
    setKeyword(value)
  }

  return (
    <>
      <Input onSearch={onSearch} />
      <div>
        <Table keyword={keyword} />
      </div>
    </>
  )
}

export default Container
