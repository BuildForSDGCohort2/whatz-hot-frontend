import { Ui } from '../models/ui';
import { AppActions } from '../types/actions';
import { Dispatch } from 'redux';

export const loadui = (ui: Ui): AppActions => ({
  type: 'UI_LOADING'
});

export const setUiLoading = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => void) => {
    dispatch(
      loadui({
        loading: true
      })
    );
  };
};
