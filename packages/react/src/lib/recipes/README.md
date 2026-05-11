# `lib/recipes/`

Reusable visual recipes of the F0 design system that **are not React
components**.

## What is a "recipe"?

A recipe is a small, named bundle of Tailwind classes that encodes a visual
pattern of the design system (e.g. a mention chip, a keyboard shortcut, an
inline badge). Recipes solve a specific problem:

> Some design system patterns must be reproduced both as React components
> _and_ as serialized HTML strings (for example inside a Tiptap editor that
> renders `<a class="...">` mention nodes). If the styles only lived inside a
> CVA variant of a component, the HTML-emitting surfaces would have to
> duplicate them by hand and the visual would silently drift over time.

A recipe gives every consumer — components, editors, ad-hoc HTML renderers —
the same single source of truth.

## When to add a recipe (and when not to)

Add a recipe **only** when **all** of the following are true:

1. The visual pattern is part of the design system (not a one-off layout for
   a feature).
2. The pattern needs to be applied from at least two different execution
   models — typically: a React component _and_ a non-React HTML serializer
   (Tiptap, markdown-to-HTML, server-rendered chat, …).
3. The pattern can be expressed as a static set of Tailwind classes (no
   props, no state, no compound variants). Anything dynamic should be a
   component or a CVA.

If you only need it from React, write a component or a `cva()` variant
instead — recipes are intentionally minimal.

## How to consume a recipe

```tsx
import { mentionClasses, mentionFocusableClasses } from "@/lib/recipes"

// In a React component (focus styling provided by focusRing()):
;<a href={href} className={mentionClasses}>
  @{name}
</a>

// In a Tiptap extension that produces raw HTML:
// (Combine with the legacy `mention` class so older stored content keeps
// working with CSS rules that target `a.mention` directly.)
Mention.configure({
  HTMLAttributes: { class: "mention" },
  renderHTML({ options, node }) {
    return [
      "a",
      {
        href: node.attrs.href,
        class: cn(options.HTMLAttributes.class, mentionFocusableClasses),
        "data-type": "mention",
      },
      `@${node.attrs.label}`,
    ]
  },
})
```

Recipes are also reused by component variants to keep things DRY:

```ts
// ui/Action/variants.ts
import { mentionClasses } from "@/lib/recipes"

export const actionVariants = cva({
  variants: {
    variant: {
      mention: cn(baseLink, mentionClasses),
      // ...
    },
  },
})
```

## Available recipes

- **`mention`** — inline chip used to reference an entity (person, team,
  project) inside running text. Used by `F0Link variant="mention"` and by
  the Tiptap Mention extension. Exposes two flavours:
  - `mentionClasses` — paint-only (no focus). For use inside F0 components
    that already provide focus through `focusRing()`.
  - `mentionFocusableClasses` — includes accessible focus styles. For raw
    HTML elements that live outside of F0 components (Tiptap, …).

## Rules

- **Token-first colors.** Recipes must use F0 color tokens (`bg-f1-*`,
  `text-f1-*`, `border-f1-*`, `outline-f1-*`). Never hardcode hex/rgb
  colors — that is the rule that absolutely cannot be broken, since color
  is what couples the recipe to the design system's palette/theming.
- **Plain Tailwind utilities for layout and typography are fine.**
  Spacing (`px-1.5`), radius (`rounded-xs`), font weight (`font-medium`),
  outline width (`outline-1`) etc. are stock Tailwind utilities that
  encode the recipe's visual identity. They are part of the recipe's
  contract — the rule is "no _hardcoded_ values" (e.g. `padding: 6px`),
  not "no Tailwind utilities".
- **Static classes only.** No conditional logic, no props. If you need
  variants, build a component or a `cva()`.
- **No JSX.** Recipes export `string`s (or `string[]`), not React nodes.
- **Documented.** Every recipe must explain in JSDoc (a) what visual pattern
  it encodes, (b) which surfaces consume it, (c) when to prefer the
  component over the raw recipe.
