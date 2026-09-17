import { useEffect, useRef } from "react"
import { F0SearchInput } from "@/components/F0SearchInput"
import { Search as AssistedSearchIcon } from "@/icons/ai"
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
   * Called once the typing has settled. Reading the query re-renders the whole
   * popover, and doing that on every keystroke costs the field characters —
   * the text has to stay ahead of the reading.
   */
  onSettle?: (value: string) => void
  /** Queries already run here, newest first. */
  recent?: string[]
  recentTitle?: string
}

/**
 * The assisted query as a pane of the filters popover, built like the panes
 * beside it: the same search box at the top, and rows under it that are picked
 * the same way. What it understood is said by the filters themselves.
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
  const onSettleRef = useRef(onSettle)
  onSettleRef.current = onSettle

  useEffect(() => {
    const timer = setTimeout(() => onSettleRef.current?.(value), 200)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="flex h-full w-full flex-col">
      <div className="rounded-tr-xl p-2">
        <F0SearchInput
          icon={AssistedSearchIcon}
          placeholder={placeholder}
          value={value}
          onChange={(next) => onChange(next ?? "")}
          clearable
          autoFocus
          tabIndex={0}
        />
      </div>

      {value && analysis?.note ? (
        <p className="px-3.5 pb-1 text-base text-f1-foreground-secondary">
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
