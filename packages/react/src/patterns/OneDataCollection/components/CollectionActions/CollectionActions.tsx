import React, { useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { Ellipsis } from "@/icons/app"
import UpsellIcon from "@/icons/app/Upsell"

import {
  PrimaryActionItemDefinition,
  SecondaryActionGroup,
  SecondaryActionItem,
  UpsellActionDefinition,
} from "../../actions"

type CollectionActionProps = {
  primaryActions?: PrimaryActionItemDefinition[]
  primaryActionsLabel?: string
  secondaryActions?: SecondaryActionItem[]
  otherActions?: SecondaryActionGroup[]
  upsellAction?: UpsellActionDefinition
}

export const CollectionActions = ({
  primaryActions,
  primaryActionsLabel,
  secondaryActions,
  otherActions,
  upsellAction,
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

  // Determine if we should use dropdown mode: when any primary action has a description
  const useDropdownMode = primaryActionsButtons.some(
    (action) => action.description !== undefined
  )

  if (
    primaryActionsButtons.length === 0 &&
    secondaryActionsButtons.length === 0 &&
    dropdownItems.length === 0 &&
    !upsellAction
  )
    return null

  return (
    <div className="flex flex-row-reverse items-center gap-2">
      {useDropdownMode ? (
        <F0ButtonDropdown
          mode="dropdown"
          size="md"
          trigger={primaryActionsLabel}
          items={primaryActionsButtons.map((action, index) => ({
            label: action.label,
            icon: action.icon,
            description: action.description,
            value: index.toString(),
          }))}
          onClick={(value) => {
            primaryActionsButtons[Number(value)]?.onClick?.()
          }}
        />
      ) : primaryActionsButtons.length === 1 ? (
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

      {secondaryActionsButtons?.map((action) => {
        const tooltipText = action.tooltip?.({
          disabled: !!action.disabled,
          loading: !!action.loading,
        })

        const button = (
          <F0Button
            size="md"
            onClick={action.onClick}
            icon={action.icon}
            variant="outline"
            hideLabel={action.hideLabelWhenExpanded}
            label={action.label}
            disabled={action.disabled}
            loading={action.loading}
          />
        )

        return tooltipText ? (
          <Tooltip key={action.label} description={tooltipText}>
            {button}
          </Tooltip>
        ) : (
          <React.Fragment key={action.label}>{button}</React.Fragment>
        )
      })}

      {upsellAction && (
        <F0Button
          size="md"
          variant={upsellAction.variant ?? "outlinePromote"}
          label={upsellAction.label}
          icon={upsellAction.showIcon === false ? undefined : UpsellIcon}
          onClick={upsellAction.onClick}
          disabled={upsellAction.disabled}
        />
      )}

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
