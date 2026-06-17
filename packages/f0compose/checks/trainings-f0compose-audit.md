# Trainings f0compose Audit

## Training Permissions Role Gate

Applies to `training-access-admin`, `training-access-editor`,
`training-access-viewer`, and shared files under `training-access-shared`.

- Course lists for non-admin roles must be filtered by the effective training
  permission. Do not show all company trainings in `Can edit` or `Can view`.
- `Can edit` may edit course content only. It must not execute admin or
  operational mutations such as creating courses, importing/exporting training
  data, creating groups, adding/removing/moving participants, creating sessions,
  uploading materials or documents, creating surveys, exporting Fundae data,
  opening the external Fundae portal from this flow, or adding/editing costs.
- `Can view` must remain read-only. Navigation, search, filters, allowed detail
  pages, and existing content previews are allowed; mutations are not.
- Admin-only and operational CTAs in `Can edit` and `Can view` should remain
  visible but disabled with permission copy, rather than becoming executable or
  disappearing by accident. Row actions are the exception only when the F0 API
  cannot render disabled row actions; in that case the mutation must not appear
  as an executable row action.
- PR handoff must explicitly mention both behaviours: course visibility is
  permission-filtered, and admin/operational CTAs are intentionally disabled for
  non-admin access roles.
