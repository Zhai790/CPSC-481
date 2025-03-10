import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import ParentHome from "./pages/ParentHome";
import SecurityPage from './pages/SecurityPage';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/parent-home" element={<ParentHome />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

