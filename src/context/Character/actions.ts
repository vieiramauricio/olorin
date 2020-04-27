import { Dispatch } from 'react';
import {IPayload, IAction} from '../../model/Character';

export const addCharater = (dispatch: Dispatch<IAction>, payload : IPayload) =>{
  dispatch({
    type: 'ADD_CHARACTER',
    payload: payload
  });
}