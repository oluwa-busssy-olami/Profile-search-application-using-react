import React, { useState } from "react";
import { ProfileData } from "../Data/ProfileData.js";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [filteredProfile, setFilteredProfile] = useState([]);

  const handleSearchInput = (event) => {
    const query = event.target.value;
    setSearch(query);

    setFilteredProfile(
      ProfileData.filter((profiledat) =>
        profiledat.firstName.toLowerCase().includes(query.toLowerCase())
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
