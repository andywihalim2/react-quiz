const Input = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.filter.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="filter" type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Input;
