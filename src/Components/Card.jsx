import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const storedFavs = JSON.parse(localStorage.getItem('favDentists')) || [];
    const newFavorite = { name, username, id };
    
    if (!storedFavs.find(dentist => dentist.id === id)) {
      storedFavs.push(newFavorite);
      localStorage.setItem('favDentists', JSON.stringify(storedFavs));
    }
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{username}</p>
      <Link to={`/dentist/${id}`} className="detailButton">
        View Details
      </Link>
      <button onClick={addFav} className="favButton">
        Add to Favs
      </button>
    </div>
  );
};

export default Card;
