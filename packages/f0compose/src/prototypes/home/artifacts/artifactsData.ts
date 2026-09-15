import { avatarFor } from "@/fixtures/helpers"

/**
 * What One has produced for you. The Home panel's old "Files" row pointed
 * at Policies and the "Reports" row pointed at nothing; both became this
 * on 2026-09-14 (Angel: "si son archivos que crea One… ¿por qué no tienen
 * otro nombre y juntamos ahí los reportes?").
 *
 * Two kinds, which are the screen's two presets: `document` is something
 * written, `analytics` something measured. The Files MODULE — the shared,
 * permissioned document store — is a different thing and lives on the
 * rail.
 */

export type ArtifactKind = "document" | "analytics"

export type Artifact = {
  id: string
  name: string
  kind: ArtifactKind
  summary: string
  createdBy: { firstName: string; lastName: string; src: string }
  /** Which conversation or routine produced it. */
  source: string
  lastUpdate: string
  updatedDaysAgo: number
}

const person = (firstName: string, lastName: string, seed: string) => ({
  firstName,
  lastName,
  src: avatarFor(seed),
})

const one = person("One", "Assistant", "one-agent")

export const artifacts: Artifact[] = [
  {
    id: "headcount-q3",
    name: "Q3 headcount vs plan",
    kind: "analytics",
    summary: "18 months of headcount against the hiring plan, with attrition.",
    createdBy: one,
    source: "Routine · Monday briefing",
    lastUpdate: "2 hours ago",
    updatedDaysAgo: 0,
  },
  {
    id: "time-off-june",
    name: "Time off coverage, June to August",
    kind: "analytics",
    summary: "Overlapping absences by team, flagged where cover drops below 2.",
    createdBy: one,
    source: "Conversation · Approve 12 time off requests",
    lastUpdate: "Yesterday",
    updatedDaysAgo: 1,
  },
  {
    id: "comp-band-design",
    name: "Design band benchmark",
    kind: "analytics",
    summary: "Senior Designer offers against the band and against market.",
    createdBy: person("Marta", "Ibáñez", "marta-ibanez"),
    source: "Conversation · Pick Lucia for Senior Designer",
    lastUpdate: "3 days ago",
    updatedDaysAgo: 3,
  },
  {
    id: "engagement-pulse",
    name: "Engagement pulse, Q2",
    kind: "analytics",
    summary: "eNPS by department with the three largest movements called out.",
    createdBy: one,
    source: "Routine · Quarterly review pack",
    lastUpdate: "1 week ago",
    updatedDaysAgo: 7,
  },
  {
    id: "remote-policy-draft",
    name: "Work from anywhere — policy draft",
    kind: "document",
    summary: "Four weeks a year, in blocks of one week, in entity countries.",
    createdBy: person("Marie", "Curie", "emp-002"),
    source: "Conversation · Draft the remote policy",
    lastUpdate: "Today",
    updatedDaysAgo: 0,
  },
  {
    id: "offer-lucia",
    name: "Offer letter — Lucía Fernández",
    kind: "document",
    summary: "Senior Designer, within band, start date to confirm.",
    createdBy: one,
    source: "Conversation · Pick Lucia for Senior Designer",
    lastUpdate: "Yesterday",
    updatedDaysAgo: 1,
  },
  {
    id: "promotion-marc",
    name: "Promotion case — Marc Roig",
    kind: "document",
    summary: "Two years as Mid, three reviews at 4.5+, committee notes.",
    createdBy: person("Marc", "Roig", "marc-roig"),
    source: "Conversation · Approve Marc's promotion",
    lastUpdate: "4 days ago",
    updatedDaysAgo: 4,
  },
  {
    id: "workshop-brief",
    name: "Design workshop brief",
    kind: "document",
    summary: "Agenda, budget and attendee list for the €890 team workshop.",
    createdBy: person("Marta", "Ibáñez", "marta-ibanez"),
    source: "Conversation · Approve design team workshop",
    lastUpdate: "1 week ago",
    updatedDaysAgo: 6,
  },
  {
    id: "onboarding-checklist",
    name: "September onboarding checklist",
    kind: "document",
    summary: "Every step for the four people starting this month.",
    createdBy: one,
    source: "Routine · Onboarding prep",
    lastUpdate: "2 weeks ago",
    updatedDaysAgo: 12,
  },
  {
    id: "bonus-q2",
    name: "Q2 bonus breakdown",
    kind: "analytics",
    summary: "€34,200 across 14 people, against the February formula.",
    createdBy: one,
    source: "Conversation · Send Q2 bonus list",
    lastUpdate: "2 weeks ago",
    updatedDaysAgo: 14,
  },
  {
    id: "contract-renewals",
    name: "Contract renewals — summary",
    kind: "document",
    summary: "Four renewals, all within standard policy and budget.",
    createdBy: one,
    source: "Conversation · Confirm 4 contract renewals",
    lastUpdate: "3 weeks ago",
    updatedDaysAgo: 20,
  },
  {
    id: "training-budget",
    name: "L&D budget tracker",
    kind: "analytics",
    summary: "Q2 spend against budget by team, with the remaining runway.",
    createdBy: person("Diego", "Ferrer", "diego-ferrer"),
    source: "Routine · Monthly budget check",
    lastUpdate: "1 month ago",
    updatedDaysAgo: 30,
  },
]
