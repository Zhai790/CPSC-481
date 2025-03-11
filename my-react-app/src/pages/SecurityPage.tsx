import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/pages/css_files/SecurityPage.css"; 

const SecurityPage = () => {
  const navigate = useNavigate();
  const [, setHoldingTime] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const handleFingerprintButtonPress = () => {
    //navigate to the Parent Home page
    setTimeout(() => {
      navigate("/parent-home");
    }, 500); //slight delay before navigating
  };

  //timer to track how long the button is held
  const handleMouseDown = () => {
    setIsHolding(true);
    setHoldingTime(0);
    
    //set the timer to automatically trigger navigation after 3 seconds
    const countdownTimer = setInterval(() => {
      setHoldingTime((prevTime) => {
        if (prevTime >= 2) {
          // we automatically navigate once 2 seconds have passed
          handleFingerprintButtonPress();
          clearInterval(countdownTimer);
        }
        return prevTime + 1;
      });
    }, 1000);

    setTimer(countdownTimer); //save the interval ID to clear it later if needed
  };

  const handleMouseUp = () => {
    if (isHolding) {
      setIsHolding(false);
      clearInterval(timer!); // we clear the timer when the mouse is released
    }
  };

  // back button logic
  const handleBackButtonClick = () => {
    navigate('/'); // navigate to the Welcome page
  };

  //help button logic
  const handleHelpButtonClick = () => {
    alert("This is the help page. Please hold the fingerprint button for access.");
  };

  useEffect(() => {
    // cleanup interval if the component is unmounted
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);


  return (
    <div className="container">
    <button onClick={handleBackButtonClick} className="back-button">
      Back
    </button>

    <button onClick={handleHelpButtonClick} className="help-button">
      Help
    </button>

    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="fingerprint-button"
    >
    </button>

    <p className="status-text">
      {isHolding ? `Scanning Fingerprint, please keep holding...` : ''}
    </p>
  </div>
);
};

export default SecurityPage;