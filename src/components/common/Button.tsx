import type { ButtonHTMLAttributes, ReactNode } from 'react';
export function Button({
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-700 disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
