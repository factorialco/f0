---
name: f0-design
description: Always load when generating any UI inside f0compose. Enforces Factorial's design language: f1-* tokens, F0 / One components, density appropriate to admin/employee/manager audiences, and the visual rhythm of Factorial product screens. Pairs with f0-prototype.
---

# f0-design

The Factorial design system is **product design**, not brand design. Form
follows function. Density supports admin workflows. Accessibility is
non-negotiable.

## Source of truth

- `packages/f0compose/DESIGN.md` — tokens, type scale, spacing, layout
  patterns, anti-patterns. Read this first when starting.
- `packages/f0compose/generated/registry.json` — full component
  catalogue with props, variants, file paths.
- `packages/f0compose/generated/manifest.compact.json` — quick scan.
- `packages/f0compose/src/blocks/` — canonical scene compositions.

## Hard rules

### Color
- ONLY `f1-*` Tailwind classes:
  - `text-f1-foreground`, `text-f1-foreground-secondary`
  - `text-f1-foreground-{positive,warning,critical,info}`
  - `bg-f1-background`, `bg-f1-background-{hover,selected,secondary}`
  - `bg-f1-background-{positive,warning,critical,info}`
  - `border-f1-border`, `border-f1-border-secondary`
- NEVER raw colors: no `text-blue-500`, no `#abc`, no `text-gray-700`.
- NEVER gradients in headers (anti-pattern: "AI slop aesthetics").

### Typography
- Use `F0Heading` and `F0Text` for textual content. Never raw `<h1>`/`<p>`.
- F0Heading and F0Text take `content` (string), NOT children.
- F0Heading variants: `"heading" | "heading-large"`. F0Text variants:
  `"body" | "small" | "label" | "description" | "code" | "inverse"`.
- Hierarchy: ONE heading-large per page (the main title). Sections use
  `variant="heading"` with `as="h2"`.

### Layout
- Tailwind structural utilities only: `grid`, `flex`, `gap`, `p`, `m`,
  `w`, `h`. No custom CSS.
- Standard page padding: `p-8`.
- Standard inter-section gap: `gap-6`.
- Standard inter-card gap inside a section: `gap-4`.

### Iconography
- Only `@factorialco/f0-react/icons/{app,modules,ai}`. NEVER lucide.
- Inside cards, prefer no icon. Inside sidebars and action buttons,
  always pair with a label.

### Density
- `admin` audience → compact tables, dense headers, multi-column actions.
- `employee` audience → spacious, friendly, large CTAs, clear hierarchy.
- `manager` audience → middle ground; emphasize team data.

### Empty states
- ALWAYS use `OneEmptyState` for empty lists. Never an empty `<ul>`.
- Provide a clear primary action when applicable.

### Status badges
- For `positive`/`warning`/`critical`/`info`/`neutral` semantics, use a
  Tailwind `<span>` with `bg-f1-background-{semantic}` +
  `text-f1-foreground-{semantic}`. The `Chip` component only supports
  `default` and `selected` variants.

## Anti-patterns (combat AI slop)

- Purple gradients in headers.
- Centered everything.
- Generic Inter at body size below 14px.
- Empty cards without `OneEmptyState`.
- Inline arrays of 4+ items in JSX (use `@/fixtures`).
- `text-gray-500` (use `text-f1-foreground-secondary`).
- Decorative icons without semantic value.
- Raw `<h1>` / `<p>` without `F0Heading` / `F0Text`.

## When in doubt

Read `DESIGN.md`. If a question isn't answered there, ask the user; don't
guess. The visual quality of f0compose prototypes is a function of the
discipline of every decision.
