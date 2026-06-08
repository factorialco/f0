import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  type TextareaHTMLAttributes,
} from "react"

import { F0InputField, InputFieldProps } from "@/components/F0InputField"

import { cn } from "../lib/utils"

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

      // Collapse to zero so scrollHeight reports only content height,
      // not the flex-stretched height from parent containers.
      textarea.style.height = "0px"
      const scrollHeight = textarea.scrollHeight

      // Ensure height never drops below the rows-based minimum so the
      // textarea doesn't look like a single-line input.
      const computed = getComputedStyle(textarea)
      const lineHeight = parseFloat(computed.lineHeight) || 20
      const paddingBlock =
        parseFloat(computed.paddingTop) + parseFloat(computed.paddingBottom)
      const minHeight = lineHeight * (textarea.rows || 2) + paddingBlock
      const newHeight = Math.max(scrollHeight, minHeight)

      if (maxHeight != null && newHeight > maxHeight) {
        textarea.style.height = `${maxHeight}px`
        textarea.style.overflowY = "auto"
      } else {
        textarea.style.height = `${newHeight}px`
        textarea.style.overflowY = "hidden"
      }
    })

    return (
      <F0InputField
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
      </F0InputField>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
