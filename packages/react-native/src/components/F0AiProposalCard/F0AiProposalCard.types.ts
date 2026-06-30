import type { ModuleId } from "../Avatars/ModuleAvatar/modules"
import type { IconType } from "../primitives/F0Icon"

export interface F0AiProposalCardBaseProps {
  /** Module avatar shown in the card header. */
  module?: ModuleId
  /** Header label describing the proposal type. */
  heading: string
  /** Main proposal title. */
  title: string
  /** Optional secondary metadata line. */
  subtitle?: string
  /** Proposal details. Truncated past maxCollapsedDescriptionLength until expanded. */
  description: string
  /** Label for the inline expansion control. */
  seeMoreLabel: string
  /** Maximum number of characters shown before expansion. Defaults to 180. */
  maxCollapsedDescriptionLength?: number
}

export interface F0AiProposalCardActions {
  /** Label for the primary action button. */
  primaryActionLabel: string
  /** Optional icon shown before the primary action label. */
  primaryActionIcon?: IconType
  /** Whether the action footer is visible. */
  showActions?: true
  /** Called when the primary action is pressed. */
  onPrimaryAction: () => void
}

export interface F0AiProposalCardHiddenActions {
  /** Hide the action footer and omit action props. */
  showActions: false
}

export type F0AiProposalCardProps = F0AiProposalCardBaseProps &
  (F0AiProposalCardActions | F0AiProposalCardHiddenActions)
