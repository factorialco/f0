/**
 * Props for the F0HILActionConfirmation component
 */
export type F0HILActionConfirmationProps = {
  /**
   * Optional descriptive text shown above the action buttons
   */
  text?: string
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
