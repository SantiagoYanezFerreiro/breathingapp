import { Route } from "react-router-dom";
import About from "./About";
import SupportUs from "./SupportUs";
import Dashboard from "./Dashboard";

export default function Routes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/supportus" element={<SupportUs />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
