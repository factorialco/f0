import {
  Button,
  ErrorMessageProps,
  LoadingStateProps,
  NextStepsProps,
  SuccessMessageProps,
  UpsellingButton,
} from "@/factorial-one"
import CrossIcon from "@/icons/app/Cross"
import { ButtonVariant } from "@/ui/button"
import { Card, CardContent, CardFooter } from "@/ui/Card"
import { Label } from "@/ui/label"
import { useEffect, useState } from "react"

type BaseAction = {
  label: string
  onClick: () => Promise<void>
}

type UpsellAction = BaseAction & {
  type: "upsell"
  errorMessage: ErrorMessageProps
  successMessage: SuccessMessageProps
  loadingState: LoadingStateProps
  nextSteps: NextStepsProps
  closeLabel: string
  showConfirmation: boolean
}

type RegularAction = BaseAction & {
  type: "regular"
  variant: ButtonVariant
}

export type Action = UpsellAction | RegularAction

type ProductWidgetProps = {
  mediaUrl?: string
  title: string
  description: string
  onClose: () => void
  dismissible: boolean
  width?: string
  trackVisibility?: (visible: boolean) => void
  actions?: Action[]
}

export function ProductWidget({
  mediaUrl,
  title,
  description,
  onClose,
  dismissible,
  width,
  trackVisibility,
  actions,
}: ProductWidgetProps) {
  const [isDismissed, setIsDismissed] = useState(false)

  const handleClose = () => {
    setIsDismissed(true)
    if (onClose) {
      onClose()
    }
  }

  useEffect(() => {
    if (trackVisibility) {
      trackVisibility(!isDismissed)
    }
  }, [trackVisibility, isDismissed])

  const isVideo = mediaUrl?.includes(".mp4")

  return (
    <>
      {!isDismissed ? (
        <Card style={{ width }} className="relative bg-f1-background p-1">
          <CardContent>
            {dismissible && (
              <div className="absolute right-2 top-2 z-10">
                <Button
                  variant="ghost"
                  icon={CrossIcon}
                  size="sm"
                  hideLabel
                  onClick={handleClose}
                  label="Close"
                />
              </div>
            )}
            <div>
              <div>
                {mediaUrl &&
                  (isVideo ? (
                    <video
                      src={mediaUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full rounded-md"
                    />
                  ) : (
                    <img
                      src={mediaUrl}
                      alt={title}
                      className="h-full w-full rounded-md"
                    />
                  ))}
              </div>
              <div className="flex flex-col gap-[2px] p-3">
                <Label className="text-lg font-medium">{title}</Label>
                <Label className="line-clamp-2 text-base font-normal text-f1-foreground-secondary">
                  {description}
                </Label>
              </div>
            </div>
          </CardContent>
          {actions && (
            <CardFooter className="p-3">
              {actions.map((action) =>
                action.type === "upsell" ? (
                  <UpsellingButton
                    key={action.label}
                    label={action.label}
                    onRequest={action.onClick}
                    errorMessage={action.errorMessage}
                    successMessage={action.successMessage}
                    loadingState={action.loadingState}
                    nextSteps={action.nextSteps}
                    closeLabel={action.closeLabel}
                    showConfirmation={action.showConfirmation}
                  />
                ) : (
                  <Button
                    key={action.label}
                    label={action.label}
                    onClick={action.onClick}
                    variant={action.variant}
                  />
                )
              )}
            </CardFooter>
          )}
        </Card>
      ) : null}
    </>
  )
}
