import { useNavigate } from 'react-router-dom';
import '/src/pages/css_files/Settings.css';

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
    <div className="container">
      <button onClick={handleBackButtonClick} className="back-button">Back</button>
      <button onClick={handleHelpButtonClick} className="help-button">Help</button>

      <h1 className="header">Settings</h1>

      <div className="button-container">
        <button onClick={handleContentFilteringClick} className="button">
          Content Filtering
        </button>
        <button onClick={handleTimeLimitSettingsClick} className="button">
          Time Limit Settings
        </button>
        <button onClick={handleSubscriptionsClick} className="button">
          Subscriptions
        </button>
        <button onClick={handleGeneralSettingsClick} className="button">
          General Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
