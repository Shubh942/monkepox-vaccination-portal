import React, { useEffect } from "react";
import "./Vaccination.css";
import "../Team/Team.css"
import Info from "../Team/Info";
import img1 from "../images/jynneos.jpg"
import img2 from "../images/acam2000.jpeg"
import img3 from "../images/imvamune.png"
import img4 from "../images/Imvanex.jpg"

const Vaccination = () => {
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
        <h2>Vaccines Available</h2>
        <div className="members">
          <Info img={img1} name="Jynneos " roll="JYNNEOS is approved for the prevention of monkeypox disease in individuals 18 years of age and older at high risk for monkeypox infection" />
          <Info img={img2} name="Acam2000" roll="ACAM2000 is a product approval indicated for active immunization against smallpox disease for persons determined to be at high risk for monkeypox infection " />
          <Info img={img3} name="Imvamune" roll="Imvamune® is a live attenuated, non-replicating vaccine that is approved in Canada for protection against smallpox, monkeypox, and other orthopoxvirus related illness" />
          <Info img={img4} name="Imvanex" roll="Imvanex is a vaccine used to protect against monkeypox in adults. It contains an attenuated (weakened) form of the vaccinia virus called 'modified vaccinia virus Ankara', which is related to the smallpox virus." />
        </div>
      </div>
    </div>
  );
};

export default Vaccination;
