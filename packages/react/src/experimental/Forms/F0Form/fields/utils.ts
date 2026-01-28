import type { RenderIfCondition } from "./types"

/**
 * Evaluate a renderIf condition against the current form values
 */
export function evaluateRenderIf(
  condition: RenderIfCondition,
  values: Record<string, unknown>
): boolean {
  const fieldValue = values[condition.fieldId]

  if ("equalsTo" in condition) {
    return fieldValue === condition.equalsTo
  }

  if ("notEqualsTo" in condition) {
    return fieldValue !== condition.notEqualsTo
  }

  if ("greaterThan" in condition) {
    return typeof fieldValue === "number" && fieldValue > condition.greaterThan
  }

  if ("greaterThanOrEqual" in condition) {
    return (
      typeof fieldValue === "number" &&
      fieldValue >= condition.greaterThanOrEqual
    )
  }

  if ("lowerThan" in condition) {
    return typeof fieldValue === "number" && fieldValue < condition.lowerThan
  }

  if ("lowerThanOrEqual" in condition) {
    return (
      typeof fieldValue === "number" && fieldValue <= condition.lowerThanOrEqual
    )
  }

  if ("isEmpty" in condition) {
    const isEmpty =
      fieldValue === undefined ||
      fieldValue === null ||
      fieldValue === "" ||
      (Array.isArray(fieldValue) && fieldValue.length === 0)
    return condition.isEmpty ? isEmpty : !isEmpty
  }

  if ("matches" in condition) {
    return typeof fieldValue === "string" && condition.matches.test(fieldValue)
  }

  return true
}
