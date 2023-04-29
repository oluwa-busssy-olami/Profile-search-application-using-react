import React, { useState } from "react";
import { ProfileData } from "../Data/ProfileData.js";

const SearchInput = ({ setProfileFiltered }) => {
  const [SearchInput, setSearchInput] = useState("");
  const handleSearchInput = (event) => {
    const query = event.target.value;
    setSearchInput(query);
    setProfileFiltered(
      ProfileData.filter((profileData) =>
        profileData.firstNmae.tolowerCase().includes(query.tolowerCase())
      )
    );
  };
  return (
    <div className="searchInput">
      <input
        type="text"
        value={SearchInput}
        placeholder="search by name..."
        onChange={{ handleSearchInput }}
      />{" "}
    </div>
  );
};

export default SearchInput;
