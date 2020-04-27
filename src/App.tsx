import React, { useContext, useState } from 'react';
import { CharacterStore } from './context/Character';
import { FormElem } from './model/Aliases';
import { ICharacter } from './model/Character';
import { addCharater } from './context/Character/actions';

const App = () => {
  const { state, dispatch } = useContext(CharacterStore);
  const { characters } = state;
  const [newCharacter, setNewCharacter] = useState('');

  const handleSubmit = (e: FormElem) => {
    e.preventDefault();

    if (newCharacter) {
      
      addCharater(dispatch, {
        character: {
          name: newCharacter,
        },
      });

      setNewCharacter('');
    }
  };

  return (
    <>
      <h1>Lista de Personagens</h1>

      <ul>
        {characters.map((character: ICharacter) => (
          <li>{character.name}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newCharacter}
          onChange={(e) => setNewCharacter(e.target.value)}
        />
        <button type="submit">Adicionar personagem</button>
      </form>
    </>
  );
};

export default App;
