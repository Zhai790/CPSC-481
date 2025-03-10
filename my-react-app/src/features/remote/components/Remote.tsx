import { IconButton, Box } from '@mui/material';
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
  micButton: {
    position: 'absolute',
    top: 8,
    width: 75,
    height: 75  ,
  },
  powerButton: {
    position: 'absolute',
    top: 50,
    width: 100,  
    height: 100, 
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 110,
  },
  audioControls: {
    position: 'absolute',
    top: 110,
    right: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  homeButton: {
    position: 'absolute',
    top: 200,
    left: '8%',
    transform: 'translateX(-50%)',
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
    fontSize: 40,
    opacity: 0.7,
  },
}));

export default function Remote() {
  const classes = useStyles();

  // Placeholders
  const handlePower = () => alert('Power button clicked');
  const handleMic = () => alert('Mic button clicked');
  const handleBack = () => alert('Back button clicked');
  const handleVolumeUp = () => alert('Volume Up');
  const handleVolumeDown = () => alert('Volume Down');
  const handleHome = () => alert('Home button clicked');
  const handleTouchpadClick = () => alert('Touchpad clicked (fingerprint reader)');

  return (
    <Box className={classes.remoteContainer}>
      {/* Mic Button */}
      <IconButton className={classes.micButton} onClick={handleMic}>
        <MicIcon />
      </IconButton>

      {/* Power Button */}
      <IconButton className={classes.powerButton} onClick={handlePower}>
        <PowerIcon />
      </IconButton>

      {/* Back Button */}
      <IconButton className={classes.backButton} onClick={handleBack}>
        <BackIcon />
      </IconButton>

      {/* Audio Controls (Volume Up/Down) */}
      <Box className={classes.audioControls}>
        <IconButton onClick={handleVolumeUp}>
          <VolumeUpIcon />
        </IconButton>
        <IconButton onClick={handleVolumeDown}>
          <VolumeDownIcon />
        </IconButton>
      </Box>

      {/* Home Button */}
      <IconButton className={classes.homeButton} onClick={handleHome}>
        <HomeIcon />
      </IconButton>

      {/* Touchpad / Fingerprint Area */}
      <Box className={classes.touchpadContainer} onClick={handleTouchpadClick}>
        {/* fingerprint icon */}
        <FingerprintIcon className={classes.fingerprintIcon} />
      </Box>
    </Box>
  );
}
