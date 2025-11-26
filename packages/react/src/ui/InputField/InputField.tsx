import { F0Avatar } from "@/components/avatars/F0Avatar/F0Avatar"
import { AvatarVariant } from "@/components/avatars/F0Avatar/types"
import { F0ButtonToggle } from "@/components/F0ButtonToggle/F0ButtonToggle"
import { F0Icon, IconType } from "@/components/F0Icon"
import { Spinner } from "@/experimental/Information/Spinner"
import { CrossedCircle } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils.ts"
import { cva } from "cva"
import { AnimatePresence, motion } from "motion/react"
import {
  AriaAttributes,
  cloneElement,
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type AutoFill,
} from "react"
import { AppendTag } from "./AppendTag"
import { InputMessages } from "./components/InputMessages"
import { Label } from "./components/Label"
import { InputFieldStatus } from "./types"
export const INPUTFIELD_SIZES = ["sm", "md"] as const
export type InputFieldSize = (typeof INPUTFIELD_SIZES)[number]

const defaultEmptyValue = ""

const defaultIsEmpty = (value: string | number | undefined | null) => {
  return value === defaultEmptyValue || value
    ? value.toString().length === 0
    : true
}
const defaultLengthProvider = (value: string | number | undefined | null) =>
  value ? value.toString().length : 0

