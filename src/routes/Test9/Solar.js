import { cssSpace, cssSun, cssOrbit, cssPlanet } from './style'

const Solar = ({ planet }) => {
  return (
    <div className={cssSpace}>
      <div className={cssSun} />
      {planet.map(({ color, radius, orbidRadius, velocity }, index) => (
        <div key={index} className={cssOrbit(orbidRadius, velocity)}>
          <div className={cssPlanet(radius, color)} />
        </div>
      ))}
    </div>
  )
}

export default Solar
