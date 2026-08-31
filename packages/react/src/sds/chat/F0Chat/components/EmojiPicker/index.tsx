import {
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react"
import { type GroupedVirtuosoHandle } from "react-virtuoso"

import {
  EMOJI_CATEGORIES,
  type EmojiEntry,
  searchEmoji,
} from "../../utils/emoji-index"
import { F0SearchInput } from "@/components/F0SearchInput"

import { useEmojiLocaleTerms } from "../../hooks/useEmojiLocaleTerms"
import { detectMaxEmojiVersion } from "../../utils/emoji-support"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import {
  CategoryBar,
  type EmojiSectionId,
  FREQUENT_SECTION_ID,
} from "./CategoryBar"
import { EMOJI_COLUMNS, EmojiGrid } from "./EmojiGrid"
import { buildEmojiLayout, type EmojiSection, moveActiveIndex } from "./layout"
import { useFrequentEmoji } from "./useFrequentEmoji"

export type EmojiPickerProps = {
  /** Receives the emoji character itself, e.g. `"🎉"`. */
  onSelect: (emoji: string) => void
  className?: string
  /**
   * Highest Emoji release to offer. Defaults to what this platform can actually
   * draw — override only to pin behaviour in a test or a screenshot.
   */
  emojiVersion?: number
  /** Focus the search box on mount. On by default: the picker opens from a
   * deliberate click, and typing is the fastest way through 1,800 emoji. */
  autoFocusSearch?: boolean
  /** Language for the search terms. Defaults to the browser's. English is
   * always available regardless — it's in the bundle. */
  locale?: string
}

const NAVIGATION_KEYS = [
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
] as const

type NavigationKey = (typeof NAVIGATION_KEYS)[number]

const isNavigationKey = (key: string): key is NavigationKey =>
  (NAVIGATION_KEYS as readonly string[]).includes(key)

/**
 * F0's emoji picker: system glyphs, F0 tokens, no shadow DOM.
 *
 * This is the panel only — every caller already owns the popover it lives in,
 * and its trigger.
 *
 * Emoji the running platform can't draw are filtered out rather than shown as
 * tofu boxes; see `lib/emoji-support`.
 */
export const EmojiPicker = ({
  onSelect,
  className,
  emojiVersion,
  autoFocusSearch = true,
  locale,
}: EmojiPickerProps): ReactNode => {
  const i18n = useI18n()
  const reactId = useId().replace(/:/g, "")
  const listboxId = `f0-emoji-picker-${reactId}`
  const optionId = useCallback(
    (index: number) => `${listboxId}-option-${index}`,
    [listboxId]
  )

  const virtuosoRef = useRef<GroupedVirtuosoHandle>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const [topRow, setTopRow] = useState(0)

  const maxVersion = useMemo(
    () => emojiVersion ?? detectMaxEmojiVersion(),
    [emojiVersion]
  )

  useEffect(() => {
    if (autoFocusSearch) searchRef.current?.focus()
  }, [autoFocusSearch])

  const { frequent, recordUse } = useFrequentEmoji()

  // Localized search terms, layered over the English index rather than
  // replacing it. Loaded once per session and only when the browser asks for a
  // language emojibase actually ships; English never costs a request.
  const localizedTerms = useEmojiLocaleTerms(locale)

  const categoryLabels = i18n.chat.emojiPicker.categories
  const categorySections = useMemo<EmojiSection[]>(
    () =>
      EMOJI_CATEGORIES.map((category) => ({
        id: category.id,
        label: categoryLabels[category.id],
        emojis: category.emojis.filter((emoji) => emoji.version <= maxVersion),
      })).filter((section) => section.emojis.length > 0),
    [categoryLabels, maxVersion]
  )

  /** What the picker shows when nothing is typed. The frequent row leads, so
   * the eight emoji that cover most uses are one click from opening. */
  const browseSections = useMemo<EmojiSection[]>(() => {
    const usable = frequent.filter((emoji) => emoji.version <= maxVersion)
    return usable.length > 0
      ? [
          {
            id: FREQUENT_SECTION_ID,
            label: i18n.chat.emojiPicker.frequentlyUsed,
            emojis: usable,
          },
          ...categorySections,
        ]
      : categorySections
  }, [
    frequent,
    maxVersion,
    i18n.chat.emojiPicker.frequentlyUsed,
    categorySections,
  ])

  const isSearching = query.trim().length > 0

  const sections = useMemo<EmojiSection[]>(() => {
    if (!isSearching) return browseSections
    const results = searchEmoji(query, { maxVersion, localizedTerms })
    // One unlabelled block: a "Results" header over the only thing on screen is
    // noise, and an empty label keeps its sticky row out of the way.
    return results.length > 0
      ? [{ id: "results", label: "", emojis: results }]
      : []
  }, [isSearching, query, maxVersion, localizedTerms, browseSections])

  const layout = useMemo(
    () => buildEmojiLayout(sections, EMOJI_COLUMNS),
    [sections]
  )

  // Virtuoso keeps its scroll offset when the list under it changes, so typing
  // while parked down in Flags left the (much shorter) result list showing its
  // tail. Only searching resets it — clearing the query is handled by whoever
  // cleared it, and `jumpToSection` scrolls somewhere specific right after.
  useEffect(() => {
    if (!isSearching) return
    virtuosoRef.current?.scrollToIndex({ index: 0, align: "start" })
  }, [query, isSearching])

  // Clamp rather than reset on every layout change: the active cell survives a
  // backspace in the search box whenever the shorter query still has that many
  // results.
  const safeActiveIndex = Math.min(
    activeIndex,
    Math.max(0, layout.flat.length - 1)
  )

  const scrollActiveIntoView = useCallback(
    (index: number) => {
      const row = layout.rowByIndex[index]
      if (row === undefined) return
      virtuosoRef.current?.scrollIntoView({ index: row })
    },
    [layout]
  )

  const select = useCallback(
    (emoji: EmojiEntry) => {
      recordUse(emoji)
      onSelect(emoji.native)
    },
    [recordUse, onSelect]
  )

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      // An IME candidate window owns the arrow keys while it's open.
      if (event.nativeEvent.isComposing) return

      if (isNavigationKey(event.key)) {
        if (layout.flat.length === 0) return
        event.preventDefault()
        const next = moveActiveIndex(layout, safeActiveIndex, event.key)
        setActiveIndex(next)
        scrollActiveIntoView(next)
        return
      }

      if (event.key === "Enter") {
        const emoji = layout.flat[safeActiveIndex]
        if (!emoji) return
        event.preventDefault()
        select(emoji)
        return
      }

      // Escape clears a search before it closes the popover: one key, the two
      // things you might mean, in the order you mean them.
      if (event.key === "Escape" && query.length > 0) {
        event.preventDefault()
        event.stopPropagation()
        setQuery("")
        setActiveIndex(0)
      }
    },
    [layout, safeActiveIndex, scrollActiveIntoView, select, query]
  )

  const jumpToSection = useCallback(
    (id: EmojiSectionId) => {
      const groupIndex = browseSections.findIndex(
        (section) => section.id === id
      )
      if (groupIndex === -1) return

      setQuery("")
      const nextLayout = buildEmojiLayout(browseSections, EMOJI_COLUMNS)
      const row = nextLayout.firstRowBySection[groupIndex] ?? 0
      setActiveIndex(nextLayout.rows[row]?.startIndex ?? 0)
      // Clearing a search swaps the whole section list in this same commit, so
      // the scroll has to wait for Virtuoso to see the new groups.
      requestAnimationFrame(() => {
        virtuosoRef.current?.scrollToIndex({ groupIndex, align: "start" })
      })
    },
    [browseSections]
  )

  /** Whatever section the top of the viewport is in. Every browse section has a
   * bar entry — frequently-used included — so exactly one is always lit, and
   * only a search leaves the bar with nothing selected. */
  const activeSection = useMemo<EmojiSectionId | null>(() => {
    if (isSearching) return null
    const sectionIndex = layout.rows[topRow]?.sectionIndex
    if (sectionIndex === undefined) return null
    return (sections[sectionIndex]?.id as EmojiSectionId) ?? null
  }, [isSearching, layout, topRow, sections])

  return (
    <div
      onKeyDown={handleKeyDown}
      className={cn(
        "flex w-[304px] flex-col overflow-hidden",
        // No border, surface or shadow of its own — the popover around it owns
        // all three. Drawing them here is what made the shadow disappear: the
        // call sites had to switch the popover's off to avoid doubling them up.
        //
        // A DEFINED height, not a max: Virtuoso needs its parent to resolve to
        // a number, and a `flex-1` child inside an auto-height box is circular
        // and collapses to zero. `clamp` always resolves — 400px when it fits,
        // whatever Radix says is available when it doesn't, and never under
        // 180px, which is where it stops being a picker.
        "h-[clamp(180px,var(--radix-popover-content-available-height,400px),400px)]",
        className
      )}
    >
      <div className="shrink-0 p-2">
        <F0SearchInput
          ref={searchRef}
          value={query}
          placeholder={i18n.chat.emojiPicker.search}
          // NOT `autoFocus`: that arms a `setInterval` inside F0SearchInput
          // which re-focuses the field every 50ms for as long as it is mounted.
          // Harmless in a page-level search box, but here it fights the click
          // that picks an emoji and the caret the composer takes back. Focusing
          // once on mount is all this needs.
          clearable
          // A combobox, not a searchbox: focus stays here while the arrows move
          // the selection inside a listbox this field doesn't contain, so the
          // active cell can only be announced through `aria-activedescendant`.
          role="combobox"
          tabIndex={0}
          aria-expanded
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-activedescendant={
            layout.flat.length > 0 ? optionId(safeActiveIndex) : undefined
          }
          onChange={(next) => {
            setQuery(next)
            setActiveIndex(0)
          }}
        />
      </div>

      {/* `min-h-0` is what lets this shrink below its content: a flex item's
          default `min-height: auto` would keep the grid at full size and push
          the category bar out of the popover. */}
      {layout.flat.length === 0 ? (
        <div className="flex min-h-0 flex-1 items-center justify-center px-4 text-center text-base text-f1-foreground-secondary">
          {i18n.chat.emojiPicker.noResults}
        </div>
      ) : (
        <EmojiGrid
          ref={virtuosoRef}
          sections={sections}
          layout={layout}
          activeIndex={safeActiveIndex}
          onActivate={setActiveIndex}
          onSelect={select}
          listboxId={listboxId}
          label={i18n.chat.emojiPicker.grid}
          optionId={optionId}
          onTopRowChange={setTopRow}
        />
      )}

      {/* Driven by the browse sections, not the categories, so the
          frequently-used block gets its own entry and the bar can never be
          showing nothing while you're browsing. */}
      <CategoryBar
        sections={browseSections.map((section) => ({
          id: section.id as EmojiSectionId,
          label: section.label,
        }))}
        activeSection={activeSection}
        onJump={jumpToSection}
      />
    </div>
  )
}
