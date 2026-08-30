import { ZodTypeAny } from 'zod';
/**
 * The editable-table cell an item-schema field renders as. Fields whose F0
 * field type has no inline cell resolve to `null` (see
 * {@link resolveEntitiesListCell}).
 */
export type SelectOption = {
    value: string;
    label: string;
};
export type EntitiesListCellResolution = {
    kind: "text";
    inputType: "text" | "email" | "url";
} | {
    kind: "number";
    units?: string;
} | {
    kind: "money";
    units?: string;
} | {
    kind: "date";
} | {
    kind: "select";
    options: SelectOption[];
} | {
    kind: "multiselect";
    options: SelectOption[];
};
/**
 * Maps an item-schema field to the editable-table cell it renders as, or
 * `null` when the field type has no inline cell. It reads the F0 field config
 * when present (so `f0FormField.money(...)`, `.percentage(...)`, `.select(...)`
 * etc. are recognized) and otherwise infers from the raw Zod type, so both
 * `z.number()` and `f0FormField.number()` work.
 *
 * Supported as columns: text (with the url/email leading icon), number,
 * percentage (number with a "%" unit), money, date, select and multi-select.
 * Everything else (boolean, checkbox/switch, time, duration, date range/period,
 * rich text, file, card select, …) has no inline cell yet and returns `null` —
 * the value is kept on the row but no column is shown.
 */
export declare function resolveEntitiesListCell(schema: ZodTypeAny): EntitiesListCellResolution | null;
