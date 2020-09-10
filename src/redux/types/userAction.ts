import {
  SET_USER,
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED
} from '../constants/userConstants';
import { user } from '../models/User';

export interface SetUser {
  type: typeof SET_USER;
  payload: user;
}

export interface SetloadingUser {
  type: typeof LOADING_USER;
}

export interface SetAuthenticatedUser {
  type: typeof SET_AUTHENTICATED;
}

export interface SetUnAuthenticatedUser {
  type: typeof SET_UNAUTHENTICATED;
}

export type UserActionTypes =
  | SetUser
  | SetloadingUser
  | SetAuthenticatedUser
  | SetUnAuthenticatedUser;
