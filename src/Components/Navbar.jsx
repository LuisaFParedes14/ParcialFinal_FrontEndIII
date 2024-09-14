import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import { GlobalContext } from '../Context/GlobalContext'; // Importa el contexto

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext); // Usa el contexto global

  const handleThemeChange = () => {
    // Acción para alternar el tema
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/favs">Favs</Link></li>
        {/* Aquí podrías generar dinámicamente el enlace a los detalles si tienes una forma de hacerlo */}
      </ul>
      <button onClick={handleThemeChange}>
        Change Theme
      </button>
    </nav>
  );
};

export default Navbar;
