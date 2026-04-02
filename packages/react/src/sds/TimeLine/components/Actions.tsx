import { F0Button } from "@/components/F0Button"
import { Dropdown } from "@/patterns/Navigation/Dropdown"

import type { F0TimelineRowAction, F0TimelineRowOtherAction } from "../types"

export const Actions = ({
  primaryAction,
  secondaryActions,
  otherActions,
}: {
  primaryAction?: F0TimelineRowAction
  secondaryActions?: F0TimelineRowAction[]
  otherActions?: F0TimelineRowOtherAction[]
}) => {
  const hasSecondary = secondaryActions && secondaryActions.length > 0
  const hasOther = otherActions && otherActions.length > 0

  return (
    <div className="flex flex-col gap-2 xs:flex-row xs:items-center [&>*]:w-full [&>*]:xs:w-auto">
      {hasOther && <Dropdown items={otherActions} size="md" />}
      {secondaryActions?.map((action, index) => (
        <F0Button
          key={`${action.label}-${index}`}
          label={action.label}
          icon={action.icon}
          variant="outline"
          size="md"
          onClick={action.onClick}
          disabled={action.disabled}
          loading={action.loading}
        />
      ))}
      {primaryAction && (hasOther || hasSecondary) && (
        <div className="mx-1 hidden h-4 w-px bg-f1-background-secondary-hover xs:block" />
      )}
      {primaryAction && (
        <F0Button
          label={primaryAction.label}
          icon={primaryAction.icon}
          variant="default"
          size="md"
          onClick={primaryAction.onClick}
          disabled={primaryAction.disabled}
          loading={primaryAction.loading}
        />
      )}
    </div>
  )
}
