# Trainings f0compose Audit

Date: 2026-05-20

Scope: `packages/f0compose/src/prototypes/trainings/**`.

Goal: prove that every visible element in the Trainings prototype is built with
the canonical f0compose/F0 patterns and matches the production Trainings module
structure from `factorial/frontend/src/modules/trainings`.

This is an audit, not a fix plan. Do not mark an item as compliant unless the
local file and the upstream/product source have both been checked.

## Known Accepted Limitations

- Public preview URL is not available yet.
- Some select interactions are known not to work yet.

Everything else must be audited and either fixed or explicitly accepted.

## Sources Checked

- `packages/f0compose/AGENTS.md`
- `packages/f0compose/DESIGN.md`
- `f0-prototype` skill
- `f0-design` skill
- `packages/f0compose/generated/registry.json`
- `packages/f0compose/src/prototypes/trainings/**`
- `/Users/jon.saenz/code/factorial/frontend/src/modules/trainings/routes/index.tsx`
- `/Users/jon.saenz/code/factorial/frontend/src/modules/trainings/lib/navigation.ts`
- `/Users/jon.saenz/code/factorial/frontend/src/modules/trainings/components/Revamp/TrainingsDetail/TrainingDetailHeader/index.tsx`
- `/Users/jon.saenz/code/factorial/frontend/src/modules/trainings/components/Revamp/TrainingsDetail/Classes/ClassDetailHeader/index.tsx`
- `/Users/jon.saenz/code/factorial/frontend/src/translations/en.json`

## Canonical Upstream Structure

### Top Trainings Navigation

Source: `frontend/src/modules/trainings/routes/index.tsx:58-153`.

| Order | Label    | Path                       | Visibility                                                             |
| ----- | -------- | -------------------------- | ---------------------------------------------------------------------- | --- | ---------------------------------- |
| 1     | Courses  | `/trainings/list`          | `trainingsAccessManagementSpace.can`                                   |
| 2     | Requests | `/trainings/requests/list` | `trainingsAccessManagementSpace.can`                                   |
| 3     | Budgets  | `/trainings/budgets/list`  | `trainingsAccessManagementSpace.can && (budgetsViewTrainingBudgets.can |     | budgetsManageTrainingBudgets.can)` |
| 4     | Insights | `/trainings/insights`      | `trainingsAccessManagementSpace.can && insightRead.can`                |

### Courses List Subnavigation

Source: `frontend/src/modules/trainings/routes/index.tsx:401-545`.

| Order | Label            | Path                                    | Visibility                                                          |
| ----- | ---------------- | --------------------------------------- | ------------------------------------------------------------------- |
| 1     | All courses      | `/trainings/list/index`                 | `trainingsAccessManagementSpace.can`                                |
| 2     | Tags             | `/trainings/list/categories`            | `trainingsAccessManagementSpace.can`                                |
| 3     | Axes             | `/trainings/list/axes`                  | `trainingsAccessManagementSpace.can && company has FR legal entity` |
| 4     | Survey Templates | `/trainings/list/survey-templates/list` | `trainingsAccessManagementSpace.can`                                |

### Course Detail Tabs

Source: `frontend/src/modules/trainings/routes/index.tsx:703-758`.

| Order | Label        | Path                                      | Visibility                                                 |
| ----- | ------------ | ----------------------------------------- | ---------------------------------------------------------- |
| 1     | Overview     | `/trainings/list/:id/detail/overview`     | always                                                     |
| 2     | Content      | `/trainings/list/:id/detail/content`      | always                                                     |
| 3     | Groups       | `/trainings/list/:id/detail/classes/tab`  | `canEdit`                                                  |
| 4     | Participants | `/trainings/list/:id/detail/participants` | always                                                     |
| 5     | Materials    | `/trainings/list/:id/detail/attachments`  | always                                                     |
| 6     | Documents    | `/trainings/list/:id/detail/documents`    | always                                                     |
| 7     | Surveys      | `/trainings/list/:id/detail/surveys`      | `canEdit`                                                  |
| 8     | Fundae       | `/trainings/list/:id/detail/fundae`       | `training.fundaeSubsidized && company has ES legal entity` |

