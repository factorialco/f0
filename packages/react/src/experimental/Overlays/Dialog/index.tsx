import { Button, ButtonProps } from "@/components/Actions/Button"
import {
  F0AvatarAlert,
  type AlertAvatarProps,
} from "@/components/avatars/F0AvatarAlert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog"
import { forwardRef, useCallback, useState } from "react"

type BaseAction = Pick<ButtonProps, "label" | "onClick" | "icon" | "disabled">

type PrimaryActionVariant = "default" | "critical" | "neutral"
type PrimaryAction = BaseAction & {
  variant?: PrimaryActionVariant
}
type SecondaryAction = BaseAction

type DialogProps = {
  header: {
    type: AlertAvatarProps["type"]
    title: string
    description: string
  }
  actions?: {
    primary: PrimaryAction
    secondary: SecondaryAction
  }
  open?: boolean
  onClose?: () => void
}

const OneDialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ header, actions, open, onClose }, ref) => {
    // We do this in order to give the illusion of a controlled state via `open`, but in reality
    // we're taking control and closing the dialog after a few milliseconds to give the closing
    // animation time to play out.
    const [closing, setIsClosing] = useState(false)

    const handleClose = useCallback(() => {
      setIsClosing(true)

      const timeout = setTimeout(() => {
        onClose?.()
        setIsClosing(false)
      }, 200)

      return () => clearTimeout(timeout)
    }, [onClose])

    return (
      <Dialog
        open={open && !closing}
        onOpenChange={(open) => !open && handleClose?.()}
      >
        <DialogContent
          ref={ref}
          className="bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]"
        >
          <DialogHeader className="flex flex-col gap-4 px-4 py-5">
            <F0AvatarAlert type={header.type} size="lg" />
            <div className="flex flex-col gap-0.5">
              <DialogTitle className="text-xl sm:text-lg">
                {header.title}
              </DialogTitle>
              <DialogDescription className="text-lg sm:text-base">
                {header.description}
              </DialogDescription>
            </div>
          </DialogHeader>
          {actions && (
            <DialogFooter className="px-4 pb-4 pt-2 [&_div]:w-full">
              <div className="hidden sm:flex sm:flex-row sm:justify-between sm:gap-3">
                <Button variant="outline" {...actions.secondary} />
                <Button
                  {...actions.primary}
                  variant={actions.primary.variant || "default"}
                />
              </div>
              <div className="flex flex-col-reverse gap-2 sm:hidden">
                <Button variant="outline" {...actions.secondary} size="lg" />
                <Button
                  {...actions.primary}
                  variant={actions.primary.variant || "default"}
                  size="lg"
                />
              </div>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    )
  }
)

OneDialog.displayName = "Dialog"

export { OneDialog as Dialog }
