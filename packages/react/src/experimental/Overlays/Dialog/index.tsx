import { forwardRef, useCallback, useState } from "react"

import {
  F0AvatarAlert,
  type AlertAvatarProps,
} from "@/components/avatars/F0AvatarAlert"
import { F0Button, F0ButtonProps } from "@/components/F0Button"
import type { TestableProps } from "@/global.types"
import { experimentalComponent } from "@/lib/experimental"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/Dialog/dialog"

type BaseAction = Pick<F0ButtonProps, "label" | "onClick" | "icon" | "disabled">

type PrimaryActionVariant = "default" | "critical" | "neutral"
type PrimaryAction = BaseAction & {
  variant?: PrimaryActionVariant
}
type SecondaryAction = BaseAction

type DialogProps = TestableProps & {
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
  ({ header, actions, open, onClose, testId }, ref) => {
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
          className="bottom-3 top-auto max-w-[400px]"
          data-testid={testId}
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
            <DialogFooter className="px-4 pb-4 pt-2">
              <div className="hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full">
                <F0Button variant="outline" {...actions.secondary} />
                <F0Button
                  {...actions.primary}
                  variant={actions.primary.variant || "default"}
                />
              </div>
              <div className="flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full">
                <F0Button variant="outline" {...actions.secondary} size="lg" />
                <F0Button
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

/**
 * @experimental This is an experimental component use it at your own risk
 */
const DialogComponent = experimentalComponent("Dialog", OneDialog)

export { DialogComponent as Dialog }
