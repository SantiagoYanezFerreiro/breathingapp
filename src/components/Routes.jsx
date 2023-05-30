import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import BreathingAppProgram1 from "./BreathingProgram1";

export default function Routes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/breathingprogram" element={<BreathingProgram />} />
      <Route path="/breathingprogram1" element={<BreathingProgram1 />} />
      <Route path="/breathingprogram2" element={<BreathingProgram2 />} />
      <Route path="/breathingprogram3" element={<BreathingProgram3 />} />
      <Route path="/breathingprogram4" element={<BreathingProgram4 />} />
    </Routes>
  );
}
