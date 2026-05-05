import {
  Briefcase,
  Calendar,
  Marker,
  Office,
} from "@factorialco/f0-react/icons/app"

import { findDepartment, type Job, relativeDate } from "@/fixtures"

/**
 * Card properties shown on each Internal Opportunity card. Render functions
 * return the canonical `{ type, value }` cell shape — never JSX. Cell value
 * shapes are confirmed in
 * `packages/react/src/ui/value-display/types/{tag,dotTag,text}/*.tsx`.
 */

const jobTypeColor = {
  Onsite: "indigo",
  Remote: "viridian",
  Hybrid: "yellow",
} as const

export const opportunityCardProperties = [
  {
    label: "Team",
    icon: Briefcase,
    render: (j: Job) => ({
      type: "tag" as const,
      value: {
        label: j.departmentId ? (findDepartment(j.departmentId)?.name ?? "—") : "—",
      },
    }),
  },
  {
    label: "Work mode",
    icon: Office,
    render: (j: Job) => ({
      type: "dotTag" as const,
      value: { label: j.jobType, color: jobTypeColor[j.jobType] },
    }),
  },
  {
    label: "Location",
    icon: Marker,
    render: (j: Job) => ({ type: "text" as const, value: j.location }),
  },
  {
    label: "Posted",
    icon: Calendar,
    render: (j: Job) => ({
      type: "text" as const,
      value: j.publishedAt ? relativeDate(j.publishedAt) : "—",
    }),
  },
]
