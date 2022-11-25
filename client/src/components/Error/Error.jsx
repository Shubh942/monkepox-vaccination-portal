import React from "react";
import "./Error.css";
import image from "../images/vaccination.webp";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h2>ERROR, 404 PAGE NOT FOUND</h2>
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

export default Error;
