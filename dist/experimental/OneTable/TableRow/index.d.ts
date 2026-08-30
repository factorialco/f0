export declare const TABLE_ROW_STICKY_TOP_OFFSET = 40;
interface TableRowProps {
    children: React.ReactNode;
    selected?: boolean;
    className?: string;
    sticky?: boolean;
    /**
     * Extra inline styles merged onto the row. Used, for example, to apply a
     * drag transform when the row is sortable. Merged after the sticky-top
     * offset so callers can override it when needed.
     */
    style?: React.CSSProperties;
}
declare const TableRow: import('react').ForwardRefExoticComponent<TableRowProps & import('react').RefAttributes<HTMLTableRowElement>>;
export { TableRow };
