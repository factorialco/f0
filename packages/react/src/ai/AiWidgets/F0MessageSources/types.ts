/**
 * Source object for message sources
 */
export type F0Source = {
  /**
   * Title of the source
   */
  title: string
  /**
   * Optional link URL
   */
  link?: string
  /**
   * Optional icon name (from @/icons/app)
   */
  icon?: string
  /**
   * Whether to open link in new tab
   */
  targetBlank?: boolean
}

/**
 * Props for the F0MessageSources component
 */
export type F0MessageSourcesProps = {
  /**
   * Array of sources to display
   */
  sources: F0Source[]
}

/**
 * Source object for message sources action
 */
export interface MessageSourceItem {
  title: string
  link: string
  icon?: string
  targetBlank?: boolean
}

/**
 * Args for message sources action
 */
export interface MessageSourcesArgs {
  sources: MessageSourceItem[]
}
