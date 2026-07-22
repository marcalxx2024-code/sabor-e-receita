import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type Ctx = {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<Ctx | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const savedFavorites = localStorage.getItem('sabor-favoritos');
      const parsedFavorites = JSON.parse(savedFavorites ?? '[]');

      return Array.isArray(parsedFavorites) ? parsedFavorites : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      'sabor-favoritos',
      JSON.stringify(favoriteIds),
    );
  }, [favoriteIds]);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((favoriteId) => favoriteId !== id)
        : [...currentIds, id],
    );
  };

  const isFavorite = (id: string) => {
    return favoriteIds.includes(id);
  };

  const value = useMemo(
    () => ({
      favoriteIds,
      toggleFavorite,
      isFavorite,
    }),
    [favoriteIds],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      'useFavorites deve estar dentro de FavoritesProvider',
    );
  }

  return context;
}