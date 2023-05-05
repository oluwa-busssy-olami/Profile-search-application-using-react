import React, { useState } from "react";

const SearchInput = ({ search, setSearch }) => {
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="searchInput">
      <input
        type="text"
        value={search}
        placeholder="search by name..."
        onChange={handleSearchInput}
      />{" "}
    </div>
  );
};

export default SearchInput;