Important: there is no Course detail `Costs` tab upstream. Costs only exists in
the group/class detail.

### Group Detail Tabs

Source: `frontend/src/modules/trainings/routes/index.tsx:861-903`.

| Order | Label        | Path                                                       | Visibility |
| ----- | ------------ | ---------------------------------------------------------- | ---------- |
| 1     | Sessions     | `/trainings/list/:id/detail/classes/:classId/sessions`     | always     |
| 2     | Participants | `/trainings/list/:id/detail/classes/:classId/participants` | always     |
| 3     | Materials    | `/trainings/list/:id/detail/classes/:classId/materials`    | always     |
| 4     | Documents    | `/trainings/list/:id/detail/classes/:classId/documents`    | always     |
| 5     | Costs        | `/trainings/list/:id/detail/classes/:classId/costs`        | always     |

## Current High Confidence Non-compliance

### Page/Layout Shell

| Screen/File                  | Element        | Local implementation                             | Required pattern                        | Status                    |
| ---------------------------- | -------------- | ------------------------------------------------ | --------------------------------------- | ------------------------- |
| `Trainings.tsx`              | Page body      | `PageContent`                                    | `StandardLayout` in `<Page>` body       | Non-compliant             |
| `detail/TrainingsDetail.tsx` | Page body      | `PageContent`                                    | `StandardLayout`                        | Non-compliant             |
| `detail/ClassDetail.tsx`     | Page body      | `PageContent` and raw fallback `<div>/<p>`       | `StandardLayout`, `F0Text`              | Non-compliant             |
| `_shared/PageContent.tsx`    | Shared wrapper | Custom `<div>` layout wrapper                    | Remove or replace with `StandardLayout` | Non-compliant             |
| All `_modules/*` pages       | Page body      | Mostly direct `F0Box`/raw content under `<Page>` | `StandardLayout`                        | Needs full row-by-row fix |

### Product Structure

| Screen/File           | Element                            | Local implementation                                | Upstream expected                                 | Status                                         |
| --------------------- | ---------------------------------- | --------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------- |
| `tabs.ts`             | Course detail tabs                 | Previously included `Costs`                         | No `Costs` tab in course detail                   | Fixed locally, verify in browser               |
| `tabs.ts`             | Course detail `Groups` visibility  | Always visible                                      | Visible only when `canEdit`                       | Non-compliant unless fixture assumes `canEdit` |
| `tabs.ts`             | Course detail `Surveys` visibility | Always visible                                      | Visible only when `canEdit`                       | Non-compliant unless fixture assumes `canEdit` |
| `tabs.ts`             | Course detail `Fundae` visibility  | Always visible                                      | Only if Fundae subsidized and ES legal entity     | Non-compliant                                  |
| `ClassDetail.tsx`     | Group detail tabs                  | Sessions, Participants, Materials, Documents, Costs | Matches upstream order                            | Likely compliant                               |
| `Trainings.tsx`       | Main module name                   | `Courses` in PageHeader module                      | Top module should be Trainings; Courses is subnav | Suspicious                                     |
| `TrainingsDetail.tsx` | Breadcrumbs                        | `Trainings > Courses > Course`                      | Expected hierarchy likely OK                      | Needs visual/product confirmation              |
| `ClassDetail.tsx`     | Breadcrumbs                        | `Training > Courses > Course > Group`               | Should be consistent with module label            | Suspicious                                     |

### Raw HTML Replacing F0/F0compose Patterns

