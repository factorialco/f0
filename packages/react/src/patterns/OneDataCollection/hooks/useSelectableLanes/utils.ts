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
  const groupsStatus: SelectedItemsDetailedStatus<R, Filters>["groupsStatus"] =
    {}
  const filters = {} as SelectedItemsDetailedStatus<R, Filters>["filters"]
  for (const status of lanesStatus) {
    Object.assign(groupsStatus, status.groupsStatus)
    Object.assign(filters, status.filters)
  }
  return {
    allSelected: lanesStatus.every((status) => status.allSelected),
    itemsStatus: lanesStatus.flatMap((status) => status.itemsStatus),
    groupsStatus,
    filters,
    selectedCount: lanesStatus.reduce(
      (acc, status) => acc + status.selectedCount,
      0
    ),
    selectedIds: lanesStatus.flatMap((status) => status.selectedIds),
  }
}
