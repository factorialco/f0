# Expense Policy — Settings Snapshot

This document describes every setting designed in the Expense Policy
prototype, organised by section. The values shown are the **default
seeds** — what an admin lands on the first time they open the page,
before any edits. The structure mirrors the in-app navigation:

- **1. Expense types** — Regular, Per diem, Mileage forms (which
  fields appear, which are required, plus the supporting Categories,
  Subcategories, Payment methods, and Rates the forms reference).
- **2. Approval flows** — who has to approve an expense, with
  priority and step ordering.
- **3. Certified documents** — per-legal-entity authorisation for
  Factorial to act as the company's digital certifying agent with
  each country's tax authority.

---

## 1. Expense types

Three expense form types — **Regular**, **Per diem**, **Mileage** —
each with its own field list. Within a form, every field has:

- A **kind**: `locked` (system-required, admin cannot hide or change
  the requirement) or `editable` (admin can toggle visibility and
  required/optional).
- A **type** (data type label): `Number`, `Date`, `Single choice`,
  `Long text`, `Text`, or `File`.
- A **requirement**: `Required` or `Optional`.

In the tables below, the `Status` column is the field's default
configuration. Editable fields hidden by default appear with `Hidden`
in the Status column; the requirement still applies once they're
shown.

### 1.0. Expense groups

A global toggle that controls whether employees can bundle multiple
expenses into a single group and submit the group for approval
instead of submitting each expense individually. When enabled,
employees see a "Create group" action in the expenses surface; they
add expenses to the group and the group itself becomes the unit of
approval. When disabled, every expense is submitted and approved on
its own.

The toggle applies across all three form types (Regular, Per diem,
Mileage) — it is not a per-form setting.

| Setting | Default |
|---|---|
| Expense groups | On |

### 1.1. Regular expenses

The Regular form is the everyday expense submission. Eight locked
fields cover document identity and a system-managed Category. Eleven
editable fields cover the long-tail finance metadata (cost centers,
projects, internal references) and the optional secondary currency
fields (Reimbursable currency, Exchange rate, Tax type), which ship
hidden by default and can be enabled when the company needs them.

| Field | Type | Kind | Status |
|---|---|---|---|
| Document currency | Single choice | Locked | Required |
| Document total amount | Number | Locked | Required |
| Document date | Date | Locked | Required |
| Document type | Single choice | Locked | Required |
| Payment | Single choice | Locked | Required |
| Budgets | Single choice | Locked | Optional |
| Documents | File | Locked | Optional |
| Category | Single choice | Locked | Required |
| Subcategory | Single choice | Editable | Optional |
| Payment method | Single choice | Editable | Optional |
| Reimbursable amount | Number | Editable | Required |
| Reimbursable currency | Single choice | Editable | Hidden · Optional |
| Exchange rate | Number | Editable | Hidden · Optional |
| Tax type | Number | Editable | Hidden · Optional |
| Cost center | Single choice | Editable | Hidden · Optional |
| Project | Single choice | Editable | Required |
| Description | Long text | Editable | Optional |
| Internal reference | Text | Editable | Optional |

#### Categories

Categories are managed globally and referenced by the Regular form's
`Category` field (and indirectly by Approval flow triggers). The
seed list spans the most common expense families. Admins toggle
which ones appear on the form; they cannot rename or delete the
seeds from within the form table (that happens elsewhere in the
admin surface).

| Category | Visible by default |
|---|---|
| Meals | Yes |
| Travel | Yes |
| Per diems | Yes |
| Office supplies | Yes |
| Hospitality | Yes |
| Fuel | Yes |
| Software | Yes |
| Training | Yes |

#### Subcategories

The Subcategories modal is a global flat list with a Category column
— the same list is referenced by the Regular form, the Per diem
form, and the Mileage form. Travel and Per diems ship pre-broken-
down; Fuel is split by fuel type so the Mileage form has a useful
default set.

