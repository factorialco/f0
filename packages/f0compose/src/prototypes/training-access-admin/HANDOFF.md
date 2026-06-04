# Training Access Admin Prototype Handoff

Prototype: http://localhost:5174/p/training-access-admin

## Source documents

Do not duplicate the permission model here. These Notion docs remain the source of truth:

- Permissions: https://www.notion.so/35e5e6e051ee80c6ad62f5fbb6404acf
- Training Permissions: https://www.notion.so/29c5e6e051ee80c1967cd9288b923705
- Scope 1, per-training collaborators: https://www.notion.so/35f5e6e051ee811c9ee9fefee6b4fb85
- Scope 2, class-level instructor capabilities: https://www.notion.so/35f5e6e051ee815d9b6df39eee9b456c

This file only captures prototype-specific UI decisions and handoff deltas.

## Prototype scope

Admin manages access from the real training detail page via a single `Share` action.

No extra admin screen is introduced. The permission surface lives in the `Share training` modal.

The rest of the training detail page should stay aligned with the existing Trainings detail structure.

## Code composition rule

Scope 1 must be useful as developer handoff. The source must use F0/f0compose
components, not custom HTML wrappers.

- No raw `<div>`, `<span>`, `<button>`, `<a>`, `<img>`, lists, tables or headings
  in the `training-access-*` prototype source.
- Use `F0Box`, `F0Text`, `F0Button`, `F0Avatar`, `F0Icon`, `F0Card`,
  `OneDataCollection` and existing Trainings/F0 patterns instead.
- If a raw tag is unavoidable, document why in code and list it in this handoff
  before considering Scope 1 ready.
- The refactor from HTML to F0 must not change visible UI, routes, role behavior
  or product decisions.

### Documented source exceptions

These exceptions are intentional because the prototype must preserve existing
interaction parity over forcing an incomplete F0 approximation:

- `TrainingAccessAdmin.tsx` keeps raw HTML for the mimicked `Add people`
  employee selector field and dropdown. `F0Box` cannot reproduce the required
  tokenized input, `top-full` dropdown anchoring, z-index, hover row behavior and
  shadow without changing the UI.
- `TrainingAccessAdmin.tsx`, `TrainingAccessEditor.tsx` and
  `TrainingAccessViewer.tsx` keep a raw HTML copied-state tooltip for
  `Copy link`. `ResourceHeader` renders the action internally and does not
  expose a ref/render slot; `F0Box` cannot express the required fixed offsets and
  z-index. The tooltip must appear below the clicked button.

## Admin closure

The Admin UI surface is considered closed when the modal supports the product model already defined in Notion without adding another admin screen:

- Training-level collaborators are managed from `Share training`.
- Admin can add Editors and Viewers to the training.
- Admin can batch-select multiple employees before adding them with one role.
- Admin can update a direct collaborator role from the access list.
- Admin can remove a direct collaborator from the access list.
- Author/Owner is visible and protected from removal in this modal.
- Instructor-derived access is visible but not managed in this modal.
- Direct collaborator + instructor is shown as one effective row, not duplicates.

What remains to close Admin is not a new UI surface. It is confirming the exact open details below and then updating the source Notion/spec.

## Decisions closed in prototype review

- The Admin v1 permission surface can live in a modal. No separate Admin permissions page is needed for training-level collaborators.
- The entry CTA stays `Share`, because the user intent is sharing a course with people, even if the implementation is access management.
- The prototype keeps the protected creator row labelled `Owner`, matching the current UI and the ownership language in `Training Permissions`.
- The source docs still conflict on `Owner` vs `Author`, so implementation should reconcile that naming before build.
- Managing collaborators is Admin-only for v1.
- Editors do not see `Share` for now. Do not show a disabled Share button with tooltip in this Admin prototype.
- Removing direct collaborator access is immediate. No confirmation modal for v1.
- People who already have direct access should not be selectable in `Add people`.
- People already selected as chips should not appear again in the search results.
- Instructor-only people can still be selected, because adding direct training access is meaningful.
- Direct collaborator + instructor remains one row in the access list with instructor context in secondary text.

