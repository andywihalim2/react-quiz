import { css } from 'react-emotion';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  button: {
    visibility: 'hidden',
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
  },
  ':hover button': {
  visibility: 'visible'
  }
})

const Label = ({value, clearInput}) => {
  return (
    <span className={cssLabel}>
      {value}
      <button type="button" onClick={() => clearInput()}>⊗</button>
    </span>
  )
}

export default Label;
