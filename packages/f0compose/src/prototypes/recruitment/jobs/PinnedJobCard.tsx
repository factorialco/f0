import { F0Card } from "@factorialco/f0-react"
import {
  CheckCircle,
  Clock,
  Marker,
  People,
  StarFilled,
} from "@factorialco/f0-react/icons/app"

import type { Job } from "@/fixtures"

import { stageDotColor } from "../shared/stageColors"
import { jobStatusDotColor, statusText } from "./jobStatus"

/**
 * Card shown in the "Pinned jobs" grid above the jobs table. Mirrors the
 * production layout (status dot + location + posted-time + funnel).
 */
export function PinnedJobCard({
  job,
  onClick,
}: {
  job: Job
  onClick?: () => void
}) {
  const candidateTags = job.candidates.map((c) => ({
    text: String(c.count),
    color: stageDotColor[c.color],
  }))

  return (
    <div className="transition-shadow rounded-xl hover:shadow-md cursor-pointer">
      <F0Card
        title={job.title}
        onClick={onClick}
        otherActions={[{ label: "Unpin", icon: StarFilled, onClick: () => {} }]}
      metadata={[
        {
          icon: CheckCircle,
          property: {
            type: "dotTag",
            label: "Status",
            value: {
              label: statusText(job.status),
              color: jobStatusDotColor(job.status),
            },
          },
        },
        {
          icon: Marker,
          property: {
            type: "text",
            label: "Location",
            value: `${job.location}${job.jobType ? ` (${job.jobType})` : ""}`,
          },
        },
        {
          icon: Clock,
          property: {
            type: "text",
            label: "Posted",
            value: job.postedDaysAgo
              ? `${Math.round(job.postedDaysAgo / 30)} months ago`
              : "—",
          },
        },
        candidateTags.length > 0
          ? {
              icon: People,
              property: {
                type: "tagList",
                label: "Candidates",
                value: { type: "dot", tags: candidateTags, max: 4 },
              },
            }
          : {
              icon: People,
              property: {
                type: "text",
                label: "Candidates",
                value: "No candidates",
              },
            },
      ]}
    />
    </div>
  )
}
