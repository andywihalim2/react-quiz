import DATA from "./_data";

const Table = ({filterQuery}) => {

  function filterObjectsByName(arr, query) {
    const filteredObjects = arr.filter(object => object.name.toLowerCase().includes(query.toLowerCase()));
    return filteredObjects;
  }

  const filteredData = filterObjectsByName(DATA, filterQuery)

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        {
          filteredData.map((data, idx) => (
            <tr key={idx}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.address}</td>
            </tr>
          ))
        }
      </thead>
    </table>
  )
}

export default Table;
