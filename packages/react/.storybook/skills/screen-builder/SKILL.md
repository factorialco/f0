---
name: screen-builder
description: Use when the user provides a product definition, feature spec, or screen idea and asks to compose, prototype, or iterate on a Factorial screen using F0 components. Triggers include "build a screen for…", "compose a page that…", "prototype this feature", "screen-builder", "/screen-builder". The skill interprets the spec, gathers component context via the Storybook MCP (with source-file fallback), produces a composition that follows page-composition.mdx, and materialises it as a story under the Playground Storybook section so the user can preview and iterate.
---

# screen-builder

> **PURPOSE**: Turn a natural-language product definition into a working F0 screen composition, materialised as a Storybook story under `Playground/`, ready to preview and iterate.

---

## Non-negotiable rules

These apply to **every** screen this skill produces. No exceptions.

1. **Always wrap the composition in `ApplicationFrame` + `Navigation/Page`.** The story preview must mirror production framing. Never render a bare page body inside Storybook — the user must see the screen inside the real shell, with sidebar, banner slot, and AI slot present (even if empty).
2. **The intent is prototyping. Always ship realistic mock data with the story.** A screen without data is unreadable. Mock data must be plausible enough that a product reviewer can understand the screen at a glance: real-looking names, dates, statuses, amounts, avatars (use placeholder URLs when needed). Mock data lives in a sibling file inside the same playground folder (e.g. `mock-data.ts`, `types.ts`).
3. **Default content block is `OneDataCollection`** whenever the screen surfaces records. Pick the visualization (`table`, `card`, `list`, `kanban`, `calendar`, `gallery`) per `page-composition.mdx` §7b. Only fall back to `F0Form`, `F0DataChart`, or `OneEmptyState` when the data is genuinely not a collection of records.

---

## When to use

Use this skill when the user:

- Describes a feature, screen, or product flow and wants to see it composed with F0 components.
- Says "build / compose / prototype a screen for X".
- Invokes `/screen-builder` or names the skill explicitly.
- Wants to iterate on a composition: add tabs, add an aside, swap a content block, split a section, etc.

Do **not** use this skill for:

- Building or modifying an actual production page (use the regular dev workflow).
- Creating reusable F0 components (those go to `src/components`, `src/patterns`, etc.).

---

## Source of truth

This skill always follows the rules in:

```
packages/react/docs/page-composition.mdx
```

When the page-composition doc and a user request conflict, default to the doc and surface the conflict. Do **not** invent block placements that contradict it.

---

## Workflow

### Step 1 — Understand the spec

Read the user's product definition. Extract:

1. **Page type** — Module page (section, list, dashboard, settings) or Resource page (one entity).
2. **Sub-views** — Does it need tabs / subtabs? Each tab = a separate composition.
3. **Primary content** — Tabular data, form, charts, dashboard, custom.
4. **Filters / date scope** — Is the dataset filterable? Date-driven?
5. **Aside** — Does the page need a persistent sidebar (details, summary, secondary nav)?
6. **Banners** — Any page-wide alert?
7. **Actions** — Module-level, resource-level, section-level, item-level.

If any of the above is ambiguous, **ask before composing**. Use the `question` tool with a small number of focused options. Never guess between Module vs Resource — always confirm.

### Step 2 — Gather component context (MCP first, source fallback)

Try the Storybook MCP first:

```
endpoint: http://localhost:6006/mcp
toolset:  docs
tools:    list-all-documentation, get-documentation
```

For every F0 component you intend to use, call `get-documentation` and verify:

- Component exists.
- Required props.
- Allowed prop values.
- Whether the component is stable, experimental, or deprecated.

If the MCP is unreachable (`curl -s -o /dev/null -w "%{http_code}" http://localhost:6006/mcp` returns `000`), fall back to reading source files in `packages/react/src/`. Tell the user the MCP is offline and you are using source-file fallback.

**Never invent props.** If you cannot verify a prop, omit it or ask the user.

### Step 3 — Decide the composition

Apply the page-composition rules in this fixed order:

