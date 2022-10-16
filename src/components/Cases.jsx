import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cases = () => {
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
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
