import { ChefHat, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { useFavorites } from '../../contexts/FavoritesContext';
const links = [
  ['/', 'Início'],
  ['/receitas', 'Receitas'],
  ['/categorias', 'Categorias'],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const { favoriteIds } = useFavorites();
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-[#fffaf5]/95 backdrop-blur">
      <div className="container-app flex min-h-18 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-black text-stone-900">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-600 text-white">
            <ChefHat />
          </span>
          Sabor <span className="text-orange-600">& Receita</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-semibold ${isActive ? 'text-orange-600' : 'text-stone-700 hover:text-orange-600'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/favoritos" className="relative flex items-center gap-2 font-semibold">
            <Heart />
            Favoritos
            {favoriteIds.length > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-orange-600 px-1 text-xs text-white">
                {favoriteIds.length}
              </span>
            )}
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-app flex flex-col gap-4 border-t border-orange-100 py-5 md:hidden">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className="font-semibold">
              {label}
            </NavLink>
          ))}
          <Link to="/favoritos" onClick={() => setOpen(false)} className="font-semibold">
            Favoritos ({favoriteIds.length})
          </Link>
        </nav>
      )}
    </header>
  );
}
