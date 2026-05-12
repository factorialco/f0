import { F0Box, F0Heading, F0Text, F0TimelineRow } from "@factorialco/f0-react"

import { findEmployee, employees } from "@/fixtures"

import type { GoalActivity } from "../shared/activity"

type Props = {
  entries: GoalActivity[]
}

/**
 * "Activity" timeline shown under the Sub-goals widget. Renders each
 * goal-progress update as an `F0TimelineRow` (sds/TimeLine) so the
 * vertical guide line, status dot and connector logic come from the
 * design-system component instead of bespoke markup.
 *
 * Each row uses:
 *  - `status: "completed"` — green check dot anchored on the line
 *  - `title: "<author> updated goal progress"`
 *  - `description: <DD/MM/YYYY>`
 *  - `metadata`: author avatar + "Current <prev> → <new>" + optional Note
 */
/**
 * Fallback activity entries shown when a goal has no real activity data.
 * Ensures the timeline always renders something meaningful in the prototype.
 */
const fallbackEntries: GoalActivity[] = [
  {
    id: "act-fallback-1",
    goalId: "",
    authorId: "emp-002",
    date: "2026-04-28",
    type: "progress-update",
    previousValue: 0,
    newValue: 15,
    note: "Initial progress tracked after kickoff meeting with stakeholders.",
  },
  {
    id: "act-fallback-2",
    goalId: "",
    authorId: "emp-001",
    date: "2026-03-15",
    type: "progress-update",
    previousValue: 0,
    newValue: 0,
    note: "Goal created and assigned. Aligning with team on milestones.",
  },
]

export function ActivityTimeline({ entries }: Props) {
  const displayEntries = entries.length > 0 ? entries : fallbackEntries

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Heading content="Activity" variant="heading" as="h3" />
      <F0Box display="flex" flexDirection="column">
        {displayEntries.map((entry, idx) => {
          const author = findEmployee(entry.authorId) ?? employees[0]
          const firstName = author.preferredName ?? author.fullName.split(" ")[0]
          const lastName = author.fullName.split(" ").slice(-1).join(" ")
          const isLast = idx === displayEntries.length - 1

          return (
            <F0TimelineRow
              key={entry.id}
              status={entry.status ?? "completed"}
              title={`${author.fullName} updated goal progress`}
              description={formatDate(entry.date)}
              isLast={isLast}
              metadata={[
                {
                  label: "Author",
                  hideLabel: true,
                  value: {
                    type: "avatar",
                    variant: {
                      type: "person",
                      firstName,
                      lastName,
                      src: author.avatarUrl,
                    },
                    text: author.fullName,
                  },
                },
                {
                  label: "Current",
                  value: {
                    type: "text",
                    content: `${formatNumber(entry.previousValue)} → ${formatNumber(entry.newValue)}`,
                  },
                },
                entry.note
                  ? {
                      label: "Note",
                      value: { type: "text", content: entry.note },
                    }
                  : undefined,
              ]}
            />
          )
        })}
      </F0Box>
    </F0Box>
  )
}

function formatDate(d: string): string {
  const [y, m, day] = d.split("-")
  return `${day}/${m}/${y}`
}

function formatNumber(n: number): string {
  return n.toLocaleString("de-DE")
}
