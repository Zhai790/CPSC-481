import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Paper } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "/src/pages/css_files/SearchResults.css";
import cocomelonNSFW from '../assets/cocomelon_nsfw.jpg';
import cocomelonFoul from '../assets/cocomelon_excessive.jpg';
import cocomelonViolent from '../assets/cocomelon_violent.jpg';
import cocomelonSafe from '../assets/Cocomelon.jpg';


const SearchResults: React.FC = () => {
  const navigate = useNavigate();
  const query = 'cocomelon';

  type ResultItem = {
    id: number;
    title: string;
    tags: string[];
    thumbnail: string;
  };
  
  const [filteredResults, setFilteredResults] = useState<ResultItem[]>([]);
  
  // Mock data with tags to filter
  const results = [
    { id: 1, title: 'Cocomelon (sexual)', tags: ['sexualScenes'], thumbnail: cocomelonNSFW },
    { id: 2, title: 'Cocomelon (foul)', tags: ['foulLanguage', 'harmfulToDevelopment'], thumbnail: cocomelonFoul },
    { id: 3, title: 'Cocomelon (violent)', tags: ['excessiveViolence'], thumbnail: cocomelonViolent },
    { id: 4, title: 'Cocomelon', tags: [], thumbnail: cocomelonSafe },
  ];  

  useEffect(() => {
    const isAutofilterEnabled = JSON.parse(localStorage.getItem('isAutofilterEnabled') || 'false');
    const filters = JSON.parse(localStorage.getItem('filters') || '{}');

    if (!isAutofilterEnabled) {
      setFilteredResults(results);
    } else {
      const activeFilters = Object.keys(filters).filter((key) => filters[key]);

      const filtered = results.filter((show) =>
        show.tags.every((tag) => !activeFilters.includes(tag))
      );

      setFilteredResults(filtered);
    }
  }, []);

  const handleShowDetails = () => {
    navigate(`/Content-Details`);
  };

  return (
    <Box className="results-container">
      <Typography variant="h5" className="result-heading">
        Search Results for: "{query}"
      </Typography>

      {filteredResults.length === 0 && (
        <Typography>No results found due to active filters.</Typography>
      )}

      {filteredResults.map((result) => (
        <Paper key={result.id} className="result-item" style={{ display: 'flex', alignItems: 'center', padding: '16px', marginBottom: '16px' }}>
          {/* Thumbnail */}
          <img
            src={result.thumbnail}
            alt={result.title}
            style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '16px', borderRadius: '8px' }}
          />

          {/* Text and Buttons */}
          <Box>
            <Typography className="result-title">{result.title}</Typography>

            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              className="button-margin"
              onClick={() => alert(`Downloading ${result.title}...`)}
              style={{ marginRight: '8px', marginTop: '8px' }}
            >
              Download
            </Button>

            <Button
              variant="outlined"
              startIcon={<StarIcon />}
              className="button-margin"
              onClick={() => alert(`Added ${result.title} to favorites!`)}
              style={{ marginRight: '8px', marginTop: '8px' }}
            >
              Fav
            </Button>

            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              onClick={handleShowDetails}
              style={{ marginTop: '8px' }}
            >
              Details
            </Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default SearchResults;
