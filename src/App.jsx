import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import { GlobalContext } from './Context/GlobalContext'; // Ajusta la ruta según la ubicación de tu GlobalContext
import Footer from './Components/Footer'; // Ajusta la ruta según la ubicación de tu Footer
import Navbar from './Components/Navbar'; // Ajusta la ruta según la ubicación de tu Navbar
import Home from './Routes/Home'; // Ruta actualizada
import Detail from './Routes/Detail'; // Ruta actualizada
import Contact from './Routes/Contact'; // Ruta actualizada
import Favs from './Routes/Favs'; // Ruta actualizada
import './index.css'; // Asegúrate de tener estilos para los temas

function App() {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div className={`App ${state.theme}`}>
      <Navbar onToggleTheme={toggleTheme} currentTheme={state.theme} />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Dentist/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          {/* Ruta por defecto o página 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

