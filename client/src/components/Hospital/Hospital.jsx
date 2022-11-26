import React, { useEffect } from "react";
import "./Hospital.css";
import "../Team/Team.css"
import Info from "../Team/Info";
import img1 from "../images/cityhospital.jpg"
import img2 from "../images/jabalpurhospital.jpg"
import img3 from "../images/TriveniHealthCare.jpg"
import img4 from "../images/marble.jpg"

const Hospital = () => {
  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((data) => { console.log(data.users) })
  // }, [])
  return (
    <div className="team">
      <div className="team-div">
        <h2>Nearby Hospitals</h2>
        <div className="members">
          <Info img={img1} name="City Hospital " roll="City Hospital is a well-established multispeciality hospital in Jabalpur. City Hospital has state-of-the-art infrastructure and equipments" />
          <Info img={img2} name="Jabalpur Hospital" roll="Jabalpur Hospital is a well-established multispeciality hospital in Jabalpur. City Hospital has state-of-the-art infrastructure and equipments " />
          <Info img={img3} name="Triveni Health Care" roll="Triveni Health Care is a well-established multispeciality hospital in Jabalpur. City Hospital has state-of-the-art infrastructure and equipments " />
          <Info img={img4} name="Marble City Hospital" roll="Marble City Hospital is a well-established multispeciality hospital in Jabalpur. City Hospital has state-of-the-art infrastructure and equipments to conduct all" />
        </div>
      </div>
    </div>
  );
};

export default Hospital;
