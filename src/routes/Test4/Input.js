const Input = ({ inputRef, onSubmit }) => {
  return (
    <form>
      <input type='text' placeholder='search' ref={inputRef} />
      <button type='submit' onClick={onSubmit}>
        🔍
      </button>
    </form>
  )
}

export default Input
