import React from "react";

const Table = ({ landings }) => (
  <table>
    <thead>
      <tr>
        <td>Name</td>
        <td>Id</td>
        <td>Name Type</td>
        <td>Rec Class</td>
        <td>Mass (g)</td>
        <td>Fall</td>
        <td>Year</td>
        <td>Latitude</td>
        <td>Longitude</td>
      </tr>
    </thead>
    <tbody>
      {landings.map(landing => (
        <tr key={landing.id}>
          <td>{landing.name}</td>
          <td>{landing.id}</td>
          <td>{landing.nametype}</td>
          <td>{landing.recclass}</td>
          <td>{landing.mass}</td>
          <td>{landing.fall}</td>
          <td>{landing.year && landing.year.slice(0, 4)}</td>
          <td>{landing.reclat}</td>
          <td>{landing.reclong}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
