import { RecordType } from '../types/records.typings';
import { UseDataSourceItemNavigationProps, UseDataSourceItemNavigationReturn, DataSourceItemId } from './types';
export declare const defaultIdProvider: (item: RecordType, index?: number) => DataSourceItemId;
export declare function useDataSourceItemNavigation<R extends RecordType>(props: UseDataSourceItemNavigationProps<R>): UseDataSourceItemNavigationReturn<R>;
