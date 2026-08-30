import { GroupRecord } from '../useData';
import { RecordType, SelectedItemsState, SelectionId } from '../types';
/**
 * Convert the selected state to a selection state map
 */
export declare const parseSelectedState: <R extends RecordType>(selectedState: SelectedItemsState<R> | undefined) => SelectedItemsState<R>;
/**
 * Type guard to check if a value is a GroupRecord
 */
export declare const isGroupRecord: <R extends RecordType>(value: GroupRecord<R> | SelectionId | readonly SelectionId[]) => value is GroupRecord<R>;
/**
 * Type guard to check if a value is a RecordType (item)
 */
export declare const isRecordItem: <R extends RecordType>(value: R | SelectionId | readonly SelectionId[], hasSelectable: boolean) => value is R;
