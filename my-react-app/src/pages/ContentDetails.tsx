import { Box, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import StarIcon from '@mui/icons-material/Star';

const ShowDetails: React.FC = () => {
  const show = {
    title: `Cocomelon`,
    description: 'A great show for demonstration purposes.',
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        {show.title}
      </Typography>
      {/*image Container */}
      <div className="image-container">
        <img src="src/assets/Cocomelon.jpg" alt="Main" className="image" />
      </div>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {show.description}
      </Typography>

      <Button
        variant="contained"
        startIcon={<PlayArrowIcon />}
        sx={{ mr: 2 }}
        onClick={() => alert(`Playing ${show.title}...`)}
      >
        Play
      </Button>
      <Button
        variant="outlined"
        startIcon={<DownloadIcon />}
        sx={{ mr: 2 }}
        onClick={() => alert(`Downloading ${show.title}...`)}
      >
        Download
      </Button>
      <Button
        variant="outlined"
        startIcon={<StarIcon />}
        onClick={() => alert(`Favorited ${show.title}!`)}
      >
        Favorite
      </Button>
    </Box>
  );
};

export default ShowDetails;
