import React from 'react';
import { useNavigate } from 'react-router-dom';

const GeneralSettingsPage = () => {
  const navigate = useNavigate();

  // Navigation functions
  const handleBackButtonClick = () => {
    navigate('/settings'); // Navigate back to the main settings page
  };

  const handleHelpButtonClick = () => {
    alert("This page allows you to adjust general settings such as language, display, and connectivity.");
  };

  return (
    <div style={containerStyle}>
      {/* Back Button (Top Left) */}
      <button onClick={handleBackButtonClick} style={{ ...buttonStyle, left: '20px' }}>
        Back
      </button>

      {/* Help Button (Top Right) */}
      <button onClick={handleHelpButtonClick} style={{ ...buttonStyle, right: '20px' }}>
        Help
      </button>

      {/* Header */}
      <h1 style={headerStyle}>General Settings</h1>

      {/* Settings Buttons */}
      <div style={buttonContainerStyle}>
        <button style={settingsButtonStyle}>Language & Region</button>
        <button style={settingsButtonStyle}>Display & Sound Settings</button>
        <button style={settingsButtonStyle}>Accessibility Options</button>
        <button style={settingsButtonStyle}>Network & Connectivity</button>
        <button style={settingsButtonStyle}>Storage</button>
        <button style={settingsButtonStyle}>Security & Privacy</button>
      </div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  padding: '2rem',
  textAlign: 'center',
  position: 'relative',
};

const buttonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  padding: '0.6rem 1.2rem',
  fontSize: '1rem',
  backgroundColor: '#1a1a1a',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

const headerStyle: React.CSSProperties = {
  marginBottom: '2rem',
  fontSize: '2rem',
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1rem',
  width: '60%',
  margin: '0 auto',
};

const settingsButtonStyle: React.CSSProperties = {
  padding: '1rem',
  fontSize: '1.2rem',
  backgroundColor: '#444',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
};

export default GeneralSettingsPage;
