import { Button } from "@/components/Actions/Button"
import { OneDropdownButton } from "@/components/Actions/OneDropdownButton"
import { Action } from "../../../Fields/Select/SelectBottomActions"

interface Props {
  actions?: Action[]
  selectAllLabel?: string
  clearLabel?: string
  disabled?: boolean
  allVisibleSelected?: boolean
  anyVisibleSelected?: boolean
  loading?: boolean
  singleSelector?: boolean
  onSelectAll?: () => void
  onClear?: () => void
  totalFilteredEntities?: number
}

interface ListButtonsProps {
  primaryAction: Action
  secondaryActions?: Action[]
}

const ListButtons = ({ primaryAction, secondaryActions }: ListButtonsProps) => {
  if (!secondaryActions || secondaryActions.length === 0) {
    return (
      <Button
        disabled={primaryAction.disabled}
        variant={primaryAction.variant}
        onClick={primaryAction.onClick}
        label={primaryAction.label}
        icon={primaryAction.icon}
        size="sm"
      />
    )
  }
  const allActions = [primaryAction, ...(secondaryActions ?? [])]
  const items =
    allActions.map((action) => ({
      label: action.label,
      value: action.label,
      icon: action.icon,
      critical: action.variant === "critical",
    })) || []

  const handleClick = (value: string) => {
    const action = allActions.find((item) => item.label === value)
    // Prevent disabled actions from executing
    if (action && !action.disabled) {
      action.onClick?.()
    }
  }

  // When there are secondary actions, don't disable the entire dropdown
  // unless all actions are disabled. This allows users to access other actions
  // even when the primary action is disabled (e.g., "Select All" is disabled
  // but "Clear" is still available)
  const allActionsDisabled = allActions.every((action) => action.disabled)

  return (
    <OneDropdownButton
      items={items}
      value={primaryAction.label}
      disabled={allActionsDisabled}
      onClick={handleClick}
      variant="outline"
      size="sm"
    />
  )
}

export const Footer = ({
  actions,
  selectAllLabel,
  clearLabel,
  disabled,
  allVisibleSelected,
  anyVisibleSelected,
  loading,
  singleSelector,
  onSelectAll,
  onClear,
}: Props) => {
  const anySelectOrClearAction =
    !singleSelector && (selectAllLabel || clearLabel)
  const anyAction = actions && actions.length > 0
  const showFooter =
    !loading && ((!singleSelector && anySelectOrClearAction) || anyAction)

  if (!showFooter) return null

  let leftButtons: React.ReactNode = undefined
  let rightButtons: React.ReactNode = undefined

  let primaryAction: Action | undefined = onSelectAll
    ? {
        label: selectAllLabel || "",
        onClick: onSelectAll,
        variant: "outline",
        disabled: disabled || allVisibleSelected,
      }
    : undefined

  let secondaryAction: Action | undefined = onClear
    ? {
        label: clearLabel || "",
        onClick: onClear,
        variant: "ghost",
        disabled: disabled || !anyVisibleSelected,
      }
    : undefined

  if (!primaryAction) {
    primaryAction = secondaryAction
    secondaryAction = undefined
  }

  if (anyAction && anySelectOrClearAction) {
    leftButtons = (
      <ListButtons
        primaryAction={primaryAction!}
        secondaryActions={secondaryAction ? [secondaryAction] : []}
      />
    )
    rightButtons = (
      <ListButtons
        primaryAction={actions[0]}
        secondaryActions={actions.slice(1)}
      />
    )
  } else if (anyAction) {
    leftButtons = (
      <ListButtons
        primaryAction={actions[0]}
        secondaryActions={actions.slice(1)}
      />
    )
  } else if (anySelectOrClearAction) {
    leftButtons = (
      <ListButtons primaryAction={primaryAction!} secondaryActions={[]} />
    )
    if (secondaryAction) {
      rightButtons = (
        <ListButtons primaryAction={secondaryAction} secondaryActions={[]} />
      )
    }
  }

  return (
    <footer className="rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl">
      <div className="flex flex-1 justify-between p-2">
        {leftButtons}
        {rightButtons}
      </div>
    </footer>
  )
}
