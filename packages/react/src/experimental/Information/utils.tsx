import { OneDropdownButtonItem } from "../../components/Actions/OneDropdownButton"
import { IconType } from "../../components/F0Icon"

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
  items: OneDropdownButtonItem<T>[]
  value?: T
  onClick: (value: T, item: OneDropdownButtonItem<T>) => void
}

export interface SecondaryAction extends PrimaryActionButton {
  variant?: "outline" | "critical" | "outlinePromote" | "promote"
}
