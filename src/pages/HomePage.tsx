import { ArrowRight, Search, Coffee, UtensilsCrossed, CookingPot, Cake, Salad, Soup, Wheat, CupSoda } from 'lucide-react';;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { RecipeCard } from '../components/recipes/RecipeCard';
import { SectionTitle } from '../components/common/SectionTitle';
import { categories, recipes } from '../data/recipes';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'Café da manhã': Coffee,
  'Jantar': UtensilsCrossed,
  'Almoço': CookingPot,
  'Sobremesas': Cake,
  'Saladas': Salad,
  'Sopas': Soup,
  'Massas': Wheat,
  'Bebidas': CupSoda,
};
export function HomePage() {
  useDocumentTitle('Início', 'Receitas práticas e saborosas para todos os momentos.');
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/receitas?q=${encodeURIComponent(q)}`);
  };
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 py-16 md:py-24">
        <div className="container-app grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
              Cozinhar pode ser simples
            </span>
            <h1 className="mt-6 text-5xl font-black leading-tight text-stone-900 md:text-7xl">
              Receitas que dão <span className="text-orange-600">sabor</span> aos seus dias.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
              Descubra pratos testados, filtros úteis e ideias para café da manhã, almoço, jantar e
              sobremesa.
            </p>
            <form
              onSubmit={submit}
              className="mt-8 flex max-w-xl gap-2 rounded-full bg-white p-2 shadow-lg"
            >
              <Search className="ml-3 self-center text-stone-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="min-w-0 flex-1 px-2"
                placeholder="O que você quer cozinhar?"
                aria-label="Pesquisar receita"
              />
              <button className="rounded-full bg-orange-600 px-6 py-3 font-bold text-white">
                Buscar
              </button>
            </form>
          </div>
          <img
            src={recipes[1].image}
            alt="Risoto cremoso servido em prato"
            className="h-[520px] w-full rounded-[3rem] object-cover shadow-2xl"
          />
        </div>
      </section>
      <section className="container-app py-16">
        <SectionTitle eyebrow="Explore" title="Categorias populares" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.slice(0, 8).map((c) => (
            <Link
              key={c}
              to={`/receitas?categoria=${encodeURIComponent(c)}`}
              className="rounded-3xl border border-orange-100 bg-white p-6 font-black shadow-sm transition hover:-translate-y-1 hover:border-orange-300"
            >
              {(() => {
  const Icon = categoryIcons[c] ?? UtensilsCrossed;
  return <Icon size={32} className="text-orange-600" />;
})()}
              <span className="mt-4 block">{c}</span>
              <span className="mt-1 block text-sm font-normal text-stone-500">
                {recipes.filter((r) => r.category === c).length} receitas
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="container-app py-8">
        <SectionTitle
          eyebrow="Seleção especial"
          title="Receitas em destaque"
          description="As receitas mais queridas da nossa cozinha."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes
            .filter((r) => r.featured)
            .slice(0, 6)
            .map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/receitas"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 font-bold text-white"
          >
            Explorar todas <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
