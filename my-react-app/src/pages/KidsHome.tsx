import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import "./KidsHome.css";

interface Show {
  id: number;
  title: string;
}

const ChildHome: React.FC = () => {
  // Initialize navigation hook
  const navigate = useNavigate();

  const recentShows: Show[] = [
    { id: 1, title: 'Show 1' },
    { id: 2, title: 'Show 2' },
    { id: 3, title: 'Show 3' },
    { id: 4, title: 'Show 4' },
  ];

  return (
    <Box className="child-home-container">
      {/* Title */}
      <Typography sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
        Recently Watched
      </Typography>

      {/* Recently Watched Section */}
      <Carousel
        className="recently-watched-carousel"
        showThumbs={false}
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
      >
        {recentShows.map((show) => (
          <Box key={show.id} className="recently-watched-box">
            {show.title}
          </Box>
        ))}
      </Carousel>

      {/* Bottom Navigation */}
      <Box className="bottom-nav" sx={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
        {/* FAV Button with Vertical Layout */}
        <Button
          variant="outlined"
          sx={{
            borderColor: '#FFD700',     // Gold outline
            color: '#FFD700',           // Gold color for icon and text
            display: 'flex',
            flexDirection: 'column',    // Stack icon above text
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem',
            fontSize: '4rem',
          }}
          onClick={() => navigate('/child/favourites')}  // Navigate to Favourites page
        >
          <StarIcon sx={{ fontSize: '5rem' }} />
          <Typography sx={{ fontSize: '1rem', marginTop: '0.5rem' }}>
            Fav
          </Typography>
        </Button>

        <Button variant="outlined" startIcon={<DownloadIcon />}>
          Downloads
        </Button>
        <Button variant="outlined" startIcon={<SearchIcon />}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default ChildHome;
