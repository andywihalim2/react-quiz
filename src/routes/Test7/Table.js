import _data from './_data'

const Table = ({ keyword }) => {
  const filtered = keyword ? _data.filter(({ name }) => name.toLowerCase().includes(keyword.toLowerCase())) : _data

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
        {filtered?.map(({ name, age, address }, idx) => (
          <tr key={idx}>
            <td>{name}</td>
            <td>{age}</td>
            <td>{address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
