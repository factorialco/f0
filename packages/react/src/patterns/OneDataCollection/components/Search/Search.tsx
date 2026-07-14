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
}

const MAX_PREVIEW_RESULTS = 5

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
}: SearchProps) => {
  const [open, setOpen] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const uniqueId = useId()
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const i18n = useI18n()

  // Cap the preview to the top matches — it narrows as you keep typing.
  const resultItems = (results ?? []).slice(0, MAX_PREVIEW_RESULTS)
  const resultsVisible =
    open && showResults && Boolean(value) && resultItems.length > 0

  // Keep the active row in range as results change.
  useEffect(() => {
    setActiveIndex(-1)
  }, [results])

  const handleClear = () => {
    onChange(undefined)
    setOpen(false)
    setShowResults(false)
    setActiveIndex(-1)
    if (inputRef?.current) {
      inputRef.current.value = ""
    }
  }

  const selectResult = (result: SearchResultItem) => {
    onChange(result.title) // auto-fill the input with the picked result
    onResultSelect?.(result.id)
    setShowResults(false)
    setActiveIndex(-1)
  }

  useOnClickOutside(ref, () => {
    if (open) setOpen(false)
    setShowResults(false)
  })

  const handleOpen = () => {
    if (!open) {
      setOpen(true)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
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

    if (!resultsVisible) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((index) =>
        index < resultItems.length - 1 ? index + 1 : index
      )
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((index) => (index > 0 ? index - 1 : 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      const target = resultItems[activeIndex >= 0 ? activeIndex : 0]
      if (target) selectResult(target)
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
              "relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center",
              (open || value) && "w-[180px]"
            )}
          >
            {open ? (
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
                      loading={loading || resultsLoading}
                      key="loading"
                    />
                  </motion.div>
                  <motion.input
                    layout
                    ref={inputRef}
                    type="text"
                    value={value}
                    placeholder={i18n.actions.search}
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
                  {value && (
                    <div className="flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5">
                      <motion.div
                        layout
                        className="line-clamp-1 overflow-hidden py-2 pl-7"
                      >
                        {value}
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
                  )}
                </motion.div>
              </motion.div>
            )}
            {resultsVisible ? (
              <ul className="absolute right-0 top-full z-50 mt-2 max-h-96 w-72 overflow-auto rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md">
                {resultItems.map((result, index) => (
                  <li key={result.id}>
                    <button
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
              </ul>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </LayoutGroup>
  )
}
