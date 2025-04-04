import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import "/src/pages/css_files/SearchPage.css";

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    navigate('/search-results');
  };

  const handleFilter = () => {
    navigate('/content-filters');
  };

  return (
    <div className="search-container">
        <TextField
            className="search-bar"
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
            SEARCH
        </Button>
        <Button variant="outlined" onClick={handleFilter}>
            FILTERS
        </Button>
    </div>
  );
};

export default SearchPage;

