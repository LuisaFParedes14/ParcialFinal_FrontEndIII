import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext'; // Ajusta la ruta según la ubicación de tu GlobalContext
import Form from '../Components/Form';

const Contact = () => {
  const { state } = useContext(GlobalContext); // Accede al estado global para obtener el tema

  return (
    <div className={`contact-container ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
