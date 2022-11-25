import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Cases from "./components/Cases/Cases";
import Hospital from "./components/Hospital/Hospital";
import Vaccination from "./components/Vaccination/Vaccination";
import Team from "./components/Team/Team";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Form from "./components/Form/Form";
import Booked from "./components/Booked/Booked";
import Admin from "./components/Admin/Admin";
import Error from "./components/Error/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="navbar" element={<Navbar />} />
          <Route exact path="/" element={<Home />} />
          <Route path="cases" element={<Cases />} />
          <Route path="hospital" element={<Hospital />} />
          <Route path="vaccination" element={<Vaccination />} />
          <Route path="team" element={<Team />} />
          <Route path="login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Form" element={<Form />} />
          <Route path="Booked" element={<Booked />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
