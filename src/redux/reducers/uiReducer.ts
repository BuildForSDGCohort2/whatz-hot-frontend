import { Ui } from '../models/ui';
import { UiActionTypes } from '../types/uiActions';

export const uiInitialState: Ui = {
  loading: false,
  errors: []
};

const uiReducer = (state = uiInitialState, action: UiActionTypes): Ui => {
  switch (action.type) {
    case 'SET_ERRORS':
      return {
        ...state,
        loading: false,
        errors: [...action.payload]
      };
    case 'CLEAR_ERRORS':
      return {
        ...state,
        loading: false,
        errors: []
      };
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
