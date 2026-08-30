import { Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodRawShape, ZodObject, ZodEffects } from 'zod';
import { F0FormSchema } from './types';
/**
 * Creates a conditional Zod resolver that only validates visible fields.
 *
 * Fields with `renderIf` conditions that evaluate to `false` are automatically
 * skipped during validation, preventing validation errors for hidden fields.
 *
 * Supports both plain ZodObject schemas and refined schemas (ZodEffects).
 *
 * @param schema - The original Zod object schema (plain or refined)
 * @param schemaOptions - Options passed to zodResolver (e.g., errorMap)
 * @returns A resolver function compatible with react-hook-form
 */
export declare function createConditionalResolver<TSchema extends F0FormSchema>(schema: TSchema, schemaOptions?: Parameters<typeof zodResolver>[1]): Resolver<z.infer<TSchema>>;
/**
 * Builds a dynamic schema where hidden fields (based on renderIf) skip validation.
 *
 * For each field in the schema:
 * - If it has no renderIf, keep the original schema
 * - If renderIf evaluates to true (field is visible), keep the original schema
 * - If renderIf evaluates to false (field is hidden), use z.any() to skip all validation
 *
 * If the original schema has refinements (ZodEffects), they are preserved.
 *
 * Exported for use in headless testing utilities (`createF0FormTester`).
 */
export declare function buildDynamicSchema<TSchema extends F0FormSchema>(schema: TSchema, values: Record<string, unknown>): ZodObject<ZodRawShape> | ZodEffects<ZodObject<ZodRawShape>>;
