import { DropdownItem } from "@/experimental/Navigation/Dropdown/internal"
import { cn } from "@/lib/utils"
import { ItemActionsDropdown } from "../ItemActionsDropdown"

export type ItemActionsMobileProps = {
  items: DropdownItem[]
  onOpenChange?: (open: boolean) => void
  className?: string
}

export const ItemActionsMobile = ({ items, onOpenChange, className }: ItemActionsMobileProps) => {
  return (
    <div className={cn(className)}>
      <ItemActionsDropdown
        label="Mobile Actions"
        align="end"
        items={items}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}
