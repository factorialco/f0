import { RecordType } from "@/hooks/datasource"

type RowExpansionIdParams<R extends RecordType> = {
  groupIndex: number
  depth: number
  item: R
  index: number
}

/** Whether a record carries an id usable as part of an expansion key. */
export const hasStableId = <R extends RecordType>(item: R) =>
  "id" in item && item.id !== undefined && item.id !== null

/**
 * The key a row's expansion state is stored under in the nested provider.
 *
 * `groupIndex` belongs in the key because a grouped table restarts `index` at 0
 * in every group: without it the first row of every group shares one entry.
 */
export const getRowExpansionId = <R extends RecordType>({
  groupIndex,
  depth,
  item,
  index,
}: RowExpansionIdParams<R>) =>
  `${groupIndex}-${depth}-${hasStableId(item) ? String(item.id) : "idx"}-${index}`

/**
 * The key for a row's content panel. Namespaced so a row's panel and its
 * children can never read each other's entry.
 */
export const getContentExpansionId = (rowId: string) => `content:${rowId}`

export const getExpandToggleId = (rowId: string) => `${rowId}-expand`

export const getExpandPanelId = (rowId: string) => `${rowId}-panel`
