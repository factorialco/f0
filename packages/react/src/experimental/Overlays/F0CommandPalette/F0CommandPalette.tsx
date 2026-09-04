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

import { toasts } from "@/hooks/toast"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTitle } from "@/ui/Dialog/dialog"

import { CommandFooter } from "./components/CommandFooter"
import { CommandRowActions } from "./components/CommandRowActions"
import { CommandRowItem } from "./components/CommandRowItem"
import { CommandSearchBar } from "./components/CommandSearchBar"
import type { CommandStage } from "./internal-types"
import type {
  CommandAction,
  CommandAssistant,
  CommandEntityAction,
  CommandEntityProvider,
  CommandEntityRef,
  CommandNavigationItem,
  CommandParamValues,
  CommandRunContext,
} from "./types"
import { useCommandRows } from "./useCommandRows"

type F0CommandPaletteProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialScope: CommandEntityRef | null
  providers: CommandEntityProvider[]
  actions: CommandAction[]
  navigation: CommandNavigationItem[]
  recent: string[]
  assistant?: CommandAssistant
  onNavigate: (href: string) => void
}

/**
 * The palette panel (SPEC-006 / SPEC-039).
 *
 * One grammar, `[scope] › [action] › [params]`:
 *
 * - **Global mode** (no scope) is a launcher: recents and suggestions on an
 *   empty query, then ranked commands, records and destinations once you type.
 * - **Scoped mode** puts a record before the caret and turns the list into that
 *   record's actions. You get there by typing the record's name and pressing `/`
 *   — the slash is the GESTURE that commits the reference, never the
 *   representation of it — or from any surface that already knows the target,
 *   via `openScoped()`.
 *
 * Rules that do not bend: `Enter` on a record navigates and never executes; a
 * `danger` action is never the default row; an inapplicable action stays listed
 * with its reason rather than disappearing.
 *
 * The palette does not confirm. Choosing an action hands it to the consumer,
 * whose own dialog is the confirmation.
 */
