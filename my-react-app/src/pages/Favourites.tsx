import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import './css_files/Favourites.css';

const Favourites: React.FC = () => {
  const [favouriteShows, setFavouriteShows] = useState([
    { id: 1, title: 'Bluey', duration: '22:45', thumbnail: '/assets/bluey.jpg' },
    { id: 2, title: 'Paw Patrol', duration: '18:30', thumbnail: '/assets/pawpatrol.jpg' },
    { id: 3, title: 'SpongeBob SquarePants', duration: '15:20', thumbnail: '/assets/spongebob.jpg' },
  ]);

  const removeShow = (id: number) => {
    setFavouriteShows((prev) => prev.filter((show) => show.id !== id));
  };

  return (
    <div className="favourites-container">
      <div className="favourites-header">
        <StarIcon style={{ marginRight: '0.5rem' }} />
        Favourites Page
      </div>

      {favouriteShows.length === 0 ? (
        <p>No favourites yet!</p>
      ) : (
        <>
          {favouriteShows.map((show) => (
            <div key={show.id} className="show-card">
              <img src={show.thumbnail} alt={show.title} className="thumbnail" />
              <div className="show-info">
                <strong>{show.title}</strong>
                <div>Duration: {show.duration}</div>
              </div>
              <div className="button-stack">
                <button className="play-button">Play</button>
                <button className="delete-button" onClick={() => removeShow(show.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Favourites;
