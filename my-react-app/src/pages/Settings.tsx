import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  //navigation logic for the back button
  const handleBackButtonClick = () => {
    navigate('/parent-home'); //navigate to the Welcome page
  };

  // navigation logic for the help button
  const handleHelpButtonClick = () => {
    alert("This is the help page. You can configure your settings here.");
  };

  // button click handlers for each of the settings options(3 to be added)
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
    navigate('/general-settings'); //navigate to the general settings page
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

//button styling reused for all buttons
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
