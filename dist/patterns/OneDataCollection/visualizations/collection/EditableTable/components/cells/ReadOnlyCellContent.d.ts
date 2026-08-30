import { F0IconProps } from '../../../../../../../components/F0Icon';
import { RecordType } from '../../../../../../../hooks/datasource/types/records.typings';
import { EditableCellProps } from '.';
type ReadOnlyCellContentProps<R extends RecordType> = Pick<EditableCellProps<R>, "editableColumn" | "item"> & {
    /** Color for the leading icon (disabled cells pass a muted color). */
    iconColor?: F0IconProps["color"];
    /** Extra classes for the content container (background, muted text, ...). */
    className?: string;
    /**
     * Show the field affordances (leading url/email/date icon, the select
     * chevron and number/money/percentage units). Disabled cells keep them so
     * the column still reads as its field type; display-only cells opt out and
     * render just the value as plain text.
     */
    showFieldAffordances?: boolean;
};
/**
 * Body shared by read-only cells (display-only and disabled): the value plus
 * the same field affordances the editable cells show — a url/email leading
 * icon and a select dropdown chevron — so a column reads as that kind of field
 * whether or not it's currently editable. The chevron reuses F0Select's `Arrow`
 * so it matches the editable select cell exactly (never scaled down).
 */
export declare function ReadOnlyCellContent<R extends RecordType>({ editableColumn, item, iconColor, className, showFieldAffordances, }: ReadOnlyCellContentProps<R>): import("react").JSX.Element;
export {};
