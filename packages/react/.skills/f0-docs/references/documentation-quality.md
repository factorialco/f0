# Documentation Quality Reference

The difference between a stub and a gold-standard MDX file. Use this reference to evaluate quality during authoring and review.

---

## Quality Levels

| Level          | Description                                                                                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Stub**       | Auto-generated or empty. `autodocs` tag, no manual content. Unacceptable for any shipped component.                                                                                           |
| **Acceptable** | All four sections present, all props documented, no broken Canvas references. Meets the minimum bar.                                                                                          |
| **Good**       | WHEN→THEN rules in Guidelines, DoDonts, keyboard table for interactive components, 3+ named examples.                                                                                         |
| **Gold**       | Everything in Good, plus: decision table (when to use vs. alternatives), component relationships, a11y notes per prop, real Factorial copy in examples. See `F0Alert.mdx` and `F0Button.mdx`. |

---

## Section-by-Section Quality Criteria

### Opening description (1–2 sentences)

| Mediocre                   | Gold                                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "A button component."      | "Triggers an action or navigates to a destination. Supports multiple visual variants, sizes, icons, async loading states, and optional counter badges." |
| Mentions "the user"        | Describes what the component does and when — no actor needed                                                                                            |
| Vague ("displays content") | Specific about capability and context                                                                                                                   |

**Format rule:** `[Component] [what it does] [in what context/when].` — no mention of "the user".

**Cross-reference rule:** If a clear alternative exists, name it in the description. Example: "For transient feedback use a toast; for decisions that block the workflow use `F0Dialog`."

---

### Props table (unified)

One table only — replaces both the old anatomy table and the old props reference table. Never create two separate tables.

| Mediocre                                                | Gold                                                             |
| ------------------------------------------------------- | ---------------------------------------------------------------- | --------- | ----------- |
| Separate anatomy table + separate props reference table | Single table: Prop \| Type \| Default \| Required \| Description |
| Generic descriptions ("The title prop")                 | Explains behavior ("Main heading. Sentence case, no period.")    |
| Missing optional props                                  | All public props listed; optional show `—` in Required column    |
| Type column omitted                                     | Full type string in `<code>` — e.g. `"info"                      | "warning" | "critical"` |
| No default values                                       | Default column with actual defaults or `—`                       |
| Missing `dataTestId`                                    | All props including testing props                                |

Place after `<Canvas>` and `<Controls>` — first thing visible after the component description.

---

### Variants table

| Mediocre                             | Gold                                                                                         |
| ------------------------------------ | -------------------------------------------------------------------------------------------- | ----------- | ----------- |
| Only lists variant names             | 2–3 columns: Variant                                                                         | Description | When to use |
| "default — the default variant"      | "default — Filled primary button — Primary action on a page or section, one per layout area" |
| Omits edge variants (neutral, ghost) | All variants documented, including promotional and destructive                               |

---

### States section

Include only when the component has meaningful interactive states (hover, focus, disabled, loading). Omit entirely for static display components.

| Mediocre                         | Gold                                                             |
| -------------------------------- | ---------------------------------------------------------------- | ----------- | ---------------- |
| Lists states with no explanation | 3 columns: State                                                 | Description | Visual indicator |
| "Disabled — disabled"            | "Disabled — Action unavailable — Reduced opacity, not clickable" |

---

### When to use and When not to use

**Always two separate sections with separate tables.** Never mix positive and negative cases in the same table.

**When to use** — 2-col table (Situation | When to use F0X):

- Only positive cases: when the component IS the right choice
- One row per valid scenario

**When not to use** — 2-col table (Situation | Use instead):

- Only negative cases: when something else should be used
- Name the alternative explicitly (`F0Dialog`, toast, inline field error)

| Mediocre                                                    | Gold                                                                 |
| ----------------------------------------------------------- | -------------------------------------------------------------------- |
| Mixed table: first row is "use it", rest are "don't use it" | Two separate sections, two separate tables                           |
| "Instead of" column that mixes use/don't-use rows           | "When to use" table has only positive cases                          |
| No alternatives named                                       | Every "When not to use" row names the correct alternative            |
| Generic ("use for important messages")                      | Specific ("Persistent feedback tied to the current page or section") |

---

### Content guidelines

Every component that renders text props needs copy rules:

| Mediocre                              | Gold                                                                              |
| ------------------------------------- | --------------------------------------------------------------------------------- |
| "Write a clear title"                 | "Sentence case, no period. State the situation clearly ('Company page inactive')" |
| No DoDonts                            | DoDonts with real Factorial-style copy in both panels                             |
| DoDonts with generic placeholder text | DoDonts with specific, realistic examples from the product                        |

**DoDonts rule:** The `do` panel shows correct copy or usage. The `dont` panel shows a common mistake. Both panels must use realistic Factorial-style content — not Lorem Ipsum, not "Example text".

**Visual children rule:** When using `children` in DoDonts (for visual contrast between variants), the contrast must be **semantically unambiguous** — a viewer must not be able to argue that the "don't" example is a valid choice. If there is any reasonable argument for the "don't" being acceptable, use text-only DoDonts with a `guidelines` array instead. The semantic meaning must be the contrast, not just visual appearance.

