import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/pages/css_files/SecurityPage.css";

const SecurityPage = () => {
  const navigate = useNavigate();
  const [, setHoldingTime] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const [showPopup, setShowPopup] = useState(false);
  const [securityEnabled, ] = useState(true); // Toggle to simulate security being on/off


  const handleFingerprintButtonPress = () => {
    if (securityEnabled) {
      navigate("/parent-home");
    } else {
      setShowPopup(true); // Show popup if fingerprint is not accepted
    }
  };

  // Start scan timer
  const handleMouseDown = () => {
    setIsHolding(true);
    setHoldingTime(0);

    const countdownTimer = setInterval(() => {
      setHoldingTime((prevTime) => {
        if (prevTime >= 2) {
          handleFingerprintButtonPress();
          clearInterval(countdownTimer);
        }
        return prevTime + 1;
      });
    }, 1000);

    setTimer(countdownTimer);
  };

  const handleMouseUp = () => {
    if (isHolding) {
      setIsHolding(false);
      if (timer) clearInterval(timer);
    }
  };

  const handleHelpButtonClick = () => {
    alert("This is the help page. Please hold the fingerprint button for access.");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div className="security-page">
      <div className="container">
        <button onClick={handleHelpButtonClick} className="help-button">
          Help
        </button>

        <h1 className="header">Please Hold Touchpad To Unlock</h1>

        <button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="fingerprint-button"
        ></button>

        <p className="status-text">
          {isHolding ? `Scanning Fingerprint, please keep holding...` : ''}
        </p>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Fingerprint Not Found</h2>
            <p>Authentication failed. Please try again with a valid fingerprint.</p>
            <button onClick={handleBackToHome}>Back to Home</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityPage;
