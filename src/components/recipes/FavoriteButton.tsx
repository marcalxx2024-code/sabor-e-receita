import { Heart } from 'lucide-react';
import { useFavorites } from '../../contexts/FavoritesContext';
export function FavoriteButton({ id, compact = false }: { id: string; compact?: boolean }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(id);
  return (
    <button
      onClick={() => toggleFavorite(id)}
      aria-pressed={active}
      aria-label={active ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border bg-white font-bold transition hover:scale-105 ${compact ? 'h-11 w-11' : 'px-5'} ${active ? 'border-rose-200 text-rose-600' : 'border-stone-200 text-stone-700'}`}
    >
      <Heart size={20} className={active ? 'fill-rose-500' : ''} />
      {!compact && (active ? 'Favoritada' : 'Favoritar')}
    </button>
  );
}
