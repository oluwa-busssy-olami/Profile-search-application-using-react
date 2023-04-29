import React from "react";
import { ProfileData } from "../Data/ProfileData.js";

const App = () => {
  const peoplesDetails = ProfileData.map((ProfileData, index) => {
    return (
      <div className="Container">
        <li key={ProfileData.id} className="profileId">
          {" "}
          {/* {ProfileData.id}{" "} */}{" "}
          <img
            src={ProfileData.picture}
            alt={ProfileData.firstName + "'s picture"}
          />{" "}
          <div className="profileDatprofile">
            <span className="profileDataID"> {ProfileData.id} </span>{" "}
            <span className="profileDataName">
              {" "}
              {ProfileData.title +
                " " +
                ProfileData.firstName +
                " " +
                ProfileData.lastName}{" "}
            </span>{" "}
          </div>{" "}
        </li>{" "}
      </div>
    );
  });
  return (
    <div className="profilesData">
      <ul> {peoplesDetails} </ul>{" "}
    </div>
  );
};

export default App;
