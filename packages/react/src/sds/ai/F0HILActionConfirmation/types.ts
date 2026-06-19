import type { F0CardHorizontalProps } from "@/experimental/F0CardHorizontal"

/**
 * Props for the F0HILActionConfirmation component.
 *
 * Renders an inline approve/reject row built on `F0CardHorizontal`'s confirm/reject
 * variant: the prompt as the row title, with icon-only ✓ (confirm) and ✗
 * (reject) buttons at the trailing edge.
 */
export type F0HILActionConfirmationProps = {
  /**
   * The prompt shown as the row title (e.g. the action awaiting confirmation).
   * Required — a confirmation without a prompt has no meaning.
   */
  text: string
  /**
   * Optional secondary line shown beneath the title (single line, truncated).
   */
  description?: F0CardHorizontalProps["description"]
  /**
   * Optional avatar rendered on the left of the row. Accepts any avatar type in
   * the system (person, company, team, file, icon, emoji, …).
   */
  avatar?: F0CardHorizontalProps["avatar"]
  /**
   * Container width at which the ✓/✗ actions drop onto their own line instead of
   * staying inline. Prevents the buttons from overlapping the prompt in narrow
   * containers. Set to `"never"` to keep them inline at every width.
   * @default "sm"
   */
  stackAt?: F0CardHorizontalProps["stackAt"]
  /**
   * Accessible label and tooltip for the confirm (✓) button.
   */
  confirmationText: string
  /**
   * Callback fired when the confirm button is clicked.
   */
  onConfirm: () => void
  /**
   * Accessible label and tooltip for the reject (✗) button.
   */
  cancelText: string
  /**
   * Callback fired when the reject button is clicked.
   */
  onCancel: () => void
}
