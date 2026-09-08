import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { type AvatarVariant } from "@/components/avatars/F0Avatar"

import { useF0ChatEmit } from "../providers/F0ChatProvider"
import { type F0ChatUser } from "../types"
import { locateMentions } from "../utils/mention-ranges"
import { diffSpan } from "../utils/text-diff"

/** Sentinel id for the "everyone" (`@here`) option — never a real user id. */
export const MENTION_EVERYONE_ID = "@everyone"

/** A tracked mention in the composer text. */
export type MentionEntry = {
  /** A user id, or {@link MENTION_EVERYONE_ID} for `@here`. */
  id: string
  /** Display name as inserted in the text (e.g. "Ana García" or "here"). */
  name: string
  /** Display data carried through to the sent message so the chip can show the
   * member's profile hover card (set when picking a member; absent for @here). */
  avatar?: AvatarVariant
  subtitle?: string
  profileHref?: string
}

/**
 * A tracked mention plus where its `@name` sits in the composer text.
 *
 * The anchor is what makes a mention a token rather than a substring: it is
 * maintained across edits instead of being re-derived from the text, so a
 * mention survives whatever follows it (a comma, the end of the message) and
 * an edit that lands inside it removes the whole thing rather than silently
 * dropping the id and leaving a broken name behind.
 */
export type AnchoredMention = MentionEntry & {
  /** Index of the `@` in the composer text. */
  start: number
  /**
   * Index just past the last character of the `@name` in the text.
   *
   * Recorded where the mention is anchored rather than derived from
   * `name.length`, because the two can differ: a saved message's entry can
   * spell a name in a different Unicode normal form from the body it is
   * matched against — a combining accent for a precomposed one, three jamo for
   * one Hangul syllable — and a derived end then over- or undershoots the text
   * it is supposed to cover.
   */
  end: number
}

/** Index just past the last character of a mention's `@name` in the text. */
export const mentionEnd = (mention: AnchoredMention): number => mention.end

/** A row in the mention popover: a group member, or the "everyone" option. */
export type MentionCandidate =
  | { kind: "everyone"; label: string }
  | { kind: "user"; user: F0ChatUser }

/** Resolved mention payload for {@link F0ChatSendInput}. */
export type MentionPayload = {
  mentions: MentionEntry[]
  mentionedEveryone: boolean
}

export type UseMentionsOptions = {
  /** Current composer value. */
  inputValue: string
  /** Setter for the composer value. */
  setInputValue: (value: string) => void
  /** Cursor position (selectionStart) in the textarea. */
  cursorPosition: number
  /** Setter for the cursor position — used when removing a mention moves it. */
  setCursorPosition: (position: number) => void
  /**
   * Ask the composer to put the textarea caret at `caret` once it has written
   * `forText`. The composer owns the textarea, so it owns the timing: setting a
   * selection before React writes the value aims it at the old string and the
   * write then drops the caret at the end.
   */
  requestSelection: (caret: number, forText: string, focus?: boolean) => void
  /**
   * Called with the text the hook just wrote when it removed a mention itself.
   * That write is the tail of the keystroke that caused it, not a new edit —
   * undo has to put the whole mention back in one step. The text identifies the
   * write, because a flag would be read a commit too early.
   */
  onMentionErased?: (text: string) => void
  /** Ref to the textarea element for reading selection + caret position. */
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
  /**
   * Whether mentions are active. When false (e.g. no `searchMembers`), the hook
   * is inert and the popover never opens.
   */
  enabled: boolean
  /** Search the conversation's members for the popover. */
  searchMembers?: (query: string) => Promise<F0ChatUser[]>
  /**
   * Localized label for the "everyone" option (e.g. "here" / "aquí"). When set,
   * an `@here` entry is pinned at the top of the popover; omit to disable it.
   */
  everyoneLabel?: string
}

export type PopoverPosition = { left: number; bottom: number } | null

