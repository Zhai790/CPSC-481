// src/ContentFilters.tsx
import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContentFilters: React.FC = () => {
  const navigate = useNavigate();

  const handleApplyFilters = () => {
    navigate(`/search-results`);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Content Search Filters
      </Typography>

      <TextField
        label="Streaming Platform"
        variant="outlined"
        sx={{ display: 'block', mb: 2, backgroundColor: 'white' }}
      />
      <TextField
        label="Year"
        variant="outlined"
        sx={{ display: 'block', mb: 2, backgroundColor: 'white' }}
      />
      <TextField
        label="Genre"
        variant="outlined"
        sx={{ display: 'block', mb: 2, backgroundColor: 'white' }}
      />

      <Button variant="contained" onClick={handleApplyFilters}>
        OK
      </Button>
    </Box>
  );
};

export default ContentFilters;
