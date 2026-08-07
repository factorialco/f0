import { useControllableState } from "@radix-ui/react-use-controllable-state"
import {
  CSSProperties,
  ComponentProps,
  type ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react"

import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { Calculator, Check } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Input as ShadcnInput } from "@/ui/input"
import { cn } from "@/lib/utils"
import { Input } from "@/ui/input"
import { InputMessages } from "@/components/F0InputField/components/InputMessages"
import { Label } from "@/components/F0InputField/components/Label"
import { InputFieldStatus } from "@/components/F0InputField/types"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { InputFieldProps } from "@/components/F0InputField"
import { Arrows } from "./components/Arrows"
import { extractNumber } from "./internal/extractNumber"
import {
  isDecimalSeparator,
  toEditableString,
  withGroupSeparators,
} from "./internal/localeNumber"

export interface NumberInputPopoverConfig {
  icon?: IconType
  side?: "top" | "bottom" | "left" | "right"
  align?: "start" | "center" | "end"
  open?: boolean
  onOpenChange?: (open: boolean) => void
  triggerLabel?: string
  commitMode?: "immediate" | "deferred"
  apply?: {
    label?: string
    icon?: IconType
    closeOnApply?: boolean
  }
}

const resolveStatus = (
  hint?: string,
  error?: string | boolean,
  status?: InputFieldStatus
): InputFieldStatus | undefined => {
  if (error) {
    return {
      type: "error",
      message: typeof error === "string" ? error : undefined,
    }
  }
  if (hint) return { type: "default", message: hint }
  if (status) return status
  return undefined
}

function FieldLabel({
  label,
  htmlFor,
  disabled,
}: {
  label: string
  htmlFor: string
  disabled?: boolean
}) {
  return (
    <Label
      label={label}
      htmlFor={htmlFor}
      disabled={disabled}
      className="mb-2"
    />
  )
}

function inputWidthStyle(inputWidth?: string): CSSProperties | undefined {
  if (!inputWidth || inputWidth === "auto") return undefined
  return { width: inputWidth }
}

function NumberRow({
  children,
  extraContent,
  inputWidth,
  trailingAction,
}: {
  children: ReactNode
  extraContent?: ReactNode
  inputWidth?: string
  trailingAction?: ReactNode
}) {
  const isAutoWidth = !inputWidth || inputWidth === "auto"

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        style={inputWidthStyle(inputWidth)}
        className={cn(isAutoWidth ? "w-auto" : undefined)}
      >
        {children}
      </div>
      {extraContent && (
        <span className="shrink-0 text-f1-foreground-secondary">
          {extraContent}
        </span>
      )}
      {trailingAction}
    </div>
  )
}

export type NumberInputInternalProps = Pick<
  ComponentProps<typeof ShadcnInput>,
  "ref" | "id" | "aria-describedby" | "aria-invalid"
> &
  Pick<
    InputFieldProps<string>,
    | "autoFocus"
    | "required"
    | "disabled"
    | "size"
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
    locale: string
    value?: number | null
    step?: number
    min?: number
    max?: number
    maxDecimals?: number
    /**
     * Show the locale's thousands separators in the resting display (e.g.
     * `1,234,567`). While the field is focused the number is shown ungrouped
     * for easy editing; typing or pasting the separator works either way. Off
     * by default — enable it for amounts/quantities, but leave it off for
     * years, IDs and other non-grouped numbers. @default false
     */
    grouping?: boolean
    onChange?: (value: number | null) => void
    units?: string
    extraContent?: ReactNode
    inputWidth?: string
    popover?: NumberInputPopoverConfig
  }

export const NumberInputInternal = forwardRef<
  HTMLInputElement,
  NumberInputInternalProps
