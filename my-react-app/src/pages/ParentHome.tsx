import "/src/pages/css_files/ParentHome.css"; 
import { useNavigate } from 'react-router-dom';



const ParentHome = () => {
  const navigate = useNavigate();

  const handleSettingsButtonClick = () => {
    navigate('/settings'); // Navigate to the Welcome page (root path)
  };

  const handleInsightsButtonClick = () => {
    navigate('/insights'); // Navigate to the Welcome page (root path)
  };

  const handleNotificationsButtonClick = () => {
    navigate('/notifications'); // Navigate to the Welcome page (root path)
  };
    return (
      <div className="parent-home">
      <div className="page-container">

      <h1 className="welcome-message">Welcome Parent_Name</h1>

      <div className="image-container">
        <img src="src/assets/360_F_130365758_ETX4W9NYSmhfO8NGnlaHmFkC1Q0osrSx.webp" alt="Main" className="image" />
      </div>

      <div className="button-container">
        <button onClick={handleInsightsButtonClick} className="button">Insights</button>
        <button onClick={handleSettingsButtonClick} className="button">Settings</button>
        <button onClick={handleNotificationsButtonClick} className="button">Notifications</button>
      </div>
    </div>
    </div>
  );
};

  
  export default ParentHome;