## Role-specific course access

- The course list in `training-access-editor` and `training-access-viewer` is
  filtered by the effective training permission. Users should only see courses
  they can access through `Owner`, direct `Can edit`, direct `Can view`, or
  instructor-derived access according to the prototype role.
- `Can edit` keeps course-content editing available, but operational/admin
  actions are not executable unless the user is an admin. This includes creating
  courses, importing/exporting training data, creating groups, adding
  participants, creating sessions, uploading materials or documents, creating
  surveys, exporting Fundae data, opening the Fundae portal from this flow, and
  adding/editing costs.
- `Can view` is read-only. It can navigate, search, filter, open allowed detail
  pages, and preview existing survey content, but it cannot execute mutations.
- Admin-only and operational CTAs are treated differently per role:
  - `Can view` (Viewer): these CTAs are **hidden entirely** — no greyed-out
    buttons. The header still shows the role as a metadata item ("Access: Can
    view") so the user understands why the surface is read-only. The
    `hideActions` flag drives this in `ReadOnlyTabs` / `ReadOnlyClassDetail`,
    and the Courses list omits `primaryActions`/`secondaryActions`/bulk/row
    admin actions for `role === "viewer"` in `AccessCoursesPage`.
  - `Can edit` (Editor): these CTAs remain **visible but disabled**, with copy
    explaining that admin access is required.

## Admin UI decisions

- `Share` is the primary header action for published trainings.
- `Copy link` and `Course settings` stay as secondary icon actions.
- `Revert to draft` stays in overflow.
- The modal title is `Share training`; the course name appears as modal description.
- The modal has two zones: add people, then people with access.

## Add people interaction

- `Add people` behaves like a tokenized search field.
- Clicking into the field opens a contextual results list.
- Typing filters the results list.
- Selecting a person closes the results list and adds a removable chip inside the field.
- Multiple people can be selected before pressing `Add`.
- Selected chips flow naturally in the same field and wrap only when needed.
- If many chips are selected, the chip area should scroll inside the field rather than pushing the modal indefinitely.
- `Add` is disabled until at least one person is selected.
- `Access` applies to all selected people in that add action.

## People with access list

- Each person appears once.
- Direct collaborators show their effective direct role: `Can edit` or `Can view`.
- Direct collaborators can change role or remove access from their row action.
- Owner is read-only in this modal.
- Instructor-only access is read-only in this modal.
- If someone is both direct collaborator and instructor, show one row only.
- For direct + instructor, keep the editable direct role control and show instructor context as secondary text.
- Removing direct access from direct + instructor should leave the inherited instructor row visible.

## Copy rules

- Use user-facing labels only: `Owner`, `Can edit`, `Can view`, `Instructor`.
- Do not expose internal terms such as `direct`, `derived`, `source`, or `direct + instructor`.
- Success/warning messages appear only after user action, not as persistent explanatory banners.

## Open product details

These are not fully settled by the prototype and should be confirmed in the source docs before implementation:

- Whether `Owner`/`Author` can be transferred in v1 from this surface, or whether transfer stays outside this prototype.
- Whether the source docs should standardize the protected creator label as `Owner` or `Author`.
- Whether the source docs should be reconciled so Scope 1 and the parent `Permissions` doc agree on Admin-only collaborator management.
- Whether later scopes allow Editors to manage collaborators.
- Whether the search should hide already-added people entirely or show them disabled with `Already has access` in the future. Prototype currently hides them.

## QA states to validate

- Open `Share training` from the course detail header.
- Search and select one person.
- Search and select multiple people.
- Remove a selected chip before adding.
- `Add` disabled with no selected people.
- Add selected people with `Can edit`.
- Add selected people with `Can view`.
- Change an existing collaborator from `Can edit` to `Can view`.
- Remove an existing direct collaborator.
- Attempt to add a person who already has access.
- Owner row cannot be changed or removed.
- Instructor-only row cannot be changed or removed.
- Direct + instructor row appears once and keeps instructor context.
