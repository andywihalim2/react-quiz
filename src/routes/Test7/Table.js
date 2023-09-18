import React from 'react'

const Table = ({ data }) => {
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
        {data?.map(({ name, age, address }, idx) => (
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

export default Table;
