import { css } from 'react-emotion';
import { useRef } from 'react';

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

const Label = ({ input, onRemove }) => {
  const ref = useRef('');

  const handleHover = state => {
    if(state === 'hover') ref.current.style.display = 'inline-block';
    else  ref.current.style.display = 'none';
  }

  return (
    <span className={cssLabel} onMouseOver={() => handleHover('hover')} onMouseLeave={() => handleHover('leave')} >
      {input || 'RENDER VALUE HERE'}
      <button type="button" ref={ref} style={{ display: 'none' }} onClick={onRemove}>⊗</button>
    </span>
  )
}

export default Label;
