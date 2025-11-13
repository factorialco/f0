import { F0Button, F0ButtonProps } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"

export type Action = {
  label: string
  onClick: () => void
  icon?: IconType
  variant?: F0ButtonProps["variant"]
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
        <F0Button
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
