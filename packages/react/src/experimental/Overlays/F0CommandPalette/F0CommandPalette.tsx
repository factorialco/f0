import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useMediaQuery } from "usehooks-ts"
import { toasts } from "@/hooks/toast"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTitle } from "@/ui/Dialog/dialog"
import { CommandFooter } from "./components/CommandFooter"
import { CommandRowActions } from "./components/CommandRowActions"
import { CommandRowItem } from "./components/CommandRowItem"
import { CommandSearchBar } from "./components/CommandSearchBar"
import {
  caretAtEnd,
  caretAtStart,
  caretBeforeChip,
  caretToEnd,
  chipIndexAtCaret,
} from "./fieldCaret"
import type { CommandStage } from "./internal-types"
import { useCommandLabels } from "./labels"
import type {
  CommandAssistant,
  CommandEntityAction,
  CommandEntityRef,
  CommandGroup,
  CommandPaletteLabels,
  CommandParamValues,
  CommandRunContext,
} from "./types"
import { commandActionHref } from "./types"
import { useCommandRows } from "./useCommandRows"
import { useEntitySearch, useScopeChildren } from "./useEntitySearch"

/**
 * How many references the chain may hold.
 *
 * Two, because the bar is one line and every link costs some of it — and
 * because a path that deep stops being a reference and starts being navigation,
 * which the product already has screens for. It also bounds a `children`
 * implementation that returns something containing itself: without a cap, a team
 * inside a team inside a team fills the field.
 */
const MAX_SCOPE_DEPTH = 2

type F0CommandPaletteProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialScope: CommandEntityRef | null
  groups: CommandGroup[]
  recent: string[]
  assistant?: CommandAssistant
  labels: CommandPaletteLabels
  onNavigate: (href: string) => void
}

/**
 * The palette panel (SPEC-006 / SPEC-039).
 *
 * One grammar, `[scope] › [action] › [params]`:
 *
 * - **Global mode** (no scope) is a launcher: recents and suggestions on an
 *   empty query, then ranked commands, records and destinations once you type.
 * - **Scoped mode** puts a record in the field as a chip and turns the list into
 *   that record's actions. You get there with `Tab` on a record, its `Actions`
 *   control, or `openScoped()` from a surface that already knows the target.
 *
 * The field is a token field, so `Tab` commits the highlighted suggestion. Two
 * focus regions: `Tab` moves between the field and the list, `↑↓` walk the rows,
 * `→` opens a row's own controls and `←` walks back out.
 *
 * Rules that do not bend: `Enter` on a record navigates and never executes; a
 * `danger` action is never the default row; an inapplicable action stays listed
 * with its reason rather than disappearing.
 *
 * The palette does not confirm. Choosing an action hands it to the consumer,
 * whose own dialog is the confirmation.
 *
 * Below 560px it is a bottom sheet: the field at the very foot, the results
 * running up from it. Above that it always keeps a gutter, never spanning the
 * viewport edge to edge.
 */
