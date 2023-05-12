import { useState } from "react";
import BreathingApp from "./components/BreathingApp";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BreathingApp />
    </div>
  );
}

export default App;
