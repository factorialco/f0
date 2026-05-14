# MDX Authoring Reference

**This is Step 4 of the f0-docs workflow.** Complete Steps 1–3 first (source analysis, creator questions if needed, quality target decision) before writing any MDX. Skipping analysis leads to missing props, broken `<Canvas>` references, and empty guidelines.

Everything needed to write the MDX file: template, table templates, utility components, stories update, and validation checklist.

---

## Meta Tag — Which Pattern to Use

### Standard component (single stories file) — use in 95% of cases

```mdx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/addon-docs/blocks"
import * as Stories from "./F0ComponentName.stories"
import { DoDonts } from "@/lib/storybook-utils/do-donts"

<Meta of={Stories} />
```

### Umbrella component (multiple story files) — F0DataChart, OneFilterPicker pattern

Use `<Meta title="..." />` only when the component spans multiple story files:

```mdx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/addon-docs/blocks"
import * as BarStories from "./F0ComponentBar.stories"
import * as LineStories from "./F0ComponentLine.stories"
import { DoDonts } from "@/lib/storybook-utils/do-donts"

<Meta title="F0ComponentName/Overview" />
```

> Semicolons in imports are fine in MDX — `oxfmt` only applies to `.ts`/`.tsx` files.
> Do NOT import `DocsNav` — Storybook has native sidebar navigation with anchors; a secondary nav component is redundant and confusing.

---

## Full MDX Template

Filename must match the stories file: `F0Button.stories.tsx` → `F0Button.mdx`

**Heading hierarchy:**

- `#` — component title. Visible on page but does NOT appear in Storybook's right-side nav.
- `##` — main sections (Anatomy, Guidelines, Accessibility). Appear in the right-side nav.
- `###` — subsections of Anatomy (Modes, Variants) and of Guidelines (Design best practices, Content best practices, Behavior, Usage examples) and of Accessibility (Keyboard interaction, Screen reader behavior).
- `####` — **never used inside Guidelines.** "When to use", "When not to use", and "Do's and don'ts" use `**bold**` instead — same visual separation without generating nav anchors.

**No `---` dividers between sections.** Storybook renders them as visible horizontal rules that clutter the page. Use heading hierarchy alone to separate sections.

**No import banner needed.** The `ImportBanner` component in `.storybook/DocsContainer.tsx` automatically injects the `import { F0ComponentName } from "@factorialco/f0-react"` block into every docs page via a portal. Do NOT add a visible import block in the MDX.

**No `DocsNav` and no manual menu.** Storybook has a native right-side navigation built from the heading hierarchy — a secondary nav component is redundant and confusing. Never import or use `DocsNav`.

**No `## Purpose` section.** The 1–2 sentence description immediately after the component title already serves this role. A separate Purpose section restates the same information and adds noise.

**No `# Code` section.** `<Controls of={Stories.Default} />` in `## Anatomy` is the interactive props table — users can explore all props there. A separate Code section with an import block and a static props reference table duplicates content that is already available interactively.

**Section order:**

1. `## Anatomy` — `<Canvas>` of the Default story + `<Controls>` (interactive props table), then structural sub-sections:
   - `### Modes` — if the component has a `mode` prop with 2+ values: Canvas of a Modes story showing all modes, then a table (Mode | Description). No "When to use" column — that guidance belongs in **When to use** under Guidelines.
   - `### Variants` — if the component has a `variant` prop with 2+ values: Canvas of a Variants story showing all variants stacked, then a table (Variant | When to use).
   - `### Sizes` — **omit in most cases.** Only include when the component has size-specific behavior that differs from the system default (e.g. a size is unavailable, affects surrounding layout, or has a real usage caveat). Do not document sizes just because the prop exists — repeating `sm/md/lg` descriptions across every component is noise.
2. `## Guidelines` — all usage guidance: When to use / When not to use / Do's and don'ts / Content / Behavior / Usage examples.
3. `## Accessibility` — only when the component type requires it (see decision table below).

**Rationale:** Modes, Variants and Sizes describe the structural forms the component can take — they are anatomy, not guidance. Keeping them under `## Anatomy` gives the right-side nav three clean top-level entries: Anatomy · Guidelines · Accessibility.

