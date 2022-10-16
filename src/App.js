import "./App.css";
import Header from "./components/Header";
import Cases from "./components/Cases";
import Team from "./components/Team";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases" element={<Navbar />} />
          <Route path="/cases" element={<Team />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
