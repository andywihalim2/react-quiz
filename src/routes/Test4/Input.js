
const Input = ({ keyword, setKeyword, onSearchClick }) => {
  return (
    <form>
      <input type="text" placeholder="search" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button type="submit" onClick={(e) => {
        e.preventDefault()
        onSearchClick()
      }}>🔍</button>
    </form>
  )
}

export default Input;
