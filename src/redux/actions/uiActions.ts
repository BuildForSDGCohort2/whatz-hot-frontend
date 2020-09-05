import { Ui } from '../models/ui';
import { AppActions } from '../types/actions';

export const loadui = (ui: Ui): AppActions => ({
  type: 'UI_LOADING'
});
