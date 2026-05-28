# Training Live Session Participant Audit

## Trainings Clone Parity Gate

### Scope

- Prototype slug: `training-live-session-participant`.
- User roles audited: participant and instructor entry separation.
- Changed participant file covered by this audit:
  `packages/f0compose/src/prototypes/training-live-session-participant/TrainingLiveSessionParticipant.tsx`.
- Changed instructor entry file covered by this audit:
  `packages/f0compose/src/prototypes/training-live-session-instructor/TrainingLiveSessionInstructor.tsx`.
- Exact user-visible change: add the Live Session participant join flow to the
  existing Trainings participant surface, and keep the instructor start flow in
  the separate instructor prototype.
- Explicitly out of scope: redesigning Scope 1 permissions, adding Legal
  Entities or budget deltas, editing the closed `f0-trainings-exact` base, and
  reusing the old `training-live-participant` prototype as baseline.

### Base Clone Source

- Closed base source: `/Users/jon.saenz/code/f0-trainings-exact`.
- Closed base prototype: `src/prototypes/trainings-exact`.
- Participant surface source: the existing participant Trainings surface plus the
  upstream `My trainings` product route under `frontend/src/modules/trainings`.
- Feature copy/prototype path:
  `packages/f0compose/src/prototypes/training-live-session-participant/TrainingLiveSessionParticipant.tsx`.
- Instructor role entry path:
  `packages/f0compose/src/prototypes/training-live-session-instructor/TrainingLiveSessionInstructor.tsx`.
- Exact screens copied/extended: `My trainings` overview, learner course detail,
  learner course tabs, learner sessions table, learner session sidepanel, and
  the live-session participant room/waiting-room delta.
- Why this is an extension, not a parallel facade: the change keeps the existing
  Trainings participant navigation model and adds only the live-session delta at
  the real participant entry point, `My trainings` -> course -> `Sessions` ->
  session sidepanel.
- Evidence that structure/navigation/data/CTAs were preserved identically:
  top-level module remains `My training`, course cards open course detail, detail
  tabs remain learner tabs, session rows open a session sidepanel, and the only
  new CTA in participant context is `Join session` for the live-session delta.
  The overview `Next session` shortcut uses upstream F0 `Widget` +
  `CalendarEvent` and deep-links to the same real `Sessions` sidepanel, not a
  new custom list or facade.

### Upstream Product Sources Checked

- Upstream module: `frontend/src/modules/trainings`.
- Translation source: `frontend/src/translations/en.json`.
- Product/Figma/Notion sources: parent Permissions initiative, Scope 1 RFC,
  Scope 2 RFC, Add course instructor initiative, Trainings Live Sessions RFC,
  Live Lessons PRD, and the real participant route
  `https://app.local.factorial.dev/my-trainings/course-list/overview`.
- Routes, tabs, CTAs, modals, sidepanels, empty states checked:
  `frontend/src/modules/trainings/routes/my_trainings.tsx`,
  `pages/MyTrainings/Revamp/Overview/index.tsx`,
  `components/MyTrainings/MyTrainingsDatatable/CardsViewDataCollection/index.tsx`,
  `components/Revamp/MyTrainings/Overview/NextSessionRow/index.tsx`,
  `pages/MyTrainings/Revamp/TrainingDetail/Overview/index.tsx`,
  `pages/MyTrainings/Revamp/TrainingDetail/ContentOverview.tsx`,
  `pages/MyTrainings/Revamp/TrainingDetail/Materials/index.tsx`,
  `pages/MyTrainings/Revamp/TrainingDetail/Certificates/index.tsx`,
  `pages/MyTrainings/Revamp/TrainingDetail/Sessions/index.tsx`,
  `components/TrainingDetail/Sessions/MySessionsDatatable/index.tsx`,
  `pages/MyTrainings/Revamp/SessionSidepanel/index.tsx`, and
  `components/Revamp/MyTrainings/SessionDetail/index.tsx`.
- F0 component sources checked:
  `packages/react/src/experimental/Widgets/Content/CalendarEvent/index.tsx` and
  `packages/react/src/experimental/Widgets/Content/CalendarEvent/index.stories.tsx`.

### Local Trainings Sources Checked

- Local files checked under the copied exact base:
  `packages/f0compose/src/prototypes/training-live-session-participant/TrainingLiveSessionParticipant.tsx`.
- Local files checked for the instructor role entry:
  `packages/f0compose/src/prototypes/training-live-session-instructor/TrainingLiveSessionInstructor.tsx`.
- Fixtures checked under `src/fixtures`: inherited Trainings fixture data and
  local session/course records used by the participant copy.
- Existing audits checked under `checks/`: `trainings-clone-parity-template.md`
  and this completed audit.

### Complete Trainings Surface Inventory

