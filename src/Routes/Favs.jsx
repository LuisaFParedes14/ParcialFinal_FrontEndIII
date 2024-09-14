import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Context/GlobalContext'; // Ajusta la ruta según la ubicación de tu GlobalContext
import Card from '../Components/Card'; // Ajusta la ruta si es necesario

const Favs = () => {
  const { state } = useContext(GlobalContext); // Accede al estado global para obtener el tema
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Obtén los dentistas destacados del localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favDentists')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className={`favs-container ${state.theme}`}>
      <h1>Dentists Favorites</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map(dentist => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p>No favorites found.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
