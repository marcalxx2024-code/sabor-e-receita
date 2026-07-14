# Sabor & Receita

Aplicação web responsiva de receitas criada para portfólio com React, TypeScript, Vite e Tailwind CSS.

> Adicione aqui uma captura da página inicial após publicar o projeto.

## Demonstração

Substitua pelo endereço da Vercel: `https://seu-projeto.vercel.app`

## Funcionalidades

- Pesquisa em tempo real por nome e ingrediente
- Filtros combináveis por categoria, dificuldade e tempo
- Ordenação por avaliação, nome e duração
- Página completa de cada receita
- Favoritos persistidos no LocalStorage
- Categorias, receitas relacionadas, compartilhamento e página 404
- Layout responsivo, navegação por teclado e metadados básicos de SEO

## Tecnologias

React 19, TypeScript, Vite, Tailwind CSS 4, React Router, Lucide React, ESLint e Prettier.

## Instalação

```bash
git clone URL_DO_REPOSITORIO
cd sabor-e-receita
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run lint
npm run build
npm run preview
```

## Estrutura

```txt
src/
├── components/
│   ├── common/
│   ├── layout/
│   └── recipes/
├── contexts/
├── data/
├── hooks/
├── pages/
├── types/
├── App.tsx
├── main.tsx
└── index.css
```

## Arquitetura

Os dados ficam isolados em `src/data`. As páginas consomem componentes reutilizáveis. O `FavoritesContext` centraliza favoritos e sincroniza os IDs no LocalStorage. Busca, filtros e ordenação utilizam parâmetros da URL. O React Router cuida das rotas e do layout compartilhado.

## Aprendizados

- Modelagem de dados com TypeScript
- Estado derivado e filtros combináveis
- Persistência local e Context API
- Componentização responsiva e acessível
- Configuração de SPA para deploy na Vercel

## Melhorias futuras

Testes automatizados, API externa, autenticação, criação de receitas, paginação, modo escuro, PWA e otimização avançada de imagens.

## Publicação

### GitHub

```bash
git init
git add .
git commit -m "feat: create Sabor & Receita application"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

### Vercel

Importe o repositório na Vercel. O preset Vite será detectado. Use `npm run build` e diretório de saída `dist`.

## Sugestões de tópicos

`react` `typescript` `vite` `tailwindcss` `recipes` `responsive-design` `frontend` `portfolio`

## Autor

Guilherme Marçal

## Licença

MIT
