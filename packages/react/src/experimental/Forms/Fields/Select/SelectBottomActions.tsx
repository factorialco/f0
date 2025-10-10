import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/F0Icon"
import { ButtonVariant } from "@/ui/button"

export type Action = {
  label: string
  onClick: () => void
  icon?: IconType
  variant?: ButtonVariant
  disabled?: boolean
}

interface SelectBottomActionsProps {
  actions?: Action[]
}

export const SelectBottomActions = ({ actions }: SelectBottomActionsProps) => {
  if (!actions) return null
  return (
    <div className="flex w-full flex-row gap-2 border-0 border-t border-solid border-f1-border-secondary p-2">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.variant}
          onClick={action.onClick}
          icon={action.icon}
          label={action.label}
        />
      ))}
    </div>
  )
}
