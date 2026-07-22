import { ChefHat } from 'lucide-react';
import { Link } from 'react-router';
export function EmptyState({
  title = 'Nenhuma receita encontrada',
  description = 'Tente ajustar sua busca ou limpar os filtros.',
  link,
}: {
  title?: string;
  description?: string;
  link?: string;
}) {
  return (
    <div className="rounded-3xl border border-dashed border-orange-200 bg-white p-10 text-center">
      <ChefHat className="mx-auto text-orange-500" size={50} />
      <h2 className="mt-4 text-2xl font-black">{title}</h2>
      <p className="mt-2 text-stone-600">{description}</p>
      {link && (
        <Link
          to={link}
          className="mt-5 inline-flex rounded-full bg-orange-600 px-5 py-3 font-bold text-white"
        >
          Explorar receitas
        </Link>
      )}
    </div>
  );
}
