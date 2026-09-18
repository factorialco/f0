import React, { useEffect, useState } from "react"
import { AvatarVariant } from "@/components/avatars/F0Avatar"
import { F0ButtonProps } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { IconType } from "@/components/F0Icon"
import { DataAttributes } from "@/global.types"
import { EllipsisHorizontal } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { useI18n } from "@/lib/providers/i18n"
import { TooltipWrapper } from "@/lib/tooltip-wrapper"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  dropdownMenuItemClassName,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuToggleItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { Switch } from "@/ui/switch"
import { NavigationItem } from "../utils"
import { DropdownItemContent } from "./DropdownItem"

export type DropdownItemSeparator = { type: "separator" }
export type DropdownItemLabel = { type: "label"; text: string }
export type DropdownItem =
  | DropdownItemObject
  | DropdownItemSeparator
  | DropdownItemLabel
  | DropdownItemSubmenu
  | DropdownItemSwitch

/** What any row shows, whatever it does when you choose it. */
export type DropdownItemVisuals = {
  label: string
  icon?: IconType
  description?: string
  avatar?: AvatarVariant
  /** Short trailing tag beside the label, e.g. "New". Not a sentence. */
  tag?: string
  critical?: boolean
}

export type DropdownItemObject = Pick<NavigationItem, "label" | "href"> &
  Omit<DropdownItemVisuals, "label"> & {
    type?: "item"
    onClick?: () => void
    disabled?: boolean
    /**
     * Tooltip shown on hover while the item is `disabled` — use it to explain why
     * the action is unavailable. Ignored when the item is not disabled. The
     * tooltip trigger re-enables pointer events, so it works despite the disabled
     * item's `pointer-events: none`.
     */
    disabledTooltip?: string
  }

/**
 * A row that opens a menu of its own beside this one, rather than doing
 * something. Use it to keep a long list one step in — the connectors a chat can
 * reach, say — instead of unrolling it into the parent menu.
 */
export type DropdownItemSubmenu = DropdownItemVisuals & {
  type: "submenu"
  items: DropdownItem[]
  disabled?: boolean
  /**
   * Shown INSIDE the submenu when `items` is empty, so choosing it never opens
   * an empty panel. Without it an empty submenu renders nothing.
   */
  emptyLabel?: string
}

/**
 * A row you flip rather than press: it carries a switch, and choosing it keeps
 * the menu open so several can be set in a row. The item itself is what the
 * keyboard and the accessibility tree see (`aria-checked`); the switch is drawn
 * for the eye only.
 */
export type DropdownItemSwitch = DropdownItemVisuals & {
  type: "switch"
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  disabled?: boolean
  /** Tooltip shown on hover while `disabled`, as on `DropdownItemObject`. */
  disabledTooltip?: string
}

export type DropdownInternalProps = {
  items: DropdownItem[]
  icon?: IconType
  size?: F0ButtonProps["size"]
  children?: React.ReactNode
  align?: "start" | "end" | "center"
  open?: boolean
  onOpenChange?: (open: boolean) => void
  label?: string
  /**
   * Whether the dropdown trigger is disabled. When true, the menu cannot be
   * opened via click, keyboard, or focus and the trigger receives
   * `aria-disabled="true"`. When a custom trigger is provided via `children`,
   * `disabled` is forwarded to it via `cloneElement` if it is a single React
   * element; consumer-supplied `disabled` / `aria-disabled` always win.
   * @default false
   */
  disabled?: boolean
  /**
   * Where the menu is portalled. Defaults to the document body; pass the
   * element of a surrounding modal layer — a dialog's own content node, which
   * it publishes as `portalContainer` — so that layer's focus trap CONTAINS
   * the menu instead of fighting it. Two traps over the same document push
   * focus back and forth until the call stack gives out.
   */
  container?: HTMLElement | null
} & DataAttributes

/**
 * A disabled item sets `pointer-events: none`, so it emits NO hover events —
 * the tooltip must hang off a wrapper span that keeps pointer events and that
 * the hover passes THROUGH to (same approach as F0FormEditableTable). Only a
 * disabled item with a tooltip gets the wrapper; every other item renders bare.
 */
const withDisabledTooltip = (
  row: React.ReactNode,
  {
    disabled,
    disabledTooltip,
  }: { disabled?: boolean; disabledTooltip?: string }
) =>
  disabled && disabledTooltip ? (
    <TooltipWrapper tooltip={disabledTooltip}>
      <span className="block w-full cursor-not-allowed">{row}</span>
    </TooltipWrapper>
  ) : (
    row
  )

const DropdownItem = ({ item }: { item: DropdownItemObject }) => {
  const {
    label: _label,
    icon: _icon,
    avatar: _avatar,
    description: _description,
    // Held back from `props`: it is drawn by `DropdownItemContent`, and would
    // otherwise land on the DOM node as an unknown attribute.
    tag: _tag,
    disabledTooltip,
    href,
    critical,
    disabled,
    // Radix's, not the DOM's — see `onSelect` below.
    onClick,
    ...props
  } = item

  const itemClass = cn(
    "flex items-start gap-1.5 w-full",
    critical && "text-f1-foreground-critical"
  )

  const menuItem = (
    <DropdownMenuItem
      asChild
      className={cn(itemClass, "cursor-pointer")}
      disabled={disabled}
      // THE ACTION HANGS OFF RADIX'S `onSelect`, not the child's DOM `onClick`.
      // Selecting closes the menu, and one level in — an item inside a submenu —
      // the node is already detached by the time the browser's `click` would
      // bubble, so React never sees it and the handler silently never ran.
      // `onSelect` fires before the close, for pointer and keyboard alike.
      onSelect={() => onClick?.()}
    >
      {href ? (
        <Link
          href={href}
          className={cn(
            itemClass,
            "text-f1-foreground no-underline hover:cursor-pointer"
          )}
          {...props}
        >
          <DropdownItemContent item={item} />
        </Link>
      ) : (
        <div {...props} className={itemClass}>
          <DropdownItemContent item={item} />
        </div>
      )}
    </DropdownMenuItem>
  )

  return withDisabledTooltip(menuItem, { disabled, disabledTooltip })
}

