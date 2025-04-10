import { useNavigate } from 'react-router-dom';
import { IconButton, Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  PowerSettingsNew as PowerIcon,
  ArrowBack as BackIcon,
  Mic as MicIcon,
  Home as HomeIcon,
  VolumeUp as VolumeUpIcon,
  VolumeDown as VolumeDownIcon,
  Fingerprint as FingerprintIcon,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

interface RemoteProps {
  onPowerToggle: () => void;
}

const useStyles = makeStyles(() => ({
  remoteContainer: {
    width: 250,
    height: 600,
    backgroundColor: '#f5f5f5',
    borderRadius: '50% / 25%',
    position: 'relative',
    margin: 'auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 8,
    boxSizing: 'border-box',
  },
  buttonBase: {
    position: 'absolute',
    borderRadius: '50%',
    border: '2px solid rgba(0, 0, 255, 0.6)',
    boxShadow: '0 0 5px rgba(0, 0, 255, 0.8)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 10px rgba(0, 0, 255, 1)',
    },
  },
  micIcon: {
    position: 'absolute',
    top: 8,
    width: 75,
    height: 75,
  },
  powerButton: {
    position: 'absolute',
    top: 50,
    width: 60,
    height: 60,
    padding: 10,
    right: 45,
    '& svg': {
      fontSize: 50,
    },
  },
  backButton: {
    position: 'absolute',
    top: 150,
    width: 75,
    height: 75,
    '& svg': {
      fontSize: 60,
    },
    right: '20%',
  },
  audioControls: {
    position: 'absolute',
    top: 120,
    right: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
    width: 75,
    '& svg': {
      fontSize: 40,
    },
  },
  homeButton: {
    position: 'absolute',
    top: 25,
    width: 75,
    height: 75,
    left: '20%',
    '& svg': {
      fontSize: 40,
    },
  },
  menuButton: {
    position: 'absolute', 
    bottom: 10, 
    right: '18%',
    width: 50, 
    height: 50
  },
  touchpadContainer: {
    position: 'absolute',
    top: 400,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 200,
    height: 180,
    borderRadius: '50%',
    backgroundColor: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  fingerprintIcon: {
    opacity: 0.7,
  },
}));

export default function Remote({ onPowerToggle }: RemoteProps) {
  const navigate = useNavigate();
  const classes = useStyles();
  const [volume, setVolume] = useState(10);

  // Power toggle: simply call the parent's callback.
  const handlePower = () => {
    if (onPowerToggle) onPowerToggle();
    console.log('Remote Power button clicked');
  };

  const handleBack = () => {
    console.log('Back button clicked');
    navigate(-1);
  };

  const handleVolumeUp = () => {
    setVolume((prev) => Math.min(prev + 1, 100));
    console.log('Volume Up:', volume + 1);
  };

  const handleVolumeDown = () => {
    setVolume((prev) => Math.max(prev - 1, 0));
    console.log('Volume Down:', volume - 1);
  };

  const handleGoToWelcome = () => {
    console.log('Go to Welcome screen');
    navigate('/');
  };    

  const handleHome = () => {
    const userType = localStorage.getItem('userType');

    if (userType === 'parent') {
      navigate('/parent-home'); 
    } else if (userType === 'child') {
      navigate('/kids-home');
    } else {
      navigate('/'); // Fallback: welcome screen
    }
  };

  const handleTouchpadClick = () => {
    console.log('Touchpad clicked (fingerprint reader)');
  };

  return (
    <Box className={classes.remoteContainer}>
      {/* Mic Button */}
      <FiberManualRecordIcon 
        style={{ color: 'grey', fontSize: 10 }} 
      />
      <IconButton className={`${classes.micIcon}`}>
        <MicIcon />
      </IconButton>

      {/* Power Button */}
      <IconButton className={`${classes.buttonBase} ${classes.powerButton}`} onClick={handlePower}>
        <PowerIcon />
      </IconButton>

      {/* Back Button */}
      <IconButton className={`${classes.buttonBase} ${classes.backButton}`} onClick={handleBack}>
        <BackIcon />
      </IconButton>

      {/* Audio Controls (Volume Up/Down) */}
      <Box className={classes.audioControls}>
        <IconButton className={classes.buttonBase} onClick={handleVolumeUp}>
          <VolumeUpIcon />
        </IconButton>
        <IconButton className={classes.buttonBase} onClick={handleVolumeDown}>
          <VolumeDownIcon />
        </IconButton>
      </Box>

      {/* Return to main menu between parent and child */}
      <IconButton
        className={`${classes.buttonBase} ${classes.menuButton}`}
        onClick={handleGoToWelcome}
      >
        <ExitToAppIcon /> 
      </IconButton>

      {/* Home Button */}
      <IconButton className={`${classes.buttonBase} ${classes.homeButton}`} onClick={handleHome}>
        <HomeIcon />
      </IconButton>

      {/* Touchpad / Fingerprint Area */}
      <Box className={classes.touchpadContainer} onClick={handleTouchpadClick}>
        <FingerprintIcon className={classes.fingerprintIcon} />
      </Box>
    </Box>
  );
}
