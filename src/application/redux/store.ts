import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from './middlewares/api.middleware';
import { seriesMiddleware } from './middlewares/series.middleware';

const composedEnhancer = composeWithDevTools(
  applyMiddleware(...seriesMiddleware, apiMiddleware)
);
const store = createStore(rootReducer, composedEnhancer);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;