1. **Shell context** — Assume `ApplicationFrame` and `Navigation/Page` exist. Compose only the page body.
2. **`F0Alert`** — Only if the spec calls for a page-wide notice. Always at the top.
3. **`ResourceHeader`** — Only on Resource pages. Sibling of `Layout.Page`.
4. **`Tabs` for Resource sub-views** — Between `ResourceHeader` and `Layout.Page`. Each tab is composed independently.
5. **`Layout.Page`** — Always wraps the body. Decide:
   - `header` slot → `OneDateNavigator` and/or `OneFilterPicker` **only when the content is not `OneDataCollection`** (the collection embeds them internally).
   - `aside` slot → only if the spec needs a persistent sidebar.
   - `variant` → `main-aside` (default) or `aside-main`.
6. **Content blocks** — Default to `OneDataCollection` whenever the screen shows records. Only deviate when the data is not a collection.
   | Need | Component |
   |------|-----------|
   | **Any set of records (rows, cards, items, events) — DEFAULT** | **`OneDataCollection`** |
   | Single-entity create or edit form | `F0Form` |
   | Aggregated metrics / KPIs / trend charts | `F0DataChart` |
   | Empty dataset | `OneEmptyState` |
   | Custom layout inside a block | `F0Box` |

   When using `OneDataCollection`, pick the visualization per `page-composition.mdx` §7b: `table` (back-office/admin), `card` (visual identity), `list` (dense text), `kanban` (pipeline with status), `calendar` (date-bound events), `gallery` (media-first). Choice is content-driven, never stylistic.

7. **`SectionHeader`** — Only when a sub-section needs its own title/description/action and it does not duplicate `PageHeader` or `ResourceHeader`.

Reject any layout that:

- Duplicates `ResourceHeader` or stacks multiple `F0Alert`.
- Places `OneFilterPicker` / `OneDateNavigator` next to `OneDataCollection`.
- Uses raw `<div>` with Tailwind for layout (use `F0Box`).
- Uses components from `experimental/` or `sds/` when a stable equivalent exists.

### Step 4 — Materialise as a Playground story

Create a CSF story under `packages/react/playground/`. Folder layout:

```
packages/react/playground/
  <kebab-case-screen-name>/
    <ScreenName>.stories.tsx
    mock-data.ts          ← realistic prototype data (REQUIRED)
    types.ts              ← types shared between mock-data and story (when useful)
```

**Mock data is mandatory.** The story must render a populated screen, not an empty shell. Use realistic names, dates within the last few months, plausible statuses, currency amounts that make sense for the domain. Aim for 5–15 records per collection so pagination, sorting, and visualization switching all have something to show. Avoid Lorem ipsum, `"Foo"`, `"Bar"`, or `id: 1, 2, 3` placeholders — they make the prototype unreadable.

Story file template:

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { Page as NavigationPage } from "@/patterns/Navigation/Page"
// import every F0 component used in the composition…

const meta = {
  title: "Playground/<Group> / <Screen Name>",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ApplicationFrame sidebar={null}>
      <NavigationPage>
        {/* page body produced by the composition */}
      </NavigationPage>
    </ApplicationFrame>
  ),
}
```

Rules:

- `title` **must** start with `Playground/` so it lands in the Playground section.
- Use a `<Group>` segment when several related screens belong together (e.g. `Playground/HR / Employee Profile`).
- Mock data lives next to the story in the same folder, never inside `src/`.
- **Always wrap the body in `ApplicationFrame` + `Navigation/Page`.** Non-negotiable — see the rules at the top of this skill. The wrapping must be present even if `sidebar`, `banner`, and `ai` slots are left empty.
- **Always render with realistic mock data.** A story that renders an empty grid or a `null` collection fails the prototyping intent.

### Step 5 — Wire Playground into Storybook (one-time setup, idempotent)

Before the first Playground story can render, two files must include the Playground section. Check both and update only if missing.

#### 5a. Register the directory in `packages/react/.storybook/main.ts`

Gate the entry behind `STORYBOOK_PUBLIC_BUILD` so playground stories **never ship in the published Storybook** — they exist for local prototyping only:

```ts
...(process.env.STORYBOOK_PUBLIC_BUILD
  ? []
  : [
      {
        directory: "../playground",
        titlePrefix: "Playground",
      },
    ]),
