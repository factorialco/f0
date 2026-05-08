import { motion } from "motion/react"
import { type RefObject } from "react"

import { useReducedMotion } from "@/lib/a11y"

import type { SearchResult } from "./types"

import { F0GraphSearchResultRow } from "./F0GraphSearchResultRow"

const SCROLL_MAX_HEIGHT = 216
const BOX_SHADOW = "0 4px 20px 0 hsl(var(--shadow) / 0.08)"

interface F0GraphSearchResultsListProps {
  results: SearchResult[]
  pending?: boolean
  activeIndex: number
  hoverIndex: number | null
  showActiveOutline: boolean
  listboxId: string
  noResultsLabel: string
  activeResultRef: RefObject<HTMLDivElement | null>
  onHover: (index: number) => void
  onHoverEnd: () => void
  onSelect: (id: string) => void
}

export const F0GraphSearchResultsList = ({
  results,
  pending,
  activeIndex,
  hoverIndex,
  showActiveOutline,
  listboxId,
  noResultsLabel,
  activeResultRef,
  onHover,
  onHoverEnd,
  onSelect,
}: F0GraphSearchResultsListProps) => {
  const shouldReduceMotion = useReducedMotion()

  // While the search index is debouncing, keep showing the previous results
  // (if any) and never show the "No results" message — the search hasn't
  // settled yet, so claiming there are no matches would be misleading.
  const showNoResults = !pending && results.length === 0

  // Don't render the popover at all while pending with no prior results,
  // so the user doesn't see a flash of empty UI before the index catches up.
  if (pending && results.length === 0) return null

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.15, ease: "easeOut" }
      }
      style={{ overflow: "hidden" }}
    >
      <div
        style={{ boxShadow: BOX_SHADOW }}
        className="overflow-hidden rounded-2xl border border-solid border-f1-border-secondary bg-f1-background"
      >
        <div className="py-1">
          <div
            style={{ maxHeight: SCROLL_MAX_HEIGHT }}
            className="overflow-y-auto"
          >
            <div
              id={listboxId}
              role="listbox"
              className="flex flex-col gap-0 px-1"
            >
              {results.length > 0 ? (
                results.map((result, index) => (
                  <F0GraphSearchResultRow
                    key={result.id}
                    ref={index === activeIndex ? activeResultRef : undefined}
                    result={result}
                    active={index === activeIndex}
                    hovered={hoverIndex === index}
                    showActiveOutline={showActiveOutline}
                    listboxId={listboxId}
                    onHover={() => onHover(index)}
                    onHoverEnd={onHoverEnd}
                    onSelect={onSelect}
                  />
                ))
              ) : showNoResults ? (
                <div className="px-3 py-2 text-sm text-f1-foreground-secondary">
                  {noResultsLabel}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
