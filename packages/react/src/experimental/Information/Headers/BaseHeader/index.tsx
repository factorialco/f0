import { Fragment } from "react"

import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { StatusVariant } from "@/components/tags/F0TagStatus"
import { Description } from "@/experimental/Information/Headers/BaseHeader/Description"
import {
  Metadata,
  MetadataAction,
  MetadataProps,
} from "@/experimental/Information/Headers/Metadata"
import {
  PrimaryAction,
  PrimaryActionButton,
  PrimaryDropdownAction,
  SecondaryAction,
} from "@/experimental/Information/utils"
import {
  Dropdown,
  DropdownItem,
  MobileDropdown,
} from "@/experimental/Navigation/Dropdown"
import { cn } from "@/lib/utils"

export type HeaderSecondaryButtonAction = SecondaryAction & {
  hideLabel?: boolean
}

export type HeaderSecondaryDropdownAction = PrimaryDropdownAction<string> & {
  variant?: "outline"
}

export type HeaderSecondaryAction =
  | HeaderSecondaryButtonAction
  | HeaderSecondaryDropdownAction

interface BaseHeaderProps {
  title: string
  deactivated?: boolean
  avatar?:
    | {
        type: "generic"
        name: string
        src?: string
      }
    | AvatarVariant

  description?: string
  primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>
  secondaryActions?: HeaderSecondaryAction[]
  otherActions?: (DropdownItem & { isVisible?: boolean })[]
  status?: {
    label: string
    text: string
    variant: StatusVariant
    actions?: MetadataAction[]
  }
  metadata?: MetadataProps["items"]
  /** Renders a 1px bottom border at the very bottom of the header. */
  showBottomBorder?: boolean
}

const isVisible = (action: { isVisible?: boolean }) =>
  action.isVisible !== false

