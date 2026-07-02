# Flexible Accrual Rules — Spec (v3)

> Factorial · Time Off Settings · AI-powered feature
> Slug: `flexible-accrual` · Status: Prototype for validation
> **v2 change:** adds **Exploration E5 — One-led allowance creation** (modal co-creation flow). All UI built with **f0 components**.
> **v3 change:** narrows the field to the **two surviving directions — E4 (level-tiered rules display) and E5 (One-led creation)**; Explorations E1–E3 (Open Chat, Guided Wizard, Templates) are **removed**. E4 is rebuilt around a **level-tiered rules display** that renders the accrual rule tree as a depth-tiered, plain-language list.

---

## 1. Problem

Factorial offers a fixed list of pre-defined accrual options. As Factorial expands internationally, the configurations HR admins need grow faster than the product can add fixed options. Adding more options only makes the settings list longer and harder to consume.

**Core pain:** HR admins cannot configure the exact accrual rules their company needs, especially for country-specific legal requirements (see Top-10 pains attached).

## 2. Solution

Allow HR admins to define accrual rules in **natural language**, validated and applied by AI ("One"). We call this **Flexible Accrual Rules**.

The prototype now validates **two** UX directions, after retiring the three early creation-pattern explorations (E1–E3):

- **E4 — Level-tiered rules display.** The allowance's accrual rules are rendered as a depth-tiered, plain-language list that projects the underlying conditional *tree* into scannable rows. Editing and adding rules happen through One in a scoped Composer panel.
- **E5 — One-led creation.** A One-led modal flow walks the admin through creating a new allowance, then drops them into a structured allowance page for refinement.

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
- Create a new allowance conversationally, without learning the full settings surface first.
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

---

## 6. Exploration E4 — Level-tiered rules display

E4 reframes the allowance's accrual rules as a **depth-tiered, plain-language list**. The underlying logic is a **tree** of nested conditionals; the interface projects that tree into scannable rows, where indentation carries the conditional relationships that prose alone can't express. The tree is the source of truth — the list is a *projection* of it, not the storage format. E4 owns its full allowance page: Basic information, the level-tiered **Allowance** (accrual) section, Deduction, and Carryover, the latter three as conventional labelled-field sections.

### 6.1 Base as a prose summary

The base entitlement + accrual defaults render as a **prose summary paragraph** at the top, with the key settings **bolded** (amount, cycle length, start month, accrual timing, proration, maximum). Base is the foundation that rules modify — it is never itself "a rule you add", so it gets the paragraph, not a row. Editing the allocation or the accrual happens through One in a scoped **Composer panel** (`OneComposerPanel`), loaded with the rule's current values; it echoes the diff and persists only on confirmation, and the summary re-derives from the underlying settings.

### 6.2 The levels

Each row carries a fixed-role **scope label**; the chain of labels down the indent IS the condition. Deeper = narrower scope = shorter rule.

- **Common** — floor rules that apply in every branch (mid-year proration, usability window, rounding). They carry through a branch override unless that branch explicitly cancels them.
- **Country** — the first fork (Spain / Portugal / Mexico); sets the statutory base.
- **Contract** — narrows within a country (full-time / part-time).
- **Role** — the tip (e.g. Managers); shortest, most specific.
- **Tenure filter / Role filter** — cross-cutting scopes that span a dimension, rendered as peers with an info accent.

Reading invariants enforced in the UI:
- Text shrinks as depth grows (≈15 → 14 → 13.5px) to signal navigation-header vs. payload; the indent tops out at ~3 levels.
- A 2px left-accent rail marks each nested group; the cross-cutting peer uses an info-colored rail.
- A narrower rule that overrides a broader one is tagged **Exception** and says so in copy (e.g. Managers +2 over the country default).

### 6.3 Evaluation order = reading order

