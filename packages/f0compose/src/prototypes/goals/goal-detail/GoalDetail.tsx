import { F0Box, F0Icon, F0Text } from "@factorialco/f0-react"
import { TwoColumnLayout } from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
  ResourceHeader,
} from "@factorialco/f0-react/dist/experimental"
import {
  ChevronDown,
  ChevronUp,
  Cross,
  Pencil,
} from "@factorialco/f0-react/icons/app"
import { useCallback, useState } from "react"

import { findEmployee } from "@/fixtures"

import type { GoalRecord } from "../shared/types"
import { ActivityTimeline } from "./ActivityTimeline"
import { DetailsSidebar } from "./DetailsSidebar"
import { EditGoalForm } from "./EditGoalForm"
import { subGoalsColumns } from "./subGoalsColumns"
import { useSubGoalsSource } from "./useSubGoalsSource"
import { getActivityForGoal } from "../shared/activity"

type Props = {
  goal: GoalRecord
  /** Render in "edit" sub-mode: show the simpler EditGoalForm. */
  edit?: boolean
  onEdit: () => void
  onCancelEdit: () => void
  onSave: (
    goalId: string,
    update: {
      progress: number
      status: GoalRecord["status"]
      dueDate: string
      note?: string
    }
  ) => void
  onSelectGoal: (id: string) => void
  onBack: () => void
}

/**
 * Goal detail page. Mirrors the design provided by the user: breadcrumbs,
 * ResourceHeader with inline status + owner + assignee + due date +
 * visibility, a "Sub-goals" widget rendered as a nested
 * OneDataCollection table, an "Activity" timeline below, and a
 * Details sidebar on the right (Progress, Progress over time, Parent
 * goal, Incentive plans).
 *
 * Built entirely with F0 components: F0Widget for the sub-goals card,
 * TwoColumnLayout for the main/sidebar split, F0Card for the sidebar
 * cards, etc.
 */
