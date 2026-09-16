import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import type { QueryAnalysis } from "./Search"

/**
 * One tone per filter the query touches, assigned in the order they appear so
 * the same filter keeps its colour between the text, the legend and the
 * preview. Nothing is read from colour alone — every mark is also named below.
 */
const TONES = [
  { mark: "bg-f1-background-selected", dot: "bg-f1-background-selected-bold" },
  { mark: "bg-f1-background-warning", dot: "bg-f1-background-warning-bold" },
  { mark: "bg-f1-background-positive", dot: "bg-f1-background-positive-bold" },
  { mark: "bg-f1-background-promote", dot: "bg-f1-background-promote-bold" },
  { mark: "bg-f1-background-info", dot: "bg-f1-background-info-bold" },
]

const toneFor = (keys: string[], key: string) =>
  TONES[keys.indexOf(key) % TONES.length] ?? TONES[0]

/** The typed text, with the recognised stretches wrapped in their own tone. */
const Marked = ({
  value,
  analysis,
  keys,
}: {
  value: string
  analysis: QueryAnalysis | undefined
  keys: string[]
}) => {
  const spans = [...(analysis?.spans ?? [])].sort((a, b) => a.start - b.start)
  const parts: React.ReactNode[] = []
  let cursor = 0

  for (const [index, span] of spans.entries()) {
    if (span.start < cursor || span.end > value.length) {
      continue
    }
    if (span.start > cursor) {
      parts.push(value.slice(cursor, span.start))
    }
    parts.push(
      <mark
        key={`${span.start}-${index}`}
        className={cn(
          "rounded px-0.5 text-f1-foreground",
          toneFor(keys, span.key).mark
        )}
      >
        {value.slice(span.start, span.end)}
      </mark>
    )
    cursor = span.end
  }
  parts.push(value.slice(cursor))

  return <>{parts}</>
}

export type AssistedQueryPanelProps = {
  value: string
  onChange: (value: string) => void
  analysis?: QueryAnalysis
  placeholder?: string
  /** Named alongside every mark, so the colours are a shorthand, not the message. */
  legendTitle?: string
  emptyHint?: string
}

/**
 * The assisted query as a panel rather than a field: what has been recognised
 * is shown in place, and what it resolves to is shown underneath. Nothing is
 * applied here — the panel's own apply button commits it, the same as every
 * other filter in this popover.
 */
export const AssistedQueryPanel = ({
  value,
  onChange,
  analysis,
  placeholder,
  emptyHint,
}: AssistedQueryPanelProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // The pane opens with nothing else in it to click, so the field takes the
  // caret rather than making the user find it.
  useEffect(() => {
    textareaRef.current?.focus()
  }, [])
  const keys = [...new Set((analysis?.spans ?? []).map((span) => span.key))]

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="relative min-h-16 rounded-lg border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 focus-within:border-f1-border-hover">
        {/* The visible text: the field on top of it is transparent, so the
            marks sit exactly under the characters they belong to. */}
        <div
          aria-hidden
          className="pointer-events-none whitespace-pre-wrap break-words text-base text-f1-foreground"
        >
          {value ? (
            <Marked value={value} analysis={analysis} keys={keys} />
          ) : (
            <span className="text-f1-foreground-secondary">{placeholder}</span>
          )}
        </div>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={1}
          spellCheck={false}
          className="absolute inset-0 h-full w-full resize-none appearance-none rounded-lg border-none bg-transparent px-3 py-2 text-base text-transparent caret-f1-foreground outline-none"
        />
      </div>

      {value ? (
        analysis?.note ? (
          <p className="text-base text-f1-foreground-secondary">
            {analysis.note}
          </p>
        ) : null
      ) : (
        <p className="text-base text-f1-foreground-secondary">{emptyHint}</p>
      )}
    </div>
  )
}
