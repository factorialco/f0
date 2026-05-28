import { F0Button } from "@/components/F0Button"
import { F0SegmentedControl } from "@/experimental/Actions/F0SegmentedControl"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { EllipsisHorizontal } from "@/icons/app"

import { F0AccordionItemAction } from "../types"

interface AccordionActionsProps {
  actions: F0AccordionItemAction[]
}

export const AccordionActions = ({ actions }: AccordionActionsProps) => {
  return (
    <div className="flex items-center gap-2">
      {actions.map((action, index) => {
        switch (action.type) {
          case "segmentedControl":
            return (
              <F0SegmentedControl
                key={index}
                items={action.items}
                value={action.value}
                onChange={action.onChange}
                disabled={action.disabled}
                ariaLabel={action.ariaLabel}
              />
            )
          case "dropdown":
            return (
              <Dropdown
                key={index}
                items={action.items}
                disabled={action.disabled}
              >
                <F0Button
                  variant="outline"
                  size="sm"
                  icon={EllipsisHorizontal}
                  label={action.ariaLabel}
                  hideLabel
                  disabled={action.disabled}
                />
              </Dropdown>
            )
        }
      })}
    </div>
  )
}
