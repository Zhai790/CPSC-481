// src/SearchResults.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Paper } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "/src/pages/css_files/SearchResults.css";

const SearchResults: React.FC = () => {
  const navigate = useNavigate();
  const query = 'cocomelon';

  // Mock data for illustration:
  const results = [
    { id: 1, title: 'Show 1' },
    { id: 2, title: 'Show 2' },
    { id: 3, title: 'Show 3' },
  ];

  const handleShowDetails = () => {
    navigate(`/Content-Details`);
  };

  return (
    <Box className="results-container">
      <Typography variant="h5" className="result-heading">
        Search Results for: "{query}"
      </Typography>

      {results.map((result) => (
        <Paper key={result.id} className="result-item">
          <Typography className="result-title">{result.title}</Typography>

          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            className="button-margin"
            onClick={() => alert(`Downloading ${result.title}...`)}
          >
            Download
          </Button>

          <Button
            variant="outlined"
            startIcon={<StarIcon />}
            className="button-margin"
            onClick={() => alert(`Added ${result.title} to favorites!`)}
          >
            Fav
          </Button>

          <Button
            variant="contained"
            startIcon={<PlayArrowIcon />}
            onClick={handleShowDetails}
          >
            Details
          </Button>
        </Paper>
      ))}
    </Box>
  );
};

export default SearchResults;
