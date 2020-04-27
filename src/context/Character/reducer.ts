import { IState, IAction } from '../../model/Character';

const characterReducer = (state :IState, action :IAction) => {
  switch(action.type){
    case 'ADD_CHARACTER':
      return {...state, characters: [...state.characters, action.payload.character]};
    default:
      return state;
  }
};

export default characterReducer;