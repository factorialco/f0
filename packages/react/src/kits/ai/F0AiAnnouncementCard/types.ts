import type { IconType } from "@/components/F0Icon"
import type { DataAttributes } from "@/global.types"

/**
 * The action that takes the user into the capability. It carries no icon of its
 * own: it always renders as the AI button with the One mark, because that is
 * the promise the card is making.
 */
export interface AnnouncementPrimaryAction {
  /** Button label. */
  label: string
  /** Called when the button is clicked. */
  onClick: () => void
}

export interface AnnouncementSecondaryAction {
  /** Button label. */
  label: string
  /** Called when the button is clicked. */
  onClick: () => void
  /** Optional icon shown before the label. */
  icon?: IconType
}

export interface F0AiAnnouncementCardProps extends DataAttributes {
  /** What the capability does, in the user's terms. */
  title: string
  /** One or two sentences of detail. Clamped to two lines. */
  description: string
  /**
   * Image or video shown above the text at 16:9. A `.mp4` source renders as a
   * muted, looping, autoplaying video. Omit it for a text-only announcement.
   */
  mediaUrl?: string
  /**
   * The action that takes the user into the capability. Rendered as the AI
   * button, because that is what an announcement is for — anything else is a
   * sign this should be a different component.
   */
  primaryAction?: AnnouncementPrimaryAction
  /** An opt-out alongside the primary action. Rendered borderless. */
  secondaryAction?: AnnouncementSecondaryAction
  /**
   * Shows a dismiss control in the top-right corner and is called when it is
   * used. The card removes itself; the consumer decides whether it comes back.
   */
  onClose?: () => void
  /** Renders the placeholder in the card's own shape. */
  isLoading?: boolean
  /**
   * Rendered into the actions row after the two actions. For consumers that
   * dispatch their own buttons — CMS-driven content, for instance — and cannot
   * express them as `AnnouncementAction`.
   */
  children?: React.ReactNode
}
