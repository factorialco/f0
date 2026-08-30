import { ZodTypeAny } from 'zod';
/**
 * Constraints extracted from a number schema
 */
export interface NumberSchemaConstraints {
    min?: number;
    max?: number;
    isInteger: boolean;
}
/**
 * Extract min/max constraints from a number schema
 *
 * @example
 * ```ts
 * const schema = z.number().min(0).max(100)
 * const { min, max } = extractNumberConstraints(schema)
 * // min = 0, max = 100
 * ```
 */
export declare function extractNumberConstraints(schema: ZodTypeAny): NumberSchemaConstraints;
