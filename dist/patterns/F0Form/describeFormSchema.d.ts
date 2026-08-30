import { F0FormSchema } from './types';
import { F0FieldType } from './f0Schema';
/**
 * Serializable description of a single form field,
 * intended for AI tools to understand form structure.
 */
export interface FormFieldDescription {
    name: string;
    type: F0FieldType;
    label: string;
    required: boolean;
    placeholder?: string;
    helpText?: string;
    options?: {
        label: string;
        value: string | number;
    }[];
    optionsSource?: "dynamic";
    section?: string;
    customFieldName?: string;
}
/**
 * Introspect an F0Form schema and return a serializable array of field descriptions.
 * Pure function — usable outside React components.
 *
 * @example
 * ```ts
 * const fields = describeFormSchema(mySchema)
 * // [{ name: "email", type: "text", label: "Email", required: true, ... }, ...]
 * ```
 */
export declare function describeFormSchema(schema: F0FormSchema): FormFieldDescription[];
