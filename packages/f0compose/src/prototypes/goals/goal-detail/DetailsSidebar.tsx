import {
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0TagStatus,
  F0Text,
  LineChart,
  ProgressBarChart,
} from "@factorialco/f0-react"
import { Add } from "@factorialco/f0-react/icons/app"

import { findEmployee } from "@/fixtures"

import { getProgressSeriesForGoal } from "../shared/activity"
import { goalsFixtures } from "../shared/fixtures"
import type { GoalRecord } from "../shared/types"

type Props = {
  goal: GoalRecord
  onSelectGoal: (id: string) => void
}

const progressSeriesConfig = {
  progress: { label: "Progress" },
}

/**
 * Right-rail sidebar on the goal detail page. Mirrors the design:
 * Progress percent + bar, Progress over time line chart, Parent goal
 * (linked F0Card or "Add parent goal" CTA), and an Incentive plans
 * F0Card for goals tied to a payroll incentive.
 *
 * Built with F0 components only — no raw HTML containers.
 */
export function DetailsSidebar({ goal, onSelectGoal }: Props) {
  const parent = goal.parentId
    ? (goalsFixtures.find((g) => g.id === goal.parentId) ?? null)
    : null
  const series = getProgressSeriesForGoal(goal)
  const seriesData = series.map((p) => ({
    label: monthShort(p.date),
    values: { progress: p.progress },
  }))

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Heading content="Details" variant="heading" as="h3" />

      <F0Box display="flex" flexDirection="column" gap="sm">
        <F0Text content="Progress" variant="label" />
        <ProgressBarChart
          value={goal.progress}
          max={100}
          label={`${goal.progress}%`}
        />
      </F0Box>

      <F0Box display="flex" flexDirection="column" gap="sm">
        <F0Text content="Progress over time" variant="label" />
        <F0Box height="18">
          <LineChart
            dataConfig={progressSeriesConfig}
            data={seriesData}
            xAxis={{ hide: false, tickFormatter: (v: string) => v }}
            yAxis={{ hide: true }}
            lineType="linear"
          />
        </F0Box>
      </F0Box>

      <F0Box display="flex" flexDirection="column" gap="sm">
        <F0Text content="Parent goal" variant="label" />
        {parent ? (
          <ParentGoalCard goal={parent} onSelectGoal={onSelectGoal} />
        ) : (
          <F0Button
            label="Add parent goal"
            icon={Add}
            variant="outline"
            onClick={() => {}}
          />
        )}
      </F0Box>

      <F0Box display="flex" flexDirection="column" gap="sm">
        <F0Text content="Incentive plans" variant="label" />
        <F0Card
          title="Product team"
          compact
          onClick={() => {}}
        >
          <F0TagStatus text="Active" variant="positive" />
        </F0Card>
      </F0Box>
    </F0Box>
  )
}

function ParentGoalCard({
  goal,
  onSelectGoal,
}: {
  goal: GoalRecord
  onSelectGoal: (id: string) => void
}) {
  const owner = findEmployee(goal.ownerId)
  return (
    <F0Card
      title={goal.title}
      description={owner ? owner.fullName : "Unassigned"}
      compact
      onClick={() => onSelectGoal(goal.id)}
    />
  )
}

function monthShort(date: string): string {
  const month = parseInt(date.split("-")[1], 10)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  return months[Math.max(0, Math.min(11, month - 1))]
}
