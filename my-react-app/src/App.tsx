import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import Welcome from "./pages/Welcome";
import ParentHome from "./pages/ParentHome";
import SecurityPage from './pages/SecurityPage';
import Settings from './pages/Settings';
import InsightsPage from './pages/InsightsPage';
import GeneralSettingsPage from "./pages/GeneralSettingsPage";
import KidsHome from "./pages/KidsHome";
import Favourites from './pages/Favourites';

import Remote from './features/remote/components/Remote';
// import TVScreen from './features/tv/components/TVScreen';

export default function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* Left Column: Remote UI */}
        <Box
          sx={{
            flex: 1,
            borderRight: '1px solid #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Remote />
        </Box>

        {/* Right Column: TV Screen UI */}
        <Box
          sx={{
            flex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Routes for different screens */}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/parent-home" element={<ParentHome />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/general-settings" element={<GeneralSettingsPage />} />
            <Route path="/child/favourites" element={<Favourites />} />
            <Route path="/kids-home" element={<KidsHome />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
