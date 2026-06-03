/**
 * Props for the F0HILActionConfirmation component
 */
export type F0HILActionConfirmationProps = {
  /**
   * The confirmation text shown alongside the action buttons. Required — an
   * action confirmation must always state what is being confirmed.
   */
  text: string
  /**
   * Text displayed on the confirmation button
   */
  confirmationText: string
  /**
   * Callback fired when the confirmation button is clicked
   */
  onConfirm: () => void
  /**
   * Text displayed on the cancel button
   */
  cancelText: string
  /**
   * Callback fired when the cancel button is clicked
   */
  onCancel: () => void
}
