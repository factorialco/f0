/**
 * Props for the `F0Preset` component.
 *
 * API mirrors the web `Preset` component: `label`, `number?`, `onPress?`, `selected?`.
 */
export interface F0PresetProps {
  /**
   * Text label displayed inside the preset pill.
   */
  label: string

  /**
   * Optional numeric value — when provided, an `F0Counter` pill is shown
   * to the right of the label.
   */
  number?: number

  /**
   * Press handler. When omitted the preset renders as non-interactive.
   */
  onPress?: () => void

  /**
   * Whether the preset is in the selected (active) state.
   * Controls background, border, and text color tokens.
   * @default false
   */
  selected?: boolean

  /**
   * Tailwind classes for the root pressable (layout/positioning only).
   */
  className?: string
}
