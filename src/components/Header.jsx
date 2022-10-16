import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="header_text">
        <h2 className="header_head">
          Monkey Pox Vaccination Managemenet System
        </h2>
        <Link to="/vaccination" className="head_btn">
          Get Vaccinated
        </Link>
      </div>
    </div>
  );
};

export default Header;
