# Handoff — Expense Policy Settings (co-creation slice 1)

> **Audience:** the next designer (or you, tomorrow) picking this up
> mid-conversation in opencode. Read this top-to-bottom; everything
> below is current as of `prototype/expense-policy-co-creation-slice-1`.

## Live URLs

- **Prototype (deployed):** https://f0-expense-policy-settings.vercel.app
- **Local dev:** http://localhost:5174/p/expense-policy-settings (after `pnpm dev` in `packages/f0compose/`)
- **Branch:** `prototype/expense-policy-co-creation-slice-1` (push to `origin` of the f0 monorepo)

## Goal

Iterate UX/UI on the `expense-policy-settings` prototype slice 1:
real Mastra + One co-creation script that walks the admin through
setting up the **Regular** expense form via 3 clarifying questions.
Per diem + Mileage are slice 2 (next session).

Spec: PSPEC §3 "Co-creation flow", cascade tables mirrored under
"Cascade tables" below.

## What's done in this slice

### Frontend (`packages/f0compose/src/prototypes/expense-policy-settings/`)

- **`data/cascades.ts`** — pure cascade functions encoding all Q1/Q2/Q3
  tables from the spec. Exports `Q1OptionId`/`Q2OptionId`/`Q3OptionId`
  union types that are the wire contract with the Mastra skill.
- **`data/usePolicyData.ts`** — added bulk-replace setters
  (`replaceCategories`, `replaceSubcategories`, `replacePaymentMethods`)
  the cascades call.
- **`copilot/useExpensePolicySetup.ts`** — `SetupAnswers` state
  (last-answered values per question + per-form activation flags
  derived from Q1).
- **`copilot/useExpensePolicySetupActions.ts`** — three silent
  `useCopilotAction` hooks (no `render`, `available: "enabled"`):
  `applyExpenseTypesAnswer` (Q1), `applyExtraFieldsAnswer` (Q2),
  `applyPaymentMethodsAnswer` (Q3). Each decodes ids, runs the
  cascade, mutates `policyData` + `formsSource`, stores answer in
  `setupState`, returns a concise summary to the agent.
- **`copilot/useRenderRegularSummaryAction.tsx`** — inline summary
  card with "Looks good" + "Make changes" CTAs. Read from
  `setupState.answers`.
- **`copilot/useExposeContext.ts`** — extended to surface `setup.q1Answered`,
  `setup.q2Answered`, `setup.q3Answered` plus selected ids and custom
  free-text per question. The skill's system prompt branches on these.
- **`ExpensePolicySettings.tsx`** — wired `useExpensePolicySetup()` +
  `useExpensePolicySetupActions(...)` + `useRenderRegularSummaryAction(...)`.
  "Looks good" appends a user message; "Make changes" appends a
  user message asking which question to re-open. The skill handles
  both.

The pre-existing welcome bubble + "Start setup" red CTA flow
(`useCoCreationOpenerAction` + `useStartSetupAction`) is unchanged —
the agent picks up after the CTA drills to `forms-detail`.

### Backend (`~/code/factorial-agent/src/mastra/one/prompts/skills-v3/`)

- **`expensePolicySetup.ts`** — new V3 skill (1.2K tokens). System
  prompt walks Q1 → apply → Q2 → apply → Q3 → apply → summary →
  Looks-good → completeSubStep. Also handles "Make changes" loop.
- **Registered** in `skills-v3/index.ts` (3 lines: import + entry).

> ⚠️ The factorial-agent edits are **local-only** per
> `packages/f0compose/AGENTS.md`. They are NOT committed to
> factorial-agent main. A verbatim copy of the skill file is
> checked into this prototype as `factorial-agent-skill.ts.txt` —
> if you're a new designer joining, see "Recreating the Mastra skill"
> below.

## Cascade tables (canonical — agent contract)

### Q1 — Which kinds of expenses do your employees submit?

multi-select, `allowCustom: true`. Default-checked: `meals`, `travel`, `office-supplies`.

