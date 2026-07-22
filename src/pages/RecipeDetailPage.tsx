import { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Copy, Share2, Users } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { FavoriteButton } from '../components/recipes/FavoriteButton';
import { RecipeCard } from '../components/recipes/RecipeCard';
import { RatingStars } from '../components/common/RatingStars';
import { recipes } from '../data/recipes';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const r = recipes.find((x) => x.slug === slug);
  const [copied, setCopied] = useState(false);

  useDocumentTitle(r?.title ?? 'Receita não encontrada', r?.description);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopyIngredients = async () => {
    await navigator.clipboard.writeText(r?.ingredients.join('\n') ?? '');
    setCopied(true);
  };

  if (!r) {
    return (
      <div className="container-app py-20">
        <h1 className="text-4xl font-black">Receita não encontrada</h1>
        <Link to="/receitas" className="mt-5 inline-block text-orange-600">
          Voltar às receitas
        </Link>
      </div>
    );
  }

  const totalTime = r.preparationTime + r.cookingTime;
  const related = recipes
    .filter(
      (x) => x.id !== r.id && (x.category === r.category || x.tags.some((t) => r.tags.includes(t))),
    )
    .slice(0, 3);

  return (
    <article>
      <div className="container-app py-8">
        <Link to="/receitas" className="inline-flex items-center gap-2 font-bold text-stone-600">
          <ArrowLeft />
          Voltar
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <img
            src={r.image}
            alt={r.title}
            className="h-[520px] w-full rounded-[2.5rem] object-cover"
          />

          <div className="self-center">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
              {r.category}
            </span>
            <h1 className="mt-5 text-4xl font-black md:text-6xl">{r.title}</h1>
            <p className="mt-5 text-lg leading-8 text-stone-600">{r.description}</p>

            <div className="mt-5">
              <RatingStars rating={r.rating} count={r.reviewCount} />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 rounded-3xl bg-orange-50 p-5 text-center">
              <div>
                <Clock className="mx-auto" />
                <strong className="mt-2 block">{totalTime} min</strong>
                <span className="text-xs">Tempo total</span>
              </div>
              <div>
                <Users className="mx-auto" />
                <strong className="mt-2 block">{r.servings}</strong>
                <span className="text-xs">Porções</span>
              </div>
              <div>
                <span className="text-2xl">◉</span>
                <strong className="mt-2 block">{r.difficulty}</strong>
                <span className="text-xs">Dificuldade</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <FavoriteButton id={r.id} />
              <button
                onClick={() => navigator.share?.({ title: r.title, url: location.href })}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border bg-white px-5 font-bold"
              >
                <Share2 />
                Compartilhar
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <section className="rounded-3xl bg-white p-7 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-black">Ingredientes</h2>
              <button
                type="button"
                onClick={handleCopyIngredients}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
              >
                <Copy className="h-4 w-4" />
                {copied ? 'Ingredientes copiados!' : 'Copiar ingredientes'}
              </button>
            </div>

            <ul className="mt-5 space-y-3">
              {r.ingredients.map((i) => (
                <li key={i} className="flex gap-3 border-b border-stone-100 pb-3">
                  <span className="text-orange-500">•</span>
                  {i}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-black">Modo de preparo</h2>
            <ol className="mt-6 space-y-6">
              {r.instructions.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange-600 font-black text-white">
                    {i + 1}
                  </span>
                  <p className="pt-2 leading-7 text-stone-700">{s}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-3xl bg-emerald-50 p-6">
              <h2 className="font-black">Informações nutricionais por porção</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {Object.entries(r.nutrition).map(([k, v]) => (
                  <div key={k}>
                    <strong className="block text-xl">{v}</strong>
                    <span className="text-sm capitalize text-stone-600">{k}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-3xl font-black">Você também pode gostar</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((x) => (
                <RecipeCard key={x.id} recipe={x} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
