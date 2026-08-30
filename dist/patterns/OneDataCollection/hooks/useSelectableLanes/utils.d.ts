import { FiltersDefinition, RecordType } from '../../../../hooks/datasource';
import { SelectedItemsDetailedStatus } from '../../../../hooks/datasource/types/selection.typings';
/**
 * Merges the select items status for all lanes into a single object
 * @param selectItemsStatus - The select items status for all lanes
 * @returns The merged select items status
 */
export declare const mergeLanesSelectItemsStatus: <R extends RecordType, Filters extends FiltersDefinition>(selectItemsStatus: Map<string, SelectedItemsDetailedStatus<R, Filters>>) => SelectedItemsDetailedStatus<R, Filters>;
