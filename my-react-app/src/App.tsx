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
