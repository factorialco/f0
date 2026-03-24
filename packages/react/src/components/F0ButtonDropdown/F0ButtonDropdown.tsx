import { useMemo, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import {
  DropdownInternal,
  DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal.tsx"
import { ChevronDown } from "@/icons/app/index.ts"
import { withDataTestId } from "@/lib/data-testid/index.tsx"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils.ts"
import { Action } from "@/ui/Action/index.tsx"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants.ts"

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
  items:
    | ButtonDropdownItem<T>[]
    | ButtonDropdownGroup<T>[]
    | ButtonDropdownGroup<T>
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

/**
 * Split mode: the current behavior — main button shows selected item and triggers onClick,
 * chevron button opens dropdown with remaining items.
 */
const SplitMode = ({
  onClick,
  value,
  items: rawItems,
  size,
  variant,
  disabled,
  loading,
  tooltip,
}: {
  onClick: (value: string, item: ButtonDropdownItem<string>) => void
  value?: string
  items:
    | ButtonDropdownItem<string>[]
    | ButtonDropdownGroup<string>[]
    | ButtonDropdownGroup<string>
  size?: ButtonDropdownSize
  variant?: ButtonDropdownVariant
  disabled?: boolean
  loading?: boolean
  tooltip?: string
}) => {
  const t = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const items: ButtonDropdownGroup<string>[] = useMemo(
    () => normalizeItems(rawItems),
    [rawItems]
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
    size === "sm"
      ? "[&_.main]:w-6"
      : size === "lg"
        ? "[&_.main]:w-10"
        : "[&_.main]:w-8"

  return (
    selectedItem && (
      <Action
        onClick={handleClick}
        variant={variant}
        size={size}
        disabled={disabled}
        loading={loading}
        data-testid="button-main"
        aria-label={selectedItem.label}
        prepend={selectedItem.icon && <F0Icon icon={selectedItem.icon} />}
        className="rounded-r-none after:rounded-r-none"
        tooltip={tooltip}
        appendOutside={
          <DropdownInternal
            items={dropdownItems}
            align="end"
            open={isOpen && !disabled}
            onOpenChange={(open) => {
              if (disabled) return
              setIsOpen(open)
            }}
          >
            <button
              className={cn(
                actionVariants({
                  variant: variant,
                  pressed: isOpen && !disabled,
                }),
                buttonSizeVariants({ size: size }),
                "-translate-x-px rounded-l-none px-0 after:rounded-l-none",
                dropdownSize,
                focusRing()
              )}
              disabled={disabled}
              data-testid="button-menu"
              data-pressed={isOpen && !disabled}
            >
              <div className="main flex items-center justify-center gap-1">
                <span className="sr-only">{t.actions.more}</span>
                <F0Icon icon={ChevronDown} size={size === "sm" ? "sm" : "md"} />
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

/**
 * Dropdown mode: a single unified button with an inline chevron.
 * Clicking anywhere on the button opens a dropdown showing all items
 * (with optional descriptions and icons).
 */
const DropdownMode = ({
  onClick,
  trigger,
  items: rawItems,
  size,
  variant,
  disabled,
  loading,
  tooltip,
}: {
  onClick: (value: string, item: ButtonDropdownItem<string>) => void
  trigger?: string
  items:
    | ButtonDropdownItem<string>[]
    | ButtonDropdownGroup<string>[]
    | ButtonDropdownGroup<string>
  size?: ButtonDropdownSize
  variant?: ButtonDropdownVariant
  disabled?: boolean
  loading?: boolean
  tooltip?: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const items: ButtonDropdownGroup<string>[] = useMemo(
    () => normalizeItems(rawItems),
    [rawItems]
  )

  const flattenedItems = useMemo(() => {
    return items.flatMap((item) => item.items)
  }, [items])

  const triggerLabel = trigger || flattenedItems[0]?.label

  const dropdownItems = useMemo(
    () =>
      items
        .map((group) => group.items)
        .reduce<DropdownItem[]>((acc, curr) => {
          if (acc.length > 0) {
            acc.push({ type: "separator" })
          }
          acc.push(
            ...curr.map((item) => ({
              ...item,
              onClick: () => {
                onClick(item.value, item)
                setIsOpen(false)
              },
            }))
          )
          return acc
        }, []),
    [items, onClick]
  )

  if (!triggerLabel) return null

  return (
    <DropdownInternal
      items={dropdownItems}
      align="end"
      open={isOpen && !disabled}
      onOpenChange={(open) => {
        if (disabled) return
        setIsOpen(open)
      }}
    >
      <Action
        variant={variant}
        size={size}
        disabled={disabled}
        loading={loading}
        data-testid="button-dropdown-trigger"
        aria-label={triggerLabel}
        append={
          <F0Icon icon={ChevronDown} size={size === "sm" ? "sm" : "md"} />
        }
        pressed={isOpen && !disabled}
        tooltip={tooltip}
      >
        {triggerLabel}
      </Action>
    </DropdownInternal>
  )
}

const _F0ButtonDropdown = (props: F0ButtonDropdownProps) => {
  const mode = props.mode ?? "split"

  if (mode === "dropdown") {
    return (
      <DropdownMode
        onClick={props.onClick}
        trigger={"trigger" in props ? props.trigger : undefined}
        items={props.items}
        size={props.size}
        variant={props.variant}
        disabled={props.disabled}
        loading={props.loading}
        tooltip={props.tooltip}
      />
    )
  }

  return (
    <SplitMode
      onClick={props.onClick}
      value={"value" in props ? props.value : undefined}
      items={props.items}
      size={props.size}
      variant={props.variant}
      disabled={props.disabled}
      loading={props.loading}
      tooltip={props.tooltip}
    />
  )
}

export const F0ButtonDropdown = withDataTestId(_F0ButtonDropdown)