```mdx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/addon-docs/blocks"
import * as Stories from "./ComponentName.stories"
import { DoDonts } from "@/lib/storybook-utils/do-donts"

<Meta of={Stories} />

# ComponentName

[1–2 sentences fusing definition + purpose. What the component is, what it does, and when it belongs in the UI. Cross-reference alternatives: "For transient feedback use a toast; for blocking decisions use `F0Dialog`".]

## Anatomy

<Canvas of={Stories.Default} />

<Controls of={Stories.Default} />

### Modes

<!-- Only include if the component has a mode prop with 2+ values -->

<Canvas of={Stories.Modes} />

<!-- Modes table: Mode | Description — see Table Templates -->

### Variants

<!-- Only include if the component has a variant prop with 2+ values -->

<Canvas of={Stories.Variants} />

<!-- Variants table: Variant | When to use — see Table Templates -->

### Sizes

<!-- Only include when the component has size-specific behavior not covered by the system default.
     Omit if sm/md/lg behave identically to other components — repeating the same table is noise. -->

<Canvas of={Stories.Sizes} />

<!-- Sizes table: Size | Description (component-specific caveats only) — see Table Templates -->

## Guidelines

### Design best practices

**When to use**

<!-- 1–2 sentences introducing the key decision context.
     If the component has 2+ modes/sub-cases (e.g. split vs dropdown), introduce each
     with a sentence and a <Canvas> before the table:

       Use `split` mode when there is a clear primary action and the secondary options
       are infrequent. Use `dropdown` mode when all actions are equally important.

       <Canvas of={Stories.SplitExample} />
       <Canvas of={Stories.DropdownExample} />

     The table then covers ONLY additional situations not already illustrated by the Canvas
     above — never repeat what a Canvas already shows.
-->

<!-- 2-col table (Situation | Use F0X when) — positive cases only. See Table Templates. -->

**When not to use**

<!-- 2-col table (Situation | Use instead) — negative cases only.
     "Use instead" must always name a CONCRETE component (`F0Dialog`) or pattern
     ("toast notification") — never abstract instructions like "a simpler alternative"
     or "something else". The reader must know exactly what to reach for.
     See Table Templates. -->

**Do's and don'ts**

<DoDonts
  do={{
    description: "[Example of correct copy or usage]",
  }}
  dont={{
    description: "[Example of incorrect copy or usage]",
  }}
/>

### Content best practices

<!--
  Copywriting and tone rules. For each rule that includes textual examples, use the
  inline Correct/Incorrect bullet pattern (more scannable than prose) AND pair it with a
  <DoDonts> visual showing one representative good vs bad label rendered as the actual
  component. Bullets and DoDonts complement each other — never drop the visual.
-->

- [Capitalization, punctuation, tone rule]
- [Length limit or character guidance]
- Use imperative verbs
  - **Correct:** "Save changes", "Delete account", "Export data"
  - **Incorrect:** "Saved", "Deletion", "Exportation"

> Adapt the rendered JSX to the component's real API. Use children, `label`, or other props only if that component actually supports them.

<DoDonts
  do={{
    description: "Use clear, action-oriented labels",
    children: <F0ComponentName>Save changes</F0ComponentName>,
  }}
  dont={{
    description: "Don't use vague or generic labels",
    children: <F0ComponentName>OK</F0ComponentName>,
  }}
/>

### Behavior

<!--
  Non-obvious runtime behavior specific to this component. Apply the inclusion filter
  from SKILL.md → Authoring Principles → `### Behavior`:
  skip if Controls / Variants / global behavior already covers it. Omit the section
  entirely if the component has no non-obvious behavior.
-->

- [Async handler auto-loading, polymorphic rendering driven by an href, controlled/uncontrolled rules, focus management]
- [Generic type note — if the component is generic (`F0Component<T>`): document the type parameter, what it controls, and the full signature of any typed callback (e.g. `onClick: (value: T, item: Item<T>) => void`). Mention that `T` defaults to `string` and that callers can pass a union, enum, or literal type.]

### Usage examples

