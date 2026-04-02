import { ZodIssueCode, ZodErrorMap } from "zod"

import { TranslationsType } from "@/lib/providers/i18n/i18n-provider"

/**
 * Creates a custom Zod error map that uses i18n translations for error messages.
 * This provides user-friendly, localized validation messages.
 */
export function createZodErrorMap(i18n: TranslationsType): ZodErrorMap {
  const { validation } = i18n.forms

  return (issue, ctx) => {
    // Handle specific issue codes
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === "undefined" || issue.received === "null") {
          return { message: validation.required }
        }
        return { message: validation.invalidType }

      case ZodIssueCode.invalid_string:
        if (issue.validation === "email") {
          return { message: validation.string.email }
        }
        if (issue.validation === "url") {
          return { message: validation.string.url }
        }
        break

      case ZodIssueCode.too_small:
        if (issue.type === "string") {
          if (issue.minimum === 1) {
            return { message: validation.required }
          }
          return {
            message: validation.string.min.replace(
              "{{min}}",
              String(issue.minimum)
            ),
          }
        }
        if (issue.type === "number") {
          if (issue.minimum === 0 && !issue.inclusive) {
            return { message: validation.number.positive }
          }
          return {
            message: validation.number.min.replace(
              "{{min}}",
              String(issue.minimum)
            ),
          }
        }
        if (issue.type === "array") {
          return {
            message: validation.array.min.replace(
              "{{min}}",
              String(issue.minimum)
            ),
          }
        }
        if (issue.type === "date") {
          return {
            message: validation.date.min.replace(
              "{{min}}",
              String(issue.minimum)
            ),
          }
        }
        break

      case ZodIssueCode.too_big:
        if (issue.type === "string") {
          return {
            message: validation.string.max.replace(
              "{{max}}",
              String(issue.maximum)
            ),
          }
        }
        if (issue.type === "number") {
          if (issue.maximum === 0 && !issue.inclusive) {
            return { message: validation.number.negative }
          }
          return {
            message: validation.number.max.replace(
              "{{max}}",
              String(issue.maximum)
            ),
          }
        }
        if (issue.type === "array") {
          return {
            message: validation.array.max.replace(
              "{{max}}",
              String(issue.maximum)
            ),
          }
        }
        if (issue.type === "date") {
          return {
            message: validation.date.max.replace(
              "{{max}}",
              String(issue.maximum)
            ),
          }
        }
        break

      case ZodIssueCode.invalid_date:
        return { message: validation.date.invalid }

      case ZodIssueCode.not_multiple_of:
        if (issue.multipleOf === 1) {
          return { message: validation.number.integer }
        }
        break

      case ZodIssueCode.invalid_literal:
        // Handle z.literal(true) for checkboxes/switches that must be checked
        if (issue.expected === true) {
          return { message: validation.checkbox.mustBeChecked }
        }
        break
    }

    // Fall back to default message
    return { message: ctx.defaultError }
  }
}
