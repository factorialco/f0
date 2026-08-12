import type { NewColor } from "@/components/tags/F0TagDot/types"

import type { F0FilterTagPickerOptionValue } from "./types"

export interface ResolvedFilterTagOption {
  id: string
  categoryKey: string
  categoryLabel: string
  filterKey: string
  label: string
  displayLabel: string
  value: F0FilterTagPickerOptionValue
}

export interface FilterTagOptionsState {
  options: ResolvedFilterTagOption[]
  isLoading: boolean
  error: Error | null
  hasMore: boolean
  loadMore?: () => void
}

export interface FilterTagMetadata {
  categoryKey: string
  categoryLabel: string
  color: NewColor
  label: string
}

export interface FilterTagNodeAttributes extends FilterTagMetadata {
  filterKey: string
  value: F0FilterTagPickerOptionValue
}

export interface ActiveTextRange {
  from: number
  query: string
  to: number
}
