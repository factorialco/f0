import { RecordType } from '../../../../../../../hooks/datasource/types/records.typings';
import { EditableCellProps } from '.';
export declare function SelectCell<R extends RecordType>({ editableColumn, value, error, loading, onChange, item, hint, }: EditableCellProps<R>): import("react").JSX.Element;
