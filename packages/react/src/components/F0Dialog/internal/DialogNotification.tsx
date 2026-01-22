import {
  AlertAvatarProps,
  F0AvatarAlert,
} from "@/components/avatars/F0AvatarAlert"
import { DialogDescription, DialogTitle } from "@/ui/Dialog"

import { F0DialogAction } from "../types"
import { DialogInternal } from "./DialogInternal"

type F0DialogNotificationProps = {
  type: AlertAvatarProps["type"]
  title: string
  description: string
  isOpen?: boolean
  onClose?: () => void
  /**
   * The primary action to render in the dialog.
   */
  primaryAction: F0DialogAction
  /**
   * The secondary action to render in the dialog.
   * Limited to 2 actions.
   * @default undefined
   */
  secondaryAction?: F0DialogAction | F0DialogAction[]
}

export const DialogNotificationInternal = ({
  isOpen = false,
  onClose = () => {},
  type,
  title,
  description,
  primaryAction,
  secondaryAction,
}: F0DialogNotificationProps) => {
  return (
    <DialogInternal
      isOpen={isOpen}
      onClose={onClose}
      variant="notification"
      size="sm"
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      type={type == "critical" ? "critical" : "default"}
    >
      <div className="flex flex-col gap-4 py-2">
        <F0AvatarAlert type={type} size="lg" />
        <div className="flex flex-col gap-0.5">
          <DialogTitle className="text-xl sm:text-lg">{title}</DialogTitle>
          <DialogDescription className="text-lg sm:text-base">
            {description}
          </DialogDescription>
        </div>
      </div>
    </DialogInternal>
  )
}
