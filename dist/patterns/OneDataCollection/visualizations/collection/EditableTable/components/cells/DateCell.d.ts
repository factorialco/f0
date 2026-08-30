import { RecordType } from '../../../../../../../hooks/datasource/types/records.typings';
import { EditableCellProps } from '.';
export declare function DateCell<R extends RecordType>({ editableColumn, value, inputPlaceholder, error, loading, isLastColumn, onChange, hint, item, }: EditableCellProps<R>): import("react").JSX.Element;
