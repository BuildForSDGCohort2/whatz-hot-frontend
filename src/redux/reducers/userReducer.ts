import { usersReducerState } from '../models/User';
import { UserActionTypes } from '../types/userAction';

export const userInitialState: usersReducerState = {
  data: [],
  authenticated: false,
  loading: false
};

const userReducer = (
  state = userInitialState,
  action: UserActionTypes
): usersReducerState => {
  switch (action.type) {
    case 'SET_AUTHENTICATED':
      return {
        ...state,
        authenticated: true
      };
    case 'SET_UNAUTHENTICATED':
      return userInitialState;
    case 'SET_USER':
      return {
        ...state,
        data: [action.payload],
        authenticated: true,
        loading: false
      };
    case 'LOADING_USER':
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default userReducer;
