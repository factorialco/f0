import { useI18n } from "@/lib/providers/i18n"
import { useMemo, useState } from "react"
import {
  DropdownInternal,
  DropdownItemObject,
  DropdownItemSeparator,
} from "../../../experimental/Navigation/Dropdown/internal.tsx"
import { ChevronDown } from "../../../icons/app/index.ts"
import { cn, focusRing } from "../../../lib/utils.ts"
import { Action } from "../../../ui/Action/index.tsx"
import {
  actionVariants,
  buttonSizeVariants,
} from "../../../ui/Action/variants.ts"
import { F0Icon } from "../../F0Icon/index.tsx"
import { OneDropdownButtonSize, OneDropdownButtonVariant } from "./types.ts"

export type OneDropdownButtonItem<T = string> = Pick<
  DropdownItemObject,
  "label" | "icon" | "critical" | "description"
> & {
  value: T
}

export type OneDropdownButtonProps<T = string> = {
  size?: OneDropdownButtonSize
  items: (OneDropdownButtonItem<T> | DropdownItemSeparator)[]
  variant?: OneDropdownButtonVariant
  value?: T
  disabled?: boolean
  loading?: boolean
  onClick: (value: T, item: OneDropdownButtonItem<T>) => void
}

function isDropdownItem<T>(
  item: OneDropdownButtonItem<T> | DropdownItemSeparator
): item is OneDropdownButtonItem<T> {
  return "value" in item
}

const OneDropdownButton = ({
  items,
  onClick,
  value,
  ...props
}: OneDropdownButtonProps) => {
  const t = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const selectableItems = useMemo(() => items.filter(isDropdownItem), [items])

  const localValue = useMemo(
    () => value || selectableItems[0]?.value,
    [value, selectableItems]
  )

  const selectedItem = useMemo(
    () => selectableItems.find((item) => item.value === localValue),
    [localValue, selectableItems]
  )

  const handleClick = () => {
    const item = selectableItems.find((item) => item.value === localValue)
    if (item) {
      onClick(localValue, item)
    }
  }

  const dropdownItems = useMemo(
    () =>
      items
        .filter((item) => !isDropdownItem(item) || item.value !== localValue)
        .map((item) =>
          isDropdownItem(item)
            ? {
                ...item,
                onClick: () => {
                  onClick(item.value, item)
                  setIsOpen(false)
                },
              }
            : item
        ),
    [items, localValue, onClick]
  )

  const dropdownSize =
    props.size === "sm"
      ? "[&_.main]:w-6"
      : props.size === "lg"
        ? "[&_.main]:w-10"
        : "[&_.main]:w-8"

  return (
    selectedItem && (
      <Action
        onClick={handleClick}
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        loading={props.loading}
        data-testid="button-main"
        prepend={selectedItem.icon && <F0Icon icon={selectedItem.icon} />}
        appendOutside={true}
        className="rounded-r-none after:rounded-r-none"
        append={
          <DropdownInternal
            items={dropdownItems}
            align="end"
            open={isOpen && !props.disabled}
            onOpenChange={(open) => {
              if (props.disabled) return
              setIsOpen(open)
            }}
          >
            <button
              className={cn(
                actionVariants({
                  variant: props.variant,
                  pressed: isOpen && !props.disabled,
                }),
                buttonSizeVariants({ size: props.size }),
                "-translate-x-px rounded-l-none px-0 after:rounded-l-none",
                dropdownSize,
                focusRing()
              )}
              disabled={props.disabled}
              data-testid="button-menu"
              data-pressed={isOpen && !props.disabled}
            >
              <div className="main flex items-center justify-center gap-1">
                <span className="sr-only">{t.actions.more}</span>
                <F0Icon
                  icon={ChevronDown}
                  size={props.size === "sm" ? "sm" : "md"}
                />
              </div>
            </button>
          </DropdownInternal>
        }
      >
        {selectedItem.label}
      </Action>
    )
  )
}

export { OneDropdownButton }