| File                                        | Element                                             | Why non-compliant                | Required pattern                                                                    |
| ------------------------------------------- | --------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| `detail/CostsTab.tsx`                       | Legal entity rows use raw `<button>`                | Custom list row/action           | `OneDataCollection` list/table or validated F0 card/action pattern                  |
| `detail/CostsTab.tsx`                       | Cost cards and summary cards are raw `<div>` chrome | Visible card UI not F0 component | `F0Card`, `F0BigNumber`, `F0Box` with justification                                 |
| `detail/CostsTab.tsx`                       | Sidepanel cost breakdown custom rows/divider        | Visible list/card UI hand-built  | Use canonical F0/DataCollection/list-row pattern or explicit Figma-backed exception |
| `detail/ClassModals.tsx`                    | Custom dialog tabs via raw buttons                  | Fake tab implementation          | `Tabs` or `F0Dialog.tabs`                                                           |
| `detail/ClassModals.tsx`                    | Attendance hand-built table/list                    | Raw list/table UI                | `OneDataCollection`                                                                 |
| `_modules/budgets/TrainingsBudgets.tsx`     | Custom sidepanel overlay and icon buttons           | Reimplements dialog/sidepanel    | `F0Dialog position="right"`                                                         |
| `_modules/importer/TrainingsImporter.tsx`   | Native `<table>` preview                            | Raw table                        | `OneDataCollection`                                                                 |
| `list/CategoriesTab.tsx`                    | Hand-built category table                           | Raw table/list/buttons           | `OneDataCollection` and `F0Button`                                                  |
| `_modules/fundae/TrainingsFundae.tsx`       | Mapping table/list                                  | Raw list/table                   | `OneDataCollection`                                                                 |
| `_modules/requests/TrainingsRequests.tsx`   | Request queue rows                                  | Raw clickable rows               | `OneDataCollection`                                                                 |
| `_modules/surveys/TrainingsSurveys.tsx`     | Survey editor/preview rows/buttons                  | Raw form/list/dialog UI          | `F0Form`, `OneDataCollection`, `F0Dialog`                                           |
| `_modules/my/MyTrainings.tsx`               | Catalog/training cards and rows                     | Raw clickable cards/lists        | `OneDataCollection` card/list visualization or F0Card pattern                       |
| `_modules/employees/TrainingsEmployees.tsx` | Employee training lists                             | Raw clickable lists              | `OneDataCollection`                                                                 |

### Native Inputs / Forms

| File                                      | Element                               | Required pattern                     | Status        |
| ----------------------------------------- | ------------------------------------- | ------------------------------------ | ------------- |
| `_modules/budgets/TrainingsBudgets.tsx`   | Native `<select>` in add group dialog | `F0Select` or `F0Form`               | Non-compliant |
| `_modules/importer/TrainingsImporter.tsx` | Native file input                     | F0 file upload / `F0Form` multi-file | Non-compliant |
| `_modules/settings/SettingsModals.tsx`    | Hidden native file input              | F0 file upload / `F0Form`            | Non-compliant |
| `detail/AttachmentsTab.tsx`               | Native file and URL inputs            | `F0Form` / F0 input/file upload      | Non-compliant |
| `detail/DocumentsTab.tsx`                 | Native file input                     | F0 file upload / `F0Form`            | Non-compliant |

### Raw Colors / Inline Styles / Non-token Styling

| File                                          | Element                                                             | Problem           | Status        |
| --------------------------------------------- | ------------------------------------------------------------------- | ----------------- | ------------- |
| `list/TrainingsList.tsx`                      | `customColor: "#fff"`                                               | Raw color         | Non-compliant |
| `list/SurveyTemplatesTab.tsx`                 | Raw hex colors                                                      | Raw color         | Non-compliant |
| `_modules/budgets/TrainingsBudgets.tsx`       | inline `fontSize`, `lineHeight`, `rgba`, arbitrary shadows, `white` | Raw CSS/non-token | Non-compliant |
| `_modules/requests/TrainingsRequests.tsx`     | `rgba(0,0,0,0.55)` overlay                                          | Raw overlay       | Non-compliant |
| `_modules/fundae/TrainingsFundae.tsx`         | `rgba(0,0,0,0.55)` overlay                                          | Raw overlay       | Non-compliant |
| `_modules/surveys/TrainingsSurveys.tsx`       | `rgba(0,0,0,0.55)` overlay                                          | Raw overlay       | Non-compliant |
| `_modules/content/ContentModals.tsx`          | `bg-black`, `text-white`                                            | Non-f1 tokens     | Non-compliant |
| `_modules/activities/TrainingsActivities.tsx` | `text-white`                                                        | Non-f1 token      | Non-compliant |
| `_modules/importer/TrainingsImporter.tsx`     | `text-white`                                                        | Non-f1 token      | Non-compliant |
| `detail/ClassModals.tsx`                      | inline CSS variables                                                | Raw inline style  | Non-compliant |

### URL State / Deep Links

