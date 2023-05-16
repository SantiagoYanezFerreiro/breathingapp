import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import BreathingApp from "./components/BreathingApp";
import About from "./components/About";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Navigation = () => (
    <nav>
      <ul>
        <li>
          <Link to="/breathingapp">Breathing App</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/breathingapp" element={<BreathingApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
