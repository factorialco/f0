import type { F0SelectItemProps } from "@/components/F0Select/types"

import type { BaseFieldDefinition } from "../types"

/**
 * Select field definition (renders F0Select component)
 */
export interface SelectFieldDefinition extends BaseFieldDefinition {
  type: "select"
  /** Options for the select dropdown */
  options: F0SelectItemProps<string, unknown>[]
  /** Whether multiple selection is allowed */
  multiple?: boolean
  /** Whether the select can be cleared */
  clearable?: boolean
  /** Whether to show the search box */
  showSearchBox?: boolean
  /** Placeholder for the search box */
  searchBoxPlaceholder?: string
}
