import "./ParentHome.css"; 
import { useNavigate } from 'react-router-dom';



const ParentHome = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/'); // Navigate to the Welcome page (root path)
  };

  const handleSettingsButtonClick = () => {
    navigate('/settings'); // Navigate to the Welcome page (root path)
  };

  const handleInsightsButtonClick = () => {
    navigate('/insights'); // Navigate to the Welcome page (root path)
  };
    return (
      <div className="page-container">
      {/* Back Button */}
      <button onClick={handleBackButtonClick} className="back-button">Back</button>

      {/*welcome message */}
      <h1 className="welcome-message">Welcome Parent_Name</h1>

      {/*image Container */}
      <div className="image-container">
        <img src="src/assets/360_F_130365758_ETX4W9NYSmhfO8NGnlaHmFkC1Q0osrSx.webp" alt="Main" className="image" />
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button onClick={handleInsightsButtonClick} className="button">Insights</button>
        <button onClick={handleSettingsButtonClick} className="button">Settings</button>
        <button className="button">Notifications</button>
      </div>
    </div>
  );
};

  
  export default ParentHome;