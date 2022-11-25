import React, { useEffect, useState } from "react";
import "./Cases.css"
import State from "./State"
import cases from "../images/cases.png"

const Cases = () => {
  // const [state, setState] = useState([]);

  // const title = async (title) => {
  //   const response = await fetch("https://data.covid19india.org/v4/min/timeseries.min.json");
  //   // const response = await fetch("https://api.covid19india.org");
  //   // const response = await fetch("https://api.covid19api.com");
  //   const data = await response.json();
  //   console.log("the below data is ")
  //   console.log(data);
  //   setState(data);
  //   console.log(state)
  // };

  // useEffect(() => {
  //   title();
  // }, []);



  return (
    <div>
      <div className="data">
        <img src={cases} alt="cases" />
      </div>

      {/* <div className="state">
        <div className="articles">
          {state.map((state) => {
            return <State state={state} />;
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Cases;
