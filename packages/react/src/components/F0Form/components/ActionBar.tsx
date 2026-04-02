import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import { F0ActionBar, ActionBarStatus } from "@/components/F0ActionBar"
import { AlertCircle, ChevronDown, ChevronUp } from "@/icons/app"

interface FormActionBarProps {
  isActionBar: boolean
  isDirty: boolean
  actionBarStatus: ActionBarStatus
  hasErrors: boolean
  errorCount: number
  resolvedActionBarLabel: string | undefined
  submitLabel: string
  submitIcon: IconType | undefined
  discardableChanges: boolean | "" | undefined
  discardLabel: string
  discardIcon: IconType | undefined
  issuesOneLabel: string
  issuesOtherLabel: string
  onSubmit: () => void
  onDiscard: () => void
  goToPreviousError: () => void
  goToNextError: () => void
}

export function FormActionBar({
  isActionBar,
  isDirty,
  actionBarStatus,
  hasErrors,
  errorCount,
  resolvedActionBarLabel,
  submitLabel,
  submitIcon,
  discardableChanges,
  discardLabel,
  discardIcon,
  issuesOneLabel,
  issuesOtherLabel,
  onSubmit,
  onDiscard,
  goToPreviousError,
  goToNextError,
}: FormActionBarProps) {
  if (isActionBar) {
    return (
      <F0ActionBar
        isOpen={
          isDirty ||
          actionBarStatus === "loading" ||
          actionBarStatus === "success"
        }
        variant="light"
        status={hasErrors ? undefined : actionBarStatus}
        label={resolvedActionBarLabel}
        leftContent={
          hasErrors ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                <F0Icon icon={AlertCircle} size="md" color="critical" />
                <span className="font-medium text-f1-foreground-critical">
                  {errorCount === 1
                    ? issuesOneLabel.replace("{{count}}", String(errorCount))
                    : issuesOtherLabel.replace("{{count}}", String(errorCount))}
                </span>
              </div>
              {errorCount > 1 && (
                <div className="flex items-center gap-2">
                  <F0Button
                    icon={ChevronUp}
                    onClick={goToPreviousError}
                    variant="outline"
                    label="Go to previous error"
                    hideLabel
                  />
                  <F0Button
                    icon={ChevronDown}
                    onClick={goToNextError}
                    variant="outline"
                    label="Go to next error"
                    hideLabel
                  />
                </div>
              )}
            </div>
          ) : undefined
        }
        primaryActions={[
          {
            label: submitLabel,
            icon: submitIcon,
            onClick: onSubmit,
            disabled: hasErrors,
          },
        ]}
        secondaryActions={
          discardableChanges
            ? [
                {
                  label: discardLabel,
                  icon: discardIcon,
                  onClick: onDiscard,
                },
              ]
            : []
        }
      />
    )
  }

  return (
    <F0ActionBar
      isOpen={actionBarStatus === "loading" || actionBarStatus === "success"}
      variant="light"
      status={actionBarStatus}
      label={resolvedActionBarLabel}
    />
  )
}
