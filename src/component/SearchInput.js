import React, { useState } from "react";
import { ProfileData } from "../Data/ProfileData.js";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  //const [filteredProfile, setFilteredProfile] = useState([]);

  const handleSearchInput = (event) => {
    const query = event.target.value;
    // setSearch(query);
    // const newProfile = ProfileData.filter((userProfile) => {
    //   return userProfile.firstName.toLowerCase().includes(query.toLowerCase());
  };

  //);

  // setFilteredProfile(newProfile);

  // };
  console.log(
    ProfileData.filter(
      (dataUser) =>
        dataUser.firstName.toLowerCase().includes(query) ||
        dataUser.lastName.toLowerCase().includes(query) ||
        dataUser.title.toLowerCase().includes(query)
    )
  );

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
