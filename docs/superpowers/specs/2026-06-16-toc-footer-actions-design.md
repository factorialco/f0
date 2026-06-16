# F0TableOfContent — Footer Actions

**Date:** 2026-06-16
**Component:** `packages/react/src/experimental/Navigation/F0TableOfContent`
**Status:** Approved design, pending implementation plan

## Goal

Allow consumers to render one or more action buttons in a **footer** pinned at the
bottom of the `F0TableOfContent` panel — e.g. a "+ Add section" button. The footer
sits outside the scrollable item list and stays visible while the list scrolls.

## Background

The component already supports **per-item** actions via `TOCItem.otherActions`
(a hover dropdown rendered by `ItemDropDown`). What is missing is a panel-level
action affordance that is not attached to any individual item.

Earlier exploration considered placing actions inline within the `items` array at
root level, but that would entangle the new feature with the existing
drag-and-drop, search-filter, and reorder pipeline (all of which assume every entry
is a `TOCItem`). A footer placement avoids all of that: the actions live outside the
list entirely, so `TOCItem` and the DnD/search/reorder code remain untouched.

## Non-goals

- No drag-and-drop / reordering of footer actions.
- No actions on child (nested) items beyond the existing `otherActions`.
- No inline (interleaved) action rows within the item list.
- No changes to the existing per-item `otherActions` API or behavior.

## Public API

Add a new optional prop to `TOCProps` (`types.ts`) and a supporting action type:

```ts
export type TOCAction = {
  label: string
  onClick: () => void
  icon?: IconType
  disabled?: boolean
}

export interface TOCProps {
  // ...existing props unchanged
  /** Action buttons pinned in a footer at the bottom of the panel */
  actions?: TOCAction[]
}
```

- `actions` is an **array**, rendered stacked, so consumers can show a primary
  "+ Add section" plus optional secondary actions.
- When `actions` is `undefined` or empty, no footer renders (zero layout impact).

## Layout

The root `<nav>` in `TOCContent` is already a flex column. The new footer is a third,
`shrink-0` region placed **after** the `ScrollArea` so it stays visible while the
list scrolls:

```
┌────────────────────┐
│ title / search      │  shrink-0   (existing header)
├────────────────────┤
│ item                │
│ item              ▲ │  ScrollArea (flex-1, scrolls)  (existing list)
│ item              ▼ │
├────────────────────┤
│ + Add section       │  shrink-0   (NEW footer)
└────────────────────┘
```

The footer renders in both the `scrollable` and non-`scrollable` branches of
`TOCContent`, always as a sibling after the list container so it is never clipped by
the scroll area.

## Components

### `TOCFooter` (new, own file)

Following the folder's one-component-per-file convention (`Item/`,
`ItemSectionHeader/`), add a small presentational component:

- **Input:** `{ actions: TOCAction[] }`.
- **Renders nothing** when `actions` is empty.
- Renders each action as a full-width `ButtonInternal` (`variant="ghost"`), with the
  optional leading `icon`, `disabled` wired through, and `onClick` bound.
- Sizing/padding matches item rows (`h-9`, horizontal padding consistent with the
  list container, e.g. `px-3`).
- A top divider (`border-t border-f1-border-secondary`) separates the footer from
  the list. Footer container is `shrink-0`.

### `TOCContent` (modified)

- Destructure the new `actions` prop.
- Render `<TOCFooter actions={actions} />` after the scroll-area / list container in
  both layout branches.

## Data flow

`actions` flows straight from `F0TableOfContent` props → `TOCContent` → `TOCFooter`.
There is no internal state, no interaction with `sortableItems`, `filteredItems`,
`expandedItems`, or any DnD ref/state. `onReorder` output is unaffected (footer
actions are triggers, not content).

## Accessibility

- Footer buttons are real buttons (`ButtonInternal`), keyboard-focusable and
  operable with Enter/Space by default.
- `disabled` actions expose the disabled state via `ButtonInternal`.
- The footer is inside the `<nav aria-label={title}>` landmark, consistent with the
  rest of the panel.

## Testing

- **Unit / render:** footer renders one button per action; renders nothing when
  `actions` is empty/undefined; `onClick` fires; `disabled` prevents `onClick`;
  icon renders when provided. (Existing `__tests__/utils.test.ts` is util-focused;
  add component coverage as appropriate to the folder's testing conventions.)
- **Stories:** add a "With footer actions" story to
  `__stories__/F0TableOfContent.stories.tsx` (single action and multiple actions),
  and verify the footer stays visible with a long, scrollable list.
- **Docs:** document the `actions` prop wherever `TOCProps` is documented (MDX).

## Files affected

- `types.ts` — add `TOCAction`, add `actions?` to `TOCProps`, export `TOCAction`.
- `index.tsx` — destructure `actions`, render `TOCFooter` in both layout branches,
  re-export `TOCAction` from the public surface alongside existing type exports.
- `TOCFooter/index.tsx` (new) — footer component.
- `__stories__/F0TableOfContent.stories.tsx` — new story.
- Tests + MDX — coverage for the new prop.

## Open questions

None. Defaults confirmed: `actions` is an array; footer is pinned below the scroll
area (always visible).
