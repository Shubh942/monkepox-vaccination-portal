import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Axios from 'axios'

const Signup = () => {
  const [usernamereg, setUsernamereg] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [passwordreg, setPasswordreg] = useState("");

  const register = (e) => {
    e.preventDefault()
    console.log("helaew")
    console.log(usernamereg)
    console.log(passwordreg)
    Axios.post('http://localhost:4000/register',
      {
        username: usernamereg,
        password: passwordreg,
        aadhar: aadhar,
      }).then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="signup">
      <div>
        <h3>Signup</h3>
        <form>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={usernamereg}
              onChange={(e) => {
                setUsernamereg(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Aadhar number</label>
            <input
              type="number"
              placeholder="Aadhar number"
              name="aadhar"
              value={aadhar}
              onChange={(e) => {
                setAadhar(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={passwordreg}
              onChange={(e) => {
                setPasswordreg(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn" onClick={register}>
            Signup
          </button>
          <div className="msg">
            <p>Already have an Account?</p>
            <Link exact="true" to="/Login" className="msg-link">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
