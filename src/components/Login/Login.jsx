import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div>
        <h3>Login</h3>
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
          <button type="submit" className="btn">
            Login
          </button>
          <div className="msg">
            <p>Don't have an Account?</p>
            <Link to="Signup" className="msg-link">
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
