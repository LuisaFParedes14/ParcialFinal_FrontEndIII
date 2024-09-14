import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext'; // Ajusta la ruta según la ubicación de tu GlobalContext

const Detail = () => {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL
  const { state } = useContext(GlobalContext); // Accede al estado global
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Realiza el fetch a la API para obtener la información del dentista específico
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://api.example.com/dentists/${id}`); // Ajusta la URL según tu API
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist:', error);
      }
    };

    fetchDentist();
  }, [id]);

  if (!dentist) {
    return <p>Loading...</p>; // O un spinner de carga si prefieres
  }

  return (
    <div className={`detail-container ${state.theme}`}>
      <h1>Detail Dentist</h1>
      <p><strong>Name:</strong> {dentist.name}</p>
      <p><strong>Email:</strong> {dentist.email}</p>
      <p><strong>Phone:</strong> {dentist.phone}</p>
      <p><strong>Website:</strong> <a href={dentist.website} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
    </div>
  );
};

export default Detail;
