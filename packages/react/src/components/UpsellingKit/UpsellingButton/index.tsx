import { useState } from "react"

import { F0Button, F0ButtonProps } from "@/components/F0Button"
import { withDataTestId } from "@/lib/data-testid"
import {
  ErrorMessageProps,
  NextStepsProps,
  SuccessMessageProps,
  UpsellRequestResponseDialog,
} from "@/components/UpsellingKit/UpsellRequestResponseDialog"
import UpsellIcon from "@/icons/app/Upsell"

export interface LoadingStateProps {
  label: string
}

export interface UpsellingButtonProps extends Omit<F0ButtonProps, "icon"> {
  variant?: "promote" | "outlinePromote"
  /**
   * The text to be displayed in the button
   */
  label: string
  /**
   * Whether to show the Upsell icon. Defaults to true.
   */
  showIcon?: boolean
  /**
   * Function to be executed when the button is clicked
   */
  onRequest?: () => Promise<void> | void
  /**
   * Whether to show the confirmation dialog after the request
   */
  showConfirmation?: boolean
  /**
   * The error message to be displayed in the confirmation dialog
   */
  errorMessage: ErrorMessageProps
  /**
   * The success message to be displayed in the confirmation dialog
   */
  successMessage: SuccessMessageProps
  /**
   * The label to be displayed in the button when the request is being processed
   */
  loadingState: LoadingStateProps
  /**
   * The next steps to be displayed in the confirmation dialog
   */
  nextSteps: NextStepsProps
  /**
   * The label to be displayed in the close button of the confirmation dialog
   */
  closeLabel: string
  /**
   * Callback to notify when the modal state changes (open/closed)
   */
  onModalStateChange?: (isOpen: boolean) => void
  /**
   * Portal container for the confirmation dialog
   */
  portalContainer?: HTMLElement | null
}

type ResponseStatus = "success" | "error" | null

function _UpsellingButton({
  label,
  showIcon = true,
  onRequest,
  showConfirmation = true,
  loading: externalLoading,
  errorMessage,
  successMessage,
  loadingState,
  nextSteps,
  closeLabel,
  variant = "promote",
  onModalStateChange,
  portalContainer,
  ...props
}: UpsellingButtonProps) {
  const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null)
  const [internalLoading, setInternalLoading] = useState(false)

  const handleClick = async () => {
    if (onRequest) {
      setInternalLoading(true)
      try {
        await onRequest()
        if (showConfirmation) {
          setResponseStatus("success")
          onModalStateChange?.(true)
        }
      } catch {
        setResponseStatus("error")
        onModalStateChange?.(true)
      } finally {
        setInternalLoading(false)
      }
    }
  }

  const handleModalClose = () => {
    setResponseStatus(null)
    onModalStateChange?.(false)
  }

  const isLoading = externalLoading || internalLoading
  const buttonLabel = isLoading ? loadingState.label : label

  return (
    <>
      <F0Button
        variant={variant}
        label={buttonLabel}
        icon={showIcon ? UpsellIcon : undefined}
        onClick={handleClick}
        loading={isLoading}
        {...props}
      />
      {showConfirmation && responseStatus && (
        <UpsellRequestResponseDialog
          open={true}
          onClose={handleModalClose}
          success={responseStatus === "success"}
          errorMessage={errorMessage}
          successMessage={successMessage}
          nextSteps={nextSteps}
          closeLabel={closeLabel}
          portalContainer={portalContainer}
        />
      )}
    </>
  )
}

export const UpsellingButton = withDataTestId(_UpsellingButton)
