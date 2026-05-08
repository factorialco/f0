export interface F0GraphExpanderProps {
  /** Pixel size of the square button. Defaults to 24. */
  size?: number
  /** Number of children */
  count: number
  /** Whether the parent is expanded */
  expanded: boolean
  /** Click handler to toggle expand/collapse */
  onClick?: () => void
  /** Override default tabIndex on the inner button. Used by roving tabindex. */
  tabIndex?: number
  /** Override the default aria-label on the button. */
  ariaLabel?: string
  /** When true, shows a pulsing loading state (deferred children pending). */
  loading?: boolean
}