export function GoalDetail({
  goal,
  edit,
  onEdit,
  onCancelEdit,
  onSave,
  onSelectGoal,
  onBack,
}: Props) {
  const owner = findEmployee(goal.assigneeId)
  const subGoalsSource = useSubGoalsSource(goal.id, onSelectGoal)
  const activity = getActivityForGoal(goal.id)
  const hasChildren = goal.childrenIds.length > 0
  const [subGoalsExpanded, setSubGoalsExpanded] = useState<boolean>(hasChildren)

  const handleSave = useCallback(
    (update: {
      progress: number
      status: GoalRecord["status"]
      dueDate: string
      note?: string
    }) => {
      onSave(goal.id, update)
    },
    [goal.id, onSave]
  )

  // ─── Edit sub-mode ───────────────────────────────────────────────
  if (edit) {
    return (
      <Page
        key={`edit-${goal.id}`}
        header={
          <>
            <PageHeader
              module={{
                id: "performance",
                name: "Performance",
                href: "/p/goals",
              }}
              breadcrumbs={[
                { id: "goals", label: "Goals" },
                { id: goal.id, label: goal.title },
                { id: "edit", label: "Update" },
              ]}
            />
            <ResourceHeader
              title={`Update goal: ${goal.title}`}
              description="Quickly bump progress and status. The AI copilot can fill these fields too."
              secondaryActions={[
                { label: "Cancel", icon: Cross, onClick: onCancelEdit },
              ]}
            />
          </>
        }
      >
        <EditGoalForm goal={goal} onSave={handleSave} />
      </Page>
    )
  }

  // ─── Detail view ─────────────────────────────────────────────────
  return (
    <Page
      key={`goal-${goal.id}`}
      header={
        <>
          <PageHeader
            module={{
              id: "performance",
              name: "Performance",
              href: "/p/goals",
            }}
            breadcrumbs={[
              { id: "goals", label: "Goals" },
              { id: goal.id, label: goal.title },
            ]}
          />
          <ResourceHeader
            title={goal.title}
            description={describeGoal(goal)}
            primaryAction={{
              label: "Update goal",
              icon: Pencil,
              onClick: onEdit,
            }}
            secondaryActions={[
              {
                label: "Back to list",
                icon: Cross,
                hideLabel: true,
                onClick: onBack,
              },
            ]}
            metadata={[
              {
                label: "Status",
                value: {
                  type: "status",
                  label: statusLabel(goal.status),
                  variant: statusVariant(goal.status),
                },
              },
              {
                label: "Owner",
                value: owner
                  ? {
                      type: "avatar",
                      variant: {
                        type: "person",
                        firstName:
                          owner.preferredName ?? owner.fullName.split(" ")[0],
                        lastName: owner.fullName.split(" ").slice(-1).join(" "),
                        src: owner.avatarUrl,
                      },
                      text: owner.fullName,
                    }
                  : { type: "text", content: "Unassigned" },
              },
              {
                label: "Assignee",
                value: {
                  type: "avatar",
                  variant: { type: "company", name: "Factorial" },
                  text: "Factorial",
                },
              },
              {
                label: "Due date",
                value: {
                  type: "text",
                  content: formatDueDate(goal.dueDate),
                },
              },
              {
                label: "Visibility",
                value: { type: "text", content: "Private" },
              },
            ]}
          />
        </>
      }
    >
      <TwoColumnLayout
        sticky
        sideContent={
          <DetailsSidebar goal={goal} onSelectGoal={onSelectGoal} />
        }
      >
        <F0Box display="flex" flexDirection="column" gap="xl">
          <div className="flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
            <button
              type="button"
              onClick={() => setSubGoalsExpanded((v) => !v)}
              aria-expanded={subGoalsExpanded}
              className="flex items-center gap-2 p-3 text-left transition-colors hover:bg-f1-background-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-f1-border-selected"
            >
              <F0Icon icon={subGoalsExpanded ? ChevronUp : ChevronDown} size="sm" />
              <F0Text
                content={`Sub-goals (${goal.childrenIds.length})`}
                variant="label"
              />
            </button>
            {subGoalsExpanded ? (
              <>
                <div className="h-px w-full bg-f1-border-secondary" />
                {hasChildren ? (
                  <div className="mt-3">
                    <OneDataCollection
                      source={subGoalsSource}
                      visualizations={[
                        { type: "table", options: { columns: subGoalsColumns } },
                      ]}
                    />
                  </div>
                ) : (
                  <F0Box padding="md">
                    <F0Text
                      content="No sub-goals yet."
                      variant="description"
                    />
                  </F0Box>
                )}
              </>
            ) : null}
          </div>

          <ActivityTimeline entries={activity} />
        </F0Box>
      </TwoColumnLayout>
    </Page>
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────

function describeGoal(goal: GoalRecord): string {
  switch (goal.scope) {
    case "team":
      return "A team goal contributing to the company's roadmap."
    case "mine":
      return "A personal goal tracked in your performance plan."
    case "all":
      return "A company-wide goal visible across the organisation."
  }
}

function formatDueDate(d: string): string {
  if (!d || d === "—") return "—"
  const target = new Date(d)
  if (Number.isNaN(target.getTime())) return d
  const now = new Date("2026-04-01")
  const diff = Math.round(
    (target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  )
  if (diff > 0) return `in ${diff} days`
  if (diff === 0) return "today"
  return `${Math.abs(diff)} days ago`
}

function statusLabel(status: GoalRecord["status"]): string {
  switch (status) {
    case "not-started":
      return "Pending"
    case "on-track":
      return "On track"
    case "achieved":
      return "Achieved"
    case "cancelled":
      return "Cancelled"
  }
}

function statusVariant(
  status: GoalRecord["status"]
): "neutral" | "info" | "positive" | "warning" | "critical" {
  switch (status) {
    case "not-started":
      return "neutral"
    case "on-track":
      return "info"
    case "achieved":
      return "positive"
    case "cancelled":
      return "critical"
  }
}
