import type { EditableTableVisualizationSettings } from "../visualizations/collection/EditableTable/types"
import type { GraphVisualizationSettings } from "../visualizations/collection/Graph/types"
import type { TableVisualizationSettings } from "../visualizations/collection/Table/types"

export type VisualizationSettings = {
  table: TableVisualizationSettings
  editableTable: EditableTableVisualizationSettings
  list: Record<string, never>
  card: Record<string, never>
  kanban: Record<string, never>
  graph: GraphVisualizationSettings
}

export const createInitialVisualizationSettings =
  (): VisualizationSettings => ({
    table: {},
    editableTable: {},
    list: {},
    card: {},
    kanban: {},
    graph: {},
  })