export type UseMentionsReturn = {
  isOpen: boolean
  query: string
  /** Popover rows: the "everyone" option (when it matches) then member matches. */
  results: MentionCandidate[]
  isLoading: boolean
  selectedIndex: number
  /** Tracked mentions, anchored in the current text (drives overlay highlighting). */
  mentions: AnchoredMention[]
  popoverPosition: PopoverPosition
  /** Ghost-text completion for the selected row, or null. */
  inlineCompletion: string | null
  /** Handle a keydown — returns true when consumed. */
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => boolean
  /** Insert the given candidate at the active `@` trigger. */
  selectCandidate: (candidate: MentionCandidate) => void
  /** Resolve the mentions/everyone payload to attach when sending. */
  getMentions: () => MentionPayload
  /** Replace the tracked mentions wholesale — used to rehydrate an existing
   * message's mentions when it's reloaded into the composer for editing.
   * `forText` is the body they belong to; it arrives with them because the
   * composer sets its value in the same commit. */
  seedMentions: (entries: MentionEntry[], forText?: string) => void
  /** Put back an exact set of anchors for `forText`. Undo/redo carries the
   * anchors in its snapshot, so it restores rather than re-resolves. */
  restoreMentions: (anchored: AnchoredMention[], forText: string) => void
  /** Close the popover. */
  close: () => void
  /** Dismiss the current `@` trigger until the caret leaves it. */
  dismissCurrentTrigger: () => void
}

/**
 * Finds the active `@` trigger near the cursor — start index of `@` and the
 * query — or null. An `@` that starts an anchored mention never re-opens the
 * popover: that token is already resolved.
 */
function findAtTrigger(
  text: string,
  cursorPos: number,
  anchored: AnchoredMention[]
): { atIndex: number; query: string } | null {
  const textBeforeCursor = text.slice(0, cursorPos)
  const atIndex = textBeforeCursor.lastIndexOf("@")
  if (atIndex === -1) return null

  if (atIndex > 0) {
    const charBefore = text[atIndex - 1]
    if (charBefore !== " " && charBefore !== "\n" && charBefore !== "\t") {
      return null
    }
  }

  const query = text.slice(atIndex + 1, cursorPos)
  if (query.includes("\n")) return null

  if (anchored.some((mention) => mention.start === atIndex)) return null

  return { atIndex, query }
}

/**
 * Can the change from `prev` to `next` be read as replacing `[at, at + removed)`
 * with the `inserted` characters that start there?
 *
 * {@link diffSpan} names the rightmost reading of an ambiguous change, which is
 * the right bias at a mention's tail and the wrong one at its head: typing `@`
 * in front of `@Ana García` — the way a second mention gets started there —
 * repeats the character it lands on, so the rightmost reading puts it inside
 * the token and takes the whole name with it. The readings of one change form
 * a contiguous interval, so testing the anchor's own index settles whether a
 * reading that leaves the mention whole exists at all.
 */
const readsAs = (
  prev: string,
  next: string,
  at: number,
  removed: number,
  inserted: number
): boolean =>
  at >= 0 &&
  next.slice(0, at) === prev.slice(0, at) &&
  next.slice(at + inserted) === prev.slice(at + removed)

/**
 * Re-anchor `anchored` after the composer text went from `prev` to `next`, and
 * report what is left of the mentions the change ran into.
 *
 * A mention the change missed is kept, shifted. One the change ran into is
 * *touched*: the spans it still occupies in `next` are reported so the caller
 * can erase them and take the token out whole. Three rules make that safe:
 *
 * - Adjacency is not overlap, on either side. Typing a comma right after a
 *   mention, deleting the space that followed it, or typing immediately in
 *   front of the `@` all leave the mention alone — the last of those is a pure
 *   insertion at the anchor's own index, which moves the mention rather than
 *   editing it. That holds even when the change is ambiguous and `diffSpan`
 *   named a reading inside the token; see {@link readsAs}.
 * - A change strictly inside a mention takes the whole token, including what
 *   was typed in its place: a half-typed name was never a state the user meant.
 * - A change that swallowed a mention outright erases nothing. Its text is
 *   already gone, and what replaced it is the user's own keystroke or paste.
 */
