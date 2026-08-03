import type { IconType } from "@factorialco/f0-react"
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

export type NeedsYouTask = {
  id: string
  icon: IconType
  title: string
  subtitle: string
  ctaLabel: string
}

// Matches the "Needs you" list from the Home - Vision Figma file
// (node 975:11480) exactly — copy, order, and icon per row.
export const needsYouTasks: NeedsYouTask[] = [
  {
    id: "time-off-batch",
    icon: PalmTree,
    title: "Approve 12 time off requests",
    subtitle: "All within policy · Jun–Jul · no team conflicts",
    ctaLabel: "Approve all",
  },
  {
    id: "recruitment-pick",
    icon: People,
    title: "Pick Lucia for Senior Designer",
    subtitle: "Score 9.2 / 10 · within band · 14 interviews done",
    ctaLabel: "Pick Lucía",
  },
  {
    id: "contract-renewals",
    icon: FileFilled,
    title: "Confirm 4 contract renewals",
    subtitle: "All within standard policy and budget · already drafted",
    ctaLabel: "Confirm all",
  },
  {
    id: "promotion-marc",
    icon: MessageHeart,
    title: "Approve Marc's promotion to Senior",
    subtitle: "2 yrs as Mid · 3 reviews at 4.5+/5 · committee approved",
    ctaLabel: "Approve",
  },
  {
    id: "q2-bonus",
    icon: MoneyBag,
    title: "Send Q2 bonus list — €34,200 across 14 people",
    subtitle: "Aligned with February formula · within €35k cap",
    ctaLabel: "Confirm",
  },
  {
    id: "workshop-budget",
    icon: AcademicCap,
    title: "Approve €890 design team workshop",
    subtitle: "Within Q2 L&D budget · requested by Marta",
    ctaLabel: "Approve",
  },
]
