import React, { useState } from "react";
import { ProfileData } from "../Data/ProfileData.js";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const profileOject = ["id", "title", "firstName", "lastName"];
  const inputSearch = ({ ProfileData }) => {
    return { ProfileData }.filter((profilePerson) =>
      profileOject.some((profileOjects) =>
        profileOject[profileOjects].toLowerCase().includes(search.toLowerCase())
      )
    );
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