export const reanchorMentions = (
  prev: string,
  next: string,
  anchored: AnchoredMention[]
): { kept: AnchoredMention[]; touched: { start: number; end: number }[] } => {
  const { start: prefix, prevEnd, nextEnd } = diffSpan(prev, next)
  const delta = next.length - prev.length
  const removed = prevEnd - prefix
  const inserted = nextEnd - prefix

  const kept: AnchoredMention[] = []
  const touched: { start: number; end: number }[] = []
  for (const mention of anchored) {
    const start = mention.start
    const end = mentionEnd(mention)

    if (prefix >= end || prevEnd <= start) {
      // Wholly on one side of the change, so start and end move together.
      const shift = start < prefix ? 0 : delta
      kept.push({ ...mention, start: start + shift, end: end + shift })
      continue
    }

    // The reading that moves this anchor is only available if it does not
    // land it on text another anchor already holds: deleting one of two
    // identical mentions reads equally as deleting the other, and taking that
    // reading for both keeps two ids on one `@name`.
    const moved = { start: start + delta, end: end + delta }
    const free = !kept.some(
      (other) => other.start < moved.end && mentionEnd(other) > moved.start
    )
    if (free && readsAs(prev, next, start - removed, removed, inserted)) {
      kept.push({ ...mention, ...moved })
      continue
    }

    const headSurvives = start < prefix
    const tailSurvives = end > prevEnd
    if (headSurvives && tailSurvives) {
      touched.push({ start, end: end + delta })
      continue
    }
    if (headSurvives) touched.push({ start, end: prefix })
    if (tailSurvives) touched.push({ start: nextEnd, end: end + delta })
  }
  return { kept, touched }
}

/** Cut `spans` out of `text`, sliding the anchors and the caret left to match. */
const eraseSpans = (
  text: string,
  spans: { start: number; end: number }[],
  anchored: AnchoredMention[],
  caret: number
): { text: string; mentions: AnchoredMention[]; caret: number } => {
  const merged: { start: number; end: number }[] = []
  for (const span of [...spans].sort((a, b) => a.start - b.start)) {
    const last = merged[merged.length - 1]
    if (last && span.start <= last.end) last.end = Math.max(last.end, span.end)
    else merged.push({ ...span })
  }

  const removedBefore = (pos: number): number => {
    let removed = 0
    for (const span of merged) {
      if (span.end <= pos) removed += span.end - span.start
      else if (span.start < pos) removed += pos - span.start
    }
    return removed
  }

  let out = ""
  let cursor = 0
  for (const span of merged) {
    out += text.slice(cursor, span.start)
    cursor = span.end
  }
  out += text.slice(cursor)

  return {
    text: out,
    mentions: anchored.map((mention) => ({
      ...mention,
      start: mention.start - removedBefore(mention.start),
      end: mention.end - removedBefore(mention.end),
    })),
    caret: caret - removedBefore(caret),
  }
}

const MIRROR_PROPERTIES = [
  "direction",
  "boxSizing",
  "width",
  "height",
  "overflowX",
  "overflowY",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "MozTabSize",
  "whiteSpace",
  "wordWrap",
  "wordBreak",
] as const

/**
 * A hidden copy of the textarea, laid out with the same metrics, in which the
 * pixel position of one character can be read off a span.
 *
 * Building it is the expensive half — one `getComputedStyle` and a style write
 * per mirrored property — and none of it changes while the popover it
 * positions is open, so it is built once and measured in repeatedly. It is a
 * live document node for that whole time, which is what makes
 * {@link disposeCaretMirror} part of the contract rather than tidiness.
 */
