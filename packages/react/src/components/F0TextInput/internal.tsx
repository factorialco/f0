import {
  ComponentProps,
  HTMLInputTypeAttribute,
  useEffect,
  useMemo,
  useState,
} from "react"
import { InputFieldProps } from "@/components/F0InputField"
import { EyeInvisible, EyeVisible, LockLocked } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
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
    | "readonly"
    | "variant"
    | "editing"
  > & {
    /** Sensitive non-credential text, revealed only while focused. */
    type?: Exclude<HTMLInputTypeAttribute, "number"> | "private"
    onPressEnter?: () => void
    onPressEscape?: () => void
  }

// Ask password managers and browser autofill to ignore private fields.
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
  ...props
}: InputInternalProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const [privateFocused, setPrivateFocused] = useState(false)

  useEffect(() => {
    if (props.variant === "inline" && !props.editing) {
      setPrivateFocused(false)
    }
  }, [props.variant, props.editing])

  const localType = useMemo(() => {
    if (type === "private") {
      return privateFocused ? "text" : "password"
    }
    return type === "password" ? (showPassword ? "text" : "password") : type
  }, [showPassword, privateFocused, type])

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
      return undefined
    }
    return props.buttonToggle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPassword, type, props.buttonToggle, props.label])

  return (
    <ShadcnInput
      {...props}
      {...(type === "private" ? passwordManagerAvoidance : {})}
      type={localType}
      inlineText={type === "private" ? "••••••••" : undefined}
      onFocus={() => {
        if (type === "private") {
          setPrivateFocused(true)
        }
      }}
      onBlur={() => {
        setPrivateFocused(false)
        props.onBlur?.()
      }}
      // Email addresses are case-insensitive, so normalise to lowercase as the
      // user types (lowercasing preserves length, so the caret doesn't jump).
      onChange={(value) =>
        props.onChange?.(type === "email" ? value.toLowerCase() : value)
      }
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onPressEnter?.()
        }
        if (event.key === "Escape") {
          onPressEscape?.()
        }
      }}
      icon={localIcon}
      buttonToggle={buttonToggle}
    />
  )
}

export { InputInternal }
