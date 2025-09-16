import { Button, ButtonProps } from "@/components/Actions/Button"
import {
  OneDropdownButton,
  OneDropdownButtonProps,
} from "@/components/Actions/OneDropdownButton"
import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
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
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { cn } from "@/lib/utils"
import { Fragment, memo } from "react"

interface BaseHeaderProps {
  title: string
  avatar?:
    | {
        type: "generic"
        name: string
        src?: string
      }
    | AvatarVariant

  description?: string
  primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>
  secondaryActions?: SecondaryAction[]
  otherActions?: (DropdownItem & { isVisible?: boolean })[]
  status?: {
    label: string
    text: string
    variant: StatusVariant
    actions?: MetadataAction[]
  }
  metadata?: MetadataProps["items"]
}

const isVisible = (action: { isVisible?: boolean }) =>
  action.isVisible !== false

const ButtonWithTooltip = memo(function ButtonWithTooltip({
  tooltip,
  ...buttonProps
}: ButtonProps & { tooltip?: string }) {
  if (tooltip) {
    const Wrapper = buttonProps.disabled ? "span" : Fragment
    return (
      <Tooltip description={tooltip}>
        <Wrapper>
          <Button {...buttonProps} />
        </Wrapper>
      </Tooltip>
    )
  }
  return <Button {...buttonProps} />
})

const DropdownButtonWithTooltip = memo(function DropdownButtonWithTooltip({
  tooltip,
  ...dropdownProps
}: OneDropdownButtonProps<string> & {
  tooltip?: string
}) {
  if (tooltip) {
    const Wrapper = dropdownProps.disabled ? "span" : Fragment
    return (
      <Tooltip description={tooltip}>
        <Wrapper>
          <OneDropdownButton {...dropdownProps} />
        </Wrapper>
      </Tooltip>
    )
  }
  return <OneDropdownButton {...dropdownProps} />
})

export function BaseHeader({
  title,
  avatar,
  description,
  primaryAction,
  secondaryActions = [],
  otherActions = [],
  status,
  metadata = [],
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

  return (
    <div className="resource-header flex flex-col gap-3 px-6 pb-5 pt-3">
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
            <span className="text-2xl font-semibold text-f1-foreground">
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
              <ButtonWithTooltip
                label={primaryAction.label}
                onClick={primaryAction.onClick}
                variant="default"
                icon={primaryAction.icon}
                size="lg"
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
              />
            </div>
          )}
          {isPrimaryActionVisible && isPrimaryDropdownAction(primaryAction) && (
            <div className="w-full md:hidden [&>*]:w-full">
              <DropdownButtonWithTooltip
                items={primaryAction.items}
                onClick={primaryAction.onClick}
                variant="default"
                value={primaryAction.value}
                size="lg"
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
              />
            </div>
          )}

          {visibleSecondaryActions.map((action) => (
            <Fragment key={action.label}>
              <div className="w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full">
                <ButtonWithTooltip
                  label={action.label}
                  onClick={action.onClick}
                  variant={action.variant ?? "outline"}
                  icon={action.icon}
                  size="lg"
                  disabled={action.disabled}
                  tooltip={action.tooltip}
                />
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
          {visibleSecondaryActions.map((action) => (
            <Fragment key={action.label}>
              <div className="hidden md:block">
                <ButtonWithTooltip
                  label={action.label}
                  onClick={action.onClick}
                  variant={action.variant ?? "outline"}
                  icon={action.icon}
                  disabled={action.disabled}
                  tooltip={action.tooltip}
                />
              </div>
            </Fragment>
          ))}
          {isPrimaryActionVisible &&
            (hasSecondaryActions || hasOtherActions) && (
              <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
            )}
          {isPrimaryActionVisible && isPrimaryActionButton(primaryAction) && (
            <div className="hidden md:block">
              <ButtonWithTooltip
                label={primaryAction.label}
                onClick={primaryAction.onClick}
                variant="default"
                icon={primaryAction.icon}
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
              />
            </div>
          )}
          {isPrimaryActionVisible && isPrimaryDropdownAction(primaryAction) && (
            <div className="hidden md:block">
              <DropdownButtonWithTooltip
                items={primaryAction.items}
                onClick={primaryAction.onClick}
                variant="default"
                value={primaryAction.value}
                size="md"
                disabled={primaryAction.disabled}
                tooltip={primaryAction.tooltip}
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
