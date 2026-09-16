import { useEffect, useRef } from "react"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn, focusRing } from "@/lib/utils"
import type { QueryAnalysis } from "./Search"

/** Typed in a hurry, read later: a list reads as a list when it starts alike. */
const asSentence = (query: string) =>
  query.charAt(0).toUpperCase() + query.slice(1)

export type AssistedQueryPanelProps = {
  value: string
  onChange: (value: string) => void
  analysis?: QueryAnalysis
  placeholder?: string
  /**
   * Called once the typing has settled. Marking the filters re-renders the
   * whole popover, and doing that on every keystroke costs the field
   * characters — the text has to stay ahead of the reading.
   */
  onSettle?: (value: string) => void
  /** Queries already run here, newest first. */
  recent?: string[]
  recentTitle?: string
}

/**
 * The assisted query as a pane of the filters popover. What it understood is
 * shown by the filters themselves, ticked in the list beside this one, so the
 * field stays a plain field. Nothing is applied here — the popover's own apply
 * button commits it, the same as every other filter.
 */
export const AssistedQueryPanel = ({
  value,
  onChange,
  analysis,
  placeholder,
  onSettle,
  recent,
  recentTitle,
}: AssistedQueryPanelProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // The pane opens with nothing else in it to click, so the field takes the
  // caret rather than making the user find it.
  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  const onSettleRef = useRef(onSettle)
  onSettleRef.current = onSettle
  useEffect(() => {
    const timer = setTimeout(() => onSettleRef.current?.(value), 200)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="flex h-full flex-col gap-3">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={2}
        spellCheck={false}
        className="w-full resize-none appearance-none rounded-lg border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-secondary focus:border-f1-border-hover"
      />
      {value && analysis?.note ? (
        <p className="text-base text-f1-foreground-secondary">
          {analysis.note}
        </p>
      ) : null}

      {recent && recent.length > 0 ? (
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between gap-1 px-3.5 pb-1">
            <span className="min-w-0 flex-1">
              <OneEllipsis className="text-base font-normal text-f1-foreground-secondary">
                {recentTitle ?? ""}
              </OneEllipsis>
            </span>
          </div>
          {recent.map((query) => (
            <div key={query} className="w-full px-2">
              <button
                type="button"
                onClick={() => onChange(asSentence(query))}
                className={cn(
                  "flex w-full min-w-0 flex-1 cursor-pointer appearance-none items-center justify-between gap-1 rounded border-none bg-transparent p-1.5 text-left text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
                  focusRing()
                )}
              >
                <span className="min-w-0 flex-1">
                  <OneEllipsis>{asSentence(query)}</OneEllipsis>
                </span>
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
