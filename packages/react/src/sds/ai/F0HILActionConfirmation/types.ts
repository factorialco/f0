import type { F0CardRowProps } from "@/components/F0Card"

/**
 * Props for the F0HILActionConfirmation component.
 *
 * Renders an inline approve/reject row built on `F0CardRow`'s confirm/reject
 * variant: the prompt as the row title, with icon-only ✓ (confirm) and ✗
 * (reject) buttons at the trailing edge.
 */
export type F0HILActionConfirmationProps = {
  /**
   * The prompt shown as the row title (e.g. the action awaiting confirmation).
   */
  text?: string
  /**
   * Optional secondary line shown beneath the title (single line, truncated).
   */
  description?: F0CardRowProps["description"]
  /**
   * Optional avatar rendered on the left of the row. Accepts any avatar type in
   * the system (person, company, team, file, icon, emoji, …).
   */
  avatar?: F0CardRowProps["avatar"]
  /**
   * Container width at which the ✓/✗ actions drop onto their own line instead of
   * staying inline. Prevents the buttons from overlapping the prompt in narrow
   * containers. Set to `"never"` to keep them inline at every width.
   * @default "sm"
   */
  stackAt?: F0CardRowProps["stackAt"]
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
