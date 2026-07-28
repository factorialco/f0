import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { forwardRef } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { ToggleGroup, ToggleGroupItem } from "@/ui/ToggleGroup"

import { RatingSize, F0RatingProps } from "./types"

const TILE_BASE =
  "flex items-center justify-center border border-solid border-f1-border font-medium text-f1-foreground"

const TILE_SIZE: Record<RatingSize, string> = {
  sm: "size-6 rounded-sm text-xs",
  md: "size-8 rounded text-sm",
  lg: "size-10 rounded-md text-sm",
}

const TILE_SELECTED =
  "border-f1-border-selected bg-f1-background-selected-secondary"

export const F0Rating = forwardRef<HTMLDivElement, F0RatingProps>(
  (
    {
      value,
      defaultValue,
      max = 5,
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

    const tiles = Array.from({ length: Math.max(0, max) }, (_, i) => i + 1)

    const resolvedLabel = ariaLabelledBy
      ? undefined
      : (ariaLabel ??
        (localValue != null
          ? t("rating.ariaLabel", { value: localValue, max })
          : t("rating.ariaLabelEmpty", { max })))

    if (readOnly) {
      return (
        <div
          ref={ref}
          role="img"
          aria-label={resolvedLabel}
          aria-labelledby={ariaLabelledBy}
          className="inline-flex items-center gap-2"
        >
          {tiles.map((tile) => (
            <span
              key={tile}
              aria-hidden
              className={cn(
                TILE_BASE,
                TILE_SIZE[size],
                localValue === tile && TILE_SELECTED
              )}
            >
              {tile}
            </span>
          ))}
        </div>
      )
    }

    const handleChange = (next: string) => {
      const parsed = next === "" ? null : Number(next)
      if (required && parsed === null) return
      setLocalValue(parsed)
    }

    return (
      <ToggleGroup
        ref={ref}
        type="single"
        value={localValue != null ? String(localValue) : ""}
        onValueChange={handleChange}
        disabled={disabled}
        aria-label={resolvedLabel}
        aria-labelledby={ariaLabelledBy}
        className="inline-flex items-center gap-2"
      >
        {tiles.map((tile) => (
          <ToggleGroupItem
            key={tile}
            value={String(tile)}
            disabled={disabled}
            className={cn(
              TILE_BASE,
              TILE_SIZE[size],
              "cursor-pointer transition-colors hover:border-f1-border-hover",
              "data-[state=on]:border-f1-border-selected data-[state=on]:bg-f1-background-selected-secondary",
              "disabled:cursor-default disabled:text-f1-foreground-disabled disabled:hover:border-f1-border",
              focusRing()
            )}
          >
            {tile}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    )
  }
)

F0Rating.displayName = "F0Rating"
