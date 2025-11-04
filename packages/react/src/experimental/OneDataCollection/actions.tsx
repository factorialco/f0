import { DropdownItemObject } from "@/experimental/Navigation/Dropdown/internal.tsx"

export type PrimaryActionItemDefinition = Pick<
  DropdownItemObject,
  "onClick" | "label" | "icon"
>

/**
 * Defines the structure and configuration of the primary action that can be performed on a collection.
 * @returns An action
 */
export type PrimaryActionsDefinitionFn = () =>
  | PrimaryActionItemDefinition
  | PrimaryActionItemDefinition[]
  | undefined

/**
 * Get the primaryActionsItems from the primaryActionsDefinition or the actions property
 */
export const getPrimaryActions = (
  primaryActions: PrimaryActionsDefinitionFn | undefined
): PrimaryActionItemDefinition[] => {
  if (!primaryActions) {
    return []
  }

  const items = primaryActions()

  return (Array.isArray(items) ? items : [items]).filter(
    (item): item is PrimaryActionItemDefinition => item !== undefined
  )
}

/**
 * Defines the structure and configuration of secondary actions that can be performed on a collection.
 * @returns An array of actions
 */
export type SecondaryActionItem = Pick<
  DropdownItemObject,
  "label" | "icon" | "description" | "critical" | "onClick"
> & {
  enabled?: boolean
  hideLabelWhenExpanded?: boolean
}

export type SecondaryActionGroup = {
  label?: string
  items: SecondaryActionItem[]
}

export type SecondaryActionsItems =
  | SecondaryActionItem[]
  | SecondaryActionItem[][]
  | SecondaryActionGroup[]

export const MAX_EXPANDED_ACTIONS = 2

const isSecondaryActionGroup = (
  item: SecondaryActionsItems[number]
): item is SecondaryActionGroup => {
  return "items" in item
}

const isSecondaryActionItem = (
  item: SecondaryActionsItems[number]
): item is SecondaryActionItem => {
  return "label" in item && !("items" in item)
}

const normalizeSecondaryActions = (
  items: SecondaryActionsItems
): SecondaryActionGroup[] => {
  if (items.every(isSecondaryActionGroup)) {
    return items
  }

  if (items.every(isSecondaryActionItem)) {
    return [
      {
        items: items,
      },
    ]
  }

  return items.map((item) => ({
    items: item,
  })) satisfies SecondaryActionGroup[]
}

type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? [...Acc, N][number]
  : Enumerate<N, [...Acc, Acc["length"]]>

export type SecondaryActionsDefinition =
  | {
      expanded: Enumerate<typeof MAX_EXPANDED_ACTIONS>
      actions: () => SecondaryActionsItems | undefined
    }
  | (() => SecondaryActionsItems | undefined)

/**
 * Get the secondaryActionsItems from the secondaryActionsDefinition or the actions property
 */
export const getSecondaryActions = (
  secondaryActions: SecondaryActionsDefinition | undefined
): SecondaryActionGroup[] => {
  if (!secondaryActions) {
    return []
  }

  if (typeof secondaryActions === "function") {
    return normalizeSecondaryActions(secondaryActions() || [])
  }
  return "actions" in secondaryActions
    ? normalizeSecondaryActions(secondaryActions.actions() || [])
    : []
}

/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @returns An array of filtered actions
 */
export const filterActions = (
  groups: SecondaryActionGroup[]
): SecondaryActionGroup[] =>
  groups.map((group) => {
    return {
      ...group,
      items: group.items.filter(
        (action) => action.enabled === undefined || action.enabled
      ),
    }
  })
