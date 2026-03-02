/**
 * Props for the F0ModuleCard component
 */
export interface F0ModuleCardProps {
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
  /**
   * Optional image source for the avatar
   */
  imageSrc?: string
}

/**
 * Args for module card action
 */
export interface ModuleCardArgs {
  /** Module id for the icon (e.g. company_projects, benefits, projects) */
  module: string
  /** Card title (e.g. "Projects") */
  moduleName: string
  /** Description text below the title */
  description: string
  /** Optional URL for the action button (redirect) */
  actionHref?: string
  /** Optional image source for the avatar */
  imageSrc?: string
}
