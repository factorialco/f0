import { type Job, employees, findEmployee } from "@/fixtures"

import { stageDotColor } from "../shared/stageColors"
import { statusText, statusVariant } from "./jobStatus"

/**
 * Column definitions for the Jobs OneDataCollection table. Renderers return
 * either plain strings or compound value-display objects ({ type, value }) —
 * never JSX.
 */
export const jobsColumns = [
  {
    id: "title",
    label: "Job opening",
    sorting: "title",
    render: (item: Job) => item.title,
  },
  {
    id: "location",
    label: "Location",
    sorting: "location",
    render: (item: Job) => item.location,
  },
  {
    id: "jobType",
    label: "Job type",
    render: (item: Job) => item.jobType,
  },
  {
    id: "vacancies",
    label: "Vacancies",
    render: (item: Job) =>
      item.vacancies != null ? String(item.vacancies) : "—",
  },
  {
    id: "hiringManagers",
    label: "Hiring manager",
    render: (item: Job) => ({
      type: "avatarList" as const,
      value: {
        type: "person" as const,
        avatarList: item.hiringManagerIds.map((id) => {
          const emp = findEmployee(id) ?? employees[0]
          return {
            firstName: emp.preferredName ?? emp.fullName.split(" ")[0],
            lastName: emp.fullName.split(" ").slice(-1).join(" "),
            src: emp.avatarUrl,
          }
        }),
        max: 3,
      },
    }),
  },
  {
    id: "candidates",
    label: "Candidates",
    render: (item: Job) => {
      if (item.candidates.length === 0) return "No candidates"
      return {
        type: "tagList" as const,
        value: {
          type: "dot" as const,
          tags: item.candidates.map((c) => ({
            text: String(c.count),
            color: stageDotColor[c.color],
          })),
          max: 4,
        },
      }
    },
  },
  {
    id: "publishedAt",
    label: "Published",
    sorting: "publishedAt",
    render: (item: Job) =>
      item.postedDaysAgo != null
        ? `${Math.round(item.postedDaysAgo / 30)} months ago`
        : "—",
  },
  {
    id: "startDate",
    label: "Start date",
    render: (item: Job) => item.startDate ?? "—",
  },
  {
    id: "status",
    label: "Status",
    render: (item: Job) => ({
      type: "status" as const,
      value: {
        label: statusText(item.status),
        status: statusVariant(item.status),
      },
    }),
  },
]
