import type { IconType, ModuleId } from "@factorialco/f0-react"

import {
  AcademicCap,
  FileFilled,
  MessageHeart,
  MoneyBag,
  PalmTree,
  People,
} from "@factorialco/f0-react/icons/app"

import { avatarFor } from "@/fixtures/helpers"

/**
 * Alicia's avatar — the single source for every usage (greeting,
 * sidebar footer, communities composer). Drop the real photo at
 * `src/prototypes/home/assets/alicia.jpg` (or .png/.webp) and it's
 * picked up automatically; until then it falls back to the placeholder.
 * (The Figma Dev Mode server can't export this image fill, so the file
 * has to be added by hand once.)
 */
const aliciaPhoto = import.meta.glob("./assets/alicia.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
})

export const aliciaAvatar: string =
  (Object.values(aliciaPhoto)[0] as string | undefined) ?? avatarFor("alicia")

/**
 * Factorial's company logo, feeding `F0AvatarCompany`'s with-image variant
 * in the nav rail. Copied from f0's own storybook static asset
 * (`packages/react/.storybook/static/avatars/factorial.png`, the file its
 * AvatarCompany stories use) since dist ships no image assets.
 */
const factorialLogoFile = import.meta.glob(
  "./assets/factorial.{png,jpg,jpeg,webp,svg}",
  { eager: true, query: "?url", import: "default" }
)

export const factorialLogo: string | undefined = Object.values(
  factorialLogoFile
)[0] as string | undefined

export type NeedsYouTask = {
  id: string
  icon: IconType
  title: string
  subtitle: string
  ctaLabel: string
  /**
   * Who the task is ABOUT, and which module it came from. Home's
   * Needs-you rows show neither — they lead with a bare icon — but the
   * Inbox nav renders the same tasks with a person avatar and a module
   * badge (Figma 2621:28151), and both lists read from here so they can
   * never drift apart (per Oskar, 2026-09-01).
   */
  avatarSeed: string
  module: ModuleId
}

// Matches the "Needs you" list from the Home - Vision Figma file
// (node 975:11480) exactly — copy, order, and icon per row.
/**
 * Who you are viewing Home as. The employee needs a name and a face of
 * her own — with Alicia's, the two profiles look like the same person's
 * screen twice, which is the first thing anyone checks in a side-by-side
 * (per Oskar, 2026-08-31). Alicia keeps her real local photo; Sara uses
 * the same deterministic pravatar helper as every other person in the
 * prototype (inbox rows, Communities posts).
 */
export type ProfilePerson = {
  firstName: string
  lastName: string
  avatar: string
}

export const PROFILE_PEOPLE: Record<"admin" | "employee", ProfilePerson> = {
  admin: { firstName: "Alicia", lastName: "Torres", avatar: aliciaAvatar },
  employee: {
    firstName: "Sara",
    lastName: "Vidal",
    avatar: avatarFor("sara-vidal"),
  },
}

/** Everything sitting in the Inbox, of which the canvas lists only the
 *  top few — drives the "View all (n)" link (Figma 2621:22725). */
export const INBOX_TOTAL = 35

export const needsYouTasks: NeedsYouTask[] = [
  {
    id: "time-off-batch",
    avatarSeed: "elias-skile",
    module: "timeoff",
    icon: PalmTree,
    title: "Approve 12 time off requests",
    subtitle: "All within policy · Jun–Jul · no team conflicts",
    ctaLabel: "Approve all",
  },
  {
    id: "recruitment-pick",
    avatarSeed: "lucia-f",
    module: "ats",
    icon: People,
    title: "Pick Lucia for Senior Designer",
    subtitle: "Score 9.2 / 10 · within band · 14 interviews done",
    ctaLabel: "Pick Lucía",
  },
  {
    id: "contract-renewals",
    avatarSeed: "marta-ibanez",
    module: "company_documents",
    icon: FileFilled,
    title: "Confirm 4 contract renewals",
    subtitle: "All within standard policy and budget · already drafted",
    ctaLabel: "Confirm all",
  },
  {
    id: "promotion-marc",
    avatarSeed: "marc-roig",
    module: "performance",
    icon: MessageHeart,
    title: "Approve Marc's promotion to Senior",
    subtitle: "2 yrs as Mid · 3 reviews at 4.5+/5 · committee approved",
    ctaLabel: "Approve",
  },
  {
    id: "q2-bonus",
    avatarSeed: "diego-ferrer",
    module: "compensations",
    icon: MoneyBag,
    title: "Send Q2 bonus list — €34,200 across 14 people",
    subtitle: "Aligned with February formula · within €35k cap",
    ctaLabel: "Confirm",
  },
  {
    id: "workshop-budget",
    avatarSeed: "marta-ibanez",
    module: "company_trainings",
    icon: AcademicCap,
    title: "Approve €890 design team workshop",
    subtitle: "Within Q2 L&D budget · requested by Marta",
    ctaLabel: "Approve",
  },
]

/**
 * The headcount banner One can be asked about. The series is monthly
 * total headcount for the last twelve months — noisy but rising, ending
 * on the jump the reply talks about.
 */
export const HEADCOUNT = {
  // English throughout, per Oskar (2026-09-01) — the Figma frame writes
  // "Total empleados / Altas / Bajas", but the product is English and the
  // reply copy already says "122 joiners against 37 leavers", so these
  // are the words that turn of phrase was written for.
  title: "Total employees",
  stats: [
    { label: "Total", value: "2.714" },
    { label: "Joiners", value: "122" },
    { label: "Leavers", value: "37" },
  ],
  series: [
    2498, 2512, 2506, 2531, 2547, 2540, 2566, 2578, 2571, 2594, 2610, 2604,
    2629, 2648, 2641, 2663, 2672, 2714,
  ],
}
