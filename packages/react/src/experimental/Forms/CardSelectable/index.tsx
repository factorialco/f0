import { useCallback, useState } from "react"

import { cn } from "@/lib/utils"

import type {
  CardSelectableContextValue,
  CardSelectableProps,
  CardSelectableValue,
} from "./types"

import { CardSelectableItem } from "./CardSelectableItem"
import { CardSelectableContext } from "./context"

export function CardSelectable<T extends CardSelectableValue>({
  value: controlledValue,
  onValueChange,
  defaultValue,
  disabled = false,
  "aria-label": ariaLabel,
  layout = "horizontal",
  children,
}: CardSelectableProps<T>) {
  const [uncontrolledValue, setUncontrolledValue] = useState<T | undefined>(
    defaultValue
  )
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const onSelect = useCallback(
    (newValue: T) => {
      if (disabled) return
      if (!isControlled) {
        setUncontrolledValue(newValue)
      }
      onValueChange?.(newValue)
    },
    [isControlled, onValueChange, disabled]
  )

  const contextValue: CardSelectableContextValue<CardSelectableValue> = {
    value,
    onSelect: onSelect as (value: CardSelectableValue) => void,
    disabled,
  }

  return (
    <CardSelectableContext.Provider value={contextValue}>
      <div
        role="radiogroup"
        aria-label={ariaLabel}
        className={cn(
          "flex gap-3",
          layout === "horizontal" ? "flex-row" : "flex-col"
        )}
      >
        {children}
      </div>
    </CardSelectableContext.Provider>
  )
}

export { CardSelectableItem }
export type {
  CardSelectableAvatarVariant,
  CardSelectableItemProps,
  CardSelectableProps,
  CardSelectableValue,
} from "./types"
