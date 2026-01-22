import React, { useState } from "react"

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
} & DataAttributes

const DropdownItem = ({ item }: { item: DropdownItemObject }) => {
  const {
    label: _label,
    icon: _icon,
    avatar: _avatar,
    description: _description,
    href,
    critical,
    ...props
  } = item

  const itemClass = cn(
    "flex items-start gap-1.5 w-full",
    critical && "text-f1-foreground-critical"
  )

  return (
    <DropdownMenuItem asChild className={itemClass}>
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
  ...rest
}: DropdownInternalProps) {
  const i18n = useI18n()
  const [internalOpen, setInternalOpen] = useState(false)

  const isControlled =
    controlledOpen !== undefined && controlledOnOpenChange !== undefined
  const open = isControlled ? controlledOpen : internalOpen
  const onOpenChange = isControlled ? controlledOnOpenChange : setInternalOpen

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        {children || (
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
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {items.map((item, index) => renderDropdownItem(item, index))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
