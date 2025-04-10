import { useState } from 'react';
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
import Subscriptions from "./pages/SubscriptionsPage";
import FilteringPage from "./pages/FilteringPage";
import SearchPage from './pages/SearchPage';
import SearchResults from './pages/SearchResults';
import ContentFilters from './pages/ContentFilters';
import ContentDetails from './pages/ContentDetails';
import TimeLimit from './pages/TimeLimit';
import Accessibility from './pages/Accessibility';
import DisplaySound from './pages/DisplaySound';
import LanguageRegion from './pages/LanguageRegion';
import Network from './pages/Network';
import Storage from './pages/Storage';
import SecuritySettings from './pages/SecuritySettings';
import Notifications from './pages/Notifications';
import SmartFilter from './pages/SmartFilter';
import DownloadPage from './pages/DownloadPage';

import Remote from './features/remote/components/Remote';

export default function App() {
  // State for whether the TV screen is on (true = visible; false = black overlay)
  const [isTVOn, setIsTVOn] = useState(true);

  // Toggle power state when the remote button is pressed
  const handlePowerToggle = () => {
    setIsTVOn(prev => !prev);
  };

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
          {/* Pass the toggle callback to the Remote component */}
          <Remote onPowerToggle={handlePowerToggle} />
        </Box>

        {/* Right Column: TV Screen UI */}
        <Box
          sx={{
            flex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative', // Enables absolute positioning for the overlay
          }}
        >
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/parent-home" element={<ParentHome />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/general-settings" element={<GeneralSettingsPage />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/filters" element={<FilteringPage />} />
            <Route path="/child/favourites" element={<Favourites />} />
            <Route path="/kids-home" element={<KidsHome />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/content-filters" element={<ContentFilters />} />
            <Route path="/content-details" element={<ContentDetails />} />
            <Route path="/time-limit" element={<TimeLimit />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/display-sound" element={<DisplaySound />} />
            <Route path="/language-region" element={<LanguageRegion />} />
            <Route path="/security-settings" element={<SecuritySettings />} />
            <Route path="/network" element={<Network />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/smartfilter" element={<SmartFilter />} />
            <Route path="/download" element={<DownloadPage />} />


          </Routes>

          {/* Black overlay covers the TV screen if isTVOn is false */}
          {!isTVOn && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                zIndex: 10,
              }}
            />
          )}
        </Box>
      </Box>
    </Router>
  );
}
