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

## Mandatory pre-edit checklist for UI work

Before ANY UI edit in f0compose, write this checklist in the chat and fill it
with concrete values. If any line cannot be filled, do not edit; inspect the
missing source or ask one short question.

- **Scope**: exact screen, component, Figma node (if applicable), and user-visible
  problem. Include what is NOT in scope.
- **Source checked**: list the exact files/nodes/docs already checked, for example
  `AGENTS.md`, `f0-prototype`, `f0-design`, `generated/registry.json`, Figma
  node IDs + screenshot, upstream module files, and relevant stories/docs.
- **Allowed files**: exact files that may be edited in this step.
- **Forbidden changes**: exact things that must not be touched, especially parent
  tabs, unrelated sidepanels, fixtures, framework files, and unrelated CTAs.
- **Component/API decision**: name the F0/f0compose/upstream pattern being used.
  If the behavior/API is unknown, stop and inspect stories/docs instead of
  inventing UI.
- **Verification**: commands and browser checks that will be run before replying.

For replicated production modules such as trainings, this checklist is stricter:

- Do not add, remove, or change a CTA/control until upstream confirms it exists
  or does not exist.
- Do not remove a CTA because it “seems useless”; fix its route/modal if upstream
  has that CTA.
- Do not touch the main tab body when the scope is a sidepanel, row, dialog, or
  nested component.
- Do not touch a sidepanel when the scope is the main tab body.
- If a Figma node covers only one subcomponent, edit only that subcomponent.
- For visual issues such as borders, verify computed CSS in the browser before
  claiming parity.

## Hard rules for Figma-to-code edits

- NEVER implement from memory when Figma is open. Use the currently
  selected Figma node with MCP first, then use `get_screenshot` for the
  same node. If multiple nodes are selected, inspect each relevant node by
  ID before editing.
- NEVER substitute a different Figma node because it looks similar. The
  selected node is the source of truth; if it is ambiguous, stop and ask.
- Before using or composing F0 UI, load `f0-prototype` and `f0-design`,
  read `generated/registry.json`, and read the relevant component stories
  or local `packages/react/.skills/` docs. Do this before editing.
- If Figma shows an F0/Data Collection pattern, use the existing F0
  component/pattern API. Do not hand-roll tables, toolbars, filter menus,
  settings menus, CTAs, popovers, or fake interaction with custom `div`s.
- Every visible CTA/control must use the canonical F0 behavior for that
  component. If the component behavior/API is unknown, stop and inspect the
  stories/docs instead of inventing logic.
- Do not hardcode Figma copy or values to make a wrong component look
  right. Use the correct component and data source; if mock data is missing,
  add it to `@/fixtures` or ask.
- Pixel parity means matching the selected node's structure: wrapper,
  borders, radii, spacing, header/body split, sticky areas, and default
  state. Removing or adding containers is only allowed when the selected
  Figma node proves it.

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

### 4.bis. DETALLES UI (borders, spacing, tipografía, iconos)

Paridad NO es solo "se parece". Es:

- **Borders**: tipo (`default`/`secondary`), radius (`md`/`lg`), color
  exacto. Cada card del Figma se replica con el mismo borde — nunca
  "más o menos parecido".
- **Spacing**: padding interior de cards (`md`/`lg`), gap entre
  elementos (`xs`/`sm`/`md`/`lg`/`xl`). Comparar pixel-aware:
  ¿el subtítulo está pegado al título (`xs`) o separado (`md`)?
- **Tipografía**: `F0Heading` vs `F0Text variant="label"` vs
  `variant="description"` vs `variant="body"`. NUNCA elegir por
  intuición; identificar contra Figma (size + weight + color).
- **Iconos**: identificar cuál icono concreto (`Building`, `Box`,
  `ChevronDown`, etc.) — NO sustituir por emoji si Figma usa icono
  vectorial. Color del icono (`secondary`/`tertiary`/`positive`).
- **Estados**: collapsed vs expanded de un row. Por defecto el row
  debe estar COMO LO MUESTRE FIGMA por defecto. Si Figma muestra
  collapsed con `⌄`, el componente arranca collapsed.
- **Inputs**: dentro de grids, mantener gap y columna iguales al
  Figma. Sufijo currency dentro del input, no como label aparte.
- **Highlights de Figma (border azul + "T Label")** son metadata del
  editor — NUNCA replicar como border real. Solo indica que ese
  elemento usa un text token.

### 4.ter. SHELL Y LAYOUT (no romper la página)

Errores recurrentes a NO cometer:

- **Header pegado al top**: el contenido del prototipo NO empieza al ras
  de la línea del top bar. Aplicar el padding de página upstream
  (`paddingTop="lg"` o el wrapper canónico). Comparar con cualquier
  página real de Factorial: siempre hay aire entre top bar y `ResourceHeader`.
- **Bloques pegados entre sí**: el contenedor raíz del prototipo usa
  `F0Box display="flex" flexDirection="column" gap="xl"` (o `lg` según
  módulo). Nunca dejar `SectionHeader` + banner + tabs sin separación.
- **"Back to X" inventado**: PROHIBIDO. Upstream NO tiene links/botones
  "Back to budgets" / "Back to trainings". La navegación atrás es
  SIEMPRE via **breadcrumbs** (`Training > Courses > Comm. course > Group`).
  Cada segmento del breadcrumb es clickable y lleva a una sub-vista
  REAL del MISMO prototipo (nunca a otro `/p/`).
- **Breadcrumbs**: replicar la cadena upstream exacta. Si no existe el
  segmento intermedio, NO inventarlo — significa que la pantalla no
  está enganchada bien al árbol.
- **Spacing entre `ResourceHeader` y primer bloque**: `gap="xl"` en el
  contenedor padre. Nunca `gap="xs"` ni `gap` ausente.

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
