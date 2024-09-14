import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import { GlobalContext } from '../Context/GlobalContext'; // Ajusta la ruta según la ubicación de tu GlobalContext
import Card from '../Components/Card'; // Ajusta la ruta si es necesario

const Home = () => {
  const { state } = useContext(GlobalContext);

  return (
    <main className={`home-container ${state.theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Renderiza las cards de dentistas */}
        {state.dentists && state.dentists.map(dentist => (
          <Link key={dentist.id} to={`/dentist/${dentist.id}`}>
            <Card dentist={dentist} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
