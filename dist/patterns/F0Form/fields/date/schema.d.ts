import { ZodTypeAny } from 'zod';
/**
 * Constraints extracted from a date schema
 */
export interface DateSchemaConstraints {
    minDate?: Date;
    maxDate?: Date;
}
/**
 * Extract min/max date constraints from a date schema
 *
 * @example
 * ```ts
 * const schema = z.date().min(new Date("2020-01-01")).max(new Date("2030-12-31"))
 * const { minDate, maxDate } = extractDateConstraints(schema)
 * ```
 */
export declare function extractDateConstraints(schema: ZodTypeAny): DateSchemaConstraints;
