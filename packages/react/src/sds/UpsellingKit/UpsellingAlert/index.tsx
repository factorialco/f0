import { withDataTestId } from "@/lib/data-testid"

import { UpsellingButton, type UpsellingButtonProps } from "../UpsellingButton"

export interface UpsellingAlertProps {
  /**
   * The title of the alert
   */
  title: string
  /**
   * The description of the alert
   */
  description?: string
  /**
   * The label for the upselling button
   */
  actionLabel: string
  /**
   * Function to be executed when the upsell button is clicked
   */
  onRequest?: UpsellingButtonProps["onRequest"]
  /**
   * The error message to be displayed in the confirmation dialog
   */
  errorMessage: UpsellingButtonProps["errorMessage"]
  /**
   * The success message to be displayed in the confirmation dialog
   */
  successMessage: UpsellingButtonProps["successMessage"]
  /**
   * The label to be displayed in the button when the request is being processed
   */
  loadingState: UpsellingButtonProps["loadingState"]
  /**
   * The next steps to be displayed in the confirmation dialog
   */
  nextSteps: UpsellingButtonProps["nextSteps"]
  /**
   * The label to be displayed in the close button of the confirmation dialog
   */
  closeLabel: UpsellingButtonProps["closeLabel"]
}

const _UpsellingAlert = ({
  title,
  description,
  actionLabel = "More info",
  onRequest,
  errorMessage,
  successMessage,
  loadingState,
  nextSteps,
  closeLabel,
}: UpsellingAlertProps) => {
  return (
    <div className="@container">
      <div
        role="status"
        className="w-full rounded-md p-3 text-f1-foreground [background:hsl(var(--promote-50)/0.1)]"
      >
        <div className="flex flex-1 flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between">
          <div className="flex flex-col gap-0.5">
            <p className="font-medium text-f1-foreground">{title}</p>
            {description && (
              <p className="text-base text-f1-foreground-secondary">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-shrink-0">
            <UpsellingButton
              label={actionLabel}
              onRequest={onRequest}
              errorMessage={errorMessage}
              successMessage={successMessage}
              loadingState={loadingState}
              nextSteps={nextSteps}
              closeLabel={closeLabel}
              variant="outlinePromote"
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const UpsellingAlert = withDataTestId(_UpsellingAlert)
