import React, { createContext, useReducer } from 'react';
import { IState } from '../../model/Character';
import characterReducer from './reducer';


const initialState: IState = {
  characters: [],
};

const CharacterStore = createContext<IState | any>(initialState);

const GlobalCharacter: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);

  return (
    <CharacterStore.Provider value={{ state, dispatch }}>
      {children}
    </CharacterStore.Provider>
  );
};

export { CharacterStore };
export default GlobalCharacter;
