import { F0Box } from "@/lib/F0Box"

import type { DataDownloadDataset } from "../canvas/types"

export type F0AiTableCardProps = {
  /**
   * Tabular data to render. Reuses the same shape used by the
   * `dataDownload` canvas entity so the agent payload travels untouched.
   */
  dataset: DataDownloadDataset
}

/**
 * Compact inline table for small datasets shown directly in an AI chat
 * stream. Headers come from `columnLabels` when present, otherwise from
 * the raw column id. Pure presentational — no hooks, no AI coupling.
 */
export function F0AiTableCard({ dataset }: F0AiTableCardProps) {
  if (!dataset.columns?.length) return null

  return (
    <F0Box
      marginY="sm"
      overflow="auto"
      borderRadius="lg"
      border="default"
      borderColor="secondary"
    >
      <table className="w-full border-collapse text-sm">
        <thead className="bg-f1-background-secondary">
          <tr>
            {dataset.columns.map((col) => (
              <th
                key={col}
                className="px-3 py-2 text-left font-semibold text-f1-foreground"
              >
                {dataset.columnLabels?.[col] ?? col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataset.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-0 border-t border-solid border-f1-border-secondary"
            >
              {dataset.columns.map((col) => {
                const value = row[col]
                return (
                  <td key={col} className="px-3 py-2 text-f1-foreground">
                    {value == null ? "" : String(value)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </F0Box>
  )
}

F0AiTableCard.displayName = "F0AiTableCard"
