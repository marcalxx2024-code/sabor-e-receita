import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
type Ctx = {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};
const FavoritesContext = createContext<Ctx | undefined>(undefined);
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('sabor-favoritos') ?? '[]');
    } catch {
      return [];
    }
  });
  useEffect(
    () => localStorage.setItem('sabor-favoritos', JSON.stringify(favoriteIds)),
    [favoriteIds],
  );
  const value = useMemo(
    () => ({
      favoriteIds,
      toggleFavorite: (id: string) =>
        setFavoriteIds((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id])),
      isFavorite: (id: string) => favoriteIds.includes(id),
    }),
    [favoriteIds],
  );
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
export function useFavorites() {
  const c = useContext(FavoritesContext);
  if (!c) throw new Error('useFavorites deve estar dentro de FavoritesProvider');
  return c;
}
