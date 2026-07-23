import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"
import { Checkbox } from "@/ui/checkbox"

import { useAudienceEntitySubtitle } from "../hooks/useAudienceEntitySubtitle"
import type { AudienceOptionItem } from "../internal-types"
import { AudienceAvatar } from "./AudienceAvatar"

export const AudienceOptionRow = ({
  item,
  active,
  onToggle,
  onActivate,
}: {
  item: AudienceOptionItem
  active: boolean
  onToggle: (item: AudienceOptionItem) => void
  onActivate: (item: AudienceOptionItem) => void
}) => {
  const getSubtitle = useAudienceEntitySubtitle()
  const rowRef = useRef<HTMLDivElement>(null)
  const { entity } = item.option

  // Keep the keyboard-active option visible when arrow-navigating a
  // scrollable dropdown
  useEffect(() => {
    if (active) {
      rowRef.current?.scrollIntoView({ block: "nearest" })
    }
  }, [active])
  const subtitle = item.option.disabledReason ?? getSubtitle(entity)

  return (
    <div
      ref={rowRef}
      id={item.domId}
      role="option"
      aria-selected={item.selected}
      aria-disabled={item.disabled || undefined}
      className={cn(
        "flex items-center gap-2 rounded px-2 py-1.5 transition-colors",
        item.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        active && !item.disabled && "bg-f1-background-hover"
      )}
      // Keep focus in the combobox input while picking
      onPointerDown={(event) => event.preventDefault()}
      onPointerMove={() => onActivate(item)}
      onClick={() => {
        if (!item.disabled) {
          onToggle(item)
        }
      }}
    >
      <AudienceAvatar entity={entity} size="sm" />
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate font-medium text-f1-foreground">
          {entity.name}
        </span>
        {subtitle && (
          <span className="truncate text-sm text-f1-foreground-secondary">
            {subtitle}
          </span>
        )}
      </div>
      <span aria-hidden="true" className="pointer-events-none">
        <Checkbox
          checked={item.selected}
          disabled={item.disabled}
          tabIndex={-1}
        />
      </span>
    </div>
  )
}
