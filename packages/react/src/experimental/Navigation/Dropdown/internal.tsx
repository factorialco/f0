import React, { useEffect, useState } from "react"

import { AvatarVariant } from "@/components/avatars/F0Avatar"
import { F0ButtonProps } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { IconType } from "@/components/F0Icon"
import { DataAttributes } from "@/global.types"
import { EllipsisHorizontal } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import { Tooltip } from "@/experimental/Overlays/Tooltip"

import { NavigationItem } from "../utils"
import { DropdownItemContent } from "./DropdownItem"

export type DropdownItemSeparator = { type: "separator" }
export type DropdownItemLabel = { type: "label"; text: string }
export type DropdownItem =
  | DropdownItemObject
  | DropdownItemSeparator
  | DropdownItemLabel

export type DropdownItemObject = Pick<NavigationItem, "label" | "href"> & {
  type?: "item"
  onClick?: () => void
  icon?: IconType
  description?: string
  critical?: boolean
  avatar?: AvatarVariant
  disabled?: boolean
  tooltip?: string
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
} & DataAttributes

const DropdownItem = ({ item }: { item: DropdownItemObject }) => {
  const {
    label: _label,
    icon: _icon,
    avatar: _avatar,
    description: _description,
    href,
    critical,
    disabled,
    tooltip,
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

  if (tooltip) {
    // Wrap in an outer div so the Tooltip trigger sits above the DropdownMenuItem.
    // When disabled, Radix applies data-[disabled]:pointer-events-none (specificity 0,1,1)
    // which beats pointer-events-auto (0,1,0), so the trigger must be the outer wrapper —
    // pointer events pass through the inner disabled element to the parent.
    return (
      <Tooltip description={tooltip}>
        <div>{menuItem}</div>
      </Tooltip>
    )
  }

  return menuItem
}

function renderDropdownItem(
  item: DropdownItem,
  index: number
): React.ReactNode {
  if (item.type === "separator") {
    return <DropdownMenuSeparator key={index} />
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
    if (disabled && rawOpen) setOpen(false)
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
      <DropdownMenuContent align={align}>
        {items.map((item, index) => renderDropdownItem(item, index))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
