import { ChefHat } from 'lucide-react';
import { Link } from 'react-router';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
export function NotFoundPage() {
  useDocumentTitle('Página não encontrada');
  return (
    <section className="container-app py-24 text-center">
      <ChefHat className="mx-auto text-orange-500" size={80} />
      <p className="mt-6 text-7xl font-black text-orange-600">404</p>
      <h1 className="mt-3 text-3xl font-black">Esta receita saiu do forno e sumiu.</h1>
      <p className="mt-3 text-stone-600">
        A página que você procura não existe ou mudou de endereço.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex rounded-full bg-orange-600 px-6 py-3 font-bold text-white"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
