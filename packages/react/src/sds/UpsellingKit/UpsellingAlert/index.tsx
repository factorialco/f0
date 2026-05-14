import { F0Icon, type IconType } from "@/components/F0Icon"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import { UpsellingButton, type UpsellingButtonProps } from "../UpsellingButton"

type AlertAction = {
  label: string
  onRequest: UpsellingButtonProps["onRequest"]
  errorMessage: UpsellingButtonProps["errorMessage"]
  successMessage: UpsellingButtonProps["successMessage"]
  loadingState: UpsellingButtonProps["loadingState"]
  nextSteps: UpsellingButtonProps["nextSteps"]
  closeLabel: UpsellingButtonProps["closeLabel"]
}

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
   * The upselling action button configuration.
   */
  action: AlertAction
}

function _UpsellingAlert({
  icon,
  title,
  description,
  action,
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
              label={action.label}
              onRequest={action.onRequest}
              errorMessage={action.errorMessage}
              successMessage={action.successMessage}
              loadingState={action.loadingState}
              nextSteps={action.nextSteps}
              closeLabel={action.closeLabel}
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
