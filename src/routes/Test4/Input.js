
const Input = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.search.value.toLowerCase())
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="search" type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
