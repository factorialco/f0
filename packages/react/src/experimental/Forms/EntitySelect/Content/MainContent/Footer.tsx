import { F0Button } from "@/components/actions/F0Button"
import { OneDropdownButton } from "@/components/actions/F0ButtonDropdown"
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
      <F0Button
        disabled={primaryAction.disabled}
        variant={primaryAction.variant}
        onClick={primaryAction.onClick}
        label={primaryAction.label}
        icon={primaryAction.icon}
        size="sm"
      />
    )
  }
  const items =
    [primaryAction, ...(secondaryActions ?? [])].map((action) => ({
      label: action.label,
      value: action.label,
      icon: action.icon,
      critical: action.variant === "critical",
    })) || []

  const handleClick = (value: string) => {
    const action = [primaryAction, ...(secondaryActions ?? [])].find(
      (item) => item.label === value
    )
    if (action) {
      action.onClick?.()
    }
  }

  return (
    <OneDropdownButton
      items={items}
      value={primaryAction.label}
      disabled={primaryAction.disabled}
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
