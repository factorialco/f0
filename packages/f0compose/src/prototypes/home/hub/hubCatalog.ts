import type { IconType } from "@factorialco/f0-react"

import {
  AcademicCap,
  Archive,
  Balance,
  Bank,
  BarGraph,
  Basket,
  BookOpen,
  Building,
  ChartLine,
  ChartPie,
  CheckCircleLine,
  Computer,
  DollarBill,
  Folder,
  Folders,
  Handshake,
  HardDrive,
  Heart,
  Laptop,
  Marketplace,
  MessageHeart,
  MoneyBag,
  Office,
  Organization,
  PalmTree,
  People,
  Present,
  Receipt,
  Schedule,
  SearchPerson,
  Suitcase,
  Timer,
  UserProtected,
  Wallet,
} from "@factorialco/f0-react/icons/app"

/**
 * The Tools catalog: which modules exist, how they group, and which glyph
 * each carries. Lifted out of HomeNav on 2026-09-14 because the rail pins,
 * the plan simulation and the Tools canvas screen all read it, and the
 * rule this file already lived under (see `hubSlug`) is that a SCREEN must
 * not import its rows from the navigation.
 */

/**
 * One glyph per Hub label, shared by both profiles so the same module
 * never changes icon between them.
 *
 * Where the employee frame (2712:430800) NAMES its icon layers, that name
 * wins — it is ground truth from the design system, and it corrects four
 * of the guesses the admin Hub shipped with when 2639:49719 turned out to
 * export no per-icon assets (Workplaces was Building, Handbook File,
 * Software Code, Purchasing ShoppingCart, Projects Briefcase).
 *
 * INFERRED, still: Planning wants `HeadcountPlanning`, which f0 has no
 * equivalent for — `Organization` is the closest. Equipment, Payroll,
 * Recruitment, Sales, Treasury and Accounting are admin-only rows the
 * employee frame never shows, so they keep their earlier matches.
 */
export const HUB_ICONS: Record<string, IconType> = {
  Absences: PalmTree,
  // ICON GAP: the frame draws a coin with a currency symbol and f0 has
  // no coin — all 256 app icons were checked, in both worktrees. `Balance`
  // is weighing scales; it is the incumbent and it renders, but it is the
  // wrong shape. Either accept the scales or ask f0 for a Coin.
  Accounting: Balance,
  Benefits: Present,
  Billing: Receipt,
  Compensation: ChartPie,
  // The frame's shopfront-with-awning: `Marketplace`'s second path IS
  // that awning.
  "Device catalog": Marketplace,
  // Marketplace left the rail on 2026-09-14 (Angel: it does not earn a
  // permanent first-level slot) and became a Tools row, so it needs its
  // own glyph here — the same one "Device catalog" borrows.
  Marketplace: Marketplace,
  Documents: Folders,
  Engagement: MessageHeart,
  Equipment: Laptop,
  Handbook: Folder,
  Hours: Timer,
  // Was "Sales" in the IT group, renamed on Oskar's word to break the
  // collision with Finance's Sales. `Archive` is a lidded crate.
  Inventory: Archive,
  Kudos: Heart,
  Learning: AcademicCap,
  // Same glyph as "People" on purpose: it is the same row renamed and the
  // same screen behind it.
  Organization: People,
  // `MoneyBag`, not `Money`: the frame draws a cinched bag with a
  // currency glyph, while `Money` is an upright banknote with a second
  // note behind it. The old Hub's choice predates this frame.
  Payroll: MoneyBag,
  Payslips: DollarBill,
  People: People,
  Performance: ChartLine,
  // `ChartPie` — a donut with its top-right quadrant offset, i.e. the
  // frame's exploded pie segment. It was `Organization`, an ORG-CHART
  // glyph, which is no longer what this row draws (and is now Workflows).
  Planning: ChartPie,
  // f0's `HardDrive`, which the Files row also carries — different panels,
  // and it is the glyph the frame draws for both.
  "Platform IT": HardDrive,
  // `UserProtected`, not `Shield`: the frame draws a shield with a person
  // inside, which is exactly this icon.
  Policies: UserProtected,
  Projects: Suitcase,
  Purchasing: Basket,
  Recruitment: SearchPerson,
  Sales: Handshake,
  Shifts: Schedule,
  Software: Computer,
  // `Building`'s geometry is an isometric cube (M5 8L12 12M12 20V12),
  // which is the frame's 3D box for Spaces — f0 has no cube glyph.
  Spaces: Building,
  Spend: Wallet,
  Spending: Wallet,
  // `BarGraph` is bars INSIDE a rounded rect (rect x=4 y=6 w=16 h=12
  // rx=3), which is what the frame draws; `ChartVerticalBars` is bare
  // bars with no container.
  "Talent analytics": BarGraph,
  // `CheckCircleLine`, the STROKED circle+check. `CheckCircle` is the
  // solid variant (a filled disc with the check knocked out) and would
  // have been the only filled glyph in an outline panel.
  Tickets: CheckCircleLine,
  Training: BookOpen,
  Treasury: Bank,
  "Time off": PalmTree,
  "Time tracking": Timer,
  // `Organization` is the only glyph here built from stroked nodes
  // joined by connectors — the frame's small node graph. `Split` is a
  // branching flow with arrowheads, which is a different idea.
  Workflows: Organization,
  Workplaces: Office,
}

