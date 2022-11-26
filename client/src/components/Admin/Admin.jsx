import React from "react";
import { useState, useEffect } from "react";
import "./Admin.css"

// http://localhost:4000/apitable

const Admin = () => {

  const [sample, setSample] = useState([]);
  const [user, setUser] = useState([]);

  const title = async (title) => {
    const response = await fetch(
      `http://localhost:4000/apitable`
    );
    const data = await response.json();
    setSample(data);
  };

  const register = async (user) => {
    const response = await fetch(
      `http://localhost:4000/apitable2`
    );
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    title();
    register();
  }, []);

  return (
    <div className="admin">
      <center><h2>User data who booked vaccine</h2></center>
      <div>
        <table className="styled-table">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Aadhar</th>
            <th>Date</th>
            <th>Hospital</th>
            <th>Vaccine</th>
          </tr>
          {sample.map((data) => {
            return (

              <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.sex}</td>
                <td>{data.aadhar}</td>
                <td>{data.date}</td>
                <td>{data.hospital}</td>
                <td>{data.vaccine}</td>
              </tr>

            );
          })}
        </table>
      </div>

      <center><h2>Registered Users</h2></center>
      <div>
        <center>
          <table className="styled-table">
            <tr>
              <th>Username</th>
              <th>Aadhar</th>
            </tr>
            {user.map((data) => {
              return (

                <tr>
                  <td>{data.username}</td>
                  <td>{data.aadhar}</td>
                </tr>

              );
            })}
          </table>
        </center>
      </div>
    </div>
  );
};

export default Admin;
