import { cn, focusRing } from "@/lib/utils"
import { useState } from "react"
import { Icon } from "../../../components/Utilities/Icon"
import { Ellipsis } from "../../../icons/app"
import { Dropdown } from "../../Navigation/Dropdown"
import { ItemActionsDefinition, filterItemActions } from "../item-actions"
import { RecordType } from "../types"

export const ActionsDropdown = <
  Record extends RecordType,
  ItemActions extends ItemActionsDefinition<Record>,
>({
  item,
  actions,
}: {
  item: Record
  actions: ItemActions
}) => {
  const [open, setOpen] = useState(false)

  if (!actions || actions.length === 0) return null

  const items = filterItemActions(actions, item)

  if (items.length === 0) {
    return null
  }

  return (
    <Dropdown
      items={items.map((item) => {
        if (item.type === "separator") {
          return item
        }
        return {
          ...item,
          type: "item",
        }
      })}
      open={open}
      onOpenChange={setOpen}
    >
      <button
        title="Actions"
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded text-f1-icon-bold hover:bg-f1-background-secondary",
          open && "bg-f1-background-secondary",
          focusRing("focus-visible:ring-inset")
        )}
      >
        <Icon icon={Ellipsis} />
        <label className="sr-only">Actions</label>
      </button>
    </Dropdown>
  )
}
