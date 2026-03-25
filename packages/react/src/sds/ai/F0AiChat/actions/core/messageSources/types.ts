/**
 * Source object for message sources
 */
export type Source = {
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
export type MessageSourcesProps = {
  /**
   * Array of sources to display
   */
  sources: Source[]
}
