import { RecordType, SortingsDefinition } from '../../../../../../hooks/datasource';
import { SummariesDefinition } from '../../../../summary';
import { CellRendererProps } from '../../Table/types';
/**
 * Custom cell renderer for the editable table visualization.
 *
 * Maps column `editType` to the corresponding editable component.
 * For non-editable columns, renders using the standard renderProperty with "editableTable" mode.
 */
export declare function EditableCellRenderer<R extends RecordType, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition>({ column, children, isLastColumn, externalError, }: CellRendererProps<R, Sortings, Summaries> & {
    isLastColumn?: boolean;
    /**
     * Error coming from outside the row's editing state (e.g. schema
     * validation). Shown when the row has no more recent cell-change error.
     */
    externalError?: string;
}): import("react").JSX.Element;
