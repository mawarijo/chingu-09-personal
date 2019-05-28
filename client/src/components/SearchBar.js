import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onChange, onSubmit }) => (
  <form className="search-bar__form" onSubmit={onSubmit}>
    <input
      className="search-bar__input"
      onChange={onChange}
      placeholder="Search term"
    />
    <button className="search-bar__button" type="submit">
      Search
    </button>
  </form>
);

export default SearchBar;
