import { useEffect, useRef } from "react"
import { cn, focusRing } from "@/lib/utils"
import type { QueryAnalysis } from "./Search"

export type AssistedQueryPanelProps = {
  value: string
  onChange: (value: string) => void
  analysis?: QueryAnalysis
  placeholder?: string
  emptyHint?: string
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
  emptyHint,
  recent,
  recentTitle,
}: AssistedQueryPanelProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // The pane opens with nothing else in it to click, so the field takes the
  // caret rather than making the user find it.
  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

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
      <p className="text-base text-f1-foreground-secondary">
        {value ? analysis?.note : emptyHint}
      </p>

      {!value && recent && recent.length > 0 ? (
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-f1-foreground-secondary">
            {recentTitle}
          </span>
          {recent.map((query) => (
            <button
              key={query}
              type="button"
              onClick={() => onChange(query)}
              className={cn(
                "cursor-pointer appearance-none truncate rounded border-none bg-transparent px-2 py-1.5 text-left text-base text-f1-foreground transition-colors hover:bg-f1-background-secondary",
                focusRing()
              )}
            >
              {query}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
