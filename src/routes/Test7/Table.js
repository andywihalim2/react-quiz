import DATA from "./_data";
import { useState, forwardRef } from "react";

const Table = forwardRef((props, ref) => {
  const [filter, setFilter] = useState();
  const newData = filter ? DATA.filter(value => value.name.toLowerCase().indexOf(filter) >= 0) : DATA;

  const handleSearch = () => {
    setFilter(ref.current.value);
  };

  return (
    <table onClick={handleSearch}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {newData.map((eachrow, idx) => (
          <tr key={idx}>
            <td>{eachrow.name}</td>
            <td>{eachrow.age}</td>
            <td>{eachrow.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
});

export default Table;
