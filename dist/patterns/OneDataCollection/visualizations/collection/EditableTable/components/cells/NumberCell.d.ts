import { RecordType } from '../../../../../../../hooks/datasource/types/records.typings';
import { EditableCellProps } from '.';
export declare function NumberCell<R extends RecordType>({ editableColumn, value, inputPlaceholder, error, loading, onChange, item, hint, }: EditableCellProps<R>): import("react").JSX.Element;
