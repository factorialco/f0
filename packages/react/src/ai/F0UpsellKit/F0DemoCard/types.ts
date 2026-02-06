import { type ReactNode } from "react"

/**
 * Props for the F0DemoCard component
 */
export interface F0DemoCardProps {
  /**
   * Content for the preview area (embedded app preview, image, or custom content)
   */
  preview: ReactNode
  /**
   * Main title below the preview (e.g. "See Projects in action")
   */
  moduleName: string
  /**
   * Description text below the title
   */
  description: string
  /**
   * Callback when the action button is clicked. Omit when using actionHref.
   */
  onAction?: () => void
  /**
   * When set, the action button renders as a link to this URL (e.g. for copilot-driven cards).
   */
  actionHref?: string
}
