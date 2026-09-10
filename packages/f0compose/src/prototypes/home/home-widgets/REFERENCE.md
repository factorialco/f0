# Widget reconstruction on the approved home

Source: factorialco/factorial-composer PR #48, head a195443436423c374df591ed4c1e64f6624a8760.

- recruitment.ts: copied from src/projects/home/custom-home/v3/mocks/recruitment.ts unchanged.
- documents.ts: records and types copied from v3/mocks/documents.ts; directory resolution omitted because employee IDs belong to the other repository. Rows show action and recency without inventing actor names.
- OriginalStackWidgets.tsx: adapts RecruitmentWidget, RecentDocumentsWidget and the static F0 layout of shared/components/WidgetListItem. Phase icons, tags and file avatars preserved. The current WindowStack replaces only the upstream Widget shell, so existing close/resize/maximize behavior stays intact.
- Payroll and holiday data are the separately proposed mocked extensions, not widgets copied from PR #48.
- Home.tsx, HybridHome.tsx, ConversationView.tsx and the original composer are unchanged. Only optional scripted replies are added to the existing contextual conversation entry point.
- The richer expense upload and team-status dialog flows from PR #48 are not yet ported.

## Use inside the original conversation — 2026-09-10

PR head reverified at a195443436423c374df591ed4c1e64f6624a8760. Read upstream v3/components/RecruitmentWidget.tsx, v3/components/NeedsYouFocus.tsx and shared/components/WidgetListItem.tsx. The same adapted RecruitmentWindow now renders in briefing/report message cards; optional limits and candidate filtering select relevant rows without rebuilding their phase avatars or tags. Original window defaults remain the full upstream candidate set. NeedsYouFocus's framework helpers were inspected but not ported. Task rows and publication content reuse the approved local implementations. Report-only measurements are separately identified mock additions in setup/mock-data.ts.

## Structured entry revision — 2026-09-10

The original home components are now extended (not unchanged): HybridHome docks the existing One follow-up adaptation; ConversationView renders direct NeedsYouItem, the exported original Communities Post, and F0 Celebration. Extra outer cards around these complete components have been removed. PR #48 candidate/document rows and WindowStack ownership remain as described above. Payroll/time-off labels and contextual replies are now English. See ../memory/2026-09-10-structured-home-revision.md.
