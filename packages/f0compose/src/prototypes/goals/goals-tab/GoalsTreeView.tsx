import { F0Box, F0Card, F0Text, type IconType } from "@factorialco/f0-react"
import { Calendar, Group, Person, Target } from "@factorialco/f0-react/icons/app"

import type { GoalAssignee, GoalRecord, GoalStatus } from "../shared/types"
import type { TreeNode } from "./useGoalsTreeData"

function statusLabel(status: GoalStatus): string {
  switch (status) {
    case "on-track":
      return "On track"
    case "off-track":
      return "Off track"
    case "at-risk":
      return "At Risk"
    case "partial":
      return "Partial"
    case "achieved":
      return "Achieved"
    case "missed":
      return "Missed"
    case "cancelled":
      return "Canceled"
  }
}

function statusVariant(
  status: GoalStatus
): "neutral" | "info" | "positive" | "critical" {
  switch (status) {
    case "on-track":
      return "info"
    case "off-track":
    case "at-risk":
    case "missed":
      return "critical"
    case "partial":
    case "cancelled":
      return "neutral"
    case "achieved":
      return "positive"
  }
}

function assigneeIcon(assignee: GoalAssignee): IconType {
  if (assignee.type === "team" || assignee.type === "group") return Group
  return Person
}

function describeAssigneeText(assignee: GoalAssignee): string {
  switch (assignee.type) {
    case "individual":
      return assignee.employeeId
    case "team":
      return assignee.teamId
    case "company":
      return assignee.name
    case "area":
      return assignee.name
    case "department":
      return assignee.departmentId
    case "group":
      return `${assignee.employeeIds.length} people`
  }
}

/**
 * Renders a single goal as a card with metadata.
 */
function GoalCard({
  goal,
  onSelect,
}: {
  goal: GoalRecord
  onSelect: (id: string) => void
}) {
  return (
    <F0Box width="64">
      <F0Card
        title={goal.title}
        compact
        onClick={() => onSelect(goal.id)}
        metadata={[
          {
            icon: Target,
            property: {
              type: "status",
              label: "Status",
              value: {
                label: statusLabel(goal.status),
                status: statusVariant(goal.status),
              },
            },
          },
          {
            icon: assigneeIcon(goal.assignee),
            property: {
              type: "text",
              label: "Assignee",
              value: describeAssigneeText(goal.assignee),
            },
          },
          {
            icon: Target,
            property: {
              type: "text",
              label: "Measure",
              value: goal.measure,
            },
          },
          {
            icon: Target,
            property: {
              type: "progressBar",
              label: "Progress",
              value: {
                value: goal.progress,
                max: Math.max(100, goal.progress),
                label: `${goal.progress}%`,
                color:
                  goal.progress > 100 ? "categorical-4" : "categorical-1",
              },
            },
          },
          {
            icon: Calendar,
            property: {
              type: "text",
              label: "Due date",
              value: new Date(goal.dueDate).toLocaleDateString("en-GB"),
            },
          },
        ]}
      />
    </F0Box>
  )
}

/**
 * Renders one branch of the tree: a parent card on the left and its
 * children stacked vertically on the right, separated by a connector
 * column drawn with SVG.
 */
function Branch({
  node,
  onSelect,
}: {
  node: TreeNode
  onSelect: (id: string) => void
}) {
  const hasChildren = node.children.length > 0

  return (
    <F0Box display="flex" alignItems="stretch">
      <F0Box display="flex" flexDirection="column" justifyContent="center">
        <GoalCard goal={node.goal} onSelect={onSelect} />
      </F0Box>

      {hasChildren && (
        <>
          <F0Box position="relative" width="16" shrink>
            <Connector count={node.children.length} />
            <F0Box
              position="absolute"
              background="secondary"
              borderRadius="full"
              paddingX="sm"
              paddingY="xs"
            >
              <F0Text
                content={String(node.children.length)}
                variant="small"
              />
            </F0Box>
          </F0Box>

          <F0Box display="flex" flexDirection="column" gap="md">
            {node.children.map((child) => (
              <Branch
                key={child.goal.id}
                node={child}
                onSelect={onSelect}
              />
            ))}
          </F0Box>
        </>
      )}
    </F0Box>
  )
}

/**
 * SVG connector from parent to children.
 */
function Connector({ count }: { count: number }) {
  if (count === 0) return null
  return (
    <svg
      className="absolute inset-0 h-full w-full text-f1-border"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {Array.from({ length: count }).map((_, i) => {
        const y = count === 1 ? 50 : (100 / (count - 1)) * i
        return (
          <path
            key={i}
            d={`M0 50 H50 V${y} H100`}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        )
      })}
    </svg>
  )
}

export function GoalsTreeView({
  trees,
  onSelectGoal,
}: {
  trees: TreeNode[]
  onSelectGoal: (id: string) => void
}) {
  if (trees.length === 0) {
    return (
      <F0Box display="flex" justifyContent="center" paddingY="xl">
        <F0Text content="No goals match the current filters." variant="description" />
      </F0Box>
    )
  }

  return (
    <F0Box overflow="auto" paddingBottom="xl">
      <F0Box display="flex" flexDirection="column" gap="xl">
        {trees.map((tree) => (
          <Branch key={tree.goal.id} node={tree} onSelect={onSelectGoal} />
        ))}
      </F0Box>
    </F0Box>
  )
}
