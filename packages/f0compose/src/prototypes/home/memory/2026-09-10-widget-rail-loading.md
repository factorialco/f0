# Widget rail and update feedback

User approved: same canvas background for sticky greeting; finite skeleton/bot loading when applying selections; Ask Factorial as a widget header icon; collapsed widgets in a scrolling right rail like PR48.

Preserved base: Home/HybridHome, original conversation store, original NeedsYouItem, bot motion, WindowHeader/WindowPanel/maximized view. WindowStack gains only an opt-in vertical rail mode; Comms callers keep the old default.

Observed in browser on localhost:5180 QA origin:
- Confirming four widgets produced six skeleton blocks (two central, four widgets) and an animated-bot working indicator. After the finite transition both disappeared.
- Four widgets used one 448px column with 1356px content in a 988px scroll area, instead of growing into multiple columns.
- Collapse all left icon buttons and expanded the central home. Reload retained all four collapsed widgets. Restoring one, maximizing payroll and asking from its header opened the original central conversation with its context.
- Large Ask buttons were removed from widget bodies. Original source amounts remain 3400 gross minus 900 deductions equals 2500 net.
- Sticky greeting uses existing f0c-canvas-surface instead of the white card token.

Engineering process: the automatic approval review rejected a broad scripted multi-file rewrite as too risky over uncommitted work. It was not executed. Preserved `/tmp/home-before-rail-snapshot` and `/tmp/home-before-rail.patch`, then applied small explicit patches and inspected/tested the result. No reset, checkout overwrite, merge, commit or publication.

Simulated timing and records only. These changes do not modify the separate agent runner. Upstream provenance and bounded adaptations are recorded in windows/rail-reference.md.

Final checks: TypeScript passes, prototype checker passes 211 files, guided-home transition regressions pass, whitespace diff check passes. Browser error log returned no errors. Final deliverable at 127.0.0.1:5180 shows four saved widgets in a 448px rail, no remaining skeletons, and computed greeting background rgb(252,252,252). Hover preview geometry was reused from the PR; click restore, collapse, reload, maximize, contextual Ask and close were directly exercised. The hover traversal itself was not independently exercised by the browser automation.
