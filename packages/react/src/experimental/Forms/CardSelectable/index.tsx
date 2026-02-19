import { cn } from "@/lib/utils"

import type {
  CardSelectableContainerProps,
  CardSelectableMultipleProps,
  CardSelectableSingleProps,
  CardSelectableValue,
} from "./types"

import { CardSelectable } from "./CardSelectable"

export function CardSelectableContainer<T extends CardSelectableValue>(
  props: CardSelectableContainerProps<T>
): React.ReactElement {
  const {
    items,
    disabled = false,
    label,
    layout = "vertical",
    multiple,
    isToggle,
    grouped,
  } = props

  const isMultiple = multiple === true

  const handleSelect = (itemValue: T) => {
    if (isMultiple) {
      const multiProps = props as CardSelectableMultipleProps<T>
      const currentValues = multiProps.value ?? []
      const currentlySelected = currentValues.includes(itemValue)

      const newValues = currentlySelected
        ? currentValues.filter((v) => v !== itemValue)
        : [...currentValues, itemValue]

      multiProps.onChange?.(newValues)
    } else {
      const singleProps = props as CardSelectableSingleProps<T>
      // When isToggle is true, clicking the selected item toggles it off
      if (isToggle && singleProps.value === itemValue) {
        singleProps.onChange?.(undefined)
      } else {
        singleProps.onChange?.(itemValue)
      }
    }
  }

  const isSelected = (itemValue: T): boolean => {
    if (isMultiple) {
      const multiProps = props as CardSelectableMultipleProps<T>
      return (multiProps.value ?? []).includes(itemValue)
    } else {
      const singleProps = props as CardSelectableSingleProps<T>
      return singleProps.value === itemValue
    }
  }

  // Determine the appropriate group role
  const groupRole = isToggle || isMultiple ? "group" : "radiogroup"

  // Grouped layout: items in a bordered container with dividers
  if (grouped) {
    return (
      <div
        role={groupRole}
        aria-label={label}
        className="rounded-xl border border-solid border-f1-border-secondary overflow-hidden"
      >
        {items.map((item, index) => (
          <div
            key={String(item.value)}
            className={cn(
              index !== items.length - 1 &&
                "border-0 border-b border-solid border-f1-border-secondary"
            )}
          >
            <CardSelectable
              item={item}
              selected={isSelected(item.value)}
              disabled={disabled}
              multiple={isMultiple}
              onSelect={() => handleSelect(item.value)}
              isToggle={isToggle}
              grouped
            />
          </div>
        ))}
      </div>
    )
  }

  // Default layout: individual cards with gap
  return (
    <div
      role={groupRole}
      aria-label={label}
      className={cn(
        "flex gap-3",
        layout === "vertical" ? "flex-col" : "flex-row"
      )}
    >
      {items.map((item) => (
        <CardSelectable
          key={String(item.value)}
          item={item}
          selected={isSelected(item.value)}
          disabled={disabled}
          multiple={isMultiple}
          onSelect={() => handleSelect(item.value)}
          isToggle={isToggle}
        />
      ))}
    </div>
  )
}

export { CardSelectable } from "./CardSelectable"
export type {
  CardSelectableContainerProps,
  CardSelectableItem,
  CardSelectableMultipleProps,
  CardSelectableSingleProps,
  CardSelectableValue,
} from "./types"
