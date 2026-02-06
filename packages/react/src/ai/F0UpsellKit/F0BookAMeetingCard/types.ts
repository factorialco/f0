/**
 * Person avatar data for the expert list
 */
export interface BookAMeetingCardAvatar {
  firstName: string
  lastName: string
  src?: string
}

/**
 * Props for the F0BookAMeetingCard component
 */
export interface F0BookAMeetingCardProps {
  /**
   * Callback when the action button is clicked. Omit when using actionHref.
   */
  onAction?: () => void
  /**
   * When set, the action button renders as a link to this URL.
   */
  actionHref?: string
}
