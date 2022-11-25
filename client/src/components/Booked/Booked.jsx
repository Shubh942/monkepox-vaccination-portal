import React from "react";
// import "./Error.css";
import image from "../images/booked.jpg";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Booked = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h2>Ticket Booked, check your email for confirmation</h2>
      <img src={image} alt="" className="vaccination-image" />
      <BiArrowBack
        className="back"
        onClick={() => {
          navigate(-1);
        }}
      />
      <h4>go back</h4>
    </div>
  );
};

export default Booked;