export type HubGroup = { label: string; items: string[] }

/**
 * Figma 2945:795787 — SIX groups, replacing the five of 2639:49719.
 *
 * Read off the frame's own render, since Dev Mode would only hand back
 * metadata for this node: Company loses People/Workplaces/Equipment/
 * Software/Handbook for Organization/Documents/Policies/Tickets/Spaces/
 * Kudos, Work and Pay merge into Operations, Talent gains Talent
 * analytics, and "Gestion de IT" and "More" are new.
 *
 * THREE things the mock says that this does not copy verbatim:
 *   - "Engagment" is still the frame's typo; the spelling decision was
 *     already recorded here and stands.
 *   - "Sales" appeared TWICE, in IT and in Finance, which collide on one
 *     `?view=sales`. Oskar: the IT one is "Inventory".
 *   - "Gestion de IT" is the only Spanish group label, and unaccented.
 *     Kept exactly as drawn — renaming a designer's label is their call.
 */
export const ADMIN_HUB: HubGroup[] = [
  {
    label: "Company",
    // "Organization" is the row that used to read "People", and it still
    // points at that screen — PeopleScreen IS Organization › People
    // (Figma 2730:459215). Without that mapping the prototype's one real
    // Hub destination would lose its only entry point in this panel.
    // Policies moved to the Files panel on 2026-09-14 (Angel): it is a
    // library of documents, so it belongs beside Library and Templates.
    items: ["Organization", "Documents", "Tickets", "Spaces", "Kudos"],
  },
  {
    label: "Operations",
    items: [
      "Time tracking",
      "Time off",
      "Shifts",
      "Projects",
      "Benefits",
      "Payroll",
    ],
  },
  {
    label: "Talent",
    items: [
      "Talent analytics",
      "Performance",
      "Recruitment",
      "Engagement",
      "Training",
    ],
  },
  {
    label: "Gestion de IT",
    items: ["Device catalog", "Inventory", "Platform IT"],
  },
  {
    label: "Finance",
    items: ["Planning", "Spending", "Treasury", "Sales", "Accounting"],
  },
  // Marketplace joined "More" on 2026-09-14, off the rail.
  { label: "More", items: ["Billing", "Workflows", "Marketplace"] },
]

/**
 * Figma 2712:430800 — the employee's Hub. It is the admin's with the
 * administering stripped out (no Payroll, Recruitment, Shifts, Equipment,
 * Sales, Treasury, Accounting) and a new PERSONAL group on top holding
 * the four things an employee opens about themselves. Software moves from
 * Company to Finance.
 */
export const EMPLOYEE_HUB: HubGroup[] = [
  {
    label: "Personal",
    items: ["Hours", "Absences", "Payslips", "Learning"],
  },
  { label: "Company", items: ["People", "Workplaces", "Handbook"] },
  { label: "Work", items: ["Time off", "Time tracking", "Projects"] },
  { label: "Pay", items: ["Compensation", "Benefits"] },
  { label: "Talent", items: ["Performance", "Engagement", "Training"] },
  {
    label: "Finance",
    items: ["Planning", "Spend", "Purchasing", "Software"],
  },
  { label: "More", items: ["Marketplace"] },
]

/** Every module label in a set of groups, flattened. */
export function hubLabels(groups: HubGroup[]): string[] {
  return groups.flatMap((group) => group.items)
}

/**
 * The catalog a company actually has. `null` means everything — the
 * plan simulation passes an allow-list instead, and a group left with no
 * items disappears rather than rendering an empty header.
 */
export function filterHub(
  groups: HubGroup[],
  allowed: string[] | null
): HubGroup[] {
  if (!allowed) return groups
  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => allowed.includes(item)),
    }))
    .filter((group) => group.items.length > 0)
}
