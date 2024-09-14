import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext'; // Ajusta la ruta según la ubicación de tu GlobalContext

const Footer = () => {
  const { state } = useContext(GlobalContext);

  return (
    <footer className={`footer ${state.theme}`}>
      <p>Powered by</p>
      <img src="/public/images/DH.png" alt="DH-logo" /> {/* Ajusta la ruta según sea necesario */}
    </footer>
  );
}

export default Footer;
