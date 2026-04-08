# MDX Authoring Reference

**This is Step 4 of the f0-docs workflow.** Complete Steps 1–3 first (source analysis, creator questions if needed, quality target decision) before writing any MDX. Skipping analysis leads to missing props, broken `<Canvas>` references, and empty guidelines.

Everything needed to write the MDX file: template, table templates, utility components, stories update, and validation checklist.

---

## Meta Tag — Which Pattern to Use

### Standard component (single stories file) — use in 95% of cases

```mdx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/addon-docs/blocks";
import * as Stories from "./F0ComponentName.stories";
import { DoDonts } from "@/lib/storybook-utils/do-donts";

<Meta of={Stories} />
```

### Umbrella component (multiple story files) — F0DataChart, OneFilterPicker pattern

Use `<Meta title="..." />` only when the component spans multiple story files:

```mdx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/addon-docs/blocks";
import * as BarStories from "./F0ComponentBar.stories";
import * as LineStories from "./F0ComponentLine.stories";
import { DoDonts } from "@/lib/storybook-utils/do-donts";

<Meta title="F0ComponentName/Overview" />
```

> Semicolons in imports are fine in MDX — `oxfmt` only applies to `.ts`/`.tsx` files.
> Do NOT import `DocsNav` — Storybook has native sidebar navigation with anchors; a secondary nav component is redundant and confusing.

---

## Full MDX Template

Filename must match the stories file: `F0Button.stories.tsx` → `F0Button.mdx`

**Heading hierarchy:**

- `#` — component title. Visible on page but does NOT appear in Storybook's right-side nav.
- `##` — main sections (Anatomy, Guidelines, Variants, Usage). Appear in the right-side nav.
- `###` — subsections (Design best practices, Content best practices, Behavior).
- `####` — sub-subsections (When to use, When not to use, Do's and don'ts).

**No `---` dividers between sections.** Storybook renders them as visible horizontal rules that clutter the page. Use heading hierarchy alone to separate sections.

**No import banner needed.** The `ImportBanner` component in `.storybook/DocsContainer.tsx` automatically injects the `import { F0ComponentName } from "@factorialco/f0-react"` block into every docs page via a portal. Do NOT add a visible import block in the MDX.

````mdx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/addon-docs/blocks";
import * as Stories from "./ComponentName.stories";
import { DoDonts } from "@/lib/storybook-utils/do-donts";

<Meta of={Stories} />

# ComponentName

[1–2 sentences fusing definition + purpose. What the component is, what it does, and when it belongs in the UI. Cross-reference alternatives: "For transient feedback use a toast; for blocking decisions use `F0Dialog`".]

## Anatomy

<Canvas of={Stories.Default} />

<Controls of={Stories.Default} />

## Guidelines

### Design best practices

#### When to use

<!-- 2-col table (Situation | Use F0X when) — positive cases only. See Table Templates. -->

#### When not to use

<!-- 2-col table (Situation | Use instead) — negative cases only. Name the alternative. See Table Templates. -->

#### Do's and don'ts

<DoDonts
  do={{
    description: "[Example of correct copy or usage]",
  }}
  dont={{
    description: "[Example of incorrect copy or usage]",
  }}
/>

### Content best practices

- [Copywriting rule: capitalization, punctuation, tone]
- [Length limit or character guidance]

### Behavior

- [Layout or responsive behavior]
- [State transitions]

## Variants

<!-- Include only if the component has a variant prop with 2+ values -->
<!-- Canvas of a Variants story if one exists, then a 2-col table (Variant | When to use) -->

<Canvas of={Stories.Variants} />

<!-- Variants table — see Table Templates section below -->

## Usage

### [Named scenario]

[1–2 sentences describing the use case and when to apply it.]

<Canvas of={Stories.WithFeature} />

```tsx
<F0ComponentName label="Example" feature={true} />
```

### [Another scenario — only include if the Canvas actually shows what the title claims]

<Canvas of={Stories.Advanced} />

```tsx
<F0ComponentName
  label="Advanced"
  variant="outline"
  onClick={() => console.log("clicked")}
/>
```
````

---

## Table Templates

All tables use `<Unstyled>` with native HTML — never raw markdown tables (they break in dark mode).

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

