import { IAction } from '../interfaces';
import * as actions from './actionTypes';

export const reducerInitialState = {
  laoding:false,
  isSignedIn: false,
  user: {},
  shows: {},
  show: {},
  searchResult: []
}

const reducer = (state = reducerInitialState, action) => {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: action.payload };
    case actions.SIGNIN:
      return { ...state, user: action.payload, isSignedIn: true };
    case actions.SIGNUP:
      return { ...state, user: action.payload, isSignedIn: true };
    case actions.SIGNOUT:
      return { ...state, user: null, isSignedIn: false };
    case actions.GET_ALL_SHOWS:
      return { ...state, shows: action.payload };
    case actions.GET_SHOW_DETAILS:
      return { ...state, show: action.payload };
    case actions.GET_SEARCH_RESULT:
      return { ...state, searchResult: action.payload };
    default:
      return state;
  }
};

export default reducer;