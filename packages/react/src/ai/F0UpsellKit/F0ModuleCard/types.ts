/**
 * Props for the F0ModuleCard component
 */
export interface F0ModuleCardProps {
  /**
   * Module id for the icon (e.g. "projects", "company_projects"). Renders F0AvatarModule.
   */
  module: string
  /**
   * Card title (e.g. "Projects")
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
   * When set, the action button renders as a link to this URL.
   */
  actionHref?: string
}
