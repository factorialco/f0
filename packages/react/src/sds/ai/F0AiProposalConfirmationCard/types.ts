import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type { IconType } from "@/components/F0Icon"

export interface F0AiProposalConfirmationCardProps extends DataAttributes {
  /** Module avatar shown in the card header. */
  module?: ModuleId
  /** Header label describing the proposal type. */
  heading: string
  /** Main proposal title. */
  title: string
  /** Optional secondary metadata line. */
  subtitle?: string
  /** Proposal details. Line breaks are preserved when expanded. */
  description: string
  /** Label for the inline expansion control. */
  seeMoreLabel: string
  /** Label for the primary action button. */
  primaryActionLabel: string
  /** Label for the secondary action button. */
  secondaryActionLabel: string
  /** Optional icon shown before the primary action label. */
  primaryActionIcon?: IconType
  /** Whether the action footer is visible. */
  showActions?: boolean
  /** Called when the primary action is clicked. */
  onPrimaryAction: () => void
  /** Called when the secondary action is clicked. */
  onSecondaryAction: () => void
  /** Maximum number of characters shown before expansion. */
  maxCollapsedDescriptionLength?: number
}
