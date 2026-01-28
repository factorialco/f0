import { z, ZodTypeAny } from "zod"

/**
 * Build a checkbox field schema
 */
export function buildCheckboxFieldSchema(): ZodTypeAny {
  return z.boolean()
}