>(function NumberInput(
  {
    locale,
    id,
    value,
    maxDecimals,
    grouping = false,
    step,
    min,
    max,
    onChange,
    units,
    extraContent,
    inputWidth,
    popover,
    label,
    hint,
    error,
    status,
    hideLabel = false,
    disabled,
    readonly,
    loading,
    onBlur,
    ...props
  },
  ref
) {
  const i18n = useI18n()
  const generatedInputId = useId()
  const inputId = id ?? generatedInputId
  const [popoverOpen, setPopoverOpen] = useControllableState({
    prop: popover?.open,
    defaultProp: false,
    onChange: popover?.onOpenChange,
  })
  const [isFocused, setIsFocused] = useState(false)
  // Always the plain ungrouped number: the single source of truth for the text.
  const [fieldValue, setFieldValue] = useState<string>(() =>
    value != null ? toEditableString(value, locale, maxDecimals) : ""
  )
  const [draftValue, setDraftValue] = useState<number | null>(
    value != null ? value : null
  )

  const localHint = useMemo(() => {
    if (hint !== undefined) {
      return hint
    }
    if (min != null && max != null) {
      return i18n.t("numberInput.between", { min, max })
    }
    if (min != null) {
      return i18n.t("numberInput.greaterThan", { min })
    }
    if (max != null) {
      return i18n.t("numberInput.lessThan", { max })
    }
    return undefined
    // eslint-disable-next-line react-hooks/exhaustive-deps -- We don't need to re-render when the i18n changes
  }, [hint, min, max])

  const hasExtraContent = Boolean(extraContent)
  const isDeferredPopover = popover?.commitMode === "deferred"
  const usesExternalMessages = popover !== undefined || hasExtraContent
  const shouldRenderOuterLabel = !hideLabel && label != null
  const resolvedStatus = resolveStatus(localHint, error, status)
  const shouldRenderOuterMessages =
    usesExternalMessages && resolvedStatus != null
  const isTriggerDisabled = Boolean(disabled || readonly || loading)

  const handlePopoverOpenChange = (open: boolean) => {
    if (open && isTriggerDisabled) {
      return
    }

    setPopoverOpen(open)
  }

  useEffect(() => {
    if (!isDeferredPopover || !popoverOpen) return
    setDraftValue(value != null ? value : null)
  }, [isDeferredPopover, popoverOpen, value])

  const inputValue = isDeferredPopover ? draftValue : value
  const inputOnChange = useMemo(
    () =>
      isDeferredPopover
        ? (nextValue: number | null) => setDraftValue(nextValue)
        : onChange,
    [isDeferredPopover, onChange]
  )

  const handleBeforeInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const inputEvent = e.nativeEvent as InputEvent
      const data = inputEvent.data
      if (!data) return

      const input = e.currentTarget
      const start = input.selectionStart ?? 0
      const end = input.selectionEnd ?? 0
      const proposedValue =
        input.value.slice(0, start) + data + input.value.slice(end)

      if (
        !extractNumber(proposedValue, { maxDecimals, locale }) ||
        (maxDecimals === 0 && isDecimalSeparator(data, locale))
      ) {
        e.preventDefault()
      }
    },
    [maxDecimals, locale]
  )

  const handleChange = (inputValue: string) => {
    const extractedData = extractNumber(inputValue, { maxDecimals, locale })
    if (!extractedData) {
      return
    }

    const { value: parsedValue } = extractedData

    /**
     * Apply min and max constraints
     */
    if (parsedValue === null) {
      setFieldValue("")
      inputOnChange?.(null)
      return
    }

    const clampedValue = Math.max(
      min ?? -Infinity,
      Math.min(max ?? Infinity, parsedValue)
    )

    // When clamping didn't change the value, preserve the user's raw input
    // (e.g. "17." stays as "17." instead of being reformatted to "17").
    if (clampedValue === parsedValue) {
      setFieldValue(extractedData.formattedValue)
      inputOnChange?.(parsedValue)
      return
    }

    const clampedData = extractNumber(toEditableString(clampedValue, locale), {
      maxDecimals,
      locale,
    })
    setFieldValue(clampedData?.formattedValue ?? "")
    inputOnChange?.(clampedData?.value ?? null)
  }

  const handleStep = (type: "increase" | "decrease") => () => {
    if (!step) return
    if (inputValue == null) {
      const initialValue = step
      return handleChange(toEditableString(initialValue, locale, maxDecimals))
    }

    const newValue = type === "increase" ? inputValue + step : inputValue - step
    if ((min != null && newValue < min) || (max != null && newValue > max)) {
      return
    }

    handleChange(toEditableString(newValue, locale, maxDecimals))
  }

  useEffect(() => {
    // Reconcile only when `value` changed externally, so in-progress typing
    // isn't clobbered: `17,` and `50000,50` parse to the number already held.
    const extractedData = extractNumber(fieldValue, { maxDecimals, locale })
    if (inputValue === undefined || inputValue == extractedData?.value) return
    setFieldValue(
      inputValue != null
        ? toEditableString(inputValue, locale, maxDecimals)
        : ""
    )
  }, [fieldValue, inputValue, locale, maxDecimals])

  // Display-only: inserting separators as the user types would fight the caret.
  const displayValue = useMemo(
    () =>
      grouping && !isFocused
        ? withGroupSeparators(fieldValue, locale)
        : fieldValue,
    [grouping, isFocused, fieldValue, locale]
  )

  const innerStatusTypeOnly = resolvedStatus
    ? { type: resolvedStatus.type }
    : undefined

  const innerInput = (
    <div className="group relative">
      <Input
        type="text"
        ref={ref}
        id={inputId}
        value={displayValue}
        inputMode={maxDecimals === 0 ? "numeric" : "decimal"}
        onChange={handleChange}
        {...props}
        label={usesExternalMessages ? (label ?? "") : label}
        hideLabel={hideLabel || usesExternalMessages}
        hint={usesExternalMessages ? "" : localHint}
        error={usesExternalMessages ? undefined : error}
        status={
          usesExternalMessages ? (innerStatusTypeOnly as typeof status) : status
        }
        disabled={disabled}
        loading={loading}
        readonly={readonly}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false)
          onBlur?.()
        }}
        onBeforeInput={handleBeforeInput}
        appendTag={units}
        append={
          step ? (
            <Arrows step={step} disabled={disabled} onClickArrow={handleStep} />
          ) : undefined
        }
      />
    </div>
  )

  if (popover !== undefined) {
    const {
      icon: TriggerIcon = Calculator as IconType,
      side = "bottom",
      align = "start",
      triggerLabel,
      apply,
    } = popover

    const showApplyButton = isDeferredPopover

    const applyLabel = apply?.label ?? i18n.actions.apply

    const ApplyIcon = apply?.icon ?? Check

    const closeOnApply = apply?.closeOnApply ?? true

    const handleApply = () => {
      onChange?.(draftValue)
      if (closeOnApply) {
        handlePopoverOpenChange(false)
      }
    }

    return (
      <Popover open={popoverOpen} onOpenChange={handlePopoverOpenChange}>
        <PopoverTrigger asChild>
          <F0Button
            variant="outline"
            icon={TriggerIcon}
            disabled={isTriggerDisabled}
            hideLabel={!triggerLabel}
            label={triggerLabel ?? label}
          />
        </PopoverTrigger>
        <PopoverContent
          side={side}
          align={align}
          className={cn(
            "w-auto min-w-[220px] rounded-xl border border-solid border-f1-border-secondary p-3"
          )}
        >
          <div className="flex flex-col">
            {shouldRenderOuterLabel ? (
              <FieldLabel
                label={label}
                htmlFor={inputId}
                disabled={isTriggerDisabled}
              />
            ) : null}
            <NumberRow
              extraContent={extraContent}
              inputWidth={inputWidth}
              trailingAction={
                showApplyButton ? (
                  <F0Button
                    variant="default"
                    icon={ApplyIcon}
                    label={applyLabel}
                    onClick={handleApply}
                  />
                ) : undefined
              }
            >
              {innerInput}
            </NumberRow>
            {shouldRenderOuterMessages ? (
              <InputMessages status={resolvedStatus} />
            ) : null}
          </div>
        </PopoverContent>
      </Popover>
    )
  }

  if (!hasExtraContent) {
    return innerInput
  }

  return (
    <div className="flex flex-col">
      {shouldRenderOuterLabel ? (
        <FieldLabel
          label={label}
          htmlFor={inputId}
          disabled={isTriggerDisabled}
        />
      ) : null}
      <NumberRow extraContent={extraContent} inputWidth={inputWidth}>
        {innerInput}
      </NumberRow>
      {shouldRenderOuterMessages ? (
        <InputMessages status={resolvedStatus} />
      ) : null}
    </div>
  )
})

NumberInputInternal.displayName = "NumberInputInternal"
