import { Button } from "@/components/Actions/Button"
import { OneDropdownButton } from "@/components/Actions/OneDropdownButton"
import { Ellipsis } from "@/icons/app"
import { useState } from "react"
import { Dropdown } from "../../../Navigation/Dropdown"
import {
  PrimaryActionsDefinition,
  SecondaryActionsItemDefinition,
} from "../../actions"

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
  const primaryActionsButtons = (
    Array.isArray(primaryActions) ? primaryActions : [primaryActions]
  ).filter((item) => item !== undefined)

  const secondaryActionsButtons = (secondaryActions || []).filter(
    (action) => action.type !== "separator"
  )
  const dropdownActions = otherActions || []

  const [open, onOpenChange] = useState(false)

  if (
    primaryActionsButtons.length === 0 &&
    secondaryActionsButtons.length === 0 &&
    dropdownActions.length === 0
  )
    return null

  return (
    <div className="flex flex-row-reverse items-center gap-2">
      {primaryActionsButtons.length === 1 ? (
        <Button
          size="md"
          onClick={primaryActionsButtons[0].onClick}
          icon={primaryActionsButtons[0].icon}
          variant="default"
          label={primaryActionsButtons[0].label}
        />
      ) : (
        <OneDropdownButton
          size="md"
          items={primaryActionsButtons.map((action, index) => ({
            label: action.label,
            icon: action.icon,
            value: index.toString(),
          }))}
          onClick={(value) => {
            primaryActionsButtons[Number(value)]?.onClick?.()
          }}
        />
      )}

      {secondaryActionsButtons?.map((action) => (
        <Button
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
          <Button
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
