import { EyeInvisible, EyeVisible, LockLocked } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Input as ShadcnInput } from "@/ui/input"
import { InputFieldProps } from "@/ui/InputField"
import { ComponentProps, HTMLInputTypeAttribute, useMemo, useState } from "react"

export type InputInternalProps<T extends string> = Pick<ComponentProps<typeof ShadcnInput>, "ref"> &
  Pick<
    InputFieldProps<T>,
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
  > & {
    type?: Exclude<HTMLInputTypeAttribute, "number">
    onPressEnter?: () => void
  }

const InputInternal = <T extends string = string>({ type, ...props }: InputInternalProps<T>) => {
  const [showPassword, setShowPassword] = useState(false)

  const localType = useMemo(() => {
    return type === "password" ? (showPassword ? "text" : "password") : type
  }, [showPassword, type])

  const localIcon = useMemo(() => {
    return type === "password" ? LockLocked : props.icon
  }, [type, props.icon])

  const i18n = useI18n()
  const buttonToggle: InputFieldProps<T>["buttonToggle"] = useMemo(() => {
    if (type !== "password") {
      return props.buttonToggle
    }
    return {
      label: [i18n.inputs.password.show, i18n.inputs.password.hide],
      icon: [EyeInvisible, EyeVisible],
      selected: showPassword,
      onChange: setShowPassword,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPassword, type, props.buttonToggle])

  return (
    <ShadcnInput
      {...props}
      type={localType}
      onChange={(value) => props.onChange?.(value as T)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          props.onPressEnter?.()
        }
      }}
      icon={localIcon}
      buttonToggle={buttonToggle}
    />
  )
}

export { InputInternal }
