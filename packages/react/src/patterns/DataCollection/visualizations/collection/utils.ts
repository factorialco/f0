import { ActionDefinition } from "../../item-actions"

export const statusToChecked = <
  T extends {
    checked: boolean
    indeterminate: boolean
    selectedCount?: number
  },
>(
  status: T | undefined
): boolean | "indeterminate" => {
  if (!status) {
    return false
  }

  // If indeterminate, always return "indeterminate" (some items selected)
  if (status.indeterminate) {
    return "indeterminate"
  }

  // If there are selected items but not all checked, it's indeterminate
  if (
    status.selectedCount !== undefined &&
    status.selectedCount > 0 &&
    !status.checked
  ) {
    return "indeterminate"
  }

  // Otherwise return checked status
  return status.checked
}

/**
 * Converts the item actions definition to dropdown items
 * @param actions - The item actions definition to convert
 * @param item - The item to convert the actions for
 * @returns An array of dropdown items
 */
export const actionsToDropdownItems = (
  actions: ActionDefinition[] | undefined
) => {
  return (actions || []).map((action) => {
    return action.type === "separator"
      ? action
      : {
          ...action,
          type: "item" as const,
        }
  })
}
