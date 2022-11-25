import React, { useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios'
// import Hospital from "../Hospital/Hospital";

const Form = () => {

  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setAge] = useState("");
  const [aadhar, setAadhar] = useState("");

  const [sex, setSex] = useState()
  const [hospital, setHospital] = useState()
  const [vaccine, setVaccine] = useState()
  const [date, setDate] = useState()

  const submitBook = (e) => {
    e.preventDefault()
    console.log('submitted')
    Axios.post('http://localhost:4000/booking',
      {
        name: name,
        age: age,
        aadhar: aadhar,
        sex: sex,
        hospital: hospital,
        vaccine: vaccine,
        date: date,
        email: email
      }
    ).then((response) => {
      navigate("/Booked");
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })

  }

  return (
    <div className="login form">
      <div>
        <h3>Vaccination registration form</h3>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              placeholder="age"
              name="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>


          <div className="label-div">
            <label>Sex</label>
            <select value={sex} onChange={(e) => { setSex(e.target.value) }}>
              <option>Male</option>
              <option>Female</option>
              <option>None</option>
            </select>
          </div>
          <div>
            <label>Aadhar</label>
            <input
              type="number"
              placeholder="aadhar"
              name="aadhar"
              value={aadhar}
              onChange={(e) => {
                setAadhar(e.target.value);
              }}
            />
          </div>
          <div className="label-div">
            <label>Hospital</label>
            <select value={hospital} onChange={(e) => { setHospital(e.target.value) }}>
              <option>Marble City Hospital</option>
              <option>Jabalpur Hospital Research Centre</option>
              <option>City Hospital and Research Center</option>
              <option>Triveni Health Care</option>
            </select>
          </div>
          <div className="label-div">
            <label>Vaccine</label>
            <select value={vaccine} onChange={(e) => { setVaccine(e.target.value) }}>
              <option>JYNNEOS</option>
              <option>ACAM2000</option>
              <option>Imvamune </option>
              <option>Imvanex</option>
            </select>
          </div>

          <div>
            <label>Date</label>
            <input
              type="date"
              placeholder="date"
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn" onClick={submitBook}>
            Book vaccine
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;