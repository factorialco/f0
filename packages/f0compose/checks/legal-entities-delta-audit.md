# Legal Entities Delta Audit

Date: 2026-05-20

Scope: only the new/staged legal-entity and multi-entity-budget changes.

This audit deliberately excludes broad legacy Trainings debt unless the current
delta touched or depended on it.

## Files In Scope

- `src/fixtures/trainings-extra.ts`
- `src/prototypes/trainings/detail/CostsTab.tsx`
- `src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx`
- `src/prototypes/multi-entity-budget/MultiEntityBudget.tsx`
- `src/prototypes/multi-entity-budget/detail/ClassDetail.tsx`
- `src/prototypes/multi-entity-budget/detail/CostsTab.tsx`
- `src/App.tsx` only to classify whether the change is out of scope

## Compliant Delta

| File                                                             | Change                                                                                                                                          | Why compliant                                                                                                                                                                |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/fixtures/trainings-extra.ts`                                | Added `endDate` / `legalEntityId` to budget fixtures                                                                                            | Supports legal-entity ownership and budget period data                                                                                                                       |
| `src/prototypes/multi-entity-budget/MultiEntityBudget.tsx`       | Replaced raw group checkbox list with `EntitySelect` in add-group dialog                                                                        | Uses F0 selection pattern instead of hand-rolled checkbox list                                                                                                               |
| `src/prototypes/multi-entity-budget/MultiEntityBudget.tsx`       | Matched upstream AddGroupModal structure for the add-group selector: `F0Dialog width="xl"`, summary cards, separator, and inline `EntitySelect` | Prevents the selector overlay from covering the modal and follows `frontend/src/modules/trainings/components/Budgets/TrainingResourceDataCollection/AddGroupModal/index.tsx` |
| `src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx` | Matched upstream AddGroupModal structure for the add-group selector: `F0Dialog width="xl"`, summary cards, separator, and inline `EntitySelect` | Prevents the selector overlay from covering the modal and follows `frontend/src/modules/trainings/components/Budgets/TrainingResourceDataCollection/AddGroupModal/index.tsx` |
| `src/prototypes/multi-entity-budget/MultiEntityBudget.tsx`       | Added F0Dialog metadata for payment status/timeframe in group and legal entity sidepanels                                                       | Uses `F0Dialog` metadata instead of custom header chips                                                                                                                      |

## Non-compliant Delta

| File                                                             | Element                                                                      | Problem                                                                                                          | Required fix                                                                                         |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx` | `SidepanelFrame`                                                             | Custom fixed overlay/sidepanel with raw `section`, `button`, `span`, manual tabs/header/actions                  | Replace with `F0Dialog position="right"` using metadata, tabs and F0 actions                         |
| `src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx` | `SidepanelFrame` inline style                                                | Raw pixel width and `rgba` box-shadow                                                                            | Use `F0Dialog width="md"` / documented F0 sizing and tokens                                          |
| `src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx` | `Export budget` action                                                       | `onClick: () => {}` fake interaction                                                                             | Wire to `setIsExportOpen(true)` or remove with upstream evidence                                     |
| `src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx` | `AmountWidget`                                                               | Custom raw `div`/`span`, inline typography                                                                       | Use `Widget` or F0 typography/layout without inline styles                                           |
| `src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx` | `GroupSidepanelCostTab`, `GroupSidepanelParticipantsTab`, `LegalEntityInput` | Hand-rolled legal-entity UI, fake readonly inputs, raw participant table                                         | Use F0/F0Dialog, `OneDataCollection` for participants, real documented input/readonly patterns       |
| `src/prototypes/trainings/detail/CostsTab.tsx`                   | `CostsByLegalEntitySection`                                                  | Raw clickable legal-entity card buttons/spans and local-only sidepanel state                                     | Use documented F0 row/card pattern or `OneDataCollection`; URL/shared state if treated as sub-screen |
| `src/prototypes/trainings/detail/CostsTab.tsx`                   | Legal-entity sidepanel participants tab                                      | Staged version had placeholder Participants content; current working tree improved it, but staged delta was fake | Keep real `OneDataCollection` implementation or remove tab until real                                |
| `src/prototypes/multi-entity-budget/detail/CostsTab.tsx`         | `CostBreakdownCard`                                                          | Replaced F0 icons with emoji strings                                                                             | Use correct F0 icons via `F0Icon`                                                                    |
| `src/prototypes/multi-entity-budget/detail/CostsTab.tsx`         | Budget link / linked budget state                                            | Hardcoded `bud-001`, removed linked-budget/payment controls                                                      | Derive budget from movement/class fixture; restore controls only if upstream requires                |
| `src/prototypes/multi-entity-budget/detail/CostsTab.tsx`         | Legal-entity dialog                                                          | Cost-only sidepanel, missing metadata/tabs/participants                                                          | Add `F0Dialog` metadata, tabs and real participants `OneDataCollection`                              |
| `src/prototypes/multi-entity-budget/MultiEntityBudget.tsx`       | Legal entities DataCollection column                                         | Replaced `tagList` with plain `First LE +N` text                                                                 | Use documented `tagList` or confirm PR4085 wants plain text                                          |
| `src/prototypes/multi-entity-budget/MultiEntityBudget.tsx`       | `GroupSidepanel` CTA                                                         | Removed `Go to Training group` primary action                                                                    | Restore if upstream/PR4085 includes it, or document evidence for removal                             |

## Needs Product Decision

| File                                                                                                                            | Element                        | Decision needed                                                          |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------ |
| `src/prototypes/multi-entity-budget/MultiEntityBudget.tsx` and `src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx` | Payment status copy            | Choose upstream label once: `Paid` vs `Spent`                            |
| `src/prototypes/multi-entity-budget/MultiEntityBudget.tsx`                                                                      | `EntitySelect` copy            | Confirm exact copy: `trainings selected` vs `training groups selected`   |
| `src/prototypes/trainings/_modules/budgets/TrainingsBudgets.tsx` and `src/prototypes/multi-entity-budget/MultiEntityBudget.tsx` | `Add training group` placement | Confirm whether PR4085/Figma shows it as primary CTA or secondary action |

## Out-of-scope Changes Included In The Current Delta

| File                                                        | Change                                    | Why out of scope                                      | Required action                                             |
| ----------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| `src/App.tsx`                                               | `if (!aiChatConfig.enabled) return inner` | CopilotKit boot behavior, unrelated to legal entities | Move to separate PR/commit or revert from this scope        |
| `src/prototypes/multi-entity-budget/detail/ClassDetail.tsx` | Missing-class fallback cleanup            | General F0 cleanup, not legal-entity behavior         | Keep only if opportunistic cleanup is allowed               |
| `src/prototypes/multi-entity-budget/detail/ClassDetail.tsx` | Breadcrumb changes                        | Navigation parity, not legal-entity UI                | Restore unless upstream/PR4085 proves the breadcrumb change |

## Current Working Tree Notes

There are unstaged changes beyond the staged legal-entity delta:

- `AGENTS.md`: process rule update.
- `ClassDetail.tsx`, `TrainingsDetail.tsx`, `tabs.ts`: breadcrumb/tab fixes made during discussion.
- `CostsTab.tsx`: additional sidepanel/participants changes after the staged delta.
- `checks/trainings-f0compose-audit.md`: broad historical audit.
- screenshots and `.playwright-mcp/`: verification artifacts.

These should not be bundled into the legal-entities delta unless explicitly
accepted.
