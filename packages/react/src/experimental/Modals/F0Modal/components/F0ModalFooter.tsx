import { F0Button } from "@/components/F0Button"
import { F0ModalActionsProps } from "../types"

export const F0ModalFooter = ({
  primaryAction,
  secondaryAction,
}: F0ModalActionsProps) => {
  const hasSecondaryAction = secondaryAction
  const hasPrimaryAction = primaryAction

  if (!hasPrimaryAction && !hasSecondaryAction) {
    return null
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
          />
        )}
        {hasPrimaryAction && (
          <F0Button
            label={primaryAction.label}
            onClick={primaryAction.onClick}
            variant="default"
            icon={primaryAction.icon}
            disabled={primaryAction.disabled}
          />
        )}
      </div>
    </div>
  )
}