const inputElementVariants = cva({
  base: "",
  variants: {
    size: {
      sm: "py-1",
      md: "py-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const inputFieldVariants = cva({
  base: "",
  variants: {
    canGrow: {
      true: "flex-1",
      false: "flex-none",
    },
    size: {
      sm: "rounded-[10px]",
      md: "rounded-[12px]",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      canGrow: true,
      class: "min-h-[32px]",
    },
    {
      size: "md",
      canGrow: true,
      class: "min-h-[40px]",
    },
    {
      size: "sm",
      canGrow: false,
      class: "h-[32px]",
    },
    {
      size: "md",
      canGrow: false,
      class: "h-[40px]",
    },
  ],
  defaultVariants: {
    size: "md",
    canGrow: false,
  },
})

const inputFieldWrapperVariants = cva({
  base: "",
  variants: {
    size: {
      sm: "gap-1",
      md: "gap-2",
    },
  },
})

const inputFieldStatusVariants = cva({
  base: "focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none",
  variants: {
    status: {
      default:
        "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
      warning:
        "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
      info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
      error:
        "border-f1-border-critical-bold focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical",
    },
    disabled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      status: "default",
      class: "hover:border-f1-border-selected-bold",
    },
    {
      disabled: false,
      status: "warning",
      class: "hover:border-f1-border-warning-bold",
    },
    {
      disabled: false,
      status: "info",
      class: "hover:border-f1-border-info-bold",
    },
    {
      disabled: false,
      status: "error",
      class: "hover:border-f1-border-critical-bold",
    },
  ],
})

export type InputFieldProps<T> = {
  autoFocus?: boolean
  label: string
  placeholder?: string
  labelIcon?: IconType
  hideLabel?: boolean
  hidePlaceholder?: boolean
  name?: string
  onClickPlaceholder?: () => void
  onClickChildren?: () => void
  onClickContent?: () => void
  value?: T | undefined
  onChange?: (value: T) => void
  size?: InputFieldSize
  /* @deprecated Use state (with type error)instead */
  error?: string | boolean
  status?: InputFieldStatus
  /* shortcut for status with type default */
  hint?: string
  disabled?: boolean
  className?: string
  required?: boolean
  readonly?: boolean
  clearable?: boolean
  role?: string
  autocomplete?: AutoFill
  inputRef?: React.Ref<unknown>
  "aria-controls"?: AriaAttributes["aria-controls"]
  "aria-expanded"?: AriaAttributes["aria-expanded"]
  onClear?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  canGrow?: boolean
  children: React.ReactNode & {
    onFocus?: () => void
    onBlur?: () => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onChange?: (
      value: T | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
    value?: T
  }
  icon?: IconType
  isEmpty?: (value: T | undefined) => boolean
  emptyValue?: T
  maxLength?: number
  hideMaxLength?: boolean
  append?: React.ReactNode
  appendTag?: string
  lengthProvider?: (value: T | undefined) => number
  loading?: boolean
  avatar?: AvatarVariant
  loadingIndicator?: {
    /**
     * If true, the loading spinner will be displayed over the content without affecting the layout
     */
    asOverlay?: boolean
    /**
     * The offset of the loading spinner from the content
     */
    offset?: number
  }
  /**
   * Renders a button toggle inside the input field
   */
  buttonToggle?: {
    label: string | [string, string]
    icon: IconType | [IconType, IconType]
    selected: boolean
    disabled?: boolean
    onChange: (selected: boolean) => void
  }
}

const InputField = forwardRef<HTMLDivElement, InputFieldProps<string>>(
  (
    {
      children,
      disabled,
      readonly,
      label,
      labelIcon,
      hideLabel = false,
      className,
      required,
      error,
      status,
      hint,
      size = "sm",
      icon,
      canGrow = false,
      value,
      loading = false,
      loadingIndicator,
      placeholder,
      clearable = false,
      isEmpty = defaultIsEmpty,
      emptyValue = defaultEmptyValue,
      lengthProvider = defaultLengthProvider,
      maxLength,
      hideMaxLength = false,
      append,
      hidePlaceholder = false,
      onClickPlaceholder,
      onClickChildren,
      onClickContent,
      name,
      role,
      appendTag,
      avatar,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      buttonToggle,
      ...props
    }: InputFieldProps<string>,
    ref
  ) => {
    const id = useId()

    const noEdit = disabled || readonly

    const [localValue, setLocalValue] = useState(value)

    // For legacy reasons, error is a shortcut for status with type error
    if (hint) {
      status = {
        type: "default",
        message: hint,
      }
    }

    // Error overrides hint
    if (error) {
      status = {
        type: "error",
        message: typeof error === "string" ? error : undefined,
      }
    }

    if (!label) {
      console.error(
        "InputField: label is required for accessibility reasons. If you don't want to show a label, set hideLabel to true."
      )
    }

    useEffect(() => {
      setLocalValue(
        maxLength && value && lengthProvider(value) > maxLength
          ? value?.substring(0, maxLength)
          : value
      )
    }, [value, lengthProvider, maxLength])

    const handleChange = (
      value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      let v =
        (typeof value === "string" ? value : value.target.value) ?? emptyValue

      if (maxLength && lengthProvider(v) > maxLength) {
        if (typeof v === "string") {
          v = v.substring(0, maxLength)
        } else {
          return
        }
      }

      setLocalValue(v)
      props.onChange?.(v)
    }

    const handleClear = () => {
      handleChange(emptyValue)
      props.onClear?.()
    }

    const handleClickContent = () => {
      if (!disabled) {
        onClickContent?.()
      }
    }

    const handleClickChildren = () => {
      if (!disabled) {
        onClickChildren?.()
      }
    }

    const handleClickPlaceholder = () => {
      if (!disabled) {
        onClickPlaceholder?.()
      }
    }

    /**
     * Detect if the input is being autofilled
     */
    const [isAutofilled, setIsAutofilled] = useState(false)
    const handleAnimationStart = (
      e: React.AnimationEvent<HTMLInputElement>
    ) => {
      if (e.animationName === "autofill") {
        setIsAutofilled(true)
      }
    }

    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const localInputRef = useRef<HTMLElement>(null)
    const inputRef = useMemo(
      () => props.inputRef ?? localInputRef,
      [props.inputRef, localInputRef]
    )

    useEffect(() => {
      if (isAutofilled && !intervalRef.current) {
        intervalRef.current = setInterval(() => {
          // Gets the element depending on the type of the ref
          const element =
            typeof inputRef === "object" && inputRef?.current
              ? (inputRef.current as HTMLElement)
              : null
          if (element) {
            const stillAutofilled =
              element.matches(":-webkit-autofill") ||
              element.matches(":autofill")
            if (!stillAutofilled) {
              setIsAutofilled(false)
              if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
              }
            }
          }
        }, 100)
      }

      // Cleanup function to clear interval on unmount or dependency change
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }
    }, [isAutofilled, inputRef])
    /**********************/

    const hasAppend = append || appendTag || buttonToggle

    return (
      <div
        className={cn(
          "flex flex-col gap-2",
          "pointer-events-none",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        ref={ref}
      >
        {((!hideLabel && label) || maxLength) && (
          <div
            className={cn(
              "flex max-w-full items-center",
              inputFieldWrapperVariants({ size })
            )}
          >
            <div
              className={cn("flex min-w-0 flex-1 flex-row gap-4")}
              data-testid="input-field-top"
            >
              {!hideLabel && label && (
                <Label
                  label={label}
                  required={required}
                  htmlFor={id}
                  icon={labelIcon}
                  className="min-w-0 flex-1"
                  disabled={disabled}
                />
              )}
              {maxLength && !hideMaxLength && !noEdit && (
                <div className="text-right text-f1-foreground-secondary">
                  {lengthProvider(localValue)}/{maxLength}
                </div>
              )}
            </div>
          </div>
        )}
        <div
          className={cn(
            "relative h-fit transition-all",
            "border-[1px] border-solid border-f1-border-secondary bg-f1-background",
            !noEdit && !disabled && "hover:border-f1-border-hover",
            "group focus-within:border-f1-border-hover focus-within:ring-1 focus-within:ring-f1-border-hover",
            "active-within:border-f1-border active-within:ring-1 active-within:ring-f1-border-hover",
            "focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1",
            inputFieldStatusVariants({
              status: status?.type ?? "default",
              disabled: disabled || readonly,
            }),
            readonly && "border-f1-border-secondary bg-f1-background-secondary",
            disabled && "cursor-not-allowed",
            inputFieldVariants({ size, canGrow })
          )}
          data-testid="input-field-wrapper"
        >
          <div
            className="pointer-events-auto relative flex h-full w-full min-w-0 flex-1"
            onClick={handleClickContent}
          >
            {(icon || avatar) && (
              <div
                className={cn(
                  "pointer-events-none absolute left-2 top-[5px] my-auto h-5 w-5 shrink-0",
                  size === "md" && "left-3 top-[9px]"
                )}
              >
                {icon && (
                  <F0Icon
                    onClick={handleClickContent}
                    icon={icon}
                    color="default"
                  />
                )}
                {avatar && <F0Avatar avatar={avatar} size="xs" />}
              </div>
            )}
            <div
              onClick={handleClickChildren}
              className="w-full min-w-0 flex-1"
            >
              {cloneElement(children as React.ReactElement, {
                onChange: handleChange,
                onBlur: props.onBlur,
                onFocus: props.onFocus,
                onAnimationStart: handleAnimationStart,
                disabled: noEdit,
                readOnly: readonly,
                role,
                ref: inputRef,
                "aria-controls": ariaControls,
                "aria-expanded": ariaExpanded,
                id,
                value: localValue ?? "",
                "aria-label": label || placeholder || "no-label",
                "aria-busy": loading,
                "aria-disabled": noEdit,
                name,
                className: cn(
                  "h-full w-full min-w-0 px-3",
                  "[&::-webkit-search-cancel-button]:hidden",
                  (icon || avatar) && "pl-8",
                  (icon || avatar) && size === "md" && "pl-9",
                  disabled && "cursor-not-allowed",
                  (children as React.ReactElement).props.className,
                  inputElementVariants({ size })
                ),
              })}
            </div>
            {!noEdit && (
              <div
                className={cn(
                  "pointer-events-none absolute bottom-0 left-0 top-[1px] z-10 flex flex-1 justify-start px-3 text-f1-foreground-secondary transition-opacity",
                  (icon || avatar) && "pl-8",
                  (icon || avatar) && size === "md" && "pl-9",
                  inputElementVariants({ size }),
                  placeholder &&
                    !hidePlaceholder &&
                    isEmpty(localValue) &&
                    !isAutofilled
                    ? "opacity-1"
                    : "opacity-0"
                )}
                onClick={handleClickPlaceholder}
                aria-hidden="true"
              >
                {placeholder}
              </div>
            )}
            {(clearable || hasAppend || loading) && (
              <div
                className={cn(
                  "flex h-fit min-w-6 items-center gap-1.5 self-center pr-[3px]",
                  size === "md" && "pr-[7px]",
                  "relative"
                )}
              >
                {clearable && !noEdit && (
                  <AnimatePresence initial={!isEmpty(localValue)}>
                    {!isEmpty(localValue) && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full p-0",
                          focusRing()
                        )}
                        aria-label="Clear"
                        type="button"
                        tabIndex={0}
                        data-testid="clear-button"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleClear()
                        }}
                      >
                        <F0Icon
                          icon={CrossedCircle}
                          color="default"
                          size="md"
                        />
                      </motion.button>
                    )}
                  </AnimatePresence>
                )}

                {hasAppend && (
                  <div className="flex min-h-6 min-w-6 items-center justify-center self-center">
                    {append}
                    {appendTag && <AppendTag text={appendTag} />}
                    {buttonToggle && (
                      <F0ButtonToggle
                        label={buttonToggle.label}
                        icon={buttonToggle.icon}
                        selected={buttonToggle.selected}
                        disabled={buttonToggle.disabled}
                        onSelectedChange={buttonToggle.onChange}
                        size="sm"
                      />
                    )}
                  </div>
                )}

                <AnimatePresence>
                  {loading && (
                    <div
                      className={cn(
                        "pointer-events-none flex h-6 w-6 items-center justify-center",
                        loadingIndicator?.asOverlay &&
                          cn(
                            "absolute bottom-0 right-2 top-0",
                            "bg-gradient-to-l from-[#FFFFFF] from-0% dark:from-[#192231]",
                            "via-[#FFFFFF] via-60% dark:via-[#192231]",
                            "to-transparent to-100%",
                            size === "md" && "right-3"
                          ),
                        inputElementVariants({ size })
                      )}
                      style={{
                        right:
                          typeof loadingIndicator?.offset === "number"
                            ? loadingIndicator?.offset + (size === "md" ? 6 : 0)
                            : undefined,
                      }}
                    >
                      <Spinner size="small" className="mt-[1px]" />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
        <InputMessages status={status} />
      </div>
    )
  }
)

InputField.displayName = "InputField"

export { InputField }
