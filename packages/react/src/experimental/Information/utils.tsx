import { ButtonDropdownItem } from "@/components/F0ButtonDropdown"
import { IconType } from "@/components/F0Icon"

export interface PrimaryAction {
  disabled?: boolean
  tooltip?: string
  isVisible?: boolean
}
export interface PrimaryActionButton extends PrimaryAction {
  label: string
  icon?: IconType
  onClick: () => void
}

export interface PrimaryDropdownAction<T> extends PrimaryAction {
  items: ButtonDropdownItem<T>[]
  value?: T
  onClick: (value: T, item: ButtonDropdownItem<T>) => void
}

export interface SecondaryAction extends PrimaryActionButton {
  variant?: "outline" | "critical" | "outlinePromote" | "promote"
}
