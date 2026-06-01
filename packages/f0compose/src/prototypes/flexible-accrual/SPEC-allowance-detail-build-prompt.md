# Allowance Detail Page — Build Prompt
### Time Off → Policy → Allowance · f0compose prototype

> **Self-contained.** This document has all context needed to build from scratch.
> No screenshots are referenced. Every layout is described in prose.
> Use the f0-repository design system (`@factorialco/f0-react`, `@factorialco/f0-react/dist/experimental`, `@factorialco/f0-react/icons/app`) and `f1-*` Tailwind tokens throughout. No raw colours.

---

## 1. Page context & navigation

The prototype lives in the `flexible-accrual` slug (`src/prototypes/flexible-accrual/`). It covers the full **Settings → Time off** section.

### 1.1 Routing

All navigation is driven by `useSearchParams` from `react-router-dom` — no `useState` for view selection.

| URL params | Screen rendered |
|---|---|
| _(none)_ | Settings landing |
| `?view=time-off` | Time off list (tabs) |
| `?view=time-off&tab=policies&policy=<id>` | Policy detail |
| `?view=time-off&tab=policies&policy=<id>&allowance=<id>` | **Allowance detail** ← this spec |

### 1.2 Tab bar — Time off section

When `view=time-off`, a primary `<Tabs>` strip (inside `<Page header>`, sticky) shows five tabs in this order:

1. **Time off policies** (`policies`)
2. **Accrual Rules** (`accrual-rules`)
3. **Absence types** (`absence-types`)
4. **Approval groups** (`approval-groups`)
5. **Blocked periods** (`blocked-periods`)

Each tab's `onClick` calls `setSearchParams` to update the `tab` param. The active tab is read from `searchParams.get("tab")`, defaulting to `"policies"`. Pass `key={activeTab}` to `<Tabs>` so it remounts when the URL changes externally (breadcrumb navigation, browser back).

### 1.3 Policy detail tabs

When a policy is open (`policy=<id>` present, no `allowance=<id>`), a secondary `<Tabs>` bar appears below the `ResourceHeader` (still inside the sticky `<Page header>` slot):

1. **Basic Information** (`basic`) — shows policy fields + list of allowances
2. **Employees** (`employees`) — shows the employee roster

Active policy tab is read from `searchParams.get("policyTab")`, defaulting to `"basic"`.

### 1.4 Breadcrumbs

`PageHeader` auto-prepends the `module` as the first breadcrumb. Pass only leaf items to `breadcrumbs={[…]}`.

- On the allowance detail: `Settings > Time off > Policies > <PolicyName> > <AllowanceName>`
  - `module = { id: "time-off", name: "Settings", href: "/p/flexible-accrual" }`
  - `breadcrumbs = [{ label: "Time off", onClick: goTimeOff }, { label: "Policies", onClick: goPolicies }, { label: policyName, onClick: goPolicy }, { label: allowanceName }]`

---

## 2. Allowance detail page — layout overview

The page body (`<StandardLayout>`) renders a single vertically-stacked column with `gap-10` between sections:

```
┌─────────────────────────────────────────────────────────────────────┐
│ [sticky PageHeader + breadcrumbs]                                   │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION A: Basic information                                       │
│  ─────────────────────────────                                      │
│  H2 heading + muted subtitle                                        │
│  Divided field card  (Allowance name / Absence type)                │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION B: Accrual rules                                           │
│  ─────────────────────────────                                      │
│  H2 heading + muted subtitle                                        │
│  Divided question-row card  (4 rows)                                │
│    → row 1 opens Modal 1                                            │
│    → row 2 opens Modal 2                                            │
│    → row 3 opens Modal 3                                            │
│    → row 4 opens Modal 4                                            │
└─────────────────────────────────────────────────────────────────────┘
```

No intermediate callout blocks, no exploration badges — go directly from the section header into the field/question card.

---

## 3. Section A — Basic information

### 3.1 Header

```
H2  Basic information
    Set the core details of this allowance       ← F0Text variant="description"
```

### 3.2 Field card

A single card: `rounded-xl border border-f1-border-secondary bg-f1-background`, rows separated by `divide-y divide-f1-border-secondary`. Each row is a `FieldRow` — label stack on the left, control on the right, `p-4`.

| Field | Control | Notes |
|---|---|---|
| **Allowance name** · _The name employees and managers will see_ | Text input, `w-72`, shows "Name can't be empty" in `text-f1-foreground-critical` when blank | Initialised from `allowance.name` |
| **Absence type** · _The absence this allowance applies to_ | Select (custom-styled with `ChevronDown` icon overlay) | Options: Vacation · Sick leave · Personal day |

