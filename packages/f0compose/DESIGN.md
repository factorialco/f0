# DESIGN.md — f0compose / Factorial

> Stitch-format design memo for the Factorial design system (f0). Loaded by the
> `f0-design` skill. Defines tokens, type scale, layout, density and
> anti-patterns specific to f0compose prototypes.

---

## Identity

Factorial is HR and Finance software for SMBs. The product is dense, admin-heavy
and used daily — design serves the work, not the brand. Compare with:
- **NOT** Linear (sleek minimalism).
- **NOT** Notion (playful warmth).
- **YES** Stripe Dashboard (information-rich, calm, opinionated typography).

Visual rhythm: a balanced grid of cards, tables and KPIs. Restrained color, used
to signal status. Generous whitespace at page level, tight density inside data
collections.

## Audiences

| Audience | Density | Tone | Primary actions |
|---|---|---|---|
| `admin` | High | Direct, terse | Bulk, configure, export, approve |
| `manager` | Medium | Supportive | Approve team requests, view rollups |
| `employee` | Low | Friendly | View self-service, request, attest |

Match density and copy to the audience tag in the prototype's `meta`.

## Color tokens (f1-*)

f0 ships its tokens via Tailwind under the `f1-` prefix. Never bypass.

### Foreground (text)
- `text-f1-foreground` — primary body text
- `text-f1-foreground-secondary` — supporting text, meta, hints
- `text-f1-foreground-positive` — success
- `text-f1-foreground-warning` — caution
- `text-f1-foreground-critical` — error
- `text-f1-foreground-info` — informational

### Background
- `bg-f1-background` — surface (cards, sidebars)
- `bg-f1-background-secondary` — page background
- `bg-f1-background-hover` — hover row/menu
- `bg-f1-background-selected` — active item in nav
- `bg-f1-background-{positive,warning,critical,info}` — semantic surfaces
- `bg-f1-background-{positive,warning,critical,info}-secondary` — softer

### Border
- `border-f1-border` — primary border
- `border-f1-border-secondary` — divider between rows
- `border-f1-border-hover` — hover state for clickables

## Typography scale

f0 has TWO typography components:

### F0Heading
- API: `<F0Heading content="..." variant="..." as="..." />`
- `variant`: `"heading"` (sections) | `"heading-large"` (page title)
- `as`: `"h1"` | `"h2"` | `"h3"` | `"h4"` for the rendered HTML element
- Use ONE `heading-large` per page (the main page title)

### F0Text
- API: `<F0Text content="..." variant="..." />`
- `variant`: `"body"` (default) | `"small"` (captions) | `"label"` | `"description"` | `"code"` | `"inverse"`

NEVER `<h1>`, `<h2>`, `<p>` directly. Always F0Heading / F0Text.

NEVER children: it's `content="..."`.

## Spacing

Tailwind defaults map cleanly. Reference values:

| Use | Class |
|---|---|
| Page padding | `p-8` |
| Card padding | `p-4` |
| Section gap | `gap-6` |
| Card gap (intra-section) | `gap-4` |
| Form field gap | `gap-3` |
| Inline element gap | `gap-2` |
| Tight cluster | `gap-1` |

## Components — canonical use

### Page-level layout

The framework wraps every prototype in `FactorialShell` (ApplicationFrame +
canonical Factorial sidebar). DO NOT include either yourself.

Inside the prototype, the standard wrapper is:

```tsx
<div className="flex flex-col gap-6 p-8">
  <header>...</header>
  <section>...</section>
  ...
</div>
```

### Page header

```tsx
<header className="flex items-center justify-between">
  <div className="flex flex-col gap-1">
    <F0Heading content="Period title" variant="heading-large" as="h1" />
    <F0Text content="Subtitle / metadata" variant="body" />
  </div>
  <div className="flex items-center gap-2">
    <F0Button label="Secondary" variant="outline" />
    <F0Button label="Primary action" variant="default" />
  </div>
</header>
```

### KPI row (admin dashboards)

```tsx
<section className="grid grid-cols-4 gap-4">
  <F0BigNumber label="Active" value={148} />
  <F0BigNumber label="Pending" value={12} />
  <F0BigNumber label="Errors" value={2} />
  <F0BigNumber label="Total" value={162} />
</section>
```

### Card-grouped content

```tsx
<F0Card title="Section title">
  <div className="flex flex-col gap-4 p-4">
    {/* content */}
  </div>
</F0Card>
```

### Status badges

`Chip` only supports `default` / `selected`. For semantic status:

```tsx
<span className="inline-flex items-center justify-center rounded-full bg-f1-background-positive px-2 py-0.5 text-xs text-f1-foreground-positive">
  Paid
</span>
```

### Empty states

ALWAYS:

```tsx
<OneEmptyState
  emoji="📭"
  title="..."
  description="..."
  actions={[{ label: "...", onClick: () => {} }]}
/>
```

NEVER an empty list with no fallback.

## Anti-patterns

These are immediate fails. The skill `f0-design` rejects them on review.

1. **Purple gradients** in headers, buttons, page bg.
2. **Centered everything.** Centering is for empty states only.
3. **Generic Inter <14px.** Avoid sub-readable body text.
4. **`text-gray-500`** anywhere. Use `text-f1-foreground-secondary`.
5. **Empty cards** with no content and no `OneEmptyState`.
6. **Inline arrays >3 items** passed to data components. Use `@/fixtures`.
7. **Decorative icons** without label or aria-label.
8. **Raw `<h1>` / `<p>`.** Always F0Heading / F0Text.
9. **AI slop "Hero" sections** with gradient text and gradient buttons.
10. **Uniform rounded corners** at radius >= 1.5rem on everything.
11. **Lucide-react** or any icon library other than f0's own.

## Density audit checklist

For each prototype, ask:

- [ ] Does the page fit in one viewport at 1440×900 without scrolling
      (ideal for admin)? If not, can the secondary content be deprioritized?
- [ ] Are clickable elements >=32px tall (admin) or >=40px (employee)?
- [ ] Are tables compact enough to show >10 rows above the fold?
- [ ] Is the primary CTA visually the strongest element on the page?
- [ ] Does the empty state preempt confusion ("nothing here, you can…")?

## When this doc disagrees with code

Code wins. Update DESIGN.md to match — never the other way around. If a token
or component is documented here that doesn't exist in `generated/registry.json`,
file a bug.
