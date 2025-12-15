import { F0Icon } from "@/components/F0Icon"
import { DropdownInternal, DropdownItem } from "@/experimental/Navigation/Dropdown/internal.tsx"
import { ChevronDown } from "@/icons/app/index.ts"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils.ts"
import { Action } from "@/ui/Action/index.tsx"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants.ts"
import { useMemo, useState } from "react"
import {
  ButtonDropdownGroup,
  ButtonDropdownItem,
  ButtonDropdownSize,
  ButtonDropdownVariant,
  F0ButtonDropdownProps,
} from "./types.ts"

/**
 * Normalize the items to an array of DropdownButtonGroup
 */
const normalizeItems = (
  items: ButtonDropdownItem[] | ButtonDropdownGroup[] | ButtonDropdownGroup
) => {
  if (Array.isArray(items)) {
    // ButtonDropdownItem[]
    if (items.every(isButtonDropdownItem)) {
      return [
        {
          items: items,
        },
      ]
    } else {
      // ButtonDropdownGroup[]
      return items
    }
  } else {
    // ButtonDropdownGroup
    return [items]
  }
}

export type F0DropdownButtonProps<T = string> = {
  size?: ButtonDropdownSize
  items: ButtonDropdownItem<T>[] | ButtonDropdownGroup<T>[] | ButtonDropdownGroup<T>
  variant?: ButtonDropdownVariant
  value?: T
  disabled?: boolean
  loading?: boolean
  onClick: (value: T, item: ButtonDropdownItem<T>) => void
}

function isButtonDropdownItem<T = string>(
  item: ButtonDropdownItem<T> | ButtonDropdownGroup<T>
): item is ButtonDropdownItem<T> {
  return "value" in item
}

const F0ButtonDropdown = ({ onClick, value, ...props }: F0ButtonDropdownProps) => {
  const t = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  /**
   * Normalize the items to an array of DropdownButtonGroup
   */
  const items: ButtonDropdownGroup<string>[] = useMemo(
    () => normalizeItems(props.items),
    [props.items]
  )

  const flattenedItems = useMemo(() => {
    return items.flatMap((item) => item.items)
  }, [items])

  const localValue = useMemo(() => value || flattenedItems[0]?.value, [value, flattenedItems])

  const selectedItem = useMemo(
    () => flattenedItems.find((item) => item.value === localValue),
    [localValue, flattenedItems]
  )

  const handleClick = () => {
    const item = flattenedItems.find((item) => item.value === localValue)
    if (item) {
      onClick(localValue, item)
    }
  }

  const dropdownItems = useMemo(
    () =>
      items
        .map((group) => group.items)
        .reduce<DropdownItem[]>((acc, curr) => {
          if (acc.length > 0) {
            acc.push({ type: "separator" })
          }
          acc.push(
            ...curr
              // exclude the selected item
              .filter((item) => item.value !== localValue)
              .map((item) => ({
                ...item,
                onClick: () => {
                  onClick(item.value, item)
                  setIsOpen(false)
                },
              }))
          )
          return acc
        }, []),
    [items, onClick, localValue]
  )

  const dropdownSize =
    props.size === "sm" ? "[&_.main]:w-6" : props.size === "lg" ? "[&_.main]:w-10" : "[&_.main]:w-8"

  return (
    selectedItem && (
      <Action
        onClick={handleClick}
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        loading={props.loading}
        data-testid="button-main"
        aria-label={selectedItem.label}
        prepend={selectedItem.icon && <F0Icon icon={selectedItem.icon} />}
        className="rounded-r-none after:rounded-r-none"
        tooltip={props.tooltip}
        appendOutside={
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
                <F0Icon icon={ChevronDown} size={props.size === "sm" ? "sm" : "md"} />
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

export { F0ButtonDropdown }
