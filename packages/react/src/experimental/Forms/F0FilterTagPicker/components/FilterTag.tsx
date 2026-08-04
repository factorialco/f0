import type { NewColor } from "@/components/tags/F0TagDot/types"

import { F0Icon } from "@/components/F0Icon"
import { CrossedCircle } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn, focusRing } from "@/lib/utils"

import { getCategoryDotStyle } from "../colorStyles"

interface FilterTagProps {
  categoryLabel: string
  label: string
  color: NewColor
  removeLabel: string
  disabled?: boolean
  selected?: boolean
  onRemove: () => void
}

export function FilterTag({
  categoryLabel,
  label,
  color,
  removeLabel,
  disabled,
  selected,
  onRemove,
}: FilterTagProps) {
  return (
    <span
      className={cn(
        "group/filter-tag mx-0.5 my-0.5 inline-flex max-w-full items-center gap-0.5 rounded-full border border-solid border-f1-border-secondary py-0.5 pl-1 pr-1 font-medium text-f1-foreground align-middle",
        selected && "border-f1-border-selected ring-1 ring-f1-special-ring"
      )}
      aria-label={`${categoryLabel}: ${label}`}
      title={`${categoryLabel}: ${label}`}
    >
      <span
        aria-hidden
        className="m-1 h-2 w-2 shrink-0 rounded-full"
        style={getCategoryDotStyle(color)}
      />
      <OneEllipsis tag="span" lines={1} className="max-w-52 text-base">
        {label}
      </OneEllipsis>
      <span className="mx-1 text-f1-foreground-secondary">·</span>
      <span className="text-base text-f1-foreground-secondary">
        {categoryLabel}
      </span>
      <button
        type="button"
        className={cn(
          "-mr-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-0 bg-transparent p-0 text-f1-icon-secondary opacity-90 transition-[color,opacity] hover:text-f1-icon group-hover/filter-tag:opacity-100 group-focus-within/filter-tag:opacity-100 [@media(pointer:coarse)]:opacity-100 disabled:cursor-not-allowed disabled:text-f1-icon-disabled",
          focusRing()
        )}
        disabled={disabled}
        onMouseDown={(event) => {
          event.preventDefault()
          event.stopPropagation()
        }}
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
          onRemove()
        }}
      >
        <F0Icon icon={CrossedCircle} size="sm" aria-hidden />
        <span className="sr-only">{removeLabel}</span>
      </button>
    </span>
  )
}
