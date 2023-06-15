// Semplice: scrivere un componente che data una frase
// inserita dall'utente in un input text la stampi come
// lista puntata sotto di esso.

import React, { useState } from 'react';

function SimpleChat2() {
  const [frase, setFrase] = useState('');
  const [frasiList, setFrasiList] = useState([]);

  const handleInputChange = (event) => {
    setFrase(event.target.value);
  };

  function aggiungiElemento() {
        if (frase.trim() !== '') {
            setFrasiList([...frasiList, frase]);
            setFrase('');
        }
    }

  return (
    <div>
      <div>
        <label htmlFor="input-text">Inserisci una frase:</label>
        <input
          type="text"
          id="input-text"
          value={frase}
          onChange={handleInputChange}
        />
        <button onClick={aggiungiElemento}>Aggiungi</button>
      </div>

      <ul>
        {frasiList.map((frase, index) => (
          <li key={index}>{frase}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleChat2;