<!-- Named scenarios. Use **bold text** instead of #### headings — headings generate anchors
     in the right-side nav and clutter it. Bold gives visual separation without nav entries. -->

**[Named scenario]**

[1–2 sentences describing the use case and when to apply it.]

<Canvas of={Stories.WithFeature} />

**[Another scenario — only include if the Canvas actually shows what the title claims]**

<Canvas of={Stories.Advanced} />

## Accessibility

<!--
  Include this section only when it adds real value — see the decision table below.
  Base content entirely on the actual component code. Never invent ARIA attributes or
  behaviors not present in the implementation.
-->

### When to include Accessibility

| Component type                                             | Include Accessibility?       | What to cover                                                                                       |
| ---------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| Complex interactive (Dropdown, Dialog, Select, DatePicker) | Yes — required               | Keyboard table + screen reader behavior + focus management                                          |
| Simple interactive (Button, Checkbox, Toggle)              | Only if non-obvious          | Skip if behavior is standard; include if there are sr-only labels, aria-busy, or icon-only patterns |
| Static display with dynamic injection (Alert, Toast)       | Only for live region         | aria-live guidance if the component can appear after page load                                      |
| Static display (Badge, Avatar, Tag)                        | Only if icon carries meaning | Note if icon is decorative or if color alone conveys state                                          |
| Layout / typography (Text, Heading, Box)                   | No — omit entirely           | Semantic HTML is handled internally; nothing for the developer to do                                |

### Keyboard interaction

<!-- Only include if the component has interactive elements (buttons, inputs, focusable areas). -->
<!-- Use the Keyboard table template from the Table Templates section. -->

### Screen reader behavior

- [ARIA role used, or explicit note that no role is set]
- [aria-live recommendation if component is dynamically injected]
- [Icon decoration note — e.g. "The leading icon is decorative. The variant conveys meaning through text."]
```

---

## Table Templates

All tables use `<Unstyled>` with native HTML — never raw markdown tables (they break in dark mode). Some legacy docs may still use markdown tables and should be migrated when next updated.

### Props — 5 columns (Prop | Type | Default | Required | Description)

Single unified table. Placed inside `## Anatomy`, after `<Canvas>` and `<Controls>`. This is the single source of truth for props — do NOT create a separate "Props reference" section.

```mdx
<Unstyled>
  <table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
    <thead>
      <tr>
        <th className="text-left">Prop</th>
        <th className="text-left">Type</th>
        <th className="text-left">Default</th>
        <th className="text-left">Required</th>
        <th className="text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code>label</code>
        </td>
        <td>
          <code>string</code>
        </td>
        <td>—</td>
        <td>Yes</td>
        <td>
          Visible text. Used as a11y baseline when no aria-label is provided.
        </td>
      </tr>
      <tr>
        <td>
          <code>icon</code>
        </td>
        <td>
          <code>IconType</code>
        </td>
        <td>—</td>
        <td>—</td>
        <td>Optional leading icon.</td>
      </tr>
    </tbody>
  </table>
</Unstyled>
```

### Modes — 2 columns (Mode | Description)

Describes structural behavior only. No "When to use" column — that guidance belongs in `#### When to use` under Guidelines.

```mdx
<Unstyled>
  <table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
    <thead>
      <tr>
        <th className="text-left">Mode</th>
        <th className="text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code>split</code> (default)
        </td>
        <td>
          Two interactive areas: main button triggers the selected action,
          chevron opens the menu with the remaining items.
        </td>
      </tr>
      <tr>
        <td>
          <code>dropdown</code>
        </td>
        <td>Single unified button that opens a menu showing all items.</td>
      </tr>
    </tbody>
  </table>
</Unstyled>
```

### Variants — 2 columns (Variant | When to use)

```mdx
<Unstyled>
  <table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
    <thead>
      <tr>
        <th className="text-left">Variant</th>
        <th className="text-left">When to use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code>default</code>
        </td>
        <td>Primary actions — one per page section</td>
      </tr>
    </tbody>
  </table>
</Unstyled>
```

### Sizes — 2 columns (Size | Description)

