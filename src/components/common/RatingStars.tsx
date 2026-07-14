import { Star } from 'lucide-react';
export function RatingStars({rating,count}:{rating:number;count?:number}){return <div className="flex items-center gap-1 text-sm" aria-label={`Avaliação ${rating} de 5`}><Star size={17} className="fill-amber-400 text-amber-400"/><strong>{rating.toFixed(1)}</strong>{count!==undefined&&<span className="text-stone-500">({count})</span>}</div>}
