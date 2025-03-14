import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Favourites: React.FC = () => {
  // State for the favourite shows
  const [favouriteShows, setFavouriteShows] = useState([
    { id: 1, title: 'Bluey' },
    { id: 2, title: 'Paw Patrol' },
    { id: 3, title: 'SpongeBob SquarePants' },
  ]);

  // Remove a show by its id
  const removeShow = (id: number) => {
    setFavouriteShows((prevShows) => prevShows.filter((show) => show.id !== id));
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      {/* Header with Star Icon */}
      <Typography
        variant="h3"
        sx={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}
      >
        <StarIcon sx={{ marginRight: '0.5rem' }} />
        Favourites Page
      </Typography>

      {/* If no favourites, show a message; otherwise list them */}
      {favouriteShows.length === 0 ? (
        <Typography>No favourites yet!</Typography>
      ) : (
        <Box>
          {favouriteShows.map((show) => (
            <Box key={show.id} sx={{ marginBottom: '1rem' }}>
              <Typography variant="h5" sx={{ display: 'inline-block', marginRight: '1rem' }}>
                {show.title}
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeShow(show.id)}
              >
                Remove
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Favourites;
