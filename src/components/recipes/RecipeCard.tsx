import { useEffect, useState } from 'react';
import { Clock, Users } from 'lucide-react';
import { Link } from 'react-router';
import type { Recipe } from '../../types/recipe';
import { FavoriteButton } from './FavoriteButton';
import { RatingStars } from '../common/RatingStars';

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [imageSrc, setImageSrc] = useState(recipe.image);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImageSrc(recipe.image);
    setHasError(false);
  }, [recipe.image]);

  const fallbackImage =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="560" viewBox="0 0 800 560"><rect width="800" height="560" fill="#fef3c7"/><rect x="40" y="40" width="720" height="480" rx="36" fill="#fff7ed" stroke="#fdba74" stroke-width="6"/><path d="M220 360h360" stroke="#f59e0b" stroke-width="20" stroke-linecap="round"/><path d="M270 250c20-45 60-70 110-70s90 25 110 70" stroke="#fb923c" stroke-width="20" stroke-linecap="round"/></svg>',
    );

  const handleImageError = () => {
    if (hasError || imageSrc === fallbackImage) return;
    setHasError(true);
    setImageSrc(fallbackImage);
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <Link to={`/receitas/${recipe.slug}`}>
          <img
            src={imageSrc}
            alt={recipe.title}
            loading="lazy"
            onError={handleImageError}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute right-3 top-3">
          <FavoriteButton id={recipe.id} compact />
        </div>
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-orange-700">
          {recipe.category}
        </span>
      </div>
      <div className="p-5">
        <RatingStars rating={recipe.rating} count={recipe.reviewCount} />
        <Link to={`/receitas/${recipe.slug}`}>
          <h3 className="mt-2 text-xl font-black text-stone-900 group-hover:text-orange-700">
            {recipe.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600">{recipe.description}</p>
        <div className="mt-4 flex items-center gap-4 border-t border-stone-100 pt-4 text-sm text-stone-600">
          <span className="flex items-center gap-1">
            <Clock size={16} />
            {recipe.preparationTime + recipe.cookingTime} min
          </span>
          <span className="flex items-center gap-1">
            <Users size={16} />
            {recipe.servings} porções
          </span>
          <span className="ml-auto font-semibold">{recipe.difficulty}</span>
        </div>
      </div>
    </article>
  );
}