Use visual/structural descriptions (height, padding, density). Avoid generic placement advice ("use in forms", "use in heroes") — that is guidance, not anatomy. Add component-specific notes where a size is unusual or has caveats.

```mdx
<Unstyled>
  <table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
    <thead>
      <tr>
        <th className="text-left">Size</th>
        <th className="text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code>sm</code>
        </td>
        <td>
          Reduced height and padding. Fits in dense surfaces like toolbars or
          inline table actions.
        </td>
      </tr>
      <tr>
        <td>
          <code>md</code> (default)
        </td>
        <td>Standard height and padding. The default for most contexts.</td>
      </tr>
      <tr>
        <td>
          <code>lg</code>
        </td>
        <td>
          Increased height and padding. Use sparingly — add a note if this size
          is uncommon for the specific component.
        </td>
      </tr>
    </tbody>
  </table>
</Unstyled>
```

### When to use — 2 columns (Situation | When to use F0X)

Only positive cases (when TO use). Never mix with negative cases.

```mdx
<Unstyled>
  <table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
    <thead>
      <tr>
        <th className="text-left">Situation</th>
        <th className="text-left">Use F0X when</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Persistent feedback tied to the current page</td>
        <td>The message must remain visible while working on the page</td>
      </tr>
    </tbody>
  </table>
</Unstyled>
```

### When not to use — 2 columns (Situation | Use instead)

Separate section, separate table. Never include these rows in the "When to use" table above. The "Use instead" cell must name a **concrete component** (e.g. `F0Dialog`) or an established pattern (e.g. "toast notification") — never abstract instructions like "use a simpler alternative".

```mdx
<Unstyled>
  <table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
    <thead>
      <tr>
        <th className="text-left">Situation</th>
        <th className="text-left">Use instead</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Transient confirmation after an action</td>
        <td>Toast notification</td>
      </tr>
      <tr>
        <td>Decision that blocks the workflow</td>
        <td>
          <code>F0Dialog</code>
        </td>
      </tr>
    </tbody>
  </table>
</Unstyled>
```

### Keyboard — 2 columns with `<kbd>` (Key | Action)

```mdx
<Unstyled>
  <table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
    <thead>
      <tr>
        <th className="text-left">Key</th>
        <th className="text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <kbd>Tab</kbd>
        </td>
        <td>Move focus to the next interactive element</td>
      </tr>
      <tr>
        <td>
          <kbd>Enter</kbd> / <kbd>Space</kbd>
        </td>
        <td>Activate the focused element</td>
      </tr>
      <tr>
        <td>
          <kbd>Escape</kbd>
        </td>
        <td>Close or dismiss</td>
      </tr>
    </tbody>
  </table>
</Unstyled>
```

Use `<kbd>` (not plain text) for key names — renders with styled key badges in Storybook.

---

## Utility Components

### DoDonts — simple

```mdx
<DoDonts
  do={{ description: "Correct usage example" }}
  dont={{ description: "Incorrect usage example" }}
/>
```

### DoDonts — with bullet list (`guidelines` array)

When you have multiple rules, use `guidelines` instead of a single `description`:

```mdx
<DoDonts
  do={{
    description: "Keep labels short and action-oriented",
    guidelines: [
      "Verb-first: 'Save changes', 'Add employee'",
      "Sentence case, no period",
      "Under 3 words when possible",
    ],
  }}
  dont={{
    description: "Avoid vague or long labels",
    guidelines: [
      "Don't use 'Click here' or 'Submit'",
      "Don't write full sentences as labels",
    ],
  }}
/>
```

### DoDonts — with visual example (`children`)

Use `children` when the rule is about a **visual property** (variant, color, layout, spacing) and the contrast between do and don't is immediately apparent from seeing the component. `children` renders above the description inside each card.

**When to use visual examples:**

- The rule involves choosing between variants (e.g. `warning` vs `critical`)
- The rule is about layout, spacing, or visual hierarchy
- Seeing the contrast makes the rule self-evident without reading

**When text alone is enough:**

- The rule is about copywriting (capitalization, phrasing, tone)
- The difference is not visually obvious from the component alone

