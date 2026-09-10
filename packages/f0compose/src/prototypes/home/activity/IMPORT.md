# Activity collection

Uses F0 OneDataCollection with its list visualization. The source reference is Factorial's frontend/src/modules/inbox_tasks/components/InboxList/index.tsx and usePresets.ts: itemDefinition supplies title, description and avatar; fields supply tags; itemActions supplies row actions; presets supplies the collection's state views.

Activity keeps its existing simulated records and decision panel. Status and owner filters, search and date grouping run through useDataCollectionSource. There are no separate navigation tabs or custom row/card components. The expense breakdown uses the same list inside the existing detail panel.

f0-list-utilities.ts lists existing F0 responsive utilities for the composer's Tailwind content scan. Its later base utilities otherwise override the responsive styles in the earlier precompiled F0 bundle. No new CSS rules or F0 component overrides are authored.

Verified in-browser: Needs you filters to two records; searching Laura narrows to one; Expenses agent filters to three records; the expense batch opens all ten individual expenses. TypeScript and the prototype checker pass.

Follow-up: native preset counters count top-level rows; task-specific F0 icons replace generic AI icons; person tasks use F0 person avatars with initials. Date grouping is enabled only for a Completed-only view. Mock breakdowns cover expenses, expense exceptions and reviews, onboarding preparations, documents, time-off requests and timesheet reminders. Verified Needs you and In progress without date groups, Completed with groups, four time-off rows and six reminder rows with personal avatars.
