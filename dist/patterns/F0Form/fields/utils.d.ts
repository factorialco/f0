import { F0BaseFieldDisabledProp, F0BaseFieldRenderIfProp } from './types';
import { F0DateConstraintProp } from './date/types';
import { F0FieldAlert, F0FieldAlertProps } from '../f0Schema';
/**
 * Evaluate a renderIf property which can be a condition object or a function
 */
export declare function evaluateRenderIf(renderIf: F0BaseFieldRenderIfProp, values: Record<string, unknown>): boolean;
/**
 * Resolve a field's `alert` config against the current values.
 *
 * The alert can be static props (always shown) or a callback evaluated against
 * the field value and all form values. Returns the resolved alert props, or
 * `null` when no alert should be shown.
 */
export declare function resolveFieldAlert(alert: F0FieldAlert | undefined, fieldValue: unknown, values: Record<string, unknown>): F0FieldAlertProps | null;
/**
 * Evaluate a disabled property which can be a boolean or a function
 */
export declare function evaluateDisabled(disabled: F0BaseFieldDisabledProp | undefined, values: Record<string, unknown>): boolean;
/**
 * Evaluate a date constraint property which can be a static Date or a function.
 * Used for dynamic minDate/maxDate that depend on other field values.
 *
 * @example
 * ```ts
 * // Static constraint
 * evaluateDateConstraint(new Date("2024-01-01"), values) // returns Date
 *
 * // Dynamic constraint
 * evaluateDateConstraint(({ values }) => values.startDate, values) // returns Date or undefined
 * ```
 */
export declare function evaluateDateConstraint(constraint: F0DateConstraintProp | undefined, values: Record<string, unknown>): Date | undefined;