export const F0CommandPalette = ({
  open,
  onOpenChange,
  initialScope,
  groups,
  recent,
  assistant,
  labels: fromProps,
  onNavigate,
}: F0CommandPaletteProps) => {
  const labels = useCommandLabels(fromProps)

  /**
   * The providers among the groups, in the order they were declared.
   *
   * Derived rather than passed, because a provider is a group now — but the
   * parts of the palette that fetch, resolve a ref's owner and count a scope's
   * actions all want the plain list, and each rebuilding it would be three
   * copies of the same filter.
   *
   * Keyed on the group SIGNATURE and not on `groups` itself: a consumer writing
   * `groups={[...]}` inline hands over a new array every render, and this list
   * feeds `useEntitySearch`, so an identity that changed every render would
   * re-run every provider's search on every render. The signature is the shape
   * that actually matters here — which providers, in which order.
   */
  const groupSignature = groups
    .map((group) => group.provider?.type ?? `items:${group.label}`)
    .join(" ")
  const providers = useMemo(
    () => groups.flatMap((group) => (group.provider ? [group.provider] : [])),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- see the note above
    [groupSignature]
  )
  const listboxId = useId()

  const isPhone = useMediaQuery("(max-width: 560px)", {
    initializeWithValue: false,
  })

  const [query, setQuery] = useState("")
  /**
   * The query split at every chip — one more segment than there are chips.
   *
   * Kept because the chips' POSITIONS are part of what was written: the caret
   * can travel past them, so a sentence can be built around the chain, and
   * flattening it to one string reorders the words into something nobody typed.
   */
  const [segments, setSegments] = useState<string[]>([""])
  /**
   * The chain of references, outermost first: `[Acme Design, Ben Carter]`.
   *
   * A chain rather than one scope because a reference can be found INSIDE
   * another — a team's people, a project's tasks — and "whose actions?" still
   * has exactly one answer: the last link. That is what makes drilling in safe
   * where two parallel subjects would not be, since two refs from two providers
   * give no answer at all.
   */
  const [scopes, setScopes] = useState<CommandEntityRef[]>(
    initialScope ? [initialScope] : []
  )
  /** The link that owns the list and takes the actions. */
  const scope = scopes[scopes.length - 1] ?? null
  const [stage, setStage] = useState<CommandStage>({ kind: "browse" })
  const [active, setActive] = useState(0)
  /**
   * Which of the active row's controls holds focus, or `null` while the field or
   * the row itself does. It MIRRORS real DOM focus rather than replacing it —
   * they are real buttons, so `Enter` and `Space` activate them natively.
   */
  const [focusedAction, setFocusedAction] = useState<number | null>(null)
  /** Announcements for screen readers: scope changes, blocked rows, copies. */
  const [announcement, setAnnouncement] = useState("")

  const fieldRef = useRef<HTMLDivElement>(null)

  const clusterOrigin = useRef<"field" | "row">("field")
  /** The scroller — the element whose `scrollTop` the cluster is measured against. */
  const listRef = useRef<HTMLDivElement | null>(null)

  const [listNode, setListNode] = useState<HTMLDivElement | null>(null)
  const attachList = useCallback((node: HTMLDivElement | null) => {
    listRef.current = node
    /*
      NEVER BACK TO `null`, AND NEVER A REDUNDANT UPDATE.

      A callback ref is re-invoked whenever its own identity or the element it
      is attached to changes — React calls the previous one with `null`, then
      the next with the node. Setting state from that is a loop waiting for a
      cause: `null` and the node are different values, so neither call bails
      out, and one render becomes an unbounded chain of them.

      Anything that wraps components creates that cause, because wrapping is
      what changes element identity: devtools instrumentation, a profiler, a
      HOC added upstream. The guard means none of them can turn this into a
      render loop, so it stays whether or not such a thing is installed.

      Ignoring the detach and comparing before setting makes the update happen
      exactly once, whatever the tree does around it. Radix guards its own
      `Presence` ref the same way, for the same reason.
    */
    if (node) {
      setListNode((current) => (current === node ? current : node))
    }
  }, [])
  /**
   * The list AND the cluster drawn over it. The cluster is deliberately not
   * inside the listbox, so anything looking for a row action button has to search
   * from their common parent rather than from the list.
   */
  const bodyRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => onOpenChange(false), [onOpenChange])

  const navigate = useCallback(
    (href: string) => {
      onNavigate(href)
      close()
    },
    [close, onNavigate]
  )

  const ask = useCallback(
    (prompt: string) => {
      assistant?.onAsk(prompt, scope ?? undefined)
      close()
    },
    [assistant, close, scope]
  )

  const context = useMemo<CommandRunContext>(
    () => ({ navigate, ask }),
    [ask, navigate]
  )

  const focusField = useCallback(() => {
    setFocusedAction(null)
    fieldRef.current?.focus()
  }, [])

  const focusRow = useCallback((row: number) => {
    setFocusedAction(null)
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${row}"]`)
      ?.focus()
  }, [])

  /** Focus one of the active row's controls. Only the ACTIVE row's cluster is
   *  rendered, which is the only row this is ever called for. */
  const focusRowAction = useCallback((row: number, index: number) => {
    const button = bodyRef.current?.querySelector<HTMLButtonElement>(
      `[data-row="${row}"][data-action="${index}"] button`
    )
    if (!button) {
      return
    }
    setFocusedAction(index)
    button.focus()
  }, [])

  /** Copy a route as an absolute link. The toast is the visible half; the live
   *  region carries the same news for a screen reader. */
  const copyLink = useCallback(
    (href: string) => {
      const url = new URL(href, window.location.origin).toString()
      void navigator.clipboard?.writeText(url)
      toasts.open({
        title: labels.rowActions.linkCopied,
        variant: "success",
      })
      setAnnouncement(labels.announce.linkCopied(url))
    },
    [labels]
  )

  /**
   * PUSH a reference onto the chain. The query resets: what you typed was the
   * noun, and the next thing you type is the verb — or the next noun down.
   */
  const enterScope = useCallback(
    (ref: CommandEntityRef) => {
      setScopes((current) => [...current, ref])
      setStage({ kind: "browse" })
      setQuery("")
      setSegments([""])
      setActive(0)
      setFocusedAction(null)

      const provider = providers.find(
        (candidate) => candidate.type === ref.type
      )
      // Across the groups, not the number of groups: the announcement counts
      // what the reader can do, and a heading is not one of them.
      const count = (provider?.actions?.(ref) ?? []).reduce(
        (total, group) => total + group.items.length,
        0
      )
      // The count goes over as a number, plural and zero case included: only the
      // consumer knows how its language says "no actions".
      setAnnouncement(labels.announce.scoped(ref.label, count))
    },
    [labels, providers]
  )

  /**
   * TRUNCATE the chain at `index`, keeping whatever text is passed in.
   *
   * Truncate rather than splice, because the chain is a path: dropping `Acme
   * Design` while keeping `Ben Carter` inside it leaves a link whose context has
   * gone, and the list would then be showing a person's actions under a heading
   * nobody chose. Removing a link removes what was reached through it — the way
   * a breadcrumb behaves.
   */
  const truncateScopes = useCallback(
    (index: number, text: string) => {
      setScopes((current) => current.slice(0, index))
      setStage({ kind: "browse" })
      setQuery(text)
      setSegments([text])
      setAnnouncement(labels.announce.cleared)
      fieldRef.current?.focus()
      caretToEnd(fieldRef.current)
    },
    [labels]
  )

  /** Pop one level: params → previous param → the last link → nothing. Returns
   *  false when there was nothing left to pop, and the caller then closes. */
  const popLevel = useCallback((): boolean => {
    if (stage.kind === "param") {
      setStage(
        stage.step > 0 ? { ...stage, step: stage.step - 1 } : { kind: "browse" }
      )
      setQuery("")
      return true
    }
    if (scopes.length > 0) {
      // ONE link at a time, so backing out of an employee lands back in the
      // team you found them in rather than at the top.
      truncateScopes(scopes.length - 1, "")
      return true
    }
    return false
  }, [scopes, stage, truncateScopes])

  /** Advance an action through its levels: its parameters, then the run. There
   *  is no confirmation level — the consumer's own dialog is the confirmation. */
  const advance = useCallback(
    (
      action: CommandEntityAction,
      values: CommandParamValues,
      fromStep: number
    ) => {
      const steps = action.params ?? []
      if (fromStep < steps.length) {
        setStage({ kind: "param", action, step: fromStep, values })
        setQuery("")
        setActive(0)
        return
      }
      if (!scope) {
        return
      }
      /*
        A DESTINATION OR A BEHAVIOUR. An action that only goes somewhere says so
        with `href` rather than wrapping a route in a callback, so the palette
        knows it is a link — and `navigate` is the consumer's own router either
        way, never a hard page load.
      */
      if (action.run) {
        action.run(scope, values, context)
      } else {
        const href = commandActionHref(action, scope, values)
        if (href) {
          navigate(href)
        }
        return
      }
      close()
    },
    [close, context, scope]
  )

  /**
   * Entity search, with the loading it actually has. Owned here rather than in
   * the row builder because it is state over time, not a pure derivation.
   */
  const search = useEntitySearch({ providers, query })
  const children = useScopeChildren({ providers, scope, query })

  const rows = useCommandRows({
    query,
    scope,
    stage,
    groups,
    providers,
    recent,
    assistant,
    context,
    onAdvance: advance,
    onCopyLink: copyLink,
    labels,
    search,
    children,
    onEnterScope: enterScope,
    canDrill: scopes.length < MAX_SCOPE_DEPTH,
  })

  /**
   * Default selection. Two rules that never bend: a destructive action is never
   * preselected, and neither is a blocked row. Beyond that the assistant row
   * stays visible but only takes the default when the query READS like a
   * question, so a keyword lookup still lands on the real result.
   */
  const rowsRef = useRef(rows)
  rowsRef.current = rows
  useEffect(() => {
    const current = rowsRef.current
    const firstSafe = current.findIndex(
      (row) =>
        !row.danger && !row.disabledReason && !row.assistant && !row.skeleton
    )

    if (scope) {
      // With nothing safe to preselect — searching "wipe" leaves only the
      // destructive row and the assistant — fall back to the LAST row, never to
      // index 0, which would hand `Enter` to the destructive action.
      setActive(firstSafe === -1 ? Math.max(current.length - 1, 0) : firstSafe)
      return
    }

    const trimmed = query.trim()
    const looksLikeQuestion =
      trimmed.endsWith("?") || trimmed.split(/\s+/).filter(Boolean).length >= 3
    const assistantIndex = current.findIndex((row) => row.assistant)

    if (looksLikeQuestion && assistantIndex !== -1) {
      setActive(assistantIndex)
      return
    }
    setActive(firstSafe === -1 ? 0 : firstSafe)
  }, [query, scope, stage])

  /**
   * Every level transition puts the caret back where typing goes. Choosing a
   * row by POINTER moves DOM focus off the field, and the palette's whole
   * keyboard model hangs off that element — so without this, entering a scope
   * or a parameter level with the mouse leaves the next keystroke, `Backspace`
   * included, with nowhere to land.
   *
   * `caretToEnd` as well as focus, because a focused editable box can have no
   * caret at all: the position after a `contentEditable={false}` atom is not in
   * any text node, so the field takes focus and then has nowhere to put the
   * cursor. That is the state that made typing right after entering a scope do
   * nothing, and it is one an `<input>` cannot be in.
   */
  useEffect(() => {
    fieldRef.current?.focus()
    caretToEnd(fieldRef.current)
  }, [scope, stage])

  useEffect(() => {
    setFocusedAction(null)
  }, [query, scope, stage])

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" })
  }, [active])

  /**
   * Where to draw the active row's controls.
   *
   * They cannot live inside the list at all — a control inside a `role="option"`
   * is `nested-interactive`, and one anywhere else inside a `role="listbox"` is
   * `aria-required-children` — so they are drawn over the list from outside it,
   * at the active row's own position.
   *
   * Measured in a layout effect so they land in the same paint as the selection
   * moving rather than a frame behind it, and re-measured on scroll because the
   * row moves under them while the cluster does not. `null` means draw nothing:
   * there is no row, or the row has scrolled out of the visible band and its
   * buttons would otherwise float over the bar or the footer.
   */
  const activeRow = rows[active]
  const [clusterTop, setClusterTop] = useState<number | null>(null)
  /**
   * Whether anything is still below the fold. The scroll-off fade is drawn only
   * then — a mask over a list that has nothing left to reveal is dimming the
   * last row for no reason, and it is what forced the list's bottom padding to
   * be wider than its sides just to hold that row clear of it.
   */
  const [moreBelow, setMoreBelow] = useState(false)
  /** The same question for the other edge, which is the cut-off one on a phone. */
  const [moreAbove, setMoreAbove] = useState(false)
  useLayoutEffect(() => {
    const list = listNode
    if (!list) {
      return
    }

    const measure = () => {
      // A pixel of slack: fractional scroll heights never land exactly.
      setMoreBelow(list.scrollTop + list.clientHeight < list.scrollHeight - 1)
      setMoreAbove(list.scrollTop > 1)

      const element = list.querySelector<HTMLElement>(
        `[data-index="${active}"]`
      )
      if (!element) {
        setClusterTop(null)
        return
      }
      const centre =
        element.offsetTop - list.scrollTop + element.offsetHeight / 2
      const half = element.offsetHeight / 2
      setClusterTop(
        centre < half || centre > list.clientHeight - half ? null : centre
      )
    }

    measure()
    list.addEventListener("scroll", measure, { passive: true })
    return () => list.removeEventListener("scroll", measure)
  }, [active, listNode, rows])

  const activateRow = useCallback(
    (index: number) => {
      const row = rows[index]
      if (!row) {
        return
      }
      if (row.disabledReason) {
        // A blocked row is reachable so its reason can be read, but it never
        // runs: re-announce rather than failing silently.
        setAnnouncement(
          labels.announce.unavailable(row.label, row.disabledReason)
        )
        return
      }
      row.run()
    },
    [labels, rows]
  )

  /**
   * The next row the selection may land on, skipping placeholders.
   *
   * A skeleton is not a result — it is the space a result will occupy — so the
   * arrows step over it the way they would step over nothing at all. Without
   * this the selection can rest on a loading bar, and `Enter` there does
   * nothing for a reason the screen cannot explain. Clamps rather than wraps,
   * and returns where it started when there is nowhere further to go.
   */
  const step = (from: number, delta: number): number => {
    for (
      let next = from + delta;
      next >= 0 && next < rows.length;
      next += delta
    ) {
      if (!rows[next]?.skeleton) {
        return next
      }
    }
    return from
  }

  const clusterSize = (index: number): number => {
    const row = rows[index]
    if (!row) {
      return 0
    }
    return (row.rowActions?.length ?? 0) + (row.disabledReason ? 0 : 1)
  }

  /**
   * Commit the highlighted row onto the chain, if it can be a link.
   *
   * No longer gated on there being no scope — that guard is what made this a
   * single reference, and drilling in is the point. `scopeRef` is the only test
   * that matters: an action row has none, so `Tab` on one still means "move to
   * the next region". The typed-query guard is gone too, because a scope's
   * children are listed without typing anything.
   */
  const commitScope = (index: number): boolean => {
    const row = rows[index]
    if (stage.kind !== "browse" || !row?.scopeRef) {
      return false
    }
    if (scopes.length >= MAX_SCOPE_DEPTH) {
      return false
    }
    enterScope(row.scopeRef)
    return true
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const field = fieldRef.current

    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      if (!assistant) {
        return
      }
      event.preventDefault()
      ask(askPrompt)
      return
    }

    if (
      scopes.length > 0 &&
      stage.kind === "browse" &&
      (event.key === "Backspace" || event.key === "Delete")
    ) {
      // WHICH chip, not whether: with a chain, the key has to take the link it
      // is actually beside, and everything reached through it.
      const index = chipIndexAtCaret(
        field,
        event.key === "Backspace" ? "after" : "before"
      )
      if (index !== -1) {
        event.preventDefault()
        truncateScopes(index, query)
        return
      }
    }

    if (
      event.key === "ArrowRight" &&
      caretAtEnd(field) &&
      clusterSize(active) > 0
    ) {
      event.preventDefault()
      clusterOrigin.current = "field"
      focusRowAction(active, 0)
      return
    }

    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActive((current) => step(current, 1))
      return
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()
      setActive((current) => step(current, -1))
      return
    }

    if (event.key === "Tab" && event.shiftKey) {
      event.preventDefault()
      return
    }

    if (event.key === "Tab") {
      event.preventDefault()

      if (commitScope(active)) {
        return
      }

      if (rows.length > 0) {
        setActive(0)

        focusRow(0)
      }
      return
    }

    if (
      event.key === "Backspace" &&
      scope &&
      caretBeforeChip(field) &&
      caretAtStart(field)
    ) {
      event.preventDefault()
      return
    }

    // Backspace on an empty query walks back out of the stack instead of
    // deleting nothing.
    if (event.key === "Backspace" && query === "") {
      if (popLevel()) {
        event.preventDefault()
      }
      return
    }

    if (event.key === "Enter") {
      event.preventDefault()
      activateRow(active)
    }
  }

  /**
   * Keys while a RESULT ROW holds focus.
   *
   * The list is a real focus region, so it needs its own handler: without one
   * the arrows would do nothing there and the keyboard would strand you on a
   * row. Every key means what it means in the field, plus the two the row adds:
   * `→` opens its trailing controls and `←` goes back to the field.
   */
  const handleRowKeyDown = (event: KeyboardEvent, index: number) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault()
      const next = event.key === "ArrowDown" ? step(index, 1) : step(index, -1)
      setActive(next)
      focusRow(next)
      return
    }

    if (event.key === "ArrowRight") {
      event.preventDefault()
      if (clusterSize(index) > 0) {
        clusterOrigin.current = "row"
        focusRowAction(index, 0)
      }
      return
    }

    if (event.key === "ArrowLeft" || event.key === "Escape") {
      event.preventDefault()
      focusField()
      return
    }

    if (event.key === "Tab") {
      event.preventDefault()

      if (event.shiftKey || !commitScope(index)) {
        focusField()
      }
      return
    }

    if (event.key === "Enter") {
      event.preventDefault()
      activateRow(index)
      return
    }

    if (
      event.key.length === 1 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.altKey
    ) {
      event.preventDefault()
      focusField()
      setQuery((previous) => previous + event.key)
    }
  }

  /**
   * Keys while one of the row's controls holds focus.
   *
   * `Tab` means the same thing here as anywhere else in the palette: leave the
   * list side and go back to the field. It does NOT walk the cluster — the
   * arrows do that, and one key with one meaning per surface is the whole point.
   * `Enter` and `Space` are left to the button itself.
   */
  const handleActionKeyDown = (
    event: KeyboardEvent,
    index: number,
    count: number
  ) => {
    const consume = () => {
      event.preventDefault()
      event.stopPropagation()
    }

    if (event.key === "Tab") {
      consume()
      focusField()
      return
    }

    if (event.key === "ArrowRight") {
      consume()

      if (index + 1 < count) {
        focusRowAction(active, index + 1)
      }
      return
    }

    if (event.key === "ArrowLeft") {
      consume()

      if (index > 0) {
        focusRowAction(active, index - 1)
      } else if (clusterOrigin.current === "row") {
        focusRow(active)
      } else {
        focusField()
      }
      return
    }

    if (event.key === "Escape") {
      consume()
      focusField()
      return
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      consume()
      const next =
        event.key === "ArrowDown" ? step(active, 1) : step(active, -1)
      setActive(next)

      focusRow(next)
      return
    }

    // Kept typing? That was meant for the search field. Take the character with
    // us rather than dropping it on a button that has no use for it.
    if (
      event.key.length === 1 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.altKey
    ) {
      consume()
      focusField()
      setQuery((previous) => previous + event.key)
    }
  }

  /**
   * The scope named the way it has to be RECOGNISED: the record's own label plus
   * the line that tells it apart from its twins. This is the string the
   * accessible name uses, because acting on the wrong record costs the most
   * exactly where the reference is confirmed.
   */
  const nameOf = (ref: CommandEntityRef | undefined) =>
    ref && ref.kind === "one" && ref.sublabel
      ? `${ref.label} · ${ref.sublabel}`
      : (ref?.label ?? "")

  const scopeName = nameOf(scope ?? undefined)

  /*
    A visible prompt only while the field is genuinely empty — which means
    unscoped, chip included. The chip sits at the field's left edge and the
    prompt is painted there too, so drawing both puts one on top of the other.
    A parameter step keeps its label in `fieldLabel`, and the list below it is
    already headed by that same label.
  */
  const placeholder = scope
    ? undefined
    : isPhone
      ? labels.placeholderPhone
      : labels.placeholder

  const fieldLabel =
    stage.kind === "param"
      ? ((stage.action.params ?? [])[stage.step]?.label ??
        labels.placeholderScoped)
      : scope
        ? labels.fieldLabelScoped(scopeName)
        : labels.placeholder

  /**
   * The bar read out as one line: each text segment followed by the chip that
   * came after it. Interleaved rather than concatenated, so a sentence written
   * around the chain reaches the assistant in the order it was typed.
   */
  const sentence = segments
    .flatMap((segment, index) => [segment.trim(), scopes[index]?.label ?? ""])
    .filter(Boolean)
    .join(" ")
  const askPrompt = scope
    ? query.trim()
      ? sentence
      : // A bare chain with nothing typed: name the path, not just the last
        // link, or "Ben Carter" loses the team that made him the subject.
        scopes.map((ref) => ref.label).join(" ")
    : query.trim()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-label={labels.label}
        // The palette has no prose to describe it — the footer teaches the
        // gesture, and pointing `aria-describedby` at that would read the key
        // hints out as the dialog's purpose. Explicitly none, which is how
        // Radix wants the opt-out said.
        aria-describedby={undefined}
        /*
          Top-aligned rather than centred: a launcher belongs under the reader's
          eyeline, where Spotlight and every palette after it put it.

          A FADE AND A SUBTLE SCALE-UP over 400ms. The scale rides the
          full-screen wrapper, so `origin-top` pivots it at the top of the
          VIEWPORT — which for a panel sitting at 12vh reads as opening downward
          from the top edge rather than swelling out of its own middle.
          `withTranslateAnimation={false}` drops the wrapper's default slide,
          which on top of the scale reads as two separate movements.
          The timing is written as arbitrary PROPERTIES rather than as an
          arbitrary-value `duration` utility. That utility is ambiguous here —
          Tailwind core maps `duration` to `transition-duration` while
          tailwindcss-animate maps it to `animation-duration` — and Tailwind warns
          at build time and then picks one for you. Naming the property leaves
          nothing to pick, and it overrides the 200ms the wrapper ships with.

          `motion-reduce:animate-none` is the whole concession to
          `prefers-reduced-motion`: the panel simply appears.
        */
        withTranslateAnimation={false}
        wrapperClassName={cn(
          "origin-top justify-center [animation-duration:400ms] [animation-timing-function:cubic-bezier(0.16,1,0.3,1)] motion-reduce:animate-none",

          isPhone ? "items-end" : "items-start pt-[12vh]"
        )}
        /*
          NO SCRIM. The page behind keeps its exact brightness; depth comes from
          the panel's own frost and shadow, so only what is directly behind the
          panel is blurred. The overlay still mounts — Radix hangs the
          dismiss-on-outside-press and the scroll lock off it — it just does not
          tint.
        */
        overlayClassName="bg-transparent"
        className={cn(
          // Wide enough for a result and its context to share one line. Narrower,
          // and the context has to be pushed to the far right, which is what
          // opens a gutter down the middle of the list.
          "overflow-hidden",
          isPhone
            ? /*
                THE SHEET, edge to edge and attached to the bottom of the
                screen. `dvh`, not `vh`: the browser chrome and the keyboard
                change the visible height while it is open, and `vh` measures the
                viewport as if neither existed — so the field ends up under the
                keyboard exactly when it is being typed into.

                Square at the bottom, rounded at the top: rounding a corner that
                touches nothing puts a sliver of page below the sheet.

                REVERSED, so the field sits at the very bottom and the results
                run up from it. The thumb and the keyboard are both down there,
                so the field belongs where the hand already is, and the
                top-ranked row ends up adjacent to it rather than a screen away.
                Reversing the flow rather than reordering the markup keeps the
                combobox before its listbox in the DOM, which is the order a
                screen reader wants.
              */
              "w-full max-h-[92dvh] flex-col-reverse rounded-b-none rounded-t-2xl"
            : /*
                A GUTTER AT EVERY SIZE. `w-full` used to override the 90% the
                dialog ships with, so on a tablet the panel spanned the viewport
                and sat flush against both edges — a floating panel that touches
                the screen's edge stops reading as floating. Below the cap it
                keeps its margins; above it, the cap centres it.
              */
              "max-h-[60vh] max-w-[840px] rounded-2xl",
          // Frosted glass: the panel is translucent and blurs only the region
          // behind itself. The translucency is also what makes a white avatar
          // tile and its hairline border read against the panel.
          "border border-solid border-f1-border-secondary bg-f1-background/70 backdrop-blur-xl",
          // An inner top highlight (carved, not glued) over a two-layer shadow,
          // for real weight against an untinted page.
          "shadow-[inset_0_1px_0_hsl(0_0%_100%/0.5),0_12px_24px_hsl(220_60%_10%/0.16),0_32px_64px_hsl(220_60%_10%/0.28)]",
          // Interactive chrome is not text-selectable — the palette is a control
          // surface, not a reading pane.
          "select-none"
        )}
        onEscapeKeyDown={(event) => {
          // Escape pops one level of the grammar before it closes anything: it
          // is the way back out of a scope, not only the way out of the overlay.
          if (popLevel()) {
            event.preventDefault()
          }
        }}
        onOpenAutoFocus={(event) => {
          event.preventDefault()
          fieldRef.current?.focus()
          caretToEnd(fieldRef.current)
        }}
        /*
          CLOSE ON A PRESS OUTSIDE THE PANEL, by hand.
          Radix's own dismiss-on-outside-press cannot see one here: it asks
          whether the press landed inside the content node, and the content node
          is this viewport-sized wrapper. Every press in the window is inside it,
          so nothing is ever outside. (The `pointer-events-none` the wrapper
          carries would have let presses fall through to the overlay, where the
          dismiss lives — but Radix writes `pointer-events: auto` as an INLINE
          style in modal mode, and an inline style beats a utility class.)

          `target === currentTarget` is the test that survives that: it is true
          only for a press that hit the wrapper AND NOTHING IN IT — which is
          exactly the page around the panel. A press on the panel, on a row, or
          on a tooltip portalled out of it all name a different target and are
          left alone.
        */
        onPointerDown={(event) => {
          if (event.target === event.currentTarget) {
            close()
          }
        }}
      >
        <DialogTitle className="sr-only">{labels.label}</DialogTitle>

        <CommandSearchBar
          query={query}
          onQueryChange={setQuery}
          onSegmentsChange={setSegments}
          onKeyDown={handleKeyDown}
          onChipTakingEdit={truncateScopes}
          placeholder={placeholder}
          fieldLabel={fieldLabel}
          scopes={scopes}
          scopeName={(index) => nameOf(scopes[index])}
          removeScopeLabel={(index) =>
            labels.scope.remove(nameOf(scopes[index]))
          }
          assistant={assistant}
          askLabel={
            scope ? labels.row.ask(scope.label) : (assistant?.label ?? "")
          }
          onRemoveScope={(index) => truncateScopes(index, "")}
          onAsk={() => ask(askPrompt)}
          fieldRef={fieldRef}
          listboxId={listboxId}
          hasResults={rows.length > 0}
          atFoot={isPhone}
          activeOptionId={
            rows[active] ? `f0-command-option-${active}` : undefined
          }
        />

        <div className="sr-only" role="status" aria-live="polite">
          {announcement}
        </div>

        {/*
          The positioning context the active row's controls are placed against.
          They sit OUTSIDE the listbox, and the empty state does too, because a
          `role="listbox"` may own only options and groups — a button or a block
          of prose in there is `aria-required-children`.
        */}
        <div ref={bodyRef} className="relative flex min-h-0 flex-1 flex-col">
          {/*
            The bottom edge fades content as it scrolls off, softer than a hard
            cut — and only while something is still down there to fade.

            `tabIndex={-1}` is for the scroll container, not for the reader: a
            scrollable region has to be reachable by keyboard
            (`scrollable-region-focusable`), and now that no control lives inside
            the list there is nothing in it to reach. `-1` makes it
            programmatically focusable without putting it in the tab order, which
            would break the palette's single-focus-trap model.
          */}
          <div
            ref={attachList}
            id={listboxId}
            role="listbox"
            aria-label={labels.label}
            // The honest way to say "still arriving": the option list stays
            // exactly the options that exist, and this says more are coming.
            aria-busy={search.pending.length > 0 || undefined}
            tabIndex={-1}
            className={cn(
              // One inset on all four sides: the list is a padded box, and a
              // bottom that is three times the sides reads as a gap under the
              // last row rather than as padding.
              "flex-1 overflow-y-auto p-1.5 outline-none",
              // Results run UP from the field on a phone, so the top-ranked row
              // is the one nearest the thumb.
              isPhone && "flex flex-col-reverse",
              /*
                The fade only while there is something to fade, and on the edge
                the content actually disappears under — which the reversed sheet
                moves to the top. A permanent mask is what forced the list's
                bottom padding to be wider than its sides just to hold the last
                row clear of it.
              */
              !isPhone &&
                moreBelow &&
                "[mask-image:linear-gradient(to_bottom,#000_calc(100%-16px),transparent_100%)]",
              isPhone &&
                moreAbove &&
                "[mask-image:linear-gradient(to_top,#000_calc(100%-16px),transparent_100%)]"
            )}
          >
            {rows.map((row, index) => {
              const previous = rows[index - 1]
              const next = rows[index + 1]
              /*
                THE SHEET FLIPS WHICH ROW CARRIES THE HEADING.

                The list is `column-reverse` on a phone, so a heading emitted
                before its group renders BELOW it — the label ends up under its
                own rows, and between two of them where two groups meet.
                Emitting it on the group's LAST row instead puts it back on top
                once the axis is reversed. Same rule, mirrored: the heading is
                whichever end of the group the reader reaches first.

                The assistant row is self-labelling and needs no heading either
                way.
              */
              const startsGroup = !previous || previous.group !== row.group
              const endsGroup = !next || next.group !== row.group
              const showHeading =
                !row.assistant && (isPhone ? endsGroup : startsGroup)

              return (
                <div key={row.id}>
                  {showHeading ? (
                    <div className="px-2 pb-1 pt-3 text-base font-medium text-f1-foreground-secondary">
                      {row.group}
                    </div>
                  ) : null}
                  <CommandRowItem
                    row={row}
                    index={index}
                    active={index === active}
                    clustered={index === active && clusterTop !== null}
                    phone={isPhone}
                    onActivate={() => activateRow(index)}
                    onHover={() => setActive(index)}
                    onKeyDown={(event) => handleRowKeyDown(event, index)}
                  />
                </div>
              )
            })}
          </div>

          {rows.length === 0 ? (
            <div className="flex flex-col gap-0.5 p-7 text-center">
              <span className="text-lg text-f1-foreground">
                {labels.empty.title}
              </span>
              <span className="text-base text-f1-foreground-secondary">
                {labels.empty.description}
              </span>
            </div>
          ) : null}

          {activeRow && clusterTop !== null ? (
            <CommandRowActions
              row={activeRow}
              index={active}
              top={clusterTop}
              focusedAction={focusedAction}
              onActivate={() => activateRow(active)}
              labels={labels}
              onActionKeyDown={handleActionKeyDown}
              onActionFocus={setFocusedAction}
            />
          ) : null}
        </div>

        {isPhone ? null : (
          <CommandFooter
            stage={stage}
            labels={labels}
            scoped={Boolean(scope)}
            hasAssistant={Boolean(assistant)}
            row={activeRow}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
