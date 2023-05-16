import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import BreathingApp from "./components/BreathingApp";
import About from "./components/About";
import BreathingProgram1 from "./components/BreathingProgram1";
import BreathingProgram2 from "./components/BreathingProgram2";
import BreathingProgram3 from "./components/BreathingProgram3";
import BreathingProgram4 from "./components/BreathingProgram4";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Navigation = () => (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/breathingapp" className="navbar-link">
            Breathing App
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );

  const ProgramSelection = () => (
    <div className="program-selection">
      <h2 className="program-heading">Programs Available</h2>
      <ul className="program-grid">
        <li className="program-item">
          <Link to="/breathingprogram1" className="program-link">
            BreathingProgram1
          </Link>
        </li>
        <li className="program-item">
          <Link to="/breathingprogram2" className="program-link">
            BreathingProgram2
          </Link>
        </li>
        <li className="program-item">
          <Link to="/breathingprogram3" className="program-link">
            BreathingProgram3
          </Link>
        </li>
        <li className="program-item">
          <Link to="/breathingprogram4" className="program-link">
            BreathingProgram4
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <Router>
      <div>
        <Navigation />
        <ProgramSelection />
        <Routes>
          <Route path="/breathingapp" element={<BreathingApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/breathingprogram1" element={<BreathingProgram1 />} />
          <Route path="/breathingprogram2" element={<BreathingProgram2 />} />
          <Route path="/breathingprogram3" element={<BreathingProgram3 />} />
          <Route path="/breathingprogram4" element={<BreathingProgram4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
