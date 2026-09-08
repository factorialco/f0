import { type KeyboardEvent, type RefObject, useEffect, useRef } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { Search } from "@/icons/app"
import { cn } from "@/lib/utils"

import type { CommandAssistant, CommandEntityRef } from "../types"

import {
  caretToEnd,
  editWouldTakeChipFrom,
  ensureCaretHome,
  hasCaretIn,
  setText,
  textAfterEdit,
  textSegments,
} from "../fieldCaret"
import { ScopeChip } from "./ScopeChip"

type CommandSearchBarProps = {
  query: string
  onQueryChange: (query: string) => void
  /**
   * The query split at every chip, so the palette can rebuild the sentence in
   * the order it was written.
   */
  onSegmentsChange: (segments: string[]) => void
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void
  /**
   * A pending edit would take the chip at `index`: the chain truncates there and
   * keeps `text`. The browser's own mutation is cancelled.
   */
  onChipTakingEdit: (index: number, text: string) => void
  /** Drawn from `data-placeholder` — a `contenteditable` has no `placeholder`. */
  placeholder?: string
  /** The field's accessible name, which is never the placeholder. */
  fieldLabel: string
  /** The chain of references, outermost first. Rendered as chips in order. */
  scopes: CommandEntityRef[]
  /** Per chip: the name it has to be recognised by, and what removing it says. */
  scopeName: (index: number) => string
  removeScopeLabel: (index: number) => string
  assistant?: CommandAssistant
  askLabel: string
  /** Drop the chip at `index`, and every link after it. */
  onRemoveScope: (index: number) => void
  onAsk: () => void
  fieldRef: RefObject<HTMLDivElement>
  listboxId: string
  activeOptionId?: string
  /** Whether there are options — `aria-expanded` reports this, not the panel. */
  hasResults: boolean
  /** At the foot of the sheet, so the divider belongs on its top edge. */
  atFoot: boolean
}

/**
 * The bar: the sentence being written, and the way out of the list.
 *
 * One `contenteditable` field with the chain of scope chips inline in it,
 * because an `<input>` cannot contain an element. `fieldCaret` answers the
 * questions `selectionStart` used to.
 */
export const CommandSearchBar = ({
  query,
  onQueryChange,
  onSegmentsChange,
  onKeyDown,
  onChipTakingEdit,
  placeholder,
  fieldLabel,
  scopes,
  scopeName,
  removeScopeLabel,
  assistant,
  askLabel,
  onRemoveScope,
  onAsk,
  fieldRef,
  listboxId,
  activeOptionId,
  hasResults,
  atFoot,
}: CommandSearchBarProps) => {
  const lastTypedRef = useRef<string | null>(null)

  useEffect(() => {
    if (lastTypedRef.current === query) return
    lastTypedRef.current = null
    setText(fieldRef.current, query)
  }, [fieldRef, query])

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 border-0 border-solid border-f1-border-secondary px-4 py-3.5",
        // The hairline separates the field from the list, so it sits on
        // whichever side the list is on.
        atFoot ? "border-t" : "border-b"
      )}
    >
      <F0Icon icon={Search} size="md" color="secondary" />

      <div
        ref={fieldRef}
        contentEditable
        suppressContentEditableWarning
        data-empty={query === "" && scopes.length === 0 ? "" : undefined}
        data-placeholder={placeholder}
        role="combobox"
        aria-label={fieldLabel}
        aria-expanded={hasResults}
        aria-controls={listboxId}
        aria-activedescendant={activeOptionId}
        className={cn(
          "relative min-w-0 flex-1 cursor-text border-none bg-transparent outline-none",
          "font-sans text-lg text-f1-foreground caret-f1-foreground",
          "h-6 overflow-y-hidden whitespace-nowrap pr-1.5",
          "overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "data-[empty]:before:pointer-events-none data-[empty]:before:absolute data-[empty]:before:inset-y-0 data-[empty]:before:left-0",
          "data-[empty]:before:flex data-[empty]:before:items-center data-[empty]:before:text-f1-foreground-secondary",
          "data-[empty]:before:content-[attr(data-placeholder)]"
        )}
        onInput={() => {
          ensureCaretHome(fieldRef.current)
          const segments = textSegments(fieldRef.current)
          const next = segments.join("")
          onSegmentsChange(segments)
          lastTypedRef.current = next
          onQueryChange(next)
        }}
        onBeforeInput={(event) => {
          if (scopes.length === 0) return
          const native = event.nativeEvent as InputEvent
          const index = editWouldTakeChipFrom(fieldRef.current, native)
          if (index === -1) return
          event.preventDefault()
          onChipTakingEdit(index, textAfterEdit(fieldRef.current, native))
        }}
        onFocus={() => {
          if (!hasCaretIn(fieldRef.current)) caretToEnd(fieldRef.current)
        }}
        onPaste={(event) => {
          event.preventDefault()
          const text = event.clipboardData.getData("text/plain")
          if (text) document.execCommand("insertText", false, text)
        }}
        onKeyDown={onKeyDown}
      >
        {/*
          The chain, outermost first, each chip an inline atom in the text flow.
          Keyed by the ref's own identity rather than by position, so drilling in
          and popping back out does not make React reuse one link's node for
          another's — which would hand the wrong chip's remove control to the
          wrong record.
        */}
        {scopes.map((scope, index) => (
          <ScopeChip
            key={`${scope.type}-${scope.kind === "one" ? scope.id : scope.ids.join(",")}`}
            label={scope.label}
            title={scopeName(index)}
            removeLabel={removeScopeLabel(index)}
            icon={scope.icon}
            avatar={scope.kind === "one" ? scope.avatar : undefined}
            onRemove={() => onRemoveScope(index)}
          />
        ))}
      </div>

      {/*
        The persistent "you can just ask" affordance. It sits in the bar rather
        than in the list because it must not scroll away or compete with a result
        for the top slot, and because it is always about whatever is in the field
        right now (plus the scope, when there is one). Not a tab stop:
        `mod+Enter` is its keyboard path, taught in the footer.
      */}
      {assistant ? (
        <span className="inline-flex shrink-0 items-center">
          <F0Button
            variant="outline"
            size="sm"
            icon={assistant.icon}
            label={assistant.label}
            aria-label={askLabel}
            tabIndex={-1}
            onClick={onAsk}
          />
        </span>
      ) : null}
    </div>
  )
}
