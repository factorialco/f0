import { F0FormSchema, F0SectionConfig, FormDefinitionItem } from './types';
/**
 * Hook to convert a Zod schema with F0 configurations into a FormDefinitionItem array.
 *
 * This parses the schema shape, extracts F0 configs, groups fields by section,
 * sorts by position, and groups row fields together.
 *
 * Automatic derivations from the Zod schema:
 * - **Position**: Derived from field declaration order (can be overridden with `position`)
 * - **Number min/max**: `z.number().min(n).max(m)` → min/max constraints
 * - **Date min/max**: `z.date().min(d).max(d)` → minDate/maxDate constraints
 * - **String maxLength**: `z.string().max(n)` → maxLength for textarea
 * - **Clearable**: `z.optional()` or `z.nullable()` → clearable for select/date fields
 *
 * @param schema - Zod object schema with F0 field configurations
 * @param sections - Optional section configurations keyed by section ID
 * @returns Array of form definition items compatible with existing renderers
 *
 * @example
 * ```tsx
 * const formSchema = z.object({
 *   // Fields are ordered by declaration - no need to specify position
 *   firstName: f0FormField(z.string().min(1), { label: "First Name" }),
 *   lastName: f0FormField(z.string().min(1), { label: "Last Name" }),
 *   // Constraints derived from Zod, clearable because optional
 *   birthDate: f0FormField(z.date().min(new Date("1900-01-01")).optional(), {
 *     label: "Birth Date"
 *   }),
 *   age: f0FormField(z.number().min(0).max(120), { label: "Age" })
 * })
 * ```
 */
export declare function useSchemaDefinition(schema: F0FormSchema, sections?: Record<string, F0SectionConfig>): FormDefinitionItem[];
/**
 * Non-hook version for extracting definition outside of React components.
 * Useful for server-side rendering or testing.
 *
 * @param schema - Zod object schema with F0 field configurations
 * @param sections - Optional section configurations keyed by section ID
 * @returns Array of form definition items
 */
export declare function getSchemaDefinition(schema: F0FormSchema, sections?: Record<string, F0SectionConfig>): FormDefinitionItem[];
