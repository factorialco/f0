import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { cva } from "cva"
import { forwardRef, useCallback, useEffect, useId, useState } from "react"

import { cn, focusRing } from "@/lib/utils"
import { InputMessages } from "@/ui/InputField/components/InputMessages"
import { Label } from "@/ui/InputField/components/Label"
import { Slider, SliderRange, SliderThumb, SliderTrack } from "@/ui/slider"

import { SliderRangeLabels } from "./components/SliderRangeLabels"
import { SliderTooltip } from "./components/SliderTooltip"
import type { F0SliderProps } from "./types"

const trackVariants = cva({
  base: "relative grow overflow-hidden rounded-full bg-f1-background-tertiary",
  variants: {
    size: {
      sm: "h-1",
      md: "h-1.5",
    },
    status: {
      default: "",
      warning: "",
      info: "",
      error: "",
    },
  },
})

const rangeVariants = cva({
  base: "absolute h-full",
  variants: {
    status: {
      default: "bg-f1-background-selected-bold",
      warning: "bg-f1-background-warning-bold",
      info: "bg-f1-background-info-bold",
      error: "bg-f1-background-critical-bold",
    },
    disabled: {
      true: "bg-f1-background-tertiary",
      false: "",
    },
  },
})

const thumbSizePx = { sm: 16, md: 20 } as const

const thumbVariants = cva({
  base: cn(
    "relative block rounded-full bg-f1-background border-[2px] border-solid",
    "transition-[transform,border-color] hover:scale-110",
    "motion-reduce:transition-none motion-reduce:hover:scale-100",
    "data-[disabled]:cursor-not-allowed data-[disabled]:hover:scale-100"
  ),
  variants: {
    status: {
      default: "border-f1-background-selected-bold",
      warning: "border-f1-background-warning-bold",
      info: "border-f1-background-info-bold",
      error: "border-f1-background-critical-bold",
    },
    disabled: {
      true: "border-f1-background-tertiary",
      false: "",
    },
  },
})

const F0SliderBase = forwardRef<HTMLDivElement, F0SliderProps>((props, ref) => {
  const {
    label,
    ariaLabel,
    hideLabel = false,
    hint,
    status,
    required,
    disabled,
    name,
    value,
    defaultValue,
    onChange,
    min,
    max,
    step = 1,
    minLabel,
    maxLabel,
    formatValue = (v) => String(v),
    showTooltip = "onHover",
    size = "md",
    ...rest
  } = props

  const thumbId = useId()
  const labelId = useId()
  const messagesId = useId()

  const resolvedAriaLabel =
    ariaLabel && ariaLabel.trim().length > 0
      ? ariaLabel
      : label && label.length > 0
        ? label
        : undefined

  useEffect(() => {
    if (!resolvedAriaLabel) {
      console.warn(
        "F0Slider: provide a non-empty `label` or `ariaLabel` for accessibility."
      )
    }
  }, [resolvedAriaLabel])

  const [internalValue, setInternalValue] = useControllableState<number>({
    prop: value,
    defaultProp: defaultValue ?? min,
    onChange,
  })

  const currentValue = internalValue ?? min
  const clampedValue = Math.min(max, Math.max(min, currentValue))

  const percent = max !== min ? ((clampedValue - min) / (max - min)) * 100 : 0

  const thumbWidth = thumbSizePx[size]
  const thumbInBoundsOffset = thumbWidth * (0.5 - percent / 100)

  const handleValueChange = useCallback(
    (next: number[]) => {
      const [first] = next
      if (first === undefined) return
      setInternalValue(first)
    },
    [setInternalValue]
  )

  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const tooltipVisible =
    showTooltip === "always" ||
    (showTooltip === "onHover" && (isHovered || isFocused || isDragging))

  const statusType = status?.type ?? "default"
  const showLabel = !hideLabel && label.length > 0
  const hintStatus =
    status ?? (hint ? { type: "default" as const, message: hint } : undefined)

  // aria-describedby points to messages when present
  const describedBy = hint || status?.message ? messagesId : undefined

  return (
    <div
      ref={ref}
      {...rest}
      className={cn("flex flex-col gap-2", disabled && "cursor-not-allowed")}
    >
      {showLabel && (
        <Label
          label={label}
          required={required}
          htmlFor={thumbId}
          id={labelId}
          disabled={disabled}
        />
      )}
      <Slider
        value={[currentValue]}
        onValueChange={handleValueChange}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        name={name}
        className={cn(
          "relative flex w-full touch-none select-none items-center py-2",
          disabled && "opacity-50"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SliderTrack className={trackVariants({ size, status: statusType })}>
          <SliderRange
            className={rangeVariants({ status: statusType, disabled })}
          />
        </SliderTrack>
        <SliderThumb
          id={thumbId}
          aria-label={showLabel ? undefined : resolvedAriaLabel}
          aria-labelledby={showLabel ? labelId : undefined}
          aria-valuetext={formatValue(currentValue)}
          aria-describedby={describedBy}
          aria-required={required}
          style={{ width: thumbWidth, height: thumbWidth }}
          className={cn(
            thumbVariants({ status: statusType, disabled }),
            focusRing("focus-visible:ring-offset-1")
          )}
          onFocus={(e) => setIsFocused(e.target.matches(":focus-visible"))}
          onBlur={() => setIsFocused(false)}
        />
        {showTooltip !== "never" && (
          <SliderTooltip
            visible={tooltipVisible}
            content={formatValue(currentValue)}
            style={{ left: `calc(${percent}% + ${thumbInBoundsOffset}px)` }}
          />
        )}
      </Slider>
      <SliderRangeLabels minLabel={minLabel} maxLabel={maxLabel} />
      <div id={messagesId} role="status" aria-live="polite">
        <InputMessages status={hintStatus} />
      </div>
    </div>
  )
})

F0SliderBase.displayName = "F0Slider"

export { F0SliderBase }
