---
name: f0-prototype
description: Use whenever a designer or PM wants to design a Factorial UI inside the f0compose app. Always activate this skill in `packages/f0compose/`. **Default to non-technical user mode (Step -1)**: handle all setup (`pnpm install`, `pnpm dev`, branch switching, `pnpm skills:sync`) silently, never make the user run a terminal command, translate every technical concept to plain language, fix errors in silence and only report the outcome, run git operations (branch / commit / push / PR) on their behalf with auto-generated names, and end every turn with a clickable URL. Never ask "single-page or wizard" / "select or cardSelect" — pick the canonical option. Covers the discovery interview + plan, checking existing prototypes for iteration before creating new ones, the modular folder layout (entry + tabs + columns + source hooks + helpers), the import allowlist, the f1-* tokens, the @/fixtures library, the FactorialShell wrapper, the catalog meta convention, proactively running `pnpm dev`, verifying tsc + route 200 before replying, and an end-of-turn response template that always includes the new prototype URL, the catalog link, related prototypes, a sanity check, and the "paste the error" reminder. ALSO covers multi-view prototypes (each sub-screen has a distinct URL via `useSearchParams`), mandatory breadcrumbs on sub-screens, sticky `ResourceHeader` for sub-screen titles, the `<Tabs>` URL-sync gotcha (per-tab `onClick` + `key={activeTabId}`), the AI chat that's always wired into every prototype (use `@/copilot` only — never import F0AiChat directly), the F0Form co-creation pattern (schema/sections at module scope; `useF0Form` + `useF0FormDefinition` MUST live inside the form component, never lifted to the prototype root or you get an infinite loop in the chat panel), the `f0FormField.text/.select/.number/.date/.checkbox/.multiSelect` builder API plus `row` for multi-column layouts, and the local-only escape hatch for editing `factorial-agent` (never commit). Critical rules: propose iterating on existing prototypes when the topic overlaps; ALWAYS write a plan before code; ALWAYS consult `packages/react/.skills/`; only f0 components (no bare HTML); read component stories before using them; OneDataCollection for any list or table; split non-trivial prototypes into the canonical sub-folders; never import `F0AiChat`/`F0AiChatProvider`/`@copilotkit/*` directly — always go through `@/copilot`.
---

# f0-prototype

You are helping a designer or PM prototype a Factorial UI screen. Be **proactive**:
**always end your turns with the structured response in Step 13** (catalog
link, new prototype link, related existing prototypes, sanity check, and the
"paste the error if anything breaks" reminder). Designers come from Figma —
they expect a clickable preview, not just code.

## Step -1 — Non-technical user mode (handle EVERYTHING for them)

Most people using f0compose are **designers and PMs with zero coding background**. Treat this as the default. Your job is to make them feel like they're using a no-code tool — they describe what they want, you do the rest. Never make them think about terminals, branches, install commands, ports, TypeScript errors, or git.

### Default assumptions about the user

- They don't know what `pnpm`, `git`, `tsc`, `Vite`, or "fixtures" mean. Don't use those words unless they use them first.
- They will not run a single command if you ask them to. Run it yourself with the Bash tool.
- They will paste error messages but won't read them. Read it yourself, fix it, and tell them in plain language what changed.
- They want to see a clickable URL, not a diff. End every turn with the URL (Step 13).

### Auto-handle setup on the FIRST message (don't ask, just do)

When the user's first message implies they want to prototype something, run these checks **silently and in parallel** before asking anything:

1. **Are we in `packages/f0compose/`?** Use the working directory the agent runs in. If not, `cd` there.
2. **Is the dev server up on 5174?** `lsof -i :5174 | grep LISTEN`. If not, start it: `pnpm dev` in the background. Don't ask permission — they want to see results, not approve commands.
3. **Are dependencies installed?** Check `node_modules/.modules.yaml` exists. If missing, run `pnpm install` in the background and tell them: *"Estoy preparando el entorno, dame 30 segundos…"*
4. **Are the skills synced?** Run `pnpm skills:sync` quietly — silently keeps `.claude/skills/` and `.opencode/skills/` fresh from `vendor/skills/`. (Already wired into `predev`, so usually a no-op.)
5. **Are we on the right git branch?** `git branch --show-current`. If they're on `main`, ask once: *"¿Quieres que cambie a la rama `feat/f0compose` para empezar?"* and do `git checkout feat/f0compose && git pull` if yes.

After these checks, proceed to Step 0 (discovery interview).

### Translate technical concepts to plain language

| Technical term | What you say to them |
|---|---|
| "Run `pnpm tsc`" | *"Verifico que no haya errores."* |
| "TypeScript error in line X" | *"He encontrado un fallo en cómo se conectaban dos cosas; lo he arreglado."* |
| "F0Form schema" | *"El formulario."* |
| "Fixture" | *"Datos de ejemplo."* |
| "Component" | *"Pieza"* or *"bloque."* |
| "Route returning 200" | *"La página carga bien."* |
| "git branch" | *"Versión separada de tu trabajo."* |
| "Vite hot-reload" | *"Se actualiza solo en el navegador."* |
| "Commit / push / PR" | *"Guardar tu trabajo y compartirlo con el equipo."* |

### When something breaks, fix it in silence and report only the outcome

If the AI agent or the prototype throws a TS error, lint error, or runtime error:

1. Read the error yourself.
2. Fix it (re-read the relevant file, edit, re-run `pnpm tsc`).
3. Only when fixed, tell them in one line: *"Había un detalle técnico, ya está arreglado. Pruébalo en `<URL>`."*

Do NOT show them the stack trace, the file path with line numbers, or the diff unless they explicitly ask *"qué pasó"*.

