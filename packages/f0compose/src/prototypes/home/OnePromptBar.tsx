import { F0Button, F0Icon } from "@factorialco/f0-react"
import { F0AiChatTextArea } from "@factorialco/f0-react/dist/ai"
import {
  Microphone,
  Paperclip,
  Settings,
} from "@factorialco/f0-react/icons/app"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { ClarifyPanel } from "./one/ClarifyPanel"
import {
  sendMessage as sendToConversation,
  startConversation,
  tryResolveInPlace,
  useConversations,
} from "./one/conversationStore"
import { PermissionsNote } from "./one/PermissionsNote"
import {
  buildSuggestions,
  categorySuggestions,
  CHIP_ACTIONS,
  EMPLOYEE_CHIP_ACTIONS,
  type OneActionId,
  type OneSuggestion,
} from "./one/suggestions"
import { useProfile } from "./profileStore"

/**
 * The Home One composer (Figma 2639:45460 — f0's real One input, with
 * Oskar's radius/padding tweaks applied from `FULL_BLEED_CSS`).
 *
 * The input itself is **f0's `F0AiChatTextArea`**, not a bespoke one, so
 * the prototype inherits the real autosize, focus gradient, Enter-to-send
 * and attachment handling. That component owns its own value and exposes
 * no `onChange`, so the suggestions engine (ported from one-notch, see
 * one/suggestions.ts) reads the real `<textarea>` through a small bridge
 * below — the alternative was losing type-ahead suggestions entirely.
 *
 * The action chips (Create / Automate / Analyze) sit BELOW the
 * input and open the same suggestion panel filtered by category; the
 * right side keeps only Settings (per Oskar / Figma 2640:51236).
 */

/** Write into a React-controlled textarea from outside its tree. */
function setNativeValue(el: HTMLTextAreaElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype,
    "value"
  )?.set
  setter?.call(el, value)
  el.dispatchEvent(new Event("input", { bubbles: true }))
}

/** The name f0 gives its chat textarea. Two things depend on it now — the
 *  DOM bridge that keeps type-ahead alive and the focus guard below — so
 *  it is a constant rather than a string repeated in two selectors. */
const ONE_INPUT_NAME = "one-ai-input"

/**
 * `placeholder` and `onSubmit` exist so the Agents screen can use THIS
 * composer rather than a lookalike (per Oskar, 2026-09-02: "el text area
 * del estado empty que sea el mismo que tenemos en New"). Everything that
 * makes the input feel like One — f0's autosize, the focus glow, the
 * 16px radius, the type-ahead bridge — comes with it for free, which a
 * second hand-rolled box could only imitate.
 *
 * Only ONE of these may be mounted at a time: the suggestions bridge
 * listens on DOCUMENT for `input`, so two instances would fight over it.
 * That holds by construction — Agents hides the pinned bar (see
 * `showPromptBar` in Home) and only shows its own while the empty state
 * is up.
 */
