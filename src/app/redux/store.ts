import {
  AnyAction, applyMiddleware, createStore, Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState, rootReducer } from './reducers/root.reducer';
import { apiMiddleware } from './middlewares/api.middleware';
import { seriesMiddleware } from './middlewares/series.middleware';
import { seasonsMiddleware } from './middlewares/seasons.middleware';
import { episodesMiddleware } from './middlewares/episodes.middleware';
import { searchMiddleware } from './middlewares/search.middleware';
import { castCreditsMiddleware } from './middlewares/cast-credits.middleware';
import { favoritesMiddleware } from './middlewares/favorites.middleware';

const composedEnhancer = composeWithDevTools(
  applyMiddleware(
    ...seriesMiddleware,
    ...seasonsMiddleware,
    ...episodesMiddleware,
    ...searchMiddleware,
    ...castCreditsMiddleware,
    ...favoritesMiddleware,
    apiMiddleware,
  ),
);
const store: Store<ApplicationState, AnyAction> = createStore(rootReducer, composedEnhancer);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
