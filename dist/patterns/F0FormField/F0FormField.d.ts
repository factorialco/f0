import { F0FormFieldProps } from './types';
/**
 * Standalone form field component that renders the appropriate F0Form input
 * without requiring a react-hook-form context.
 *
 * Supports all field types that F0Form supports: text, number, textarea,
 * duration, select, checkbox, switch, date, time, datetime, daterange, richtext, custom,
 * and file.
 */
export declare function F0FormField({ field, value, onChange, onBlur, error, errorMessage, status, loading, required, disabled, hideLabel: hideLabelProp, initialFiles, }: F0FormFieldProps): import("react").JSX.Element;
export declare namespace F0FormField {
    var displayName: string;
}