> **Counter type (days / hours) is NOT in this section.** It belongs to Modal 1 of the Accrual rules section, because the unit choice governs all four accrual rules. Keeping it separate avoids the user setting a unit in Basic Info that conflicts with the rule they configure later.

---

## 4. Section B — Accrual rules

### 4.1 Header

```
H2  Accrual rules
    Configure how this allowance is generated, used, and deducted   ← F0Text variant="description"
```

### 4.2 Question-row card

A single card: same style as the Basic information field card (`rounded-xl border border-f1-border-secondary bg-f1-background`, rows separated by `divide-y divide-f1-border-secondary`).

The card contains **4 clickable rows**. Each row is a full-width `<button>` with `hover:bg-f1-background-hover` transition and the following horizontal layout:

```
● ← status dot (12 px circle)
    Question text  ← text-sm font-medium text-f1-foreground, flex-1
                               Summary string  ← text-sm text-f1-foreground-secondary, hidden on mobile
                                                  ›  ← ChevronRight icon, sm size
```

**Status dot** — `h-3 w-3 rounded-full border border-solid`:
- **Configured** (user has saved this rule): `bg-f1-foreground-accent border-f1-foreground-accent` (filled accent)
- **Default / unconfigured**: `bg-f1-background border-f1-border` (hollow)

Clicking any row opens the corresponding modal (centered `F0Dialog`).

### 4.3 The four rows

| # | Question text | Default summary (shown right) |
|---|---|---|
| 1 | How many days or hours, and what cycle? | `Per days · 25 days · Yearly` |
| 2 | How are they generated? | `All upfront · starts January` |
| 3 | When can they be used? | `Within the same cycle they're acquired` |
| 4 | How do they deduct? | `Working days · Full days only · Bank holidays excluded` |

The summary is **computed live** from the saved state so it reflects actual configured values once the user has saved a rule. Before saving, it shows the default value.

### 4.4 State model

```ts
type AccrualRulesState = {
  amountCycle:  AmountCycleRule
  generation:   GenerationRule
  availability: AvailabilityRule
  deduction:    DeductionRule
  configured:   Record<"amountCycle"|"generation"|"availability"|"deduction", boolean>
}
```

Keep all state in `useState` at the `AccrualRulesSection` component level. When a modal opens, copy the current state into a local `draft`. `Cancel` discards the draft; `Save` merges it back and flips the corresponding `configured` flag to `true` (which fills the status dot).

---

## 5. Modal shell — shared by all four modals

Use `F0Dialog` from `@factorialco/f0-react` with these props:

```tsx
<F0Dialog
  isOpen={open}
  onClose={onCancel}
  position="center"
  width="lg"
  disableContentPadding
  primaryAction={{ label: "Save", onClick: onSave }}
  secondaryAction={{ label: "Cancel", onClick: onCancel }}
>
  {/* body — see §5.1 */}
</F0Dialog>
```

`F0Dialog` renders its own header (close × button) and footer (`Cancel` / `Save` buttons) automatically from the props above. Do not re-implement them.

### 5.1 Body layout (inside the dialog, `px-5 py-4`, `flex flex-col gap-5`)

```
┌───────────────────────────────────────────────────────┐
│ [icon square]  Question heading                       │
├───────────────────────────────────────────────────────┤
│ Config row 1                                          │
│ Config row 2                                          │
│ Config row N  (per-modal fields, see §6–9)            │
├───────────────────────────────────────────────────────┤
│ AI assist input + quick-action chips (see §5.3)       │
├───────────────────────────────────────────────────────┤
│ ↺ Reset  (text link, left-aligned)                    │
└───────────────────────────────────────────────────────┘
```

**Icon square** — `h-10 w-10 rounded-xl bg-f1-background-accent text-f1-foreground-accent`, contains the `F0Icon` for that rule (see §6–9 for which icon).

**Question heading** — `F0Heading variant="heading" as="h3"`, same text as the row question.

**Config rows** — see §5.2.

**Reset button** — `inline-flex items-center gap-1.5 self-start text-sm font-medium text-f1-foreground-secondary hover:text-f1-foreground` with a `Reset` icon prefix. Clicking it restores the draft for that rule to its computed default.

### 5.2 Config row shape

Each field in a modal is wrapped in a **ConfigRow**: a `rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4`.

**Horizontal layout** (default): label stack on the left, control pinned right (`flex flex-row items-center justify-between`).

```
Label text          ← text-sm font-semibold text-f1-foreground
Helper text         ← text-xs text-f1-foreground-secondary (optional)
[?]                 ← InfoCircle icon, xs size, cursor-help, title= tooltip string (optional)
```

