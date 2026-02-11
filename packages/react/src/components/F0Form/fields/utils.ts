import type { RenderIfCondition } from "./types"

/**
 * Evaluate a renderIf condition against the current form values
 */
export function evaluateRenderIf(
  condition: RenderIfCondition,
  values: Record<string, unknown>
): boolean {
  const fieldValue = values[condition.fieldId]

  // Equality checks (works for string, number, boolean)
  if ("equalsTo" in condition) {
    // Handle Date comparison
    if (condition.equalsTo instanceof Date && fieldValue instanceof Date) {
      return fieldValue.getTime() === condition.equalsTo.getTime()
    }
    return fieldValue === condition.equalsTo
  }

  if ("notEqualsTo" in condition) {
    // Handle Date comparison
    if (condition.notEqualsTo instanceof Date && fieldValue instanceof Date) {
      return fieldValue.getTime() !== condition.notEqualsTo.getTime()
    }
    return fieldValue !== condition.notEqualsTo
  }

  // Numeric and Date comparisons
  if ("greaterThan" in condition) {
    const threshold = condition.greaterThan
    if (typeof fieldValue === "number" && typeof threshold === "number") {
      return fieldValue > threshold
    }
    if (fieldValue instanceof Date && threshold instanceof Date) {
      return fieldValue.getTime() > threshold.getTime()
    }
    return false
  }

  if ("greaterThanOrEqual" in condition) {
    const threshold = condition.greaterThanOrEqual
    if (typeof fieldValue === "number" && typeof threshold === "number") {
      return fieldValue >= threshold
    }
    if (fieldValue instanceof Date && threshold instanceof Date) {
      return fieldValue.getTime() >= threshold.getTime()
    }
    return false
  }

  if ("lowerThan" in condition) {
    const threshold = condition.lowerThan
    if (typeof fieldValue === "number" && typeof threshold === "number") {
      return fieldValue < threshold
    }
    if (fieldValue instanceof Date && threshold instanceof Date) {
      return fieldValue.getTime() < threshold.getTime()
    }
    return false
  }

  if ("lowerThanOrEqual" in condition) {
    const threshold = condition.lowerThanOrEqual
    if (typeof fieldValue === "number" && typeof threshold === "number") {
      return fieldValue <= threshold
    }
    if (fieldValue instanceof Date && threshold instanceof Date) {
      return fieldValue.getTime() <= threshold.getTime()
    }
    return false
  }

  // Empty check (common for all field types)
  if ("isEmpty" in condition) {
    const isEmpty =
      fieldValue === undefined ||
      fieldValue === null ||
      fieldValue === "" ||
      (Array.isArray(fieldValue) && fieldValue.length === 0)
    return condition.isEmpty ? isEmpty : !isEmpty
  }

  // Text pattern matching
  if ("matches" in condition) {
    return typeof fieldValue === "string" && condition.matches.test(fieldValue)
  }

  // Array inclusion checks (for multi-select)
  if ("includes" in condition) {
    if (Array.isArray(fieldValue)) {
      return fieldValue.includes(condition.includes)
    }
    return fieldValue === condition.includes
  }

  if ("notIncludes" in condition) {
    if (Array.isArray(fieldValue)) {
      return !fieldValue.includes(condition.notIncludes)
    }
    return fieldValue !== condition.notIncludes
  }

  return true
}
