import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import { RecordType } from "@/hooks/datasource"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import { TableSettings } from "./components/TableSettings"
import { TableVisualizationOptions } from "./types"

export const settingsRenderer = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
>(
  props: TableVisualizationOptions<R, Filters, Sortings, Summaries>
) => {
  if (!props.allowColumnHiding && !props.allowColumnReordering) {
    return null
  }

  console.log("props", props.columns)
  return (
    <TableSettings
      columns={props.columns}
      frozenColumns={props.frozenColumns || 0}
    />
  )
}
