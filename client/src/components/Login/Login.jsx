import React, { useState } from "react";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Axios from 'axios'

const Login = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginstatus, setloginstatus] = useState("")

  const login = (e) => {
    e.preventDefault()
    console.log(username)
    console.log(password)
    Axios.post('http://localhost:4000/login',
      {
        username: username,
        password: password,
      }).then((response) => {
        if (username === "admin" && password === "root") {
          navigate("/Admin");
        } else if (response.data.message) {
          setloginstatus(response.data.message);
        }
        else {
          navigate("/Form");
          setloginstatus(response.data[0].username);
        }
      }).catch((err) => {
        console.log(err)
      })
  }

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
          <button type="submit" className="btn" onClick={login}>
            Login
          </button>
          <div className="msg">
            <p>Don't have an Account?</p>
            <Link exact="true" to="/Signup" className="msg-link">
              SignUp
            </Link>
          </div>
        </form>
        <p>{loginstatus}</p>
      </div>
    </div>
  );
};

export default Login;