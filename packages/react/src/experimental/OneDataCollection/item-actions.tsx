import {
  DropdownItemObject,
  DropdownItemSeparator,
} from "../Navigation/Dropdown/internal"

import { RecordType } from "@/hooks/datasource"

export type ActionDefinition =
  | DropdownItemSeparator
  | (Omit<DropdownItemObject, "type" | "onClick"> & {
      onClick: () => void
      enabled?: boolean
      type?: "primary" | "secondary" | "other"
    })

export type ItemActionsDefinition<T extends RecordType> = (
  item: T
) => ActionDefinition[] | undefined

/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @param item - The item to filter the actions for
 * @returns An array of filtered actions
 */
export const filterItemActions = <T extends RecordType>(
  actions: ItemActionsDefinition<T> | undefined,
  item: T
) =>
  ((actions && actions(item)) || []).filter(
    (action) =>
      action.type === "separator" ||
      action.enabled === undefined ||
      action.enabled
  )
