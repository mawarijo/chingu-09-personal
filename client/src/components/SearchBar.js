import React from "react";

const SearchBar = ({ onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input placeholder="Search" onChange={onChange} />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
