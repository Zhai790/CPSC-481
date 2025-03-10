import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecurityPage = () => {
  const navigate = useNavigate();
  const [, setHoldingTime] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const handleFingerprintButtonPress = () => {
    // Navigate to the Parent Home page
    setTimeout(() => {
      navigate("/parent-home");
    }, 500); // Delay before navigating
  };

  // Timer to track how long the button is held
  const handleMouseDown = () => {
    setIsHolding(true);
    setHoldingTime(0);
    
    // Set the timer to automatically trigger navigation after 3 seconds
    const countdownTimer = setInterval(() => {
      setHoldingTime((prevTime) => {
        if (prevTime >= 3) {
          // Automatically navigate once 3 seconds have passed
          handleFingerprintButtonPress();
          clearInterval(countdownTimer);
        }
        return prevTime + 1;
      });
    }, 1000);

    setTimer(countdownTimer); // Save the interval ID to clear it later if needed
  };

  const handleMouseUp = () => {
    if (isHolding) {
      setIsHolding(false);
      clearInterval(timer!); // Clear the timer when the mouse is released
    }
  };

  // Back button logic
  const handleBackButtonClick = () => {
    navigate('/'); // Navigate to the Welcome page
  };

  // Help button logic
  const handleHelpButtonClick = () => {
    alert("This is the help page. Please hold the fingerprint button for access.");
  };

  useEffect(() => {
    // Cleanup interval if the component is unmounted
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);


  return (
    <div style={{ position: 'relative', padding: '2rem', textAlign: 'center' }}>
      {/* Back Button */}
      <button
        onClick={handleBackButtonClick}
        style={{ position: 'absolute', top: '20px', left: '20px' }}
      >
        Back
      </button>

      {/* Help Button */}
      <button
        onClick={handleHelpButtonClick}
        style={{ position: 'absolute', top: '20px', right: '20px' }}
      >
        Help
      </button>

      {/* Fingerprint Button */}
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          padding: '2rem',
          fontSize: '2rem',
          background: 'url(src/assets/fingerprint-icon.webp) no-repeat center center',
          backgroundSize: 'cover',
          width: '200px',
          height: '200px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
      </button>

      {/* Text below the fingerprint button */}
      <p>{isHolding ? `Scanning Fingerprint, please keep kolding...` : ''}</p>
    </div>
  );
};

export default SecurityPage;