**Stacked layout** (for radio groups and wide select fields): pass `stack` prop to `ConfigRow`, which switches to `flex-col` so the control renders below the label.

### 5.3 AI assist block

At the bottom of every modal body, above Reset:

**Input bar** — `rounded-xl border border-f1-border-secondary bg-f1-background-secondary px-3 py-2`, horizontal row:

```
[Sparkles icon]  [ text input — "Tell us what to change…"  flex-1 ]  [Paperclip]  [Send ↑]
```

- `Sparkles` icon, sm size, left
- `<input>` with placeholder `Tell us what to change…`, transparent background
- `Paperclip` icon button: `h-8 w-8`, aria-label "Attach a file"
- Send button (ArrowUp icon): `h-8 w-8 rounded-md bg-f1-background-accent-bold text-f1-foreground-inverse`, `disabled:opacity-40` when input is empty

**Quick-action chips** — a `flex flex-wrap gap-2` row of pill buttons directly below the input bar. Each chip: `rounded-full border border-f1-border-secondary bg-f1-background px-3 py-1 text-xs font-medium`, leading `Sparkles` icon xs. Chips are modal-specific (listed in §6–9).

---

## 6. Modal 1 — Amount & cycle

**Icon**: `Money`  
**Title**: `How many days or hours, and what cycle?`

This modal owns the **allowance unit** (days or hours). The chosen unit is read by every downstream rule.

### Fields

| Config row | Control type | Options / behaviour |
|---|---|---|
| **Allowance type** · _Sets the unit used everywhere downstream_ | Segmented control (inline toggle group) | `Per days` · `Per hours` |
| **Amount** | Number input + trailing unit label | Minimum 0; unit label updates to match allowance type |
| **Cycle** | Select | `Yearly` · `Monthly` · `Per pay period` · `One-time` |
| **Cycle start** | Select | `Calendar year (Jan 1)` · `Employee start date` · `Custom date` |
| **Custom start date** _(conditional)_ | Date picker input | Shown only when Cycle start = `Custom date` |

**Segmented control** — a pill-shaped inline toggle: `rounded-lg bg-f1-background-secondary p-1`. Each option is a `<button>`, active item gets `bg-f1-background shadow-sm text-f1-foreground`, inactive gets `text-f1-foreground-secondary`.

### Summary string (row right side)

`Per days · <amount> days · <Cycle label>`  
e.g. `Per days · 25 days · Yearly`

### Quick-action chips

`Make it monthly` · `Switch to hours` · `Reset to default`

---

## 7. Modal 2 — Generation

**Icon**: `Clock`  
**Title**: `How are they generated?`

### Fields

| Config row | Control type | Options / behaviour |
|---|---|---|
| **How are they generated?** | Radio group (stacked layout) | `All upfront at cycle start` · `Accrued progressively` |
| **Generation start** · _When generation begins_ | Select | `January` through `December` + `Employee start month` (13 options total) |
| **Duration** · _Over how long the allowance generates_ | Number input + period-unit select | Number: min 0; unit select: `days` · `months` |
| **Accrual frequency** _(progressive only)_ | Select | `Monthly` · `Per pay period` |
| **Rounding** _(progressive only)_ | Select | `None` · `Round to nearest 0.5` · `Round up` |

"Accrual frequency" and "Rounding" rows are rendered only when the radio is set to `Accrued progressively`.

**Radio group** — stacked list of selectable rows. Each option is a `<button>` with:
- A custom radio indicator: `h-4 w-4 rounded-full border border-solid`. Active: `border-f1-foreground-accent` with inner dot `h-2 w-2 rounded-full bg-f1-foreground-accent`. Inactive: `border-f1-border`, no inner dot.
- Active row background: `bg-f1-background-selected-secondary border-f1-border-selected-bold`. Inactive: `bg-f1-background border-f1-border-secondary hover:border-f1-border-hover`.

### Summary string

Progressive: `Starts <month> · over <N> <unit>`  
Upfront: `All upfront · starts <month>`

### Quick-action chips

`All upfront` · `Accrue monthly` · `Reset to default`

---

## 8. Modal 3 — Availability

**Icon**: `Calendar`  
**Title**: `When can they be used?`

### Fields

| Config row | Control type | Options / behaviour |
|---|---|---|
| **Usable in the cycle** | Radio group (stacked layout) | `Within the same cycle they're acquired` · `Only in the next cycle` |
| **Available immediately** · _Acquired time can be used as soon as it's granted_ | Toggle switch | On by default |
| **Waiting period** · _After start date_ _(conditional)_ | Number input + period-unit select | Shown only when Available immediately is OFF; unit: `days` · `months` |
| **Tenure period** · _Service required before this allowance applies_ | Number input + period-unit select | Unit: `days` · `months`; default 0 months |

