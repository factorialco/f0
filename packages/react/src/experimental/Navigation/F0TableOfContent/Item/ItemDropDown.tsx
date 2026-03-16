import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import { Check, Ellipsis } from "@/icons/app"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import { TOCItemAction } from "../types"

interface ItemDropDownProps {
  otherActions: TOCItemAction[]
  open: boolean
  setOpen: (open: boolean) => void
  disabled?: boolean
}

function renderAction(action: TOCItemAction, index: number) {
  if ("type" in action) {
    if (action.type === "separator") {
      return <DropdownMenuSeparator key={`sep-${index}`} />
    }

    if (action.type === "label") {
      return (
        <DropdownMenuLabel
          key={`label-${index}`}
          className="p-4 pb-2 font-medium text-f1-foreground-secondary"
        >
          {action.text}
        </DropdownMenuLabel>
      )
    }

    if (action.type === "toggle") {
      return (
        <DropdownMenuGroup key={`toggle-${index}`}>
          <DropdownMenuItem
            className="!pb-2.5 pr-4"
            onClick={(e) => {
              e.preventDefault()
              action.onCheckedChange(!action.checked)
            }}
          >
            <div className="flex w-full flex-row items-center gap-2">
              {action.icon && <F0Icon icon={action.icon} color="default" />}
              <span className="flex-1">{action.label}</span>
              <Switch
                title={action.label}
                checked={action.checked}
                onCheckedChange={action.onCheckedChange}
                hideLabel
              />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      )
    }

    if (action.type === "submenu") {
      return (
        <DropdownMenuGroup key={`submenu-${index}`}>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover">
              <div className="flex w-full flex-row items-center gap-2">
                {action.icon && <F0Icon icon={action.icon} color="default" />}
                <span className="flex-1 text-base font-medium">
                  {action.label}
                </span>
                {action.selectedLabel && (
                  <span className="mr-1 text-base text-f1-foreground-secondary">
                    {action.selectedLabel}
                  </span>
                )}
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {action.children.map((child, childIndex) =>
                  renderAction(child, childIndex)
                )}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      )
    }
  }

  // Default: clickable action item
  const item = action as Extract<
    TOCItemAction,
    { label: string; onClick: () => void }
  >
  return (
    <DropdownMenuItem
      key={`item-${index}`}
      onClick={item.onClick}
      className={cn(item.critical && "text-f1-foreground-critical")}
    >
      <div className="flex w-full flex-row items-center gap-2">
        {item.icon && <F0Icon icon={item.icon} />}
        <span className="flex-1">{item.label}</span>
        {item.selected && <F0Icon icon={Check} color="default" />}
      </div>
    </DropdownMenuItem>
  )
}

export function ItemDropDown({
  otherActions,
  open,
  setOpen,
  disabled,
}: ItemDropDownProps) {
  // Check if actions use advanced types (toggle, submenu, label)
  const hasAdvancedActions = otherActions.some(
    (a) =>
      "type" in a &&
      (a.type === "toggle" || a.type === "submenu" || a.type === "label")
  )

  // Group actions: separate label/toggle/submenu from simple action items
  // When there are advanced actions, wrap trailing simple items in a group
  const renderActions = () => {
    if (!hasAdvancedActions) {
      // Simple mode: render all as basic items
      return otherActions.map((action, index) => renderAction(action, index))
    }

    return otherActions.map((action, index) => renderAction(action, index))
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger tabIndex={-1} asChild>
        <ButtonInternal
          icon={Ellipsis}
          label="Actions"
          hideLabel
          variant="ghost"
          pressed={open}
          size="sm"
          disabled={disabled}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="start">
        {renderActions()}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
