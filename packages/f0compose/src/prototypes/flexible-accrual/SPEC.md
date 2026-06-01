# Flexible Accrual Rules — Spec

> Factorial · Time Off Settings · AI-powered feature
> Slug: `flexible-accrual` · Status: Prototype for validation

---

## 1. Problem

Factorial offers a fixed list of pre-defined accrual options. As Factorial expands internationally, the configurations HR admins need grow faster than the product can add fixed options. Adding more options only makes the settings list longer and harder to consume.

**Core pain:** HR admins cannot configure the exact accrual rules their company needs, especially for country-specific legal requirements (see Top-10 pains attached).

## 2. Solution

Allow HR admins to define accrual rules in **natural language**, validated and applied by AI. We call this **Flexible Accrual Rules**.

The prototype validates two structural approaches (A and B) and four UX patterns for rule creation (E1–E4).

## 3. Information architecture (real Factorial)

```
Settings
└── Time
    └── Time off
        ├── Time off policies         ← list of policies (cards)
        │   └── <Policy>
        │       ├── Basic information ← policy basics + allowances list
        │       │   └── <Allowance>   ← counter config (cycle, rounding, tenure …)
        │       └── Employees
        ├── Absence types
        ├── Approval groups
        └── Blocked periods
```

**Vocabulary**
- **Policy** — set of rules applied to a group of employees (~10 per customer on average)
- **Allowance / Counter** — what employees see in their Time Off page (Vacation, Free time …)
- **Absence type** — Holidays, Sick Leave, Doctor's Appointment … may or may not be connected to a counter

## 4. User stories

**HR Admin**
- Define every time-off rule the company needs to comply with local law and internal policy.
- Validate / dry-run a rule against my workforce before it goes live.
- Reuse a rule across multiple policies without copy-pasting.

**Employee**
- Understand *why* my balance changed (e.g. moved Barcelona → Mexico, mid-cycle rule update).
- See a clear, dated explanation for any balance-changing event.

## 5. Illustrative examples

- **Portugal join-date rule** — full month if hired ≤ day 15, zero if hired after.
- **Mid-year location change** — Jan–Apr at Barcelona rate (23/yr), May–Dec at Mexico rate (25/yr).
- **Cross-policy tenure** — every 5 yrs, +1 day for ICs / +2 days for Directors, across all policies.

Each maps to at least one Top-10 pain (#1 hire date, #3 mid-year FTE change, #7 tenure).

## 6. Two solution approaches

### Option A — Flexible rules *inside* each Policy

- **Entry point:** Settings → Time off → Time off policies → open policy → Allowance → Counter config.
- **Experience:** beside each input field, a "Co-create with One" CTA opens an AI input (chat, inline or side panel). HR admin writes the rule in natural language; AI configures it and shows a preview.
- **Cross-policy propagation:** after saving, system asks *"Apply this rule to other policies?"* with per-policy selection.
- **Open question:** linked (one source of truth, edits propagate) vs. copied (independent) — *recommendation: linked by default, explicit "Unlink" on edit.*
- **Trade-off:** ✅ contextual, ✅ low risk of mis-scoping. ⚠ Discoverability — admins won't instinctively know any rule can be written.

### Option B — Flexible rules *outside* policies (standalone "Accrual Rules" tab)

- **Entry point:** Settings → Time off → new **Accrual Rules** tab (added next to Policies / Absence types / Approval groups / Blocked periods).
- **Concept:** rules exist at a higher level; policies reference them.
- **Trade-off:** ✅ cleaner separation, ✅ easier reuse. ⚠ Two-step mental model (create rule → assign to policy).

The prototype implements **both** to compare side-by-side.

## 7. UX explorations for rule creation (E1–E4)

Switchable via a floating "Explorations" pill at the bottom of the canvas.

| # | Pattern | Strength | Weakness |
|---|---------|----------|----------|
| **E1** | **Open Chat** — free-form natural language | Power users, expressive | Discoverability |
| **E2** | **Guided Wizard** — 3–5 targeted questions covering who/how-much/when/triggers | Structured, conversational | Less flexible for edge cases |
| **E3** | **Template Library** — curated common rules (top customer requests) as starting points | Best discoverability, low barrier | Risk of "template-only" thinking |
| **E4** | **Hybrid (E3 → E1)** — pick a template, then refine in chat | Best of both | More complex to build |

Cross-cutting patterns to layer on:
- Inline **rule preview / simulation** ("what would this have done for my team last year")
- **Validation warnings** at save time ("this rule conflicts with carry-over")
- **Rule history / audit log** (drives §8 employee transparency)

## 8. Employee transparency

When an employee's balance changes due to a rule edit or a personal-dimension change (location, role, seniority), the Time Off page surfaces a **"Why this number?"** panel with:
- **What** changed (rule name or dimension)
- **When** (timestamp + effective period)
- **How** it affected the balance (before → after, per cycle)

Implemented in `EmployeeView.tsx`.

## 9. Coverage of Top-10 pains

| # | Pain | Prototype coverage |
|---|------|---|
| 1 | Hire/termination date accrual | E1 / E2 expressible; tree node |
| 2 | Variable hrs vs full-time | E2 wizard question |
| 3 | FTE change mid-year | Mid-cycle rule re-application; §8 transparency |
| 4 | Different accrual during specific absences | E1 / E2 expressible |
| 5 | Wrong rounding logic | Counter config exposes rounding; E1 expressible |
| 6 | Days-worked vs hours-worked | E2 wizard primitive |
| 7 | Start accruing at tenure date | Tenure periods section; E3 template |
| 8 | Rolling 12-month entitlement | E3 template (UK Sick Leave) |
| 9 | Part-time deduction proportional | E2 wizard primitive |
| 10 | Cap on overtime balance | Counter "Max balance threshold" field |

## 10. Prototype scope (this build)

- ✅ Settings landing matching Factorial layout.
- ✅ Time off page with 5 tabs (Policies, Absence types, Approval groups, Blocked periods, **Accrual Rules**).
- ✅ Policies → Policy detail → Allowance counter config, with **Co-create with One** CTAs (Option A).
- ✅ Accrual Rules tab containing the existing Rule Authoring (decision tree) + Simulate + Employee view (Option B).
- ✅ Explorations switcher (E1–E4) on the rule-authoring canvas.
- ✅ Employee transparency panel ("Why this number?").
- 🟡 Absence types / Approval groups / Blocked periods tabs — placeholders only.
- 🟡 Cross-policy "apply to other policies?" dialog — placeholder modal.

## 11. Open questions to validate

1. Linked vs copied rules across policies — default behaviour and edit semantics.
2. Discoverability of free-form input (E1) vs guided structure (E2) — which wins for the median admin?
3. For Option B, do admins find the rule/policy separation natural, or does it feel like extra plumbing?
4. Employee transparency — depth (one-liner vs full audit log) and where it lives (inline tile vs side panel).