type CaretMirror = {
  textarea: HTMLTextAreaElement
  /** Content width at the time the copy was taken — what decides wrapping. */
  width: number
  div: HTMLDivElement
  prefix: Text
  span: HTMLSpanElement
}

const createCaretMirror = (textarea: HTMLTextAreaElement): CaretMirror => {
  const div = document.createElement("div")
  const style = div.style
  const computed = window.getComputedStyle(textarea)

  style.whiteSpace = "pre-wrap"
  style.wordWrap = "break-word"
  style.position = "absolute"
  style.visibility = "hidden"
  style.overflow = "hidden"

  for (const prop of MIRROR_PROPERTIES) {
    style.setProperty(prop, computed.getPropertyValue(prop))
  }

  // Two stable children, so a measurement writes text and never reshapes the
  // tree: `div.textContent = …` would drop the span on every keystroke.
  const prefix = document.createTextNode("")
  const span = document.createElement("span")
  div.appendChild(prefix)
  div.appendChild(span)
  document.body.appendChild(div)

  return { textarea, width: textarea.clientWidth, div, prefix, span }
}

const disposeCaretMirror = (mirror: CaretMirror): void => {
  mirror.div.remove()
}

const measureInCaretMirror = (
  mirror: CaretMirror,
  index: number
): { left: number; top: number } => {
  const { value } = mirror.textarea
  mirror.prefix.data = value.substring(0, index)
  // Zero-width space so the span has a measurable position even at text end.
  mirror.span.textContent = value.substring(index) || "​"

  return {
    left: mirror.span.offsetLeft,
    top: mirror.span.offsetTop - mirror.textarea.scrollTop,
  }
}

/** Pixel position of the character at `index`, relative to the textarea. */
export function getTextareaCaretCoordinates(
  textarea: HTMLTextAreaElement,
  index: number
): { left: number; top: number } {
  const mirror = createCaretMirror(textarea)
  try {
    return measureInCaretMirror(mirror, index)
  } finally {
    disposeCaretMirror(mirror)
  }
}

const DEBOUNCE_MS = 250

/** One key for the spellings of a name that a reader cannot tell apart. */
const canonicalName = (name: string): string => name.normalize("NFC")

const candidateLabel = (c: MentionCandidate): string =>
  c.kind === "everyone" ? c.label : c.user.name

/**
 * `@`-mention support for the communications composer — same UX as the AI chat
 * (debounced inline search, ghost-text completion, keyboard nav, caret-anchored
 * popover), but driven by the conversation's members. An "everyone" (`@here`)
 * option is pinned on top when `everyoneLabel` is given (groups only). Inert
 * unless `enabled`.
 */
