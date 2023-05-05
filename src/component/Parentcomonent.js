//import React from "react";
import { useState } from "react";

import SearchInput from "./SearchInput";
import App from "./App";
import { ProfileData } from "../Data/ProfileData";
import "../styles/style.css";

const Parentcomonent = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <SearchInput search={query} setSearch={setQuery} /> <App search={query} />{" "}
    </div>
  );
};

export default Parentcomonent;
