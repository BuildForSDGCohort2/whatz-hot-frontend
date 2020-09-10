import { Ui } from '../models/ui';
import { Dispatch } from 'redux';
import { AppActions } from '../types/appAction';

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
