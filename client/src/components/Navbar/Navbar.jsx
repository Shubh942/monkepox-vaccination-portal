import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import icon from "../images/monkeypoxlogo.png";
import "./Navbar.css";

const Menu = () => (
  <>
    <p>
      {/* <a href="#home">Cases</a> */}
      <Link to="/cases" className="link">
        Cases
      </Link>
    </p>
    <p>
      {/* <a href="#wgpt3">Nearby Hospitals</a> */}
      <Link to="/Hospital" className="link">
        Nearby Hospitals
      </Link>
    </p>
    <p>
      {/* <a href="#possibility">Vaccination</a> */}
      <Link to="/Vaccination" className="link">
        Vaccination
      </Link>
    </p>
    <p>
      {/* <a href="#features">Team Members</a> */}
      <Link to="/Team" className="link">
        Team Members
      </Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="monkey__navbar">
      <div className="monkey__navbar-links">
        <div className="monkey__navbar-links_logo">
          {/* <h3>MONKEYPOX VACCINATION</h3> */}
          <Link to="/">
            <img src={icon} alt="monkeypox vaccination" />
          </Link>
        </div>
        <div className="monkey__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="monkey__navbar-sign">
        <p>
          <Link to="/Login">Login</Link>
        </p>
        <button type="button">
          <Link to="/Signup">Sign Up</Link>
        </button>
      </div>
      <div className="monkey__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="monkey__navbar-menu_container scale-up-center">
            <div className="monkey__navbar-menu_container-links">
              <Menu />
              <div className="monkey__navbar-menu_container-links-sign">
                <p>
                  <Link to="/Login">Login</Link>
                </p>
                <button type="button">
                  <Link to="/Signup">Sign Up</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
