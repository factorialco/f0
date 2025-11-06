import { LockLocked } from "@/icons/app"
import { Input as ShadcnInput } from "@/ui/input"
import { InputFieldProps } from "@/ui/InputField"
import {
  ComponentProps,
  HTMLInputTypeAttribute,
  useMemo,
  useState,
} from "react"
import { PasswordVisibilityToggle } from "./components/PasswordVisibilityToggle"

export type InputProps<T extends string> = Pick<
  ComponentProps<typeof ShadcnInput>,
  "ref"
> &
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
  > & {
    type?: Exclude<HTMLInputTypeAttribute, "number">
    onPressEnter?: () => void
  }

const Input = <T extends string = string>({
  type,
  ...props
}: InputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordVisibilityToggle = (value: boolean) => {
    setShowPassword(value)
  }

  const localType = useMemo(() => {
    return type === "password" ? (showPassword ? "text" : "password") : type
  }, [showPassword, type])

  const localIcon = useMemo(() => {
    return type === "password" ? LockLocked : props.icon
  }, [type, props.icon])

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
      append={
        type === "password" ? (
          <PasswordVisibilityToggle
            value={showPassword}
            onChange={handlePasswordVisibilityToggle}
          />
        ) : undefined
      }
    />
  )
}

export { Input }
