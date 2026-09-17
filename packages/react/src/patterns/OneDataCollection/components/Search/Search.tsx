import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from "motion/react"
import { useEffect, useId, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"
import { useReducedMotion } from "@/lib/a11y"
import { F0Avatar } from "../../../../components/avatars/F0Avatar"
import type { AvatarVariant } from "../../../../components/avatars/F0Avatar"
import { F0Icon } from "../../../../components/F0Icon"
import type { IconType } from "../../../../components/F0Icon"
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
  /**
   * An action offered inside the field once something has been typed. It is a
   * second thing the text can be used for, next to the search itself — shown
   * rather than hidden behind a mode, so it never changes what Enter does.
   */
  inlineAction?: {
    label: string
    icon?: IconType
    /** What it found in the text, said before it is run. */
    hint?: string
    onClick: (query: string) => void
  }
  /**
   * Keeps the field open. For a field that already has a surface of its own —
   * a panel it was opened into — where collapsing to a pill would leave an
   * empty panel behind.
   */
  alwaysOpen?: boolean
  /** The magnifier to draw. Lets a field say what is on the other end of it. */
  icon?: IconType
  /**
   * Name the field carries while closed. It reads as a button and turns into
   * the field on click — a magnifier alone never says the box takes a
   * sentence. Omit it and the plain magnifier is all there is.
   */
  triggerLabel?: string
  /**
   * Ways of finishing what is being typed. The consumer decides which ones to
   * offer for the current text; the field only draws them.
   */
  suggestions?: string[]
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
/** A stretch of the query that was recognised, and the filter it stands for. */
export type QueryAnalysisSpan = { start: number; end: number; key: string }

/**
 * What a consumer made of a query. Produced outside f0 — only the consumer
 * knows its own filters, its vocabulary and who is allowed to see what.
 */
export type QueryAnalysis = {
  spans: QueryAnalysisSpan[]
  /** The filters those spans resolve to, named for a reader. */
  preview: { key: string; label: string; value: string }[]
  /** The same thing as filter state, ready to apply. */
  filters: Record<string, unknown>
  /** Said when the reading is partial or uncertain. */
  note?: string
}

export type SearchPresentation = Pick<
  SearchProps,
  | "placeholderRotation"
  | "onSubmit"
  | "suggestions"
  | "status"
  | "onCancel"
  | "displayValue"
  | "onClear"
> & {
  /**
   * Label for a button that opens the field, placed before it. Omit it and
   * the magnifier is the only way in.
   */
  triggerLabel?: string
  /**
   * Reads a query as it is typed. Cheap and synchronous: it runs on every
   * keystroke, so it belongs to whatever vocabulary the consumer already has
   * on the client, not to a round trip.
   */
  analyze?: (query: string) => QueryAnalysis
  /**
   * Queries this person already ran on this collection, newest first. Offered
   * before any example we could invent: they are the proof the thing works,
   * and running one again costs nothing.
   */
  recent?: string[]
  /**
   * The query being written. Provide it to drive completions from what is
   * typed; omit it and the collection keeps the text itself.
   */
  value?: string
  onChange?: (value: string | undefined) => void
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
/** Written out rather than swapped, at about the speed of a person typing. */
const PLACEHOLDER_TYPE_MS = 45
const PLACEHOLDER_ERASE_MS = 25
const PLACEHOLDER_HOLD_MS = 2200

/**
 * Cycles the example queries while the field has nothing in it. The examples
 * only show once the field is open, so pausing on focus would mean they never
 * visibly changed; typing is what stops them, since the text is then the
 * user's own.
 */
const useRotatingPlaceholder = (
  rotation: string[] | undefined,
  paused: boolean,
  fallback: string
) => {
  const [index, setIndex] = useState(0)
  const [shown, setShown] = useState(0)
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing")
  const reducedMotion = useReducedMotion()
  const examples = rotation ?? []
  const count = examples.length
  const example = examples[index % Math.max(count, 1)] ?? fallback

  useEffect(() => {
    if (count === 0 || paused || reducedMotion) {
      return
    }
    if (phase === "typing") {
      if (shown >= example.length) {
        setPhase("holding")
        return
      }
      const timer = setTimeout(() => setShown(shown + 1), PLACEHOLDER_TYPE_MS)
      return () => clearTimeout(timer)
    }
    if (phase === "holding") {
      if (count < 2) {
        return
      }
      const timer = setTimeout(() => setPhase("erasing"), PLACEHOLDER_HOLD_MS)
      return () => clearTimeout(timer)
    }
    if (shown > 0) {
      const timer = setTimeout(() => setShown(shown - 1), PLACEHOLDER_ERASE_MS)
      return () => clearTimeout(timer)
    }
    setIndex((current) => (current + 1) % count)
    setPhase("typing")
  }, [phase, shown, example, count, paused, reducedMotion])

  if (reducedMotion || paused) {
    return example
  }
  return example.slice(0, shown)
}

/**
 * Splits a completion into what has already been typed and what it adds, so
 * the new part is what stands out — the typed half is on screen just above.
 */
const renderCompletion = (suggestion: string, typed: string | undefined) => {
  if (!typed || !suggestion.toLowerCase().startsWith(typed.toLowerCase())) {
    return suggestion
  }
  return (
    <>
      {suggestion.slice(0, typed.length)}
      <span className="font-semibold">{suggestion.slice(typed.length)}</span>
    </>
  )
}

const SuggestionList = ({
  items,
  activeIndex,
  activeItemRef,
  typed,
  onHover,
  onPick,
}: {
  items: string[]
  activeIndex: number
  activeItemRef: React.RefObject<HTMLButtonElement>
  typed: string | undefined
  onHover: (index: number) => void
  onPick: (suggestion: string) => void
}) => (
  <ul className="absolute right-0 top-full z-50 mt-2 max-h-72 w-max min-w-full max-w-[min(520px,80vw)] overflow-auto rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md">
    {items.map((suggestion, index) => (
      <li key={suggestion}>
        <button
          ref={index === activeIndex ? activeItemRef : undefined}
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onMouseEnter={() => onHover(index)}
          onClick={() => onPick(suggestion)}
          className={cn(
            "flex w-full items-center rounded-[10px] p-2 text-left hover:bg-f1-background-hover",
            index === activeIndex && "bg-f1-background-hover",
            focusRing()
          )}
        >
          <span className="truncate text-base font-normal text-f1-foreground">
            {renderCompletion(suggestion, typed)}
          </span>
        </button>
      </li>
    ))}
  </ul>
)

/** The round clear affordance, shared by the open field and its collapsed form. */
const DismissButton = ({
  label,
  onDismiss,
}: {
  label: string
  onDismiss: () => void
}) => (
  <motion.div
    tabIndex={0}
    className={cn(
      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
      focusRing()
    )}
    onClick={(e) => {
      e.stopPropagation()
      onDismiss()
    }}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        onDismiss()
      }
    }}
    role="button"
    aria-label={label}
  >
    <F0Icon icon={CrossedCircle} size="md" color="secondary" />
  </motion.div>
)

