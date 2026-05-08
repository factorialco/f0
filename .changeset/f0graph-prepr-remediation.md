---
"@factorialco/f0-react": patch
---

Fixes a set of F0Graph pre-PR issues:

- Consolidates duplicate F0GraphEdge implementation paths to the canonical pattern implementation.
- Unblocks TypeScript by aligning search input props, ref typing, timer id typing, and F0Button usage.
- Removes synthetic MouseEvent creation in detail panel overflow actions and adds coverage for visible/overflow action callbacks.
- Ensures F0GraphEdge rerenders when style-driving props change while preserving no-op memo behavior.
- Makes search fly-to timer cancellation deterministic for rapid selections and unmount cleanup.
- Aligns detail panel resize clamp max width with aria-valuemax using one shared constant.