```

Place this immediately after the `docs` entries so it loads first in dev.

#### 5b. Add `playground` to the sidebar order in `packages/react/.storybook/preview.tsx`

Insert `"playground"` as the **first** item of the `topLevelOrder` array inside `storySort`:

```ts
const topLevelOrder = [
  "playground",
  "introduction",
  "how-to-contribute",
  // …existing entries
]
```

These two edits guarantee the Playground category renders **at the top** of the Storybook sidebar.

### Step 6 — Verify

Run, in this order:

1. **Format**: `pnpm --filter @factorialco/f0-react run format`
2. **Type-check**: `pnpm --filter @factorialco/f0-react run tsc`
3. **Storybook**: ask the user to open Storybook (or start it with `pnpm storybook dev` from `packages/react/`) and confirm the new story renders under `Playground/`.

If TS fails, inspect prop usage against MCP / source — do not silence errors with `any`.

### Step 7 — Iteration loop

After the first render, the user typically asks for changes. Common iterations and how to handle them:

| Request                                | Action                                                                                                                       |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| "Add an aside"                         | Add `aside` prop to `Layout.Page` with a `Layout.Block`.                                                                     |
| "Split into tabs"                      | Insert `Tabs` between `ResourceHeader` and `Layout.Page`. Each tab gets its own story or a state-driven render.              |
| "Add a filter"                         | If content is `OneDataCollection`, configure its source filters. Otherwise, add `OneFilterPicker` to `Layout.Page` `header`. |
| "Add a banner"                         | Render `F0Alert` as the top-level sibling, above `Layout.Page`.                                                              |
| "Two charts side by side"              | Wrap them in `F0Box display="flex" gap="4"`, never raw `<div>`.                                                              |
| "Make this section have its own title" | Wrap in `Layout.BlockContent` with `title` and `description`.                                                                |
| "Add a section action"                 | Use `SectionHeader` with `action` prop, scoped to that section.                                                              |

Each iteration must keep the composition compliant with `page-composition.mdx`. If the user asks for something that violates the rules, surface the conflict and propose the compliant alternative.

---

## Anti-patterns the skill must refuse

- Skipping `ApplicationFrame` / `Navigation/Page` in the preview.
- Rendering a screen without mock data, or with placeholder gibberish (`"Foo"`, `"Bar"`, `lorem ipsum`, `id: 1/2/3`).
- Reaching for a custom `F0Box` list when the data is a set of records — use `OneDataCollection`.
- Picking a `OneDataCollection` visualization that the data does not support (`kanban` without a status field, `calendar` without a date field).
- Putting tabs inside `ApplicationFrame`.
- Placing `ResourceHeader` inside `Layout.Page` `header` slot.
- Stacking multiple `F0Alert` banners.
- Adding `OneFilterPicker` / `OneDateNavigator` next to `OneDataCollection`.
- Using raw `<div>` for layout inside `Layout.Block`.
- Generating stories outside `packages/react/playground/`.
- Inventing props or using values not present in MCP / source.

---

## Output checklist

After a successful run, the user should have:

- [ ] One folder under `packages/react/playground/<kebab-name>/` with a `.stories.tsx` and a `mock-data.ts`.
- [ ] Story title starts with `Playground/`.
- [ ] Composition wrapped in `ApplicationFrame` + `Navigation/Page` (non-negotiable).
- [ ] Realistic mock data populates every visible block (no empty states unless the screen is the empty state itself).
- [ ] Default content block is `OneDataCollection` whenever the screen surfaces records, with the visualization chosen per §7b.
- [ ] Body follows the section 6 order from `page-composition.mdx`.
- [ ] `main.ts` has the `playground` directory entry (added once, idempotent).
- [ ] `preview.tsx` has `"playground"` first in `topLevelOrder` (added once, idempotent).
- [ ] `pnpm format` and `pnpm tsc` pass.
- [ ] The story renders under `Playground/` at the top of the sidebar.

---

## References

- Composition rules: `packages/react/docs/page-composition.mdx`
- Storybook MCP: see root `.mcp.json` and `packages/react/AGENTS.md`
- F0 component patterns: load `f0-component-patterns` skill if you need to author a new component (out of scope for screen-builder).