const IconComponent = ({
  loading,
  icon,
}: {
  loading: boolean
  icon: IconType
}) => {
  return loading ? (
    <F0Icon icon={Spinner} className="animate-spin" />
  ) : (
    <F0Icon icon={icon} className="text" />
  )
}

/**
 * The second thing the typed text can do, offered in the field rather than
 * behind a mode: Enter still runs the search, and this runs on a click.
 */
const InlineAction = ({
  action,
  query,
  busy,
  onEmpty,
}: {
  action: SearchProps["inlineAction"]
  query: string | undefined
  busy: boolean
  /** Clicked with nothing written: the field is what is missing, not the action. */
  onEmpty: () => void
}) =>
  !action || busy ? null : (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => (query ? action.onClick(query) : onEmpty())}
      title={action.hint}
      className={cn(
        "flex h-6 shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-xs border-none bg-f1-background-secondary px-2 text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary-hover",
        focusRing()
      )}
    >
      {action.icon ? <F0Icon icon={action.icon} size="sm" /> : null}
      {action.label}
      {action.hint ? (
        <span className="text-f1-foreground-secondary">{action.hint}</span>
      ) : null}
    </motion.button>
  )

/**
 * The field at rest. With a label it reads as a button that says what the
 * field is for; without one it is the magnifier it has always been, showing
 * whatever was last searched.
 */
