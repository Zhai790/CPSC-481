import { useNavigate } from 'react-router-dom';
import './css_files/Settings.css';

const Settings = () => {
  const navigate = useNavigate();

  // navigation logic for the help button
  const handleHelpButtonClick = () => {
    alert("This is the help page. You can configure your settings here.");
  };

  // button click handlers for each of the settings options
  const handleContentFilteringClick = () => {
    navigate('/filters');
  };

  const handleTimeLimitSettingsClick = () => {
    navigate('/time-limit');
  };

  const handleSubscriptionsClick = () => {
    navigate('/subscriptions');
  };

  const handleGeneralSettingsClick = () => {
    navigate('/general-settings'); //navigate to the general settings page
  };

  return (
    <div className="settings-page">
    <div className="container">
      <button onClick={handleHelpButtonClick} className="button">Help</button>

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
    </div>
  );
};

export default Settings;