**Exception**: if the error is something they can fix themselves (e.g., they typed a non-existent module name, or pasted an image you can't read), surface it kindly and ask one short question.

### Handle git operations for them

When they say something like *"quiero compartirlo"*, *"esto está bien, súbelo"*, *"cómo lo enseño a alguien"*, do the full git flow on their behalf:

```bash
git checkout -b prototype/<auto-generated-slug-from-their-screen>
git add packages/f0compose/src/prototypes/<slug>/   # ONLY their prototype, not the whole tree
git commit -m "prototype: <one-line description in their words>"
git push -u origin prototype/<slug>
gh pr create --fill   # or --title / --body if you have context
```

Then tell them: *"Lo he subido. Aquí tienes el link para compartir: `<PR URL>`."* The CI will surface the preview URL automatically.

**Never ask** for branch name, commit message, or PR title — generate them from their request. If they push back ("usa este nombre"), update and re-push.

### Things you should NEVER ask a non-technical user

- ❌ "¿Usamos `select` o `cardSelect`?" → Just pick the better one and tell them you can swap it later.
- ❌ "¿Quieres `useDataCollectionSource` o `useState`?" → Pick the canonical pattern (Step 7) and move on.
- ❌ "¿Single-page form o wizard?" → Decide based on field count (≤6 single page, ≥7 wizard) and explain in plain language.
- ❌ "¿Lo subo con `git push --force-with-lease` o `git push`?" → Just push.
- ❌ "¿En qué rama estás?" → Check yourself.

### Things you SHOULD ask

- ✅ The 5 discovery questions in Step 0.2 — but phrase them in plain language ("¿Para qué pantalla?", not "¿Qué módulo del producto?").
- ✅ "¿Iteramos sobre el prototipo `X` que ya existe o creamos uno nuevo?" (Step 0.1).
- ✅ "Esto es lo que voy a crear: [resumen en 3 líneas]. ¿Te encaja?" before non-trivial work.
- ✅ "¿Lo quieres más compacto, más espacioso, con menos columnas?" — visual preferences.

### End-of-turn template, non-technical version

Always finish with this shape (the structured Step 13 response, but in plain language):

> ✅ Ya está. Pruébalo aquí: **<URL>**
>
> Catálogo de todos los prototipos: http://localhost:5174/
>
> Relacionados que quizá quieras mirar: `<slug-1>`, `<slug-2>`
>
> Si ves algo raro, copia el texto del error que aparezca en el navegador (clic derecho → Inspeccionar → Console) y pégamelo. Lo arreglo al momento.

## Step 0 — Discovery interview + plan (always first)

Before writing a single line of code:

### 0.1 — Check what already exists

List `src/prototypes/*/` (or read `src/prototypes/registry.ts`) and look for
prototypes that touch the same module / domain. **If something close already
exists, propose iterating on it instead of creating a new one** — designers
often forget what's already there. Phrase it as a choice, e.g.:

> *"Ya existe `recruitment` que cubre Jobs y Candidates con OneDataCollection.
> Lo que pides (filtro de candidatos por skill) puede ser una extensión de
> ese prototipo en vez de uno nuevo. ¿Lo iteramos o creamos uno aparte?"*

Default to iteration when in doubt — fewer prototypes = less drift, and devs
who lift code prefer a small set of well-curated examples.

### 0.2 — Discovery interview

Ask in one message:

1. **What Factorial module?** (Payroll, Time Off, Performance, Onboarding, People, Documents, Recruitment, ...)
2. **Net-new or extending an existing prototype?** Reference the slugs from 0.1.
3. **Page or component?** Pages get the FactorialShell wrapper automatically.
4. **Audience?** Admin, employee, or manager.
5. **Key states / flows?** (empty, loading, error, edge cases worth showing)

### 0.3 — Plan first, code second

After the answers, **write a short plan** before any code edit:

- Folder layout you'll create (entry + which `<tab>/` and `shared/` files,
  per Step 5).
- Which f0 components you'll use, citing the relevant `.skills/` reference
  (Step 2) and stories (Step 3) you read.
- Which fixtures you'll consume from `@/fixtures` (or which you'll need to
  add).
- Which OneDataCollection presets / filters / actions the screen needs.

Share the plan with the designer and **wait for go-ahead** if the change is
non-trivial (multiple tabs, new fixture domain, sidebar tweak, FactorialShell
edit). For tiny tweaks (renaming a label, swapping an icon) you can skip the
explicit plan — but never skip the existence check in 0.1.

Don't skip Step 0.

## Step 1 — Make sure the dev server is running

```bash
lsof -i :5174 | grep LISTEN
```

If empty: ask *"¿Quieres que arranque el server?"*. If yes, run `pnpm dev &` and wait ~3s. URL is `http://localhost:5174/`.

## Step 2 — Consult the f0 canonical skills (`packages/react/.skills/`)

**Non-negotiable, always.** Before composing anything, read the relevant
SKILL.md / reference files from `packages/react/.skills/`. These are the
authoritative patterns maintained by the f0 team — they describe how f0
components are designed to be used and styled. Treating them as ground
truth prevents drift between prototypes and real Factorial UI.

URL (canonical, online): https://github.com/factorialco/f0/tree/main/packages/react/.skills

Local path (use this for reads): `packages/react/.skills/`

Index of which file to consult for which concern:

| Concern | Read |
|---|---|
| f1-* tokens, CVA variants, Tailwind/animation rules, design-token mapping | `f0-component-patterns/references/styling-and-animation.md` |
| Component architecture (forwardRef, withSkeleton, withDataTestId, `@/ui/` layer) | `f0-component-patterns/references/component-architecture.md` |
| Controlled vs. uncontrolled, async onClick, event-naming | `f0-component-patterns/references/context-and-state.md` |
| useI18n, defaultTranslations, plurals, interpolation | `f0-component-patterns/references/i18n-patterns.md` |
| How `.stories.tsx` files are structured (so you know what to look for in Step 3) | `f0-storybook-stories/SKILL.md` and `references/story-patterns.md` |
| Where experimental ↔ public component paths live | `f0-experimental-component-migration/SKILL.md` |
| Top-level overview / what each skill covers | `f0-component-patterns/SKILL.md` (start here) |

If the user asks for behaviour that isn't covered locally and you suspect
the canonical version online is newer, use the GitHub URL above as the
source of truth and tell the user.

These f0 skills are NOT auto-discovered by your CLI from inside f0compose —
read them with the Read tool whenever you start a new prototype, or when
unsure about a styling/i18n/architecture decision. Cite the specific file
in your response so the user can audit your choice.

## Step 3 — Read the canonical stories before using ANY component

**Non-negotiable.** Before composing, read the relevant story files:

```
packages/react/src/{components,patterns,kits,layouts}/<Component>/__stories__/<Component>.stories.tsx
```

Stories tell you the **real API**. The TypeScript types alone aren't enough — many cell types and props use unexpected field names. See §11 (Gotchas) for the catalog of common ones.

For OneDataCollection cells specifically, also read the cell value shape:

```
packages/react/src/ui/value-display/types/<cellType>/<cellType>.tsx
```

This file's `interface XxxValue` is the source of truth for the `value` you pass to `render`.

## Step 4 — Page architecture (the canonical scroll-clean layout)

Every prototype must follow:

```tsx
<Page
  header={
    <>
      <PageHeader module={{ id, name, href }} actions={[...]} />
      <Tabs tabs={primaryTabs} ... />        {/* if needed */}
      <Tabs secondary tabs={subTabs} ... />  {/* if needed */}
    </>
  }
>
  <StandardLayout>
    {/* scrollable body */}
  </StandardLayout>
</Page>
```