| File/Screen                                   | Element                               | Problem                                      | Required pattern                                    |
| --------------------------------------------- | ------------------------------------- | -------------------------------------------- | --------------------------------------------------- |
| `Trainings.tsx`                               | list secondary tabs                   | URL-backed but missing `key={activeListTab}` | Add key remount pattern                             |
| `Trainings.tsx`                               | New training wizard                   | State-only substantial flow                  | URL-backed query state if treated as screen         |
| `detail/ClassDetail.tsx`                      | Parent training breadcrumb            | Uses `onClick` not `href`                    | Use `href` for normal breadcrumb navigation         |
| `detail/CostsTab.tsx`                         | Legal entity sidepanel                | State-only substantial sidepanel             | URL-backed sidepanel state if treated as sub-screen |
| `_modules/budgets/TrainingsBudgets.tsx`       | Movement sidepanel and sidepanel tabs | State-only                                   | URL-backed movement ID + tab                        |
| `_modules/surveys/TrainingsSurveys.tsx`       | Detail tabs                           | State-only                                   | URL-backed tab query                                |
| `_modules/fundae/TrainingsFundae.tsx`         | Tabs                                  | State-only                                   | URL-backed tab query                                |
| `_modules/importer/TrainingsImporter.tsx`     | Wizard steps                          | State-only                                   | URL-backed step query                               |
| `_modules/employees/TrainingsEmployees.tsx`   | Detail tabs                           | State-only                                   | URL-backed tab query                                |
| `_modules/my/MyTrainings.tsx`                 | Nested detail tabs                    | State-only                                   | URL-backed tab query                                |
| `_modules/activities/TrainingsActivities.tsx` | Activity filters/tabs                 | State-only                                   | URL-backed or DataCollection filters                |

### Bad Local Links / Fake Navigation

| File                                      | Element                                             | Problem           | Required pattern                        |
| ----------------------------------------- | --------------------------------------------------- | ----------------- | --------------------------------------- |
| `detail/CostsTab.tsx`                     | `window.location.href = "/p/trainings-budgets"`     | bypasses router   | `useNavigate` or F0 link integration    |
| `_modules/importer/TrainingsImporter.tsx` | `window.location.href = "/p/trainings"`             | bypasses router   | router navigation                       |
| `_modules/my/MyTrainings.tsx`             | `window.location.href = "/p/trainings-content?..."` | bypasses router   | router navigation                       |
| `detail/FundaeTab.tsx`                    | `/p/trainings-list?id=...&dtab=groups`              | wrong local route | `/p/trainings?training=...&dtab=groups` |
| `_modules/content/TrainingsContent.tsx`   | `/p/trainings?trainingId=...`                       | wrong query param | `/p/trainings?training=...`             |

### Inline Data / Fixtures

| File                                      | Element                            | Problem                  | Required pattern                    |
| ----------------------------------------- | ---------------------------------- | ------------------------ | ----------------------------------- |
| `_modules/importer/TrainingsImporter.tsx` | `SAMPLE_ROWS` inline 4 rows        | Fixture-like data inline | Move to `@/fixtures`                |
| `list/SurveyTemplatesTab.tsx`             | `surveyTemplates` inline 4 records | Fixture-like data inline | Move to `@/fixtures`                |
| `_modules/content/TrainingsContent.tsx`   | Quiz option array                  | Fixture/form data inline | Fixture or `F0Form` schema          |
| `_modules/content/ContentModals.tsx`      | Quiz option arrays                 | Fixture/form data inline | Fixture or `F0Form` schema          |
| `_modules/settings/TrainingsSettings.tsx` | `REMINDERS` inline                 | Fixture-like data inline | Move to `@/fixtures` if data-backed |

## Immediate Conclusion

The Trainings prototype is not yet compliant with the PR 4085 promise. The main
risks are not small visual differences; they are systemic:

- Multiple screens hand-roll visible UI instead of using F0/f0compose patterns.
- Several tables/lists are not `OneDataCollection`.
- Several dialogs/sidepanels are custom instead of `F0Dialog`.
- Several multi-view interactions are state-only instead of URL-backed.
- Product tabs and visibility rules are only partially aligned with upstream.
- Several links use wrong local routes or bypass router navigation.
- There are raw colors, inline styles, native inputs, and fixture-like inline data.

