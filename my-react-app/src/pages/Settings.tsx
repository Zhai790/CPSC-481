import { useNavigate } from 'react-router-dom';
import './css_files/Settings.css';

const Settings = () => {
  const navigate = useNavigate();


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
      <button className="help-button">Help</button>
    </div>
    </div>
  );
};

export default Settings;
