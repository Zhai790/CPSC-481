import { useNavigate } from "react-router-dom";
import "/src/pages/css_files/Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();

  const handleKidsClick = () => {
    localStorage.setItem('userType', 'child'); 
    navigate("/kids-home");
  };

  const handleParentsClick = () => {
    localStorage.setItem('userType', 'parent'); 
    navigate("/security");
  };

  return (
    <div className="center-container">
      <h1>Welcome to Streambuddy!</h1>
      <p>Press the Kids button to start watching!</p>

      <div className="button-container">
        <button className="kids-button" onClick={handleKidsClick}>Kids</button>
        <button className="parents-button" onClick={handleParentsClick}>Parents</button>
      </div>

      <button className="help-button">Help</button>
    </div>
  );
}