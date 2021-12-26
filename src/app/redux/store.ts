import {
  AnyAction, createStore, Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState, rootReducer } from './reducers/root.reducer';

const composedEnhancer = composeWithDevTools();
const store: Store<ApplicationState, AnyAction> = createStore(rootReducer, composedEnhancer);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
