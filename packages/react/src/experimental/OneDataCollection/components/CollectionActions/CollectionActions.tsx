import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Ellipsis } from "@/icons/app"
import { useMemo, useState } from "react"
import {
  PrimaryActionItemDefinition,
  SecondaryActionGroup,
  SecondaryActionItem,
} from "../../actions"

type CollectionActionProps = {
  primaryActions?: PrimaryActionItemDefinition[]
  secondaryActions?: SecondaryActionItem[]
  otherActions?: SecondaryActionGroup[]
}

export const CollectionActions = ({
  primaryActions,
  secondaryActions,
  otherActions,
}: CollectionActionProps) => {
  const primaryActionsButtons = (
    Array.isArray(primaryActions) ? primaryActions : [primaryActions]
  ).filter((item) => item !== undefined)

  const secondaryActionsButtons = secondaryActions || []

  const dropdownItems = useMemo(
    () =>
      (otherActions || [])
        .map((group) => group.items)
        .reduce<DropdownItem[]>((acc, curr) => {
          if (acc.length > 0) {
            acc.push({ type: "separator" })
          }
          acc.push(...curr)
          return acc
        }, []),
    [otherActions]
  )

  const [open, onOpenChange] = useState(false)

  if (
    primaryActionsButtons.length === 0 &&
    secondaryActionsButtons.length === 0 &&
    dropdownItems.length === 0
  )
    return null

  return (
    <div className="flex flex-row-reverse items-center gap-2">
      {primaryActionsButtons.length === 1 ? (
        <F0Button
          size="md"
          onClick={primaryActionsButtons[0].onClick}
          icon={primaryActionsButtons[0].icon}
          variant="default"
          label={primaryActionsButtons[0].label}
          loading={primaryActionsButtons[0].loading}
          disabled={primaryActionsButtons[0].disabled}
        />
      ) : (
        primaryActionsButtons.length > 1 && (
          <F0ButtonDropdown
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
        )
      )}

      {secondaryActionsButtons?.map((action) => (
        <F0Button
          size="md"
          key={action.label}
          onClick={action.onClick}
          icon={action.icon}
          variant="outline"
          hideLabel={action.hideLabelWhenExpanded}
          label={action.label}
          disabled={action.disabled}
          loading={action.loading}
        />
      ))}

      {dropdownItems.length > 0 && (
        <Dropdown
          items={dropdownItems}
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
