# Independent widget editor

Approved: edit current local Home in codex/home-navigation-integrated, port 5181. Reuse F0, no publication in this local review stage.

- Remove Home context/Edit and widget collapse/maximize/close controls. Keep chat navigation and original HybridHome.
- Use existing experimental Widget (header.link supports a Delete icon), F0Box layout, Tabs, OneDataCollection list and F0ActionBar light. Installed F0Widget is unavailable; Widget is the documented installed equivalent, without a compatibility copy. The prototype-only utility reference restores original F0ActionBar responsive utilities and F1SearchBox icon padding missing from the old compiled CSS.
- Edit widgets opens ?view=widgets with Personal / Employees (admin). Draft selection is isolated; Save applies both scopes, Discard restores both. Custom widgets remain in the catalog after removal from layout.
- New widget reuses HybridHome, conversationStore and the complete existing F0ClarifyingPanel. Gather topic, audience/context, presentation and name. Commit a custom catalog entry only on final confirmation. No model invocation or real data; content is simulated.
- Verify add/remove, search, scope isolation, Save/Discard, reload, empty state, chat independence, guided creation, cancellation and sidebar geometry in isolated localhost storage.

Consulted: local Widget source/stories/types, F0Box source/stories/types, Tabs source/stories, F0ActionBar source/stories/types, F0Button stories, OneDataCollection list/actions/fullHeight source/stories, original ClarifyPanel and provenance. Skills: f0-prototype, f0-design, factorial-f0, factorial-skills, factorial-skill-tracking. Decision-first-development consulted; approved detailed direction allows implementation.

## Verification

Observed in an isolated in-app browser at localhost:5181, separate from the user's 127.0.0.1 origin:
- Home has no Home/Edit context toolbar or per-widget collapse/maximize/close controls. A single Edit widgets button opens the full editor.
- Search filters the catalog; custom widget added only after topic, context, format and custom name confirmation. Preview shows a simulated metric for the selected topic.
- Save confirmation appears; saved custom selection survives reload. Removing and discarding restores the selected widget. Removing all selected widgets shows the F0 empty state.
- Employees changes persist through reload and leave Personal unchanged. New chat preserves selected Home widgets.
- Unfinished creation resumes after reload. Cancel restores the original composer and creates no additional catalog entry. Questions and composer are mutually exclusive.
- Visual review with sidebar open and closed at 1280x720. Widget editor reuses the installed F0 list row density; content uses existing local examples, not the screenshots' literal example text. Communities preview reuses the existing single Post composition instead of its full feed.

Technical checks: TypeScript, legacy prototype checker, guided Home/routine/report regression script, and widget catalog/scope regressions. No real data or model call; free-text definitions use a simulated preview. Employee defaults are simulated in the admin editor, not pushed to employee accounts. No external publication in this local review stage.

Skill attribution for any later PR update: factorial-f0, f0-prototype, f0-design, systematic-debugging. Existing legacy Composer rejects direct zod imports in prototypes, so catalog validation follows its existing plain TypeScript convention rather than changing framework policy.


## Visual refinement request

- Changed the bottom Edit widgets action to native F0Button outline/md; removed its dashed enclosing border. Browser verified native 32px height, borderless parent, and editor opens.
- Reduced the tabs wrapper inset from xl to xs, retaining the native Tabs inset. Browser screenshot verified the smaller left margin.
- Typecheck and the 230-file prototype check pass.
- Pending user decision: extend native F0Dialog options for 4px inset/embedded editor behavior and F0ActionBar for a preview anchor. Existing fullscreen Dialog uses inset-6, and ActionBar measures global #content; neither exposes the requested option. No F0 library modifications made.
- Catalog alternatives presented: compose F0 icon/text/button rows (closest visual match) or WidgetSimpleListItem (whole-row interaction, no labeled action slot). Existing catalog remains until selection.


## Approved visual refinement completed

