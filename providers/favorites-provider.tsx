import { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';

import { storage } from '@/storage';

const FAVORITES_KEY = 'favorites';

interface IFavoritesContext {
  favorites: string[];
  addFavorite: (currency: string) => void;
  removeFavorite: (currency: string) => void;
}

const FavoritesContext = createContext<IFavoritesContext | undefined>(undefined);

export const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = storage.getString(FAVORITES_KEY);
    if (!storedFavorites) return;
    const parsed = JSON.parse(storedFavorites);
    setFavorites(parsed);
  }, []);

  const persistFavorites = (newFavorites: string[]) => {
    setFavorites(newFavorites);
    storage.set(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

  const addFavorite = (currency: string) => {
    if (favorites.includes(currency)) return;
    persistFavorites([...favorites, currency]);
  };

  const removeFavorite = (currency: string) => {
    persistFavorites(favorites.filter((item) => item !== currency));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): IFavoritesContext => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
  return context;
};