## Recommended Fix Order

1. Stabilize product structure: top nav, list tabs, course detail tabs, group tabs, breadcrumbs.
2. Replace page shell wrappers with `StandardLayout` and remove `PageContent`.
3. Replace raw lists/tables with `OneDataCollection` screen by screen.
4. Replace custom dialogs/sidepanels with `F0Dialog`.
5. Replace native inputs/forms with `F0Form`, `F0Select`, and F0 file patterns.
6. Remove raw colors/inline styles/non-f1 tokens.
7. URL-back substantial sub-screens and nested tabs.
8. Move fixture-like inline arrays into `@/fixtures`.
9. Verify labels against `en.json` and visibility rules against upstream policies.

## Audit Status

- Upstream route inventory: complete for top nav, list, course detail, group detail.

## 2026-05-20 Delta: Group Changes Requiring Budget Update

Scope checked:

- `packages/f0compose/src/fixtures/trainings-extra.ts`
- `packages/f0compose/src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/CostsTab.tsx`

User-visible change:

- Removed the budget-level "changed since last review" review dialog pattern.
- Budget detail now shows an inline page warning with an `Update budget` action, outside the groups table.
- Training group Costs tab now shows `Update budget` only when that specific group changed after being added to the budget.
- Opening the group sidepanel from the budget shows `Update budget` plus `What changed` details for participant, legal entity, or salary changes.

Accepted limitation for this delta:

- This keeps the existing raw layout around the Costs tab and budget sidepanel because replacing those surfaces with fully canonical upstream components is outside this focused feedback pass and already tracked above as broader non-compliance.
- Local route inventory: complete at screen level.
- f0compose compliance scan: complete at high-confidence issue level.
- Element-by-element browser visual verification: not complete.
- Figma parity for sidepanel cost borders: not complete.
- TypeScript verification after latest edits: not run in this audit pass.

## Current Delta Parity Gate

This section is intentionally machine-checked by `pnpm check`. When a replicated
Trainings prototype file changes, the matching audit must cite the exact local
file, cite upstream `frontend/src/modules/trainings` sources, and keep this
section updated before the local check passes.

### Scope

- `packages/f0compose/src/prototypes/trainings/detail/TrainingsDetail.tsx`
- `packages/f0compose/src/prototypes/trainings/NewTrainingWizard.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/class/ParticipantsTab.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/ClassModals.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/NewClassWizard.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/NewFormWizard.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/ClassDetail.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/CostsTab.tsx`
- `packages/f0compose/src/prototypes/trainings/costsByLegalEntityToggleStore.ts`
- `packages/f0compose/src/prototypes/trainings/tabs.ts`
- `packages/f0compose/src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx`
- `packages/f0compose/src/fixtures/trainings.ts`
- `packages/f0compose/src/fixtures/trainings-extra.ts`
- `packages/f0compose/src/fixtures/legal-entities.ts`

### Upstream Sources Checked

- `frontend/src/modules/trainings/routes/index.tsx`
- `frontend/src/modules/trainings/lib/navigation.ts`
- `frontend/src/modules/trainings/components/Revamp/TrainingsDetail/TrainingDetailHeader/index.tsx`
- `frontend/src/modules/trainings/components/Revamp/TrainingsDetail/TrainingDetailHeader/index.spec.tsx`
- `frontend/src/modules/trainings/components/Revamp/TrainingsDetail/Classes/ClassDetailHeader/index.tsx`
- `frontend/src/modules/trainings/components/Revamp/TrainingsDetail/ParticipantsOneDataTable/index.tsx`
- `frontend/src/modules/trainings/components/Revamp/TrainingsDetail/ParticipantsOneDataTable/hooks/useColumns.ts`
- `frontend/src/modules/trainings/components/Revamp/TrainingsDetail/ParticipantsOneDataTable/hooks/useDataSource.ts`
- `frontend/src/translations/en.json`

### Local Files Checked

