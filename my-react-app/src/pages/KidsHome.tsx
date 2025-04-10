import { Box, Typography, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import "/src/pages/css_files/KidsHome.css";
import { useNavigate } from 'react-router-dom';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react';
import show1Img from '/src/assets/bluey-pictures-wceyl8vyayvezbct.webp';
import show2Img from '/src/assets/Cocomelon.jpg';
import show3Img from '/src/assets/image_ab1efa4f.webp';
import show4Img from '/src/assets/p492370_b_h10_ag.webp';

 interface Show {
   id: number;
   title: string;
   image: string;
 }
  
  const ChildHome: React.FC = () => {
    const navigate = useNavigate();

    const handleSearchButtonClick = () => {
      navigate('/search-page');
    };
  
    const recentShows: Show[] = [
      { id: 1, title: 'Show 1', image: show1Img },
      { id: 2, title: 'Show 2', image: show2Img },
      { id: 3, title: 'Show 3', image: show3Img },
      { id: 4, title: 'Show 4', image: show4Img },
    ];

    let [isOpen, setIsOpen] = useState(false);

    const limit = () => {
      setIsOpen(true);
    }

    const timeLimitButton = () => {
      setIsOpen(false)
      navigate("/ ")
    }

  return (
    <Box className="child-home-container">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-1000">
        <div className="fixed inset-0">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Limit Reached</DialogTitle>
              <Description>"Sorry buddy no more screen time until after dinner"</Description>
                    
              <div className="flex gap-4">
                <button onClick={timeLimitButton}>OK</button>
              </div>
          </DialogPanel>
        </div>
      </Dialog>

      <button className="time-limit-box" onClick={limit}>Current Time Limit : 3 Hours</button>
      {/* Title */}
      <Typography sx={{ fontSize: '3rem', fontWeight: 'bold' }}>Recently Watched</Typography>

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
            <img src={show.image} alt={show.title} className="carousel-image" />
            <Typography className="carousel-title">{show.title}</Typography>
          </Box>
        ))}
      </Carousel>

      {/* Bottom Navigation */}
      <Box className="bottom-nav" sx={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#FFD700',     // Gold outline
            color: '#FFD700',           // Gold color for icon and text
            display: 'flex',
            flexDirection: 'column',    
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem',
            fontSize: '4rem',
          }}
          onClick={() => navigate('/child/favourites')}
        >
          <StarIcon sx={{ fontSize: '4rem' }} />
          <Typography sx={{ fontSize: '1rem', marginTop: '0.5rem' }}>
            Fav
          </Typography>
        </Button>


        <Button variant="outlined" startIcon={<DownloadIcon />}>
          Downloads
        </Button>
        <Button variant="outlined" startIcon={<SearchIcon />} onClick={handleSearchButtonClick}>
          Search
        </Button>
      </Box>
    </Box>
    
  );
};

export default ChildHome;
