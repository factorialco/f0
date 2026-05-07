import { motion } from "motion/react"
import { type RefObject } from "react"

import type { SearchResult } from "./types"

import { F0GraphSearchResultRow } from "./F0GraphSearchResultRow"

const SCROLL_MAX_HEIGHT = 216
const BOX_SHADOW = "0 4px 20px 0 hsl(var(--shadow) / 0.08)"

interface F0GraphSearchResultsListProps {
  results: SearchResult[]
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
  activeIndex,
  hoverIndex,
  showActiveOutline,
  listboxId,
  noResultsLabel,
  activeResultRef,
  onHover,
  onHoverEnd,
  onSelect,
}: F0GraphSearchResultsListProps) => (
  <motion.div
    initial={{ opacity: 0, y: -4 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.15, ease: "easeOut" }}
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
            ) : (
              <div className="px-3 py-2 text-sm text-f1-foreground-secondary">
                {noResultsLabel}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)
