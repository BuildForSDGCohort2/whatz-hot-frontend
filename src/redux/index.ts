import { combineReducers, applyMiddleware, compose, createStore } from 'redux';

import thunk, { ThunkMiddleware } from 'redux-thunk';
import uiReducer from './reducers/Ui';
import { AppActions } from './types/actions';

export const rootReducer = combineReducers({
  Ui: uiReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const middleWare = [
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
].filter(Boolean);

const store = createStore(rootReducer, compose(...middleWare));

export default store;
