import type { IconType } from "@/components/F0Icon"

import { getFieldInputIcon } from "@/lib/field-input-icons"

import type { TextCellConfig } from "../../types"

/**
 * Resolves the leading icon for a text cell: an explicit `icon` wins, otherwise
 * the shared default derived from `inputType` (url → link, email → envelope) —
 * see {@link getFieldInputIcon}, the same source F0Form's text fields use.
 */
export function resolveTextCellIcon(
  config: TextCellConfig | undefined
): IconType | undefined {
  if (!config) return undefined
  if (config.icon) return config.icon
  return getFieldInputIcon(config.inputType)
}
