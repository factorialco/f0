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

## Reference and typography correction — 2026-09-12

Jonathan requested reuse of list elements from PR #4085, 12px focus/permissions/community metadata, and a non-interactive Pro label plus circular usage indicator (no percentage). This supersedes the pending usage choice above.

Queried PR #4085: head `26410e3ab0f85ccf699b29fe50d80c7f739f139a`, branch `feat/f0compose`. Read its NeedsYouItem directly with git show; verified our existing NeedsYouItem has no diff from that head. Briefing now renders that existing row, not custom button/text rows.

F0Text `small` maps to core `sm`, 0.75rem (12px). Applied to focus and footer; See more uses the same F0 small token. F0Card gains opt-in `descriptionSize="small"`, with base as unchanged default and a Storybook example. This retains the native card/avatar/header rather than recreating its layout.

Re-exported the existing RadialProgressChart as F0RadialProgressChart; no new chart implementation. Pro is ordinary F0Text, followed by the existing chart in a 16px F0Box, with the F0 categorical-2 blue token and round end caps. Accessible meter conveys 250/1000; no visible percent, link, button or usage dialog remains.

Environment: f0compose's local dependencies now resolve f0-react to this isolated checkout, with independent built dist; icons and Tailwind CSS were generated here. Original parallel checkout not modified. Vite/dts required NODE_OPTIONS=--max-old-space-size=8192 after the default heap was exhausted. Successful library build, icons build, CSS build, app typecheck, prototype check (230 files) and diff check.

Browser measured exact 12px for focus, Eleanor metadata, permission text, See more and Pro. Ring measured 16×16px with blue rgb(85,150,246), round arc caps and zero interactive descendants. Confirmed the same footer in the side panel and task opening through the PR's original row. No onboarding answers entered in the user origin.

## White tasks and original widget rail correction

Upper briefing rows now opt into the F0 primary white surface; other NeedsYouItem usages retain their default. Your focus label is 12px/600 and Edit focus uses Neutral. Browser measurements verified all three.

User explicitly requested PR 5510's original folding, and the global toggle to the LEFT of widgets. Read PR head 1fe586b153549bde6f88fb6106135a017408cf98; existing WidgetRail matches that implementation. Removed the duplicated rail adaptation from StaticWidgets. StaticWidgets now delegates to original WidgetRail, adding a rendering adapter for current WidgetCard/custom catalog and preserving original window-stack callers. Shared collapse persistence accepts custom widget IDs. Existing hover timers, measured edge clamping and preview handling remain in WidgetRail. The toggle sits in the adjacent left column.

Verified in isolated browser origin: expand/collapse, collapsed state survives reload, toggle right edge x896 equals widget column left edge x896. Screenshot inspected expanded layout. Typecheck, prototype static check and diff whitespace checks pass. Browser API has no hover action; pointer transfer and hover visual behavior were not exercised this turn. User origin onboarding state untouched. No push or merge.
