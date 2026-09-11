# Conversational home — isolated second version

User: Jonathan. Agent: GPT-6. Date: 2026-09-12.

Working copy: `/private/tmp/f0-home-conversational-v2`, branch `codex/home-conversational-v2`.
Preview: http://localhost:5174/p/home. QA used http://127.0.0.1:5174/p/home separately.

## Scope and integration

The requested home belongs to factorialco/f0, not the standalone factorial-composer project used as the task's initial directory. The latter was pulled from main and was already current. This monorepo uses the legacy `packages/f0compose/src/prototypes/home` layout and has no composer lifecycle/version CLI. A separate branch and working copy are the new version; do not migrate this home into standalone Composer.

Snapshot commit `6a4dac7e1` includes the existing uncommitted widget iteration from `/private/tmp/f0-home-navigation-integrated`. The change after that snapshot is this task's work. For eventual integration, apply only this task's subsequent commit to the combined branch; do not replace the original home directory or reapply the entire widget snapshot. No push or merge performed.

## Implemented

- Activity and Preferences use F0 icon buttons next to Home; Files follows Reports.
- The existing FactorialAgentIcon adapter now renders F0OneIcon everywhere it is consumed. No new icon artwork or motion implementation.
- A conversational introduction, compact white task group, and native F0Card community preview replace the previous sectioned briefing. The original Post opens in F0Dialog.
- Your focus opens the existing priorities follow-up directly. Existing setup and conversation persistence remain in place.
- Both HybridHome (home, contextual side panel, expanded panel) and OnePromptBar (other One surfaces) use the shared PermissionsNote footer. Permissions and usage open native F0 dialogs.
- The original controlled F0 textarea and draft are retained. The composer no longer carries an initial suggestion chip; native actions sit at the bottom, with footer outside the white input surface.

## Pending choice

The circular usage graphic is available internally as RadialProgressChart but is not exported by this F0 version. Jonathan was asked whether to expose/reuse it or keep text. No reply received during this iteration. Current UI uses native F0Button `Pro · 25%`; usage is explicitly sample data (250/1000). No new F0 library component was created or exported.

## Consulted

Read local source, types and stories for F0OneIcon, F0Box, F0Button, F0Text, F0Link, F0Card, F0Dialog; inspected existing HybridHome's F0 textarea composition. Also inspected F0AiChat's disclaimer, CreditsPopover and RadialProgressChart to assess reuse. Storybook MCP was unavailable in this tool session; the local F0 source and stories are present and were used directly. Skills: f0-prototype, f0-design, factorial-f0; systematic-debugging for observed type/property issues and interaction failures.

## Verified

- TypeScript passes; prototype checker passes 230 files; git diff whitespace check passes.
- Existing homeSetup and widget-editor model regression suites pass.
- Browser at 1280×720: header navigation opens Activity, Preferences and Files; One sidebar displays the same footer and native One logo.
- Close/reopen sidebar preserves a typed draft. Permissions and usage dialogs display their detail and close.
- Task opens a contextual conversation and Recents entry. Enter sends free text to an original conversation; a simulated response renders and the input clears.
- Edit focus goes directly to priorities; choosing personal tasks updates the label and briefing and persists across reload. Cancel restores the regular composer.
- Community preview opens the original complete post. Existing Edit widgets dialog remains usable.
- User-facing origin's onboarding was not completed with QA answers; tests were confined to the separate QA origin.

## Limits

The reference is adapted to existing F0 public APIs; task icons are standard F0 button icons rather than new colored icon tiles. Widgets from the parallel iteration remain visible. Mobile widths, all widget creation branches, and other modules were not re-tested. Existing Preferences onPressEnter and Files collection key warnings were observed in unchanged code; no claim of a warning-free entire app. AI responses, permissions and usage remain simulated.