const ClosedField = ({
  icon,
  label,
  value,
  loading,
  clearLabel,
  searchLabel,
  onOpen,
  onKeyDown,
  onClear,
}: {
  icon: IconType
  label: string | undefined
  value: string | undefined
  loading: boolean
  clearLabel: string
  searchLabel: string
  onOpen: () => void
  onKeyDown: (e: React.KeyboardEvent) => void
  onClear: () => void
}) => (
  <motion.div
    role="button"
    aria-label={label ?? searchLabel}
    tabIndex={0}
    layout
    layoutId="search-container"
    className={cn(
      "relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover",
      focusRing()
    )}
    onClick={onOpen}
    onKeyDown={onKeyDown}
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
        <IconComponent icon={icon} loading={loading} />
      </motion.div>
      {!value && label ? (
        <motion.span
          layout
          className="whitespace-nowrap py-2 pl-7 pr-3 text-base text-f1-foreground"
        >
          {label}
        </motion.span>
      ) : null}
      {value ? (
        <div className="flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5">
          <motion.div layout className="line-clamp-1 overflow-hidden py-2 pl-7">
            {value}
          </motion.div>
          <DismissButton label={clearLabel} onDismiss={onClear} />
        </div>
      ) : null}
    </motion.div>
  </motion.div>
)

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
  icon = SearchIcon,
  triggerLabel,
  inlineAction,
  alwaysOpen = false,
  suggestions,
  placeholderRotation,
  status = "idle",
  onCancel,
  displayValue,
  onClear,
}: SearchProps) => {
  const [isOpen, setOpen] = useState(alwaysOpen)
  const open = alwaysOpen || isOpen
  const [showResults, setShowResults] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
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
  const suggestionItems = suggestions ?? []
  // Only once there is something to finish: an empty field has the rotating
  // placeholder, and a panel over the collection would be in the way. Preview
  // results win when there are any — those are records, these are phrasings.
  const suggestionsVisible =
    open &&
    showResults &&
    !searching &&
    !resultsVisible &&
    Boolean(text) &&
    suggestionItems.length > 0
  const placeholder = useRotatingPlaceholder(
    placeholderRotation,
    Boolean(text) || searching,
    i18n.actions.search
  )

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

  // A field that is already open has had no click to focus it, and it is the
  // only thing in the pane it was opened into.
  useEffect(() => {
    if (!alwaysOpen) {
      return
    }
    inputRef.current?.focus()
  }, [alwaysOpen])

  const handleOpen = () => {
    if (!open) {
      setOpen(true)
      setActiveIndex(-1)
      inputRef.current?.focus()
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

  /** Arrows and Enter, while the completions are the thing being driven. */
  const handleSuggestionsKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((index) =>
        index < suggestionItems.length - 1 ? index + 1 : index
      )
      return
    }

    if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((index) => (index > 0 ? index - 1 : 0))
      return
    }

    if (e.key === "Enter") {
      e.preventDefault()
      // Only a row the user actually moved to wins over what they typed.
      const picked = activeIndex >= 0 ? suggestionItems[activeIndex] : undefined
      submitQuery(picked ?? text ?? "")
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

    if (suggestionsVisible) {
      handleSuggestionsKeyDown(e)
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
              (expanded || text) && "w-[min(340px,40vw)] min-w-[180px]",
              !expanded && !text && triggerLabel && "w-auto"
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
                  className={cn(
                    "relative flex h-full w-full items-center justify-between overflow-hidden bg-f1-background",
                    inlineAction ? "gap-1.5 pr-[3px]" : "gap-1 pr-1.5"
                  )}
                  style={{ borderRadius: 11 }}
                >
                  <motion.div
                    className="absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon"
                    layoutId="search-icon"
                  >
                    <IconComponent
                      icon={icon}
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
                      value={text}
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
                  <DismissButton
                    label={searching ? i18n.actions.cancel : i18n.actions.clear}
                    onDismiss={handleClearOrCancel}
                  />
                  <InlineAction
                    action={inlineAction}
                    query={text}
                    busy={searching}
                    onEmpty={() => inputRef.current?.focus()}
                  />
                </motion.div>
              </motion.div>
            ) : (
              <ClosedField
                icon={icon}
                label={triggerLabel}
                value={text}
                loading={loading || resultsLoading}
                clearLabel={i18n.actions.clear}
                searchLabel={i18n.actions.search}
                onOpen={handleOpen}
                onKeyDown={handleKeyDown}
                onClear={handleClear}
              />
            )}
            {suggestionsVisible ? (
              <SuggestionList
                items={suggestionItems}
                activeIndex={activeIndex}
                activeItemRef={activeItemRef}
                typed={text}
                onHover={setActiveIndex}
                onPick={submitQuery}
              />
            ) : null}
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
