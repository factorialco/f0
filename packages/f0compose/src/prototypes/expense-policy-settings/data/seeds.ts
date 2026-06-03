import type {
  ApprovalFlow,
  Category,
  Country,
  Department,
  LegalEntity,
  PaymentMethod,
  Rate,
  Subcategory,
  User,
} from "./types"

/**
 * Default category list seeded by AI on first setup (spec §4).
 * Curated starter set spanning the most common expense families.
 */
export const seedCategories: Category[] = [
  { id: "cat-meals", name: "Meals", visible: true },
  { id: "cat-travel", name: "Travel", visible: true },
  { id: "cat-per-diems", name: "Per diems", visible: true },
  { id: "cat-office-supplies", name: "Office supplies", visible: true },
  { id: "cat-hospitality", name: "Hospitality", visible: true },
  { id: "cat-fuel", name: "Fuel", visible: true },
  { id: "cat-software", name: "Software", visible: true },
  { id: "cat-training", name: "Training", visible: true },
]

/**
 * Seed subcategories. Travel and Per diems are broken down per spec
 * §9 ("breaking Per diems into half-day / full-day / overnight").
 * Fuel is broken down by fuel type so the Mileage form's
 * scoped-subcategory modal has something to show by default.
 */
export const seedSubcategories: Subcategory[] = [
  { id: "sub-travel-flights", categoryId: "cat-travel", name: "Flights" },
  { id: "sub-travel-hotels", categoryId: "cat-travel", name: "Hotels" },
  { id: "sub-travel-taxis", categoryId: "cat-travel", name: "Taxis & rideshare" },
  { id: "sub-perdiem-half", categoryId: "cat-per-diems", name: "Half-day" },
  { id: "sub-perdiem-full", categoryId: "cat-per-diems", name: "Full-day" },
  { id: "sub-perdiem-overnight", categoryId: "cat-per-diems", name: "Overnight" },
  { id: "sub-meals-general", categoryId: "cat-meals", name: "General" },
  { id: "sub-meals-other", categoryId: "cat-meals", name: "Other" },
  { id: "sub-fuel-gasoline", categoryId: "cat-fuel", name: "Gasoline" },
  { id: "sub-fuel-diesel", categoryId: "cat-fuel", name: "Diesel" },
  { id: "sub-fuel-electric", categoryId: "cat-fuel", name: "Electric charging" },
]

/**
 * Default payment methods (spec §6).
 */
export const seedPaymentMethods: PaymentMethod[] = [
  { id: "pm-personal-debit", name: "Personal debit card" },
  { id: "pm-personal-credit", name: "Personal credit card" },
  { id: "pm-cash", name: "Cash" },
]

/**
 * Default rates per form type. Each form ships with three realistic
 * starter rates so the count hint reads "3 set" the first time the
 * admin lands on it. The values are illustrative — the chat is the
 * canonical creation path, so admins tweak rather than start blank.
 *
 * `everyone` scope is the default for every seed; per-entity / per-
 * person scopes are only introduced through the chat.
 */
export const seedRates: Rate[] = [
  // ── Per diem rates ─────────────────────────────────────────────
  {
    id: "rate-pd-half",
    formType: "per-diem",
    name: "Domestic half-day",
    amount: 35,
    currency: "EUR",
    scope: { kind: "everyone" },
  },
  {
    id: "rate-pd-full",
    formType: "per-diem",
    name: "Domestic full-day",
    amount: 70,
    currency: "EUR",
    scope: { kind: "everyone" },
  },
  {
    id: "rate-pd-international",
    formType: "per-diem",
    name: "International overnight",
    amount: 150,
    currency: "EUR",
    scope: { kind: "everyone" },
  },

  // ── Mileage rates ──────────────────────────────────────────────
  {
    id: "rate-ml-car",
    formType: "mileage",
    name: "Personal car",
    amount: 0.26,
    currency: "EUR",
    scope: { kind: "everyone" },
  },
  {
    id: "rate-ml-motorbike",
    formType: "mileage",
    name: "Motorbike",
    amount: 0.13,
    currency: "EUR",
    scope: { kind: "everyone" },
  },
  {
    id: "rate-ml-bicycle",
    formType: "mileage",
    name: "Bicycle",
    amount: 0.05,
    currency: "EUR",
    scope: { kind: "everyone" },
  },
]

