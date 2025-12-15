import { FiltersDefinition, RecordType, SortingsDefinition } from "@/hooks/datasource"
import { experimentalComponent } from "@/lib/experimental"
import { ItemActionsDefinition } from "./item-actions"
import { NavigationFiltersDefinition } from "./navigationFilters/types"
import { OneDataCollectionComp, OneDataCollectionProps } from "./OneDatacollection"
import { DataCollectionSettingsProvider } from "./Settings/SettingsProvider"
import { SummariesDefinition } from "./summary"
import { GroupingDefinition } from "./types"

export * from "./navigationFilters/types"
export * from "./OneDatacollection"

const DataCollection = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: OneDataCollectionProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
) => (
  <DataCollectionSettingsProvider>
    <OneDataCollectionComp {...props} />
  </DataCollectionSettingsProvider>
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
const OneDataCollection = experimentalComponent("OneDataCollection", DataCollection)

export { OneDataCollection }
