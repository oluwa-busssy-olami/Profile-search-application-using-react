import React, { useState } from "react";
import { ProfileData } from "../Data/ProfileData.js";

const SearchInput = () => {
  const [search, setSearch] = new useState(ProfileData);
  //const [filteredProfile, setFilteredProfile] = useState([]);

  const handleSearchInput = (event) => {
    const query = event.target.value;

    let newProfile = [...ProfileData];
    newProfile = newProfile.filter((dataUser) => {
      return dataUser.firstName.toLowerCase().includes(query);
    });
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
