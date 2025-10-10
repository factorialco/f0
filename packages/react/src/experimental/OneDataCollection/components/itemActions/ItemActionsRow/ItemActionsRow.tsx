import { Button } from "@/components/Actions/Button"
import {
  DropdownItem,
  DropdownItemSeparator,
} from "@/experimental/Navigation/Dropdown/internal"
import { ItemActionsDropdown } from "@/experimental/OneDataCollection/components/itemActions/ItemActionsDropdown"
import { ActionDefinition } from "@/experimental/OneDataCollection/item-actions"
import { cn } from "@/lib/utils"

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
    <aside className={cn("items-center justify-end gap-2 md:flex", className)}>
      {primaryItemActions.map((action) => (
        <Button
          key={action.label}
          label={action.label}
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
    </aside>
  )
}
