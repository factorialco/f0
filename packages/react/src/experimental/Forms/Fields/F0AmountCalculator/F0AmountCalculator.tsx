import { CSSProperties, forwardRef } from "react"

import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { Calculator } from "@/icons/app"
import { cn } from "@/lib/utils"
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
  if (status) return status
  if (hint) return { type: "default", message: hint }
  return undefined
}

/**
 * Renders the label row matching NumberInput's own label styling.
 */
function FieldLabel({ label }: { label: string }) {
  return (
    <span className="text-md mb-2 flex font-medium text-f1-foreground-secondary">
      {label}
    </span>
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
  children: React.ReactNode
  extraContent?: React.ReactNode
  inputWidth?: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        style={inputWidthStyle(inputWidth)}
        className={cn(
          !inputWidth || inputWidth === "auto" ? "w-auto" : undefined
        )}
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
export const F0AmountCalculator = forwardRef<
  HTMLInputElement,
  F0AmountCalculatorProps
>(function F0AmountCalculator(
  {
    popover,
    extraContent,
    inputWidth,
    label,
    hint,
    error,
    status,
    hideLabel = false,
    ...numberInputProps
  },
  ref
) {
  const resolvedStatus = resolveStatus(hint, error, status)
  const hasExtraContent = Boolean(extraContent)

  // When extraContent is present we own the label/messages row so the flex
  // row height stays stable. We still pass a type-only status (no message) to
  // the inner NumberInput so error/warning border styling is preserved.
  const innerStatusTypeOnly = resolvedStatus
    ? { type: resolvedStatus.type }
    : undefined

  // In popover mode or when the caller passes hideLabel the inner input's own
  // label must be hidden — the outer FieldLabel or the form layout owns it.
  const shouldHideInnerLabel =
    hideLabel || popover !== undefined || hasExtraContent

  const innerInput = hasExtraContent ? (
    <NumberInput
      ref={ref}
      label={label ?? ""}
      hideLabel
      error={undefined}
      status={innerStatusTypeOnly as typeof status}
      {...numberInputProps}
      hint=""
    />
  ) : (
    <NumberInput
      ref={ref}
      label={label}
      hideLabel={shouldHideInnerLabel}
      hint={hideLabel ? "" : hint}
      error={hideLabel ? undefined : error}
      status={hideLabel ? (innerStatusTypeOnly as typeof status) : status}
      {...numberInputProps}
    />
  )

  if (popover !== undefined) {
    const {
      icon: TriggerIcon = Calculator as IconType,
      side = "bottom",
      align = "start",
      open,
      onOpenChange,
      triggerLabel,
    } = popover

    return (
      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <F0Button
            variant="outline"
            icon={TriggerIcon}
            hideLabel={!triggerLabel}
            label={triggerLabel ?? label ?? "Open amount calculator"}
          />
        </PopoverTrigger>
        <PopoverContent
          side={side}
          align={align}
          className={cn("w-auto min-w-[220px] rounded-2xl p-3")}
        >
          <div className="flex flex-col">
            {!hideLabel && label && <FieldLabel label={label} />}
            <CalculatorRow extraContent={extraContent} inputWidth={inputWidth}>
              {innerInput}
            </CalculatorRow>
            {!hideLabel && resolvedStatus && (
              <InputMessages status={resolvedStatus} />
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
      {!hideLabel && label && <FieldLabel label={label} />}
      <CalculatorRow extraContent={extraContent} inputWidth={inputWidth}>
        {innerInput}
      </CalculatorRow>
      {!hideLabel && resolvedStatus && (
        <InputMessages status={resolvedStatus} />
      )}
    </div>
  )
})

F0AmountCalculator.displayName = "F0AmountCalculator"
