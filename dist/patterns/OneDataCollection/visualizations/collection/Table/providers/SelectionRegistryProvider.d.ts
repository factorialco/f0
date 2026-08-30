import { RecordType } from '../../../../../../hooks/datasource';
import { SelectionId } from '../../../../../../hooks/datasource/types/selection.typings';
export interface SelectionRegistryValue<R extends RecordType = RecordType> {
    register: (id: SelectionId, item: R) => void;
    unregister: (id: SelectionId) => void;
    ids: SelectionId[];
    getEntries: () => Array<[SelectionId, R]>;
}
/**
 * Tracks selectable rows currently rendered (including lazily-loaded nested
 * children) so "select all" reaches rows absent from `data.records`.
 */
export declare const useCreateSelectionRegistry: <R extends RecordType>() => SelectionRegistryValue<R>;