Use `guidelines` array (multiple bullet points) when there are more than two copy rules.

---

### Accessibility section

| Mediocre                                         | Gold                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------ |
| "Accessible by default"                          | Named ARIA attributes, screen reader announcements, focus behavior             |
| Keyboard table present with no detail            | Keyboard table uses `<kbd>` tags, every key maps to a specific action          |
| Missing keyboard table for interactive component | Keyboard table required for: buttons, inputs, dialogs, selects, toggles, menus |
| No notes on loading/disabled states              | Explicit note if loading or disabled state is not announced to screen readers  |

**Component type → a11y requirements:**

| Component type                        | Required in a11y section                                                 |
| ------------------------------------- | ------------------------------------------------------------------------ |
| Button / link                         | Keyboard table, sr-only note for icon-only, `aria-busy` note for loading |
| Input / form field                    | Error state announcement, `aria-invalid`, label association              |
| Dialog / modal                        | Focus trap, `aria-modal`, focus restoration on close                     |
| Select / dropdown                     | Arrow key navigation, `aria-expanded`, `aria-selected`                   |
| Toggle / checkbox                     | `aria-checked`, `aria-pressed`, keyboard activation                      |
| Static display (Alert, Badge, Avatar) | Screen reader announcement, decorative icon note                         |

---

### Props reference table

> **Deprecated concept.** Do not create a separate "Props reference" table. The unified Props table (Prop | Type | Default | Required | Description) at the top of the document is the single source of truth. A second table is redundant and must be removed.

---

### Examples section

| Mediocre                               | Gold                                                                          |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| Single "Basic usage" example           | 3+ named examples covering distinct use cases                                 |
| Example title is generic ("With icon") | Example title names the real scenario ("Async action with automatic loading") |
| No prose before `<Canvas>`             | 1–2 sentences explaining when to apply the pattern                            |
| tsx snippet is minimal                 | tsx snippet is realistic, uses real Factorial-style props                     |
| Examples repeat the Overview Canvas    | Each example demonstrates something not covered elsewhere                     |

---

## WHEN→THEN Rules

Every behavioral rule in the component must be expressed as a WHEN→THEN statement. This format is:

- Parseable by automated tools
- Convertible to a test assertion
- Unambiguous for both machines and humans

### Two origins

**From code (infer without asking):**

Read conditional rendering in the source. Every `if`, ternary, and `&&` in JSX that changes what renders is a WHEN→THEN rule.

```tsx
// Source
{loading && <Spinner />}
{href ? <a href={href}> : <button>}
```

→ WHEN `loading={true}` → THEN renders a spinner and disables interaction
→ WHEN `href` is provided → THEN renders as `<a>` element (screen readers announce "link")

**From creator (must ask):**

Factorial-specific behavior that is not visible in the component code — it lives in the product context.

Examples of creator-only WHEN→THEN rules:

- WHEN the subscription is expired → THEN this Alert appears at the top of every page with variant="warning"
- WHEN a bulk action completes → THEN this button enters loading state and shows the result count in the counter badge
- WHEN the form has unsaved changes → THEN the save button is always `variant="default"`, never ghost

---

## Component Relationships

Gold-standard MDX names the alternatives in the right places:

1. **Opening description** — cross-reference the most common alternative (1 sentence)
2. **When to use table** — use the "Instead of" column for alternatives
3. **When NOT to use** — name the correct component for each anti-pattern

Relations to document when they exist:

- Same category: `F0Alert` vs. toast vs. `F0Dialog` — when to use each
- Composition: `F0Button` inside `F0Dialog` — which props matter in that context
- Alternatives: `F0Button` vs. `F0Link` — which renders as `<a>` by default

Do not invent relationships. Only document relationships that are real and documented in the codebase or confirmed by the creator.

---

## Global Rules

These apply to every MDX file, no exceptions:

1. **No empty sections** — if a section has nothing to say, remove it
2. **Semicolons in imports are fine in MDX** — `oxfmt` only applies to `.ts`/`.tsx` files; MDX files are not processed by the formatter
3. **No markdown tables** — all tables use `<Unstyled>` with HTML `<table>`
4. **No invented content** — every prop, variant, and behavior must exist in the code or be confirmed by the creator
5. **No "the user"** — describe what the component does, not what the user does
6. **English throughout** — no Spanish, no mixed language, no emoji
7. **One unified props table** — Prop | Type | Default | Required | Description — never anatomy + props reference as two separate tables
8. **No DocsNav** — Storybook has native sidebar navigation; do not import or use `DocsNav`
9. **Import once** — `import { F0X } from "@factorialco/f0-react"` appears once as a tsx code block inside the Usage section, never duplicated
10. **When to use ≠ When not to use** — always two separate sections with separate tables, never mixed in one table
11. **Canvas must match its title** — only add a `<Canvas>` for a story that actually renders what the section title claims