| Option id | Label | Category effect | Subcategory seeds | Per diem | Mileage |
|---|---|---|---|---|---|
| `meals` | Meals | "Meals" visible | Client meal, Team meal, Solo work meal | — | — |
| `travel` | Travel | "Travel" visible | Flights, Hotels, Ground transport | — | — |
| `per-diems` | Per diems | "Per diems" visible | Half-day, Full-day, Overnight | **activated** | — |
| `office-supplies` | Office supplies | "Office supplies" visible | — | — | — |
| `fuel` | Fuel | "Fuel" visible | — | — | **activated** |
| `software` | Software | "Software" visible | — | — | — |
| `training` | Training | "Training" visible | — | — | — |
| _unchecked_ | — | Hidden from dropdown | — | — | — |
| `custom` free-text | Other | Acknowledge, suggest "Other"; not applied | — | — | — |

### Q2 — What other info should employees include?

multi-select, `allowCustom: true`. Default-checked: `description`.
All selected fields land Optional, applied to all 3 forms.

| Option id | Label | Field id (`forms/fields.ts`) |
|---|---|---|
| `project` | Project | `projects` |
| `cost-center` | Cost center | `cost-centers` |
| `description` | Description | `description` |
| `internal-reference` | Internal reference | `internal-reference` |
| `nothing-extra` | Nothing extra | (exclusive — hides all four) |

### Q3 — How do your employees pay for these expenses?

single-select, `allowCustom: true`. Default: `personal-cards`.

| Option id | Label | Payment methods set to |
|---|---|---|
| `personal-cards` | Personal cards | Personal debit, Personal credit, Cash |
| `company-cards` | Company cards | Company card, Cash |
| `mix` | Mix | Personal debit, Personal credit, Company card, Cash |
| `cash-advance` | Cash advance | Cash advance, Cash |
| `custom` free-text | Other | Parse + confirm (slice 1 falls back to `personal-cards`) |

## How the flow runs end-to-end

1. Admin opens `/p/expense-policy-settings`. The `useCoCreationOpenerAction`
   appends a welcome bubble + a red "Start setup" CTA (frontend-rendered,
   not Mastra-driven).
2. Admin clicks "Start setup" → `useStartSetupAction` drills view to
   `forms-detail?type=regular`.
3. The skill's `setup.q1Answered` is `false` → on the next user message
   (any greeting, or you can prime by typing "go") the agent calls
   `askClarifyingQuestion` with Q1.
4. F0's `useClarifyingQuestionAction` (auto-registered inside F0AiChat)
   swaps the composer for the question panel. User picks options,
   submits.
5. Submission posts a markdown summary as a user message. Agent's
   next turn:
   a. Calls `applyExpenseTypesAnswer` (silent — mutates `policyData`).
   b. Acknowledges in 1 sentence.
   c. Calls `askClarifyingQuestion` again with Q2.
6. Same pattern for Q2 → `applyExtraFieldsAnswer` → Q3.
7. After Q3 the agent calls `applyPaymentMethodsAnswer` then
   `renderRegularSummary` (paints the recap card with CTAs).
8. "Looks good" → `appendMessages` posts "Looks good — let's continue."
   → agent calls `completeSubStep("regular")`. Slice 1 stops here.
9. "Make changes" → posts "I want to change one of my answers…" →
   agent asks which (Q1/Q2/Q3) → re-runs that question (warning: hard-
   reset, overwrites manual edits per spec §8).

## Environment

- **f0 monorepo** at `~/code/f0` (or wherever you cloned).
- **factorial-agent** as a sibling at `~/code/factorial-agent`. Must be
  running on `https://mastra.local.factorial.dev/copilotkit` via
  Traefik. Start with `cd ~/code/factorial-agent && pnpm dev`.
- **f0compose** at `~/code/f0/packages/f0compose`. Start with `pnpm dev`
  (port 5174). Auto-syncs the bundled skills on install + start.
