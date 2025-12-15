import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { EllipsisHorizontal } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils.ts"
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/ui/drawer"
import { useState } from "react"
import { DropdownItemContent } from "./DropdownItem"
import {
  DropdownInternal,
  DropdownInternalProps,
  DropdownItem,
  DropdownItemObject,
} from "./internal"

const privateProps = [] as const

type DropdownProps = Omit<
  DropdownInternalProps,
  (typeof privateProps)[number]
> & {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const Dropdown = (props: DropdownProps) => {
  const { open, onOpenChange, ...rest } = props
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, rest as DropdownInternalProps)

  return (
    <DropdownInternal
      {...publicProps}
      open={open}
      onOpenChange={onOpenChange}
      align={props.align || "end"}
    />
  )
}

export type { DropdownItem, DropdownItemObject }

export const MobileDropdown = ({ items, children }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {children || (
          <ButtonInternal
            label="Other actions"
            icon={EllipsisHorizontal}
            variant="outline"
            size="lg"
            pressed={open}
            noTitle
          />
        )}
      </DrawerTrigger>
      <DrawerOverlay className="bg-f1-background-overlay" />
      <DrawerContent className="bg-f1-background">
        <div className="flex flex-col px-2 pb-3 pt-2">
          {items.map((item, index) =>
            item.type === "separator" ? (
              <div
                key={`separator-${index}`}
                className="mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary"
              />
            ) : item.href ? (
              <Link
                {...item}
                href={item.href}
                className={cn(
                  "flex w-full items-start gap-1.5",
                  item.critical && "text-f1-foreground-critical",
                  "text-f1-foreground no-underline hover:cursor-pointer"
                )}
              >
                <DropdownItemContent item={item} />
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  item.onClick?.()
                  setOpen(false)
                }}
                className="flex w-full items-center gap-2 p-3"
              >
                {item.icon && (
                  <span
                    className={cn(
                      "h-5 w-5 text-f1-icon",
                      item.critical && "text-f1-icon-critical"
                    )}
                  >
                    <F0Icon icon={item.icon} size="md" />
                  </span>
                )}
                <span
                  className={cn(
                    "font-medium",
                    item.critical
                      ? "text-f1-foreground-critical"
                      : "text-f1-foreground"
                  )}
                >
                  {item.label}
                </span>
              </button>
            )
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
