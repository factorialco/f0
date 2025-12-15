import * as React from "react"
import { cn } from "../lib/utils"
import { InputField, InputFieldProps } from "./InputField"

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> &
  Pick<
    InputFieldProps<string>,
    | "label"
    | "labelIcon"
    | "hideLabel"
    | "error"
    | "status"
    | "hint"
    | "disabled"
    | "required"
    | "size"
    | "icon"
    | "clearable"
    | "isEmpty"
    | "emptyValue"
    | "maxLength"
    | "hideMaxLength"
    | "append"
    | "lengthProvider"
    | "loading"
    | "onChange"
    | "role"
    | "onClickContent"
    | "appendTag"
    | "onFocus"
    | "onBlur"
    | "onClear"
    | "readonly"
    | "autocomplete"
    | "buttonToggle"
  >

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      labelIcon,
      icon,
      error,
      status,
      hint,
      disabled,
      required,
      value,
      placeholder,
      clearable,
      onClear,
      size,
      loading,
      isEmpty,
      emptyValue,
      maxLength,
      hideMaxLength,
      append,
      onChange,
      role,
      appendTag,
      lengthProvider,
      onClickContent,
      hideLabel,
      name,
      onFocus,
      onBlur,
      onKeyDown,
      readonly,
      buttonToggle,
      ...props
    },
    ref
  ) => {
    return (
      <InputField
        label={label}
        icon={icon}
        labelIcon={labelIcon}
        error={error}
        status={status}
        hint={hint}
        disabled={disabled}
        required={required}
        value={value as string}
        loading={loading}
        clearable={clearable}
        className={className}
        onClear={onClear}
        placeholder={placeholder || ""}
        size={size}
        role={role}
        isEmpty={isEmpty}
        emptyValue={emptyValue as string}
        maxLength={maxLength}
        hideMaxLength={hideMaxLength}
        append={append}
        lengthProvider={lengthProvider}
        hidePlaceholder={type === "file"}
        hideLabel={hideLabel}
        onChange={onChange}
        onClickContent={onClickContent}
        name={name}
        appendTag={appendTag}
        onFocus={onFocus}
        onBlur={onBlur}
        inputRef={ref}
        readonly={readonly}
        buttonToggle={buttonToggle}
      >
        <input
          type={type}
          {...props}
          onKeyDown={onKeyDown}
          className={cn(
            "[&::-webkit-search-cancel-button]:hidden",
            "w-full shrink placeholder:-z-10 disabled:cursor-not-allowed"
          )}
        />
      </InputField>
    )
  }
)
Input.displayName = "Input"

export { Input }