- **Graceful degrade:** if Mastra isn't running, the welcome bubble +
  Start setup CTA still work (they're prototype-local). The
  clarifying-questions panel will never appear because the agent
  isn't there to emit `askClarifyingQuestion` — the chat will just
  hang on a thinking spinner after any user message. That's
  expected; tell the recipient to start factorial-agent.

## Recreating the Mastra skill (one-time, local-only)

The skill is not committed to factorial-agent. To apply it locally:

```sh
# 1. Copy the file
cp packages/f0compose/src/prototypes/expense-policy-settings/factorial-agent-skill.ts.txt \
   ~/code/factorial-agent/src/mastra/one/prompts/skills-v3/expensePolicySetup.ts

# 2. Register it in the index
# Edit ~/code/factorial-agent/src/mastra/one/prompts/skills-v3/index.ts
#   - Add:   import expensePolicySetup from './expensePolicySetup'
#   - Add:   expensePolicySetup,   inside the SkillDefinitionsV3 object
# (Both edits go next to the existing `expenseSettings` import + entry.)

# 3. Restart factorial-agent so it reloads the skill registry
# (in its terminal: Ctrl-C, pnpm dev again)
```

The skill file is ~95 lines, prompt-only, no new tools, no schema
changes. It depends only on `askClarifyingQuestion` (already in
factorial-agent) and frontend tools declared by the prototype.

## What's next (slice 2)

In order:

1. **Per diem** sub-step. Add Per-diem-specific question ("track
   destination?") per the cascade table. New silent tool
   `applyPerDiemAnswer`. Reuse `renderPerDiemSummary` pattern.
2. **Mileage** sub-step. Question ("distance only / route / both"),
   `applyMileageAnswer`, `renderMileageSummary`.
3. **Final handoff** from agent. `completeStep("expense-forms")` →
   moves the wizard to "Rates" outer step.
4. Tighten the §8 "Make changes" loop: currently it's narrated by the
   skill; consider promoting to a structured branch picker.
5. Add custom free-text handling for Q3 (parse + confirm) — currently
   falls back to `personal-cards`.
6. Token-trim `useExposeContext` (currently re-sends all context per
   turn).

## Known issues / parked work

- **Pre-existing tsc errors** in `_shared/selectPolicyAlert.ts` and
  `card-refunds-poc/` — NOT in our prototype. Unrelated, don't fix
  here.
- **Spacing** in `FormsSummaryView`: H1 (breadcrumb current-page) ↔
  subtitle still a touch loose. Parked.
- **History reload**: if the user refreshes mid-conversation, the
  `setupState` resets to `INITIAL` but the agent's memory may still
  think Q1 is answered. The skill's prompt reads `setup.q*Answered`
  from the readable context so it self-corrects — verify in
  smoke-test.
- **`appendMessages` race**: the welcome bubble uses a 300ms
  `setTimeout` because the messages bridge isn't ready immediately.
  The summary CTAs use `appendMessages` AFTER the chat is already
  open, so no race risk.

## Critical context (do not violate)

- All imports must go through `@/copilot` — never import `@copilotkit/*`
  or `F0AiChat` directly (SKILL.md rule).
- Only `f1-*` tokens, no raw colors.
- No bare HTML; only F0 components.
- factorial-agent edits are local-only — DO NOT commit factorial-agent
  changes.
- Option ids in `data/cascades.ts` (Q1/Q2/Q3 union types) are the wire
  contract with the Mastra skill. Renaming one means renaming both
  sides simultaneously.
- The skill MUST call the silent apply-tool between a user submit and
  the next ask, otherwise the policy state desyncs from what the
  agent thinks.

## Relevant files

```
packages/f0compose/src/prototypes/expense-policy-settings/
├── ExpensePolicySettings.tsx            ← wired
├── HANDOFF.md                           ← this file
├── RESUME_PROMPT.md                     ← paste into opencode to resume
├── factorial-agent-skill.ts.txt         ← copy into factorial-agent locally
├── data/
│   ├── cascades.ts                      ← NEW: Q1/Q2/Q3 cascade tables
│   ├── seeds.ts                         ← reference for cascade outputs
│   ├── types.ts
│   └── usePolicyData.ts                 ← + replace* setters
├── copilot/
│   ├── useExpensePolicySetup.ts         ← NEW: answers state
│   ├── useExpensePolicySetupActions.ts  ← NEW: 3 silent apply tools
│   ├── useRenderRegularSummaryAction.tsx ← NEW: summary card
│   ├── useExposeContext.ts              ← + setup.* fields
│   ├── useCoCreationOpenerAction.ts     ← unchanged (welcome + Start setup CTA)
│   ├── useStartSetupAction.tsx          ← unchanged
│   ├── useNavigateToViewAction.ts       ← unchanged
│   ├── useChatTitle.ts                  ← unchanged
│   └── useHideChatComposer.ts           ← unchanged (no-op)
└── wizard/
    └── useWizardCompletionActions.ts    ← unchanged (completeStep/completeSubStep)
```

```
~/code/factorial-agent/src/mastra/one/prompts/skills-v3/
├── expensePolicySetup.ts                ← NEW (local-only)
└── index.ts                             ← + 2 lines (import + registry entry)
```
