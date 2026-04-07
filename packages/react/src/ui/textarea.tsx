import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  type TextareaHTMLAttributes,
} from "react"

import { cn } from "../lib/utils"
import { InputField, InputFieldProps } from "./InputField"

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "value" | "onFocus" | "onBlur"
> & {
  value?: string
  /** Maximum height in pixels. When set, the textarea scrolls beyond this height instead of growing. */
  maxHeight?: number
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
    | "required"
  >

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
      required,
      value,
      cols,
      rows,
      status,
      hint,
      onChange,
      placeholder,
      size,
      loading,
      maxHeight,
      ...props
    },
    ref
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useImperativeHandle(ref, () => textareaRef.current!)

    useLayoutEffect(() => {
      const textarea = textareaRef.current
      if (!textarea) return

      textarea.style.height = "auto"
      const newHeight = textarea.scrollHeight

      if (maxHeight != null && newHeight > maxHeight) {
        textarea.style.height = `${maxHeight}px`
        textarea.style.overflowY = "auto"
      } else {
        textarea.style.height = `${newHeight}px`
        textarea.style.overflowY = "hidden"
      }
    }, [value, maxHeight])

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
        required={required}
        size={size}
        loading={loading}
        inputRef={textareaRef}
        {...props}
      >
        <textarea
          className={cn("block w-full resize-none pt-2", className)}
          value={value}
          cols={cols}
          rows={rows}
          disabled={disabled}
          required={required}
        />
      </InputField>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
