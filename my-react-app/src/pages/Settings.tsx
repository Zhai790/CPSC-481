import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  // Navigation logic for the back button
  const handleBackButtonClick = () => {
    navigate('/parent-home'); // Navigate to the Welcome page
  };

  // Navigation logic for the help button
  const handleHelpButtonClick = () => {
    alert("This is the help page. You can configure your settings here.");
  };

  // Button click handlers for each of the settings options
  const handleContentFilteringClick = () => {
    alert("Content Filtering settings will be here.");
  };

  const handleTimeLimitSettingsClick = () => {
    alert("Time Limit settings will be here.");
  };

  const handleSubscriptionsClick = () => {
    alert("Subscription settings will be here.");
  };

  const handleGeneralSettingsClick = () => {
    alert("General settings will be here.");
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', position: 'relative' }}>
      {/* Back Button */}
      <button
        onClick={handleBackButtonClick}
        style={{ position: 'absolute', top: '20px', left: '20px' }}
      >
        Back
      </button>

      {/* Help Button */}
      <button
        onClick={handleHelpButtonClick}
        style={{ position: 'absolute', top: '20px', right: '20px' }}
      >
        Help
      </button>

      {/* Header */}
      <h1>Settings</h1>

      {/* Buttons for the settings options */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem' }}>
        <button onClick={handleContentFilteringClick} style={buttonStyle}>
          Content Filtering
        </button>
        <button onClick={handleTimeLimitSettingsClick} style={buttonStyle}>
          Time Limit Settings
        </button>
        <button onClick={handleSubscriptionsClick} style={buttonStyle}>
          Subscriptions
        </button>
        <button onClick={handleGeneralSettingsClick} style={buttonStyle}>
          General Settings
        </button>
      </div>
    </div>
  );
};

// Button styling reused for all buttons
const buttonStyle: React.CSSProperties = {
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  margin: '1rem',
  backgroundColor: '#1a1a1a',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  width: '80%',
  maxWidth: '400px',
};

export default Settings;
