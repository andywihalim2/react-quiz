const Input = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(e.target.search.value.toLowerCase())
  };

  return (
    <form onSubmit={handleSearch}>
      <input id="search" type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  )
};

export default Input;
