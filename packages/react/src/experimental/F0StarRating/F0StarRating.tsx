import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { forwardRef, useState } from "react"

import { Star, StarFilled } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { F0StarRatingProps, StarRatingSize } from "./types"

const STAR_SIZE: Record<StarRatingSize, string> = {
  sm: "size-5",
  md: "size-6",
  lg: "size-8",
}

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n))

/** Fill percentage (0–100) for the i-th star (1-based) given the value shown. */
const fillFor = (starIndex: number, display: number) =>
  clamp((display - (starIndex - 1)) * 100, 0, 100)

export const F0StarRating = forwardRef<HTMLDivElement, F0StarRatingProps>(
  (
    {
      value,
      defaultValue,
      max = 5,
      allowHalf = false,
      onChange,
      readOnly = false,
      disabled = false,
      required = false,
      size = "md",
      ariaLabel,
      ariaLabelledBy,
    },
    ref
  ) => {
    const { t } = useI18n()

    const [localValue, setLocalValue] = useControllableState<number | null>({
      prop: value,
      defaultProp: defaultValue ?? null,
      onChange,
    })

    const [hover, setHover] = useState<number | null>(null)

    const interactive = !readOnly && !disabled
    const step = allowHalf ? 0.5 : 1
    const display = (interactive && hover !== null ? hover : localValue) ?? 0

    const stars = Array.from({ length: Math.max(0, max) }, (_, i) => i + 1)

    const resolvedLabel = ariaLabelledBy
      ? undefined
      : (ariaLabel ??
        (localValue != null
          ? t("starRating.ariaLabel", { value: localValue, max })
          : t("starRating.ariaLabelEmpty", { max })))

    // Which value would a pointer at `clientX` over star `starIndex` pick?
    const valueAt = (starIndex: number, clientX: number, rect: DOMRect) => {
      if (!allowHalf) return starIndex
      const isLeftHalf = clientX - rect.left < rect.width / 2
      return isLeftHalf ? starIndex - 0.5 : starIndex
    }

    const commit = (next: number) => {
      if (!interactive) return
      // Re-selecting the active value clears it — unless the field is
      // required, in which case it's a no-op (a required rating can't be blank).
      if (next === localValue) {
        if (required) return
        setLocalValue(null)
        return
      }
      setLocalValue(next)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!interactive) return
      let next: number | null = null
      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          next = clamp((localValue ?? 0) + step, step, max)
          break
        case "ArrowLeft":
        case "ArrowDown":
          next = clamp((localValue ?? step) - step, 0, max)
          break
        case "Home":
          next = step
          break
        case "End":
          next = max
          break
        default:
          return
      }
      e.preventDefault()
      setHover(null)
      setLocalValue(next === 0 ? null : next)
    }

    const sizeClass = STAR_SIZE[size]

    return (
      <div
        ref={ref}
        role={interactive ? "slider" : "img"}
        aria-label={resolvedLabel}
        aria-labelledby={ariaLabelledBy}
        aria-valuemin={interactive ? 0 : undefined}
        aria-valuemax={interactive ? max : undefined}
        aria-valuenow={interactive ? (localValue ?? 0) : undefined}
        aria-valuetext={interactive ? resolvedLabel : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={interactive ? handleKeyDown : undefined}
        onMouseLeave={interactive ? () => setHover(null) : undefined}
        className={cn(
          "inline-flex items-center gap-0.5 rounded",
          disabled && "opacity-50",
          interactive && focusRing()
        )}
      >
        {stars.map((starIndex) => {
          const pct = fillFor(starIndex, display)
          return (
            <span
              key={starIndex}
              aria-hidden
              className={cn(
                "relative inline-block",
                sizeClass,
                interactive ? "cursor-pointer" : "cursor-default"
              )}
              onMouseMove={
                interactive
                  ? (e) =>
                      setHover(
                        valueAt(
                          starIndex,
                          e.clientX,
                          e.currentTarget.getBoundingClientRect()
                        )
                      )
                  : undefined
              }
              onClick={
                interactive
                  ? (e) =>
                      commit(
                        valueAt(
                          starIndex,
                          e.clientX,
                          e.currentTarget.getBoundingClientRect()
                        )
                      )
                  : undefined
              }
            >
              <Star
                className={cn(
                  "absolute left-0 top-0 text-f1-icon-secondary",
                  sizeClass
                )}
              />
              <span
                className="absolute left-0 top-0 h-full overflow-hidden"
                style={{ width: `${pct}%` }}
              >
                <StarFilled
                  className={cn("block max-w-none text-f1-icon-selected", sizeClass)}
                />
              </span>
            </span>
          )
        })}
      </div>
    )
  }
)

F0StarRating.displayName = "F0StarRating"
