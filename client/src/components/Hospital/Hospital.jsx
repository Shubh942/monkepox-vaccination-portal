import React, { useEffect } from "react";
import "./Hospital.css";

const Hospital = () => {
  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((data) => { console.log(data.users) })
  // }, [])
  return (
    <div className="hospital">
      <h2>This is nearby hospital page</h2>
    </div>
  );
};

export default Hospital;
