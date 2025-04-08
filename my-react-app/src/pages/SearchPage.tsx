import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, IconButton, Snackbar } from '@mui/material';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicIcon from '@mui/icons-material/Mic';
import "./css_files/SearchPage.css"; 

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(''); 
  const [searchTerm, setSearchTerm] = useState('');  
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Update raw input from voice transcript
  useEffect(() => {
    if (transcript) {
      setInputValue(transcript);
    }
  }, [transcript]);

  // Handler for virtual keyboard input.
  const handleKeyboardChange = (input: string) => {
    setInputValue(input);
  };

  // Validate the input only when the search is submitted.
  const handleSearch = () => {
    const cleanedInput = inputValue.trim().replace(/[^a-zA-Z]/g, "").toLowerCase();
    if (cleanedInput === 'cocomelon') {
      setSearchTerm(inputValue);
      navigate('/search-results');
    } else {
      setSearchTerm('');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  // Toggle voice recognition listening.
  const toggleListening = () => {
    if (!listening) {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  return (
      <div className="search-container">
        <Typography variant="h6" gutterBottom>
          Voice & Keyboard Search
        </Typography>

        {/* Search input */}
        <TextField
          className="search-bar"
          label="Search"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {/* Virtual Keyboard */}
        <Keyboard
          onChange={handleKeyboardChange}
          layout={{
            default: [
              "q w e r t y u i o p",
              "a s d f g h j k l",
              "z x c v b n m",
              "{bksp} {space} {enter}"
            ]
          }}
          display={{
            "{bksp}": "⌫",
            "{enter}": "↵",
            "{space}": "Space",
          }}
        />

        <Box className="toolbar">
          {/* Mic Icon & Status */}
          <IconButton onClick={toggleListening}>
            <MicIcon className="mic-icon" />
          </IconButton>
          <Typography variant="body1" className="mic-status">
            {listening ? 'Listening...' : 'Voice Search Off'}
          </Typography>

          {/* Search Button */}
          <Button variant="contained" onClick={handleSearch}>
            SEARCH
          </Button>

          {/* Reset Button */}
          <Button variant="outlined" onClick={resetTranscript}>
            RESET VOICE
          </Button>
        </Box>

        {/* Snackbar for invalid search */}
        <Snackbar
          className="custom-snackbar"
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          message="There are no shows under this name."
        />
      </div>
  );
};

export default SearchPage;
