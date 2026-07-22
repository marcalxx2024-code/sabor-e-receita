import { Search } from 'lucide-react';
export function SearchBar({
  value,
  onChange,
  placeholder = 'Busque por receita ou ingrediente',
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">Pesquisar receitas</span>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-h-12 w-full rounded-full border border-orange-100 bg-white py-3 pl-12 pr-4 shadow-sm transition focus:border-orange-500"
      />
    </label>
  );
}
