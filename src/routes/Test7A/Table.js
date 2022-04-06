import DATA from "./_data";

const Table = ({ input }) => {
  const newData = input ? DATA.filter(value => value.name.toLowerCase().indexOf(input) >= 0) : DATA;

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
};

export default Table;
