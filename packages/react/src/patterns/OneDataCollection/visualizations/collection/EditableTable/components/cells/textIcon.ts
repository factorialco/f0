import type { IconType } from "@/components/F0Icon"

import { Envelope, Link } from "@/icons/app"

import type { TextCellConfig, TextCellInputType } from "../../types"

/** Default leading icon per text input type — mirrors F0Form's text fields. */
const DEFAULT_TEXT_ICONS: Partial<Record<TextCellInputType, IconType>> = {
  url: Link,
  email: Envelope,
}

/**
 * Resolves the leading icon for a text cell: an explicit `icon` wins, otherwise
 * the default derived from `inputType` (url → link, email → envelope). Shared by
 * the editable text cell and the read-only cell so both look consistent.
 */
export function resolveTextCellIcon(
  config: TextCellConfig | undefined
): IconType | undefined {
  if (!config) return undefined
  if (config.icon) return config.icon
  return config.inputType ? DEFAULT_TEXT_ICONS[config.inputType] : undefined
}
