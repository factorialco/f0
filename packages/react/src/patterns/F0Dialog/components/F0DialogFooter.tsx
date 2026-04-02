import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"

import {
  F0DialogActionsProps,
  F0DialogPrimaryAction,
  F0DialogPrimaryActionItem,
} from "../types"

const isPrimaryActionArray = (
  action: F0DialogPrimaryAction | F0DialogPrimaryActionItem[]
): action is F0DialogPrimaryActionItem[] => {
  return Array.isArray(action)
}

export const F0DialogFooter = ({
  primaryAction,
  secondaryAction,
}: F0DialogActionsProps) => {
  const hasSecondaryAction = secondaryAction
  const hasPrimaryAction = primaryAction

  if (!hasPrimaryAction && !hasSecondaryAction) {
    return null
  }

  const renderPrimaryAction = () => {
    if (!hasPrimaryAction) return null

    if (isPrimaryActionArray(primaryAction)) {
      return (
        <F0ButtonDropdown
          items={primaryAction.map((action) => ({
            value: action.value,
            label: action.label,
            icon: action.icon,
            disabled: action.disabled,
            loading: action.loading,
          }))}
          onClick={(value) => {
            const action = primaryAction.find((a) => a.value === value)
            action?.onClick()
          }}
          variant="default"
        />
      )
    }

    return (
      <F0Button
        label={primaryAction.label}
        onClick={primaryAction.onClick}
        variant="default"
        icon={primaryAction.icon}
        disabled={primaryAction.disabled}
        loading={primaryAction.loading}
      />
    )
  }

  return (
    <div className="flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3">
      <div className="flex-1" />
      <div className="flex flex-row items-center gap-2">
        {hasSecondaryAction && (
          <F0Button
            label={secondaryAction.label}
            onClick={secondaryAction.onClick}
            variant="outline"
            icon={secondaryAction.icon}
            disabled={secondaryAction.disabled}
            loading={secondaryAction.loading}
          />
        )}
        {renderPrimaryAction()}
      </div>
    </div>
  )
}
