import { TableVisualizationType } from '../../../patterns/OneDataCollection/types';
import { ReferenceType } from '../../../patterns/OneDataCollection/visualizations/collection/Table';
import { NestedRowProps } from '../../../patterns/OneDataCollection/visualizations/collection/Table/components/Row';
interface TableCellProps {
    children: React.ReactNode;
    /**
     * The URL to navigate to when the cell is clicked
     */
    href?: string;
    /**
     * The onClick handler for the cell
     */
    onClick?: () => void;
    /**
     * Defines if the cell is the first cell in the row
     * @default false
     */
    firstCell?: boolean;
    /**
     * The width of the cell
     */
    width?: number | "auto";
    /**
     * Optional minimum width for the cell. When provided, overrides the
     * minWidth derived from `width`, allowing the cell to shrink no further
     * than this value.
     */
    minWidth?: number | "auto";
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
     * The number of columns the cell should span
     */
    colSpan?: number;
    /**
     * The class name of the cell
     */
    className?: string;
    /**
     * Defines if the cell is loading
     * @default false
     */
    loading?: boolean;
    /**
     * The props for the nested row
     */
    nestedRowProps?: NestedRowProps & {
        rowWithChildren?: boolean;
        tableWithChildren?: boolean;
        selectableRow?: boolean;
    };
    /**
     * The visualization the cell is being rendered in
     */
    fromVisualization?: TableVisualizationType;
    referenceRowType?: ReferenceType;
    /**
     * Emphasizes the cell with a subtle gray background, drawing attention to a
     * highlighted column.
     * @default false
     */
    highlighted?: boolean;
}
export declare function TableCell({ children, href, onClick, width, minWidth, firstCell, sticky, colSpan, className, loading, nestedRowProps, fromVisualization, referenceRowType, highlighted, }: TableCellProps): import("react").JSX.Element;
export {};
