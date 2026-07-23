import { type RefObject } from "react"

import { cn } from "@/lib/utils"

import { type HighlightSegment } from "../highlight-utils"

import { TypewriterPlaceholder } from "./TypewriterPlaceholder"

interface TextareaFieldProps {
  textareaRef: RefObject<HTMLTextAreaElement>
  highlightRef: RefObject<HTMLDivElement>
  inputValue: string
  onInputChange: (value: string, cursorPos: number) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  onCursorUpdate: () => void
  onScroll: () => void
  highlightSegments: HighlightSegment[]
  hasOverlay: boolean
  multiplePlaceholders: boolean
  placeholders: string[]
  resolvedDefaultPlaceholder: string
  inProgress?: boolean
}

export const TextareaField = ({
  textareaRef,
  highlightRef,
  inputValue,
  onInputChange,
  onKeyDown,
  onCursorUpdate,
  onScroll,
  highlightSegments,
  hasOverlay,
  multiplePlaceholders,
  placeholders,
  resolvedDefaultPlaceholder,
  inProgress,
}: TextareaFieldProps) => {
  return (
    <div
      className={cn("grid flex-1 grid-cols-1 grid-rows-1", "min-h-[20px] py-0")}
    >
      <div
        aria-hidden={true}
        className={cn(
          "col-start-1 row-start-1",
          "pointer-events-none invisible",
          "min-h-[20px] max-h-[240px]",
          "whitespace-pre-wrap break-words",
          "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
          "my-3 px-3"
        )}
      >
        {inputValue.endsWith("\n") ? inputValue + "_" : inputValue}
      </div>
      {hasOverlay && (
        <div
          ref={highlightRef}
          aria-hidden={true}
          className={cn(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          )}
        >
          {highlightSegments.map((seg, i) =>
            seg.type === "mention" ? (
              <span
                key={i}
                className="font-medium text-f1-foreground-secondary"
              >
                {seg.text}
              </span>
            ) : seg.type === "ghost" ? (
              <span key={i} className="text-f1-foreground-secondary opacity-50">
                {seg.text}
              </span>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </div>
      )}
      {!inputValue && !multiplePlaceholders && (
        <p
          className={cn(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "text-f1-foreground-secondary",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "pt-3 px-3",
            "overflow-hidden text-ellipsis whitespace-nowrap"
          )}
        >
          {placeholders.length === 1
            ? placeholders[0]
            : resolvedDefaultPlaceholder}
        </p>
      )}
      <textarea
        autoFocus={false}
        name="one-ai-input"
        rows={1}
        ref={textareaRef}
        value={inputValue}
        onChange={(e) => {
          onInputChange(e.target.value, e.target.selectionStart ?? 0)
        }}
        onKeyDown={onKeyDown}
        onKeyUp={onCursorUpdate}
        onClick={onCursorUpdate}
        onSelect={onCursorUpdate}
        onScroll={onScroll}
        className={cn(
          "col-start-1 row-start-1",
          "min-h-[20px] max-h-[240px] h-auto",
          "resize-none",
          "whitespace-pre-wrap break-words",
          "text-[16px] sm:text-[14px] leading-[20px] font-normal",
          "mt-3 px-3",
          "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "outline-none",
          hasOverlay
            ? "text-transparent caret-f1-foreground"
            : "text-f1-foreground",
          !hasOverlay &&
            (inputValue || !multiplePlaceholders
              ? "caret-f1-foreground"
              : "caret-transparent")
        )}
      />
      {multiplePlaceholders && (
        <TypewriterPlaceholder
          placeholders={placeholders}
          defaultPlaceholder={resolvedDefaultPlaceholder}
          inputValue={inputValue}
          inProgress={inProgress ?? false}
        />
      )}
    </div>
  )
}
