import { ZodTypeAny } from 'zod';
/**
 * Constraints extracted from a string schema (for textarea)
 */
export interface TextareaSchemaConstraints {
    maxLength?: number;
}
/**
 * Extract maxLength constraint from a string schema
 *
 * @example
 * ```ts
 * const schema = z.string().max(500)
 * const { maxLength } = extractTextareaConstraints(schema)
 * // maxLength = 500
 * ```
 */
export declare function extractTextareaConstraints(schema: ZodTypeAny): TextareaSchemaConstraints;