User approved the recommended F0 row composition and extending existing F0 options. Catalog now uses F0Box/F0Icon/F0Text/F0Button rows with no collection enclosure; selected items omit Add. Native F0Dialog replaces the previous prototype frame. New opt-in embedded/compactInset/headerAction/closeDisabled props preserve existing defaults. Embedded dialog remains beside navigation and One. F0ActionBar anchor portals inside a positioned non-scrolling preview wrapper, with widgets scrolling in its child; this preserves the dialog keyboard focus scope and naturally centers through layout changes. No new replacement modal/action bar component.

Local dependencies and generated component registry were isolated from their preexisting shared symlinks, so building the local F0 changes does not alter the other source checkout. Local preview remains port 5181. Generated outputs are ignored; source changes remain uncommitted and unpublished.

Browser QA on isolated localhost:5181: measured modal inset exactly 4px top/right/bottom; bar horizontal center delta 0px with sidebar expanded, collapsed, and One open. Native modal radius/shadow visually inspected. Shift+Tab from New widget reaches Save changes; next Shift+Tab reaches Discard, Enter successfully discards. Save changes shows Changes saved and clears action bar. New widget opens original One question; cancelled during QA. User origin 127.0.0.1 inspected read-only to confirm successful updated render; user question left unanswered.

Quality Gate Results
- Format: PASS (2624 source files checked).
- TypeScript: PASS (F0 library and Home application).
- Lint: command PASS on affected component paths; installed oxlint reports zero configured rules, so this is not substantive lint coverage.
- Tests: PASS, 29 focused native component tests; prototype static check PASS (230 files).
- Code review: PASS after correcting anchor positioning implementation.
- Accessibility review: PASS after moving bar inside dialog focus scope; keyboard browser journey verified.
- Storybook documentation review: PASS, new APIs documented and examples authored; Storybook play functions not executed.
- Test coverage review: PASS; mobile-specific embedded regression remains optional, desktop is verified.
- git diff --check: PASS.

No GitHub push, merge or publication performed.


## Shared background and catalog feedback

Applied authorized follow-up with existing F0 components only (no new library modifications): catalog groups added widgets first for the active scope, shows a tick at rest, and reveals Add/Remove on pointer entry or keyboard focus. Action width is reserved to avoid shifting titles. Search preserves grouping. Secondary F0 Tabs removes the active underline without custom tab controls.

Navigation, canvas and One now use the same F0 secondary background composited over neutral-0; because neutral-10 is translucent, using the opaque base avoids cumulative darkening through nested containers. Existing page styles were updated, including the late agent-entry.css override that previously forced near-white chrome. Calendar and widgets both use Home > HybridHome > ConversationView/ClarifyPanel; no alternate One implementation.

Removed WidgetEditor mount-time resumeWidgetCreation. HybridHome no longer auto-opens from active conversation changes while editing widgets; explicit home-agent:open from New widget still opens or resumes the existing flow.

Verified on isolated localhost: initial entry closed; New widget opens; pending-flow reload closed; closing and reopening editor with pending flow closed; New widget resumes pending flow. User origin untouched. Checked selected-first ordering separately for Personal/Employees, tick/action idle state, keyboard reveal/remove/add and search. Browser screenshots verify shared background and no active tab underline. Pure hover-only automation unavailable in this CUA locator surface; pointer entry during click and keyboard focus behavior were observed. Typecheck, 230-file prototype checks and diff whitespace validation pass.


## Screenshot polish

Removed the extra widget tabs wrapper padding/border and scoped existing secondary Tabs list to transparent with 8px native vertical inset; retained the pill and keyboard focus semantics. Editor content's sidebar separator is suppressed only while editing; existing Home sidebar divider remains. Applied the existing F0 shadow token recipe to the native dialog surface.

Row action area now reserves 80px width and 24px height for tick, empty and button states. Labels simplified to Add/Remove. Browser measured all row positions/heights before and after revealing Remove unchanged; Add likewise retained y=286 and height=48. Native modal shadow computed rgba(13,22,38,.08) 0px 4px 20px, tabs background transparent. Screenshot with navigation expanded reviewed. Typecheck and 230-file static checks pass.