/**
 * Legal entities the company operates under. Used as targets of
 * `setRateScope({scopeKind:'entities'})` and as the `entityId` on
 * each employee. A real Factorial install would have one per
 * country-of-incorporation.
 */
export const seedEntities: LegalEntity[] = [
  { id: "ent-de", name: "Factorial Germany GmbH", country: "Germany" },
  { id: "ent-es", name: "Factorial Spain S.L.", country: "Spain" },
  { id: "ent-us", name: "Factorial USA Inc.", country: "USA" },
  { id: "ent-fr", name: "Factorial France SAS", country: "France" },
  { id: "ent-uk", name: "Factorial UK Ltd.", country: "UK" },
]

/**
 * Fixture employees used as named approvers and scope targets. Shape
 * mirrors a real Factorial employee record so the picker UI won't
 * need to change when wired to a real backend. 100 seats spread
 * across 5 countries and 7 departments so the agent can resolve
 * scopes like "Germany sales team" via a department+country filter.
 *
 * Generated deterministically below so the list is stable across
 * reloads. The first 6 entries preserve the original hand-picked
 * leadership names — existing flows and tests reference these ids.
 */
const FIRST_NAMES = [
  "Sarah", "Clara", "Alex", "Maria", "Tom", "Lisa", "Jonas", "Eva",
  "Liam", "Sofia", "Noah", "Emma", "Lucas", "Mia", "Mateo", "Hannah",
  "Felix", "Lena", "Oliver", "Isabella", "Anton", "Elena", "Henrik",
  "Carla", "David", "Paula", "Daniel", "Nora", "Marco", "Aitana",
  "Pablo", "Lucia", "Diego", "Valeria", "Adrian", "Camila", "Ethan",
  "Olivia", "Mason", "Ava", "Logan", "Chloe", "Hugo", "Manon", "Léa",
  "Louis", "Inès", "Théo", "Charlotte", "Arthur", "Amélie",
] as const

const LAST_NAMES = [
  "Müller", "Schmidt", "Weber", "Becker", "Fischer", "García",
  "Martínez", "López", "Rodríguez", "Hernández", "Smith", "Johnson",
  "Williams", "Brown", "Jones", "Dubois", "Martin", "Bernard",
  "Petit", "Robert", "Chen", "Park", "Kim", "Singh", "Patel",
  "Rossi", "Ferrari", "Bianchi", "Romano",
] as const

type Seat = {
  department: Department
  team: string
  title: string
}

const SEATS_BY_DEPT: Record<Department, Seat[]> = {
  Sales: [
    { department: "Sales", team: "Enterprise Sales", title: "Account Executive" },
    { department: "Sales", team: "Enterprise Sales", title: "Senior AE" },
    { department: "Sales", team: "SMB Sales", title: "AE" },
    { department: "Sales", team: "SMB Sales", title: "SDR" },
    { department: "Sales", team: "Sales Ops", title: "Sales Ops Analyst" },
  ],
  Engineering: [
    { department: "Engineering", team: "Platform", title: "Senior Engineer" },
    { department: "Engineering", team: "Platform", title: "Staff Engineer" },
    { department: "Engineering", team: "Product", title: "Engineer" },
    { department: "Engineering", team: "Product", title: "Engineering Manager" },
    { department: "Engineering", team: "Infrastructure", title: "SRE" },
  ],
  Finance: [
    { department: "Finance", team: "Accounting", title: "Accountant" },
    { department: "Finance", team: "Accounting", title: "Senior Accountant" },
    { department: "Finance", team: "FP&A", title: "Finance Analyst" },
    { department: "Finance", team: "FP&A", title: "Finance Lead" },
  ],
  Operations: [
    { department: "Operations", team: "Office Ops", title: "Office Manager" },
    { department: "Operations", team: "IT", title: "IT Support" },
    { department: "Operations", team: "Procurement", title: "Procurement Lead" },
  ],
  Legal: [
    { department: "Legal", team: "Contracts", title: "Legal Counsel" },
    { department: "Legal", team: "Compliance", title: "Compliance Officer" },
  ],
  Marketing: [
    { department: "Marketing", team: "Content", title: "Content Lead" },
    { department: "Marketing", team: "Demand Gen", title: "Demand Gen Manager" },
    { department: "Marketing", team: "Brand", title: "Brand Designer" },
  ],
  People: [
    { department: "People", team: "HRBP", title: "HR Business Partner" },
    { department: "People", team: "Talent", title: "Recruiter" },
  ],
}

