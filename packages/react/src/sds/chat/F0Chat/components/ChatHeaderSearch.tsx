import { type KeyboardEvent, type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0SearchInput } from "@/components/F0SearchInput"
import { ChevronDown, ChevronUp, Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useChatUI } from "../providers/ChatUIProvider"
import { cn } from "@/lib/utils"

/**
 * Inline search bar that replaces the whole header in search mode: F0SearchInput
 * (icon + clearable), a VS Code-style "current/total" counter, prev/next arrows
 * and a close button. Navigation focuses each match in the transcript (scroll +
 * ring) via the shared jump infra. Enter/Shift+Enter/Escape are caught on the
 * wrapper since F0SearchInput doesn't forward key events.
 */
export const ChatHeaderSearch = (): ReactNode => {
  const i18n = useI18n()
  const {
    searchQuery,
    setSearchQuery,
    searching,
    matchCurrent,
    matchTotal,
    goToNextMatch,
    goToPrevMatch,
    closeSearch,
  } = useChatUI()

  const hasMatches = matchTotal > 0
  const hasQuery = searchQuery.trim().length > 0
  // Only "no results" once a search has actually finished — never mid-search.
  const showNoResults = hasQuery && !searching && !hasMatches

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (e.shiftKey) goToPrevMatch()
      else goToNextMatch()
    } else if (e.key === "Escape") {
      e.preventDefault()
      closeSearch()
    }
  }

  return (
    <div className="flex w-full items-center gap-2" onKeyDown={handleKeyDown}>
      <div className="min-w-0 flex-1">
        <F0SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={i18n.chat.searchPlaceholder}
          loading={searching}
          autoFocus
          clearable
          size="sm"
        />
      </div>
      {/* Counter: "3/5" while there are hits, "0/0" in red once a finished
          search has none. Stays blank mid-search (the input shows a spinner). */}
      <span
        className={cn(
          "shrink-0 whitespace-nowrap text-sm tabular-nums",
          showNoResults
            ? "text-f1-foreground-critical"
            : "text-f1-foreground-secondary"
        )}
      >
        {searching ? "" : `${matchCurrent}/${matchTotal}`}
      </span>
      <div className="flex shrink-0 items-center gap-2">
        <div className="flex shrink-0 items-center gap-0">
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={i18n.navigation.previous}
            icon={ChevronUp}
            onClick={goToPrevMatch}
            disabled={!hasMatches || searching}
            size="sm"
          />
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={i18n.navigation.next}
            icon={ChevronDown}
            onClick={goToNextMatch}
            disabled={!hasMatches || searching}
            size="sm"
          />
        </div>
        <ButtonInternal
          variant="ghost"
          hideLabel
          label={i18n.chat.closeSearch}
          icon={Cross}
          onClick={closeSearch}
        />
      </div>
    </div>
  )
}