Reasons (don't skip any):

- **PageHeader + all Tabs (primary AND secondary) go INSIDE `<Page header={...}>`.** They're sticky/fixed nav. Putting them in the body breaks the canonical layout.
- **Body MUST be wrapped in `<StandardLayout>`** (imported from `@factorialco/f0-react`). It supplies the `overflow-auto` + `px-6 py-5` + flex sizing that lets Page scroll cleanly. Without it, content overflows or pages look unfinished.
- **No outer padding wrapper around StandardLayout** — StandardLayout handles padding itself.
- **No card/border wrapper around OneDataCollection** — it has its own chrome.
- **NEVER import or render `ApplicationFrame` from a prototype.** `FactorialShell` (in `PrototypeRoute`) wraps automatically.
- **Breadcrumbs are MANDATORY whenever the user is NOT on the prototype's main / index screen.** Sub-screens (form pages, detail views, settings sub-tabs, anything reached by a navigation action) **must** pass `breadcrumbs={[...]}` to `<PageHeader>`.

  **Critical detail**: `PageHeader` **auto-prepends** the `module` as the first breadcrumb (label = `module.name`, link = `module.href`). So `breadcrumbs={[...]}` should only contain the **leaf items past the index** — never include the index itself or you'll get a duplicate "Potatoes > Potatoes > New variety". Last item has no link and represents the current screen.

  **Make `module.href` point at the prototype's actual route** (e.g. `/p/potatoes`, NOT `/potatoes`). The auto-prepended breadcrumb uses this href; if it's wrong the user 404s. For state-based sub-screens, drive the view from `useSearchParams` (`?view=create`) so navigating back to the bare route naturally resets state.

  Pattern:

  ```tsx
  // On the sub-screen
  <PageHeader
    module={{ id: "documents", name: "Potatoes", href: "/p/potatoes" }}
    breadcrumbs={[{ id: "new", label: "New variety" }]} // leaf only
    actions={[{ label: "Cancel", icon: Cross, onClick: goToList }]}
  />
  ```

  Sub-screens that wrap a form should also surface a **Cancel** entry in `actions` that returns to the main screen, so the user has two ways out (breadcrumb tap and explicit cancel button). On the index screen, omit `breadcrumbs` entirely.

## Step 4.5 — Multi-view prototypes (sub-screens MUST have a distinct URL)

**Non-negotiable.** When a prototype has more than one screen (catalog → detail, list → create form, settings → sub-tab, etc.), each screen **must have its own distinct URL**. This is how `potatoes` is wired and the canonical pattern for all multi-view prototypes.

### Why distinct URLs

- **Breadcrumbs work for free.** `PageHeader` auto-prepends a link to `module.href`. If the index uses `/p/<slug>` and the sub-screen uses `/p/<slug>?view=create`, clicking the breadcrumb (which links to the bare route) drops the user back to the index naturally — no manual `setView`/`onClick` plumbing.
- **Browser back/forward works.** Refresh, deep-linking, and copy-paste all behave like a real product.
- **The AI agent can navigate.** If you expose a `useCopilotAction` for navigation, the action just calls `setSearchParams({view: "create"})` and the URL is the source of truth.
- **State doesn't leak.** Two prototypes opened in different tabs don't share a hidden React state machine.

### Canonical pattern

```tsx
import { useSearchParams } from "react-router-dom"

export default function MyPrototype() {
  const [searchParams, setSearchParams] = useSearchParams()
  const view =
    searchParams.get("view") === "create" ? "create" : "list"
  const goToCreate = () => setSearchParams({ view: "create" })
  const goToList = () => setSearchParams({})

  if (view === "create") {
    return (
      <Page
        header={
          <PageHeader
            module={{ id: "...", name: "My module", href: "/p/my-prototype" }}
            breadcrumbs={[{ id: "new", label: "New thing" }]}
            actions={[{ label: "Cancel", icon: Cross, onClick: goToList }]}
          />
        }
      >
        <StandardLayout>{/* form */}</StandardLayout>
      </Page>
    )
  }
  return (/* list view */)
}
```

### Rules

- **Use `useSearchParams` from `react-router-dom`**, not `useState`, for view selection. The URL is always authoritative.
- **One query param per axis of navigation.** `?view=create` for primary navigation, `?id=42` for selected entity, etc. Never bundle navigation state into JSON-stringified params.
- **Reset state by clearing params.** `setSearchParams({})` returns to the index view, no extra logic.
- **`module.href` is always `/p/<slug>`** (no query). Don't try to embed view state in `module.href`.
- **Don't introduce nested routes via `react-router`'s nested routing for sub-screens of a single prototype.** The two-level glob registry (Step 5) only picks up the entry; nested routes would force restructuring. Query params are simpler and equally URL-friendly for prototype purposes.

### Wiring URL state into `<Tabs>` (gotcha)

`<Tabs>` from `@factorialco/f0-react/dist/experimental` keeps its **own
`useState` internally** that's seeded from `initialActiveTabId` only on
the first render. It does NOT re-sync when the prop changes later. If
you drive the active tab from the URL with `useSearchParams`, the
naive setup will desync and clicks will appear to do nothing.

The canonical pattern:

1. Wire each tab's per-item `onClick` to update the URL.
2. **Don't** pass `setActiveTabId`.
3. Pass `key={activeTabIdFromUrl}` so the component remounts (re-seeding
   internal state) whenever the URL changes externally — breadcrumb
   navigation, deep links, browser back/forward, etc.

```tsx
const moduleTabsWithNav = moduleTabs.map((t) => ({
  ...t,
  onClick: () => setActiveModuleTab(t.id),
}))

<Tabs
  key={activeModuleTab}        // ← remount on external URL change
  tabs={moduleTabsWithNav}     // ← per-item onClick drives nav
  activeTabId={activeModuleTab}
/>
```

This applies to BOTH the primary `<Tabs>` and any secondary `<Tabs secondary>`.

This rule applies to **every** non-trivial prototype, not just ones with forms. Detail panes, edit screens, "manage X" sub-pages — all use distinct URLs.

### Sticky title + description on sub-screens — use `ResourceHeader`

When a sub-screen needs an explicit title and description (form pages
typically do), put a `ResourceHeader` **inside `<Page header={<>...</>}>` after
`PageHeader`**, not in the body. Page makes everything in the `header`
slot sticky, so the resource header stays visible while the user
scrolls a long form. Title placed in the body scrolls away and the
user loses context.

`ResourceHeader` is the canonical f0 component for "this is the main
thing on this page" — title, description, and the Cancel/secondary
actions all live there. **Don't roll your own `F0Heading + F0Text`
combination.** Import `ResourceHeader` from
`@factorialco/f0-react/dist/experimental`.

```tsx
import {
  Page,
  PageHeader,
  ResourceHeader,
} from "@factorialco/f0-react/dist/experimental"

<Page
  header={
    <>
      <PageHeader module={...} breadcrumbs={[{ id, label }]} />
      <ResourceHeader
        title="Create job posting"
        description="Open a new role on the careers page."
        secondaryActions={[
          { label: "Cancel", icon: Cross, onClick: goToList },
        ]}
      />
    </>
  }
>
  <StandardLayout>{/* form / detail body */}</StandardLayout>
</Page>
```

Notes:
- Cancel goes in `ResourceHeader.secondaryActions`, NOT in
  `PageHeader.actions`. The form's own Create/Submit button (owned by
  `F0Form`) is the primary action; ResourceHeader has Cancel as the
  visible escape hatch.
- The index/list view does not need the inline title — the breadcrumb
  leaf and the page chrome carry that already. ResourceHeader is for
  sub-screens only.

## Step 5 — Prototype file convention

The registry auto-discovers prototypes via `import.meta.glob("./*/*.tsx")` —
**only files exactly two levels deep are picked up as entries**. Files inside
sub-folders (`recruitment/jobs/JobsTab.tsx`) are NOT registered, which is why
they are safe places for internal modules.

### Single entry file (entry path)

Every prototype has exactly one entry at `src/prototypes/<slug>/<Slug>.tsx`
that exports `meta` (typed `PrototypeMeta`) and a `default` component. That
entry returns the `<Page>` shell.

### Modularize when the prototype grows

Prototypes are reference code — devs may lift them as a starting point — so
keep them readable. As soon as the entry file goes past ~150 lines or covers
multiple tabs, **split it**. Recommended layout (see `recruitment/` for a
worked example):

```
<slug>/
├── <Slug>.tsx                 ← entry: meta + default export + page shell
├── tabs.ts                    ← tab id/label constants (if any)
├── shared/                    ← helpers reused across tabs (colour maps, formatters)
│   └── <topic>.ts
├── <tabA>/
│   ├── <TabA>Tab.tsx          ← view component for tab A
│   ├── use<TabA>Source.ts     ← useDataCollectionSource hook
│   ├── <tabA>Columns.ts       ← OneDataCollection column defs
│   ├── <topic>.ts             ← pure helpers (status → variant, etc.)
│   └── <Subcomponent>.tsx     ← cards, side panels, etc.
└── <tabB>/...
```