**Import rule:** To render a component as JSX inside MDX, import it using a **relative path from the MDX file**, not from `@factorialco/f0-react`. Importing from the package alias causes a "Failed to fetch dynamically imported module" error in Storybook dev mode (circular reference).

```mdx
{/* Correct — relative path from the MDX file */}
import { F0Alert } from "../F0Alert"

{/* Wrong — causes module fetch error in Storybook */}
import { F0Alert } from "@factorialco/f0-react"
```

**Provider-dependent components (e.g. components that call `useI18n`):** These cannot be rendered as JSX directly in MDX — they require an `I18nProvider` (or similar) that is only present in Storybook's decorator chain. Rendering them inline produces a "must be used within a provider" runtime error.

Solution: create **dedicated stories with `tags: ["no-sidebar"]`** for each do/don't case, then use `<Canvas of={Stories.X} sourceState="none" />` as `children` in the DoDonts component. The stories run inside the full decorator chain, the `children` prop renders the Canvas output inside the card, and `sourceState="none"` hides the code toggle so the card looks like a visual preview:

```tsx
// In F0ComponentName.stories.tsx — add dedicated stories for DoDonts
export const DoDontDoCase: Story = {
  tags: ["no-sidebar"], // hidden from sidebar, accessible via Canvas in MDX
  args: {
    // props that illustrate the "do" scenario
  },
};

export const DoDontDontCase: Story = {
  tags: ["no-sidebar"],
  args: {
    // props that illustrate the "don't" scenario
  },
};
```

```mdx
{/* In the MDX file — use Canvas as children */}

<DoDonts
  do={{
    description: "Description of correct usage.",
    children: <Canvas of={Stories.DoDontDoCase} sourceState="none" />,
  }}
  dont={{
    description: "Description of incorrect usage.",
    children: <Canvas of={Stories.DoDontDontCase} sourceState="none" />,
  }}
/>
```

Full pattern with `children` + `guidelines`:

```mdx
import { F0Alert } from "../F0Alert"

<DoDonts
  do={{
    description: "Use the variant that matches the actual severity.",
    guidelines: [
      'variant="warning" — something may go wrong if not addressed',
      'variant="critical" — a problem has already occurred',
    ],
    children: (
      <F0Alert
        variant="warning"
        title="Company page inactive"
        description="Activate it before publishing so candidates can find you."
        action={{ label: "Activate now", onClick: () => {} }}
      />
    ),
  }}
  dont={{
    description: "Don't use a higher severity variant to draw attention.",
    guidelines: [
      'Don\'t use variant="critical" for tips or informational notices',
    ],
    children: (
      <F0Alert
        variant="critical"
        title="Company page inactive"
        description="Activate it before publishing so candidates can find you."
        action={{ label: "Activate now", onClick: () => {} }}
      />
    ),
  }}
/>
```

---

## Stories — Boolean Toggle for Optional Function Props

When a component has an optional callback prop (e.g. `onClose?: () => void`) that you want users to toggle on/off in Storybook Controls, use `control: "boolean"` in `argTypes` and interpret the value in the story's `render` function. Do NOT use `control: "function"` — it does not exist in Storybook.

**`argTypes` entry:**

```tsx
onClose: {
  description:
    "Optional callback. When provided, renders a dismiss button inside the alert.",
  control: "boolean",
},
```

**Story `render` function (interpret boolean → fn | undefined):**

```tsx
export const Default: Story = {
  args: {
    onClose: true, // boolean default — Controls shows a toggle
  },
  render: ({ onClose, ...args }) => (
    <F0ComponentName {...args} onClose={onClose ? fn() : undefined} />
  ),
};
```

This pattern lets the Controls panel show a simple toggle for the optional callback, while the component receives a real `fn()` (from `@storybook/test`) or `undefined` depending on the toggle state.

---

## Workflow — 4 Phases

### Phase 1: Analyze the component

1. Read `F0ComponentName.tsx` — extract all public props, variants, and JSDoc
2. Read `types.ts` — extract exported types
3. List all story exports from `[Name].stories.tsx` — these become `Stories.X` references in MDX
4. Note if `tags: ["autodocs"]` is present — because autodocs is enabled globally in `.storybook/preview.tsx`, removing the tag from meta alone does NOT disable it; you need an explicit `"!autodocs"` opt-out tag (see Phase 3)