const COUNTRY_ROTATION: Country[] = [
  "Germany", "Spain", "USA", "France", "UK",
]
const ENTITY_BY_COUNTRY: Record<Country, string> = {
  Germany: "ent-de",
  Spain: "ent-es",
  USA: "ent-us",
  France: "ent-fr",
  UK: "ent-uk",
}

function pad(n: number): string {
  return n.toString().padStart(3, "0")
}

function slug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const LEADERS: User[] = [
  {
    id: "usr-sarah-chen",
    name: "Sarah Chen",
    title: "CFO",
    department: "Finance",
    team: "FP&A",
    country: "USA",
    entityId: "ent-us",
  },
  {
    id: "usr-clara-chen",
    name: "Clara Chen",
    title: "Engineering Manager",
    department: "Engineering",
    team: "Product",
    country: "Germany",
    entityId: "ent-de",
  },
  {
    id: "usr-alex-rivera",
    name: "Alex Rivera",
    title: "Finance Lead",
    department: "Finance",
    team: "FP&A",
    country: "Spain",
    entityId: "ent-es",
  },
  {
    id: "usr-maria-lopez",
    name: "Maria López",
    title: "Legal Counsel",
    department: "Legal",
    team: "Contracts",
    country: "Spain",
    entityId: "ent-es",
  },
  {
    id: "usr-tom-becker",
    name: "Tom Becker",
    title: "Operations Head",
    department: "Operations",
    team: "Office Ops",
    country: "Germany",
    entityId: "ent-de",
  },
  {
    id: "usr-lisa-park",
    name: "Lisa Park",
    title: "CEO",
    department: "Operations",
    team: "Office Ops",
    country: "USA",
    entityId: "ent-us",
  },
  {
    id: "usr-amadeu-thomson",
    name: "Amadeu Thomson",
    title: "Product Designer",
    department: "Engineering",
    team: "Product",
    country: "Spain",
    entityId: "ent-es",
  },
]

const DEPTS = Object.keys(SEATS_BY_DEPT) as Department[]

const GENERATED: User[] = Array.from({ length: 13 }, (_, i) => {
  const idx = i + LEADERS.length
  const dept = DEPTS[i % DEPTS.length]
  const seats = SEATS_BY_DEPT[dept]
  const seat = seats[i % seats.length]
  const country = COUNTRY_ROTATION[i % COUNTRY_ROTATION.length]
  const first = FIRST_NAMES[(i * 7) % FIRST_NAMES.length]
  const last = LAST_NAMES[(i * 13) % LAST_NAMES.length]
  const name = `${first} ${last}`
  return {
    id: `usr-${slug(name)}-${pad(idx)}`,
    name,
    title: seat.title,
    department: seat.department,
    team: seat.team,
    country,
    entityId: ENTITY_BY_COUNTRY[country],
  }
})

export const seedUsers: User[] = [...LEADERS, ...GENERATED]