export function BaseHeader({
  title,
  avatar,
  deactivated,
  description,
  primaryAction,
  secondaryActions = [],
  otherActions = [],
  status,
  metadata = [],
  showBottomBorder = false,
}: BaseHeaderProps) {
  const allMetadata: BaseHeaderProps["metadata"] = [
    status && {
      label: status.label,
      value: {
        type: "status" as const,
        label: status.text,
        variant: status.variant,
      },
      actions: status.actions,
      hideLabel: true,
    },
    ...metadata,
  ]

  const visibleSecondaryActions = secondaryActions.filter(isVisible)
  const visibleOtherActions = otherActions.filter(isVisible)
  const isPrimaryActionVisible = primaryAction && isVisible(primaryAction)
  const hasSecondaryActions = visibleSecondaryActions.length > 0
  const hasOtherActions = visibleOtherActions.length > 0

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

  const getSecondaryActionKey = (
    action: HeaderSecondaryAction,
    index: number
  ) => {
    const actionKey = isSecondaryDropdownAction(action)
      ? `${action.value ?? "default"}-${action.items.map((item) => item.value).join("-")}`
      : action.label

    return `${actionKey}-${index}`
  }

  return (
    <div
      className={cn(
        "resource-header px-page flex flex-col gap-3 pb-5 pt-3",
        // `border-0` zeroes all sides first so this renders bottom-only even in apps that
        // don't load the Tailwind preflight border reset (otherwise `border-solid` would
        // light up all four sides at the CSS-initial `medium` width).
        showBottomBorder && "border-0 border-b border-solid border-f1-border"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-start justify-start gap-4 md:flex-row",
          !description && "md:items-center"
        )}
      >
        <div
          className={cn(
            "flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start",
            !description && "md:items-center"
          )}
        >
          {avatar && (
            <div className="flex items-start">
              <F0Avatar
                avatar={{
                  ...(avatar.type === "generic"
                    ? { ...avatar, type: "company" }
                    : avatar),
                }}
                size="xl"
              />
            </div>
          )}
          <div className="flex flex-col gap-1">
            <span
              className={cn(
                "text-2xl font-semibold",
                deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"
              )}
            >
              {title}
            </span>
            {description && <Description description={description} />}
          </div>
        </div>

        {allMetadata.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden">
            <Metadata items={allMetadata} />
          </div>
        )}

        <div className="flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden">
          {isPrimaryActionVisible && isPrimaryActionButton(primaryAction) && (
            <div className="w-full md:hidden [&>*]:w-full">
              <F0Button
                label={primaryAction.label}
                onClick={primaryAction.onClick}
                variant="default"
                icon={primaryAction.icon}
                size="lg"
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
                loading={primaryAction.loading}
              />
            </div>
          )}
          {isPrimaryActionVisible && isPrimaryDropdownAction(primaryAction) && (
            <div className="w-full md:hidden [&>*]:w-full">
              <F0ButtonDropdown
                items={primaryAction.items}
                onClick={primaryAction.onClick}
                variant="default"
                value={primaryAction.value}
                size="lg"
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
                loading={primaryAction.loading}
              />
            </div>
          )}

          {visibleSecondaryActions.map((action, index) => (
            <Fragment key={getSecondaryActionKey(action, index)}>
              <div className="w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full">
                {isSecondaryDropdownAction(action) ? (
                  <F0ButtonDropdown
                    items={action.items}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    value={action.value}
                    size="lg"
                    disabled={action.disabled}
                    tooltip={action.tooltip}
                    loading={action.loading}
                  />
                ) : (
                  <F0Button
                    label={action.label}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    icon={action.icon}
                    size="lg"
                    hideLabel={action.hideLabel}
                    disabled={action.disabled}
                    tooltip={action.tooltip}
                    loading={action.loading}
                  />
                )}
              </div>
            </Fragment>
          ))}

          {visibleOtherActions.length > 0 && (
            <div className="w-full [&>*]:w-full [&_button]:w-full">
              <MobileDropdown items={visibleOtherActions} />
            </div>
          )}
        </div>

        <div className="-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto">
          {visibleOtherActions.length > 0 && (
            <div>
              <Dropdown items={visibleOtherActions} />
            </div>
          )}
          {visibleSecondaryActions.map((action, index) => (
            <Fragment key={getSecondaryActionKey(action, index)}>
              <div className="hidden md:block">
                {isSecondaryDropdownAction(action) ? (
                  <F0ButtonDropdown
                    items={action.items}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    value={action.value}
                    size="md"
                    disabled={action.disabled}
                    tooltip={action.tooltip}
                    loading={action.loading}
                  />
                ) : (
                  <F0Button
                    label={action.label}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    icon={action.icon}
                    hideLabel={action.hideLabel}
                    disabled={action.disabled}
                    tooltip={action.tooltip}
                    loading={action.loading}
                  />
                )}
              </div>
            </Fragment>
          ))}
          {isPrimaryActionVisible &&
            (hasSecondaryActions || hasOtherActions) && (
              <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
            )}
          {isPrimaryActionVisible && isPrimaryActionButton(primaryAction) && (
            <div className="hidden md:block">
              <F0Button
                label={primaryAction.label}
                onClick={primaryAction.onClick}
                variant="default"
                icon={primaryAction.icon}
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
                loading={primaryAction.loading}
              />
            </div>
          )}
          {isPrimaryActionVisible && isPrimaryDropdownAction(primaryAction) && (
            <div className="hidden md:block">
              <F0ButtonDropdown
                items={primaryAction.items}
                onClick={primaryAction.onClick}
                variant="default"
                value={primaryAction.value}
                size="md"
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
                loading={primaryAction.loading}
              />
            </div>
          )}
        </div>
      </div>
      {allMetadata.length > 0 && (
        <div className="hidden flex-wrap items-center gap-x-3 gap-y-1 md:block">
          <Metadata items={allMetadata} />
        </div>
      )}
    </div>
  )
}

export const isSecondaryDropdownAction = (
  action: HeaderSecondaryAction
): action is HeaderSecondaryDropdownAction => {
  return "items" in action
}
