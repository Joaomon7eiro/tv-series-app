import {
  AnyAction, applyMiddleware, createStore, Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState, rootReducer } from './reducers/root.reducer';
import { favoritesMiddleware } from './middlewares/favorites.middleware';

const composedEnhancer = composeWithDevTools(
  applyMiddleware(
    ...favoritesMiddleware,
  ),
);
const store: Store<ApplicationState, AnyAction> = createStore(rootReducer, composedEnhancer);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
