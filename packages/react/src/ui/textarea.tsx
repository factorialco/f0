import * as React from "react"

import { cn } from "../lib/utils"
import { InputField, InputFieldProps } from "./InputField"

export type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "value" | "onFocus" | "onBlur"
> & {
  value?: string
} & Pick<
    InputFieldProps<string>,
    | "label"
    | "labelIcon"
    | "icon"
    | "hideLabel"
    | "maxLength"
    | "clearable"
    | "placeholder"
    | "onChange"
    | "value"
    | "onClear"
    | "onFocus"
    | "onBlur"
    | "error"
    | "status"
    | "hint"
    | "onKeyDown"
    | "size"
    | "loading"
  >

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      labelIcon,
      icon,
      error,
      hideLabel,
      maxLength,
      clearable,
      disabled,
      value,
      cols,
      rows,
      status,
      hint,
      onChange,
      placeholder,
      size,
      loading,
      ...props
    },
    ref
  ) => {
    return (
      <InputField
        label={label}
        labelIcon={labelIcon}
        icon={icon}
        error={error}
        status={status}
        hint={hint}
        hideLabel={hideLabel}
        maxLength={maxLength}
        clearable={clearable}
        value={value}
        canGrow
        placeholder={placeholder ?? ""}
        onChange={(value) => {
          onChange?.(value ?? "")
        }}
        disabled={disabled}
        size={size}
        loading={loading}
        {...props}
      >
        <textarea
          className={cn("block w-full", className)}
          ref={ref}
          value={value}
          cols={cols}
          rows={rows}
          disabled={disabled}
        />
      </InputField>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
