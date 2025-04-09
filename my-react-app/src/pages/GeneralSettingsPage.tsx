import '/src/pages/css_files/GeneralSettings.css';
import { useNavigate } from 'react-router-dom';

const GeneralSettingsPage = () => {

  const navigate = useNavigate();

  const handleHelpButtonClick = () => {
    alert("This page allows you to adjust general settings such as language, display, and connectivity.");
  };

  return (
  <div className="general-settings-page">
    <div className="container">
    <button onClick={handleHelpButtonClick} className="button">Help</button>

    <h1 className="header">General Settings</h1>

    <div className="button-container">
      <button className="language-region" onClick={() => navigate("/language-region")}>Language & Region</button> 
      <button className="display-sound" onClick={() => navigate("/DisplaySound")}>Display & Sound Settings</button>
      <button className="accessibility" onClick={() => navigate("/Accessibility")}>Accessibility Options</button>
      <button className="network" onClick={() => navigate("/Network")}>Network & Connectivity</button>
      <button className="storage" onClick={() => navigate("/Storage")}>Storage</button>
      <button className="security-settings" onClick={() => navigate("/SecuritySettings")}>Security & Privacy</button>
    </div>
    </div>
  </div>
);
};

export default GeneralSettingsPage;
