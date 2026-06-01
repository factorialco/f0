import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import { ReactNode } from "react"

import { F0Button } from "@/components/F0Button"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Cross, EllipsisHorizontal } from "@/icons/app"
import { cn } from "@/lib/utils"
import { SheetTitle } from "@/ui/Sheet/sheet"

import { SidepanelNavigation, SidepanelOption } from "../types"
import { F0SidepanelNavigation } from "./F0SidepanelNavigation"

interface Props {
  title?: ReactNode
  closeLabel?: string
  onCloseClick: () => void
  navigation?: SidepanelNavigation
  options?: SidepanelOption[]
  headerBorder?: boolean
}

const toDropdownItems = (options: SidepanelOption[]): DropdownItem[] =>
  options.map((option) => ({
    type: "item",
    label: option.label,
    description: option.description,
    icon: option.icon,
    onClick: option.onClick,
    href: option.href,
    critical: option.critical,
  }))

export const F0SidepanelHeader = ({
  title,
  closeLabel = "Close",
  onCloseClick,
  navigation,
  options,
  headerBorder = false,
}: Props) => {
  const hasOptions = options && options.length > 0
  const hasRight = !!navigation || hasOptions
  const hasVisibleTitle = title !== undefined && title !== null

  return (
    <div
      className={cn(
        "flex h-14 shrink-0 items-center justify-between gap-3 px-4 py-3",
        headerBorder &&
          "border-0 border-b border-solid border-f1-border-secondary"
      )}
    >
      <F0Button
        size="md"
        variant="outline"
        icon={Cross}
        label={closeLabel}
        hideLabel
        onClick={onCloseClick}
      />

      {hasVisibleTitle ? (
        <div className="flex flex-1 items-center justify-center px-2">
          {typeof title === "string" ? (
            <SheetTitle className="truncate text-base font-semibold text-f1-foreground">
              {title}
            </SheetTitle>
          ) : (
            <SheetTitle asChild>
              <div>{title}</div>
            </SheetTitle>
          )}
        </div>
      ) : (
        // Radix Dialog requires a Title for screen readers; keep one hidden when
        // the visual title slot is empty.
        <VisuallyHidden.Root>
          <SheetTitle>{closeLabel}</SheetTitle>
        </VisuallyHidden.Root>
      )}

      {hasRight ? (
        <div className="flex items-center gap-3">
          {navigation && <F0SidepanelNavigation navigation={navigation} />}
          {hasOptions && (
            <Dropdown items={toDropdownItems(options)}>
              <F0Button
                size="sm"
                variant="outline"
                icon={EllipsisHorizontal}
                label="More actions"
                hideLabel
              />
            </Dropdown>
          )}
        </div>
      ) : (
        // Keep header layout balanced when there's no right cluster but a title is present.
        hasVisibleTitle && <div aria-hidden className="invisible h-8 w-8" />
      )}
    </div>
  )
}
