import { F0Avatar, F0Box, F0Heading, F0Text } from "@factorialco/f0-react"

import { findEmployee, employees } from "@/fixtures"

import type { GoalActivity } from "../shared/activity"

type Props = {
  entries: GoalActivity[]
}

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
      <F0Box display="flex" flexDirection="column" gap="xl">
        {displayEntries.map((entry) => {
          const author = findEmployee(entry.authorId) ?? employees[0]
          const firstName =
            author.preferredName ?? author.fullName.split(" ")[0]
          const lastName = author.fullName.split(" ").slice(-1).join(" ")

          return (
            <F0Box key={entry.id} display="flex" gap="sm">
              <F0Avatar
                avatar={{
                  type: "person",
                  firstName,
                  lastName,
                  src: author.avatarUrl,
                }}
                size="md"
              />
              <F0Box display="flex" flexDirection="column" gap="xs" grow>
                <F0Box display="flex" flexDirection="column">
                  <F0Text
                    content={`${author.fullName} updated goal progress`}
                    variant="body"
                  />
                  <F0Text
                    content={formatDate(entry.date)}
                    variant="description"
                  />
                </F0Box>
                <F0Box
                  borderRadius="md"
                  borderColor="default"
                  border="default"
                  overflow="hidden"
                >
                  <F0Box
                    display="flex"
                    alignItems="center"
                    justifyContent="between"
                    padding="md"
                  >
                    <F0Text content="Current" variant="description" />
                    <F0Box display="flex" alignItems="center" gap="xs">
                      <F0Text
                        content={`~~${formatNumber(entry.previousValue)}€~~`}
                        variant="description"
                      />
                      <F0Text content="→" variant="description" />
                      <F0Text
                        content={`${formatNumber(entry.newValue)}€`}
                        variant="body"
                      />
                    </F0Box>
                  </F0Box>
                  {entry.note && (
                    <F0Box borderTop="default" borderColor="default" />
                  )}
                  {entry.note && (
                    <F0Box
                      display="flex"
                      alignItems="center"
                      justifyContent="between"
                      padding="md"
                    >
                      <F0Text content="Note" variant="description" />
                      <F0Text content={entry.note} variant="body" />
                    </F0Box>
                  )}
                </F0Box>
              </F0Box>
            </F0Box>
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
