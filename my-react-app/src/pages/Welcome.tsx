import { useNavigate } from "react-router-dom";
import "/src/pages/css_files/Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="center-container">
      <h1>Welcome to Streambuddy!</h1>
      <p>Press the Kids button to start watching!</p>

      <div className="button-container">
        <button className="kids-button">Kids</button>
        <button className="parents-button" onClick={() => navigate("/security")}>Parents</button>
      </div>

      <button className="help-button">Help</button>
    </div>
  );
}