import { ZodTypeAny } from 'zod';
import { F0FieldType } from '../f0Schema';
/**
 * Check if schema is optional or nullable (for clearable fields)
 *
 * @example
 * ```ts
 * isOptionalOrNullable(z.string().optional()) // true
 * isOptionalOrNullable(z.string().nullable()) // true
 * isOptionalOrNullable(z.string()) // false
 * ```
 */
export declare function isOptionalOrNullable(schema: ZodTypeAny): boolean;
/**
 * Determine if a field should be marked as required (show asterisk).
 *
 * - Optional/nullable fields are never required
 * - String fields used with selection-based inputs (select, date, etc.) are
 *   required when the schema is not optional — the unselected state is
 *   `undefined`, which fails `z.string()` validation.
 * - Other string fields are required only if they have constraints that need
 *   non-empty content (min >= 1, email, url, uuid, etc.)
 * - Rich text object schemas are not required if their "value" property is nullable
 * - Other field types are required if not optional/nullable
 *
 * @example
 * ```ts
 * isFieldRequired(z.string()) // false - empty string is valid
 * isFieldRequired(z.string(), "select") // true - must pick an option
 * isFieldRequired(z.string().min(1)) // true - needs at least 1 char
 * isFieldRequired(z.string().url()) // true - needs valid URL
 * isFieldRequired(z.string().email()) // true - needs valid email
 * isFieldRequired(z.string().optional()) // false - optional
 * isFieldRequired(z.string().optional(), "select") // false - optional
 * isFieldRequired(z.number()) // true - required
 * isFieldRequired(z.number().optional()) // false - optional
 * isFieldRequired(z.object({ value: z.string().nullable() })) // false - rich text with nullable value
 * isFieldRequired(z.object({ value: z.string().min(1) })) // true - rich text with required value
 * ```
 */
export declare function isFieldRequired(schema: ZodTypeAny, fieldType?: F0FieldType): boolean;
