import { IconType } from '../../../components/F0Icon';
import { InfoHintContent } from '../../../lib/InfoHint';
import { ColumnWidth } from '../utils/sizes';
/**
 * Structured help copy for a column header. The same shape every other
 * ⓘ affordance takes — see {@link InfoHintContent}, where `label` defaults to
 * the column label when the header's children are a string.
 *
 * A table-specific name for a shape that is no longer table-specific: the
 * canonical export is `InfoHintContent`, and this stays as an alias so
 * existing imports keep working.
 */
export type TableHeaderInfo = InfoHintContent;
interface TableHeadProps {
    children: React.ReactNode;
    /**
     * The width of the header cell. If not provided, the width will be "auto"
     * @default "auto"
     */
    width?: ColumnWidth;
    /**
     * Optional minimum width for the header cell. When provided, overrides the
     * minWidth derived from `width`, allowing the column to grow past `width`
     * while never shrinking below this value.
     */
    minWidth?: ColumnWidth;
    /**
     * When true, the header cell will stick in the specified position when scrolling horizontally
     * @default undefined
     */
    sticky?: {
        left?: number;
        right?: never;
    } | {
        left?: never;
        right?: number;
    };
    /**
     * The current sort direction of this column. "none" indicates no sorting,
     * "asc" sorts ascending (A-Z, 1-9), and "desc" sorts descending (Z-A, 9-1)
     * @default "none"
     */
    sortState?: "none" | "asc" | "desc";
    /**
     * Callback fired when the header is clicked to sort.
     * Use this to handle toggling between sort states.
     */
    onSortClick?: () => void;
    /**
     * Callback fired when the header cell is clicked, for cells that are
     * actionable beyond sorting. Like {@link onSortClick}, the whole cell is the
     * target — see the note on the cell's click handler.
     */
    onClick?: () => void;
    /**
     * Optional header info. When provided, displays an info icon next to the
     * header content. Pass a string for a short text tooltip, or a
     * {@link TableHeaderInfo} object for a structured hoverable card.
     */
    info?: string | TableHeaderInfo;
    /**
     * Icon to display when info is provided.
     * @default InfoCircleLine
     */
    infoIcon?: IconType;
    /**
     * When true, the header cell will not be visible.
     * @default false
     */
    hidden?: boolean;
    /**
     * Emphasizes the cell with a subtle gray background, drawing attention to a
     * highlighted column.
     * @default false
     */
    highlighted?: boolean;
    /**
     * Alingment of the cell
     * @default "left"
     */
    align?: "left" | "right";
    /**
     * The class name of the header cell
     */
    className?: string;
    /**
     * The number of columns this header cell should span
     */
    colSpan?: number;
}
export declare function TableHead({ children, width, minWidth, sortState, onSortClick, onClick, info, infoIcon, sticky, hidden, highlighted, align, className, colSpan, }: TableHeadProps): import("react").JSX.Element;
export {};
