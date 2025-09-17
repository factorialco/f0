import { F0Button } from "@/components/actions/F0Button"
import { ButtonInternal } from "@/components/actions/F0Button/internal"
import { Ellipsis } from "@/icons/app"
import { useState } from "react"
import { Dropdown } from "../../Navigation/Dropdown"
import {
  PrimaryActionsDefinition,
  SecondaryActionsItemDefinition,
} from "../actions"

type CollectionActionProps = {
  primaryActions?: ReturnType<PrimaryActionsDefinition>
  secondaryActions?: SecondaryActionsItemDefinition[]
  otherActions?: SecondaryActionsItemDefinition[]
}

export const CollectionActions = ({
  primaryActions,
  secondaryActions,
  otherActions,
}: CollectionActionProps) => {
  const primaryActionsButton = (primaryActions && [primaryActions]) || []
  const secondaryActionsButtons = (secondaryActions || []).filter(
    (action) => action.type !== "separator"
  )
  const dropdownActions = otherActions || []

  const [open, onOpenChange] = useState(false)

  if (
    primaryActionsButton.length === 0 &&
    secondaryActionsButtons.length === 0 &&
    dropdownActions.length === 0
  )
    return null

  return (
    <div className="flex flex-row-reverse items-center gap-2">
      {primaryActionsButton.map((action) => (
        <F0Button
          size="md"
          key={action.label}
          onClick={action.onClick}
          icon={action.icon}
          variant="default"
          label={action.label}
        />
      ))}

      {secondaryActionsButtons?.map((action) => (
        <F0Button
          size="md"
          key={action.label}
          onClick={action.onClick}
          icon={action.icon}
          variant="outline"
          hideLabel={action.hideLabelWhenExpanded}
          label={action.label}
        />
      ))}

      {dropdownActions.length > 0 && (
        <Dropdown
          items={dropdownActions}
          align="end"
          open={open}
          onOpenChange={onOpenChange}
        >
          <ButtonInternal
            variant="outline"
            icon={Ellipsis}
            label="Actions"
            hideLabel
            pressed={open}
          />
        </Dropdown>
      )}
    </div>
  )
}
