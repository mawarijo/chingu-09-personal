import React from "react";

import "./Table.css";

const Table = ({ landings }) => (
  <table className="table">
    <thead className="table__head">
      <tr className="table__row">
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
    <tbody className="table__body">
      {landings.map(landing => (
        <tr className="table__row" key={landing.id}>
          <td className="table__cell">{landing.name}</td>
          <td className="table__cell">{landing.id}</td>
          <td className="table__cell">{landing.nametype}</td>
          <td className="table__cell">{landing.recclass}</td>
          <td className="table__cell">{landing.mass}</td>
          <td className="table__cell">{landing.fall}</td>
          <td className="table__cell">
            {landing.year && landing.year.slice(0, 4)}
          </td>
          <td className="table__cell">{landing.reclat}</td>
          <td className="table__cell">{landing.reclong}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
