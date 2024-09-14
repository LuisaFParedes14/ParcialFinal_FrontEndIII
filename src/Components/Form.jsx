import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 5 || !/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor verifique su información nuevamente');
      setSuccess('');
    } else {
      setSuccess(`Gracias ${name}, te contactaremos cuando antes vía mail`);
      setError('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </form>
    </div>
  );
};

export default Form;
