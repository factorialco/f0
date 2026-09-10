import { ReactNode } from "react"
import { F0SegmentedControlItem } from "@/experimental/Actions/F0SegmentedControl/types"
import { DropdownItem } from "@/experimental/Navigation/Dropdown"
import { DataAttributes } from "@/global.types"
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
  /** Plain-text body. Optional when `content` carries the body instead. */
  description?: string
  /**
   * Rich body — a DataList, a form, any node. Rendered under the description
   * when both are given.
   */
  content?: ReactNode
  /**
   * Shown in the header, before the actions and chevron, and stays visible
   * while collapsed: a headline value, a tag, a DataList item. Not part of the
   * toggle target, so it can carry its own action.
   */
  summary?: ReactNode
  actions?: F0AccordionItemAction[]
  defaultOpen?: boolean
}

export interface F0AccordionProps extends WithDataTestIdProps, DataAttributes {
  items: F0AccordionItem[]
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (openIds: string[]) => void
}
