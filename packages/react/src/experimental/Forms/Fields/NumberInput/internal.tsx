import { useControllableState } from "@radix-ui/react-use-controllable-state"
import {
  CSSProperties,
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
import { cn } from "@/lib/utils"
import { Input } from "@/ui/input"
import { InputMessages } from "@/ui/InputField/components/InputMessages"
import { Label } from "@/ui/InputField/components/Label"
import { InputFieldStatus } from "@/ui/InputField/types"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { InputInternalProps } from "../Input/internal"
import { Arrows } from "./components/Arrows"
import { extractNumber } from "./internal/extractNumber"

const formatValue = (value: number, locale: string, maxDecimals?: number) =>
  new Intl.NumberFormat(locale, {
    maximumFractionDigits: maxDecimals,
    useGrouping: false,
  }).format(value)

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
    layout?: "block" | "inline"
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

export type NumberInputInternalProps = Omit<
  InputInternalProps<string>,
  "value" | "type" | "onChange"
> & {
  locale: string
  value?: number | null
  step?: number
  min?: number
  max?: number
  maxDecimals?: number
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
  const [fieldValue, setFieldValue] = useState<string>(() =>
    value != null ? formatValue(value, locale, maxDecimals) : ""
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
        !extractNumber(proposedValue, { maxDecimals }) ||
        (maxDecimals === 0 && /[.,]/.test(data))
      ) {
        e.preventDefault()
      }
    },
    [maxDecimals]
  )

  const handleChange = (inputValue: string) => {
    const extractedData = extractNumber(inputValue, { maxDecimals })
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

    const clampedData = extractNumber(clampedValue.toString(), {
      maxDecimals,
    })
    setFieldValue(clampedData?.formattedValue ?? "")
    inputOnChange?.(clampedData?.value ?? null)
  }

  const handleStep = (type: "increase" | "decrease") => () => {
    if (!step) return
    if (inputValue == null) {
      const initialValue = step
      return handleChange(formatValue(initialValue, locale, maxDecimals))
    }

    const newValue = type === "increase" ? inputValue + step : inputValue - step
    if ((min != null && newValue < min) || (max != null && newValue > max)) {
      return
    }

    handleChange(formatValue(newValue, locale, maxDecimals))
  }

  useEffect(() => {
    // This reconciles the fieldValue when `value` changes external to this component
    const extractedData = extractNumber(fieldValue, { maxDecimals })

    if (inputValue === undefined || inputValue == extractedData?.value) return

    setFieldValue(
      inputValue != null ? formatValue(inputValue, locale, maxDecimals) : ""
    )
  }, [fieldValue, inputValue, locale, maxDecimals])

  const innerStatusTypeOnly = resolvedStatus
    ? { type: resolvedStatus.type }
    : undefined

  const innerInput = (
    <div className="group relative">
      <Input
        type="text"
        ref={ref}
        id={inputId}
        value={fieldValue}
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
    const applyLayout = apply?.layout ?? "block"
    const showInlineApplyButton = showApplyButton && applyLayout === "inline"

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
                showInlineApplyButton ? (
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
            {showApplyButton && !showInlineApplyButton ? (
              <div className="mt-2 flex justify-end">
                <F0Button
                  variant="default"
                  icon={ApplyIcon}
                  label={applyLabel}
                  onClick={handleApply}
                />
              </div>
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