Rules for the split:
- **Pure helpers** (status → variant, dot-colour mapping, label formatters)
  go in `.ts` files — never in component files.
- **Column definitions** for OneDataCollection live in their own `.ts` —
  renderers return strings or `{ type, value }` objects, never JSX, so the
  file stays JSX-free.
- **`useDataCollectionSource(...)` calls** are wrapped in a hook
  (`use<Tab>Source`) so the tab component just composes columns + source.
- **Sub-components** (cards, drawers, side panels) get their own `.tsx`
  next to the tab that owns them.
- **Anything reused across tabs** lives under `shared/`.
- **F0Form module-level statics + hooks inside the component.** The
  Zod schema, section configs, `defaultValues`, and `submitConfig` go
  at module scope (truly static, never re-allocated). The hooks
  `useF0Form()` + `useF0FormDefinition({...})` go **inside** the form
  component itself so they're paired with the rendered `<F0Form>`. The
  component takes a single `onCreate` prop. See
  `potatoes/shared/AddVarietyForm.tsx` and
  `recruitment/shared/CreateJobForm.tsx` for the canonical split.

  **Why hooks must live with `<F0Form>`**: calling `useF0FormDefinition`
  in a parent that doesn't also render the form leaves the AI form
  registry in a "registered but no UI" state. The chat panel renders a
  preview UI for that registered form which feedback-loops on every
  re-render ("Maximum update depth exceeded" inside `Dle` / `Array.map`
  in the `F0AiChat` bundle). The trade-off is real: the agent only
  sees the form once the user has navigated to the create view. Make
  the navigation easy — expose a copilot action that does
  `setSearchParams({ view: "create" })` so the agent can navigate first
  and then ask the user to fill via `forms.fillForm`.

- **Use the `f0FormField.text/.select/.number/.date/.checkbox/.multiSelect`
  builder API, not the verbose `f0FormField(z.enum(...), {...})` form.**
  The builder is what the f0 stories use; the verbose form has caused
  infinite render loops in the AI chat panel when complex enums are
  passed to the registry. Mark optionality with `optional: true` in the
  config, not via Zod's `.optional()`. Available builders include `text`,
  `email`, `textarea`, `number`, `date`, `dateRange`, `datetime`,
  `checkbox`, `select`, `multiSelect`, `cardSelect`, `multiFile`.

- **Use `row: "<rowId>"` for multi-column layouts.** Fields in the same
  schema with the same `row` value get rendered side-by-side. The
  production "Create job posting" dialog is two columns — see
  `recruitment/shared/CreateJobForm.tsx` for the canonical pattern.

- **Wrap the form's `onCreate` callback in `useCallback`** at the
  prototype root before passing it to the form hook. Unstable `onSubmit`
  identity feedback-loops the AI registry's coagent state sync (the
  chat panel goes into "Maximum update depth exceeded").

- **Type the submitted data manually**, don't rely on `z.infer<typeof schema>`.
  The f0 builders return wrapped types whose inference produces
  partly-optional shapes even on required fields. Declare an explicit
  `type NewX = { ... }` and `as NewX` cast inside `onSubmit({ data })`.
- **Don't split prematurely.** A tiny prototype (one screen, one table) is
  fine in a single file — the rule kicks in when concerns multiply.

### Required entry shape

```tsx
import {
  F0Box, F0Heading, F0Text, /* ...other f0 components */
  StandardLayout,
} from "@factorialco/f0-react"
import {
  Page, PageHeader, Tabs,
  OneDataCollection, useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { /* needed icons */ } from "@factorialco/f0-react/icons/app"
import { employees /* ...other fixtures */ } from "@/fixtures"
import type { PrototypeMeta } from "../types"

export const meta: PrototypeMeta = {
  slug: "<slug>",
  title: "<Title>",
  description: "<one-line>",
  category: "<People | Payroll | Time | Talent | Documents | Settings | Other>",
  module: "<see modules in @/shell/modules.ts>",
  audience: ["admin"],
  tags: [],
  createdAt: "<today YYYY-MM-DD>",
}

export default function <Slug>() {
  return (
    <Page header={<><PageHeader ... /></>}>
      <StandardLayout>
        {/* body */}
      </StandardLayout>
    </Page>
  )
}
```

## Step 6 — Composition: ONLY f0 components, NO bare HTML

| Bad (HTML) | Good (f0) |
|---|---|
| `<div>` for layout | `F0Box display="flex|grid" gap padding ...` |
| `<span>` `<p>` text | `F0Text content="..." variant="body|small|description|label|code|inverse"` |
| `<h1>`–`<h4>` | `F0Heading content="..." variant="heading|heading-large" as="h1|h2|h3|h4|h5|h6"` |
| `<button>` | `F0Button label="..." variant="default|outline|neutral|critical"` |
| `<a>` | `F0Link` (or `<Link>` from react-router-dom for in-app nav) |
| `<img>` (avatar) | `F0Avatar avatar={{ type: "person", firstName, lastName, src }} size="xs|sm|md"` |
| `<svg>` icon | `F0Icon icon={IconComponent} size="xs|sm|md"` |
| `<ul>` `<li>` lists | **OneDataCollection** with table or list visualization |
| `<table>` | **OneDataCollection** |
| Status pill | Tailwind `<span>` only as last resort — prefer `F0TagStatus` (`text`+`variant`) or compound cell `status`/`dotTag` |

If you don't know which f0 component to use, search:

```bash
grep -rn "<DESCRIPTION>" packages/react/src/{components,patterns,kits}
```

## Step 7 — Lists and tables: OneDataCollection ONLY

For anything beyond a one-off table, **don't inline the source and columns in
the tab component** — split them per the layout in Step 5:

```
<tab>/
├── <Tab>Tab.tsx           // composes columns + source, renders OneDataCollection
├── use<Tab>Source.ts      // wraps useDataCollectionSource(...)
└── <tab>Columns.ts        // exports the columns array (no JSX)
```

Then the tab component becomes ~15 lines:

```tsx
export function JobsTab() {
  const source = useJobsSource()
  return (
    <OneDataCollection
      source={source}
      visualizations={[{ type: "table", options: { columns: jobsColumns } }]}
    />
  )
}
```

Reference shape of the hook + columns:

```tsx
const source = useDataCollectionSource<TRow>(
  {
    filters: { /* { name: { type: "in"|"search"|..., label, options } } */ },
    currentFilters: { /* initial filter values */ },
    presets: [ /* { label, filter } — quick-filter chips */ ],
    sortings: { /* { fieldName: { label } } */ },
    search: { enabled: true, sync: true },
    dataAdapter: {
      fetchData: ({ filters, sortings, pagination, search }) => {
        // Filter, sort, paginate inline against your fixture
        return { records: filtered }
      },
    },
    primaryActions: () => ({ label, icon, onClick }),       // single action (function returning OBJECT, not array)
    secondaryActions: () => [{ label, icon, onClick }, ...], // array
    itemActions: (item) => [
      { label: "Edit", onClick: () => {} },
      { label: "Delete", onClick: () => {}, critical: true },
      { type: "separator" },
    ],
  },
  [/* deps */]
)

<OneDataCollection
  source={source}
  visualizations={[
    {
      type: "table",
      options: {
        columns: [
          { id, label, sorting?, render: (item) => string | number | { type, value } },
        ],
      },
    },
  ]}
/>
```

**Quick-filter chips like Active / Talent pool / Archived** are **presets**, not sub-tabs. Wire them via `presets` + `filters` + `dataAdapter` reading `options.filters`.

