import { forwardRef } from "react"

import { DataTestIdWrapper, type WithDataTestIdProps } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type { F0MapPoint } from "../../types"

/** Human-readable name for a point, for the accessible list / fallback. */
const pointLabel = (p: F0MapPoint, fallback: string): string => {
  if (p.label) return p.label
  switch (p.variant) {
    case "employee":
      return `${p.firstName} ${p.lastName}`.trim()
    case "company":
      return p.name
    default:
      return fallback
  }
}

export interface F0MapListProps extends WithDataTestIdProps {
  points: F0MapPoint[]
  selectedId: string | null
  onSelect: (id: string) => void
  /**
   * Render visibly (the WebGL/tile-error fallback). Otherwise the list is
   * screen-reader-only - present in the DOM and operable, but not shown.
   */
  visible?: boolean
  /** Accessible name for the list landmark (and heading when visible). */
  label?: string
  /** Anchor id, so a "skip to list" link can move focus here. */
  id?: string
  /** @private */
  className?: string
}

/**
 * The map's markers as a real, operable HTML list - the conformant text
 * alternative to the WebGL canvas (which is opaque to assistive tech) and the
 * visible fallback when the map can't render. Screen-reader and keyboard users
 * drive the map through this: activating an item selects that marker (F0Map
 * flies to it). Kept in sync with the map by rendering from the same `points`.
 */
export const F0MapList = forwardRef<HTMLElement, F0MapListProps>(
  function F0MapList(
    {
      points,
      selectedId,
      onSelect,
      visible = false,
      label,
      id,
      dataTestId,
      className,
    },
    ref
  ) {
    const i18n = useI18n()
    const listLabel = label ?? i18n.map.listLabel
    return (
      <DataTestIdWrapper dataTestId={dataTestId}>
        <nav
          ref={ref}
          id={id}
          aria-label={listLabel}
          tabIndex={-1}
          className={cn(
            "outline-none",
            visible
              ? "absolute inset-0 z-20 overflow-auto bg-f1-background p-4"
              : "sr-only",
            className
          )}
        >
          {visible && (
            <h2 className="text-f1-foreground mb-2 text-base font-medium">
              {listLabel}
            </h2>
          )}
          <ul className={visible ? "flex flex-col gap-0.5" : undefined}>
            {points.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  aria-current={p.id === selectedId || undefined}
                  onClick={() => onSelect(p.id)}
                  className={cn(
                    "w-full text-left",
                    visible &&
                      "text-f1-foreground hover:bg-f1-background-hover aria-[current=true]:bg-f1-background-selected rounded-md px-3 py-2 text-sm"
                  )}
                >
                  {pointLabel(p, i18n.map.unnamedLocation)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </DataTestIdWrapper>
    )
  }
)

F0MapList.displayName = "F0MapList"
