import { RecordType } from '../../../../../../../hooks/datasource/types/records.typings';
import { EditableCellProps } from '.';
export declare function TextCell<R extends RecordType>({ editableColumn, value, inputPlaceholder, error, loading, onChange, hint, }: EditableCellProps<R>): import("react").JSX.Element;
