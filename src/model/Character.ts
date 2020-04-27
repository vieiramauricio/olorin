export interface ICharacter {
  name: string;
}
export interface IState {
  characters: ICharacter[];
}
export interface IPayload {
  character: ICharacter;
}
export interface IAction {
  type: string;
  payload: IPayload;
}
