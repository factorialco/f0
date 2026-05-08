import * as Popover from "@radix-ui/react-popover"
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"

import { Input as F0Input } from "@/experimental/Forms/Fields/Input"
import { Search as SearchIcon } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import type { SearchResult } from "./types"

import { F0GraphSearchResultsList } from "./F0GraphSearchResultsList"

const Z_INDEX = 1100
const INPUT_WIDTH = 240

interface F0GraphSearchProps {
  value: string
  onChange: (value: string) => void
  results: SearchResult[]
  hasQuery: boolean
  pending?: boolean
  loading?: boolean
  placeholder?: string
  noResultsLabel?: string
  onSelect: (id: string) => void
}

export const F0GraphSearch = ({
  value,
  onChange,
  results,
  hasQuery,
  pending,
  loading,
  placeholder,
  noResultsLabel,
  onSelect,
}: F0GraphSearchProps) => {
  const i18n = useI18n()
  const effectivePlaceholder = placeholder ?? i18n.actions.search
  const effectiveNoResultsLabel = noResultsLabel ?? i18n.graph.search.noResults
  const listboxId = useId()
  const [activeIndex, setActiveIndex] = useState(0)
  const [showActiveOutline, setShowActiveOutline] = useState(false)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const activeResultRef = useRef<HTMLDivElement>(null)

  // Gate visibility on having something meaningful to show. While the index
  // is debouncing with no prior results we keep the popover fully closed so
  // Radix doesn't mount an empty Content box (which leaves a stray shadow).
  const hasContent = results.length > 0 || (!pending && hasQuery)
  const showResults = popoverOpen && hasQuery && hasContent

  // Close popover when the query is cleared. Opening is driven by
  // `handleSearchChange` so that typing always reopens the popover even if
  // the user previously dismissed it via outside click.
  useEffect(() => {
    if (!hasQuery) setPopoverOpen(false)
  }, [hasQuery])

  // Reset active/hover when results change.
  useEffect(() => {
    setActiveIndex(0)
    setShowActiveOutline(false)
    setHoverIndex(null)
  }, [value])

  // Keep the active row in view.
  useEffect(() => {
    if (!showResults) return
    const id = window.requestAnimationFrame(() => {
      activeResultRef.current?.scrollIntoView({ block: "nearest" })
    })
    return () => window.cancelAnimationFrame(id)
  }, [activeIndex, results, showResults])

  const handleSelect = useCallback(
    (id: string) => {
      onSelect(id)
      onChange("")
      setPopoverOpen(false)
      setActiveIndex(0)
      setShowActiveOutline(false)
      setHoverIndex(null)
    },
    [onChange, onSelect]
  )

  const handleSearchChange = useCallback(
    (next: string) => {
      onChange(next)
      setShowActiveOutline(false)
      // Always reopen on input. `hasQuery` may not flip (e.g. user replaces
      // "a" with "b"), so an effect on hasQuery alone won't reopen the popover
      // after an outside-click dismissal.
      if (next.trim().length > 0) setPopoverOpen(true)
    },
    [onChange]
  )

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault()
      onChange("")
      setPopoverOpen(false)
      return
    }

    if (!results.length) return

    if (event.key === "ArrowDown") {
      event.preventDefault()
      if (!showActiveOutline) {
        setActiveIndex(0)
        setShowActiveOutline(true)
      } else {
        setActiveIndex((i) => (i + 1) % results.length)
      }
      setHoverIndex(null)
      return
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()
      if (!showActiveOutline) {
        setActiveIndex(results.length - 1)
        setShowActiveOutline(true)
      } else {
        setActiveIndex((i) => (i - 1 + results.length) % results.length)
      }
      setHoverIndex(null)
      return
    }

    if (event.key === "Enter") {
      event.preventDefault()
      const selected = results[activeIndex]
      if (selected) handleSelect(selected.id)
    }
  }

  return (
    <Popover.Root open={showResults}>
      <Popover.Anchor asChild>
        <div
          ref={anchorRef}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-expanded={showResults}
          aria-controls={listboxId}
          aria-haspopup="listbox"
          aria-activedescendant={
            showResults && results[activeIndex]
              ? `${listboxId}-${results[activeIndex].id}`
              : undefined
          }
          style={{ width: INPUT_WIDTH }}
        >
          <F0Input
            label={effectivePlaceholder}
            hideLabel
            placeholder={effectivePlaceholder}
            value={value}
            onChange={handleSearchChange}
            icon={SearchIcon}
            loading={loading}
            clearable
          />
        </div>
      </Popover.Anchor>
      <Popover.Portal>
        <Popover.Content
          align="start"
          side="bottom"
          sideOffset={4}
          onOpenAutoFocus={(event) => event.preventDefault()}
          onCloseAutoFocus={(event) => event.preventDefault()}
          onInteractOutside={() => setPopoverOpen(false)}
          style={{
            width: INPUT_WIDTH,
            zIndex: Z_INDEX,
            background: "transparent",
          }}
        >
          <F0GraphSearchResultsList
            results={results}
            pending={pending}
            activeIndex={activeIndex}
            hoverIndex={hoverIndex}
            showActiveOutline={showActiveOutline}
            listboxId={listboxId}
            noResultsLabel={effectiveNoResultsLabel}
            activeResultRef={activeResultRef}
            onHover={setHoverIndex}
            onHoverEnd={() => setHoverIndex(null)}
            onSelect={handleSelect}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
