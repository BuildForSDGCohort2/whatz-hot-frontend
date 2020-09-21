import { UI_LOADING, SET_ERRORS, CLEAR_ERRORS } from '../constants/constants';

export interface SetUiLoading {
  type: typeof UI_LOADING;
}

export interface SetErrorLoading {
  type: typeof SET_ERRORS;
  payload: [];
}

export interface SetClearError {
  type: typeof CLEAR_ERRORS;
}

export type UiActionTypes = SetUiLoading | SetErrorLoading | SetClearError;
