import React from "react";
import "./Team.css";
import Info from "./Info";
import photo from "../images/photo.png";

const Team = () => {
  return (
    <div className="team">
      <div className="team-div">
        <h2>Team Members</h2>
        <div className="members">
          <Info img={photo} name="Utkarsh Chaturvedi " roll="21BCS227" />
          <Info img={photo} name="Utkarsh Raj" roll="21BCS228" />
          <Info img={photo} name="Utkarsh Raj" roll="21BCS229" />
        </div>
      </div>
    </div>
  );
};

export default Team;
