import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from "motion/react"
import { useEffect, useId, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"
import { F0Avatar } from "../../../../components/avatars/F0Avatar"
import type { AvatarVariant } from "../../../../components/avatars/F0Avatar"
import { F0Icon } from "../../../../components/F0Icon"
import {
  CrossedCircle,
  Search as SearchIcon,
  Spinner,
} from "../../../../icons/app"
import { useI18n } from "../../../../lib/providers/i18n"
import { cn, focusRing } from "../../../../lib/utils"

export type SearchResultItem = {
  id: string
  avatar?: AvatarVariant
  title: string
  subtitle?: string
}

interface SearchProps {
  value?: string
  onChange: (value: string | undefined) => void
  loading?: boolean
  /** Optional rich preview results rendered in a dropdown below the input. */
  results?: SearchResultItem[]
  /** Whether the preview results are still loading. */
  resultsLoading?: boolean
  /** Fired when a preview result is selected. */
  onResultSelect?: (id: string) => void
  /** Whether another page of results can be pulled via infinite scroll. */
  hasMore?: boolean
  /** Whether a further page is currently being appended. */
  loadingMore?: boolean
  /** Request the next page (fired when the list is scrolled near the bottom). */
  onLoadMore?: () => void
  /** Fired when the query is submitted. */
  onSubmit?: (query: string) => void
  /** Placeholders cycled while the field sits idle and empty. */
  placeholderRotation?: string[]
  /** Holds the in-input searching state while a submitted query resolves. */
  status?: "idle" | "searching"
  /** Aborts the in-flight query (the clear button while searching). */
  onCancel?: () => void
  /**
   * Text to show in place of `value`, for a query that has been turned into
   * filters. The chips are what filters from then on, so the query has to stop
   * being applied as plain text while staying readable in the field.
   */
  displayValue?: string
  /**
   * The field was reset. A query that became filters leaves those filters
   * behind, so clearing the text alone would leave the collection filtered by
   * something no longer written anywhere.
   */
  onClear?: () => void
}

/**
 * The presentational half of the search a consumer can drive: everything the
 * natural-language flow needs to render, with none of the parsing behind it.
 * Named apart from the datasource's own `SearchOptions`, which configures
 * whether the search runs at all.
 */
export type SearchPresentation = Pick<
  SearchProps,
  | "placeholderRotation"
  | "onSubmit"
  | "status"
  | "onCancel"
  | "displayValue"
  | "onClear"
> & {
  /**
   * What the parser could not turn into a filter, rendered under the chips.
   * Never leave an unparsed fragment silent: the chips are what filters, so a
   * query the user believes was understood must say where it fell short.
   */
  note?: string
}

// Trigger the next page when the user scrolls within this many px of the bottom.
const LOAD_MORE_SCROLL_MARGIN = 56

// Long enough to read a whole example query before it is swapped out.
const PLACEHOLDER_ROTATION_MS = 2000

const IconComponent = ({ loading }: { loading: boolean }) => {
  return loading ? (
    <F0Icon icon={Spinner} className="animate-spin" />
  ) : (
    <F0Icon icon={SearchIcon} className="text" />
  )
}

export const Search = ({
  value,
  onChange,
  loading = false,
  results,
  resultsLoading = false,
  onResultSelect,
  hasMore = false,
  loadingMore = false,
  onLoadMore,
  onSubmit,
  placeholderRotation,
  status = "idle",
  onCancel,
  displayValue,
  onClear,
}: SearchProps) => {
  const [open, setOpen] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const uniqueId = useId()
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const activeItemRef = useRef<HTMLButtonElement>(null)
  const i18n = useI18n()

  // Render every loaded row; growth is bounded by paginated loading, not a cap.
  const resultItems = results ?? []
  const resultsVisible =
    open && showResults && Boolean(value) && resultItems.length > 0

  // What the field shows: the applied query while typing, otherwise the parsed
  // query the chips now stand for.
  const text = value ?? displayValue
  const searching = status === "searching"
  // An in-flight query holds the field open: collapsing would hide the spinner
  // and the only affordance to abort it.
  const expanded = open || searching
  const rotation = placeholderRotation ?? []
  const placeholder =
    rotation.length > 0
      ? (rotation[placeholderIndex % rotation.length] ?? i18n.actions.search)
      : i18n.actions.search

  const handleResultsScroll = (e: React.UIEvent<HTMLUListElement>) => {
    if (!hasMore || loadingMore || !onLoadMore) {
      return
    }
    const el = e.currentTarget
    if (
      el.scrollHeight - el.scrollTop - el.clientHeight <=
      LOAD_MORE_SCROLL_MARGIN
    ) {
      onLoadMore()
    }
  }

  // Cycle the example placeholders while the field has nothing in it. It only
  // shows once the field is open, so pausing on focus would mean it never
  // visibly changed; typing is what stops it, since the text is then the
  // user's own.
  useEffect(() => {
    if (rotation.length < 2 || text || searching) {
      return
    }
    const timer = setInterval(() => {
      setPlaceholderIndex((index) => (index + 1) % rotation.length)
    }, PLACEHOLDER_ROTATION_MS)
    return () => clearInterval(timer)
  }, [rotation.length, text, searching])

  // Highlight the first row whenever results change, so a plain Enter jumps to
  // the top match without the user having to arrow down or click first.
  useEffect(() => {
    setActiveIndex((results ?? []).length > 0 ? 0 : -1)
  }, [results])

  // Keep the highlighted row visible as the user arrows past the fold.
  useEffect(() => {
    activeItemRef.current?.scrollIntoView({ block: "nearest" })
  }, [activeIndex])

  const handleClear = () => {
    onChange(undefined)
    onClear?.()
    setOpen(false)
    setShowResults(false)
    setActiveIndex(-1)
    if (inputRef?.current) {
      inputRef.current.value = ""
    }
  }

  const submitQuery = (query: string) => {
    if (!query) {
      return
    }
    onChange(query)
    setShowResults(false)
    setActiveIndex(-1)
    onSubmit?.(query)
  }

  // While a query is in flight the clear button aborts it rather than wiping
  // the field, so the user keeps what they typed.
  const handleClearOrCancel = () => {
    if (searching) {
      onCancel?.()
      return
    }
    handleClear()
  }

  const selectResult = (result: SearchResultItem) => {
    onChange(result.title) // auto-fill the input with the picked result
    onResultSelect?.(result.id)
    setShowResults(false)
    setActiveIndex(-1)
  }

  useOnClickOutside(ref, () => {
    if (open && !searching) {
      setOpen(false)
    }
    setShowResults(false)
  })

  const handleOpen = () => {
    if (!open) {
      setOpen(true)
      setActiveIndex(-1)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
    }
  }

  /** Arrows and Enter, once the results list is the thing being driven. */
  const handleResultsKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      if (activeIndex < resultItems.length - 1) {
        setActiveIndex(activeIndex + 1)
      } else if (hasMore && !loadingMore) {
        // At the end of the loaded rows — pull the next page so keyboard users
        // can page through as well, not just scrollers.
        onLoadMore?.()
      }
      return
    }

    if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((index) => (index > 0 ? index - 1 : 0))
      return
    }

    if (e.key === "Enter") {
      e.preventDefault()
      const target = resultItems[activeIndex >= 0 ? activeIndex : 0]
      if (target) {
        selectResult(target)
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        handleOpen()
      }
      return
    }

    if (e.key === "Escape") {
      e.preventDefault()
      if (resultsVisible) {
        setShowResults(false)
        setActiveIndex(-1)
      } else {
        handleClear()
      }
      return
    }

    if (resultsVisible) {
      handleResultsKeyDown(e)
      return
    }

    // No list is driving the field, so Enter hands the raw query to the
    // consumer — the caller decides what to do with it.
    if (e.key === "Enter" && text) {
      e.preventDefault()
      submitQuery(text)
    }
  }

  return (
    <LayoutGroup id={uniqueId}>
      <MotionConfig
        transition={{ duration: 0.2, ease: [0.175, 0.885, 0.32, 1.05] }}
      >
        <AnimatePresence>
          <motion.div
            layout
            ref={ref}
            className={cn(
              "relative flex h-8 w-fit min-w-8 items-center justify-center",
              // The toolbar slot is content-sized (`shrink-0`), so there is no
              // free space for `flex-1` to claim — size against the viewport
              // instead and cap it so wide screens do not get a runaway field.
              (expanded || text) && "w-[min(340px,40vw)] min-w-[180px]"
            )}
          >
            {expanded ? (
              <motion.div
                layout
                layoutId="search-container"
                className="absolute inset-0 h-8 w-full bg-f1-border p-px transition-colors focus-within:bg-f1-border-hover"
                style={{ borderRadius: 12 }}
              >
                <motion.div
                  layout
                  className="relative flex h-full w-full items-center justify-between gap-1 overflow-hidden bg-f1-background pr-1.5"
                  style={{ borderRadius: 11 }}
                >
                  <motion.div
                    className="absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon"
                    layoutId="search-icon"
                  >
                    <IconComponent
                      loading={loading || resultsLoading || searching}
                      key="loading"
                    />
                  </motion.div>
                  {searching ? (
                    <motion.div
                      layout
                      className="flex h-full w-full items-center overflow-hidden py-2 pl-7 text-base text-f1-foreground-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="truncate">
                        {i18n.t("collections.search.searching", {
                          query: text ?? "",
                        })}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.input
                      layout
                      ref={inputRef}
                      type="text"
                      value={text ?? ""}
                      placeholder={placeholder}
                      onChange={(e) => {
                        onChange(e.target.value)
                        setShowResults(true)
                        setActiveIndex(-1)
                      }}
                      className="h-full w-full appearance-none rounded border-none bg-f1-background py-2 pl-7 text-base text-f1-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onKeyDown={handleKeyDown}
                    />
                  )}
                  <motion.div
                    tabIndex={0}
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-full",
                      focusRing()
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleClearOrCancel()
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleClearOrCancel()
                      }
                    }}
                    role="button"
                    aria-label={
                      searching ? i18n.actions.cancel : i18n.actions.clear
                    }
                  >
                    <F0Icon icon={CrossedCircle} size="md" color="secondary" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                role="button"
                aria-label={i18n.actions.search}
                tabIndex={0}
                layout
                layoutId="search-container"
                className={cn(
                  "relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover",
                  focusRing()
                )}
                onClick={handleOpen}
                onKeyDown={handleKeyDown}
                style={{ borderRadius: 10 }}
              >
                <motion.div
                  layout
                  className="relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background"
                  style={{ borderRadius: 9 }}
                >
                  <motion.div
                    className="absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold"
                    layoutId="search-icon"
                  >
                    <IconComponent loading={loading || resultsLoading} />
                  </motion.div>
                  {text ? (
                    <div className="flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5">
                      <motion.div
                        layout
                        className="line-clamp-1 overflow-hidden py-2 pl-7"
                      >
                        {text}
                      </motion.div>
                      <motion.div
                        tabIndex={0}
                        className={cn(
                          "flex h-5 w-5 items-center justify-center rounded-full",
                          focusRing()
                        )}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleClear()
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            handleClear()
                          }
                        }}
                        role="button"
                        aria-label={i18n.actions.clear}
                      >
                        <F0Icon
                          icon={CrossedCircle}
                          size="md"
                          color="secondary"
                        />
                      </motion.div>
                    </div>
                  ) : null}
                </motion.div>
              </motion.div>
            )}
            {resultsVisible ? (
              <ul
                className="absolute right-0 top-full z-50 mt-2 max-h-72 w-72 overflow-auto rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"
                onScroll={handleResultsScroll}
              >
                {resultItems.map((result, index) => (
                  <li key={result.id}>
                    <button
                      ref={index === activeIndex ? activeItemRef : null}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => selectResult(result)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-f1-background-secondary",
                        index === activeIndex && "bg-f1-background-secondary",
                        focusRing()
                      )}
                    >
                      {result.avatar ? (
                        <F0Avatar size="md" avatar={result.avatar} />
                      ) : null}
                      <span className="flex min-w-0 flex-col">
                        <span className="truncate text-md text-f1-foreground">
                          {result.title}
                        </span>
                        {result.subtitle ? (
                          <span className="truncate text-md text-f1-foreground-secondary">
                            {result.subtitle}
                          </span>
                        ) : null}
                      </span>
                    </button>
                  </li>
                ))}
                {loadingMore ? (
                  <li
                    className="flex items-center justify-center py-2 text-f1-icon"
                    aria-hidden
                  >
                    <F0Icon icon={Spinner} className="animate-spin" />
                  </li>
                ) : null}
              </ul>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </LayoutGroup>
  )
}
