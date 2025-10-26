import { DropdownItemObject } from "@/experimental/Navigation/Dropdown/internal.tsx"

export type PrimaryActionsDefinition = Pick<
  DropdownItemObject,
  "onClick" | "label" | "icon"
>

/**
 * Defines the structure and configuration of the primary action that can be performed on a collection.
 * @returns An action
 */
export type PrimaryActionsDefinitionFn = () =>
  | PrimaryActionsDefinition
  | PrimaryActionsDefinition[]
  | undefined

/**
 * Get the primaryActionsItems from the primaryActionsDefinition or the actions property
 */
export const getPrimaryActions = (
  primaryActions: PrimaryActionsDefinitionFn | undefined
): PrimaryActionsDefinition[] => {
  if (!primaryActions) {
    return []
  }

  const items = primaryActions()

  return (Array.isArray(items) ? items : [items]).filter(
    (item): item is PrimaryActionsDefinition => item !== undefined
  )
}

/**
 * Defines the structure and configuration of secondary actions that can be performed on a collection.
 * @returns An array of actions
 */
export type SecondaryActionsItemDefinition = Pick<
  DropdownItemObject,
  "label" | "icon" | "description" | "critical"
> & {
  enabled?: boolean
  hideLabelWhenExpanded?: boolean
}

export const MAX_EXPANDED_ACTIONS = 2

type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? [...Acc, N][number]
  : Enumerate<N, [...Acc, Acc["length"]]>

export type SecondaryActionsDefinition =
  | {
      expanded: Enumerate<typeof MAX_EXPANDED_ACTIONS>
      actions: () => Array<SecondaryActionsItemDefinition> | undefined
    }
  | (() => Array<SecondaryActionsItemDefinition> | undefined)

/**
 * Get the secondaryActionsItems from the secondaryActionsDefinition or the actions property
 */
export const getSecondaryActions = (
  secondaryActions: SecondaryActionsDefinition | undefined
): SecondaryActionsItemDefinition[] => {
  if (!secondaryActions) {
    return []
  }

  if (typeof secondaryActions === "function") {
    return secondaryActions() || []
  }
  return "actions" in secondaryActions ? secondaryActions.actions() || [] : []
}

/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @returns An array of filtered actions
 */
export const filterActions = (
  actions: SecondaryActionsDefinition
): SecondaryActionsItemDefinition[] =>
  getSecondaryActions(actions).filter(
    (action) => action.enabled === undefined || action.enabled
  )
