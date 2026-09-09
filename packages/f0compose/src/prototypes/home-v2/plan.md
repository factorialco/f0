# Home v2 — personal agent onboarding

Quick visual exploration requested by Jonathan: a contextual chat landing, persistent widgets, and conversational setup for routines and reports. Separate /p/home-v2 preserves /p/home. This older f0compose has no version CLI; a separate registered prototype is its supported equivalent.

Journey: useful home → configure agent → choose daily focus → choose delivery time → select home widgets → preview and activate → refreshed home → inspect report or routine. Setup is skippable and editable. Browser-local storage preserves confirmed choices only. All content and responses are explicitly simulated; no agent or automation executes. Verify activation, optional widget selection, report opening, refresh and original route.

Provenance: GPT-6; triggering messages: “Puedes hacer una exploracion rapida a modo prototipo de lo que te imaginas?” / “Nueva”.

Main update attempted; aborted because FrameProvider and lockfile conflict with the existing branch. Original base retained to preserve working prototype.

## Conversational iteration — 2026-09-09

Applied in place after explicit request “Creala sobre el que ya tenias hecho”. Continuous Spanish conversation with Juan: priorities → generated sample → confirmation/refinement → live widgets → routine proposals/confirmation → monitoring and reports/confirmation. Choices and free text both append to the transcript. Unscripted custom topics remain explicit pending proposals, not fabricated executable automations. No morning/daily schedule for the home update. Every return reveals a contextual update with reduced-motion support, without discarding the setup transcript. Pause/resume stores stage, selections, history and unsent input. Routine/report pages show proposed vs confirmed status. Restart demo is a separate recoverable test-data action with confirmation. New storage key keeps the older exploration's saved data intact. External original-home modifications are untouched.

Validation: exercise summary refinement, right-hand widget creation, pause/reload/resume, routine and report confirmation, repeated return with no new changes, original route, compile and prototype checks.

## Replacement — contextual header and component-based interview

Replaces the previous v2 UI in place, authorized by “Suena bien! Puedes hacer una propuesta con esta que hemos hablado en modo prototipo? Puedes eliminar la anterior version”. No separate Juan version remains registered. The /p/home base and other ongoing work remain untouched. New storage namespace prevents the previous interview from being shown.

Header: existing approved personal-agent motion, no proper name, contextual greeting that compacts after the first exchange. First message: explains the starting assumption (manager persona), offers a compact visual Needs you + Communities proposal, and asks what is missing. Composer remains at the bottom of the central column. No initial suggestion list. Conversation records text, component snapshots and questions. Refinements distinguish “Solo ahora” from “Habitualmente”. The reviewed visual brief becomes the returning chat landing. Only after sample review can the user pin components to the persistent rail. Existing routines/reports/pausing continue.

Reference read: factorialco/factorial-composer PR #48, head a195443436423c374df591ed4c1e64f6624a8760; v3 NeedsYouFocus, CommunicationPost and TeamStatusWidget. Adapted their task-group, author/post/count and team-status compositions to the local F0 primitives. No claim of importing those source widgets unchanged: their dependencies belong to another Composer version. The requested screenshot informs icon/header/composer placement.

Prototype limitations: bounded topic matching (pending tasks, team, Communities, budget) and scripted data; unrecognised subjects are explicitly pending definition. No real tasks are approved, reports sent or agents executed.

Verified in browser: initial visual composition and approved animation; budget-only refinement for “Solo ahora” leaves the default return brief unchanged; “Habitualmente” persists budget-only preference; pin budget; pause/reload/resume; routine and monitoring confirmation; immediate navigation to Reports during response animation still commits the confirmation; return greeting; restart demo. TypeScript and all five prototype source checks pass. Browser error log empty. Kept the first question short so it fits above the composer with the compact two-card proposal.

## Phase 1 — usable defaults and persistent personalisation

Authorized by “Perfecto, puedes empezar!”. Reuses Brief.tsx and the previously reviewed PR #48 compositions. Adds WidgetRail.tsx as orchestration around that existing renderer. No original Home, navigation, shell, or library files touched.

Default rail: pending tasks, team availability, Communities. Personalise controls add the four supported blocks, remove, and undo removal at the previous position. Task preview expands to all tasks; Communities expands to its post; team/task actions continue the central conversation. Explicit widget requests work from the chat during and after setup. Brief topic preferences remain separate; “Solo ahora” affects only the example and “Habitualmente” changes subsequent return briefs. Unknown topics do not create invented widgets. Progress, draft, scope-choice intent, preferences, widget selection and history persist in localStorage under home-v2-personal-agent-phase1. This phase ends at “Guardar mi home”; routines/report cocreation remains future work.

Browser verification: all 3 defaults; remove Communities and undo; add budget by chat; remove Communities by chat; reload and verify both; temporary budget-only brief vs habitual budget-only brief; save home; open team availability from its widget into chat. TypeScript and prototype checks pass. Scripted data, bounded Spanish topic matching; no real agent execution or production actions.
