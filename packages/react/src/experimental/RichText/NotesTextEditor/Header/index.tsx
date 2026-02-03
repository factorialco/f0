import { cva } from "cva"

import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { F0Icon, IconType } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { HeaderSecondaryAction } from "@/experimental/Information/Headers/BaseHeader"
import {
  Metadata,
  MetadataItem,
} from "@/experimental/Information/Headers/Metadata"
import {
  PrimaryAction,
  PrimaryActionButton,
  PrimaryDropdownAction,
} from "@/experimental/Information/utils"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"

type BannerVariant = "info" | "warning" | "critical" | "neutral" | "positive"

interface BannerProps {
  icon: IconType
  title: string
  variant: BannerVariant
}

export interface HeaderProps {
  primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>
  secondaryActions?: HeaderSecondaryAction[]
  metadata?: MetadataItem[]
  otherActions?: DropdownItem[]
  banner?: BannerProps
}

const bannerVariants = cva({
  base: "flex flex-row items-center justify-center gap-2 p-3",
  variants: {
    variant: {
      info: "bg-f1-background-info text-f1-foreground-info",
      warning: "bg-f1-background-warning text-f1-foreground-warning",
      critical: "bg-f1-background-critical text-f1-foreground-critical",
      neutral: "bg-f1-background-tertiary text-f1-foreground",
      positive: "bg-f1-background-positive text-f1-foreground-positive",
    },
  },
  defaultVariants: {
    variant: "info",
  },
})

const isVisible = <T extends { isVisible?: boolean }>(action: T) =>
  action.isVisible !== false

const isOtherActionVisible = (
  action: DropdownItem & { isVisible?: boolean }
): boolean => {
  if ("isVisible" in action) {
    return action.isVisible !== false
  }
  return true
}

const isPrimaryDropdownAction = (
  action: PrimaryAction | undefined
): action is PrimaryDropdownAction<string> => {
  return !!action && "items" in action
}

const isPrimaryActionButton = (
  action: PrimaryAction | undefined
): action is PrimaryActionButton => {
  return !!action && "label" in action && !("items" in action)
}

const Header = ({
  primaryAction,
  secondaryActions = [],
  metadata,
  otherActions = [],
  banner,
}: HeaderProps) => {
  const visibleSecondaryActions = secondaryActions.filter(isVisible)
  const visibleOtherActions = otherActions.filter(isOtherActionVisible)

  const isPrimaryActionVisible = primaryAction && isVisible(primaryAction)
  const hasSecondaryActions = visibleSecondaryActions.length > 0
  const hasOtherActions = visibleOtherActions.length > 0
  const hasActions =
    hasSecondaryActions || hasOtherActions || isPrimaryActionVisible

  return (
    <div className="flex flex-col">
      {((metadata && metadata.length > 0) || hasActions) && (
        <div className="flex flex-col items-start justify-between gap-2 px-6 py-4 sm:flex-row sm:items-center">
          {metadata && metadata.length > 0 && <Metadata items={metadata} />}
          <div className="flex flex-shrink-0 flex-row items-center gap-2">
            {hasOtherActions && <Dropdown items={visibleOtherActions} />}
            {visibleSecondaryActions.map((action, index) => (
              <F0Button
                key={index}
                onClick={action.onClick}
                variant={action.variant || "outline"}
                label={action.label}
                icon={action.icon}
                hideLabel={action.hideLabel}
                disabled={action.disabled}
                tooltip={action.tooltip}
              />
            ))}
            {isPrimaryActionVisible &&
              (hasSecondaryActions || hasOtherActions) && (
                <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
              )}
            {isPrimaryActionVisible && isPrimaryActionButton(primaryAction) && (
              <F0Button
                label={primaryAction.label}
                onClick={primaryAction.onClick}
                variant="default"
                icon={primaryAction.icon}
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
              />
            )}
            {isPrimaryActionVisible &&
              isPrimaryDropdownAction(primaryAction) && (
                <F0ButtonDropdown
                  items={primaryAction.items}
                  onClick={primaryAction.onClick}
                  variant="default"
                  value={primaryAction.value}
                  disabled={primaryAction.disabled}
                  tooltip={primaryAction.tooltip}
                />
              )}
          </div>
        </div>
      )}
      {banner && (
        <div className={bannerVariants({ variant: banner.variant })}>
          <F0Icon icon={banner.icon} />
          <OneEllipsis>{banner.title}</OneEllipsis>
        </div>
      )}
    </div>
  )
}

export default Header
export type { BannerProps, BannerVariant }
