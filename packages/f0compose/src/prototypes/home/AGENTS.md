# Home prototype — acceptance rules

Read INTEGRATION.md and memory/2026-09-10-quality-correction.md before editing.

- Work only in the explicitly selected checkout, branch and server. Preserve HybridHome, the original composer/store/navigation, approved bot animation and original window stack. Do not substitute HomeV2.
- Reuse complete F0 components and existing compositions. Read their source, types and stories before adapting. Document compatibility changes; do not invent a look-alike from separate controls.
- A question replaces the visible composer. Never show two simultaneous answer surfaces. Free text belongs inside the F0 question. Cancel restores the original composer and its draft without recording a fake answer.
- Central updates and fixed widgets have distinct purposes. Check for duplicated facts/content; defaults must complement the briefing. Pinning Communities must remove the duplicate central post.
- Preserve original task row spacing. Compare the rendered base, including padding owned by child components, before adding wrapper gaps.
- Verify the actual journey, not just compilation: fresh entry, existing saved state, pending-question reload, keyboard and free text, cancel, Edit, widget changes and undo, visible routine/report edits, save and return through Recents.
- Run browser QA in an isolated origin/storage. Never leave the user's interview completed by test answers. Deliver the user's initial question unanswered unless they answered it themselves.
- Inspect screenshots and ask whether the experience makes sense: no duplicate content, no competing inputs, no hidden confirmation, sensible density, coherent values and visible consequences of edits.
- Record observed results and untested limits. Passing technical checks alone is not completion. Every correction needs a relevant regression check.
- All data, source reviews, routines and reports are simulated. No push, merge or publication without authorization.

These rules govern work in this project. Writing them does not update a separate agent or its runner.

Widget rail acceptance: folding is distinct from removing and must survive reload. Keep right widgets in one vertically scrolling column; preserve Comms defaults. Verify loading both while active and after completion, and save agreements before any simulated delay. Use the existing canvas surface for sticky headers, not the white widget surface. Ask Factorial belongs in the original widget header action slot.

## Guided home decision — supersedes transcript-style home setup

Home setup is a live canvas plus agent continuation and F0 follow-up, not a growing central transcript. Priorities and widgets support multiple choices in one submission. Keep just one rendered briefing and do not regenerate it per answer. The original store still preserves agreements. Free composer text starts a fresh original conversation. Routines and reports start separate original conversations with visible drafts and Recents entries; do not auto-chain them into required home setup. Keep the home greeting/sources/Edit sticky. Use the shared AskFactorialAction F0 component for widget and sidebar entry.

Home toolbar: Edit and the global right-panel toggle belong together in the top toolbar. Hover previews must stretch to their container, sit 8px beside their anchor, and use measured height for edge clamping. Verify pointer transfer, short-window scrolling, and toolbar access when widgets overlay the canvas.

Widget layout changes: verify both the follow-up and original composer stay centered on their content destination after collapse and expansion. Home composer must belong to the content flow. Do not position it by chasing measured coordinates. Verify every animation frame, not only settled positions.
