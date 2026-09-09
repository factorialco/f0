# Navigation reference import

Source: https://github.com/JonathanCenteno/Factorial-navigation/tree/factorial-2027-tabs
Commit: 26161d2727f18d26811730eec8802d98e9e54da6

## Approved scope

Reuse the legal entity, Help and personal menus; order the rail footer as Marketplace, Settings, Notifications, Help, personal avatar. Help and personal menus open to the right. Copy all existing Hub screen content and nested routes, keeping Home and its agent entry.

## Integration

The reference/ directory contains source screens, layouts, table hooks, mock data and route declarations, not re-created screenshots. Local adapters translate source paths into Home query parameters, derive role from the existing profile store, and retain the F0 headers and tabs. The separate Spending chat registration is omitted to preserve the existing Home agent. No reference shell or global stylesheet is imported.

Validate Time tracking first within Home, then menus and every module's tabs. Check type safety, rendering, entity selection persistence, Escape/outside dismissal, rightward menu placement, and browser history. Some source detail routes and tabs are intentionally unbuilt; preserve explicit empty states.

## Verified result (2026-09-09)

- Imported Time tracking (team and personal), Time off, Documents, Projects, Spending, Training and the personal profile directly from the source files.
- Browser checks: entity selection and persistence across reload; Help/personal content, Escape dismissal, and rightward bounds (menu x=56, rail ends x=48); all seven screen roots; document Library/Templates/Trash and payroll-folder round-trip; Training Requests table plus source-empty Budgets/Insights; Spending Cards table; Time tracking personal tab persistence, back navigation, and existing agent expansion.
- Fixed route matching to include a leading slash and made path translation idempotent for existing Home URLs. Folder breadcrumbs, tabs and deep links stay inside Home.
- Imported root page headers defer to Home's existing title and agent entry, retaining F0 breadcrumbs for nested folders; no duplicate AI switch. Existing profile/theme preview controls remain under Preferences.
- TypeScript and the prototype checker pass (184 files). A React list-key warning originates inside F0's collection toolbar; no library file was changed.

## Source limitations retained

Projects Schedule/Tracking/Jobs and rates/People and Training Budgets/Insights are explicit placeholders in the reference. Course/project/request detail screens are not implemented upstream. Help external URLs use the source's reserved `.example` domain, and support/sign-out actions remain mocked. Marketplace, Settings, Notifications and complaint destinations have no imported body. The entity selection is a persisted prototype selection; the sample dataset does not change per entity.