Separate section, separate table. Never include these rows in the "When to use" table above.

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

Full pattern with `children` + `guidelines`:

```mdx
import { F0Alert } from "../F0Alert";

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

## Workflow — 4 Phases

### Phase 1: Analyze the component

1. Read `F0ComponentName.tsx` — extract all public props, variants, and JSDoc
2. Read `types.ts` — extract exported types
3. List all story exports from `[Name].stories.tsx` — these become `Stories.X` references in MDX
4. Note if `tags: ["autodocs"]` is present — it must be removed in Phase 3

### Phase 2: Write the MDX file

- Create `__stories__/[StoriesFilename].mdx` (filename matches stories file without `.stories`)
- Follow the Full MDX Template above
- Check the gold standards first: `F0Alert.mdx` and `F0Button.mdx`
- If a `controls.mdx` stub already exists: **delete it** after creating the full MDX — two MDX files cause duplicate sidebar entries

### Phase 3: Update the stories file

Remove `autodocs` from meta tags and add `"!dev"` to stories used in documentation:

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
  tags: ["stable"],           // autodocs removed
}
export const Default: Story = {
  tags: ["!dev"],             // hidden from sidebar, still usable in Canvas
  ...
}
```

**Tag reference:**

| Tag            | Applied to              | Effect                                                                                   |
| -------------- | ----------------------- | ---------------------------------------------------------------------------------------- |
| `"!dev"`       | Story export            | Hides story from sidebar in dev mode. Still accessible via `<Canvas>` in MDX.            |
| `"no-sidebar"` | `<Meta>` in an MDX file | Hides the MDX page from the sidebar. Used by legacy stubs — not needed in new MDX files. |
| `"autodocs"`   | Meta in stories file    | Auto-generates a docs tab. Remove when adding a manual MDX — they conflict.              |

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
    ├── Default         ← wrong: should be hidden with "!dev"
    └── Variants        ← wrong: should be hidden with "!dev"
```

---

## Validation Checklist

Before marking MDX as done:

- [ ] MDX file created, filename matches stories file (e.g. `Card.mdx` for `Card.stories.tsx`)
- [ ] Any pre-existing `controls.mdx` stub deleted
- [ ] `<Meta of={Stories} />` for standard components (or `<Meta title="..." />` for umbrella only)
- [ ] `"autodocs"` removed from stories meta
- [ ] Stories used in docs have `tags: ["!dev"]`
- [ ] No `<DocsNav />` — Storybook has native sidebar navigation
- [ ] No import of `DocsNav` in the MDX file
- [ ] No `---` dividers between sections — use heading hierarchy only
- [ ] No visible import block (`import { F0X } from "@factorialco/f0-react"`) — ImportBanner injects this automatically on every page
- [ ] Component title (`# ComponentName`) followed immediately by a 1–2 sentence fused description (definition + purpose + cross-references)
- [ ] `## Anatomy` section contains `<Canvas of={Stories.Default} />` + `<Controls of={Stories.Default} />` — no separate Props section
- [ ] `## Guidelines` contains `### Design best practices` with `#### When to use`, `#### When not to use`, `#### Do's and don'ts` subsections
- [ ] All tables use `<Unstyled>` with HTML `<table>` (no raw markdown tables)
- [ ] All `<Canvas of={Stories.X} />` reference actually existing stories — never add a Canvas for a story that doesn't exist or whose title doesn't match what the Canvas shows
- [ ] "When to use" and "When not to use" are separate subsections with separate tables — never mixed
- [ ] `<DoDonts>` used in Do's and don'ts subsection
- [ ] Components rendered as JSX in MDX (e.g. inside `<DoDonts children>`) are imported via relative path (`from "../F0Component"`), never from `@factorialco/f0-react` (causes module fetch error in dev)
- [ ] No semicolons in `.tsx` import statements (oxfmt rule — does not apply to `.mdx` files)
- [ ] English throughout, no emojis

---

## Content Guidelines

- **English only**
- **Imperative** for instructions: "Use", "Avoid", "Ensure"
- **Present tense** for descriptions: "Displays", "Provides", "Enables"
- **Sentence case**, no trailing period on titles
- When writing Guidelines, research: Material Design, Carbon (IBM), Polaris (Shopify), Atlassian DS, Primer (GitHub)
