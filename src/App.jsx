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
              to="/breathingprogram1"
              className="program-link"
              onClick={handleLinkClick}
            >
              BreathingProgram1
            </Link>
          </li>
          <li className="program-item">
            <Link
              to="/breathingprogram2"
              className="program-link"
              onClick={handleLinkClick}
            >
              BreathingProgram2
            </Link>
          </li>
          <li className="program-item">
            <Link
              to="/breathingprogram3"
              className="program-link"
              onClick={handleLinkClick}
            >
              BreathingProgram3
            </Link>
          </li>
          <li className="program-item">
            <Link
              to="/breathingprogram4"
              className="program-link"
              onClick={handleLinkClick}
            >
              BreathingProgram4
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
          path="/breathingprogram1"
          element={
            <BreathingProgram
              inhaleDuration={8}
              exhaleDuration={3}
              holdDuration={2}
            />
          }
        />
        <Route
          path="/breathingprogram2"
          element={
            <BreathingProgram
              inhaleDuration={2}
              exhaleDuration={1}
              holdDuration={1}
            />
          }
        />
        <Route
          path="/breathingprogram3"
          element={
            <BreathingProgram
              inhaleDuration={9}
              exhaleDuration={9}
              holdDuration={9}
            />
          }
        />
        <Route
          path="/breathingprogram4"
          element={
            <BreathingProgram
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