- `packages/f0compose/AGENTS.md`
- `packages/f0compose/DESIGN.md`
- `packages/f0compose/generated/registry.json`
- `packages/f0compose/src/prototypes/trainings/detail/TrainingsDetail.tsx`
- `packages/f0compose/src/prototypes/trainings/NewTrainingWizard.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/class/ParticipantsTab.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/ClassModals.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/NewClassWizard.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/NewFormWizard.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/ClassDetail.tsx`
- `packages/f0compose/src/prototypes/trainings/detail/CostsTab.tsx`
- `packages/f0compose/src/prototypes/trainings/costsByLegalEntityToggleStore.ts`
- `packages/f0compose/src/prototypes/trainings/tabs.ts`
- `packages/f0compose/src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx`
- `packages/f0compose/src/fixtures/trainings.ts`
- `packages/f0compose/src/fixtures/trainings-extra.ts`
- `packages/f0compose/src/fixtures/legal-entities.ts`

### Local vs Upstream Diff

- Course header labels are being aligned to upstream: `Training groups`,
  `Instructor(s)`, and `Course settings`.
- Group participants tab is aligned to the upstream table structure at a
  prototype level: DataCollection toolbar, presets, selectable rows, add
  participants action, and upstream-like participant columns.
- Legal entity participants inside the group Costs sidepanel restore the
  per-participant `Hours completed` and `Salary cost` columns used by the
  multi-entity budget cost sidepanel.
- New course and new survey wizard submit types are now explicit local types,
  removing direct `zod` imports from `packages/f0compose/src/prototypes/trainings/NewTrainingWizard.tsx`
  and `packages/f0compose/src/prototypes/trainings/detail/NewFormWizard.tsx`
  so the full Trainings static check can run through the prototype allowlist.
- Session dialogs and budget dialogs are wired to real local state transitions;
  they are still prototype implementations, not direct upstream ports.
- `packages/f0compose/src/fixtures/trainings-extra.ts` now includes the Figma
  node `4998:70702` budget fixture: `Training budget 2026`, 50,000 total,
  30,000 allocated, 0 spent, 20,000 available, 17 people, and the exact
  Communication skills group rows from child node `5179:237203`.
- `Training budget 2026` movements are now backed by real local training groups
  in `fixtures/trainings.ts`, so `Go to Training group` opens a valid detail
  URL for Madrid, France, and Italy.
- Legal entities in the budget table, budget sidepanel, and group Costs detail
  are derived from the employees assigned to each training group. The budget
  breakdown keeps direct/indirect costs as prototype estimates, but salary cost
  is validated against `salaryCostForEmployeeInGroup(employeeId, groupId)`.
- `Training budget 2026 · Needs update` is an exploration state for reviewing
  budget changes since last review. It uses `F0Alert` for the global warning,
  `F0Dialog position="right"` for the review panel, and `OneDataCollection` to
  list affected groups before the user marks the changes as reviewed.
- Budget group sidepanel keeps `F0Dialog position="right"`. Header actions now
  use the standard dialog action slot only for `Go to Training group`; previous
  and next group controls are overlaid into the same top-level header action
  row because `F0DialogHeader` collapses more than two `otherActions` into the
  `...` dropdown.
- `packages/f0compose/src/prototypes/trainings/costsByLegalEntityToggleStore.ts`
  keeps the prototype-only `Costs by legal entity` toggle synced by training
  group between the budget sidepanel and the group Costs tab.
- Cost sidepanel visual parity remains blocked and must not be edited without a
  fresh Figma-scoped audit.

### Verification

- Run `pnpm check src/prototypes/trainings` after each Trainings delta.
- Run `pnpm check src/prototypes/trainings/detail/TrainingsDetail.tsx` after
  header changes.
- Run `pnpm check src/prototypes/trainings/detail/class/ParticipantsTab.tsx`
  after participants changes.
- Run `pnpm check src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx`
  after budget changes.
- Run `pnpm tsc --noEmit` before declaring the delta complete.
- Browser-check `http://localhost:5174/p/trainings?training=trn-001` and any
  touched sub-view before declaring visual parity.
- Browser-check `http://localhost:5174/p/trainings-budgets?view=detail&budgetId=bud-training-2026`.
- Browser-check group detail costs URLs for `cls-communication-madrid-morning`,
  `cls-communication-france-morning`, and `cls-communication-italy-morning`.
