import type { RecordType } from "@/hooks/datasource"

import { extractDisplayValue } from "@/patterns/OneDataCollection/utils/csvExport"

export type DownloadableColumn = {
  id: string
  label: string
  render?: (item: RecordType) => unknown
}

export function getDownloadableColumns(
  visualizations: ReadonlyArray<unknown> | undefined
): DownloadableColumn[] {
  const tableVisualization = visualizations?.find(
    (visualization) =>
      (visualization as { type?: string } | undefined)?.type === "table"
  ) as
    | {
        options?: {
          columns?: Array<{
            id?: string
            label?: string
            render?: (item: RecordType) => unknown
          }>
        }
      }
    | undefined

  return (tableVisualization?.options?.columns ?? [])
    .filter(
      (
        column
      ): column is {
        id: string
        label: string
        render?: (item: RecordType) => unknown
      } => typeof column?.id === "string" && typeof column?.label === "string"
    )
    .map((column) => ({
      id: column.id,
      label: column.label,
      render: column.render,
    }))
}

export function transformCollectionRows(
  records: RecordType[],
  columns: DownloadableColumn[]
): Record<string, unknown>[] {
  return records.map((record) => {
    const row: Record<string, unknown> = {}
    for (const column of columns) {
      row[column.id] = column.render
        ? extractDisplayValue(column.render(record))
        : record[column.id]
    }
    return row
  })
}
