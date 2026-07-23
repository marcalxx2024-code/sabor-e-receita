# Filtro por características (Sabor & Receita)

**Objetivo:** o `Recipe` já tinha um campo `type: string[]` (ex: "Vegetariana", "Rápida") que existia
nos dados mas não era usado em lugar nenhum da interface. Implementamos filtro visual usando esse campo.

## 1. Limpeza de dados (`data/recipes.ts`)

Encontramos 3 inconsistências de nomenclatura no campo `type` de 6 receitas: `Rápido`→`Rápida`,
`Caseiro`→`Caseira`, `Prático`→`Prática` (mantido feminino por consistência linguística com o
restante do sistema, que qualifica implicitamente "receita"). Corrigido manualmente.

## 2. Nova variável derivada (`data/recipes.ts`)

```ts
export const allTypes = [...new Set(recipes.flatMap((recipe) => recipe.type))].sort();
```

Gera lista de 17 características únicas a partir de todas as receitas, sem duplicar.

## 3. Filtro por características (`pages/RecipesPage.tsx`)

- Import do `allTypes`
- Leitura do estado via URL: `const selectedTypes = params.get('tipos')?.split(',').filter(Boolean) ?? []`
- Função `toggleType` pra marcar/desmarcar (mesmo padrão dos outros filtros — categoria, dificuldade,
  tempo — que já usavam `URLSearchParams`)
- Condição extra no filtro: receita aparece se não houver seleção OU se tiver ao menos uma das
  características marcadas (lógica OU, não E)
- `selectedTypes` adicionado nas dependências do `useMemo` pra recalcular ao clicar
- UI: botões (pills) clicáveis no painel de filtros, com estado visual ativo/inativo
- Os valores de `type` são codificados automaticamente pelo `URLSearchParams` ao montar a URL — espaços
  e acentos (ex: "Sem álcool") não precisam de tratamento manual

**Testado e funcionando:** botões destacam ao clicar, lista filtra corretamente, URL reflete o filtro
(`?tipos=Vegetariana`).

## 4. Exibir características nos cards (`components/recipes/RecipeCard.tsx`)

Pills informativas (não clicáveis — `<span>`, não `<button>`/`<Link>`) com até 3 características logo
abaixo da descrição de cada receita, pra dar contexto visual rápido na grade sem precisar entrar na
receita. Como o número de características varia por receita, vale observar a grade depois de
implementado para conferir se as alturas dos cards ficam consistentes (o `line-clamp-2` na descrição e
o rodapé fixo já ajudam a limitar a variação).

## Decisão de arquitetura

O campo `tags` (mais de 100 valores, incluindo nomes de prato e ingredientes soltos, com
inconsistências) foi mantido intocado — ele continua servindo só para o cálculo de "receitas
relacionadas" na página de detalhe, não vira filtro visual. Só `type` (mais enxuto, conceitos amplos)
virou filtro.

```
category → organização principal
type     → características visuais e filtros
tags     → relação semântica entre receitas
```