Org chart investigation: monorepo OrgChartPage delegates v3 to OrgChartGraphPage/F0Graph. F0Graph source found in /Users/jonathan.centeno/code/f0-pr-4510/packages/react/src/patterns/F0Graph/components/F0GraphView/F0GraphView.tsx: uses @xyflow/react Background, Dots variant, size4, BACKGROUND_DOT_GAP and --f0-graph-bg-dot. Current branch does not include F0Graph or an independent background component. Asked user to approve extraction of the reusable F0 background before making that change; no extraction or lookalike created yet.


## Container root-cause correction and approved primary tabs

User confirmed the isolated original Primary Tabs sample. Restored secondary=false and removed all secondary-tabs CSS adjustments. Prior visual verification only checked the presence of shadow, not whether ancestors clipped it; corrected this gap.

The widget-view canvas had an opaque white background and overflow:hidden; work/root and the shell's content wrappers also clipped the native dialog shadow at the navigation boundary. Scoped those wrappers to overflow:visible only for widgets, kept catalog/preview scrolling internal, and made the canvas transparent. Native modal surface now has a continuous 1px F0 neutral-10 border following its 16px radius and a 0 4px 20px shadow using shadow token at .12 opacity. No further F0 library changes.

Browser screenshot reviewed with navigation expanded and One closed/open. Ancestor computed styles now have no clipping layers; white canvas gone; border and shadow follow the same rounded surface. 4px top/right/bottom inset verified with One open, no page horizontal overflow. Primary tab appearance matches the approved independent sample. Typecheck, 230-file prototype static check, diff whitespace validation passed. Org-chart pattern extraction still awaits separate authorization.

## Header border diagnosis and density refinement

The remaining doubled corner came from missing compiled native F0DialogHeader utilities: border-x-0 and border-t-0. Despite the intended source classes, computed header borders were 1px on all four sides. Added those original utilities to the existing compatibility scanner file; browser now confirms top/right/bottom/left borders of 0/0/1/0px, leaving only the native bottom separator inside the single rounded container border.

Replaced the manually intensified shadow with the standard F0 shadow-md recipe (0 4px 20px, .08 opacity). Primary tabs retain their original component; wrapper top8 plus native top4 balances native bottom12. Catalog rows now use native paddingY sm (8px), and icons/checks use default instead of secondary color.

Verified computed styles and browser screenshots, including a corner crop: continuous rounded edge, softer shadow, balanced tabs, compact rows and darker icons. Typecheck, 230-file prototype check and git diff --check pass. No new F0 components or library changes for this refinement.

## Shorter One widget creation

Removed the fourth name question. The three remaining questions capture content, audience and format; the content supplies the default title. Newly created catalog entries enter the active editor scope's draft automatically, retaining Save/Discard semantics. Catalog icons reuse existing F0 icons matched to the topic (requests/inbox, hiring/people, upcoming work/calendar, etc.). This remains the existing simulated One flow with mocked widget data.

Browser journey on isolated localhost: Hiring progress > My team > A key number completed without a name question; the catalog showed the People icon and Added tick, preview contained the new widget, and Save followed by reload preserved it. Model regression script and static prototype checks passed.

## Save exit and pointer focus regression

Reproduced Add leaving Remove visible with row :hover=false and button :focus-visible=false: onFocusCapture treated pointer focus like keyboard focus. Now only focus-visible focus keeps row actions open, pointer-down clears keyboard presentation, and toggling clears stale hover before the selected-first reorder. Keyboard focus remains intact for Tab and Enter.

Save persists both scopes then uses the existing Home exit path (goHome and cleared search params), instead of leaving a saved notice inside the editor. Verified in isolated browser: pointer Add returns to Added tick off-hover; Tab reveals Remove and Enter supports remove/add; Save exits to /p/home with payslip visible; reload retains it. Browser screenshot reviewed. Pattern: pointer focus must not be used as a substitute for hover in action-revealing rows.
