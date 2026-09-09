import { ComponentProps, HTMLInputTypeAttribute, useMemo } from "react"
import { InputFieldProps } from "@/components/F0InputField"
import { LockLocked } from "@/icons/app"
import { Input as ShadcnInput } from "@/ui/input"

export type InputInternalProps = Pick<
  ComponentProps<typeof ShadcnInput>,
  "ref" | "id" | "aria-describedby" | "aria-invalid"
> &
  Pick<
    InputFieldProps<string>,
    | "autoFocus"
    | "required"
    | "disabled"
    | "size"
    | "onChange"
    | "value"
    | "placeholder"
    | "clearable"
    | "maxLength"
    | "label"
    | "labelIcon"
    | "icon"
    | "hideLabel"
    | "name"
    | "error"
    | "status"
    | "hint"
    | "autocomplete"
    | "buttonToggle"
    | "hideMaxLength"
    | "loading"
    | "transparent"
    | "onBlur"
    | "onKeyDown"
    | "readonly"
    | "onClickContent"
    // The value controls every writable F0 input inherits.
    | "copyable"
    | "masked"
    | "onEdit"
    | "onRequestChange"
    | "actionsVisibility"
    | "confirmed"
  > & {
    /**
     * `"private"` is a non-HTML subtype for sensitive, non-credential data:
     * masked like a password but with no lock icon and with password managers
     * disabled. It never reaches the DOM (mapped to text/password internally).
     */
    type?: Exclude<HTMLInputTypeAttribute, "number"> | "private"
    onPressEnter?: () => void
    /**
     * Fires on Escape. Pairs with `onPressEnter` for inline editing: Enter
     * commits, Escape reverts. Like `onPressEnter` it does not call
     * `preventDefault`.
     */
    onPressEscape?: () => void
  }

/**
 * Attributes that ask password managers (1Password, LastPass, Bitwarden) and
 * browser autofill to ignore the field — used by `type="private"` so sensitive
 * non-credential data is never captured or suggested.
 */
const passwordManagerAvoidance = {
  autoComplete: "off",
  "data-1p-ignore": true,
  "data-lpignore": "true",
  "data-form-type": "other",
  "data-bwignore": true,
}

const InputInternal = ({
  type,
  onPressEnter,
  onPressEscape,
  onKeyDown,
  masked,
  ...props
}: InputInternalProps) => {
  // `password` and `private` are masked by definition; the field's own eye
  // flips them back. It owns the masking, so there is one implementation of
  // the toggle rather than one per input type.
  const maskable = type === "password" || type === "private"

  // The field forces `type="password"` while hidden, so hand it the unmasked
  // type and let it do the masking.
  const localType = maskable ? "text" : type

  const localIcon = useMemo(() => {
    // Only `password` forces the lock icon; `private` keeps the consumer's icon.
    return type === "password" ? LockLocked : props.icon
  }, [type, props.icon])

  return (
    <ShadcnInput
      {...props}
      {...(type === "private" ? passwordManagerAvoidance : {})}
      type={localType}
      masked={maskable || masked}
      // Email addresses are case-insensitive, so normalise to lowercase as the
      // user types (lowercasing preserves length, so the caret doesn't jump).
      onChange={(value) =>
        props.onChange?.(type === "email" ? value.toLowerCase() : value)
      }
      onKeyDown={(event) => {
        onKeyDown?.(event)
        // A consumer that handled the key itself gets the last word: without
        // this, a component using `onKeyDown` to run its own Enter/Escape
        // logic would see the shortcut fire a second time.
        if (event.defaultPrevented) {
          return
        }
        if (event.key === "Enter") {
          onPressEnter?.()
        }
        if (event.key === "Escape") {
          onPressEscape?.()
        }
      }}
      icon={localIcon}
    />
  )
}

export { InputInternal }
