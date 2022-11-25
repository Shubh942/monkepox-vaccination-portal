import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div>
        <h3>Login</h3>
        <form>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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
            <Link exact="true" to="/Signup" className="msg-link">
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;