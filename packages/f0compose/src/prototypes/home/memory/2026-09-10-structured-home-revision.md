# Structured entry and original follow-up — 2026-09-10

## Accepted direction

The user's correction supersedes the previous interview-first presentation. Home must already show useful content: Needs your attention, complete Communities posts, a birthday. Keep the original Clock in / Communities defaults on the right and preserve any saved widget preferences. No nested cards around complete existing task/publication components. Questions belong above the original composer. All new UI copy is English. Edit asks “What would you like to change?”; conversations belong in the existing Recents menu. No separate History or Resume configuration controls.

## Applied, not just proposed

- Home.tsx still uses HybridHome + HomeCanvas. The original composer stays mounted; it now hosts the existing ClarifyPanel above it. The original WindowStack and approvedAgentMotion.js are untouched.
- Reused the complete local ClarifyPanel adaptation of One's clarifying question panel. Consulted the F0 component source/stories and actual loaded package declarations. The upstream panel is internal to F0AiChat, not a public standalone export; mounting another provider would replace the required chat. Removed its gradient and isolated embedded keyboard handling from textarea and widget events.
- Pending questions render only in the dock. Completed questions and user responses remain in ConversationView. Cancel dismisses the question; Home exits; Edit and Recents retain agreed state and drafts.
- Central briefing reuses NeedsYouItem and exports/reuses the existing Communities Post composition. Added the complete F0 Celebration component, with separately identified sample birthday data. No extra F0Card around these pieces. Routine/report drafts retain their own appropriate card composition.
- First generation uses progressive sections at 450/1000/1550 ms; the follow-up waits until 1800 ms. Per-profile localStorage key f0compose:home:generated-v1 records completion. Reduced motion skips generation. Subsequent entries start with all sections and only a finite 1900 ms source review.
- Header combines the existing animated Factorial bot, personal greeting, Checking in / Up to date · Checked now, compact source logos and disclosure. Factorial, Google Calendar and Notion are simulated sources. No external accounts are connected. Irene's implementation was not found by name; reconstruction follows the user's supplied screenshot and existing approved motion, not a claim of copying Irene's source.
- Google and Notion logo assets are vendored from simple-icons/simple-icons develop/icons/google.svg and notion.svg. Factorial uses the existing local logo.
- Recents is available for both mock profiles, uses its original rows/filter/menu behavior and retains stored conversations. Automatic home reviews without a user exchange are excluded from the list, without deleting their records. New setup exchanges receive the title Personalise my home. Older saved messages/titles retain their original language and content.
- English finite-state interview supports priorities, one-off vs ongoing focus, widget add/remove/undo, simulated routines and editable reports. Original payroll Ask Factorial stays contextual and now replies in English; €3,400 gross − €900 deductions = €2,500 net.

## Direct verification

- Actual checkout /Users/jonathan.centeno/code/f0-home-first-version, branch codex/home-first-version, HEAD 78067a6dd186e1cbb7ec7f5d3918d8dbf98691f9. No push, merge, commit or publication.
- Browser at http://127.0.0.1:5180/p/home: original right widgets; direct task/publication composition; welcome, finite source status, Edit; no History/Resume controls.
- Selected a priority via radio + Submit; question/answer appeared in original transcript. Enter in the original textarea advanced the interview without the panel intercepting it.
- Added payslip + time off to the original stack; checked English labels and amounts; Undo restored Clock in + Communities.
- Drafted monthly routine, changed condition by free text, saved simulation, continued to Expenses report. Changed threshold 15 -> 20: sample 18% variance changed from alert to Within threshold. Saved simulation, returned Home, reopened exact conversation from Recents and verified saved 20% rule and routine conditions.
- Switched employee/admin using original Preferences UI; Recents is available for employee. Restored admin after verification. Existing employee widget preferences were preserved.
- Used localhost:5180 as an isolated test origin, with the same confirmed server, without erasing the user's 127.0.0.1 storage. First snapshot showed Preparing your home with both original right widgets and no follow-up. Next observation showed all three generated sections and follow-up. Reload: three sections, zero entrance animation classes, no Preparing status. Source review completed. Dismiss question and Sources disclosure worked; no browser error logs in this isolated run.
- Browser screenshots at 1280×720 checked normal home and question layout. Long content scrolls within the central region above the pinned composer; long option lists scroll within the follow-up panel.
- pnpm tsc passed. pnpm check src/prototypes/home passed (195 files). git diff --check passed. A bounded /tmp/home-revision-check.ts exercised focus scope, mixed widget remove/add, undo, routine condition/save, report threshold/frequency/bounds, Edit and retained agreements.

## Failures and reusable rules

- A broad file-tail rewrite was rejected by automatic approval review for risk to unrelated uncommitted code. It never ran. Inspected the exact function boundaries and used assertion-checked replacements; no truncation or unrelated deletion. Future changes must target bounded functions rather than replace everything after a text marker.
- The actual runtime resolves F0 from another checkout via node_modules symlinks. Read loaded dist types as well as local stories. Never modify those shared dependencies.
- Running tsc from the monorepo root used the wrong command context. Run this old Composer's commands from packages/f0compose. Prototype check needs its temporary IPC socket; sandbox failure was resolved with authorised escalation.
- Plain prettier defaults introduced unrelated semicolon churn. Restored existing no-semicolon formatting; do not reformat the repository with default settings.
- New previews must scroll to their beginning; scrolling a long composed preview to its end hides the relevant tasks. Landing always starts at the greeting. Original non-home streaming scroll behavior is preserved.
- Automatic home reviews are not saved exchanges for Recents. Otherwise every return floods the history with indistinguishable entries.

## Limits and agent incorporation

This is a visual prototype with a bounded scripted interview, sample data and browser-local persistence. It has no language model, live integrations, real routine execution or real monitoring. Reports and routines are editable simulated drafts; arbitrary requests outside supported intentions receive a scoped fallback. Shared post reaction controls retain the original prototype behavior. Historical Spanish conversations were not rewritten or deleted.

This learning is documented in project memory and linked from the mandatory integration context. The separate agent/harness being built in parallel was NOT modified; documentation is not equivalent to incorporating or evaluating these rules in that agent. That remains separate work.
