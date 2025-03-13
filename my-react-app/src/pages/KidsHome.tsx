import { Box, Typography, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import "/src/pages/css_files/KidsHome.css";

  interface Show {
    id: number;
    title: string;
  }
  
  const ChildHome: React.FC = () => {
    const recentShows: Show[] = [
      { id: 1, title: 'Show 1' },
      { id: 2, title: 'Show 2' },
      { id: 3, title: 'Show 3' },
      { id: 4, title: 'Show 4' },
    ];

  return (
    <Box className="child-home-container">
      {/* Title */}
      <Typography sx={{ fontSize: '3rem', fontWeight: 'bold' }}>Recently Watched</Typography>

      {/* Recently Watched Section */}
      <Carousel
        className="recently-watched-carousel"
        showThumbs={false}     // Hide thumbnail navigation
        infiniteLoop={true}     // Enable infinite looping
        showArrows={true}       // Show left & right arrows
        showStatus={false}      // Hide "1/4" status indicator
        swipeable={true}        // Enable touch/mouse swiping
        emulateTouch={true}     // Make touch gestures smoother
      >
        {recentShows.map((show) => (
          <Box key={show.id} className="recently-watched-box">
            {show.title}
          </Box>
        ))}
      </Carousel>

      {/* Bottom Navigation */}
      <Box className="bottom-nav">
        <Button variant="outlined" startIcon={<StarIcon />}>
          Fav
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
