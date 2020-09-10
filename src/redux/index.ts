import { combineReducers, applyMiddleware, compose, createStore } from 'redux';

import thunk, { ThunkMiddleware } from 'redux-thunk';
import userReducer from './reducers/userReducer';
import { AppActions } from './types/appAction';
import uiReducer from './reducers/uiReducer';

export const rootReducer = combineReducers({
  Ui: uiReducer,
  user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const middleWare = [
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
].filter(Boolean);

const store = createStore(rootReducer, compose(...middleWare));

export default store;
