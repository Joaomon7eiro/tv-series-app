import React, {
  createContext, useContext, useEffect, useState, useMemo, useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Series } from '../types/series';

type FavoritesContextData = {
  addFavorite: (series: Series) => void;
  removeFavorite: (seriesId: number) => void;
  favorites: Series[];
  isFavorite: (seriesId: number) => boolean;
}

const favoritesKey = '@favorites:';
const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

type FavoritesContextProviderProps = {
  children: React.ReactNode
}
const FavoritesContextProvider: React.FC<FavoritesContextProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Series[]>([]);

  const addFavorite = useCallback(
    (series: Series) => {
      const favoritesCollection = [...favorites, series];
      setFavorites(favoritesCollection);
      AsyncStorage.setItem(favoritesKey, JSON.stringify(favoritesCollection));
    },
    [favorites],
  );

  const removeFavorite = useCallback(
    (seriesId: number) => {
      const favoritesCollection = favorites.filter((f: Series) => f.id !== seriesId);
      setFavorites(favoritesCollection);
      AsyncStorage.setItem(favoritesKey, JSON.stringify(favoritesCollection));
    },
    [favorites],
  );

  const isFavorite = useCallback(
    (seriesId: number) => favorites.some((f) => f.id === seriesId),
    [favorites],
  );

  const getInitialData = async () => {
    const favoritesData = await AsyncStorage.getItem(favoritesKey);

    if (favoritesData) {
      const fav = JSON.parse(favoritesData);
      const sortedFavorites = (fav as Series[]).sort((showA, showB) => (showA.name < showB.name ? -1 : 1));
      setFavorites(sortedFavorites);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const memoContextValue = useMemo(() => ({
    favorites, removeFavorite, addFavorite, isFavorite,
  }), [addFavorite, favorites, removeFavorite, isFavorite]);

  return (
    <FavoritesContext.Provider value={memoContextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  return context;
};

export { useFavorites, FavoritesContextProvider };
