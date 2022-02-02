import DATA from "./_data";

const Table = () => {
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
        {DATA.map((eachrow, idx) => (
          <tr key={idx}>
            <td>{eachrow.name}</td>
            <td>{eachrow.age}</td>
            <td>{eachrow.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
