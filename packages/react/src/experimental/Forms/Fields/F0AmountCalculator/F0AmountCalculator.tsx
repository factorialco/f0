import {
  CSSProperties,
  type ReactNode,
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react"
import { useControllableState } from "@radix-ui/react-use-controllable-state"

import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { Calculator, Check } from "@/icons/app"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Label } from "@/ui/InputField/components/Label"
import { InputMessages } from "@/ui/InputField/components/InputMessages"
import { InputFieldStatus } from "@/ui/InputField/types"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { F0AmountCalculatorProps } from "./types"

/**
 * Resolves hint/error/status into a single InputFieldStatus for our own
 * message row — mirrors the priority logic in InputField.tsx.
 */
function resolveStatus(
  hint?: string,
  error?: string | boolean,
  status?: InputFieldStatus
): InputFieldStatus | undefined {
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

/**
 * Renders the label row matching NumberInput's own label styling.
 */
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

/**
 * Returns an inline style object for the NumberInput wrapper width.
 * "auto" means no constraint — the input shrinks to content.
 */
function inputWidthStyle(inputWidth?: string): CSSProperties | undefined {
  if (!inputWidth || inputWidth === "auto") return undefined
  return { width: inputWidth }
}

/**
 * The bare input+extraContent row, shared between inline and popover modes.
 * Label, hint, and error are rendered outside this row by the caller.
 */
function CalculatorRow({
  children,
  extraContent,
  inputWidth,
}: {
  children: ReactNode
  extraContent?: ReactNode
  inputWidth?: string
}) {
  const isAutoWidth = !inputWidth || inputWidth === "auto"

  return (
    <div className="flex items-center gap-3">
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
    </div>
  )
}

/**
 * `F0AmountCalculator` is a numeric input component that can be used either
 * inline as a standard form field or as a popover triggered by an icon button.
 *
 * - **Inline** (`popover` omitted): renders a `NumberInput` with an optional
 *   `extraContent` slot to the right (e.g. "of 300,00 €").
 * - **Popover** (`popover={{}}`): renders an outline icon-button (Calculator by
 *   default, overridable via `popover.icon`) that opens a Radix Popover
 *   containing the calculator input.
 *
 * The `inputWidth` prop controls the width of the inner input element.
 * Omit it (or set `"auto"`) to let it shrink-wrap its content.
 *
 * @example Inline with fixed input width
 * ```tsx
 * <F0AmountCalculator
 *   label="Discount"
 *   locale="en-US"
 *   value={value}
 *   onChange={setValue}
 *   units="%"
 *   inputWidth="160px"
 *   extraContent="of 300,00 €"
 * />
 * ```
 *
 * @example Popover with custom icon
 * ```tsx
 * <F0AmountCalculator
 *   label="Discount"
 *   locale="en-US"
 *   value={value}
 *   onChange={setValue}
 *   units="%"
 *   extraContent="of 300,00 €"
 *   popover={{ icon: MyIcon, side: "top", align: "end" }}
 * />
 * ```
 */
const _F0AmountCalculator = forwardRef<
  HTMLInputElement,
  F0AmountCalculatorProps
>(function F0AmountCalculator(
  {
    popover,
    extraContent,
    inputWidth,
    id,
    label,
    hint,
    error,
    status,
    hideLabel = false,
    value,
    onChange: onValueChange,
    ...numberInputProps
  },
  ref
) {
  const i18n = useI18n()
  const generatedInputId = useId()

  const [popoverOpen, setPopoverOpen] = useControllableState({
    prop: popover?.open,
    defaultProp: false,
    onChange: popover?.onOpenChange,
  })
  const [draftValue, setDraftValue] = useState<number | null>(
    value != null ? value : null
  )

  const inputId = id ?? generatedInputId

  const resolvedStatus = resolveStatus(hint, error, status)
  const hasExtraContent = Boolean(extraContent)
  const isDeferredPopover = popover?.commitMode === "deferred"
  const usesExternalMessages = popover !== undefined || hasExtraContent
  const shouldRenderOuterLabel = !hideLabel && label != null
  const shouldRenderOuterMessages = !hideLabel && resolvedStatus != null
  const isTriggerDisabled = Boolean(
    numberInputProps.disabled ||
    numberInputProps.readonly ||
    numberInputProps.loading
  )

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
        : onValueChange,
    [isDeferredPopover, onValueChange]
  )

  // When extraContent is present we own the label/messages row so the flex
  // row height stays stable. We still pass a type-only status (no message) to
  // the inner NumberInput so error/warning border styling is preserved.
  const innerStatusTypeOnly = resolvedStatus
    ? { type: resolvedStatus.type }
    : undefined

  // In popover mode and in inline+extraContent mode we own the message row,
  // so the inner NumberInput must not render its own text messages.
  const innerInput = (
    <NumberInput
      ref={ref}
      id={inputId}
      label={usesExternalMessages ? (label ?? "") : label}
      hideLabel={hideLabel || usesExternalMessages}
      hint={hideLabel || usesExternalMessages ? "" : hint}
      error={hideLabel || usesExternalMessages ? undefined : error}
      status={
        hideLabel || usesExternalMessages
          ? (innerStatusTypeOnly as typeof status)
          : status
      }
      value={inputValue}
      onChange={inputOnChange}
      {...numberInputProps}
    />
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
      onValueChange?.(draftValue)
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
            "w-auto min-w-[220px] rounded-xl border-[hsl(var(--neutral-10))] p-3"
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
            <CalculatorRow extraContent={extraContent} inputWidth={inputWidth}>
              {innerInput}
            </CalculatorRow>
            {shouldRenderOuterMessages ? (
              <InputMessages status={resolvedStatus} />
            ) : null}
            {showApplyButton && (
              <div className="mt-2 flex justify-end">
                <F0Button
                  variant="default"
                  icon={ApplyIcon}
                  label={applyLabel}
                  onClick={handleApply}
                />
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    )
  }

  // Inline mode
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
      <CalculatorRow extraContent={extraContent} inputWidth={inputWidth}>
        {innerInput}
      </CalculatorRow>
      {shouldRenderOuterMessages ? (
        <InputMessages status={resolvedStatus} />
      ) : null}
    </div>
  )
})

_F0AmountCalculator.displayName = "F0AmountCalculator"

export const F0AmountCalculator = experimentalComponent(
  "F0AmountCalculator",
  _F0AmountCalculator
)
