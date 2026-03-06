import { useMemo, useRef } from "react"

import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"

import type { RowWrapperProps } from "../Table/types"

import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { useDataCollectionSettings } from "../../../Settings/SettingsProvider"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"
import { TableCollection } from "../Table/Table"
import { EditableCellRenderer } from "./components/EditableCellRenderer"
import { AddRowProvider } from "./context/AddRowContext"
import { EditableRowProvider } from "./context/EditableRowContext"
import { EditableTableVisualizationOptions } from "./types"

export const EditableTableCollection = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  onCellChange,
  onAddRow,
  addRowButtonLabel,
  nestedAddRowButtonLabel,
  ...props
}: CollectionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  EditableTableVisualizationOptions<R, Filters, Sortings, Summaries>
>) => {
  const { settings } = useDataCollectionSettings()

  const onCellChangeRef = useRef(onCellChange)
  onCellChangeRef.current = onCellChange

  const RowWrapper = useMemo(() => {
    return function EditableRowWrapper({ item, children }: RowWrapperProps<R>) {
      return (
        <EditableRowProvider
          item={item}
          onCellChange={(...args) => onCellChangeRef.current?.(...args)}
        >
          {children}
        </EditableRowProvider>
      )
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps -- onCellChange is considered constant

  return (
    <AddRowProvider
      onAddRow={onAddRow}
      addRowButtonLabel={addRowButtonLabel}
      nestedAddRowButtonLabel={nestedAddRowButtonLabel}
    >
      <TableCollection<
        R,
        Filters,
        Sortings,
        Summaries,
        ItemActions,
        NavigationFilters,
        Grouping
      >
        {...props}
        rowWrapper={RowWrapper}
        cellRenderer={EditableCellRenderer}
        showItemActions={false}
        visualizationSettings={settings.visualization?.editableTable}
      />
    </AddRowProvider>
  )
}