export function OnePromptBar({
  placeholder,
  onSubmit,
  showChips = true,
}: {
  placeholder?: string
  /** Replaces "start a conversation / next turn" with the caller's flow. */
  onSubmit?: (text: string) => void
  showChips?: boolean
} = {}) {
  // Employee swaps the analyst chip for Find (Figma 2694:55469), and the
  // suggestion catalog itself is role-gated (see ROLE_PROMPTS).
  const profile = useProfile()
  const chipActions =
    profile === "employee" ? EMPLOYEE_CHIP_ACTIONS : CHIP_ACTIONS
  const { conversations, activeId } = useConversations()
  const inConversation = activeId !== null
  const activeConversation = conversations.find((c) => c.id === activeId)
  // While One waits on a clarifying question, the input DISAPPEARS and
  // the ClarifyPanel takes the bar's place at the same width (the way
  // One works today — see F0ClarifyingPanel and Figma 1342:168049).
  const pendingQuestionMessage =
    activeConversation && !activeConversation.thinking
      ? [...activeConversation.messages]
          .reverse()
          .find((m) => m.question && !m.question.answer && !m.question.skipped)
      : undefined

  const rootRef = useRef<HTMLDivElement>(null)
  const composerRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState("")
  const [activeChip, setActiveChip] = useState<OneActionId | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  /** Set when the panel is dismissed without changing what's typed. */
  const [dismissed, setDismissed] = useState(false)
  /** The action bar's two slots, for the portalled attach + mic buttons. */
  const [actionSlots, setActionSlots] = useState<{
    left: HTMLElement
    right: HTMLElement
  } | null>(null)

  /**
   * The page must NOT open with the caret in the composer (per Oskar,
   * 2026-09-02): Home is a screen you land on to READ — the greeting, the
   * queue, the widgets — and a focused textarea both hides that behind a
   * blinking caret and sends the first keystroke somewhere nobody asked
   * for.
   *
   * The focus is f0's, not ours: `ChatInput` focuses its textarea in a
   * mount effect. Child effects run before the parent's, so by the time
   * this one fires the textarea already holds the focus and handing it
   * back is enough — measured: `document.activeElement` is `body` on load
   * and stays there.
   *
   * Scoped to OUR textarea on purpose: if some other element legitimately
   * has the focus when this mounts, it keeps it. If f0 ever moves its
   * focus call into a timeout or a rAF this will stop being enough — that
   * is the thing to check here first.
   */
  useEffect(() => {
    const active = document.activeElement
    if (
      active instanceof HTMLTextAreaElement &&
      active.name === ONE_INPUT_NAME
    ) {
      active.blur()
    }
  }, [])

  const typedSuggestions = useMemo(
    () => buildSuggestions(value, profile),
    [value, profile]
  )
  const suggestions: OneSuggestion[] =
    value.trim().length >= 2
      ? typedSuggestions
      : activeChip
        ? categorySuggestions(activeChip, profile)
        : []
  const panelOpen = suggestions.length > 0 && !dismissed

  const textarea = () =>
    composerRef.current?.querySelector<HTMLTextAreaElement>(
      `textarea[name="${ONE_INPUT_NAME}"]`
    ) ?? null

  const submit = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed) return
      // A caller-owned flow wins (Agents briefs an agent with it);
      // otherwise: Home screen → start a full-screen conversation (lands
      // in Recents); conversation open → next turn in the same thread.
      if (onSubmit) onSubmit(trimmed)
      else if (inConversation) sendToConversation(trimmed)
      // Some work belongs on the card it came from, not in a chat: if One
      // can close the Needs-you rows this prompt targets, it does that
      // and we stay on Home (see `tryResolveInPlace`).
      else if (!tryResolveInPlace(trimmed)) startConversation(trimmed)
      setValue("")
      setActiveChip(null)
      setSelectedIndex(-1)
    },
    [inConversation, onSubmit]
  )

  /** Pick a suggestion: send it and empty the real textarea behind it. */
  const pick = (text: string) => {
    const el = textarea()
    if (el) setNativeValue(el, "")
    submit(text)
  }

  // Bridge to f0's textarea: mirror its value into `value` (drives the
  // suggestion panel) and steer the panel with ↑/↓/Enter/Esc before the
  // component's own handler sees them. Listeners are attached once, so
  // the live panel state is read through refs.
  const panelStateRef = useRef({ suggestions, selectedIndex, panelOpen })
  panelStateRef.current = { suggestions, selectedIndex, panelOpen }

  useEffect(() => {
    // Both listeners live on DOCUMENT and resolve the node per event —
    // f0 re-mounts the textarea as its state changes, so a node-level
    // listener silently goes stale.
    //
    // `input` must also stay in the BUBBLE phase: React delegates its own
    // listener to the app root, so anything closer to the element runs
    // FIRST — re-rendering there hands the controlled textarea its stale
    // (empty) value, which wipes the DOM and defeats React's
    // change-tracker, and every keystroke is swallowed.
    const sync = (event: Event) => {
      const el = textarea()
      if (!el || event.target !== el) return
      setValue(el.value)
      setSelectedIndex(-1)
      setDismissed(false)
      // Typing takes over from a category: the chip must not stay lit
      // while the panel is showing type-ahead results (or none at all).
      if (el.value.trim().length > 0) setActiveChip(null)
    }

    const steer = (event: KeyboardEvent) => {
      const el = textarea()
      if (!el || event.target !== el) return
      const {
        suggestions: list,
        selectedIndex: index,
        panelOpen: open,
      } = panelStateRef.current
      if (event.key === "Escape") {
        // First Esc just closes the panel; a second one clears the input.
        if (panelStateRef.current.panelOpen) setDismissed(true)
        else setNativeValue(el, "")
        setActiveChip(null)
        return
      }
      if (!open) return
      if (event.key === "ArrowDown") {
        event.preventDefault()
        event.stopPropagation()
        setSelectedIndex((i) => (i + 1) % list.length)
      } else if (event.key === "ArrowUp") {
        event.preventDefault()
        event.stopPropagation()
        setSelectedIndex((i) => (i <= 0 ? list.length - 1 : i - 1))
      } else if (event.key === "Enter" && !event.shiftKey && index >= 0) {
        event.preventDefault()
        event.stopPropagation()
        pick(list[index].text)
      }
    }

    document.addEventListener("input", sync)
    // Capture phase so the component's own keydown doesn't act on ↑/↓/
    // Enter before the suggestion panel has had its say — and on document
    // rather than the node, which f0 re-mounts as the input's state
    // changes (a node-level listener silently goes stale).
    document.addEventListener("keydown", steer, true)
    return () => {
      document.removeEventListener("input", sync)
      document.removeEventListener("keydown", steer, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Click-away: anything outside the bar closes the panel but leaves what
  // was typed alone. `mousedown` (not click) so it fires before focus moves.
  useEffect(() => {
    if (!panelOpen) return
    const onDown = (event: MouseEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return
      setDismissed(true)
      setActiveChip(null)
      setSelectedIndex(-1)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [panelOpen])

  // f0 re-mounts the action bar's buttons as the input's state changes
  // (send ↔ stop), so the portal targets are re-resolved on every mutation
  // rather than captured once.
  useEffect(() => {
    const host = composerRef.current
    if (!host) return
    const resolve = () => {
      const right = host.querySelector<HTMLElement>(
        'form button[type="submit"]'
      )?.parentElement
      const left = right?.parentElement?.firstElementChild as HTMLElement | null
      setActionSlots((current) =>
        right && left && (current?.left !== left || current?.right !== right)
          ? { left, right }
          : current
      )
    }
    resolve()
    const observer = new MutationObserver(resolve)
    observer.observe(host, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  const toggleChip = (id: OneActionId) => {
    setActiveChip((current) => (current === id ? null : id))
    setSelectedIndex(-1)
    setDismissed(false)
    textarea()?.focus()
  }

  if (pendingQuestionMessage && activeConversation) {
    return (
      <ClarifyPanel
        conversationId={activeConversation.id}
        message={pendingQuestionMessage}
      />
    )
  }

  return (
    <div ref={rootRef} className="relative flex w-full flex-col">
      {/* Suggestions panel — sits above the input, same width */}
      {panelOpen && (
        <div className="absolute bottom-full left-0 right-0 z-30 mb-2 overflow-hidden rounded-md bg-f1-background shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]">
          <div className="flex flex-col p-1">
            {suggestions.map((suggestion, index) => (
              <button
                key={`${suggestion.action.id}-${suggestion.text}`}
                onClick={() => pick(suggestion.text)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`flex w-full cursor-pointer items-center gap-2 rounded-[10px] py-2 pl-2 pr-3 text-left ${
                  index === selectedIndex ? "bg-f1-background-secondary" : ""
                }`}
              >
                <F0Icon
                  icon={suggestion.action.icon}
                  size="sm"
                  color="secondary"
                />
                <span className="min-w-0 flex-1 truncate text-base font-medium">
                  {suggestion.matchLen > 0 ? (
                    <>
                      <span className="text-f1-foreground">
                        {suggestion.text.slice(0, suggestion.matchLen)}
                      </span>
                      <span className="text-f1-foreground-secondary">
                        {suggestion.text.slice(suggestion.matchLen)}
                      </span>
                    </>
                  ) : (
                    <span className="text-f1-foreground">
                      {suggestion.text}
                    </span>
                  )}
                </span>
                <span className="shrink-0 text-sm font-medium text-f1-foreground-tertiary">
                  {suggestion.action.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        ref={composerRef}
        data-one-composer
        // The placeholder is drawn by FULL_BLEED_CSS's ::before (f0's own
        // copy comes from i18n and only feeds the typewriter), so it is
        // overridden through a custom property rather than a prop. The
        // quotes are part of the value: `content` needs a CSS string.
        style={
          placeholder
            ? ({
                "--f0c-one-placeholder": `"${placeholder}"`,
              } as React.CSSProperties)
            : undefined
        }
      >
        <F0AiChatTextArea
          inProgress={activeConversation?.thinking ?? false}
          onSend={async (text: string) => {
            submit(text)
            // The component only awaits this; nothing reads the value.
            return undefined as never
          }}
        />
        {/* Attach + mic, portalled into f0's own action bar (Figma
            2639:45460). f0 renders the attach button only when the chat
            provider is given `fileAttachments`, and that provider lives in
            the shell — turning it on there would enable uploads for every
            prototype — and it has no mic at all. Both are visual-only
            here, like the old bar's "+" and mic. `order` puts the mic
            ahead of the send button inside the right-hand flex group. */}
        {actionSlots &&
          createPortal(
            <F0Button
              variant="outline"
              size="md"
              icon={Paperclip}
              hideLabel
              label="Attach a file"
            />,
            actionSlots.left
          )}
        {actionSlots &&
          createPortal(
            <span className="order-[-1] mr-2 flex items-center">
              <F0Button
                variant="ghost"
                size="md"
                icon={Microphone}
                hideLabel
                label="Use voice"
              />
            </span>,
            actionSlots.right
          )}
      </div>

      {/* Below the input, and it is EITHER/OR (per Oskar, 2026-09-02):
          once a conversation is under way the suggestion chips have
          nothing left to offer — you are already talking — so the row
          becomes the permissions note (Figma 2745:468340). This also
          retires a long-standing pending item: the chips used to show in
          conversation too.

          Order matters here: the note wins over `showChips`, because a
          caller that hides the chips (the Agents brief) is saying "no
          chips on my screen", not "never show the note". */}
      {inConversation ? (
        <PermissionsNote />
      ) : (
        <div
          className={`w-full items-center justify-between py-2 ${
            showChips ? "flex" : "hidden"
          }`}
        >
          <div className="flex items-center gap-1">
            {chipActions.map((action) => (
              <button
                key={action.id}
                onClick={() => toggleChip(action.id)}
                className={`f0c-pressable flex cursor-pointer items-center gap-1 rounded-[10px] px-1.5 py-1 text-base font-medium ${
                  activeChip === action.id
                    ? "bg-f1-background-secondary text-f1-foreground"
                    : "text-f1-foreground hover:bg-f1-background-secondary"
                }`}
              >
                <F0Icon icon={action.icon} size="sm" color="default" />
                {action.label}
              </button>
            ))}
          </div>
          <F0Button
            variant="ghost"
            size="sm"
            icon={Settings}
            hideLabel
            label="ONE settings"
          />
        </div>
      )}
    </div>
  )
}
