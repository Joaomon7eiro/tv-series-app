import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import { ApplicationState, rootReducer } from './reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from './middlewares/api.middleware';
import { seriesMiddleware } from './middlewares/series.middleware';
import { seasonsMiddleware } from './middlewares/seasons.middleware';
import { episodesMiddleware } from './middlewares/episodes.middleware';
import { searchMiddleware } from './middlewares/search.middleware';

const composedEnhancer = composeWithDevTools(
  applyMiddleware(
    ...seriesMiddleware,
    ...seasonsMiddleware,
    ...episodesMiddleware,
    ...searchMiddleware,
    apiMiddleware)
);
const store: Store<ApplicationState, AnyAction> = createStore(rootReducer, composedEnhancer);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;