import { ZodTypeAny } from "zod"

import { isZodType, unwrapZodSchema } from "../../f0Schema"
import type { F0TextConfig } from "./types"

/**
 * Check if a string schema has an email validation check
 */
function hasEmailCheck(schema: ZodTypeAny): boolean {
  const inner = unwrapZodSchema(schema)
  if (!isZodType(inner, "ZodString")) {
    return false
  }
  const checks = inner._def.checks || []
  return checks.some((check: { kind: string }) => check.kind === "email")
}

/**
 * Check if a string schema has a URL validation check
 */
function hasUrlCheck(schema: ZodTypeAny): boolean {
  const inner = unwrapZodSchema(schema)
  if (!isZodType(inner, "ZodString")) {
    return false
  }
  const checks = inner._def.checks || []
  return checks.some((check: { kind: string }) => check.kind === "url")
}

/**
 * Infer the input type from a Zod string schema's validation checks.
 *
 * - `z.string().email()` → "email"
 * - `z.string().url()` → "url"
 * - Otherwise → "text"
 *
 * @example
 * ```ts
 * inferInputType(z.string().email()) // "email"
 * inferInputType(z.string().url()) // "url"
 * inferInputType(z.string()) // "text"
 * ```
 */
export function inferInputType(
  schema: ZodTypeAny
): NonNullable<F0TextConfig["inputType"]> {
  if (hasEmailCheck(schema)) {
    return "email"
  }
  if (hasUrlCheck(schema)) {
    return "url"
  }
  return "text"
}
