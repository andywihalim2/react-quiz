import Solar from './Solar'
import { useEffect, useState } from 'react'

const planets = [
  { color: 'red', radius: 5, orbidRadius: 80, velocity: 3 },
  { color: 'gray', radius: 10, orbidRadius: 110, velocity: 4 },
  { color: 'blue', radius: 15, orbidRadius: 150, velocity: 5 },
  { color: 'green', radius: 20, orbidRadius: 200, velocity: 6 },
  { color: 'yellow', radius: 30, orbidRadius: 270, velocity: 7 },
  { color: 'purple', radius: 40, orbidRadius: 360, velocity: 8 },
  { color: 'pink', radius: 50, orbidRadius: 460, velocity: 9 },
  { color: 'orange', radius: 60, orbidRadius: 580, velocity: 10 },
]

export const maxPlanet = planets.length

const Test9 = () => {
  const [value, setValue] = useState('0')
  const [data, setData] = useState(planets)
  const planet = Number(value)

  const onChange = (e) => {
    const planet = Number(e.target.value)

    if (planet > maxPlanet) {
      alert(`max planet is ${maxPlanet}`)
      return
    }

    setValue(planet)
  }

  useEffect(() => {
    const newData = planets.slice(0, planet)
    setData(newData)
  }, [planet])

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type='text' placeholder='number of planet' value={value} onChange={onChange} />
      <Solar planet={data} />
    </>
  )
}

export default Test9
