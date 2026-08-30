import { ZodTypeAny } from 'zod';
import { F0TextConfig } from './types';
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
export declare function inferInputType(schema: ZodTypeAny): NonNullable<F0TextConfig["inputType"]>;
