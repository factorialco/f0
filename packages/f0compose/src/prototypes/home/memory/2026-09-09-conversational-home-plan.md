# Conversational home on the approved base

Authorized target: /Users/jonathan.centeno/code/f0-home-first-version, codex/home-first-version, checkpoint 78067a6, http://127.0.0.1:5180/p/home. Preserve all pre-existing uncommitted changes. No pull from the unrelated Composer repository, push, merge or publication.

## Implementation contract
Home → HybridHome + HomeCanvas, original composer, conversationStore and ConversationView remain the only conversation path. WindowsColumn/WindowStack/WindowsMenu remain the widget path. No HomeV2 imports. Existing approved agent artwork and motion are reused unchanged.

First slice: agent opens a real persisted conversation with one question, and typed text from the original composer answers it. Then preview a composed briefing, adjust it, pin/unpin existing windows, undo, pause and resume. Extend that same thread to editable routine and report drafts, with explicit simulated confirmation. Returning home reviews mock sources for a bounded interval and shows a briefing in the original conversation renderer; prior threads remain in Recents.

Use profile-specific conversation metadata for agreements, structured message snapshots for previews, and a narrow event bridge to the existing window actions. No model calls or actual automation integrations are introduced. All actions remain local simulations.

## Sources and F0
Read local f0-prototype, f0-design, DESIGN.md, F0 component patterns; F0Box, F0Button, F0Card, F0TagStatus types and stories. Read original question/streaming code. PR #48 verified at a1954434: inspected NeedsYouFocus and WidgetListItem. Reuse the already adapted RecruitmentWindow/DocumentsWindow and their upstream data; preserve original task and Communities components. Do not copy upstream framework helpers.

## Observable acceptance
- Original composer accepts free answers; each question and answer remains visible in history.
- Briefing content changes with priorities; permanent vs one-off scope is explicit where ambiguous.
- Right widgets change during interview, can be undone, and survive reload.
- Pause/reload/resume retains stage and decisions.
- Routine/report draft visibly changes before confirmation; no real execution claims.
- Returning home shows bounded source review and a briefing, with history accessible.
- Payroll Ask Factorial still reaches original conversation with matching figures.
- Browser journey and screenshot comparison, app TypeScript and prototype checks.

This is local project memory, not a modification of the separate agent under development.