### MANDATORY by default: pagination + functional sort + functional search

Every OneDataCollection in a prototype MUST do all three for real, every time.
**Opt out only when the user explicitly says "no pagination" / "no sort" / "no
search"**, or when the dataset is bounded and tiny (≤10 rows) and the user has
implicitly accepted that. Default = on.

These rules exist because every one of these surfaces is interactive in the
UI by default. Declaring them in the config without wiring them in `fetchData`
produces a UI that *looks* live but does nothing — the worst kind of prototype
lie. A designer demos it, the stakeholder clicks "sort by amount", nothing
happens, and the prototype's credibility evaporates.

1. **Pagination is the default.** Every source's `dataAdapter` MUST set
   `paginationType: "pages"` and a `perPage` value, and `fetchData` MUST
   return the page-shaped response (`{ type: "pages", records, total,
   perPage, currentPage, pagesCount }`). Sensible per-page defaults: tables
   20–25, dense tables 10, card grids 12 (divisible by 1/2/3/4 to match the
   responsive column counts).

2. **Sorts MUST be functional.** Every field declared in `sortings` MUST be
   actually applied to records inside `fetchData`. Use the shared
   `@/lib/applySort` helper — it accepts a per-source `getValue(item, field)`
   so each hook decides how to read the field (number, lowercased string,
   parsed date, etc.).

3. **Search MUST be functional.** When `search: { enabled: true }` is
   declared, `fetchData` MUST filter records by the search term against at
   least one human-readable field (name / title / provider / email).

#### Canonical `fetchData` body — filters → search → sort → paginate

```ts
import { applySort } from "@/lib/applySort"

dataAdapter: {
  paginationType: "pages",
  perPage: 25,
  fetchData: ({ filters, search, sortings, pagination }) => {
    // 1. filters
    const wanted = Array.isArray(filters?.status)
      ? (filters.status as string[])
      : []
    const term = (search ?? "").toLowerCase().trim()

    const filtered = rows
      .filter((r) => wanted.length === 0 ? true : wanted.includes(r.status))
      // 2. search — at least one human-readable field
      .filter((r) =>
        term === "" ? true : r.name.toLowerCase().includes(term)
      )

    // 3. sort — every declared sorting field must be handled here
    const sorted = applySort(filtered, sortings, (r, field) => {
      switch (field) {
        case "name":      return r.name.toLowerCase()
        case "amount":    return r.amount
        case "createdAt": return Date.parse(r.createdAt)
        default:          return null
      }
    })

    // 4. paginate
    const perPage = pagination?.perPage ?? 25
    const currentPage =
      pagination && "currentPage" in pagination && pagination.currentPage
        ? pagination.currentPage
        : 1
    const total = sorted.length
    const pagesCount = Math.max(1, Math.ceil(total / perPage))
    const start = (currentPage - 1) * perPage
    return {
      type: "pages" as const,
      records: sorted.slice(start, start + perPage),
      total, perPage, currentPage, pagesCount,
    }
  },
},
```

This is the shape every prototype's source hook must follow. Verify in the
browser before declaring the prototype done: type in the search box, click a
sortable column header, click page 2 — all three must actually change what's
on screen.

## Step 8 — Mocks: ALWAYS @/fixtures

```tsx
import { employees, payrollPeriods, jobs, candidates, findEmployee } from "@/fixtures"
```

Never inline arrays. Never `[{ name: "Test" }]`. If a domain isn't in `@/fixtures`, propose adding it before improvising.

## Step 9 — Styling

- Tailwind only with `f1-*` tokens, applied via `className` ONLY when an f0 component doesn't expose the prop you need.
- Prefer F0Box's typed props (`display`, `padding`, `gap`, `alignItems`, `background`, `border`, `borderRadius`) over className.
- NEVER raw colors (`text-blue-500`, `#abc`). The allowlist plugin AND the static check reject them.
- Don't run a second Tailwind compilation in the prototype's package — f0-react ships pre-compiled Tailwind in `dist/styles.css` and a second pass overrides f0's reset.

## Step 10 — Imports allowlist

Allowed in prototypes:

- `react`, `react-dom`
- `@factorialco/f0-react` and any subpath (`/icons/app`, `/dist/experimental`)
- `@factorialco/f0-core`
- `@/fixtures`, `@/lib`, `@/prototypes`, `@/shell`
- Relative paths
- `react-router-dom`

Anything else fails Vite at HMR time.

---

## Step 11 — GOTCHAS catalog (read this BEFORE writing any component)

These are real bugs we've already paid for. Internalize them.

### Cell types in OneDataCollection (`render` return value)

Each cell type has a SPECIFIC value shape. Wrong field names = silent runtime errors or empty cells. Read the source at `packages/react/src/ui/value-display/types/<type>/<type>.tsx` to confirm.