const DropdownSwitchItem = ({ item }: { item: DropdownItemSwitch }) => {
  const row = (
    <DropdownMenuToggleItem
      className={cn(
        "flex w-full items-center gap-1.5",
        item.critical && "text-f1-foreground-critical"
      )}
      checked={item.checked}
      onCheckedChange={item.onCheckedChange}
      disabled={item.disabled}
    >
      <DropdownItemContent item={item} />
      {/* DECORATION. The row above is the control: it owns `aria-checked`, the
          focus and the keyboard. A second real switch here would be a button
          inside a menuitemcheckbox — two things to reach for one state. */}
      <Switch
        checked={item.checked}
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none shrink-0"
      />
    </DropdownMenuToggleItem>
  )

  return withDisabledTooltip(row, item)
}

const DropdownSubmenu = ({
  item,
  container,
}: {
  item: DropdownItemSubmenu
  container?: HTMLElement | null
}) => (
  <DropdownMenuSub>
    <DropdownMenuSubTrigger
      // The submenu trigger is a row like any other — the primitive's own
      // styling is narrower and lighter than `DropdownMenuItem`'s, and a menu
      // whose rows change size halfway down reads as two menus.
      className={cn(
        dropdownMenuItemClassName,
        "w-full gap-1.5",
        item.critical && "text-f1-foreground-critical"
      )}
      disabled={item.disabled}
    >
      <DropdownItemContent item={item} />
    </DropdownMenuSubTrigger>
    <DropdownMenuPortal container={container ?? undefined}>
      <DropdownMenuSubContent className="border-solid border-f1-border-secondary p-1">
        {item.items.length === 0 && item.emptyLabel ? (
          <DropdownMenuLabel className="text-xs font-medium leading-4 text-f1-foreground-secondary">
            {item.emptyLabel}
          </DropdownMenuLabel>
        ) : (
          item.items.map((child, index) =>
            renderDropdownItem(child, index, container)
          )
        )}
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  </DropdownMenuSub>
)

function renderDropdownItem(
  item: DropdownItem,
  index: number,
  container?: HTMLElement | null
): React.ReactNode {
  if (item.type === "separator") {
    return <DropdownMenuSeparator key={index} />
  }

  if (item.type === "submenu") {
    return <DropdownSubmenu key={index} item={item} container={container} />
  }

  if (item.type === "switch") {
    return <DropdownSwitchItem key={index} item={item} />
  }

  if (item.type === "label") {
    return (
      <DropdownMenuLabel
        key={index}
        className="flex-1 text-xs font-medium leading-4 text-f1-foreground-secondary"
      >
        {item.text}
      </DropdownMenuLabel>
    )
  }

  return (
    <DropdownItem
      key={index}
      item={{
        ...item,
        onClick: () => {
          // Seems to be a bug on radix-ui that mix the animation events, and if the dropdown triggers a dialog, the dialog will be closed before the dropdown is closed
          setTimeout(() => {
            item.onClick?.()
          }, 200)
        },
      }}
    />
  )
}

export function DropdownInternal({
  items,
  icon = EllipsisHorizontal,
  align = "start",
  size,
  children,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  label,
  disabled,
  container,
  ...rest
}: DropdownInternalProps) {
  const i18n = useI18n()
  const [internalOpen, setInternalOpen] = useState(false)

  const isControlled =
    controlledOpen !== undefined && controlledOnOpenChange !== undefined
  const rawOpen = isControlled ? controlledOpen : internalOpen
  const setOpen = isControlled ? controlledOnOpenChange : setInternalOpen
  // When `disabled` flips to true while the menu is open, reset both
  // controlled and uncontrolled state so the menu cannot reappear when
  // `disabled` flips back to false. In controlled mode this fires the
  // consumer's `onOpenChange(false)` — a disabled menu must never stay open.
  useEffect(() => {
    if (disabled && rawOpen) {
      setOpen(false)
    }
  }, [disabled, rawOpen, setOpen])
  // Mask the value passed to Radix during render so a disabled menu cannot
  // flash open before the effect above commits the state reset.
  const open = disabled ? false : rawOpen
  const onOpenChange = (next: boolean) => {
    setOpen(next)
  }

  const trigger = children ? (
    React.isValidElement(children) ? (
      React.cloneElement(
        children as React.ReactElement<{
          disabled?: boolean
          "aria-disabled"?: boolean | "true" | "false"
        }>,
        {
          // Consumer-supplied values always win.
          disabled:
            (children.props as { disabled?: boolean }).disabled ?? disabled,
          "aria-disabled":
            (
              children.props as {
                "aria-disabled"?: boolean | "true" | "false"
              }
            )["aria-disabled"] ?? (disabled ? true : undefined),
        }
      )
    ) : (
      children
    )
  ) : (
    <ButtonInternal
      {...rest}
      hideLabel={!label}
      icon={icon}
      size={size}
      label={label ?? i18n.actions.toggleDropdownMenu}
      variant="outline"
      pressed={open}
      compact={!label}
      noAutoTooltip
      noTitle
      disabled={disabled}
    />
  )

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild disabled={disabled}>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} container={container}>
        {items.map((item, index) => renderDropdownItem(item, index, container))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
