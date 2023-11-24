import DATA from "./_data";

const Table = ({ filterQuery }) => {
  const filteredData = DATA.filter(({ name }) =>
    name.toLowerCase().includes(filterQuery.toLowerCase())
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((eachrow, idx) => (
          <tr key={idx}>
            <td>{eachrow.name}</td>
            <td>{eachrow.age}</td>
            <td>{eachrow.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
