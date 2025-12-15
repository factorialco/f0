import { FiltersDefinition, RecordType } from "@/hooks/datasource"
import { SelectedItemsDetailedStatus } from "@/hooks/datasource/types/selection.typings"

/**
 * Merges the select items status for all lanes into a single object
 * @param selectItemsStatus - The select items status for all lanes
 * @returns The merged select items status
 */

export const mergeLanesSelectItemsStatus = <
  R extends RecordType,
  Filters extends FiltersDefinition,
>(
  selectItemsStatus: Map<string, SelectedItemsDetailedStatus<R, Filters>>
): SelectedItemsDetailedStatus<R, Filters> => {
  const lanesStatus = Array.from(selectItemsStatus.values())
  return {
    allSelected: lanesStatus.every((status) => status.allSelected),
    itemsStatus: lanesStatus.flatMap((status) => status.itemsStatus),
    groupsStatus: lanesStatus.reduce(
      (acc, status) => ({
        ...acc,
        ...status.groupsStatus,
      }),
      {}
    ),
    filters: lanesStatus.reduce(
      (acc, status) => ({
        ...acc,
        ...status.filters,
      }),
      {}
    ),
    selectedCount: lanesStatus.reduce((acc, status) => acc + status.selectedCount, 0),
    selectedIds: lanesStatus.flatMap((status) => status.selectedIds),
  }
}
