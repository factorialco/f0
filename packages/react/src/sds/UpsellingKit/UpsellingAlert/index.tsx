import { F0Button } from "@/components/F0Button"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { Cross } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
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
  /**
   * Whether to show the confirmation dialog after the request resolves.
   * Defaults to `true`. Set to `false` when `onRequest` only opens a modal or
   * navigates instead of creating an upselling request, so the success dialog
   * ("request sent") is not shown for an action that sent nothing.
   */
  showConfirmation?: UpsellingButtonProps["showConfirmation"]
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
  /**
   * Called when the user dismisses the alert. When provided, a close button is
   * shown just to the right of the upselling action button.
   *
   * The consumer is responsible for deciding what happens on dismiss — for
   * example, hiding the alert for a number of days and showing it again later
   * by persisting the dismissal (e.g. in a cookie or local storage) and
   * unmounting the component while it should stay hidden.
   */
  onDismiss?: () => void
}

/**
 * Leaf component wrapping the close button so `useI18n()` is only read when
 * an `onDismiss` handler is actually provided. Keeps UpsellingAlert renderable
 * without an `I18nProvider` for consumers (and tests) that don't use the
 * dismiss affordance.
 */
const DismissButton = ({ onDismiss }: { onDismiss: () => void }) => {
  const { actions } = useI18n()
  return (
    <F0Button
      icon={Cross}
      label={actions.close}
      hideLabel
      variant="outline"
      size="sm"
      onClick={onDismiss}
      type="button"
    />
  )
}

function _UpsellingAlert({
  icon,
  title,
  description,
  action,
  onDismiss,
}: UpsellingAlertProps) {
  return (
    <div className="@container">
      <div
        role="status"
        className={cn(
          "w-full rounded-md p-3 text-f1-foreground [background:hsl(var(--promote-50)/0.1)]",
          onDismiss && "pr-2"
        )}
      >
        <div className="flex flex-row gap-2">
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
                showConfirmation={action.showConfirmation}
                variant="outlinePromote"
                size="sm"
              />
            </div>
          </div>
          {onDismiss && (
            <div
              className={cn(
                "flex-shrink-0 self-start",
                !description && "@xs:self-center"
              )}
            >
              <DismissButton onDismiss={onDismiss} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const UpsellingAlert = withDataTestId(_UpsellingAlert)
