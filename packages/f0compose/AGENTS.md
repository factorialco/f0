# AGENTS.md — packages/f0compose

This is the f0compose app: an isolated environment where designers and PMs
prototype Factorial screens using AI. It bundles its own skills under
`.opencode/skills/` and `.claude/skills/`, **auto-installed from
`vendor/skills/` on every `pnpm install`, `pnpm dev`, `pnpm start`, and
`pnpm build`** (also on demand: `pnpm skills:sync`).

To edit a skill: change `vendor/skills/<name>/SKILL.md` (the canonical
source) and run `pnpm skills:sync`. Never edit the copies in
`.opencode/skills/` or `.claude/skills/` directly — they're overwritten
on every dev session. The sync script warns loudly if it detects a
target newer than vendor.

## When you are running here

- Treat `f0-prototype` as the primary skill. Activate it on the first
  user message asking to design a screen.
- Pair every action with `f0-design` (DESIGN.md enforcement) and, for
  design quality reviews, `impeccable`.
- ALWAYS end your turn by giving the local URL of what you created
  (`http://localhost:5174/p/<slug>`).
- Be proactive: if the dev server isn't running, offer to start it
  (`pnpm dev` in the background) so the designer can see HMR in real
  time.

## Hard rules for prototypes

- `src/prototypes/<slug>/<Slug>.tsx` is the only place to write.
- Every prototype exports `meta` (typed `PrototypeMeta`) AND a default
  React component.
- The component returns ONLY the page body. The framework wraps it in
  `FactorialShell` (ApplicationFrame + canonical sidebar).
- Imports allowed: `react`, `react-dom`, `react-router-dom`,
  `@factorialco/f0-react`, `@factorialco/f0-core`, `@/fixtures`,
  `@/lib`, `@/prototypes`, relative paths. Anything else fails Vite.
- Tokens: only `f1-*`. Never raw colors.
- Mocks: only from `@/fixtures`. Never inline arrays of 4+ items
  passed to a data component.
- TypeScript strict. No `any`. No `as any`.

## Component quirks (the LLM forgets these)

- **F0Heading / F0Text** take `content` (string), NOT children.
- **F0Heading variant**: `"heading"` | `"heading-large"`.
- **F0Text variant**: `"body"` | `"small"` | `"label"` | `"description"` | `"code"` | `"inverse"`.
- **F0Alert** takes `title` + `description` (strings), no children.
- **Chip** (the `OneChip` folder exports `Chip`) only has `default` /
  `selected` variants — not semantic. Use Tailwind spans for status.
- **ApplicationFrame** is NEVER imported by prototypes. The framework
  adds it.

## Workflow

1. Discovery interview (4 questions).
2. Read `generated/blocks.json` for canonical seeds.
3. Read `generated/registry.json` before using ANY prop.
4. Write the prototype file with `meta` + default export.
5. Vite hot-reloads.
6. Run `pnpm check src/prototypes/<slug>` and `pnpm tsc`.
7. Tell the user the URL `http://localhost:5174/p/<slug>` and offer next
   iteration ideas.

## Don't

- Don't edit `vite.config.ts`, `tailwind.config`, `package.json`,
  `tsconfig.json`.
- Don't touch `src/shell/`, `src/catalog/`, `src/lib/` — those are
  framework code.
- Don't modify components in `packages/react/src/`.
- Don't end the turn without the local URL.

## Norma de paridad con upstream (módulos que replican producción)

Esta norma aplica a cualquier prototipo que replica un módulo real de
Factorial (trainings, performance, time, etc.). Su propósito: nunca más
patch-by-patch, nunca más "casi parecido", nunca más declarar "hecho"
sin verificar contra upstream.

### 1. AUDIT FIRST, CODE LATER

Antes de tocar UNA SOLA LÍNEA de un módulo replicado:

- Leer el módulo upstream completo en
  `/Users/jon.saenz/code/factorial/frontend/src/modules/<modulo>/`.
- Enumerar por escrito: rutas, tabs (en orden), wizards, modales,
  formularios, empty states, CTAs principales.
- Extraer TODOS los labels de
  `/Users/jon.saenz/code/factorial/frontend/src/translations/en.json`.
  Nunca inventar copys. Si una key no existe upstream, preguntar.
- Producir un diff escrito (gaps locales vs upstream) ANTES de editar.

### 2. NO DECLARAR "HECHO" SIN

- `pnpm tsc --noEmit` limpio.
- Ruta HTTP 200 en cada sub-vista (`?dtab=`, `?wizard=`, modales).
- Comparación visual explícita con upstream (screenshot o descripción
  campo-a-campo).
- Lista explícita de lo que quedó fuera, si algo queda fuera.

### 3. UN AUDIT = UN COMMIT

Si el audit revela 8 gaps, se arreglan los 8 en un commit, no en 8
commits incrementales. Excepción única: el usuario pide explícitamente
fix incremental.

### 4. LABELS Y COPYS

Siempre desde `en.json` upstream. Cero invención.

### 5. COMMITS

- Cuerpo del mensaje: líneas ≤ 100 caracteres.
- El mensaje describe el AUDIT (qué se comparó, qué se arregló), no
  solo el fix superficial.

### 6. NUNCA pausar a mitad

Si la tarea es "hazlo bien" o "hasta que esté", ejecutar hasta paridad
real. No preguntar entre pasos. Solo parar si hay ambigüedad de
producto que upstream no resuelve.

### 7. Usuario no-técnico

Explicar en castellano llano. Nada de jerga git/tsc/HTTP salvo que el
usuario la introduzca. El usuario nunca toca terminal.
