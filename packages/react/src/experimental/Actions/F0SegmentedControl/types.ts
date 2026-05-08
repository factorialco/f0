import { IconType } from "@/components/F0Icon"

export interface F0SegmentedControlItem {
  /** Unique value for this segment */
  value: string
  /** Label displayed inside the segment */
  label: string
  /** Optional icon shown before the label */
  icon?: IconType
  /** Whether this specific segment is disabled */
  disabled?: boolean
}

export interface F0SegmentedControlProps {
  /** The list of segments to render */
  items: F0SegmentedControlItem[]
  /** Currently selected value */
  value?: string
  /** Callback fired when the selected segment changes */
  onChange?: (value: string) => void
  /**
   * Whether the control is disabled entirely.
   * @default false
   */
  disabled?: boolean
  /**
   * Whether the control should expand to fill the container width.
   * @default false
   */
  fullWidth?: boolean
}
