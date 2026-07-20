import {
  ComponentProps,
  HTMLInputTypeAttribute,
  useMemo,
  useState,
} from "react"

import { EyeInvisible, EyeVisible, LockLocked } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Input as ShadcnInput } from "@/ui/input"
import { InputFieldProps } from "@/components/F0InputField"

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
    | "readonly"
  > & {
    /**
     * `"private"` is a non-HTML subtype for sensitive, non-credential data:
     * masked like a password but with no lock icon and with password managers
     * disabled. It never reaches the DOM (mapped to text/password internally).
     */
    type?: Exclude<HTMLInputTypeAttribute, "number"> | "private"
    onPressEnter?: () => void
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
  ...props
}: InputInternalProps) => {
  const [showPassword, setShowPassword] = useState(false)

  // `password` and `private` are both masked; the eye toggle flips them to text.
  const maskable = type === "password" || type === "private"

  const localType = useMemo(() => {
    return maskable ? (showPassword ? "text" : "password") : type
  }, [showPassword, maskable, type])

  const localIcon = useMemo(() => {
    // Only `password` forces the lock icon; `private` keeps the consumer's icon.
    return type === "password" ? LockLocked : props.icon
  }, [type, props.icon])

  const i18n = useI18n()
  const buttonToggle: InputFieldProps<string>["buttonToggle"] = useMemo(() => {
    if (type === "password") {
      return {
        label: [i18n.inputs.password.show, i18n.inputs.password.hide],
        icon: [EyeInvisible, EyeVisible],
        selected: showPassword,
        onChange: setShowPassword,
      }
    }
    if (type === "private") {
      // Build the toggle's accessible name from the field label so screen-reader
      // users can tell multiple private fields apart (e.g. "Show social security
      // number"). The label feeds F0ButtonToggle's aria-label + title only — the
      // toggle renders an icon, so there is no visible-text change.
      return {
        label: [
          i18n.t("inputs.private.show", { label: props.label }),
          i18n.t("inputs.private.hide", { label: props.label }),
        ],
        icon: [EyeInvisible, EyeVisible],
        selected: showPassword,
        onChange: setShowPassword,
      }
    }
    return props.buttonToggle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPassword, type, props.buttonToggle, props.label])

  return (
    <ShadcnInput
      {...props}
      {...(type === "private" ? passwordManagerAvoidance : {})}
      type={localType}
      // Email addresses are case-insensitive, so normalise to lowercase as the
      // user types (lowercasing preserves length, so the caret doesn't jump).
      onChange={(value) =>
        props.onChange?.(type === "email" ? value.toLowerCase() : value)
      }
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onPressEnter?.()
        }
      }}
      icon={localIcon}
      buttonToggle={buttonToggle}
    />
  )
}

export { InputInternal }
