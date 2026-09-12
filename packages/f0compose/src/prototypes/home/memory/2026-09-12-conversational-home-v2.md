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

## Folded icon styling correction

Compared WidgetRail against PR 5510 head again. Restored its exact F0Button size lg / outline, original 56px rail with 8px gaps and padding, and right-14 preview offset. Removed the additional Edit icon from the folded strip. The previously requested global toggle remains on the left. Inspected browser screenshot of the folded two-widget rail; original large outlined buttons are visible. Typecheck and prototype checks pass. Hover preview renderer remains the current WidgetCard adapter; hover styling not browser-verified.

## Conversation controls and card strokes

Removed Play and conversation ellipsis from HomeNavbar. Moved the inline conversation close action into the controls immediately to the left of widget collapse. Existing side chat controls remain adjacent. Applied F0 border-secondary (neutral-10) to F0 cards within Conversation regions, including side chat, and upper task rows; custom conversation cards already use border-secondary.

Browser: opened a task, observed close x1160–1192 and collapse x1192–1224, both y12/32px; Play/options count zero. Closed it and verified Home greeting returned. Four briefing card borders measured 1px rgba(5,38,87,.06), matching secondary. Typecheck and 230-file prototype check passed.

## Eleven unified refinements — 2026-09-12

Applied on codex/home-unified, /private/tmp/f0-home-unified, serving localhost:5174.

- Removed Home Pinned section; renamed Hub to Tools, including its navigation tour copy.
- Reused HybridHome's 6a4dac7e1 suggestion slot/HomeSuggestion/data-writing behavior. Both report onboarding and ordinary landing suggestions live inside the input surface, send directly, and collapse on field focus. Retained permissions footer. Home briefing counts as a landing, including saved state.
- Native Edit widgets button now hugs content in a centered F0Box.
- Ask One starts a page-related prompt through existing startConversationWithContext and ReplyScript. Calendar, People, Files, Activity/Inbox and Preferences read the same mocked source records as the UI; remaining screens summarize available rendered page text. No model or external data integration added.
- Side conversation identity survives goHome's activeId clearing during module navigation. Keep One visible across module routes and sidebar category changes; Home closes it. Leaving Home does not accidentally open a blank panel.
- Common dark F0 secondary-hover background with no shadow for briefing cards and widget cards.
- Personal widget selection inherits Employees. Required rows have no Remove action; underlying readSelection includes inherited IDs even if omitted on save. Employee defaults remain editable in Employees. Inherited Communities suppresses duplicated central post.
- Activity starts with Needs you; removed redundant heading. Preferences uses native primary Tabs for Connections, Memory, Settings. Both screens have native Breadcrumbs with a working Home link.

Verification: QA only in 127.0.0.1 origin; user localhost onboarding untouched. Observed 216→168px composer shrink on field focus; report suggestion opens its existing follow-up directly, ordinary suggestion sends exact prompt directly. Preferences tabs all changed contents. Ask One generated contextual reply; Preferences→Activity and Calendar→Tools preserved visible conversation, Home closed it. Needs you checked with two items and no Activity heading. Edit widgets measured 119.65px inside 352px container. Personal had Required labels and no removal actions for Clock in/Events/Communities; Employees retained removal actions. Actual pointer hover (CUA drag-to) verified task and widget background rgba(15,46,87,.1), box-shadow none. Typecheck, 235-file prototype check, widget model regressions and diff check passed. No push/merge/publication.

## Six interaction refinements — 2026-09-12

- Animated the existing composer and suggestion slot; outside clicks restore suggestions while retaining drafts. Respect reduced motion for resizing.
- Employee widgets lead Personal and remain immovable/non-removable. Personal ordering now persists across built-in/custom widgets.
- Existing WidgetCard supports title-based pointer drag and Alt+arrow keyboard reordering, with no new visual component. Saving recognizes order-only changes.
- Restored opaque white widget surfaces with no hover shadow/darkening. Conversation hover styles remain scoped to conversation cards.
- Preferences now uses the canonical Page + PageHeader + primary Tabs + StandardLayout composition from F0 stories. PageHeader supplies the Home breadcrumb and Ask One action; its separate live-runtime switch is locally hidden to avoid duplicate entry points in this simulated prototype.
- Ask One starts a normal text message through the existing conversation renderer; removed the fabricated page metric context card. Replies still use mocked page data.

Verified in isolated 127.0.0.1 browser origin: input surface animates between 176/128px; suggestion hides on focus and reappears outside with the draft intact. Actual pointer drag moved Recruitment before My payslip, Save enabled, and reloading retained the order; employee cards remained first with dragging disabled. Widget pointer hover stayed rgb(255,255,255), shadow none. Preferences screenshot checked against F0 layout, all tabs navigated, breadcrumb returned Home, and Ask One produced the standard prompt/reply conversation. Typecheck, 235-file prototype check, widget ordering/storage regression tests and diff check passed. Other task's HomeNav/onboarding changes left untouched. No publication or push.

## Suggestions, contextual titles and dnd-kit — 2026-09-12

User selected dnd-kit after comparing three official examples. Enabled its three existing F0 dependencies in Composer's package manifest and import checks; retained the existing locked versions. Adapted WidgetEditor/WidgetCard with DndContext, SortableContext and DragOverlay: title-only pointer activation, six-pixel threshold, keyboard sorting, animated space, translucent origin, raised original widget, animated drop and Escape cancellation without closing the editor. Employee defaults are excluded from sortable targets. No new visual component and no F0 library modifications.

The report suggestion now records its exact label as a user message, shows the existing Thinking treatment and streams the introduction followed by the original F0 question. Routine starts share the same path. Interrupted initial workflow replies recover an answerable question on reload. Page chats display the saved contextual title instead of Ask One. Preferences and Activity use Page/PageHeader with the existing labeled AskFactorialAction beside the native header; Activity is full-width, starts Needs you and has no gear/ellipsis.

Browser verification: isolated 127.0.0.1:5194 fresh onboarding → report suggestion → visible user prompt + Thinking → one F0 question, original composer hidden; reopening from Recents after reload preserved the question. On 127.0.0.1:5174 checked Preferences labeled button, contextual chat title, Activity layout screenshot/default Needs you/no screen controls. Real pointer drag reordered widgets and Save persisted it; keyboard pickup/down displayed enlarged overlay (391.68px over 384px base), 0.25-opacity origin and transformed adjacent widgets. Escape kept the editor and canceled the drag. Typecheck, 236-file prototype check, widget model regressions and diff check passed. User localhost onboarding untouched. Parallel onboarding/generation edits preserved separately.
