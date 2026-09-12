# Home onboarding — isolated v2

Working copy: `/private/tmp/f0-home-onboarding-v2`, branch `codex/home-onboarding-v2`.
Base snapshot: `0d127f329` from `/private/tmp/f0-home-navigation-integrated`, including its existing Home/widget work. This host is the older F0 monorepo Composer; it has no version-scaffolding lifecycle CLI. The new version is isolated in a clone, not added to the standalone Composer registry. No publication or remote push performed.

## Available

Welcome → optional navigation tour → preferences → optional connections → existing Home. Preferences support multiple selections, a custom answer, defaults and recovery from Help → Personalise my Home. Storage is keyed by profile and this onboarding version. Connections reuse the exact Preferences component and its existing mocked store. Connections show the native F0Button loading spinner for 1.2 seconds; disconnection is immediate. These are simulated operations; no OAuth or external service is contacted.

The first Home suggestion invokes the existing `startHomeWorkflow(profile, "report")`. The existing Home composer hid all suggestions when a briefing conversation was active; the bounded adjustment in HybridHome keeps briefing mode idle so the report suggestion is actually visible and clickable.

## Navigation tour

The user authorised the original monorepo cursor. `cursor/` contains its renderer, CSS, positioning helper and original pointer SVG. The import/asset paths are adapted locally and reduced-motion CSS is added; no cursor illustration was recreated. The original reference snapshots remain untouched.

`NavigationTour.tsx` is a small host coordinator with F0 controls, not a copy of the monorepo's full tour/AI engine. It runs Hub → Inbox → Comms → Home using real rail buttons. Clicking a target opens its actual panel; Continue lets the visitor decide when to leave it. Home ends at the existing preferences screen. Pause, Escape, resume, restart and an early exit to setup are available. Help → Explore the new navigation resumes the stored step. No new model or external actions are involved.

The step and pause state persist per profile in onboarding state; after reload the current target needs to be clicked again. Unmount removes the pointer and listeners. A missing/removed target stops pointing and offers Retry or setup; it never silently completes the step. All four navigation targets are present for both existing prototype profiles.

Browser verified: real navigation across all four steps, keyboard activation, pause and reload at step two, early exit and Help resume at step three, final setup handoff with zero remaining cursor nodes, and 768px layout. Reduced-motion rules and missing-target recovery are implemented but have not been exercised under those conditions in the browser.

## Handoff to the parallel conversational Home

`onboarding/state.ts` exposes `getOnboarding`, `useOnboarding`, `updateOnboarding` and `reopenOnboarding`.
- `screen`: welcome / tour / preferences / connections / complete.
- `tourStep`, `tourPaused`: navigation progress and pause state.
- `selected`: personal / team / work.
- `custom`, `customActive`, `usedDefaults`: exact configuration input.
- `hidden`: temporarily exited through navigation; configuration remains recoverable.
- `suggestReport`: consumed when the first report suggestion is clicked.

`completeOnboardingHome` creates a completed briefing using the original conversation store, so its old setup questions do not repeat. It maps personal and team to the existing Home's supported categories. The broad work preference and free text are preserved in onboarding state for the new Home; the old briefing cannot fully reflect them. Do not claim they already customise the old content. Replace this small adapter when integrating the new conversational Home; preserve the exact preferences.

Merge onboarding files, the small Home entry gate, nav/help hooks, Preferences component changes, ClarifyingPanel label options and report suggestion hook. Resolve Home/HybridHome changes manually against the parallel version. Do not overwrite the parallel Home layout or copy the base widget snapshot over it.

## Components and assets

All new screen composition uses F0Box, F0Heading, F0Text, F0Button and F0OneIcon, with existing F0 tokens. The clarifying panel is the already-vendored F0 panel; optional labels and default-preferences action preserve prior behaviour for all callers. Connections is exported from PreferencesScreen, not duplicated. Logo assets:
- Google Drive: official `https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png`.
- Slack: existing monorepo `frontend/src/assets/images/appStore/icons/slack.svg`.
- Notion/Jira: existing prototype assets.
- GitHub/Figma: Simple Icons v15 from jsDelivr.

