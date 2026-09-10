import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { StatusVariant } from "@/components/tags/F0TagStatus"
import {
  HeaderSecondaryAction,
  isSecondaryDropdownAction,
} from "@/experimental/Information/Headers/BaseHeader"
import {
  Metadata,
  MetadataAction,
  MetadataItem,
} from "@/experimental/Information/Headers/Metadata"
import {
  PrimaryAction,
  PrimaryActionButton,
  PrimaryDropdownAction,
} from "@/experimental/Information/utils"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"

export interface HeaderStatusProps {
  label: string
  text: string
  variant: StatusVariant
  actions?: MetadataAction[]
}

export interface HeaderProps {
  primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>
  secondaryActions?: HeaderSecondaryAction[]
  metadata?: MetadataItem[]
  otherActions?: DropdownItem[]
  status?: HeaderStatusProps
}

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

/** One secondary action drawn: a dropdown when it carries items, else a button. */
const SecondaryActionControl = ({
  action,
}: {
  action: HeaderSecondaryAction
}) =>
  isSecondaryDropdownAction(action) ? (
    <F0ButtonDropdown
      items={action.items}
      onClick={action.onClick}
      variant={action.variant ?? "outline"}
      value={action.value}
      disabled={action.disabled}
      tooltip={action.tooltip}
      loading={action.loading}
    />
  ) : (
    <F0Button
      onClick={action.onClick}
      variant={action.variant || "outline"}
      label={action.label}
      icon={action.icon}
      hideLabel={action.hideLabel}
      disabled={action.disabled}
      tooltip={action.tooltip}
    />
  )

/** The primary action drawn: a dropdown when it carries items, else a button. */
const PrimaryActionControl = ({
  action,
}: {
  action: NonNullable<HeaderProps["primaryAction"]>
}) => {
  if (isPrimaryActionButton(action)) {
    return (
      <F0Button
        label={action.label}
        onClick={action.onClick}
        variant="default"
        icon={action.icon}
        disabled={action.disabled}
        tooltip={action.tooltip}
      />
    )
  }

  if (isPrimaryDropdownAction(action)) {
    return (
      <F0ButtonDropdown
        items={action.items}
        onClick={action.onClick}
        variant="default"
        value={action.value}
        disabled={action.disabled}
        tooltip={action.tooltip}
      />
    )
  }

  return null
}

/**
 * The header's action row: the overflow menu, then the secondary actions, then
 * the primary one behind a divider.
 */
const HeaderActions = ({
  primaryAction,
  secondaryActions,
  otherActions,
}: {
  /** Already filtered to the visible ones. */
  primaryAction: HeaderProps["primaryAction"]
  secondaryActions: HeaderSecondaryAction[]
  otherActions: DropdownItem[]
}) => (
  <div className="flex flex-shrink-0 flex-row items-center gap-2">
    {otherActions.length > 0 ? <Dropdown items={otherActions} /> : null}
    {secondaryActions.map((action, index) => (
      <SecondaryActionControl key={index} action={action} />
    ))}
    {primaryAction &&
    (secondaryActions.length > 0 || otherActions.length > 0) ? (
      <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
    ) : null}
    {primaryAction ? <PrimaryActionControl action={primaryAction} /> : null}
  </div>
)

const Header = ({
  primaryAction,
  secondaryActions = [],
  metadata = [],
  otherActions = [],
  status,
}: HeaderProps) => {
  const allMetadata: MetadataItem[] = [
    ...(status
      ? [
          {
            label: status.label,
            value: {
              type: "status" as const,
              label: status.text,
              variant: status.variant,
            },
            actions: status.actions,
            hideLabel: true,
          },
        ]
      : []),
    ...metadata,
  ]

  const visibleSecondaryActions = secondaryActions.filter(isVisible)
  const visibleOtherActions = otherActions.filter(isOtherActionVisible)

  const isPrimaryActionVisible = primaryAction && isVisible(primaryAction)
  const hasSecondaryActions = visibleSecondaryActions.length > 0
  const hasOtherActions = visibleOtherActions.length > 0
  const hasActions =
    hasSecondaryActions || hasOtherActions || isPrimaryActionVisible

  return (
    <div className="flex flex-col">
      {allMetadata.length > 0 || hasActions ? (
        <div className="flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center">
          {allMetadata.length > 0 ? <Metadata items={allMetadata} /> : null}
          <HeaderActions
            primaryAction={isPrimaryActionVisible ? primaryAction : undefined}
            secondaryActions={visibleSecondaryActions}
            otherActions={visibleOtherActions}
          />
        </div>
      ) : null}
    </div>
  )
}

export { Header }