export function useMentions({
  inputValue,
  setInputValue,
  cursorPosition,
  setCursorPosition,
  requestSelection,
  onMentionErased,
  textareaRef,
  enabled,
  searchMembers,
  everyoneLabel,
}: UseMentionsOptions): UseMentionsReturn {
  const emit = useF0ChatEmit()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [memberResults, setMemberResults] = useState<F0ChatUser[]>([])
  // The query `memberResults` answers. Written with them and read by the
  // keyboard guard below, which is the difference between "a search is running"
  // and "the rows are for something else".
  const [resultsQuery, setResultsQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mentions, setMentions] = useState<AnchoredMention[]>([])

  // The anchors are read from event handlers and effects that must not depend
  // on them, so state and ref are written together and the ref is the source.
  const mentionsRef = useRef<AnchoredMention[]>(mentions)
  // Re-anchoring runs on every keystroke and usually produces the same anchors
  // in a new array. Keeping the old reference when nothing moved saves a state
  // write per character, and lets callers treat a new identity as real news.
  const commitMentions = useCallback((next: AnchoredMention[]) => {
    const current = mentionsRef.current
    const unchanged =
      current.length === next.length &&
      current.every((mention, i) => {
        const candidate = next[i]
        return (
          candidate !== undefined &&
          candidate.id === mention.id &&
          candidate.name === mention.name &&
          candidate.start === mention.start &&
          candidate.end === mention.end
        )
      })
    if (unchanged) return
    mentionsRef.current = next
    setMentions(next)
  }, [])
  // The text the anchors are valid for. Every writer to the composer value
  // goes through the reconciler below, which compares against this.
  const prevValueRef = useRef(inputValue)
  const inputValueRef = useRef(inputValue)
  inputValueRef.current = inputValue

  const atIndexRef = useRef<number>(-1)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const searchIdRef = useRef(0)
  const dismissedAtIndexRef = useRef<number>(-1)
  const mirrorRef = useRef<CaretMirror | null>(null)

  // The host owns `searchMembers`, and a host that builds it inline hands the
  // effect below a new dependency on every render — in a group chat, one per
  // event anyone else causes. Read through a ref so the effect keys only on
  // what makes a new request; the boolean is what an absent search means.
  const searchMembersRef = useRef(searchMembers)
  useLayoutEffect(() => {
    searchMembersRef.current = searchMembers
  })
  const canSearch = enabled && !!searchMembers

  /**
   * Retire whatever search is scheduled or in flight.
   *
   * Clearing the timer only helps before the debounce fires; once the host has
   * been called nothing can cancel it, so the id it was dispatched under is
   * bumped and its answer is dropped on arrival. The loading flag has to be
   * resolved here too — the retired search's `finally` no longer will.
   */
  const abandonSearch = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
      debounceRef.current = null
    }
    searchIdRef.current++
    setIsLoading(false)
    setMemberResults((current) => (current.length === 0 ? current : []))
  }, [])

  const discardCaretMirror = useCallback(() => {
    const mirror = mirrorRef.current
    if (!mirror) return
    mirrorRef.current = null
    disposeCaretMirror(mirror)
  }, [])

  const matchesEveryone = useCallback(
    (q: string): boolean =>
      !!everyoneLabel &&
      (q.length === 0 ||
        everyoneLabel.toLowerCase().startsWith(q.toLowerCase())),
    [everyoneLabel]
  )

  // The query reaches the rows only as this boolean, which lets the row memo
  // below keep its array across the keystrokes between two searches. Memoized
  // rather than called inline so a re-render that leaves the query alone still
  // costs nothing.
  const everyoneMatches = useMemo(
    () => matchesEveryone(query),
    [matchesEveryone, query]
  )

  // The "everyone" row (when it matches) followed by member matches.
  const results = useMemo<MentionCandidate[]>(() => {
    const out: MentionCandidate[] = []
    if (everyoneLabel && everyoneMatches) {
      out.push({ kind: "everyone", label: everyoneLabel })
    }
    for (const user of memberResults) out.push({ kind: "user", user })
    return out
  }, [everyoneLabel, everyoneMatches, memberResults])

  // Detect the `@` trigger on every input/cursor change and search.
  useEffect(() => {
    if (!canSearch) {
      abandonSearch()
      setIsOpen(false)
      return
    }

    const trigger = findAtTrigger(inputValue, cursorPosition, mentions)

    if (!trigger) {
      abandonSearch()
      setIsOpen(false)
      setQuery("")
      setSelectedIndex(0)
      atIndexRef.current = -1
      dismissedAtIndexRef.current = -1
      return
    }

    if (trigger.atIndex === dismissedAtIndexRef.current) {
      abandonSearch()
      return
    }

    atIndexRef.current = trigger.atIndex
    setQuery(trigger.query)
    setIsOpen(true)
    setSelectedIndex(0)
    setIsLoading(true)

    if (debounceRef.current) clearTimeout(debounceRef.current)
    const currentSearchId = ++searchIdRef.current

    debounceRef.current = setTimeout(() => {
      const search = searchMembersRef.current
      if (!search) {
        if (currentSearchId === searchIdRef.current) setIsLoading(false)
        return
      }
      search(trigger.query)
        .then((data) => {
          if (currentSearchId !== searchIdRef.current) return
          setMemberResults(data)
          setResultsQuery(trigger.query)
          setSelectedIndex(0)
          // Dismiss only when nothing matches at all (no members AND the
          // "everyone" option doesn't match the typed query).
          if (
            data.length === 0 &&
            !matchesEveryone(trigger.query) &&
            trigger.query.length > 0
          ) {
            dismissedAtIndexRef.current = trigger.atIndex
            setIsOpen(false)
          }
        })
        .catch(() => {
          if (currentSearchId === searchIdRef.current) {
            setMemberResults([])
            setIsOpen(false)
          }
        })
        .finally(() => {
          if (currentSearchId === searchIdRef.current) setIsLoading(false)
        })
    }, DEBOUNCE_MS)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [
    inputValue,
    cursorPosition,
    canSearch,
    mentions,
    matchesEveryone,
    abandonSearch,
  ])

  const close = useCallback(() => {
    // Escape closes without touching the composer text, so the search effect
    // keeps its dependencies and never runs the cleanup that would cancel a
    // pending search.
    abandonSearch()
    setIsOpen(false)
    setQuery("")
    setSelectedIndex(0)
    atIndexRef.current = -1
  }, [abandonSearch])

  const dismissCurrentTrigger = useCallback(() => {
    dismissedAtIndexRef.current = atIndexRef.current
    close()
  }, [close])

  const selectCandidate = useCallback(
    (candidate: MentionCandidate) => {
      const atIndex = atIndexRef.current
      if (atIndex === -1) return

      const name =
        candidate.kind === "everyone" ? candidate.label : candidate.user.name
      const id =
        candidate.kind === "everyone" ? MENTION_EVERYONE_ID : candidate.user.id

      const before = inputValue.slice(0, atIndex)
      const afterCursor = inputValue.slice(cursorPosition)
      const insertedText = `@${name} `
      const newValue = before + insertedText + afterCursor
      const newCursorPos = before.length + insertedText.length

      setInputValue(newValue)

      const entry: MentionEntry =
        candidate.kind === "everyone"
          ? { id, name }
          : {
              id,
              name,
              avatar: candidate.user.avatar,
              subtitle: candidate.user.subtitle,
              profileHref: candidate.user.profileHref,
            }
      // The trigger span [atIndex, cursorPosition) becomes the inserted token,
      // so anchors past it slide and any the trigger overlapped are gone.
      const shift = insertedText.length - (cursorPosition - atIndex)
      const anchored = mentionsRef.current
        .filter((m) => mentionEnd(m) <= atIndex || m.start >= cursorPosition)
        .map((m) =>
          m.start >= cursorPosition
            ? { ...m, start: m.start + shift, end: m.end + shift }
            : m
        )
      // The token was written from `name`, so its extent is exact here.
      anchored.push({
        ...entry,
        start: atIndex,
        end: atIndex + 1 + name.length,
      })
      anchored.sort((a, b) => a.start - b.start)
      prevValueRef.current = newValue
      commitMentions(anchored)

      emit.onMentionInserted({ isEveryone: candidate.kind === "everyone" })
      close()

      // Focus too: the candidate may have been clicked, which took focus to
      // the popover row.
      requestSelection(newCursorPos, newValue, true)
    },
    [
      inputValue,
      cursorPosition,
      setInputValue,
      textareaRef,
      close,
      emit,
      commitMentions,
      requestSelection,
    ]
  )

  /**
   * Can this row still be the answer to what is typed now?
   *
   * A keystroke starts a newer search and resets the highlight to the top of
   * the list the previous one returned, so between the two the highlighted row
   * can be somebody the user has already typed past. Rows that answer the
   * current query are picked as they are — which matching model produced them
   * is the host's business, not this hook's. Only rows answering an older query
   * are held to the check Tab has always made: the label still starts with what
   * is typed. Anything else waits for the search it belongs to, at most one
   * debounce window.
   */
  const stillMatchesQuery = useCallback(
    (candidate: MentionCandidate): boolean =>
      resultsQuery === query ||
      query.length === 0 ||
      candidateLabel(candidate).toLowerCase().startsWith(query.toLowerCase()),
    [resultsQuery, query]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>): boolean => {
      if (!isOpen) return false

      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return true
      }

      if (results.length === 0) return false

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % results.length)
          return true
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex(
            (prev) => (prev + results.length - 1) % results.length
          )
          return true
        case "Tab": {
          const candidate = results[selectedIndex]
          if (candidate) {
            const label = candidateLabel(candidate)
            if (
              query.length === 0 ||
              label.toLowerCase().startsWith(query.toLowerCase())
            ) {
              e.preventDefault()
              selectCandidate(candidate)
              return true
            }
          }
          return false
        }
        case "Enter": {
          e.preventDefault()
          const candidate = results[selectedIndex]
          if (candidate && stillMatchesQuery(candidate)) {
            selectCandidate(candidate)
          }
          // Consumed either way: the popover is open, so Enter must not send
          // the message behind it.
          return true
        }
        default:
          return false
      }
    },
    [
      isOpen,
      results,
      selectedIndex,
      query,
      selectCandidate,
      close,
      stillMatchesQuery,
    ]
  )

  const getMentions = useCallback((): MentionPayload => {
    const mentionedEveryone = mentions.some((m) => m.id === MENTION_EVERYONE_ID)
    // Anchors are per occurrence; the payload is a set of people, so the same
    // person mentioned twice is sent once.
    const users = new Map<string, MentionEntry>()
    for (const { start: _start, end: _end, ...entry } of mentions) {
      if (entry.id === MENTION_EVERYONE_ID) continue
      if (!users.has(entry.id)) users.set(entry.id, entry)
    }
    return { mentions: [...users.values()], mentionedEveryone }
  }, [mentions])

  const seedMentions = useCallback(
    (entries: MentionEntry[], forText?: string) => {
      const text = forText ?? inputValueRef.current
      prevValueRef.current = text

      // A saved message carries a set of people, not positions, so the text is
      // what says where they are. Occurrences of one `@name` are handed out to
      // the entries sharing that name in order — two people with the same
      // display name get one each, while one person named twice keeps both.
      //
      // "The same name" is canonical equality, not string equality: two people
      // whose display names differ only in Unicode normal form read as one name
      // and would otherwise queue separately, so the occurrences went to the
      // first of them twice and the second was dropped. The names handed to the
      // matcher stay as spelled, because that is what the body contains.
      const byName = new Map<string, MentionEntry[]>()
      const spellings = new Set<string>()
      for (const entry of entries) {
        const key = canonicalName(entry.name)
        const group = byName.get(key)
        if (group) group.push(entry)
        else byName.set(key, [entry])
        spellings.add(entry.name)
      }

      const handedOut = new Set<MentionEntry>()
      commitMentions(
        locateMentions(
          text,
          [...spellings].map((name) => ({ name }))
        ).flatMap(({ entry: { name }, start, end }) => {
          const group = byName.get(canonicalName(name)) ?? []
          const free = group.filter((entry) => !handedOut.has(entry))
          // An occurrence goes to someone whose name is spelled exactly the way
          // the text spells it when there is such a person left, and otherwise
          // to the next in the queue. Without the first half, a body written in
          // one normal form hands its occurrence to whoever happens to be first
          // in the group — the wrong person, notified in their place.
          //
          // "The way the text spells it" is read off the located range, not off
          // the name the matcher reports having matched. The two are the same
          // string while matching is exact; once it folds normal forms together
          // every spelling matches every occurrence and the reported one is
          // just whichever entry the matcher was handed first.
          const spelled = text.slice(start + 1, end)
          const picked =
            free.find((entry) => entry.name === spelled) ??
            free[0] ??
            group[group.length - 1]
          if (picked) handedOut.add(picked)
          // The range comes from the matcher, so the anchor covers the text
          // that is actually there rather than the entry's spelling of it.
          return picked ? [{ ...picked, start, end }] : []
        })
      )
    },
    [commitMentions]
  )

  const restoreMentions = useCallback(
    (anchored: AnchoredMention[], forText: string) => {
      prevValueRef.current = forText
      commitMentions(anchored)
    },
    [commitMentions]
  )

  // Keep the anchors on the text as it changes, and take a mention out whole
  // when an edit lands inside it — a half-typed name is not a mention, and
  // leaving one behind is what silently dropped the id before.
  useEffect(() => {
    const prev = prevValueRef.current
    if (prev === inputValue) return
    prevValueRef.current = inputValue

    const anchored = mentionsRef.current
    if (anchored.length === 0) return

    const { kept, touched } = reanchorMentions(prev, inputValue, anchored)
    if (touched.length === 0) {
      commitMentions(kept)
      return
    }

    const erased = eraseSpans(inputValue, touched, kept, cursorPosition)
    prevValueRef.current = erased.text
    commitMentions(erased.mentions)
    setInputValue(erased.text)
    setCursorPosition(erased.caret)
    // Removing a mention leaves the caret where the mention was, not at the end
    // of the text — the edit happened here, and the rest of a multi-line draft
    // is not where the user was looking.
    requestSelection(erased.caret, erased.text)
    onMentionErased?.(erased.text)
  }, [
    inputValue,
    cursorPosition,
    setInputValue,
    setCursorPosition,
    commitMentions,
    requestSelection,
    onMentionErased,
  ])

  const popoverPosition: PopoverPosition = useMemo(() => {
    if (!isOpen || atIndexRef.current === -1) return null
    const textarea = textareaRef.current
    if (!textarea) return null

    let mirror = mirrorRef.current
    if (
      !mirror ||
      mirror.textarea !== textarea ||
      mirror.width !== textarea.clientWidth
    ) {
      if (mirror) disposeCaretMirror(mirror)
      mirror = createCaretMirror(textarea)
      mirrorRef.current = mirror
    }

    const coords = measureInCaretMirror(mirror, atIndexRef.current)
    const left = textarea.offsetLeft + coords.left
    const formHeight = textarea.offsetParent
      ? (textarea.offsetParent as HTMLElement).offsetHeight
      : 0
    const bottom = formHeight - (textarea.offsetTop + coords.top)

    return { left, bottom }
  }, [isOpen, inputValue, cursorPosition, textareaRef])

  // The mirror is a document node the memo above creates during render, so
  // nothing but this releases it: a closed popover measures nothing.
  useEffect(() => {
    if (!isOpen) discardCaretMirror()
  }, [isOpen, discardCaretMirror])

  useEffect(() => discardCaretMirror, [discardCaretMirror])

  const inlineCompletion = useMemo<string | null>(() => {
    if (!isOpen || results.length === 0) return null
    const candidate = results[selectedIndex]
    if (!candidate) return null
    const label = candidateLabel(candidate)
    if (query.length === 0) return label
    if (label.toLowerCase().startsWith(query.toLowerCase())) {
      return label.slice(query.length)
    }
    return null
  }, [isOpen, results, selectedIndex, query])

  return {
    isOpen,
    query,
    results,
    isLoading,
    selectedIndex,
    mentions,
    popoverPosition,
    inlineCompletion,
    handleKeyDown,
    selectCandidate,
    getMentions,
    seedMentions,
    restoreMentions,
    close,
    dismissCurrentTrigger,
  }
}
