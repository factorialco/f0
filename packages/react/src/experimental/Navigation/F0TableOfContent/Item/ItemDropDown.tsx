import { ButtonInternal } from "@/components/F0Button/internal"
import { Ellipsis } from "@/icons/app"
import { Dropdown, DropdownItem } from "../../Dropdown"

interface ItemDropDownProps {
  otherActions: DropdownItem[]
  open: boolean
  setOpen: (open: boolean) => void
  disabled?: boolean
}

export function ItemDropDown({
  otherActions,
  open,
  setOpen,
  disabled,
}: ItemDropDownProps) {
  return (
    <Dropdown
      items={otherActions.map((action): DropdownItem => {
        if ("type" in action && action.type === "separator") {
          return action as DropdownItem
        }
        return {
          ...action,
          type: "item" as const,
        } as DropdownItem
      })}
      open={open}
      onOpenChange={setOpen}
    >
      <ButtonInternal
        icon={Ellipsis}
        label="Actions"
        hideLabel
        variant="ghost"
        pressed={open}
        size="sm"
        disabled={disabled}
      />
    </Dropdown>
  )
}
