import { F0Button, F0ButtonProps } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { useI18n } from "@/lib/providers/i18n"

export type Action = {
  label: string
  onClick: () => void
  icon?: IconType
  variant?: F0ButtonProps["variant"]
  disabled?: boolean
}

interface SelectBottomActionsProps {
  actions?: Action[]
  showApplyButton?: boolean
  onApply?: () => void
}

export const SelectBottomActions = ({
  actions,
  showApplyButton,
  onApply,
}: SelectBottomActionsProps) => {
  const i18n = useI18n()

  if (!actions && !showApplyButton) return null

  return (
    <div className="flex w-full flex-row items-center gap-2 border-0 border-t border-solid border-f1-border-secondary p-2">
      {actions?.map((action) => (
        <F0Button
          key={action.label}
          variant={action.variant}
          onClick={action.onClick}
          icon={action.icon}
          label={action.label}
        />
      ))}
      {showApplyButton && (
        <div className="ml-auto">
          <F0Button onClick={onApply} label={i18n.select.applySelection} />
        </div>
      )}
    </div>
  )
}