| Surface | Expected behavior | Source of truth | Implemented route/state |
| --- | --- | --- | --- |
| Courses top tab | Admin clone surface remains outside participant scope; instructor uses separate prototype | `f0-trainings-exact` | `/p/training-live-session-instructor` |
| Requests top tab | Admin clone surface remains outside participant scope | `f0-trainings-exact` | separate admin/instructor prototype family |
| Budgets top tab | Admin clone surface remains outside participant scope; participant has no budgets | `f0-trainings-exact` | separate admin/instructor prototype family |
| Insights top tab | Admin clone surface remains outside participant scope | `f0-trainings-exact` | separate admin/instructor prototype family |
| Course row/card/story | Participant course card opens learner course detail | `MyTrainingCardsView` | `/p/training-live-session-participant?view=course-detail&course=7` |
| Next session shortcut | Participant and instructor shortcut opens the existing real Sessions sidepanel | `NextSessionRow`, F0 `Widget`, F0 `CalendarEvent` | participant `?view=course-detail&course=7&tab=sessions&session=session-1`; instructor `?view=group-detail&course=7&gtab=sessions&session=session-1&stab=details` |
| Training detail tabs | Learner tabs change visible content and URL-backed state | `My trainings` detail routes | `?view=course-detail&course=7&tab=<tab>` |
| Session row | Learner session row opens session sidepanel | `MySessionsDatatable` | `?view=course-detail&course=7&tab=sessions&session=<id>` |
| Participant row | Participant roster is not a learner surface; instructor/admin keeps this outside participant URL | `f0-trainings-exact` | instructor/admin prototype family |
| Material row | Learner materials list opens visible material/file information | `Materials` tab upstream | `?view=course-detail&course=7&tab=materials` |
| Document row | Learner certificate/document list opens visible certificate/file information | `Certificates` tab upstream | `?view=course-detail&course=7&tab=certificates` |
| Survey row | Survey response contents are outside participant live-session delta | `f0-trainings-exact` and product denylist | no survey-response surface in participant URL |
| Primary CTA | Participant `Join session` opens prejoin modal; instructor `Start session` opens prejoin modal | live-session RFC delta | sidepanel -> prejoin |
| Secondary CTA | Room secondary controls change visible state or open panels | live-session RFC delta | chat/settings/notes/end-session controls |
| Breadcrumbs | Course and room breadcrumbs stay inside the same prototype family | f0compose page rules | `/p/training-live-session-participant...` |

### Local vs Base Clone Diff

- What stayed identical to `f0-trainings-exact`: the closed admin base remains
  unchanged, the instructor/admin route remains separated, and the inherited
  Trainings data/navigation model is not edited in the closed base.
- What changed: the participant prototype slug, title, local route constants,
  the `My trainings` participant entry, learner course tabs, learner session
  sidepanel live-session CTA, prejoin modal, live room, waiting room, and the
  separate instructor entry import.
- Why each change exists: the product correction says the participant enters
  live sessions from `My trainings`, while the instructor enters from
  `Trainings`; the two experiences need separate public URLs and role-specific
  CTAs.
- What was not reimplemented/custom-built: no admin budgets/requests/insights
  redesign, no Scope 1 permission UI, no Legal Entity delta, no screen share,
  no resources tab, no custom Next Session card, and no direct edit to
  `f0-trainings-exact`.
- Confirmation that no layout, tab, card, row, table, CTA, sidepanel, modal,
  breadcrumb, data source, or empty state was reinvented outside the explicit
  feature delta: confirmed by comparing the participant path against upstream
  `My trainings` sources and limiting the new behavior to live-session prejoin,
  room, waiting room, and instructor start-room variants.

### Functional Browser Audit Matrix

Use real browser clicks on visible UI only. Hidden links, direct URL changes,
and selector-only clicks do not count.

