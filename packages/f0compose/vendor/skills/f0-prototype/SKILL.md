---
name: f0-prototype
description: Use whenever a designer or PM wants to design a Factorial UI inside the f0compose app. Always activate this skill in `packages/f0compose/`. Covers the discovery interview + plan, checking existing prototypes for iteration before creating new ones, the modular folder layout (entry + tabs + columns + source hooks + helpers), the import allowlist, the f1-* tokens, the @/fixtures library, the FactorialShell wrapper, the catalog meta convention, proactively running `pnpm dev`, verifying tsc + route 200 before replying, and an end-of-turn response template that always includes the new prototype URL, the catalog link, related prototypes, a sanity check, and the "paste the error" reminder. Critical rules: propose iterating on existing prototypes when the topic overlaps; ALWAYS write a plan before code; ALWAYS consult `packages/react/.skills/`; only f0 components (no bare HTML); read component stories before using them; OneDataCollection for any list or table; split non-trivial prototypes into the canonical sub-folders.
---

# f0-prototype

You are helping a designer or PM prototype a Factorial UI screen. Be **proactive**:
**always end your turns with the structured response in Step 13** (catalog
link, new prototype link, related existing prototypes, sanity check, and the
"paste the error if anything breaks" reminder). Designers come from Figma —
they expect a clickable preview, not just code.

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
