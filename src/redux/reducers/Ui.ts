import { Ui } from '../models/ui';
import { UiActionTypes } from '../types/actions';

export const uiInitialState: Ui = {
  loading: false
};

const uiReducer = (state = uiInitialState, action: UiActionTypes): Ui => {
  switch (action.type) {
    case 'UI_LOADING':
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default uiReducer;
