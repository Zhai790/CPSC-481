import { useNavigate } from 'react-router-dom';
import '/src/pages/css_files/GeneralSettings.css';

const GeneralSettingsPage = () => {
  const navigate = useNavigate();

  // navigation functions
  const handleBackButtonClick = () => {
    navigate('/settings'); 
  };

  const handleHelpButtonClick = () => {
    alert("This page allows you to adjust general settings such as language, display, and connectivity.");
  };

  return (
    <div className="container">
    <button onClick={handleBackButtonClick} className="back-button">Back</button>
    <button onClick={handleHelpButtonClick} className="help-button">Help</button>

    <h1 className="header">General Settings</h1>

    <div className="button-container">
      <button className="settings-button">Language & Region</button>
      <button className="settings-button">Display & Sound Settings</button>
      <button className="settings-button">Accessibility Options</button>
      <button className="settings-button">Network & Connectivity</button>
      <button className="settings-button">Storage</button>
      <button className="settings-button">Security & Privacy</button>
    </div>
  </div>
);
};

export default GeneralSettingsPage;
