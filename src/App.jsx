import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import BreathingProgram from "./components/BreathingProgram";
import About from "./components/About";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isProgramMenuOpen, setProgramMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setProgramMenuOpen(false);
  };

  const Navigation = () => (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link" onClick={handleLinkClick}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );

  useEffect(() => {
    if (location.pathname === "/") {
      setProgramMenuOpen(true);
    }
  }, [location]);
  const ProgramSelection = () => {
    return (
      <div className={`program-selection ${isProgramMenuOpen ? "" : "hidden"}`}>
        <h2 className="program-heading">Programs Available</h2>
        <ul className="program-grid">
          <li className="program-item">
            <Link
              to="/RegularIntervals"
              className="program-link"
              onClick={handleLinkClick}
            >
              Regular Intervals
            </Link>
          </li>
          <li className="program-item">
            <Link
              to="/BoxBreathing"
              className="program-link"
              onClick={handleLinkClick}
            >
              Box Breathing
            </Link>
          </li>
          <li className="program-item">
            <Link
              to="/4-7-8Program"
              className="program-link"
              onClick={handleLinkClick}
            >
              4-7-8 Program
            </Link>
          </li>
          <li className="program-item">
            <Link
              to="/BreathingHold"
              className="program-link"
              onClick={handleLinkClick}
            >
              Breathing Hold
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Navigation />
      {isProgramMenuOpen && <ProgramSelection />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/RegularIntervals"
          element={
            <BreathingProgram
              programName="Regular Intervals"
              inhaleDuration={8}
              exhaleDuration={3}
              holdDuration={2}
            />
          }
        />
        <Route
          path="/BoxBreathing"
          element={
            <BreathingProgram
              programName="Box Breathing"
              inhaleDuration={2}
              exhaleDuration={1}
              holdDuration={1}
            />
          }
        />
        <Route
          path="/4-7-8Program"
          element={
            <BreathingProgram
              programName="4-7-8 Program"
              inhaleDuration={9}
              exhaleDuration={9}
              holdDuration={9}
            />
          }
        />
        <Route
          path="/BreathingHold"
          element={
            <BreathingProgram
              programName="Breathing Hold"
              inhaleDuration={20}
              exhaleDuration={20}
              holdDuration={20}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
