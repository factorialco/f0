import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import { RecordType } from "@/hooks/datasource"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import { useDataCollectionVisualizationsState } from "../../VisualizationsStateProvider"
import { TableSettings } from "../components/TableSettings"
import { TableVisualizationOptions } from "../types"

export const SettingsRenderer = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
>(
  props: Readonly<TableVisualizationOptions<R, Filters, Sortings, Summaries>>
) => {
  const { visualizationsState } = useDataCollectionVisualizationsState()

  if (!props.allowColumnHiding && !props.allowColumnReordering) {
    return null
  }

  const columns = visualizationsState.visualization.table.columns

  return (
    <TableSettings
      columns={columns}
      frozenColumns={props.frozenColumns || 0}
      allowSorting={props.allowColumnReordering ?? false}
      allowHiding={props.allowColumnHiding ?? false}
    />
  )
}
