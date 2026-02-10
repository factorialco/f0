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

/**
 * Avatar item for book a meeting card action
 */
export interface BookAMeetingCardActionAvatar {
  firstName: string
  lastName: string
  src?: string
}

/**
 * Args for book a meeting card action
 */
export interface BookAMeetingCardArgs {
  title: string
  schedule: string
  actionLabel: string
  /** Optional URL for the action button (e.g. booking page) */
  actionHref?: string
  /** Link target when actionHref is set (e.g. "_blank") */
  actionTarget?: "_blank" | "_self" | "_parent" | "_top"
  /** List of expert avatars (firstName, lastName, optional src). Shows +N when length > maxAvatars. */
  avatars?: BookAMeetingCardActionAvatar[]
  /** Max avatars to show before +N counter; default 3 */
  maxAvatars?: number
}
