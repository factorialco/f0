# Integration checkpoint — 2026-09-09

Base: factorialco/f0 PR #4085, `feat/f0compose`, commit 58712d4f99a7e2e2ae14cbc215f6a1923b32bb6e.
Integration branch: `codex/agent-entry-unified`.
Local checkout: `/Users/jonathan.centeno/code/f0-agent-entry-unified`.

## Included

- Navigation: company switcher, right-opening Help and personal menus, exclusive utility selection, imported Hub screens, full-width page canvas and aligned tabs.
- Personal agent: Ask Factorial header entry, contextual right panel, retained draft and conversation, original Home composer, approved icon motion and F0 field border/focus treatment.
- Home + Onboarding: completed phase 1 at `/p/home-v2`, default widgets, conversational customization, undo and persistent preferences/history. This remains a separate exploration, not a replacement for `/p/home`. Routine/report cocreation is outside phase 1.

Navigation and Personal agent changed the same canvas CSS. The integrated version retains the flat page geometry and Hub divider, removes the obsolete bottom-entry space and keeps the right-panel geometry. The imported Spending agent event opens the side panel when outside Home.

## Checkpoint workflow

Use this integration branch as the shared starting point for the next round. Keep independent iterations in separate working copies/branches; collect completed changes into the integration branch and verify combined behavior before updating PR #4085. Do not replace original working files wholesale: merge changes relative to the shared checkpoint.

Original explorations remain in `f0-agent-entry` (5176) and `f0-agent-entry-top-right` (5177). The combined preview runs on 5178, with independent browser storage. Existing browser preferences are not copied between ports.

## Verification

- TypeScript passes for the integrated app.
- Prototype checks pass for Home (186 source files) and Home v2 (6 source files).
- Browser: Organization and Training retain edge-to-edge geometry and tabs below the header. Hub divider and imported Training content remain present with the right agent panel open.
- Browser: typed agent draft survives closing/reopening. Marketplace hides the contextual panel and leaves no bottom strip. Original Home retains its widgets and composer.
- Browser: Home v2 loads with the three default widgets and shared agent artwork. Its phase-1 flows were independently verified by the owning task before this exact snapshot was copied.

All product data and agent responses remain mocked.

## Learning checkpoint — preserve the approved base

Read [the prototype-agent learning record](memory/2026-09-09-preserve-approved-base.md) before continuing the home proposal. The main route must preserve HomeCanvas, HybridHome and the original composer. HomeV2 remains a separate exploration.

## Original-home conversational configuration — 2026-09-10

The interview is now mounted in `/p/home` using the original conversationStore, ConversationView and unchanged HybridHome composer. It covers priorities → briefing preview → persistent widgets/undo → simulated routine draft → simulated report draft, including save/exit/resume and source review on return. HomeV2 remains untouched. See [verification and remaining limits](memory/2026-09-10-conversational-home-verification.md). All changes remain local on `codex/home-first-version`, served at http://127.0.0.1:5180/p/home.

## Structured home revision — 2026-09-10

The interview-first presentation above is superseded by the user's approved structured entry: direct Needs-you tasks, the original Communities post and an F0 birthday, then the follow-up panel (its placement was corrected below). English UI, first-entry-only generation, finite simulated sources review, Edit, and saved exchanges in the original Recents menu are now implemented. HybridHome is extended to dock the existing panel; it is not replaced. Routines and reports remain in the same conversational journey. See [the current decisions, verification and limits](memory/2026-09-10-structured-home-revision.md) before editing further. The separate agent has not been modified.

## Quality correction — current acceptance baseline

The previous verification was insufficient. Read [the correction and direct browser evidence](memory/2026-09-10-quality-correction.md) and follow [the mandatory project acceptance rules](AGENTS.md). Questions now replace the visible composer using the complete F0 clarifying panel; default payroll/candidates complement central news; shifts are available; task row spacing matches the original 8px. Do not repeat test completion in the user’s browser storage. Local URL remains http://127.0.0.1:5180/p/home.

## Guided home — latest agreed behavior

[Guided-home decisions and checks](memory/2026-09-10-guided-home.md) supersede the sequential home→routine→report interview. Home configuration updates one visible briefing and fixed widgets from multi-select follow-ups, with agent continuation in the same slot. Free text opens a new conversation; routines and reports have independent original conversations and drafts. Shared F0 Ask button, sticky greeting/sources/Edit.

## Widget rail and update feedback

Read [the latest verification](memory/2026-09-10-widget-rail-loading.md) and [PR48 reuse details](windows/rail-reference.md). Selection confirmation now shows finite skeleton/bot feedback. Widgets fold into a persisted icon rail and scroll in one column. Ask Factorial moved into the original widget header actions. The sticky greeting uses the canvas background.

Latest toolbar and widget-hover correction: see memory/2026-09-10-toolbar-hover-alignment.md (integrated preview on port 5181).

## Consolidation — 2026-09-10

Integrated original composer in Home content flow with the parallel module-slot correction: only Home reserves the composer slot. Preferences uses the existing side agent. Verified Home → Preferences → Home in isolated Chrome: no Home slot on Preferences, original composer restored on return. Frame-by-frame collapse/expand checks pass for questions and normal composer, with draft preserved. TypeScript and all 222 prototype files pass. PR #5510 targets feat/f0compose; no merge. Local generated symlink is environment-only and excluded.

## Independent widgets — 2026-09-11

The approved local iteration replaces Home's widget rail controls and toolbar Edit with a static widget column and a dedicated `?view=widgets` editor. Personal selection and employee defaults are separate drafts with Save/Discard. New widget reuses HybridHome, conversationStore and the existing F0ClarifyingPanel. The old chat-to-widget selection and New-chat collapse behavior are superseded. See [implementation and verification](memory/2026-09-11-widget-editor-plan.md). Local preview stays on port 5181; no push or merge performed in this iteration.


### Widget editor visual refinements

The editor now uses the native F0Dialog with opt-in embedded and compactInset behavior (4px top/right/bottom). The labeled header action opens One. Catalog rows compose F0 primitives without a collection enclosure. F0ActionBar accepts a positioned, non-scrolling anchor and portals inside it, keeping save/discard within the dialog keyboard scope. Preview scrolling belongs to an inner child. New component options and stories/tests live in packages/react; all changes remain local pending publication. See memory/2026-09-11-widget-editor-plan.md for measurements and validation limits.


Widget catalog refinements: selected items sort first and use ticks at rest; Add/Remove actions appear on pointer entry or keyboard focus. One now opens only through New widget in the editor, including when resuming an unfinished creation. Navigation and One share the composited F0 secondary background; Calendar and widgets continue using the same HybridHome One surface.
