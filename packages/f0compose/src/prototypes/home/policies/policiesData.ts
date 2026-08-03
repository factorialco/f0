import { avatarFor } from "@/fixtures/helpers"

/**
 * The Policies screen dataset (Figma 1350:190929) — names, creators,
 * statuses, and relative ages straight from the design. `updatedDaysAgo`
 * backs the functional "Last update" sort.
 */

export type PolicyStatus = "published" | "draft" | "outdated"

export type Policy = {
  id: string
  name: string
  createdBy: { firstName: string; lastName: string; src: string }
  status: PolicyStatus
  lastUpdate: string
  updatedDaysAgo: number
}

const person = (firstName: string, lastName: string, seed: string) => ({
  firstName,
  lastName,
  src: avatarFor(seed),
})

export const policies: Policy[] = [
  {
    id: "travel-expense",
    name: "Office Travel and Expense Policy",
    createdBy: person("Fiona", "Abbott", "fiona-a"),
    status: "published",
    lastUpdate: "5 days ago",
    updatedDaysAgo: 5,
  },
  {
    id: "data-protection",
    name: "Data Protection Policy",
    createdBy: person("Pablo", "Navarro", "pablo-n"),
    status: "published",
    lastUpdate: "7 days ago",
    updatedDaysAgo: 7,
  },
  {
    id: "remote-work",
    name: "Remote Work Policy",
    createdBy: person("Lucía", "Fernandez", "lucia-f"),
    status: "draft",
    lastUpdate: "20 days ago",
    updatedDaysAgo: 20,
  },
  {
    id: "equal-opportunity",
    name: "Equal Opportunity Employment Policy",
    createdBy: person("Aisha", "Rahman", "aisha-r"),
    status: "published",
    lastUpdate: "22 days ago",
    updatedDaysAgo: 22,
  },
  {
    id: "harassment-prevention",
    name: "Harassment Prevention Policy",
    createdBy: person("Marc", "Vidal", "marc-v"),
    status: "draft",
    lastUpdate: "1 month ago",
    updatedDaysAgo: 31,
  },
  {
    id: "confidentiality",
    name: "Confidentiality Agreement",
    createdBy: person("Alicia", "Keys", "alicia"),
    status: "published",
    lastUpdate: "1 month ago",
    updatedDaysAgo: 35,
  },
  {
    id: "social-media",
    name: "Social Media Policy",
    createdBy: person("Jon", "Ander", "jon-a"),
    status: "draft",
    lastUpdate: "2 months ago",
    updatedDaysAgo: 62,
  },
  {
    id: "workplace-safety",
    name: "Workplace Safety Policy",
    createdBy: person("Jon", "Ander", "jon-a"),
    status: "outdated",
    lastUpdate: "1 year ago",
    updatedDaysAgo: 365,
  },
]
