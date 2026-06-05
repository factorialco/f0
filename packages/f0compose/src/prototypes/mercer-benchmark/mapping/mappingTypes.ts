import type { MappingStatus } from "../shared/types"

/**
 * Unified row type for the nested DataCollection.
 * Group rows (`isGroup: true`) are parent rows — they expand to show level children.
 * Level rows (`isGroup: false`) are individual role + level entries.
 */
export type MappingRow = {
  id: string
  title: string
  function: string
  family: string
  level: string
  status: MappingStatus
  suggestedMercerCode?: string
  confirmedMercerCode?: string
  confidence?: number
  isGroup: boolean
  childCount?: number
  confirmedChildCount?: number
}
