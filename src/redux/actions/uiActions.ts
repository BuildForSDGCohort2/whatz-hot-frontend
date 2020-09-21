import { Ui } from '../models/ui';
import { Dispatch } from 'redux';
import { AppActions } from '../types/appAction';

export const loadui = (ui: Ui): AppActions => ({
  type: 'UI_LOADING'
});

export const errorLoading = (ui: Ui): AppActions => ({
  type: 'SET_ERRORS',
  payload: []
});

export const clearError = (ui: Ui): AppActions => ({
  type: 'SET_ERRORS',
  payload: []
});

export const setUiLoading = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => void) => {
    dispatch(
      loadui({
        loading: true,
        errors: []
      })
    );
  };
};

export const setErrorLoading = (errors: string[]) => {
  return (dispatch: Dispatch<AppActions>, getState: () => void) => {
    dispatch(
      errorLoading({
        loading: false,
        errors: [...errors]
      })
    );
  };
};

export const setClearError = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => void) => {
    dispatch(
      errorLoading({
        loading: false,
        errors: []
      })
    );
  };
};
