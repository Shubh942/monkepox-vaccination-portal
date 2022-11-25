import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        {/* <Navbar /> */}
        <div className="header_text">
          <h2 className="header_head">
            {/* Monkey Pox Vaccination Managemenet System */}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Monkey Pox Vaccination Management System")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("DBMS Project")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Monkey Pox Vaccination Management System")
                  .start();
              }}
            />
          </h2>
          <Link to="/signup" className="head_btn">
            Get Vaccinated
          </Link>
        </div>
      </div>
      <div className="key-facts">
        <h3>Key Facts</h3>
        <ul>
          <li>
            Vaccines used during the smallpox eradication programme also
            provided protection against monkeypox. Newer vaccines have been
            developed of which one has been approved for prevention of monkeypox
          </li>
          <li>
            Monkeypox is caused by monkeypox virus, a member of the
            Orthopoxvirus genus in the family Poxviridae.
          </li>
          <li>
            Monkeypox is usually a self-limited disease with the symptoms
            lasting from 2 to 4 weeks. Severe cases can occur. In recent times,
            the case fatality ratio has been around 3-6%.
          </li>
          <li>
            Monkeypox is transmitted to humans through close contact with an
            infected person or animal, or with material contaminated with the
            virus.
          </li>
          <li>
            Monkeypox virus is transmitted from one person to another by close
            contact with lesions, body fluids, respiratory droplets and
            contaminated materials such as bedding.
          </li>
          <li>
            Monkeypox is a viral zoonotic disease that occurs primarily in
            tropical rainforest areas of central and west Africa and is
            occasionally exported to other regions.
          </li>
          <li>
            An antiviral agent developed for the treatment of smallpox has also
            been licensed for the treatment of monkeypox.
          </li>
          <li>
            The clinical presentation of monkeypox resembles that of smallpox, a
            related orthopoxvirus infection which was declared eradicated
            worldwide in 1980. Monkeypox is less contagious than smallpox and
            causes less severe illness.
          </li>
          <li>
            Monkeypox typically presents clinically with fever, rash and swollen
            lymph nodes and may lead to a range of medical complications.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