Screen compositions reuse existing F0 components; no new design-system primitive, real agent or real integration was added. On 2026-09-12 the user explicitly approved scoped styles on existing F0 components for the exact visual reference: 600px width, 26/32 headings, double headings with a muted first line, and 14/20 medium-weight tertiary descriptions. These overrides live in onboarding.css. The source Home contains pre-existing DOM/CSS, unchanged except for state hooks and callbacks. The onboarding block is 600px with a 100% maximum width. hideCancel only removes the question close button in onboarding; existing panel consumers retain their close action.

## Verification (2026-09-12)

- TypeScript passes.
- Existing static checker: 235 files checked, no issues. Used `node --import tsx checks/bin/check-prototype.ts src/prototypes/home` because the pnpm/tsx wrapper's IPC socket is blocked by the sandbox.
- Browser: welcome, multiple selection, custom answer, reload persistence, Back, defaults, optional connection toggles, persistence, Help recovery, and final report suggestion opening the existing report question.
- Browser layout checked at 1280×720 and 768×800; viewport restored.
- Tour verification is recorded above; reduced-motion and missing-target recovery still have browser verification gaps.
- Review URL: `http://localhost:5182/p/home`; port 5174 belongs to the parallel Home task.

Latest visual iteration: all onboarding actions, including welcome, use F0Button md; One’s onboarding logo is 64×64px; connection rows omit the redundant Connected/Not connected text. The first suggestion reads “Create a report for One to monitor and share insights”.

Introductory descriptions under headings use 14/20px. Main blocks use F0Box gap 2xl (24px); this F0 version has no 20px gap token. Option labels and footer hints remain unchanged.

The selection guidance is included in the introductory description above the question, not in the footer.

## Superseding tour behavior — 2026-09-12

On home-unified the user approved Driver.js with the original monorepo demo-tour styles. The welcome content remains fixed throughout the tour. One first points to the actual rail control (Tools, formerly Hub). After the visitor clicks, Driver highlights the whole opened `[data-home-panel]` and explains it. The cursor automatically moves to the next rail destination while the explanation remains visible. There is no central Continue action or timed dismissal of the text. Steps: Tools → Inbox → Comms → Home. The final popover and Skip action lead to preferences. Pause removes both overlays; resume points at the stored next destination.

Verified in the isolated 127.0.0.1:5184 browser origin: all four real rail clicks, full-panel spotlight, clicking the next rail destination with the overlay active, unchanged central welcome, final setup handoff and skip before the first step. TypeScript and the onboarding static check pass. Reduced-motion and narrow viewport were not re-tested for this new Driver integration. Other parallel changes in the shared branch were preserved. No publication.

### Mouse interception correction

Driver's SVG overlay path sets pointer-events:auto inline, intercepting clicks even though the overlay root is pointer-events:none. Scoped override now disables hit-testing on the overlay and all its children; the rail and tour controls retain explicit pointer-events:auto. Verified the actual failure with elementFromPoint at Inbox returning the SVG path; after correction it returns Inbox. Coordinate mouse clicks Tools → Inbox → Comms successfully opened each menu and advanced the spotlight. Prior accessibility actions did not exercise this pointer interception and were insufficient evidence.

### Transition sequencing correction

The previous spotlight remained mounted until the next 260ms timeout, while the same menu element changed width/content. Tour clicks now remove the old spotlight in capture phase, before the navigation handler renders the next section. The next spotlight waits for the expected section, no running panel transition and four stable geometry frames, with abort/cleanup and a bounded timeout. Browser temporary frame instrumentation observed 21 moving frames on Inbox → Comms and zero overlap with a Driver overlay; instrumentation was removed. First opening and Tools → Inbox also completed successfully. No fixed-duration guess remains in the menu handoff.

### Initial Home generation — 2026-09-12

Replaced the 450/1000/1550ms section insertion with 750ms preparation and simultaneous reserved card regions. F0Card.Skeleton compact supplies placeholders; its optional-looking body is suppressed by a scoped presentation rule for task-row height. Text reserves its full dimensions and streams at the existing One cadence (10 characters / 24ms); cards fade over 180ms. Completion at 1250ms persists the existing generated marker and signals the composer to reveal its report suggestion. Repeat visits and reduced-motion skip initial preparation. The refresh flow is unchanged.

Browser verified initial setup→generation: preparation label and skeleton present, report suggestion absent during preparation, existing widgets remain available. TypeScript passes. Test origin localhost:5184 is separate from the user's 127.0.0.1:5184 state.
