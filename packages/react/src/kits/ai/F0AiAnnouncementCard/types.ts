import type { IconType } from "@/components/F0Icon"
import type { DataAttributes } from "@/global.types"

export interface AnnouncementAction {
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
  /** The action that takes the user into the capability. Rendered bordered. */
  primaryAction?: AnnouncementAction
  /** An opt-out alongside the primary action. Rendered borderless. */
  secondaryAction?: AnnouncementAction
  /**
   * Shows a dismiss control in the top-right corner and is called when it is
   * used. The card removes itself; the consumer decides whether it comes back.
   */
  onClose?: () => void
  /** Renders the placeholder in the card's own shape. */
  isLoading?: boolean
  /**
   * Rendered into the actions row after the two actions. For consumers whose
   * buttons are decided at runtime rather than at build time — authored
   * content, a feature flag, a permission check — and so cannot be expressed
   * as a `primaryAction`/`secondaryAction` pair.
   */
  children?: React.ReactNode
}