**Toggle switch** — `h-6 w-11 rounded-full`. ON: `bg-f1-background-accent-bold`; OFF: `bg-f1-border-secondary`. Inner thumb: `h-5 w-5 rounded-full bg-f1-background`. ON translate: `translate-x-5`; OFF: `translate-x-0.5`. Accessible as `role="switch" aria-checked`.

### Summary string

Base: `Within the same cycle they're acquired` or `Only in the next cycle`  
If waiting period set: appends ` · <N> <unit> waiting period`  
If tenure set: appends ` · after <N> <unit> tenure`

### Quick-action chips

`Available immediately` · `3-month waiting period` · `Reset to default`

---

## 9. Modal 4 — Deduction

**Icon**: `Minus`  
**Title**: `How do they deduct?`

### Fields

| Config row | Control type | Options / behaviour |
|---|---|---|
| **Count absences in** | Select | `Working days` · `Calendar days` |
| **Deduction granularity** | Select | `Full days only` · `Allow half days` · `Allow decimals` · `Hours` _(Hours option only appears when allowance type = Per hours)_ |
| **Deduction order** | Select | `From oldest accrued first` · `From newest first` |
| **If a bank holiday falls on the absence** | Select (stacked layout) + `?` tooltip | `Don't count it as an absence day` (default) · `Count it as an absence day`. Tooltip text: `Choose whether bank holidays inside an absence are deducted from the balance.` |
| **If the vacation ends before a rest day** | Select (stacked layout) + `?` tooltip | `Do not count that rest day` (default) · `Count that rest day`. Tooltip text: `Whether a trailing rest day (e.g. weekend) is counted when the absence ends right before it.` |
| **Can the counter be negative?** | Select (stacked layout) | `No, it is not possible to request more days than maximum available` (default) · `Yes, allow the counter to go negative` |
| **Carry over unused balance** · _Roll remaining balance into the next cycle_ | Toggle switch | Off by default |
| **Carry-over cap** _(conditional)_ | Number input + unit label | Shown when Carry over is ON; unit matches allowance type |
| **Expires after** _(conditional)_ | Select | Shown when Carry over is ON; options: `No expiry` · `1 month` · `3 months` · `Custom` |

The tooltip (`?`) is rendered as an `InfoCircle` icon (xs, `cursor-help`) directly after the label text, with a native `title` attribute for the tooltip string.

### Summary string

`<Count in label> · <Granularity label> · Bank holidays excluded/counted`  
e.g. `Working days · Full days only · Bank holidays excluded`

### Quick-action chips

`Count working days` · `Allow half days` · `Exclude bank holidays`

---

## 10. Shared controls reference

The following reusable controls appear across multiple modals. Build them once (e.g. `accrualControls.tsx`) and import.

### Select

`w-64` (default) or pass a custom width class. Styled `<select>` with `appearance-none`, a `ChevronDown` icon positioned absolute inside a `w-8 h-8 rounded-md bg-f1-background-secondary` container on the right. Tall selects (stacked layout, full-width labels) use `width="w-full"`.

### Number input

`h-10 w-24 rounded-md border border-f1-border bg-f1-background px-3 text-sm`. Placed inline with a trailing unit label (`text-sm text-f1-foreground-secondary`) or a unit Select.

### Segmented control

Pill container `rounded-lg bg-f1-background-secondary p-1`. Each option is a `<button>` inside. Active: `rounded-md bg-f1-background text-f1-foreground shadow-sm`. Inactive: `text-f1-foreground-secondary hover:text-f1-foreground`. Used for small-enumeration binary/ternary choices (e.g. Per days / Per hours).

### Radio group

Vertical stack of `<button>` rows with custom radio indicator (see §7). Use the stacked ConfigRow layout.

### Toggle switch

See §8.

---

## 11. Data model & defaults

