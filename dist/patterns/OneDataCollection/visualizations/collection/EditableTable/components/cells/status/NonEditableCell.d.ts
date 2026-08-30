import { RecordType } from '../../../../../../../../hooks/datasource/types/records.typings';
import { EditableCellProps } from '..';
export declare function NonEditableCell<R extends RecordType>({ editableColumn, item, isLastColumn, hint, }: EditableCellProps<R>): import("react").JSX.Element;