/**
 * Default approval flows seeded on first setup. Two flows so the
 * concept of "more-specific wins" is visible from the start:
 *
 *  1. **Standard approval** (priority 100, catch-all) — direct
 *     manager → finance review. Mirrors the SMB default and the
 *     user's own company setup. Listed first in the summary so
 *     admins see their everyday flow first.
 *  2. **High-value approval** (priority 50, amount ≥ €1,000) — adds
 *     a CFO sign-off step at the end. Listed second visually, but
 *     **evaluated first** because of the lower priority number:
 *     when an expense ≥ €1,000 comes in, this flow wins over the
 *     catch-all; otherwise Standard takes over.
 *
 * Visual order in the summary view is the array order — we
 * deliberately do **not** sort by priority for display. Admins
 * mostly think about the everyday flow first; the high-value
 * exception is the conceptual "addendum" beneath it. Evaluation
 * order still follows `priority` so semantics stay correct.
 *
 * Both flows have the same audience scope (`everyone`) and no
 * category filter, so they apply company-wide. The Finance team
 * is modeled via the `admins` role for slice 1 — the screenshot's
 * role picker doesn't expose a dedicated Finance role yet, and
 * Admins is the closest stand-in. The label "Finance review" on
 * the step makes the intent clear in the UI without inventing a
 * new role token (per user decision: keep admins, don't add new
 * role tokens). A real implementation would add a "Finance" role;
 * until then, the agent's narration should say "your finance team
 * (mapped to Admins for now)".
 */
export const seedApprovalFlows: ApprovalFlow[] = [
  // Rule ① — small everyday spend from the Product team in Spain is
  // trusted: auto-approve. Showcases the named `attributes` scope.
  {
    id: "flow-product-spain",
    name: "Trusted team — small spend",
    priority: 10,
    trigger: {
      amount: { max: 200 },
      categoryIds: [],
      scope: { kind: "attributes", team: "Product", country: "Spain" },
    },
    steps: [
      {
        id: "step-ps-self",
        approver: { kind: "role", role: "self" },
        label: "Auto-approved",
      },
    ],
  },
  // Rule ② — mid-band spend routes to the relevant Project manager
  // first. Showcases the open `relation` approver (no such role in
  // Factorial today).
  {
    id: "flow-project-review",
    name: "Project sign-off",
    priority: 30,
    trigger: {
      amount: { min: 200, max: 1000 },
      categoryIds: [],
      scope: { kind: "everyone" },
    },
    steps: [
      {
        id: "step-pr-pm",
        approver: { kind: "relation", relation: "project-manager", label: "Project manager" },
        label: "Project sign-off",
      },
      {
        id: "step-pr-manager",
        approver: { kind: "role", role: "manager" },
        label: "Manager approval",
      },
    ],
  },
  // Rule ③ — high-value spend gets the full chain up to the CFO.
  {
    id: "flow-high-value",
    name: "High-value approval",
    priority: 50,
    trigger: {
      amount: { min: 1000 },
      categoryIds: [],
      scope: { kind: "everyone" },
    },
    steps: [
      {
        id: "step-hv-manager",
        approver: { kind: "role", role: "manager" },
        label: "Manager approval",
      },
      {
        id: "step-hv-admins",
        approver: { kind: "role", role: "admins" },
        label: "Finance review",
      },
      {
        id: "step-hv-cfo",
        approver: { kind: "user", userId: "usr-sarah-chen" },
        label: "Executive sign-off",
      },
    ],
  },
  // Default — everything not matched above. Pinned last in the UI.
  {
    id: "flow-standard",
    name: "Default approval",
    priority: 100,
    trigger: {
      amount: {},
      categoryIds: [],
      scope: { kind: "everyone" },
    },
    steps: [
      {
        id: "step-std-manager",
        approver: { kind: "role", role: "manager" },
        label: "Manager approval",
      },
      {
        id: "step-std-admins",
        approver: { kind: "role", role: "admins" },
        label: "Finance review",
      },
    ],
  },
]
