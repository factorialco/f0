# Training Live Session Participant Handoff

Prototype: http://localhost:5174/p/training-live-session-participant

## Product Correction

- Participant entry point is `My trainings`, not admin/instructor `Trainings`.
- Real product route checked:
  `https://app.local.factorial.dev/my-trainings/course-list/overview`.
- Prototype path:
  `src/prototypes/training-live-session-participant/TrainingLiveSessionParticipant.tsx`.
- Instructor flow is separate:
  `http://localhost:5174/p/training-live-session-instructor`.
- The closed Trainings base at `/Users/jon.saenz/code/f0-trainings-exact` was not
  edited.

## Upstream Sources Checked

- `frontend/src/modules/trainings/routes/my_trainings.tsx`
- `pages/MyTrainings/Revamp/Overview/index.tsx`
- `components/MyTrainings/MyTrainingsDatatable/CardsViewDataCollection/index.tsx`
- `components/Revamp/MyTrainings/Overview/NextSessionRow/index.tsx`
- `pages/MyTrainings/Revamp/TrainingDetail/Sessions/index.tsx`
- `components/TrainingDetail/Sessions/MySessionsDatatable/index.tsx`
- `pages/MyTrainings/Revamp/SessionSidepanel/index.tsx`
- `components/Revamp/MyTrainings/SessionDetail/index.tsx`
- `pages/MyTrainings/Revamp/TrainingDetail/ContentOverview.tsx`
- `pages/MyTrainings/Revamp/TrainingDetail/Materials/index.tsx`
- `pages/MyTrainings/Revamp/TrainingDetail/Certificates/index.tsx`
- `frontend/src/translations/en.json`
- `packages/react/src/experimental/Widgets/Content/CalendarEvent/index.tsx`
- `packages/react/src/experimental/Widgets/Content/CalendarEvent/index.stories.tsx`

## Implemented Flow

- `My trainings` overview with F0 `Widget` + `CalendarEvent` for `Next session`,
  `Progress`, and course cards.
- Participant `Next session` opens the existing learner course `Sessions` tab with
  the session sidepanel already open.
- Instructor `Next session` opens the existing training group `Sessions` tab with
  the session sidepanel already open.
- Course detail with learner tabs: `Overview`, `Content`, `Materials`,
  `Sessions`, and `Certificates`.
- `Sessions` tab opens participant session sidepanel from a visible session row.
- `Join session` opens the prejoin modal above the sidepanel.
- `Join Call` opens the live room for a live session.
- `Join Call` opens the waiting room for a future session.
- Waiting room remains in waiting state and does not auto-transition.
- Participant room toolbar shows only mic, cam, chat, settings, and exit.
- Instructor session sidepanel always shows `Details` and `Attendance`.
- `Attendance` shows pending status while the live session has not ended.
- `Transcript` is visible but disabled until the instructor confirms
  `End session`.
- After `End session`, the same session sidepanel opens with completed
  attendance status and an enabled `Transcript` tab.

## Explicitly Out Of Scope

- Admin Trainings clone flow.
- Instructor `Start session` flow, except for shared room primitives consumed by
  `training-live-session-instructor`.
- Reusing `training-live-participant` as baseline.
- Editing `f0-trainings-exact` directly.
- Adding `Resources`, screen share, or unrelated meeting tools.

## Verification Required Before Handoff

- `pnpm check "src/prototypes/training-live-session-participant"`
- `pnpm check "src/prototypes/training-live-session-instructor"`
- `pnpm tsc --noEmit`
- Raw HTML scan for participant and instructor prototypes.
- Real browser clicks for participant overview, course card, all course tabs,
  `Next session`, session sidepanel, `Join session`, `Join Call`, room, and
  waiting room.
- Real browser clicks for instructor `Start session`, disabled future start,
  `Next session`, room tools, notes, and `End session`.

## Latest Local Verification

- `pnpm check "src/prototypes/training-live-session-participant"`: passed.
- `pnpm check "src/prototypes/training-live-session-instructor"`: passed.
- `pnpm tsc --noEmit`: passed.
- Raw HTML scan on participant and instructor prototypes: clean.
- Participant `Next session` click passed: overview widget opens
  `/p/training-live-session-participant?view=course-detail&course=7&tab=sessions&group=Edici%C3%B3n+-+enero+2025&session=session-1`
  with the `Sessions` tab and `Noviembre - Diciembre` sidepanel visible.
- Instructor `Next session` click passed: list widget opens
  `/p/training-live-session-instructor?view=group-detail&course=7&group=Edici%C3%B3n+-+enero+2025&gtab=sessions&session=session-1&stab=details`
  with the group `Sessions` tab and `Noviembre - Diciembre` sidepanel visible.
- Participant click path passed: My trainings card -> course detail -> `Content`,
  `Materials`, `Certificates`, `Sessions` -> visible session row -> session
  sidepanel -> `Join session` -> `Join Call` -> live room.
- Participant waiting path passed: future session -> `Join session` ->
  `Join Call` -> waiting room, with no instructor-only controls.
- Instructor click path passed: Trainings -> course -> Training groups -> group
  sessions -> live session -> `Start session` -> room with `Open notes`, `Exit`,
  and `End session`.
- Instructor post-session check passed: before ending, `Attendance` is available
  with pending rows and `Transcript` is disabled; after `End session`, attendance
  changes to attended/completed and `Transcript` opens.
- Instructor future-session check passed: `Start session` is disabled and no
  `Waiting for the instructor` copy appears.
- Residual console noise expected: known F0/shell warnings from `F0AiChat` and
  inherited F0 internals; these are tracked separately from prototype crashes.