| Cell type | Value shape | Common mistake |
|---|---|---|
| `status` | `{ status: StatusVariant, label: string }` | Using `{ variant, text }` (those are F0TagStatus's component props, not the cell value) |
| `tag` | `{ label: string, icon?: IconType }` | OK |
| `dotTag` | `{ label: string, color: NewColor }` | OK |
| `tagList` (type `"dot"`) | `{ type: "dot", tags: [{ text: string, color: NewColor }, ...], max?: number }` | Each tag uses `text` (NOT `label`). Different from dotTag cell. |
| `tagList` (type `"person"`/`"team"`/...) | varies — check `TagDataType<T>` | |
| `avatarList` | `{ type: "person", avatarList: [{ firstName, lastName, src }, ...], max?: number }` | Field is `avatarList`, NOT `avatars` |
| `person` | `{ firstName, lastName, src }` | OK |

The `render` function MUST return `string | number | { type, value } | undefined` — **never JSX**. If you need JSX, use the right cell type. If a JSX-only need is unavoidable, return a string and accept the visual loss.

### Component prop quirks

| Component | Quirk |
|---|---|
| `F0Heading`, `F0Text` | Use `content` (string), NOT children. `<F0Heading content="..." />` not `<F0Heading>...</F0Heading>` |
| `F0Heading.variant` | Only `"heading" | "heading-large"`. `"h1"`/`"h2"` etc are `as`, not `variant` |
| `F0Heading.as` | `"h1"`–`"h6"` only. NOT `"p"`/`"span"` |
| `F0Text.variant` | `"body" | "small" | "label" | "description" | "code" | "inverse"`. NOT `"body-md"`/`"body-sm"` |
| `F0Alert` | `{ title, description }` strings. NO children |
| `Chip` (from `OneChip` folder) | Variants are ONLY `"default" | "selected"`. NO semantic colors. Use `F0TagStatus` or compound `status` cell instead |
| `F0TagStatus.variant` | `"neutral" | "info" | "positive" | "warning" | "critical"` |
| `F0Box.background` | Has `"primary" | "secondary" | "info" | "positive" | "warning" | "critical" | "selected" | "transparent" | ...`. NO `"neutral"` — use `"secondary"` |
| `F0Box.columns` | String literals `"1"`–`"12"`, NOT numbers |
| `F0Box.alignItems` | `"start" | "center" | "end" | "baseline" | "stretch"`. NO `"flex-start"`/`"flex-end"` |
| `F0Box.gap` | `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`. NO `"2xs"` |
| `F0Box.grow` | Boolean, not string |
| `F0Box` responsive | Use `sm={{ columns: "2" }}`, `md={{ ... }}`, `lg`, `xl` overrides |
| `F0Avatar.avatar` | Discriminated union by `type`. For person: `{ type: "person", firstName, lastName, src }` |
| `PageAction` | REQUIRES `icon`. Shape `{ label, icon, href|onClick|actions }`. NO `variant` field |
| `PageHeader.module.id` | Must be a real f0 ModuleId from `F0AvatarModule/modules.ts` (`"timeoff"`, `"ats"`, `"payroll_bundle"`, `"performance"`, `"employees"`, etc.). NOT our internal `@/shell/modules.ts` ids |
| `SidebarHeader` | REQUIRES `isExpanded: boolean` prop |
| `Tabs.tabs` | `{ id, label }[]` or `{ href, label }[]` |
| `F0Button.variant` | `"default" | "outline" | "neutral" | "critical" | "promote"` |

### Where things are exported

| Symbol | Import path |
|---|---|
| `ApplicationFrame`, `Page`, `PageHeader`, `Tabs`, `Sidebar`, `SidebarHeader`, `SidebarFooter`, `Menu`, `SearchBar`, `OneDataCollection`, `useDataCollectionSource` | `@factorialco/f0-react/dist/experimental` |
| `F0Box`, `F0Card`, `F0Heading`, `F0Text`, `F0Avatar`, `F0Icon`, `F0Button`, `F0TagStatus`, `F0Alert`, `OneEmptyState`, `StandardLayout`, `defaultTranslations`, `F0Provider` | `@factorialco/f0-react` (main) |
| Icons | `@factorialco/f0-react/icons/app` |
| Type `IconType` | `@factorialco/f0-react` (main) |

### F0Card metadata items

`F0Card.metadata` is `Array<{ icon: IconType, property: { type, label, value } }>`.

Allowed `property.type` values (subset of full cell types):

```
text, number, date, amount, person, company, team, status, tag,
avatarList, tagList, alertTag, dotTag, file, folder, progressBar
```

`icon` is REQUIRED on each metadata item — there's no icon-less variant. If you don't want a leading icon visually, pick a neutral one (e.g., `Marker`, `CheckCircle`).

### App-level setup that's already done (don't redo)

These live in `App.tsx` / `styles.css` — leave them alone:

- `F0Provider` with `i18n.translations`, `l10n.l10n` (`{ locale, date.weekStartsOn }`), and `link.currentPath` reactive to the route + `link.component` that intercepts clicks via react-router.
- Inter font loaded from `@factorialco/f0-react/assets/fonts/style.css`.
- `dist/styles.css` imported (no second Tailwind pass).
- `:root { color-scheme: light; --ds-sidebar-width: 240px; }` and `html, body, #root { height: 100% }`.

If you see runtime errors like:

- `useI18n must be used within an I18nProvider` → F0Provider is missing or your component renders before it (don't restructure App.tsx, restart Vite)
- `Cannot read properties of undefined (reading 'map')` from inside f0 internals → wrong field name in a cell value (audit your `render` returns against the table above)

### Page + StandardLayout invariants

- The body of `<Page>` MUST be wrapped in `<StandardLayout>`. Otherwise content overflows, scroll breaks, padding is wrong.
- Primary AND secondary `Tabs` go INSIDE `<Page header={...}>`, not inline with body. They're part of the fixed navigation chrome.
- Quick-filter chips (Active / Pending / Archived / etc.) belong in `presets` of OneDataCollection, NOT as separate Tabs.

### Pin/unpin pattern

For per-row actions that toggle state (pin/unpin, archive/unarchive, etc.), branch in `itemActions`:

```tsx
itemActions: (item) => [
  item.pinned
    ? { label: "Unpin", icon: StarFilled, onClick: () => {} }
    : { label: "Pin", icon: Star, onClick: () => {} },
  // ...
]
```

Mirror the same toggle in `F0Card.otherActions` if the entity also appears as a card.

### Sidebar shape (when modifying FactorialSidebar)

The real Factorial sidebar (per the production screenshot) has:

- Header: `SidebarHeader` (CompanySelector + bell) + `SearchBar` (cmd+K shortcut)
- Body: `Menu` with categories — Root (no title) → Personal → Tasks → Company → Talent → Payroll
- Footer: `SidebarFooter` with user avatar + name + dropdown options

`MenuCategory.title: ""` + `isRoot: true` renders without a visible group title (used for Root and Tasks).

---

## Step 11.A — AI chat & form co-creation (always available)

Every prototype in f0compose is wrapped (by `FactorialShell`) in:

1. `F0AiChatProvider` (via `ApplicationFrame`) — the chat panel itself,
   talking to the running `factorial-agent` runtime at the canonical
   Traefik URL `https://mastra.local.factorial.dev/copilotkit` (override
   via `VITE_AGENT_URL` if needed). **Don't** hit the Mastra port
   directly (`:4111`) — it bypasses Traefik and gives CORS errors.
2. `F0AiFormRegistryProvider` — the AI form registry. Any `<F0Form>`
   rendered inside a prototype is automatically discoverable by the
   agent's built-in `forms.fillForm` tool.

Prototype authors **never** import `F0AiChat`, `F0AiChatProvider`, or
`@copilotkit/*` directly. Use `@/copilot` for the hooks they actually
need.

### Declaring actions and shared state

```tsx
import { useCopilotAction, useCopilotReadable } from "@/copilot"

// Tell the agent what the user is currently looking at:
useCopilotReadable({
  description: "Employees visible in the list (after filters/search).",
  value: visibleEmployees,
})

// Let the agent mutate prototype state:
useCopilotAction({
  name: "selectEmployee",
  description: "Select an employee by id.",
  parameters: [
    { name: "employeeId", type: "string", required: true },
  ],
  handler: ({ employeeId }) => setSelectedId(employeeId),
})
```

Rules:
- Hooks at component top-level only. **Never** inside an action's
  `render` function — `render` is a render function, not a component.
- Type streaming args as `Partial<T>` and guard with
  `status === "inProgress"` when you `render` mid-call.
- For agent-driven navigation, expose an action whose handler calls
  `setSearchParams({ view: "create" })` (per Step 4.5). Don't hide
  navigation behind imperative `navigate()` from inside actions.

### Form co-creation (the rule the AI registry depends on)

A form is only visible to the AI registry **while
`useF0FormDefinition({...})` is running on a mounted component**. If a
form lives behind a sub-screen and the user is on the index, the agent
sees no form and "fill the form" silently no-ops.

**Call the form hook INSIDE the form component** (paired with the
`<F0Form>` it produces). Lifting the hook to the prototype root —
where the form UI is conditionally rendered — leaves the AI form
registry in a "registered but not mounted" state. The chat panel
attempts to render a preview UI for that registered form on every
re-render and ends up in an infinite loop ("Maximum update depth
exceeded" inside `Dle` / `Array.map` in the `F0AiChat` bundle). The
trade-off is real: the agent only sees the form once the user has
navigated to the create view. Make navigation easy by exposing a
copilot action that calls `setSearchParams({ view: "create" })`, so the
agent can navigate first and then ask the user to fill via
`forms.fillForm`.

```tsx
// shared/AddVarietyForm.tsx — schema + sections at module scope (static)
const varietySchema = z.object({
  name: f0FormField.text({ label: "Variety name", section: "identity" }),
  variety: f0FormField.select({ label: "Variety type", section: "classification", options: [...] }),
  // ... other fields
})
const sections = { identity: { title: "Identity" }, /* ... */ }
const defaultValues = { name: "", variety: undefined, /* ... */ }

export type NewVariety = { name: string; variety: "..."; /* ... */ }

// Hooks INSIDE the component — paired with the rendered <F0Form>.
export function AddVarietyForm({ onCreate }: { onCreate: (v: NewVariety) => void }) {
  const { formRef } = useF0Form()
  const formDefinition = useF0FormDefinition({
    name: "new-potato-variety",
    schema: varietySchema,
    sections,
    defaultValues,
    submitConfig: { label: "Create variety" },
    onSubmit: async ({ data }) => {
      onCreate(data as NewVariety)
      return { success: true, message: "Variety added!" }
    },
  })
  return <F0Form formRef={formRef} formDefinition={formDefinition} />
}

// Potatoes.tsx (entry)
export default function Potatoes() {
  const handleCreate = useCallback((data: NewVariety) => {
    // ... append, navigate back via setSearchParams({})
  }, [setSearchParams])

  if (view === "create") {
    return (
      <Page header={/* PageHeader + ResourceHeader (Step 4.5) */}>
        <StandardLayout>
          <AddVarietyForm onCreate={handleCreate} />
        </StandardLayout>
      </Page>
    )
  }
  // list view — form is NOT mounted; AI registry doesn't see it from here.
  // To let the agent fill the form before the user manually navigates,
  // expose a copilot action that calls setSearchParams({ view: "create" }).
}
```

The agent's `forms.fillForm` tool auto-detects the form by `name` from
the registry. The user submits via the form's own button — the agent
only fills.

### Reference docs (read these for non-trivial flows)

These live in the f0-react package and are the source of truth:

- `packages/react/src/sds/ai/F0AiChat/documentation/COPILOT_ACTIONS.md`
- `packages/react/src/sds/ai/F0AiChat/documentation/CANVAS_ENTITIES.md`
- `packages/react/src/sds/ai/F0AiChat/documentation/ENTITY_REFS.md`
- `packages/react/src/sds/ai/F0AiChat/documentation/CLARIFYING_QUESTIONS.md`
- `packages/react/src/sds/ai/F0AiChat/documentation/ARCHITECTURE.md`

---

## Step 12 — Definition of done

```bash
pnpm --filter @factorialco/f0compose check src/prototypes/<slug>
pnpm --filter @factorialco/f0compose tsc
```

Both green. Plus visually:

- Catalog shows the new card in the right category.
- `/p/<slug>` renders without console errors.
- No bare HTML in any file under `src/prototypes/<slug>/` (`grep -rE "<(div|span|p|ul|li|button|a |img|table|h[1-6])\b" src/prototypes/<slug>/` returns nothing).
- Cells in OneDataCollection display values (not blank) — if blank, the `render` returns the wrong shape (see §11).
- **Sort, search, and pagination all behave for real**: click a sortable column header → row order changes; type in the search box → rows narrow; navigate to page 2 → the table shows different rows. If any of those don't change anything visible, the corresponding handling in `fetchData` is missing — go back to Step 7.

### Public demo-safe verification gate

If the prototype will be shared outside the local dev session, local checks and
HTTP 200 are NOT enough. Do not say "done", "ready", "safe to share",
"verified", "todo ok", or any equivalent until the public preview URL passes a
browser audit.

Run this audit on the final shareable URL, not `localhost`:

- Load every route and sub-view the user can share, including query-param views
  such as `?dtab=`, `?view=`, `?wizard=`, modals, and role-specific URLs.
- For every visible tab in the prototype main area, click it and verify it has
  real content or a deliberate empty state. No decorative tabs.
- For every visible CTA, row link, row action, dropdown item, modal action,
  breadcrumb, and empty-state action in the prototype main area, click it and
  verify it does not crash, leave the prototype family, or open a broken route.
- Ignore global shell/sidebar links unless the change intentionally touched the
  shell. Do not ignore links inside the prototype body/header.
- If the prototype has roles or audiences, repeat the full audit for each role.
  Never validate one role and infer the others.
- For role-based prototypes, run a negative permissions audit: verify forbidden
  CTAs are absent in the prototype main area for each non-admin role.
- Fail the audit on `Unexpected Application Error`, `404`, blank page, uncaught
  runtime exception, or navigation to another prototype family unless explicitly
  intended.
- Separate known global shell/agent console errors from prototype errors. List
  them as residual risk; do not hide them.
- Report a compact audit table before final handoff: route, role, visible
  surfaces clicked, result, console status, and residual risk.

If any public audit item fails, fix it before replying. If a large exhaustive
click audit times out, split it into smaller route/role batches and continue.
Do not downgrade the result to "verified" based on a partial audit.

### Modular structure check (for non-trivial prototypes)

If the prototype has >1 tab, >1 table, or the entry exceeds ~150 lines, the
folder MUST follow the Step 5 layout. Verify before declaring done:

- The entry `<Slug>.tsx` only owns: `meta`, the default export, the `<Page>`
  shell, primary/secondary tab state, and the tab routing switch.
- Each tab body lives in `<tab>/<Tab>Tab.tsx`.
- Each OneDataCollection has its `useDataCollectionSource` wrapped in
  `use<Tab>Source.ts` and its columns in `<tab>Columns.ts`.
- Pure helpers (status → variant, colour maps, formatters) live in `.ts`
  files, never inside `.tsx`. Column files are `.ts` (no JSX in renders).
- Sub-components (cards, drawers, side panels) sit in `<tab>/` next to the
  tab that owns them.
- Anything reused across tabs lives under `<slug>/shared/`.
- No file under a sub-folder ends with both `meta` and a `default` export
  (those would get auto-registered as ghost prototypes by the glob —
  although the glob is two-deep only, this is a defence-in-depth check).

## Step 13 — End-of-turn response (always)

Before you reply, **verify it actually works**:

1. `pnpm --filter @factorialco/f0compose tsc` → 0 errors.
2. Hit the new route: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:5174/p/<slug>` → `200`.
3. If you tweaked an existing prototype, also curl its route.
4. If the dev server isn't running, start it (`pnpm dev &`, wait ~3s) — never
   send the user a URL you haven't proven loads.
5. If you provide a public preview or PR preview, run the public demo-safe
   verification gate from Step 12 on that URL before saying it is ready.

Then end EVERY turn with this exact structure:

```
✅ <one-line summary of what changed>

🔗 New / updated prototype:
   http://localhost:5174/p/<slug>

🗂  Catalog (all prototypes):
   http://localhost:5174/

📚 Related prototypes you may want to look at:
   - <slug-a> — http://localhost:5174/p/<slug-a> — <why it's related>
   - <slug-b> — http://localhost:5174/p/<slug-b> — <why it's related>
   (omit this section only if there are genuinely no related prototypes)

🧪 Sanity check:
   - tsc: ✅
   - route 200: ✅
   - public click audit: ✅ / not applicable
   - console status: <clean, known global warnings only, or list blockers>
   - <anything else you verified, e.g. "presets switch and filter rows">

❓ Si algo no se ve bien o algo peta:
   Pega aquí el error EXACTO de la consola del navegador (DevTools → Console)
   o del terminal de Vite, y lo arreglo. Una captura también vale, pero el
   texto del error es lo que más rápido me deja diagnosticar.

➡️  Siguiente iteración sugerida:
   <one concrete next move: density, presets, audience, empty state, ...>
```

Rules:
- The new-prototype URL is mandatory. If you only iterated, that's still the
  link — say "updated" instead of "new".
- The catalog link is always shown so the designer can navigate back.
- The "related prototypes" section is mandatory whenever there are siblings
  in the same `category` or `module` — list them with their URLs.
- The "paste the error" message is **non-negotiable**. Designers won't know
  what to send unless you tell them exactly where to look (browser DevTools
  Console + Vite terminal).
- Keep the suggested next iteration concrete and actionable, not "we could
  do many things".

## Pair with `impeccable` and `f0-design`

After generating, ask the user if they want an `impeccable audit` pass. `f0-design` is loaded alongside this skill and enforces tokens / type scale / anti-patterns.

## Anti-patterns (immediate fails)

- DON'T use bare HTML.
- DON'T use `<ul>` / `<table>` / `<li>` — use OneDataCollection.
- DON'T import or render `ApplicationFrame` or `Page` outside the framework's expected places.
- DON'T render `<Tabs>` outside of `Page.header`.
- DON'T skip `<StandardLayout>` in the body.
- DON'T wrap OneDataCollection in a card/border `F0Box` — it has its own chrome.
- DON'T return JSX from a OneDataCollection `render`.
- DON'T declare `sortings` / `search` / `paginationType` in the source config without applying them in `fetchData`. That's a UI lie — buttons that don't do anything. See Step 7's MANDATORY rules and the canonical `fetchData` body.
- DON'T ship a OneDataCollection without pagination unless the user explicitly says so or the dataset is bounded and tiny (≤10 rows).
- DON'T guess cell value shapes — read `ui/value-display/types/<cellType>/<cellType>.tsx`.
- DON'T guess component props — read `__stories__/<Component>.stories.tsx`.
- DON'T use `as any`. f0 is strictly typed.
- DON'T raw color classes.
- DON'T inline arrays of 4+ items.
- DON'T skip Step 0 (interview), Step 2 (consult `packages/react/.skills/`), or Step 3 (read stories).
- DON'T compile a second Tailwind pass.
- DON'T end the turn without the full Step 13 template (new URL + catalog + related + sanity check + "paste the error" reminder).
- DON'T send a URL you haven't curl-verified returns 200, or that fails tsc.
- DON'T jump to code before showing a plan and checking for an existing prototype to iterate on (Step 0).
- DON'T ship a multi-tab / multi-table prototype as a single 500-line file. Split it per Step 5 (entry + `<tab>/` sub-folders + `shared/`).
- DON'T put pure helpers (status → variant, colour maps, formatters) inside a `.tsx`. They belong in a sibling `.ts`.
- DON'T put `useDataCollectionSource(...)` directly in the tab component. Wrap it in a `use<Tab>Source.ts` hook.
- DON'T inline column arrays in the tab component. Move them to `<tab>Columns.ts` (kept JSX-free).
- DON'T create a sub-folder file that exports both `meta` and a `default` component — only the entry `<Slug>.tsx` may.
- DON'T compose a prototype without first consulting the relevant file under `packages/react/.skills/` (Step 2). Cite it in the response so the user can audit.
- DON'T omit `breadcrumbs` on a sub-screen (form view, detail view, settings sub-tab). Breadcrumbs are MANDATORY whenever the user is NOT on the prototype's main / index screen — see Step 4. The first item must navigate back; the last item is the current screen.
- DON'T ship a sub-screen form without a Cancel button in `PageHeader.actions` that returns to the index. Two exits (breadcrumb + explicit Cancel) is the canonical pattern.
- DON'T call `useF0Form()` / `useF0FormDefinition({...})` in a parent that doesn't ALSO render `<F0Form>`. Lifting the hook to the prototype root with the goal of "making the form discoverable from any view" leaves the AI registry in a "registered but no UI" state, and the chat panel goes into an infinite loop ("Maximum update depth exceeded" inside `Dle`). The hook MUST live next to the rendered form. The trade-off — agent only sees the form once the user navigates to it — is acceptable; expose a copilot action that performs the navigation.
- DON'T use `useState` to drive view selection in a multi-view prototype. Use `useSearchParams` from `react-router-dom` so each screen has a distinct URL (`/p/<slug>` vs `/p/<slug>?view=create`). See Step 4.5 — distinct URLs are mandatory.
- DON'T duplicate the module name as the first item of `breadcrumbs`. `PageHeader` already auto-prepends `module.name` linking to `module.href`; passing `[{label: "Potatoes"}, ...]` produces a duplicate "Potatoes > Potatoes > …". Pass only the leaf items past the index.
- DON'T set `module.href` to anything other than the prototype's actual route (`/p/<slug>`). The auto-prepended breadcrumb uses this href as a real link, so a wrong value 404s the user.
- DON'T put a sub-screen's title + description in the body. They go inside `<Page header={<>...</>}>` after `PageHeader` so they stay sticky while the user scrolls (Step 4.5).
- DON'T import `F0AiChat`, `F0AiChatProvider`, `F0AiFormRegistryProvider`, or anything from `@copilotkit/*` directly inside a prototype. The shell wires them. Use `@/copilot` (`useCopilotAction`, `useCopilotReadable`, `useAiChat`) for prototype-level interactions.
- DON'T point `VITE_AGENT_URL` at the Mastra port directly (`http://mastra.local.factorial.dev:4111/copilotkit`). It bypasses Traefik and produces CORS errors. Use the Traefik HTTPS route `https://mastra.local.factorial.dev/copilotkit` (the same one f0-react Storybook uses).
- DON'T inline a non-trivial form's schema, sections, and `onSubmit` in the entry file. Modularize per Step 5: schema + Zod + `useF0FormDefinition` live in `shared/use<X>Form.ts`; the presentational `<F0Form>` wrapper lives in `shared/<X>Form.tsx`.
- DON'T use the verbose `f0FormField(z.enum([...]), { options: [...] })` form for select fields. It has been observed to cause infinite render loops in the AI chat panel. **Always use the builder API**: `f0FormField.text/.email/.textarea/.number/.date/.checkbox/.select/.multiSelect/.cardSelect/...`. Mark optionality via `optional: true` in the config, not `.optional()` on Zod.
- DON'T arrange related form fields one-per-row when the design groups them. Pair them via `row: "<rowId>"` for the canonical 2-column layout (see `recruitment/shared/CreateJobForm.tsx`).
- DON'T pass an inline arrow function as `onSubmit` (or any callback the form hook captures) without `useCallback`. Unstable identity feedback-loops the AI registry's coagent state sync, which manifests as "Maximum update depth exceeded" inside the chat panel — the loop only fires when the chat is mounted, so it's easy to miss locally.
- DON'T type the `onSubmit` payload as `z.infer<typeof schema>`. The f0 builders return wrapped types whose inference produces partly-optional fields even on required ones. Declare an explicit `type NewX = { ... }` for the runtime shape and cast `data as NewX`.
- DON'T roll your own `F0Heading + F0Text + F0Box` for a sticky sub-screen header. Use `ResourceHeader` from `@factorialco/f0-react/dist/experimental` — it provides title, description, and `secondaryActions` (place Cancel here) in one cohesive component.
- DON'T drive `<Tabs>` solely with the `setActiveTabId` callback when the active tab also lives in the URL. `<Tabs>` keeps its own internal `useState` and won't re-sync on prop changes — external nav (breadcrumb, deep link, browser back) silently breaks. Wire per-tab `onClick` for nav and pass `key={activeTabId}` so the component remounts on URL change. See Step 4.5 for the canonical snippet.
