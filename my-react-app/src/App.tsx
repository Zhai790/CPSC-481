import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import ParentHome from "./pages/ParentHome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/parent-home" element={<ParentHome />} />
      </Routes>
    </Router>
  );
}

