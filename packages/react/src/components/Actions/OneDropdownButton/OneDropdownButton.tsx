import { F0Icon } from "@/components/F0Icon/index.tsx"
import {
  DropdownInternal,
  DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal.tsx"
import { ChevronDown } from "@/icons/app/index.ts"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils.ts"
import { Action } from "@/ui/Action"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants.ts"
import { useMemo, useState } from "react"
import {
  OneDropdownButtonGroup,
  OneDropdownButtonItem,
  OneDropdownButtonProps,
} from "./types.ts"

function isDropdownButtonItem<T = string>(
  item: OneDropdownButtonItem<T> | OneDropdownButtonGroup<T>
): item is OneDropdownButtonItem<T> {
  return "value" in item
}

/**
 * Normalize the items to an array of DropdownButtonGroup
 */
const normalizeItems = (
  items:
    | OneDropdownButtonItem[]
    | OneDropdownButtonGroup[]
    | OneDropdownButtonGroup
) => {
  if (Array.isArray(items)) {
    // DropdownButtonItem[]
    if (items.every(isDropdownButtonItem)) {
      return [
        {
          items: items,
        },
      ]
    } else {
      // OneDropdownButtonGroup[]
      return items
    }
  } else {
    // OneDropdownButtonGroup
    return [items]
  }
}

const OneDropdownButton = ({
  onClick,
  value,
  ...props
}: OneDropdownButtonProps) => {
  const t = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  /**
   * Normalize the items to an array of DropdownButtonGroup
   */
  const items: OneDropdownButtonGroup[] = useMemo(
    () => normalizeItems(props.items),
    [props.items]
  )

  const flattenedItems = useMemo(() => {
    return items.flatMap((item) => item.items)
  }, [items])

  const localValue = useMemo(
    () => value || flattenedItems[0]?.value,
    [value, flattenedItems]
  )

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