Rows read top-to-bottom in evaluation order. When order is load-bearing, explicit **phase headers** carry it: **First** (Common floor) → **Then** (by country, with Contract/Role nesting) → **Across every country** (the Tenure cross-cutting rule) → **Finally** (rounding, tagged *Runs last* because it must run after everything else).

### 6.4 Cross-cutting rules — generalize vs. localize

A rule that spans a dimension (e.g. a tenure bonus for all employees, any country) is **generalized**: stored once at the highest level where its scope is fully true, with a filter label. The resolving principle: generalize only when the rule reads the same under every branch; the moment it must differ in even one branch, push it down and write it locally there. The clean implementation is *display localized, store generalized*.

### 6.5 Adding rules

A persistent **"Describe a rule to add"** affordance at the bottom opens One. One reads the scope, places the rule at the right level (before rounding, inside a country, or across all of them), and confirms placement back to the admin. Added rules render in an "also" group, editable and deletable.

### 6.6 Components (E4)
| Element | f0 component |
|---------|--------------|
| Section headers | `F0Heading` / `F0Text` |
| Scope labels / tags | plain pill + `F0TagStatus` (Exception / Runs last) |
| Edit / add affordances | `F0Button` (+ `F0Icon`) |
| Rule editing surface (One) | `OneComposerPanel` |

---

## 7. Exploration E5 — One-led allowance creation (focus of this build)

A new exploration that reframes allowance creation as a **co-creation conversation**. When the admin creates a new allowance, **One opens as a modal chat** and walks them through the essentials, then hands off to a structured **allowance page** for the detailed rules.

### 7.1 Trigger & entry point

- **Entry point:** Settings → Time off → Time off policies → open policy → Basic information → **"New allowance"** CTA.
- Clicking the CTA opens **One as a modal** (not inline, not side panel) — a focused, full-attention conversation for the creation moment.
- Component: `F0Modal` hosting the One chat surface (`F0Chat` / One conversation component). Modal is dismissible; dismissing mid-flow discards the draft (confirm before discard).

### 7.2 Modal conversation flow (One asks, admin answers)

One drives a short, linear co-creation. Each step is one question; the admin can go back.

**Step 1 — Name the allowance**
- One asks: *"What should we call this allowance?"*
- Input: free-text field inside the chat (`F0Input` within the message composer).
- This becomes the counter name employees see (Vacation, Free time, WFH …).

**Step 2 — Type of allowance**
- One asks: *"What type of allowance is this?"*
- Rendered with **`F0ClarifyingPanel`** presenting the three options that exist in Factorial today (see attached screenshot):
  - **Fixed balance**
  - **Overtime**
  - **Based on time worked**
- Surface the existing tooltip copy as the panel's helper / description text:
  > *"Choose an allowance type with a constant balance or with a balance that will depend on the employee's worked hours."*
- Single-select. Selection advances the flow.

**Step 3 — Absence types**
- One asks: *"Which absence types should count against this allowance?"*
- The admin selects the absence types to include in this allowance (multi-select).
- Rendered with **`F0ClarifyingPanel`** in multi-select mode, listing the policy's available absence types (Holidays, Sick Leave, Doctor's Appointment …).

