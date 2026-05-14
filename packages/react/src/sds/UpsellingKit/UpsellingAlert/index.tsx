import { F0Icon, type IconType } from "@/components/F0Icon"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import { UpsellingButton, type UpsellingButtonProps } from "../UpsellingButton"

export interface UpsellingAlertProps {
  /**
   * Optional icon displayed as an avatar on the left side of the alert.
   */
  icon?: IconType
  /**
   * The title of the alert
   */
  title: string
  /**
   * The description of the alert
   */
  description?: string
  /**
   * The label for the upselling button. Defaults to "More info".
   */
  actionLabel?: string
} & Pick<UpsellingButtonProps, 'onRequest' | 'errorMessage' | 'successMessage' | ...>

function _UpsellingAlert({
  icon,
  title,
  description,
  actionLabel = "More info",
  onRequest,
  errorMessage,
  successMessage,
  loadingState,
  nextSteps,
  closeLabel,
}: UpsellingAlertProps) {
  return (
    <div className="@container">
      <div
        role="status"
        className="w-full rounded-md p-3 text-f1-foreground [background:hsl(var(--promote-50)/0.1)]"
      >
        <div
          className={cn(
            "flex flex-1 flex-col items-start gap-3 @xs:flex-row @xs:justify-between",
            description ? "@xs:items-start" : "@xs:items-center"
          )}
        >
          <div
            className={cn(
              "flex flex-row gap-2",
              description ? "items-start" : "items-center"
            )}
          >
            {icon && (
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm border border-solid text-f1-icon-promote [background:hsl(var(--promote-50)/0.1)] [border-color:hsl(var(--promote-50)/0.1)]">
                <F0Icon icon={icon} size="sm" />
              </div>
            )}
            <div className="flex flex-col gap-0.5">
              <p className="font-medium text-f1-foreground">{title}</p>
              {description && (
                <p className="text-base text-f1-foreground-secondary">
                  {description}
                </p>
              )}
            </div>
          </div>
          <div className={cn("flex flex-shrink-0 @xs:pl-0", icon && "pl-8")}>
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
