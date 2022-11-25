import React from "react";
import "./Team.css";

const Info = ({ img, name, roll }) => {
  return (
    <div className="info">
      <img src={img} alt="" className="info-img" />
      <h2>{name}</h2>
      <h3>{roll}</h3>
    </div>
  );
};

export default Info;
