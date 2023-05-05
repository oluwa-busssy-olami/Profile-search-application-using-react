import { ProfileData } from "../Data/ProfileData.js";

const App = () => {
  //const [searchProfile, setSearchProfile] = new useState({ProfileData})
  const peoplesDetails = ProfileData.map((ProfileData, index) => {
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
  return (
    <div className="profilesData">
      <ul> {peoplesDetails} </ul>{" "}
    </div>
  );
};

export default App;
