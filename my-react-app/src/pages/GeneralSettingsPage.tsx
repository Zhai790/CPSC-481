import '/src/pages/css_files/GeneralSettings.css';

const GeneralSettingsPage = () => {

  const handleHelpButtonClick = () => {
    alert("This page allows you to adjust general settings such as language, display, and connectivity.");
  };

  return (
  <div className="general-settings-page">
    <div className="container">
    <button onClick={handleHelpButtonClick} className="button">Help</button>

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
  </div>
);
};

export default GeneralSettingsPage;
