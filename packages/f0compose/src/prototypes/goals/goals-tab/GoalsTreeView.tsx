import { F0Card, F0Text } from "@factorialco/f0-react"
import { Calendar, Group, Person, Target } from "@factorialco/f0-react/icons/app"

import type { GoalAssignee, GoalRecord, GoalStatus } from "../shared/types"
import type { TreeNode } from "./useGoalsTreeData"

function statusLabel(s: GoalStatus): string {
  switch (s) {
    case "not-started":
      return "Not started"
    case "on-track":
      return "On track"
    case "off-track":
      return "Off track"
    case "achieved":
      return "Achieved"
    case "cancelled":
      return "Cancelled"
  }
}

function statusVariant(
  s: GoalStatus
): "neutral" | "info" | "positive" | "critical" | "warning" {
  switch (s) {
    case "not-started":
      return "neutral"
    case "on-track":
      return "info"
    case "off-track":
      return "warning"
    case "achieved":
      return "positive"
    case "cancelled":
      return "critical"
  }
}

function describeAssigneeText(a: GoalAssignee): string {
  switch (a.type) {
    case "company":
      return a.name
    case "department":
      return "Department"
    case "team":
      return "Team"
    case "area":
      return a.name
    case "group":
      return `${a.employeeIds.length} people`
    case "individual":
      return "Individual"
  }
}

function assigneeIcon(a: GoalAssignee) {
  switch (a.type) {
    case "individual":
      return Person
    case "group":
    case "team":
    case "department":
    case "area":
      return Group
    case "company":
      return Target
  }
}

/**
 * One card per goal. Width is fixed so cards align across columns.
 */
function GoalCard({
  goal,
  onSelect,
}: {
  goal: GoalRecord
  onSelect: (id: string) => void
}) {
  return (
    <div className="w-[280px]">
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
    </div>
  )
}

/**
 * Renders one branch of the tree: a parent card on the left and its
 * children stacked vertically on the right, separated by a connector
 * column drawn with SVG.
 *
 * The recursion is depth-first: each child is itself rendered by Branch
 * so arbitrary nesting works.
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
    <div className="flex items-stretch">
      {/* Parent card column */}
      <div className="flex flex-col justify-center">
        <GoalCard goal={node.goal} onSelect={onSelect} />
      </div>

      {hasChildren && (
        <>
          {/* Connector column */}
          <div className="relative w-16 shrink-0">
            <Connector count={node.children.length} />
            {/* Children count badge centered on the connector */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-f1-background-secondary px-2 py-0.5">
              <F0Text
                content={String(node.children.length)}
                variant="small"
              />
            </div>
          </div>

          {/* Children column (each child is itself a branch) */}
          <div className="flex flex-col gap-4">
            {node.children.map((child) => (
              <Branch
                key={child.goal.id}
                node={child}
                onSelect={onSelect}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/**
 * SVG that draws an orthogonal connector from the left edge (parent
 * side) to N points distributed vertically on the right edge (one per
 * child). Stretches to fill the parent height.
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
      <div className="py-12 text-center">
        <F0Text content="No goals match the current filters." variant="description" />
      </div>
    )
  }

  return (
    <div className="overflow-auto pb-6">
      <div className="flex flex-col gap-8">
        {trees.map((tree) => (
          <Branch key={tree.goal.id} node={tree} onSelect={onSelectGoal} />
        ))}
      </div>
    </div>
  )
}
