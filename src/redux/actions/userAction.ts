import { Dispatch } from 'redux';
import { AppActions } from '../types/appAction';
import { user } from '../models/User';

export const loadUser = (User: user): AppActions => ({
  type: 'SET_USER',
  payload: User
});

export const loadingUser = (): AppActions => ({
  type: 'LOADING_USER'
});

export const authenticatedUser = (): AppActions => ({
  type: 'SET_AUTHENTICATED'
});

export const unAuthenticatedUser = (): AppActions => ({
  type: 'SET_UNAUTHENTICATED'
});

export const setLoadUser = (userData: {
  id: string;
  displayName: string;
  email: string;
  photoUrl: string;
  token: string;
}) => {
  return (dispatch: Dispatch<AppActions>, getState: () => void) => {
    const {
      id = '',
      displayName = '',
      email = '',
      photoUrl = '',
      token = ''
    } = userData;
    const usercred = { id, displayName, email, photoUrl, token };
    dispatch(
      loadUser({
        ...usercred
      })
    );
  };
};

export const setAuthenticatedUser = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => void) => {
    dispatch(loadingUser());
  };
};

export const setUnAuthenticatedUser = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => void) => {
    dispatch(loadingUser());
  };
};