export const F0CommandPalette = ({
  open,
  onOpenChange,
  initialScope,
  providers,
  actions,
  navigation,
  recent,
  assistant,
  onNavigate,
}: F0CommandPaletteProps) => {
  const i18n = useI18n()
  const listboxId = useId()

  const [query, setQuery] = useState("")
  const [scope, setScope] = useState<CommandEntityRef | null>(initialScope)
  const [stage, setStage] = useState<CommandStage>({ kind: "browse" })
  const [active, setActive] = useState(0)
  /**
   * Which of the active row's actions holds focus, or `null` while the input
   * does. It MIRRORS real DOM focus rather than replacing it — the pills are
   * real buttons, so `Enter` and `Space` activate them natively.
   */
  const [focusedAction, setFocusedAction] = useState<number | null>(null)
  /** Announcements for screen readers: scope changes, blocked rows, copies. */
  const [announcement, setAnnouncement] = useState("")

  const inputRef = useRef<HTMLInputElement>(null)
  /** The scroller — the element whose `scrollTop` the cluster is measured against. */
  const listRef = useRef<HTMLDivElement>(null)
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

  /** Move focus back to the input, wherever it was. Every list key routes
   *  through here, so the palette never leaves focus stranded on a hidden pill. */
  const focusInput = useCallback(() => {
    setFocusedAction(null)
    inputRef.current?.focus()
  }, [])

  /** Focus one of the active row's action pills. Only the ACTIVE row's cluster is
   *  rendered, which is the only row this is ever called for. */
  const focusRowAction = useCallback((row: number, index: number) => {
    const button = bodyRef.current?.querySelector<HTMLButtonElement>(
      `[data-row="${row}"][data-action="${index}"] button`
    )
    if (!button) return
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
        title: i18n.commandPalette.rowActions.linkCopied,
        variant: "success",
      })
      setAnnouncement(i18n.t("commandPalette.announce.linkCopied", { url }))
    },
    [i18n]
  )

  /** Enter a record's scope. The query resets: what you typed was the noun, and
   *  the next thing you type is the verb. */
  const enterScope = useCallback(
    (ref: CommandEntityRef) => {
      setScope(ref)
      setStage({ kind: "browse" })
      setQuery("")
      setActive(0)

      const provider = providers.find(
        (candidate) => candidate.type === ref.type
      )
      const count = provider?.actions?.(ref).length ?? 0
      setAnnouncement(
        count === 0
          ? i18n.t("commandPalette.announce.scopedEmpty", { name: ref.label })
          : i18n.t(
              count === 1
                ? "commandPalette.announce.scoped.one"
                : "commandPalette.announce.scoped.other",
              { name: ref.label, count }
            )
      )
    },
    [i18n, providers]
  )

  const clearScope = useCallback(() => {
    setScope(null)
    setStage({ kind: "browse" })
    setQuery("")
    setAnnouncement(i18n.commandPalette.announce.cleared)
    inputRef.current?.focus()
  }, [i18n])

  /** Pop one level: params → previous param → browse → no scope. Returns false
   *  when there was nothing left to pop, and the caller then closes. */
  const popLevel = useCallback((): boolean => {
    if (stage.kind === "param") {
      setStage(
        stage.step > 0 ? { ...stage, step: stage.step - 1 } : { kind: "browse" }
      )
      setQuery("")
      return true
    }
    if (scope) {
      clearScope()
      return true
    }
    return false
  }, [clearScope, scope, stage])

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
      if (!scope) return
      action.run(scope, values, context)
      close()
    },
    [close, context, scope]
  )

  const rows = useCommandRows({
    query,
    scope,
    stage,
    providers,
    actions,
    navigation,
    recent,
    assistant,
    context,
    onAdvance: advance,
    onCopyLink: copyLink,
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
      (row) => !row.danger && !row.disabledReason && !row.assistant
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
   * row by POINTER moves DOM focus off the input, and the palette's whole
   * keyboard model hangs off that element — so without this, entering a scope
   * or a parameter level with the mouse leaves the next keystroke, `Backspace`
   * included, with nowhere to land.
   */
  useEffect(() => {
    inputRef.current?.focus()
  }, [scope, stage])

  // The pills belong to the active row, so moving the selection — or changing
  // what the list even contains — puts focus back where typing goes.
  useEffect(() => {
    setFocusedAction(null)
  }, [active, query, scope, stage])

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
  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return

    const measure = () => {
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
  }, [active, rows])

  const activateRow = useCallback(
    (index: number) => {
      const row = rows[index]
      if (!row) return
      if (row.disabledReason) {
        // A blocked row is reachable so its reason can be read, but it never
        // runs: re-announce rather than failing silently.
        setAnnouncement(
          i18n.t("commandPalette.announce.unavailable", {
            label: row.label,
            reason: row.disabledReason,
          })
        )
        return
      }
      row.run()
    },
    [i18n, rows]
  )

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const row = rows[active]
    const input = inputRef.current
    const caretAtEnd =
      input?.selectionStart === query.length &&
      input?.selectionEnd === query.length

    // `mod+Enter` from anywhere hands the current query — and the scope — over.
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      if (!assistant) return
      event.preventDefault()
      ask(query.trim())
      return
    }

    const canScope =
      stage.kind === "browse" &&
      !scope &&
      Boolean(row?.scopeRef) &&
      Boolean(query.trim())

    // The gesture that commits the reference. Only here — with a scope already
    // present, or with no record highlighted, "/" stays an ordinary character so
    // slashes in names remain typable.
    if (event.key === "/" && canScope && row?.scopeRef) {
      event.preventDefault()
      enterScope(row.scopeRef)
      return
    }

    // `→` as the second way in. Only from the END of the query: mid-string, the
    // right arrow is still the caret moving through text being edited.
    if (event.key === "ArrowRight" && canScope && caretAtEnd && row?.scopeRef) {
      event.preventDefault()
      enterScope(row.scopeRef)
      return
    }

    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActive((current) => Math.min(current + 1, rows.length - 1))
      return
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()
      setActive((current) => Math.max(current - 1, 0))
      return
    }

    if (event.key === "Tab") {
      event.preventDefault()
      const rowActions = row?.rowActions ?? []
      if (rowActions.length > 0) {
        focusRowAction(active, event.shiftKey ? rowActions.length - 1 : 0)
        return
      }
      // No actions on this row: cycle the selection instead, because the palette
      // is a single focus trap and `Tab` must never leave the input.
      const count = rows.length
      if (count > 0) {
        setActive((current) =>
          event.shiftKey ? (current - 1 + count) % count : (current + 1) % count
        )
      }
      return
    }

    // Backspace on an empty query walks back out of the stack instead of
    // deleting nothing.
    if (event.key === "Backspace" && query === "") {
      if (popLevel()) event.preventDefault()
      return
    }

    if (event.key === "Enter") {
      event.preventDefault()
      activateRow(active)
    }
  }

  /**
   * Keys while a pill holds focus. Everything belonging to the list hands focus
   * back to the input first, so the pills are a detour of exactly one key and
   * never a place you can get stuck. `Enter` and `Space` are left to the button.
   */
  const handleActionKeyDown = (
    event: KeyboardEvent,
    index: number,
    count: number
  ) => {
    if (event.key === "Tab") {
      event.preventDefault()
      const next = event.shiftKey ? index - 1 : index + 1
      if (next < 0 || next >= count) focusInput()
      else focusRowAction(active, next)
      return
    }

    if (event.key === "Escape" || event.key === "ArrowLeft") {
      event.preventDefault()
      focusInput()
      return
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault()
      focusInput()
      setActive((current) =>
        event.key === "ArrowDown"
          ? Math.min(current + 1, rows.length - 1)
          : Math.max(current - 1, 0)
      )
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
      event.preventDefault()
      focusInput()
      setQuery((previous) => previous + event.key)
    }
  }

  /**
   * The scope named the way it has to be RECOGNISED: the record's own label plus
   * the line that tells it apart from its twins. This is the string the
   * accessible name uses, because acting on the wrong record costs the most
   * exactly where the reference is confirmed.
   */
  const scopeName =
    scope && scope.kind === "one" && scope.sublabel
      ? `${scope.label} · ${scope.sublabel}`
      : (scope?.label ?? "")

  const placeholder =
    stage.kind === "param"
      ? ((stage.action.params ?? [])[stage.step]?.label ??
        i18n.commandPalette.placeholderScoped)
      : scope
        ? i18n.commandPalette.placeholderScoped
        : i18n.commandPalette.placeholder

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-label={i18n.commandPalette.label}
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
          `duration-[400ms]` overrides the 200ms the wrapper ships with —
          tailwind-merge keeps the later of two durations.

          `motion-reduce:animate-none` is the whole concession to
          `prefers-reduced-motion`: the panel simply appears.
        */
        withTranslateAnimation={false}
        wrapperClassName="items-start justify-center pt-[12vh] origin-top duration-[400ms] ease-out motion-reduce:animate-none"
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
          "max-h-[60vh] w-full max-w-[840px] overflow-hidden rounded-2xl",
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
          if (popLevel()) event.preventDefault()
        }}
        onOpenAutoFocus={(event) => {
          // The input, always — Radix would otherwise focus the panel itself and
          // the first keystroke would go nowhere.
          event.preventDefault()
          inputRef.current?.focus()
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
          if (event.target === event.currentTarget) close()
        }}
      >
        <DialogTitle className="sr-only">
          {i18n.commandPalette.label}
        </DialogTitle>

        <CommandSearchBar
          query={query}
          onQueryChange={setQuery}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          scope={scope}
          scopeName={scopeName}
          stage={stage}
          assistant={assistant}
          onRemoveScope={clearScope}
          onAsk={() => ask(query.trim())}
          inputRef={inputRef}
          listboxId={listboxId}
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
            cut. The bottom padding is what keeps that fade over empty space at
            the end of the list, so the last row is never dimmed by it.

            `tabIndex={-1}` is for the scroll container, not for the reader: a
            scrollable region has to be reachable by keyboard
            (`scrollable-region-focusable`), and now that no control lives inside
            the list there is nothing in it to reach. `-1` makes it
            programmatically focusable without putting it in the tab order, which
            would break the palette's single-focus-trap model.
          */}
          <div
            ref={listRef}
            id={listboxId}
            role="listbox"
            aria-label={i18n.commandPalette.label}
            tabIndex={-1}
            className="flex-1 overflow-y-auto px-1.5 pb-5 pt-1.5 outline-none [mask-image:linear-gradient(to_bottom,#000_calc(100%-16px),transparent_100%)]"
          >
            {rows.map((row, index) => {
              const previous = rows[index - 1]
              // The assistant row is self-labelling, so it needs no heading.
              const showHeading =
                !row.assistant && (!previous || previous.group !== row.group)

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
                    onActivate={() => activateRow(index)}
                    onHover={() => setActive(index)}
                  />
                </div>
              )
            })}
          </div>

          {rows.length === 0 ? (
            <div className="flex flex-col gap-0.5 p-7 text-center">
              <span className="text-lg text-f1-foreground">
                {i18n.commandPalette.empty.title}
              </span>
              <span className="text-base text-f1-foreground-secondary">
                {i18n.commandPalette.empty.description}
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
              onActionKeyDown={handleActionKeyDown}
              onActionFocus={setFocusedAction}
            />
          ) : null}
        </div>

        <CommandFooter
          stage={stage}
          scoped={Boolean(scope)}
          hasAssistant={Boolean(assistant)}
        />
      </DialogContent>
    </Dialog>
  )
}