### Phase 2: Write the MDX file

- Create `__stories__/[StoriesFilename].mdx` (filename matches stories file without `.stories`)
- Follow the Full MDX Template above
- Check the gold standard first: `F0Alert.mdx` (added in companion PR #3894)
- If a `controls.mdx` stub already exists: **delete it** after creating the full MDX — two MDX files cause duplicate sidebar entries

### Phase 3: Update the stories file

Remove `autodocs` from meta tags using `"!autodocs"` (required because this repo sets `tags: ["autodocs"]` globally in `.storybook/preview.tsx` — removing it from meta alone has no effect). Also add `"no-sidebar"` to stories that should be hidden from the sidebar but remain accessible via `<Canvas>` in MDX:

```tsx
// BEFORE
const meta = {
  title: "ComponentName",
  component: F0ComponentName,
  tags: ["autodocs", "stable"],
}
export const Default: Story = { ... }

// AFTER
const meta = {
  title: "ComponentName",
  component: F0ComponentName,
  tags: ["!autodocs", "stable"],  // !autodocs required to disable global autodocs
}
export const Default: Story = {
  // ⚠️ Do NOT add `tags: ["no-sidebar"]` to the FIRST exported story.
  // Storybook treats it as the "primary" story for the attached MDX and
  // propagates its tags to the `--documentation` entry, which would hide
  // the entire Documentation page from the sidebar.
  // Hide secondary variants instead (Variants, Sizes, IconVariants, …).
  ...
}
export const Variants: Story = {
  tags: ["no-sidebar"],           // safe: not the primary story
  ...
}
```

**Tag reference:**

| Tag            | Applied to           | Effect                                                                                |
| -------------- | -------------------- | ------------------------------------------------------------------------------------- |
| `"!autodocs"`  | Meta in stories file | Disables the auto-generated docs tab. Required when adding a manual MDX in this repo. |
| `"no-sidebar"` | Secondary story exports | Hides the entry from the sidebar. Use on stories embedded only via `<Canvas>` in MDX. **Never apply to the first exported (primary) story** — it propagates to the MDX `--documentation` entry and hides the whole page. |
| `"autodocs"`   | Meta in stories file | Auto-generates a docs tab. This is set globally — use `"!autodocs"` to opt out.       |

### Phase 4: Verify sidebar

After both files are created/updated, the Storybook sidebar should show:

```
Components/
└── ComponentName/
    └── Documentation   ← only one entry
```

Not:

```
Components/
└── ComponentName/
    ├── Documentation
    ├── Default         ← wrong: should be hidden with "no-sidebar"
    └── Variants        ← wrong: should be hidden with "no-sidebar"
```

---

## Validation Checklist

Before marking MDX as done:

- [ ] MDX file created, filename matches stories file (e.g. `Card.mdx` for `Card.stories.tsx`)
- [ ] Any pre-existing `controls.mdx` stub deleted
- [ ] `<Meta of={Stories} />` for standard components (or `<Meta title="..." />` for umbrella only)
- [ ] `"autodocs"` disabled via `tags: ["!autodocs"]` in stories meta (required — autodocs is globally enabled)
- [ ] Stories used only in docs have `tags: ["no-sidebar"]` — **except the first exported (primary) story**, which must NOT have `no-sidebar` (it propagates to the MDX `--documentation` entry and hides the whole Documentation page)
- [ ] No `<DocsNav />` and no manual navigation menu — Storybook has native right-side nav built from heading hierarchy
- [ ] No import of `DocsNav` in the MDX file
- [ ] No `---` dividers between sections — use heading hierarchy only
- [ ] No visible import block (`import { F0X } from "@factorialco/f0-react"`) — ImportBanner injects this automatically on every page
- [ ] No `## Purpose` section — the description immediately after `# ComponentName` already serves this role
- [ ] No `# Code` section — `<Controls>` in `## Anatomy` is the interactive props reference; a separate Code/Props section is redundant
- [ ] No top-level `## Usage` section — named examples live inside `## Guidelines` under `### Usage examples`
- [ ] Section order: Anatomy → Guidelines → Accessibility (three top-level ## sections)
- [ ] Modes / Variants are `###` inside `## Anatomy` — they describe structural forms, not usage guidance
- [ ] `### Sizes` is omitted unless the component has size-specific behavior not covered by system defaults — do not document sizes just because the prop exists
- [ ] `### Modes` / `### Variants` (inside `## Anatomy`) each have a Canvas of a story showing all options stacked, followed by a table
- [ ] `### Modes` table has only `Mode | Description` columns — no "When to use" (that belongs in Guidelines)
- [ ] If the component is generic (`F0Component<T>`), `### Behavior` documents the type parameter and the full typed callback signature
- [ ] `## Guidelines` contains `### Design best practices` with **When to use** (may include prose + Canvas per sub-case before the table), **When not to use**, **Do's and don'ts** (all as `**bold**`, not `####` headings — headings generate nav anchors), and `### Usage examples`
- [ ] **When to use** table covers ONLY situations not already illustrated by a Canvas in that section — do not repeat rows that duplicate what a Modes/Variants Canvas already shows
- [ ] Inside `### Usage examples`, scenario titles use `**bold**` not `####` headings — headings generate right-side nav anchors and clutter the menu
- [ ] All tables use `<Unstyled>` with HTML `<table>` (no raw markdown tables)
- [ ] All `<Canvas of={Stories.X} />` reference actually existing stories — never add a Canvas for a story that doesn't exist or whose title doesn't match what the Canvas shows
- [ ] "When to use" and "When not to use" are separate subsections with separate tables — never mixed
- [ ] "When not to use" rows in the "Use instead" column name a **concrete component** (`F0Dialog`) or established pattern ("toast notification") — never abstract instructions
- [ ] `<DoDonts>` used in Do's and don'ts subsection
- [ ] DoDonts `children` used only when the do/don't contrast is **semantically unambiguous** — a viewer must not be able to argue the "don't" example is valid. Text-only DoDonts are preferred when the distinction requires explanation.
- [ ] `### Content best practices` rules with textual examples use inline **Correct:** / **Incorrect:** bullets (no emojis), AND are paired with a `<DoDonts>` visual showing one representative good vs bad label
- [ ] `### Behavior` (under `## Guidelines`) only contains non-obvious runtime behavior specific to this component (async loading, polymorphic rendering, controlled/uncontrolled rules, ref typing). Section is omitted entirely if the component has no such behavior. No "Related components" section. Section is not renamed to "Code", "Patterns", or "Advanced".
- [ ] When restructuring an existing MDX file, valuable visuals/examples from the previous version are preserved (combined with new patterns when they serve different purposes — e.g. scannable text + visual reference) — **don't lose value when refactoring**
- [ ] Components rendered as JSX in MDX (e.g. inside `<DoDonts children>`) are imported via relative path (`from "../F0Component"`), never from `@factorialco/f0-react` (causes module fetch error in dev)
- [ ] Components that require a provider (e.g. `useI18n`) are NOT rendered as inline JSX in MDX — instead, dedicated stories with `tags: ["no-sidebar"]` are created and used as `<Canvas of={Stories.X} sourceState="none" />` inside DoDonts `children`
- [ ] `## Accessibility` included only when the component type requires it — complex interactive (required), simple interactive (only if non-obvious), static display (only for live region or icon meaning), layout/typography (omit entirely)
- [ ] Optional function props use `control: "boolean"` in `argTypes` + `render` function to interpret boolean → `fn()` or `undefined` (never `control: "function"`)
- [ ] No semicolons in `.tsx` import statements (oxfmt rule — does not apply to `.mdx` files)
- [ ] English throughout, no emojis

---

## Content Guidelines

- **English only**
- **Imperative** for instructions: "Use", "Avoid", "Ensure"
- **Present tense** for descriptions: "Displays", "Provides", "Enables"
- **Sentence case**, no trailing period on titles
- When writing Guidelines, research: Material Design, Carbon (IBM), Polaris (Shopify), Atlassian DS, Primer (GitHub)
