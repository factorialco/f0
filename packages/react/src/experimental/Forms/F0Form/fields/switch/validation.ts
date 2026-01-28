import { z, ZodTypeAny } from "zod"

/**
 * Build a switch field schema
 */
export function buildSwitchFieldSchema(): ZodTypeAny {
  return z.boolean()
}
