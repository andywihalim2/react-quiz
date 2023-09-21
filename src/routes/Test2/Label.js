import { css } from 'react-emotion';
import { useState } from 'react'

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  button: {
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
  }
})

const Label = ({ value, setValue }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span className={cssLabel} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {value}
      {isHovered && <button type="button" onClick={() => setValue('')}>⊗</button>}
    </span>
  )
}

export default Label;
