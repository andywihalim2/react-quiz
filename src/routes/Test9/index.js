import Solar from "./Solar";
import { useState } from 'react'

const Test9 = () => {
  const [value, setValue] = useState('0')
  const planet = Number(value)

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="text" placeholder="number of planet" value={value} onChange={(e) => setValue(e.target.value)} />
      <Solar planet={planet} />
    </>
  )
}

export default Test9;