import React, { useState } from 'react';
import Character from './model/Character';

const App = () => {

  const initialValue = [
    {
      name: 'Frodo'
    },
    {
      name: 'Legolas'
    },
    {
      name: 'Jimli'
    }
  ]

  const [characters, setCharacters] = useState<Character[]>(initialValue as Character[]);

  return(
    <>
      <h1>Character List</h1>

      <ul>
        {
          characters.map((character, index) => (
            <li key={index}>{character.name}</li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
