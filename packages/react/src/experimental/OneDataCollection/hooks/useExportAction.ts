import { useState, useCallback } from "react"

import {
  RecordType,
  FiltersDefinition,
  SortingsDefinition,
  GroupingDefinition,
} from "@/hooks/datasource"
import { Download } from "@/icons/app"

import type { Visualization } from "../visualizations/collection"

import { SecondaryActionItem } from "../actions"
import { DataCollectionSource } from "../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { SummariesDefinition } from "../summary"
import { downloadAsCSV } from "../utils/csvExport"

interface UseExportActionProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> {
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  currentVisualization:
    | Visualization<
        R,
        Filters,
        Sortings,
        Summaries,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    | undefined
  filename?: string
}

export function useExportAction<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  source,
  currentVisualization,
  filename,
}: UseExportActionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>): SecondaryActionItem {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = useCallback(async () => {
    setIsExporting(true)

    try {
      // Fetch all data without pagination limits
      const result = await source.dataAdapter.fetchData({
        filters: source.currentFilters,
        sortings: source.currentSortings,
        search: source.currentSearch,
        navigationFilters: source.currentNavigationFilters,
        // Don't pass pagination parameters to get all data
      } as any)

      let dataToExport: R[] = []

      if (result && typeof result === "object" && "records" in result) {
        dataToExport = (result as any).records
      } else if (Array.isArray(result)) {
        dataToExport = result
      }

      // For now, handle simple case - additional pagination logic can be added later
      // The data adapter should ideally return all data when no pagination is specified

      await downloadAsCSV(dataToExport, currentVisualization as any, {
        filename: filename || "data_collection_export",
      })
    } catch (error) {
      console.error("Export failed:", error)
      // You could add toast notifications here
    } finally {
      setIsExporting(false)
    }
  }, [source, currentVisualization, filename])

  return {
    label: "Export to CSV",
    icon: Download,
    onClick: handleExport,
    loading: isExporting,
    disabled: isExporting || (source as any).isLoading,
    description: "Download all data as CSV file",
  }
}