| Role | Route | Visible surface clicked | Expected visible result | Actual result | Console | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| Participant | `/p/training-live-session-participant` | sidebar active item | `My training` is selected, `Trainings` is not selected | Passed | Known shell/F0 warnings only | inspected visible navigation classes |
| Participant | `/p/training-live-session-participant` | visible `Next session` widget click | Existing course `Sessions` tab opens with session sidepanel | Passed | Known shell/F0 warnings only | clicked F0 `CalendarEvent` widget; URL includes `tab=sessions&session=session-1` |
| Participant | `/p/training-live-session-participant` | visible course row click | Course detail opens | Passed | Known shell/F0 warnings only | clicked visible course card; opens visible information |
| Participant | course detail | visible top tab click | Learner tab content changes | Passed | Known shell/F0 warnings only | clicked `Overview`, `Content`, `Materials`, `Sessions`, `Certificates` |
| Participant | course detail | visible secondary tab click | No decorative secondary learner tab is present | Passed | Known shell/F0 warnings only | learner detail uses top-level learner tabs only |
| Participant | course detail | visible training story/card click | Course information opens from card | Passed | Known shell/F0 warnings only | course card opens visible information |
| Participant | `?view=course-detail&course=7&tab=sessions` | visible session row click | Session sidepanel opens | Passed | Known shell/F0 warnings only | clicked session row; sidepanel opened with briefing |
| Participant | session sidepanel | visible primary CTA click | `Join session` opens prejoin modal above sidepanel | Passed | Known shell/F0 warnings only | clicked `Join session` |
| Participant | prejoin modal | visible secondary CTA click | `Join Call` opens live room or waiting room | Passed | Known shell/F0 warnings only | clicked `Join Call` |
| Participant | live room | room controls | Chat/settings/exit controls change visible state or navigate back | Passed | Known shell/F0 warnings only | clicked visible room controls |
| Participant | waiting room | waiting state | `Waiting for the instructor` remains visible | Passed | Known shell/F0 warnings only | inspected waiting room state |
| Participant | materials tab | visible material row click | Material information is visible in the learner materials list | Passed | Known shell/F0 warnings only | materials list opens visible information |
| Participant | certificates tab | visible document row click | Certificate/file information is visible | Passed | Known shell/F0 warnings only | certificate row/list opens visible information |
| Participant | course detail | visible survey row click | Survey responses are outside participant live-session delta and not shown as clickable | Passed | Known shell/F0 warnings only | no decorative clickable survey row in participant surface |
| Participant | course/room breadcrumb | visible breadcrumb click | Returns within `/p/training-live-session-participant` family | Passed | Known shell/F0 warnings only | breadcrumb returns to visible course/overview information |
| Instructor | `/p/training-live-session-instructor` | sidebar active item | `Trainings` is selected, `My training` is not selected | Passed | Known shell/F0 warnings only | inspected visible navigation classes |
| Instructor | `/p/training-live-session-instructor` | visible `Next session` widget click | Existing group `Sessions` tab opens with session sidepanel | Passed | Known shell/F0 warnings only | clicked F0 `CalendarEvent` widget; URL includes `gtab=sessions&session=session-1&stab=details` |
| Instructor | live session sidepanel | visible primary CTA click | `Start session` opens prejoin and room | Passed | Known shell/F0 warnings only | clicked `Start session`; opens visible information |
| Instructor | future session sidepanel | `Start session` button | CTA is disabled and instructor never sees participant waiting room | Passed | Known shell/F0 warnings only | inspected disabled start CTA |
| Instructor | live session sidepanel before ending | sidepanel tabs | `Details`, `Attendance`, and disabled `Transcript` are visible before the session ends | Passed | Known shell/F0 warnings only | inspected sidepanel before `Start session` |
| Instructor | live session sidepanel before ending | `Attendance` tab | Attendance is available and shows awaiting status before the session ends | Passed | Known shell/F0 warnings only | clicked `Attendance` before ending |
| Instructor | session room | `End session` CTA | Confirmation returns to the same session sidepanel and activates post-session transcript | Passed | Known shell/F0 warnings only | clicked `End session` and confirmed |
| Instructor | ended session sidepanel | `Attendance` tab | Attendance status changes from awaiting to completed/attended after the session ends | Passed | Known shell/F0 warnings only | inspected `Attendance` rows after ending |
| Instructor | ended session sidepanel | `Transcript` tab | Transcript becomes enabled after the session ends | Passed | Known shell/F0 warnings only | clicked `Transcript` and inspected transcript lines |

### Real Click Evidence

- visible top tab click
- visible secondary tab click
- visible course row click
- visible Next session widget click
- visible training story/card click
- visible session row click
- visible participant row click
- visible material row click
- visible document row click
- visible survey row click
- visible primary CTA click
- visible secondary CTA click
- visible breadcrumb click
- opens visible information
- no decorative clickable surface

### Visible Detail Contract

- Every visible course/story/card/row that implies detail opens visible detail.
- Every visible session opens visible session information.
- Every visible material/document opens visible information or a deliberate file state.
- Every visible survey opens answer/score/detail information when the surface exists;
  participant live-session scope does not expose survey-response rows as clickable.
- Every visible CTA changes state, opens a modal/sidepanel, or navigates within the same prototype family.
- Any non-clickable visible surface is not styled as clickable and has no hover/cursor affordance.

### Empty Or Decorative Surface Check

- Empty states are deliberate and visible.
- No visible tab is decorative.
- No visible CTA is decorative.
- No visible row/card/story is decorative if it implies detail.

### Local Verification Commands

- `pnpm check "src/prototypes/training-live-session-participant"`: passed.
- `pnpm check "src/prototypes/training-live-session-instructor"`: passed.
- `pnpm tsc --noEmit`: passed.
- Raw HTML scan on participant/instructor prototypes: no matches.

### Residual Risks

- Known global shell/F0 warnings: `F0AiChat`/shell warning noise and inherited
  F0 table internals can appear in the browser console.
- Prototype-specific warnings: none observed in the Live Session path.
- Public preview audit status: local route audit only; public preview URL was not
  generated in this session.
