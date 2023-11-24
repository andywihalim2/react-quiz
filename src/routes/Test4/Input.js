
const Input = ({handleFilter}) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)
    const searchQuery = data.get('search')
    console.log(searchQuery)

    handleFilter(searchQuery)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="search" name="search" id="search" />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
