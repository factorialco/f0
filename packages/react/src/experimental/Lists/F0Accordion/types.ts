import { F0SegmentedControlItem } from "@/experimental/Actions/F0SegmentedControl/types"
import { DropdownItem } from "@/experimental/Navigation/Dropdown"
import { WithDataTestIdProps } from "@/lib/data-testid"

export interface F0AccordionItemSegmentedControlAction {
  type: "segmentedControl"
  ariaLabel: string
  items: F0SegmentedControlItem[]
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export interface F0AccordionItemDropdownAction {
  type: "dropdown"
  ariaLabel: string
  items: DropdownItem[]
  disabled?: boolean
}

export type F0AccordionItemAction =
  | F0AccordionItemSegmentedControlAction
  | F0AccordionItemDropdownAction

export interface F0AccordionItem {
  id: string
  title: string
  description: string
  actions?: F0AccordionItemAction[]
  defaultOpen?: boolean
}

export interface F0AccordionProps extends WithDataTestIdProps {
  items: F0AccordionItem[]
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (openIds: string[]) => void
}
