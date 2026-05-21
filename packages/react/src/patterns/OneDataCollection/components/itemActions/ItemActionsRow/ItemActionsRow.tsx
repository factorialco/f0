import { F0Button } from "@/components/F0Button"
import {
  DropdownItem,
  DropdownItemSeparator,
} from "@/experimental/Navigation/Dropdown/internal"
import { cn } from "@/lib/utils"
import { ItemActionsDropdown } from "@/patterns/OneDataCollection/components/itemActions/ItemActionsDropdown"
import { ActionDefinition } from "@/patterns/OneDataCollection/item-actions"

type ItemActionsRowProps = {
  className?: string
  primaryItemActions: Exclude<ActionDefinition, DropdownItemSeparator>[]
  dropdownItemActions: DropdownItem[]
  handleDropDownOpenChange: (open: boolean) => void
}

export const ItemActionsRow = ({
  className,
  primaryItemActions,
  dropdownItemActions,
  handleDropDownOpenChange,
}: ItemActionsRowProps) => {
  return (
    <div
      className={cn(
        "pointer-events-auto items-center justify-end gap-2 md:flex",
        className
      )}
    >
      {primaryItemActions.map((action) => (
        <F0Button
          key={action.label}
          label={action.label}
          hideLabel={action.hideLabel}
          variant="outline"
          onClick={action.onClick}
          icon={action.icon}
        />
      ))}
      <ItemActionsDropdown
        align="end"
        items={dropdownItemActions}
        onOpenChange={handleDropDownOpenChange}
      />
    </div>
  )
}
