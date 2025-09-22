import { Button } from "@/components/Actions/Button"
import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0Icon } from "@/components/F0Icon"
import { CheckCircle, DottedCircle } from "@/icons/app"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog"
import { Separator } from "@/ui/separator"
import { forwardRef, useCallback, useState } from "react"

interface UpsellRequestResponseDialogProps {
  open: boolean
  onClose?: () => void
  success: boolean
  errorMessage: ErrorMessageProps
  successMessage: SuccessMessageProps
  nextSteps?: NextStepsProps
  closeLabel: string
  portalContainer?: HTMLElement | null
}

export interface ErrorMessageProps {
  title: string
  description: string
}

export interface SuccessMessageProps {
  title: string
  description: string
  buttonLabel?: string
  buttonOnClick?: () => void
}

export interface StepItemProps {
  text: string
  isCompleted?: boolean
}

export interface NextStepsProps {
  title: string
  items: StepItemProps[]
}

const StepItem = ({ text, isCompleted }: StepItemProps) => (
  <div className="flex flex-row items-center gap-2">
    <F0Icon
      className={
        isCompleted ? "text-f1-icon-positive" : "text-f1-icon-secondary"
      }
      icon={isCompleted ? CheckCircle : DottedCircle}
      size="md"
    />
    <span
      className={
        isCompleted
          ? "font-medium text-f1-foreground"
          : "text-f1-foreground-secondary"
      }
    >
      {text}
    </span>
  </div>
)

const NextSteps = ({ title, items }: NextStepsProps) => (
  <div className="px-4 pb-2">
    <div className="mb-2 text-sm text-f1-foreground-secondary">{title}</div>

    <div className="flex flex-col gap-2">
      {items.map((step: StepItemProps) => (
        <StepItem
          key={step.text}
          text={step.text}
          isCompleted={step.isCompleted ?? false}
        />
      ))}
    </div>
  </div>
)

const DialogActions = ({
  onClose,
  success,
  successButtonOnClick,
  successButtonLabel,
  closeLabel,
}: {
  onClose?: () => void
  success: boolean
  successButtonOnClick?: () => void
  successButtonLabel?: string
  closeLabel: string
}) => {
  const showSecondButton = success && successButtonLabel && successButtonOnClick

  const renderButtons = (isSmallScreen = false) => (
    <>
      <Button
        variant="outline"
        label={closeLabel}
        onClick={onClose}
        size={isSmallScreen ? "lg" : undefined}
      />
      {showSecondButton && (
        <Button
          variant="promote"
          label={successButtonLabel}
          onClick={() => {
            successButtonOnClick()
            onClose?.()
          }}
          size={isSmallScreen ? "lg" : undefined}
        />
      )}
    </>
  )

  return (
    <DialogFooter className="px-4 pb-4 pt-2 [&_div]:w-full">
      <div className="hidden sm:flex sm:flex-row sm:justify-between sm:gap-3">
        {renderButtons()}
      </div>
      <div className="flex flex-col-reverse gap-2 sm:hidden">
        {renderButtons(true)}
      </div>
    </DialogFooter>
  )
}

const UpsellRequestResponseDialog = forwardRef<
  HTMLDivElement,
  UpsellRequestResponseDialogProps
>(
  (
    {
      open,
      onClose,
      success = true,
      errorMessage,
      successMessage,
      nextSteps,
      closeLabel,
      portalContainer,
    },
    ref
  ) => {
    const [closing, setIsClosing] = useState(false)

    const handleClose = useCallback(() => {
      setIsClosing(true)
      setTimeout(() => {
        onClose?.()
        setIsClosing(false)
      }, 200)
    }, [onClose])

    return (
      <Dialog
        open={open && !closing}
        onOpenChange={(open) => !open && handleClose?.()}
      >
        <DialogContent
          ref={ref}
          className="bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]"
          container={portalContainer}
        >
          <DialogHeader
            className={`flex flex-col items-start gap-4 px-4 ${success ? "pt-5" : "py-5"}`}
          >
            <F0AvatarAlert type={success ? "positive" : "critical"} size="lg" />
            <div className="flex flex-col gap-0.5">
              <DialogTitle className="text-xl font-semibold sm:text-lg">
                {success ? successMessage?.title : errorMessage?.title}
              </DialogTitle>
              <DialogDescription className="text-lg sm:text-base">
                {success
                  ? successMessage?.description
                  : errorMessage?.description}
              </DialogDescription>
            </div>
          </DialogHeader>
          {success && nextSteps ? (
            <>
              <Separator />
              <NextSteps title={nextSteps.title} items={nextSteps.items} />
            </>
          ) : null}
          <DialogActions
            onClose={handleClose}
            success={success}
            successButtonLabel={successMessage.buttonLabel}
            successButtonOnClick={successMessage.buttonOnClick}
            closeLabel={closeLabel}
          />
        </DialogContent>
      </Dialog>
    )
  }
)

UpsellRequestResponseDialog.displayName = "UpsellRequestResponseDialog"

export { UpsellRequestResponseDialog }
