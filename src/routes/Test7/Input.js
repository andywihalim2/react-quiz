import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input type="text" placeholder="search" ref={ref}/>
      <button type="submit" onClick={handleSearch}>🔍</button>
    </form>
  )
});

export default Input;
