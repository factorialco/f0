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
  } = props

  const isMultiple = multiple === true

  const handleSelect = (itemValue: T) => {
    if (isMultiple) {
      const multiProps = props as CardSelectableMultipleProps<T>
      const currentValues = multiProps.value ?? []
      const isSelected = currentValues.includes(itemValue)

      const newValues = isSelected
        ? currentValues.filter((v) => v !== itemValue)
        : [...currentValues, itemValue]

      multiProps.onChange?.(newValues)
    } else {
      const singleProps = props as CardSelectableSingleProps<T>
      singleProps.onChange?.(itemValue)
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

  return (
    <div
      role={isMultiple ? "group" : "radiogroup"}
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
