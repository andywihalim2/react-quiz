import DATA from "./_data";

const Table = ({filter}) => {
  const newData = filter ? DATA.filter(value => value.name.toLowerCase().indexOf(filter) >= 0) : DATA;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        {newData.map(({ name, age, address }) => (
          <tr key={address}>
            <td>{name}</td>
            <td>{age}</td>
            <td>{address}</td>
          </tr>
        ))}
      </thead>
    </table>
  )
}

export default Table;
