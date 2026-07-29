import { NodeProps } from "@xyflow/react"

import { NodeUICondition } from "./types"

/**
 * Trimmed copy of the real Node/utils.ts: only the condition-validation helpers
 * used by FlowNodeSwitch are kept for the static Storybook preview. Graph
 * creation / id helpers are omitted because no node is created here.
 */

type WorkflowsExpression = {
  root: {
    operator: string
    expressions?: Array<{
      left?: { name?: string }
      operator?: string
      right?: { value?: string }
    }>
  }
}

// Helper to check if a specific field in an expression is invalid
export const getFieldErrors = (
  expression: WorkflowsExpression,
  comparisonIndex: number
) => {
  const expr = expression.root.expressions?.[comparisonIndex]
  if (!expr) return { variable: false, operator: false, value: false }

  const isValueEmpty =
    !expr.right?.value || expr.right.value === "" || expr.right.value === "[]"

  return {
    variable: !expr.left?.name,
    operator: !expr.operator,
    value: isValueEmpty,
  }
}

const isExpressionValid = (expression: WorkflowsExpression) => {
  if (!expression.root.expressions?.length) return false

  return expression.root.expressions.every((_, index) => {
    const errors = getFieldErrors(expression, index)
    return !errors.variable && !errors.operator && !errors.value
  })
}

export function isNodeUIConditionValid(node: NodeUICondition): boolean
export function isNodeUIConditionValid(
  props: NodeProps<NodeUICondition>
): boolean
export function isNodeUIConditionValid(
  nodeOrProps: NodeUICondition | NodeProps<NodeUICondition>
): boolean {
  return (
    nodeOrProps.data.comparisons.length > 0 &&
    nodeOrProps.data.comparisons.every((comparison) =>
      isExpressionValid(comparison.expression as WorkflowsExpression)
    )
  )
}
