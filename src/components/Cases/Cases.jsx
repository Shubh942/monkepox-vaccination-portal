import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cases = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);

  const title = async (title) => {
    // const response = await fetch("https://api.covid19india.org/data.json");
    const response = await fetch("https://api.covid19api.com/");
    const data = await response.json();
    setCountry(data.countrySummaryRoutePremium);
    console.log(data);
  };

  useEffect(() => {
    title();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
      <h2>Monkey Pox cases</h2>
      <div className="data"></div>
    </div>
  );
};

export default Cases;
