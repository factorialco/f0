import { AriaAttributes, ReactNode } from "react"

import { IconType } from "@/components/F0Icon"
import { NumberInputProps } from "@/experimental/Forms/Fields/NumberInput"

/**
 * Configuration for the popover trigger button.
 * All fields are optional — defaults to a Calculator icon, bottom/start placement.
 */
export interface F0AmountCalculatorPopoverConfig {
  /**
   * Icon rendered on the trigger button.
   * Defaults to the Calculator icon.
   */
  icon?: IconType
  /**
   * Side of the trigger to place the popover.
   * @default "bottom"
   */
  side?: "top" | "bottom" | "left" | "right"
  /**
   * Alignment of the popover relative to the trigger.
   * @default "start"
   */
  align?: "start" | "center" | "end"
  /**
   * Controls whether the popover is open (controlled mode).
   * Use together with `onOpenChange`.
   */
  open?: boolean
  /**
   * Called when the popover's open state changes.
   */
  onOpenChange?: (open: boolean) => void
  /**
   * Label rendered on the trigger button.
   * When omitted the button is icon-only (accessible label from the field's
   * `label` prop is used as `aria-label` via `hideLabel`).
   * When provided the text is shown next to the icon regardless of the
   * field-level `hideLabel` prop.
   */
  triggerLabel?: string
  /**
   * Value commit behavior for popover mode.
   * - `"immediate"` (default): calls `onChange` on every input change.
   * - `"deferred"`: keeps edits local and commits only when Apply is clicked.
   */
  commitMode?: "immediate" | "deferred"
  /**
   * Optional Apply button configuration.
   *
   * When omitted and `commitMode` is `"deferred"`, an Apply button is still
   * rendered with default values.
   */
  apply?: {
    /**
     * Visible label of the Apply button.
     * @default "Apply"
     */
    label?: string
    /**
     * Icon shown in the Apply button.
     * @default Check
     */
    icon?: IconType
    /**
     * Whether to close the popover after Apply is clicked.
     * @default true
     */
    closeOnApply?: boolean
  }
}

/**
 * Shared base props for F0AmountCalculator.
 */
export interface F0AmountCalculatorBaseProps extends NumberInputProps {
  /**
   * HTML id forwarded to the underlying input element.
   * Used by F0Form to associate labels and ARIA attributes.
   */
  id?: string
  /**
   * ARIA attribute linking this input to an external description element.
   * Injected by F0Form's FormControl.
   */
  "aria-describedby"?: string
  /**
   * ARIA attribute indicating whether the input has a validation error.
   * Injected by F0Form's FormControl.
   */
  "aria-invalid"?: AriaAttributes["aria-invalid"]
  /**
   * Optional content rendered to the right of the input (e.g. "of 300,00 €").
   * Controlled entirely by the consuming component.
   */
  extraContent?: ReactNode
  /**
   * Controls the width of the inner NumberInput element.
   * - `"auto"` (default) — shrink-wraps to content
   * - Any valid CSS width string (e.g. `"160px"`, `"12rem"`, `"50%"`)
   */
  inputWidth?: string
  /**
   * When provided, the component renders as a popover triggered by an icon
   * button. Pass an empty object `{}` to use all defaults (Calculator icon,
   * bottom/start placement, uncontrolled).
   *
   * When omitted the component renders inline as a standard form field.
   */
  popover?: F0AmountCalculatorPopoverConfig
}

export type F0AmountCalculatorProps = F0AmountCalculatorBaseProps
