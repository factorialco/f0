import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { cn } from "@/lib/utils"
import { cva } from "cva"
import { forwardRef, useMemo } from "react"
import {
  LayoutBlockActionGroup,
  LayoutBlockActionItem,
  PageLayoutBlockComponent,
  PageLayoutBlockProps,
} from "./types"

const variants = cva({
  base: "flex h-full w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0",
    },
  },
})

/**
 * Converts the item actions definition to dropdown items
 * @param actions - The item actions definition to convert
 * @param item - The item to convert the actions for
 * @returns An array of dropdown items
 */
export const actionsToLayoutBlockActionItems = (
  actions: LayoutBlockActionGroup[] | undefined
): DropdownItem[] => {
  return (actions || [])
    .map((group) => group.items)
    .reduce<DropdownItem[]>((acc, curr) => {
      if (acc.length > 0) {
        acc.push({ type: "separator" })
      }
      acc.push(...curr)
      return acc
    }, [])
}

/**
 * Normalize the items to an array of DropdownButtonGroup
 */
const normalizeActionItems = (
  items:
    | LayoutBlockActionItem[]
    | LayoutBlockActionGroup[]
    | LayoutBlockActionGroup
) => {
  const isActionDefinition = (
    item: LayoutBlockActionItem | LayoutBlockActionGroup
  ): item is LayoutBlockActionItem => {
    return "onClick" in item
  }

  if (Array.isArray(items)) {
    // LayoutBlockActionItem[] case
    if (items.every(isActionDefinition)) {
      return [
        {
          items: items,
        },
      ]
    } else {
      // LayoutBlockActionGroup[] case
      return items
    }
  } else {
    // LayoutBlockActionGroup case
    return [items]
  }
}

export const PageLayoutBlock = forwardRef<HTMLDivElement, PageLayoutBlockProps>(
  (
    {
      children,
      variant = "default",
      className,
      draggable = false,
      onDragStart,
      onDragEnd,
      onDrop,
      dragId,
      primaryAction,
      ...props
    },
    ref
  ) => {
    const actions = useMemo(
      () => normalizeActionItems(props.actions || []),
      [props.actions]
    )

    const actionsDropdownItems: DropdownItem[] = useMemo(
      () => actions.flatMap((action) => action.items),
      [actions]
    )

    const showActionsBar = useMemo(
      () => actionsDropdownItems.length > 0 || !!primaryAction,
      [actionsDropdownItems, primaryAction]
    )

    return (
      <div
        ref={ref}
        className={cn(variants({ variant }), "relative", className)}
        draggable={draggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        data-drag-id={dragId}
        {...props}
      >
        {showActionsBar && (
          <div className="absolute right-0 top-0 flex items-center justify-end gap-2 p-4">
            {!!primaryAction && primaryAction}
            {actionsDropdownItems.length > 0 && (
              <Dropdown
                items={actionsToLayoutBlockActionItems(actions)}
                data-testid="actions-dropdown"
              />
            )}
          </div>
        )}
        <div data-testid="content">{children}</div>
      </div>
    )
  }
)

PageLayoutBlock.displayName = "PageLayoutBlock"
// Mark as a valid PageLayoutBlock component
;(PageLayoutBlock as unknown as PageLayoutBlockComponent).__isPageLayoutBlock =
  true
