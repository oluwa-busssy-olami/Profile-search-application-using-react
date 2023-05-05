import { ProfileData } from "../Data/ProfileData.js";
import { useEffect, useState } from "react";

const App = ({ search }) => {
  const [filteredProfile, setFilteredProfile] = useState([]);

  const handleSearchInput = () => {
    const query = search;
    //setSearch(query);
    const newProfile = ProfileData.filter((userProfile) => {
      return (
        userProfile.firstName.toLowerCase().includes(query) ||
        userProfile.lastName.toLowerCase().includes(query) ||
        userProfile.title.toLowerCase().includes(query)
      );
    });
    console.log(newProfile);
    setFilteredProfile(newProfile);
  };
  useEffect(() => {
    console.log("busolami");
    if (search) {
      handleSearchInput();
    }
  }, []);
  //const [searchProfile, setSearchProfile] = new useState({ProfileData})
  const peoplesDetails = () => {
    console.log(ProfileData);
    let data = [...ProfileData];
    if (search) {
      data = [...filteredProfile];
    } else {
      data = [...ProfileData];
    }
    return data.map((ProfileData, index) => {
      return (
        <div className="Container" key={ProfileData.id}>
          {" "}
          {/* <div className="ProfiledataContainer"> */}{" "}
          <li key={ProfileData.id} className="profileContainer">
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
          {/* </div>{" "} */}{" "}
        </div>
      );
    });
  };
  return (
    <div className="profilesData">
      <ul> {peoplesDetails()} </ul>{" "}
    </div>
  );
};

export default App;
