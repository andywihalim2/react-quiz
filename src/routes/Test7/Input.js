const Input = ({ inputRef, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="search" ref={inputRef} />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
