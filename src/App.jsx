import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import BreathingProgram from "./components/BreathingProgram";
import About from "./components/About";
import SupportUs from "./components/SupportUs";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isProgramMenuOpen, setProgramMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setProgramMenuOpen(false);
    scrollToTop();
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

        <li className="navbar-item right">
          <Link
            to="/supportus"
            className="navbar-link"
            onClick={handleLinkClick}
          >
            <i className="fas fa-heart section-icon"></i>
          </Link>
          <Link to="/about" className="navbar-link" onClick={handleLinkClick}>
            <i className="fas fa-cog section-icon"></i>
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
    const handleInfoIconClick = (program) => {
      navigate(`/about#${program}`, { state: { fromProgramSelection: true } });
      setProgramMenuOpen(!isProgramMenuOpen);
    };
    return (
      <div className={`program-selection ${isProgramMenuOpen ? "" : "hidden"}`}>
        <h2 className="program-heading">Programs Available</h2>
        <div className="program-grid">
          <div className="program-item">
            <Link
              to="/RegularIntervals"
              className="program-link"
              onClick={handleLinkClick}
            >
              Regular Intervals
            </Link>
            <div
              class="info-icon"
              onClick={() => handleInfoIconClick("RegularIntervals")}
            >
              <i className="fas fa-info-circle"></i>
            </div>
          </div>
          <div className="program-item color2">
            <Link
              to="/BoxBreathing"
              className="program-link"
              onClick={handleLinkClick}
            >
              Box Breathing
            </Link>
            <div
              class="info-icon"
              onClick={() => handleInfoIconClick("BoxBreathing")}
            >
              <i className="fas fa-info-circle"></i>
            </div>
          </div>
          <div className="program-item color3">
            <Link
              to="/4-7-8Program"
              className="program-link"
              onClick={handleLinkClick}
            >
              4-7-8 Program
            </Link>
            <div
              class="info-icon"
              onClick={() => handleInfoIconClick("4-7-8Program")}
            >
              <i className="fas fa-info-circle"></i>
            </div>
          </div>
          <div className="program-item color4">
            <Link
              to="/BreathingHold"
              className="program-link"
              onClick={handleLinkClick}
            >
              Breathing Hold
            </Link>
            <div
              className="info-icon"
              onClick={() => handleInfoIconClick("BreathingHold")}
            >
              <i class="fas fa-info-circle"></i>
            </div>
          </div>
          <div className="program-item color5">
            <Link
              to="/BreathingHold"
              className="program-link"
              onClick={handleLinkClick}
            >
              Infinity Breathing
            </Link>
            <div
              className="info-icon"
              onClick={() => handleInfoIconClick("InfinityBreathing")}
            >
              <i class="fas fa-info-circle"></i>
            </div>
          </div>
          <div className="program-item color6">
            <Link
              to="/BreathingHold"
              className="program-link"
              onClick={handleLinkClick}
            >
              Custom Breathing
            </Link>
            <div
              className="info-icon"
              onClick={() => handleInfoIconClick("CustomBreathing")}
            >
              <i className="fas fa-info-circle"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <nav className="footer">
      <ul className="footer-list">
        <li className="footer-item">
          <Link className="footer-link scroll-to-top" onClick={scrollToTop}>
            <i className="fas fa-arrow-up back-icon"></i>
          </Link>
        </li>

        <li className="footer-item">
          <Link
            to="/about"
            className="footer-link copyright-text"
            onClick={handleLinkClick}
            target="_blank"
          >
            &copy; 2023 Your Website. All rights reserved.
          </Link>
        </li>
        <li className="footer-item right">
          <Link
            to="https://www.instagram.com"
            className="footer-link"
            onClick={handleLinkClick}
            target="_blank"
          >
            <FontAwesomeIcon className="social-icons" icon={faInstagram} />
          </Link>
          <Link
            to="https://www.twitter.com"
            className="footer-link"
            onClick={handleLinkClick}
            target="_blank"
          >
            <FontAwesomeIcon className="social-icons" icon={faTwitter} />
          </Link>
          <Link
            to="https://www.facebook.com"
            className="footer-link"
            onClick={handleLinkClick}
            target="_blank"
          >
            <FontAwesomeIcon className="social-icons" icon={faFacebook} />
          </Link>
        </li>
      </ul>
    </nav>
  );

  function scrollToTop() {
    if (window.scrollY === 0) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <Navigation />
      {isProgramMenuOpen && <ProgramSelection />}
      <Routes>
        <Route path="/supportus" element={<SupportUs />} />
        <Route
          path="/about"
          element={<About />}
          isProgramMenuOpen={isProgramMenuOpen}
          setProgramMenuOpen={setProgramMenuOpen}
        />
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
      <Footer />
    </div>
  );
}

export default App;
