import { Button, ButtonProps } from "@/components/Actions/Button"
import { AvatarVariant } from "@/components/avatars/F0Avatar"
import { IconType } from "@/components/F0Icon"
import { DataAttributes } from "@/global.types"
import { EllipsisHorizontal } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import React, { useState } from "react"
import { NavigationItem } from "../utils"
import { DropdownItemContent } from "./DropdownItem"

export type DropdownItemSeparator = { type: "separator" }
export type DropdownItem = DropdownItemObject | DropdownItemSeparator

export type DropdownItemObject = NavigationItem & {
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
  size?: ButtonProps["size"]
  children?: React.ReactNode
  align?: "start" | "end"
  open?: boolean
  onOpenChange?: (open: boolean) => void
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

export function DropdownInternal({
  items,
  icon = EllipsisHorizontal,
  align = "start",
  size,
  children,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  ...rest
}: DropdownInternalProps) {
  const [internalOpen, setInternalOpen] = useState(false)

  const isControlled =
    controlledOpen !== undefined && controlledOnOpenChange !== undefined
  const open = isControlled ? controlledOpen : internalOpen
  const onOpenChange = isControlled ? controlledOnOpenChange : setInternalOpen

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        {children || (
          <Button
            {...rest}
            hideLabel
            icon={icon}
            size={size}
            label="..."
            round
            variant="outline"
            pressed={open}
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {items.map((item, index) =>
          item.type === "separator" ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownItem
              key={index}
              item={{
                ...item,
                onClick: () => {
                  // Seems to be a bug on radi-ui that mix the animation events, and if the dropdown triggers a dialog, the dialog will be closed before the dropdown is closed
                  setTimeout(() => {
                    item.onClick?.()
                  }, 200)
                },
              }}
            />
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