**Step 4 — Hand-off**
- Once name + type + absence types are gathered, One confirms and **navigates to the allowance page** for this new allowance (closes modal → routes to allowance detail).
- One posts a short orienting message on arrival (carried into the page's co-create panel): *"Here's <name>. Let's set up how it accrues."*

### 7.3 Components (E5 modal)
| Step | f0 component |
|------|--------------|
| Modal shell | `F0Modal` |
| Chat surface | One conversation component (`F0Chat`) |
| Step 1 name input | `F0Input` |
| Step 2 type select | `F0ClarifyingPanel` (single-select) + tooltip helper |
| Step 3 absence types | `F0ClarifyingPanel` (multi-select) |
| Primary / back actions | `F0Button` |

---

## 8. Allowance page (post hand-off)

After the modal hand-off, the admin lands on the **allowance page**, headed by a **`ResourceHeader`** showing the allowance name, type, and a primary save/action.

The page divides configuration into **three framed boxes** (`F0Card` / box container per section). Co-creation continues here: a persistent **"Co-create with One"** affordance lets the admin write or paste rules in natural language, and One fills the fields and shows a preview.

### 8.1 Page structure

```
ResourceHeader  (allowance name · type · save)
│
├── Box 1 — Base entitlement + Accrual rules
│     • Base entitlement fields
│     • Accrual rules: text "Create your accrual rules"
│       + CTA "Co-create with One" → opens One
│
├── Box 2 — Deduction rules
│     • Text fields
│
└── Box 3 — Carryover
      • Text fields
```

### 8.2 Section detail

**Box 1 — Base entitlement + Accrual rules**
- Base entitlement: structured fields (amount, cycle, unit).
- Accrual rules: empty-state text *"Create your accrual rules"* with a **"Co-create with One"** CTA (`F0Button`) that opens One (inline or side panel) to author the rule in natural language. One configures the rule and renders a preview/simulation inline.

**Box 2 — Deduction rules**
- Text fields (`F0Input` / `F0Field`) for deduction logic (e.g. proportional part-time deduction, deduction during specific absences).

**Box 3 — Carryover**
- Text fields (`F0Input` / `F0Field`) for carryover config (cap, expiry, rolling window).

### 8.3 Components (allowance page)
| Element | f0 component |
|---------|--------------|
| Page header | `ResourceHeader` |
| Section boxes | `F0Card` (one per section) |
| Field inputs | `F0Field` / `F0Input` |
| Accrual co-create CTA | `F0Button` → One surface |
| Rule preview | inline simulation block within Box 1 |

### 8.4 Cross-policy propagation
- After saving, system asks *"Apply this rule to other policies?"* with per-policy selection.
- **Open question (unchanged):** linked (one source of truth, edits propagate) vs. copied (independent) — *recommendation: linked by default, explicit "Unlink" on edit.*

---

## 9. UX exploration matrix

Switchable via the **Exploration** tabs on the allowance detail page. Two directions survive; **E1–E3 (Open Chat, Guided Wizard, Templates) have been retired.**

| # | Pattern | Strength | Weakness |
|---|---------|----------|----------|
| ~~E1~~ | ~~Open Chat~~ — *retired* | — | — |
| ~~E2~~ | ~~Guided Wizard~~ — *retired* | — | — |
| ~~E3~~ | ~~Template Library~~ — *retired* | — | — |
| **E4** | **Level-tiered rules display** — accrual rule tree projected into a depth-tiered, plain-language list; edit/add via One in a scoped Composer panel | Legible deep conditionals; scope labels + indentation carry the condition; one source of truth re-derives summaries | Tops out at ~3 visible nesting levels; relies on One to place rules at the right level |
| **E5** | **One-led modal creation** — modal conversation (name → type → absence types) → structured allowance page with co-create boxes | Guided entry + structured refinement; strong discoverability; matches real allowance creation moment | Modal interrupts; longer first-run; relies on One quality at hand-off |

Cross-cutting patterns to layer on:
- Inline **rule preview / simulation** ("what would this have done for my team last year")
- **Validation warnings** at save time ("this rule conflicts with carry-over")
- **Rule history / audit log** (drives §10 employee transparency)

## 10. Employee transparency

When an employee's balance changes due to a rule edit or a personal-dimension change (location, role, seniority), the Time Off page surfaces a **"Why this number?"** panel with:
- **What** changed (rule name or dimension)
- **When** (timestamp + effective period)
- **How** it affected the balance (before → after, per cycle)

Implemented in `EmployeeView.tsx`.

## 11. Coverage of Top-10 pains

| # | Pain | Prototype coverage |
|---|------|---|
| 1 | Hire/termination date accrual | E4 Common "mid-year proration" rule + Country join-date rule (Portugal); E5 accrual co-create |
| 2 | Variable hrs vs full-time | E4 Contract-level rule (full-time / part-time); E5 type = "Based on time worked" |
| 3 | FTE change mid-year | Mid-cycle rule re-application; §10 transparency |
| 4 | Different accrual during specific absences | E4 rule expressible via One; E5 absence-types step |
| 5 | Wrong rounding logic | E4 "Finally — Rounding" phase (runs last); counter config exposes rounding |
| 6 | Days-worked vs hours-worked | E4 rule expressible; E5 type step |
| 7 | Start accruing at tenure date | E4 Tenure-filter cross-cutting rule; E5 accrual box |
| 8 | Rolling 12-month entitlement | E4 rule expressible; E5 carryover box |
| 9 | Part-time deduction proportional | E4 Contract-level part-time rule; E5 deduction box |
| 10 | Cap on overtime balance | Counter "Max balance threshold"; E5 carryover box |

## 12. Prototype scope (this build)

- ✅ Settings landing matching Factorial layout.
- ✅ Time off page with tabs (Policies, Absence types, Approval groups, Blocked periods, **Accrual Rules**).
- ✅ Policies → Policy detail → "New allowance" CTA.
- ✅ **E4 level-tiered rules display**: base prose summary + Common / Country / Contract / Role tiers, phase ordering (First → Then → Finally), cross-cutting Tenure rule, Exception tags, and a "Describe a rule to add" CTA opening the One Composer.
- ✅ **E5 modal flow** (`F0Modal` + One): name → type (`F0ClarifyingPanel` + tooltip) → absence types (`F0ClarifyingPanel` multi-select) → hand-off.
- ✅ **Allowance page** with `ResourceHeader` + 3 boxes (Base entitlement + Accrual rules / Deduction rules / Carryover), all `F0` components.
- ✅ Accrual "Co-create with One" CTA opening One on the allowance page.
- ✅ Exploration tabs (**E4, E5** only — E1–E3 removed) on the allowance detail page.
- ✅ Employee transparency panel ("Why this number?").
- 🟡 Absence types / Approval groups / Blocked periods tabs — placeholders only.
- 🟡 Cross-policy "apply to other policies?" dialog — placeholder modal.
- 🟡 Deduction / Carryover boxes — fields present, validation stubbed.

## 13. Component inventory (f0 — must use throughout)

| Concern | Component |
|---------|-----------|
| Creation modal | `F0Modal` |
| Conversational surface (One) | `F0Chat` |
| Clarifying / option selection | `F0ClarifyingPanel` (single & multi-select) |
| Text inputs | `F0Input` / `F0Field` |
| Buttons / CTAs | `F0Button` |
| Allowance page header | `ResourceHeader` |
| Section containers | `F0Card` |

> **Constraint:** all prototype UI uses **f0 components**. No custom one-off components where an f0 equivalent exists.

## 14. Open questions to validate

1. **E4 vs E5:** does the level-tiered display (read + edit in place) or the One-led modal creation better match how admins actually build allowances — and should they merge (E5 creation handing off into an E4 page)?
2. **Hand-off seam:** does routing from modal → allowance page feel continuous, or does One's context get lost?
3. **Box division:** is Base entitlement + Accrual rules in one box (vs split) the right grouping?
4. Linked vs copied rules across policies — default behaviour and edit semantics.
5. Employee transparency — depth (one-liner vs full audit log) and where it lives (inline tile vs side panel).
6. Absence-types step in E5 — should it be required at creation, or deferrable to the allowance page?
7. **E4 edit interaction** for display-localized / store-generalized rules — what the admin sees when editing a rule shown in several places but stored once (still to be specced).
8. **E4 cross-cutting depth** — when stacked filters ("managers, 10+ years, part-time") accumulate on one rule, do the filter labels need a compact treatment so they don't read as a run-on?
