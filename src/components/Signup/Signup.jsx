import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signup">
      <div>
        <h3>Signup</h3>
        <form>
          <div>
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              value={phonenumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Re-enter Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn">
            Signup
          </button>
          <div className="msg">
            <p>Already have an Account?</p>
            <Link to="Signup" className="msg-link">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
