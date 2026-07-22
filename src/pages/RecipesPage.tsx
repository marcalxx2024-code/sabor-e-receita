import { SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { EmptyState } from '../components/common/EmptyState';
import { SearchBar } from '../components/common/SearchBar';
import { RecipeCard } from '../components/recipes/RecipeCard';
import { categories, recipes } from '../data/recipes';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
export function RecipesPage() {
  useDocumentTitle('Receitas', 'Pesquise e filtre todas as receitas do Sabor & Receita.');
  const [params, setParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const q = params.get('q') ?? '',
    cat = params.get('categoria') ?? '',
    diff = params.get('dificuldade') ?? '',
    time = params.get('tempo') ?? '',
    sort = params.get('ordem') ?? 'rating';
  const set = (k: string, v: string) => {
    const n = new URLSearchParams(params);
    if (v) {
      n.set(k, v);
    } else {
      n.delete(k);
    }
    setParams(n);
  };
  const filtered = useMemo(
    () =>
      recipes
        .filter((r) => {
          const text = `${r.title} ${r.ingredients.join(' ')}`.toLowerCase();
          return (
            text.includes(q.toLowerCase()) &&
            (!cat || r.category === cat) &&
            (!diff || r.difficulty === diff) &&
            (!time || r.preparationTime + r.cookingTime <= Number(time))
          );
        })
        .sort((a, b) =>
          sort === 'name'
            ? a.title.localeCompare(b.title)
            : sort === 'time'
              ? a.preparationTime + a.cookingTime - (b.preparationTime + b.cookingTime)
              : b.rating - a.rating,
        ),
    [q, cat, diff, time, sort],
  );
  const clear = () => setParams({});
  return (
    <section className="container-app py-12">
      <div className="max-w-2xl">
        <p className="font-bold uppercase tracking-widest text-orange-600">
          Descubra novos sabores
        </p>
        <h1 className="mt-2 text-4xl font-black md:text-5xl">Todas as receitas</h1>
        <p className="mt-3 text-stone-600">
          Pesquise pelo nome ou por um ingrediente que você já tem em casa.
        </p>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside
          className={`${showFilters ? 'block' : 'hidden'} h-fit rounded-3xl border border-orange-100 bg-white p-5 lg:block`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-black">Filtros</h2>
            <button
              onClick={() => setShowFilters(false)}
              className="lg:hidden"
              aria-label="Fechar filtros"
            >
              <X />
            </button>
          </div>
          <div className="mt-5 space-y-5">
            <label className="block text-sm font-bold">
              Categoria
              <select
                value={cat}
                onChange={(e) => set('categoria', e.target.value)}
                className="mt-2 min-h-11 w-full rounded-xl border border-stone-200 px-3"
              >
                <option value="">Todas</option>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-bold">
              Dificuldade
              <select
                value={diff}
                onChange={(e) => set('dificuldade', e.target.value)}
                className="mt-2 min-h-11 w-full rounded-xl border border-stone-200 px-3"
              >
                <option value="">Todas</option>
                <option>Fácil</option>
                <option>Médio</option>
                <option>Difícil</option>
              </select>
            </label>
            <label className="block text-sm font-bold">
              Tempo total
              <select
                value={time}
                onChange={(e) => set('tempo', e.target.value)}
                className="mt-2 min-h-11 w-full rounded-xl border border-stone-200 px-3"
              >
                <option value="">Qualquer tempo</option>
                <option value="15">Até 15 minutos</option>
                <option value="30">Até 30 minutos</option>
                <option value="60">Até 1 hora</option>
              </select>
            </label>
            <button
              onClick={clear}
              className="w-full rounded-full border border-orange-300 py-3 font-bold text-orange-700"
            >
              Limpar filtros
            </button>
          </div>
        </aside>
        <div>
          <div className="grid gap-3 md:grid-cols-[1fr_auto]">
            <SearchBar value={q} onChange={(v) => set('q', v)} />
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(true)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border bg-white px-4 font-bold lg:hidden"
              >
                <SlidersHorizontal />
                Filtros
              </button>
              <select
                value={sort}
                onChange={(e) => set('ordem', e.target.value)}
                aria-label="Ordenar receitas"
                className="min-h-12 rounded-full border border-stone-200 bg-white px-4 font-semibold"
              >
                <option value="rating">Melhor avaliação</option>
                <option value="name">Nome A–Z</option>
                <option value="time">Menor tempo</option>
              </select>
            </div>
          </div>
          <p className="my-6 text-sm font-semibold text-stone-600">
            {filtered.length} receita(s) encontrada(s)
          </p>
          {filtered.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((r) => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </section>
  );
}
