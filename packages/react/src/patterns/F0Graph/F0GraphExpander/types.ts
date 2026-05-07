export interface F0GraphExpanderProps {
  /** Pixel size of the square button. Defaults to 24. */
  size?: number
  /** Avatar data of child nodes */
  avatars?: { firstName: string; lastName: string; src?: string }[]
  /** Number of children */
  count: number
  /** Whether the parent is expanded */
  expanded: boolean
  /** Click handler to toggle expand/collapse */
  onClick?: () => void
}
