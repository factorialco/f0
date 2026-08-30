---
schema_version: 1
title: Motion reorder callbacks must preserve non-reorderable items
problem_type: logic-error
language: ts
runtime: node
stack_tags: [react, motion, reorder, f0]
severity: high
module: one-data-collection
component: SortAndHideList
date: 2026-08-20
tags: [controlled-state, drag-and-drop, ordering, regression-testing]
related_components: [packages/react/src/patterns/OneDataCollection/visualizations/collection/Table/components/SortAndHideList/SortAndHideList.tsx]
symptoms: [Dragging a movable row removes fixed row IDs from the persisted order, A locked middle row moves to the end after the next settings render]
root_cause: wrong-api
resolution_type: code-fix
applied_count: 0
validated: true
last_validated: 2026-08-20
status: active
graduated: false
confidence: 8
---

## Problem

A Motion `Reorder.Group` can contain ordinary list elements alongside
`Reorder.Item` children. Its reorder callback represents the registered
reorderable children, not necessarily every value in the controlled source
array. Persisting that callback payload as the complete order can silently drop
fixed rows.

## Symptoms

- Dragging any movable row causes non-reorderable IDs to disappear from saved
  settings.
- On the next render, IDs absent from the saved order fall to the end, so a
  supposedly locked row moves indirectly.

## What didn't work

- Rendering fixed rows as plain `li` elements prevented direct dragging, but it
  also excluded them from Motion's registered reorder values.
- Persisting the callback payload unchanged assumed it was a full snapshot of
  the controlled array.

## Solution

Treat the callback as an ordering of movable rows only. Validate that it
contains the expected movable count, then merge those rows back into the
original array while preserving every fixed index.

```ts
const reorderedMovable = next.filter(isMovable)

if (reorderedMovable.length !== current.filter(isMovable).length) {
  return current
}

let movableIndex = 0
return current.map((item) =>
  isMovable(item) ? reorderedMovable[movableIndex++]! : item
)
```

Cover a fixed middle row, not only a fixed first row: leading slices can hide
the truncation by keeping the fixed item outside the sortable settings array.

## Why this works

The movable subset supplies the user's intended relative order, while the
current controlled array remains authoritative for membership and fixed
positions. A partial callback can therefore never erase or indirectly move a
non-reorderable item.

## Prevention

- When a drag library mixes registered and unregistered children, verify
  whether callback values are a full collection or a movable subset.
- Never persist a reorder callback as complete state unless membership and
  identity have been validated.
- Add a regression with a fixed item between two movable items and assert both
  the resulting order and complete membership.

## History

- 2026-08-20: Captured while adding controlled column locks to F0
  OneDataCollection tables.
