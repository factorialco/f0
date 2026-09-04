import type { IconType } from "@/components/F0Icon"

import type {
  CommandEntityAction,
  CommandEntityAvatar,
  CommandEntityRef,
  CommandParamValues,
  CommandRowAction,
} from "./types"

/**
 * One rendered row, whatever produced it. Global commands, entity records,
 * scoped actions and parameter options all collapse to this shape before they
 * reach the list, so the keyboard model and the row renderer have exactly one
 * thing to reason about.
 */
export type CommandRow = {
  id: string
  /** Group heading. Rows sharing one are contiguous by construction. */
  group: string
  label: string
  /** Second line, or the reason a blocked row is blocked. */
  hint?: string
  /** Omitted by the rows that render the assistant's mark instead. */
  icon?: IconType
  /** People rows carry a real avatar rather than an icon. */
  avatar?: CommandEntityAvatar
  /** Origin tag on a scoped action row ("Script", "Query"). */
  badge?: string
  /** Set on record rows: `/` or `→` scopes the palette to this reference. */
  scopeRef?: CommandEntityRef
  /** Listed but not runnable, with the reason shown and announced. */
  disabledReason?: string
  /** Destructive: never the default row, never runs on a bare `Enter`. */
  danger?: boolean
  /** Renders the assistant's mark and needs no group heading above it. */
  assistant?: boolean
  rowActions?: CommandRowAction[]
  run: () => void
}

/** Where the palette is in the `[scope] › [action] › [params]` stack. */
export type CommandStage =
  | { kind: "browse" }
  | {
      kind: "param"
      action: CommandEntityAction
      step: number
      values: CommandParamValues
    }
