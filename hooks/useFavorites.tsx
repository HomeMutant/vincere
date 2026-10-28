'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

const STORAGE_KEY = 'vincere:favorites';

type FavoritesValue = {
  favorites: number[];
  loaded: boolean;
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
};

const FavoritesContext = createContext<FavoritesValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load once on the client (localStorage doesn't exist during server render).
  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]');
      if (Array.isArray(stored)) setFavorites(stored.filter((id): id is number => typeof id === 'number'));
    } catch {
      // Ignore unreadable or blocked storage; favorites just start empty.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // Storage can be unavailable (private mode); favorites still work for this visit.
    }
  }, [favorites, loaded]);

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((current) => (current.includes(id) ? current.filter((x) => x !== id) : [...current, id]));
  }, []);

  const value = useMemo<FavoritesValue>(
    () => ({ favorites, loaded, isFavorite: (id) => favorites.includes(id), toggleFavorite }),
    [favorites, loaded, toggleFavorite],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used inside <FavoritesProvider>');
  return context;
}