```ts
// allowance unit — set by Modal 1, read by Modals 2–4
type AllowanceType = "days" | "hours"

// Modal 1
type AmountCycleRule = {
  type:       AllowanceType       // "days"
  amount:     number              // seeded from allowance.amount
  cycle:      "yearly"|"monthly"|"per-pay-period"|"one-time"  // "yearly"
  cycleStart: "calendar"|"employee"|"custom"  // "calendar"
  customDate: string              // ""
}

// Modal 2
type GenerationRule = {
  mode:         "upfront"|"progressive"  // "upfront"
  start:        string            // "January"
  duration:     number            // 12
  durationUnit: "days"|"months"  // "months"
  frequency:    "monthly"|"per-pay-period"  // "monthly"
  rounding:     "none"|"nearest-half"|"round-up"  // "none"
}

// Modal 3
type AvailabilityRule = {
  usable:      "same"|"next"     // "same"
  immediate:   boolean           // true
  waitingValue: number           // 0
  waitingUnit:  "days"|"months" // "days"
  tenureValue:  number           // 0
  tenureUnit:   "days"|"months" // "months"
}

// Modal 4
type DeductionRule = {
  countIn:     "working"|"calendar"        // "working"
  granularity: "full"|"half"|"decimals"|"hours"  // "full"
  order:       "oldest"|"newest"           // "oldest"
  bankHoliday: "exclude"|"count"           // "exclude"
  restDay:     "exclude"|"count"           // "exclude"
  negative:    "no"|"yes"                  // "no"
  carryOver:   boolean                     // false
  carryCap:    number                      // 0
  carryCapUnit: AllowanceType              // mirrors type from Modal 1
  expires:     "none"|"1m"|"3m"|"custom"  // "none"
}

type AccrualRulesState = {
  amountCycle:  AmountCycleRule
  generation:   GenerationRule
  availability: AvailabilityRule
  deduction:    DeductionRule
  configured:   Record<"amountCycle"|"generation"|"availability"|"deduction", boolean>
}
```

Seed `amountCycle.type` and `amountCycle.amount` from the `allowance` prop (`allowance.unit === "working hours"` → `"hours"`; otherwise `"days"`). All `configured` flags start `false`.

---

## 12. File structure

```
flexible-accrual/
├── FlexibleAccrual.tsx                  ← entry (meta + Page shell + routing)
└── time-off/
    ├── policiesData.ts                  ← Policy / Allowance types + fixture data
    ├── PoliciesTab.tsx                  ← top-level policies list
    ├── PolicyDetailView.tsx             ← policy detail (Basic Info + Employees tabs)
    ├── AllowanceDetailView.tsx          ← allowance detail (Section A + Section B)
    ├── AccrualRulesSection.tsx          ← Section B: 4 question-rows + modal host + 4 modal bodies
    ├── accrualRules.ts                  ← types, defaults, label maps, summary builders (no JSX)
    └── accrualControls.tsx              ← reusable controls: ConfigRow, Segmented, RuleSelect,
                                           NumberInput, RadioGroup, ToggleSwitch, AiAssist, RuleModal
```

`AllowanceDetailView` takes props `{ policy, allowance, exploration, onCoCreate }` for call-site compatibility; `exploration` and `onCoCreate` are currently unused (exploration badges have been removed).

---

## 13. Tokens quick-reference

| Purpose | Token |
|---|---|
| Primary text | `text-f1-foreground` |
| Secondary / muted text | `text-f1-foreground-secondary` |
| Error text | `text-f1-foreground-critical` |
| Brand / accent text | `text-f1-foreground-accent` |
| Info text | `text-f1-foreground-info` |
| Card surface | `bg-f1-background` |
| Page / section bg | `bg-f1-background-secondary` |
| Selected row bg | `bg-f1-background-selected-secondary` |
| Accent button bg | `bg-f1-background-accent-bold` |
| Primary border | `border-f1-border` |
| Subtle divider | `border-f1-border-secondary` |
| Hover border | `border-f1-border-hover` |
| Selected border | `border-f1-border-selected-bold` |
| Error border | `border-f1-border-critical-bold` |
| Inverse text (on accent bg) | `text-f1-foreground-inverse` |

---

## 14. Anti-patterns (do not do)

- No raw Tailwind colours (`text-gray-500`, `bg-teal-500`, `#abc`, etc.) — use `f1-*` tokens only.
- No `any` or `as any`.
- No bare HTML elements for layout (`<div>`, `<span>`) when an f0 component exists — use `F0Box`, `F0Text`, `F0Heading`, `F0Button`, `F0Icon`.
- Exception: the modal body rows use styled `<button>`, `<input>`, `<select>` directly because no f0 form-field component covers these inline patterns — this is intentional.
- Do not re-implement the dialog header or footer — `F0Dialog` renders them from its `title`, `primaryAction`, and `secondaryAction` props.
- Do not place `<Tabs>` in the page body — they live inside `<Page header={…}>` so they stay sticky.
- Do not drive view selection with `useState` — use `useSearchParams`.
- The `AccrualRulesSection` must receive an `allowance` prop to seed defaults; do not hard-code amounts.
- `noUnusedLocals` and `noUnusedParameters` are on — every destructured variable must be used.