| Subcategory | Parent category |
|---|---|
| Flights | Travel |
| Hotels | Travel |
| Taxis & rideshare | Travel |
| Half-day | Per diems |
| Full-day | Per diems |
| Overnight | Per diems |
| Team lunch | Meals |
| Client lunch | Meals |
| Gasoline | Fuel |
| Diesel | Fuel |
| Electric charging | Fuel |

#### Payment methods

Global list referenced by the Regular form's `Payment method` field.
Three seeded options covering the common reimbursable payment paths.

| Payment method | Default |
|---|---|
| Personal debit card | Available |
| Personal credit card | Available |
| Cash | Available |

### 1.2. Per diem

The Per diem form is for fixed-rate travel allowances (e.g. €70/day
for a domestic full-day). Four locked fields define the trip window
(Departure / Return), the rate lookup, and the optional Budgets link.
Eight editable fields cover supporting context (Origin, Destination,
cost allocation, receipt upload).

The `Per diem rates` row is locked but `Single choice` — the value
is picked from the managed Rates list (see [Per diem rates](#per-diem-rates)
below) rather than typed inline.

| Field | Type | Kind | Status |
|---|---|---|---|
| Departure date | Date | Locked | Required |
| Return date | Date | Locked | Required |
| Per diem rates | Single choice | Locked | Required |
| Budgets | Single choice | Locked | Optional |
| Subcategory | Single choice | Editable | Optional |
| Origin | Text | Editable | Optional |
| Destination | Text | Editable | Optional |
| Cost centers | Single choice | Editable | Optional |
| Projects | Single choice | Editable | Optional |
| Description | Long text | Editable | Optional |
| Upload the receipt | File | Editable | Optional |
| Internal reference | Text | Editable | Optional |

#### Per diem rates

Three seed rates covering the most common per diem patterns. All
default to `Everyone` scope (apply company-wide). Admins create per-
entity or per-person scopes through the chat.

| Rate | Amount | Currency | Scope |
|---|---|---|---|
| Domestic half-day | 35 | EUR | Everyone |
| Domestic full-day | 70 | EUR | Everyone |
| International overnight | 150 | EUR | Everyone |

### 1.3. Mileage

The Mileage form is for distance-based reimbursement (e.g. €0.26/km
for a personal car). Seven locked fields define the trip arithmetic
(distance × fixed rate = total to reimburse) and the optional
Budgets link. Eight editable fields cover trip context and cost
allocation.

The `Fixed value per kilometer` row is locked but opens the Rates
modal — admins manage the per-vehicle rate list there.

| Field | Type | Kind | Status |
|---|---|---|---|
| Measurement unit | Single choice | Locked | Required |
| Total distance | Number | Locked | Required |
| Currency | Single choice | Locked | Required |
| Fixed value per kilometer | Single choice | Locked | Required |
| Total to reimburse | Number | Locked | Required |
| Date | Date | Locked | Required |
| Budgets | Single choice | Locked | Optional |
| Subcategory | Single choice | Editable | Optional |
| Origin | Text | Editable | Optional |
| Destination | Text | Editable | Optional |
| Cost centers | Single choice | Editable | Optional |
| Projects | Single choice | Editable | Optional |
| Description | Long text | Editable | Optional |
| Document | File | Editable | Optional |
| Internal reference | Text | Editable | Optional |

#### Mileage rates

Three seed rates covering the most common personal-vehicle
reimbursements. All default to `Everyone` scope.

| Rate | Amount | Currency | Scope |
|---|---|---|---|
| Personal car | 0.26 | EUR | Everyone |
| Motorbike | 0.13 | EUR | Everyone |
| Bicycle | 0.05 | EUR | Everyone |

---

## 2. Approval flows

Approval flows determine **who** has to approve an expense once it's
submitted. Each flow has:

- A **priority** (lower number = evaluated first). When multiple
  flows match an expense, the lowest-priority flow wins.
- A **trigger** (amount range + category filter + audience scope)
  that decides when the flow applies.
- An ordered list of **steps**. Each step routes the expense to a
  role (Direct manager, Admins) or a specific named user.

Two flows ship by default so the "more-specific wins" semantics are
visible from day one: a Standard catch-all for everyday expenses, and
a High-value flow that adds executive sign-off above €1,000.

### 2.1. Standard approval

Priority **100** · catch-all (no amount limit, no category filter,
applies to everyone). This is the everyday flow — Direct manager
first, then a Finance review step (mapped to the Admins role until a
dedicated Finance role exists).

| Step | Approver | Type |
|---|---|---|
| Manager approval | Direct manager | Role |
| Finance review | Admins | Role |

### 2.2. High-value approval

Priority **50** · applies when the expense amount is **≥ €1,000**;
otherwise inactive. Adds an executive sign-off step (Sarah Chen,
CFO) after Finance review. Because the priority is lower than the
Standard flow's, this one wins for high-value expenses; everything
below €1,000 falls through to Standard.

| Step | Approver | Type |
|---|---|---|
| Manager approval | Direct manager | Role |
| Finance review | Admins | Role |
| Executive sign-off | Sarah Chen (CFO) | Named user |

### 2.3. Named approvers (directory)

The directory below is the fixture list used by the Named user
picker inside the step modal. Roles are illustrative — the values
are stable across the prototype so the chat narration can refer to
them by name.

| Name | Title |
|---|---|
| Sarah Chen | CFO |
| Alex Rivera | Finance Lead |
| Maria López | Legal Counsel |
| Tom Becker | Operations Head |
| Lisa Park | CEO |

---

## 3. Certified documents

The Certified documents step authorises Factorial to act as the
company's digital certifying agent with each country's tax
authority. Each legal entity is authorised once; the authorisation
is binding and cannot be revoked from this screen.

Three legal entities ship seeded — Spain, Italy, France — each
mapped to the regime that applies in that jurisdiction. All three
start in `Inactive` status; the admin authorises them one at a time
via the chat panel.

### 3.1. Legal entities

| Legal entity | Country | Regime | Authority | Default status |
|---|---|---|---|---|
| Factorial España SL | Spain | AEAT Veri\*factu | Agencia Estatal de Administración Tributaria (AEAT) | Inactive |
| Factorial Italia Srl | Italy | SDI FatturaPA | Agenzia delle Entrate | Inactive |
| Factorial France SAS | France | Factur-X | Direction Générale des Finances Publiques (DGFiP) | Inactive |

### 3.2. Regimes

#### AEAT Veri\*factu (Spain)

**Summary.** Spanish invoices are digitally signed, chained, and
reported to AEAT in real time.

**Legal blurb (shown in the chat before the admin authorises).** You
authorize Factorial to act as your certifying agent under Spanish
Royal Decree 1007/2023 (Veri\*factu). Factorial will sign and
transmit expense invoices to the AEAT on your behalf. Authorization
is binding and cannot be revoked from this screen.

#### SDI FatturaPA (Italy)

**Summary.** Italian invoices are issued as FatturaPA XML and routed
through the Sistema di Interscambio.

**Legal blurb.** You authorize Factorial to issue and route your
electronic invoices through Italy's Sistema di Interscambio (SDI) on
your behalf, in compliance with Decreto Legislativo 127/2015.
Authorization is binding and cannot be revoked from this screen.

#### Factur-X (France)

**Summary.** French invoices are exchanged as Factur-X hybrid PDFs
through the Plateforme Publique de Facturation.

**Legal blurb.** You authorize Factorial to issue your electronic
invoices in the Factur-X format and transmit them through the
Plateforme Publique de Facturation (PPF) on your behalf, in
compliance with the French e-invoicing reform. Authorization is
binding and cannot be revoked from this screen.
