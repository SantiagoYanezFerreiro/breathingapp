import React from "react";
import { Route } from "react-router-dom";
import About from "./About";

export default function Routes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
