import { ButtonInternal } from "@/components/F0Button/internal"
import CrossIcon from "@/icons/app/Cross"
import { useI18n } from "@/lib/providers/i18n"
import { useDialogWrapperContext } from "./DialogWrapperProvider"

type NotificationCloseButtonProps = {
  /**
   * Disables the close button, matching the `Header`'s own `disableClose`.
   * @internal
   */
  disabled?: boolean
}

/**
 * The notification dialog's dismiss control.
 *
 * The notification variant renders no `Header` — its title and description sit in the body under
 * the alert avatar — so it cannot borrow the header's close button. Without one, the only way out
 * of a notification is an explicit "Cancel" action, which costs a button for something every other
 * dialog expresses with an X. This is that X: anchored to the panel's top-right corner and wired to
 * the same `onClose` the header button uses, so dismissing resolves the dialog exactly like the
 * escape key does on a non-modal one.
 */
export const NotificationCloseButton = ({
  disabled,
}: NotificationCloseButtonProps) => {
  const translations = useI18n()
  const { onClose } = useDialogWrapperContext()

  return (
    <div className="relative">
      <div className="absolute right-3 top-3 z-10">
        <ButtonInternal
          variant="outline"
          icon={CrossIcon}
          disabled={disabled}
          onClick={onClose}
          label={translations.actions.close}
          hideLabel
        />
      </div>
    </div>
  )
}
