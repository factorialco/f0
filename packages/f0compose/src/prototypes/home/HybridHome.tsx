import { F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { Textarea as F0TextAreaInput } from "@factorialco/f0-react/dist/experimental"
import {
  ArrowUp,
  Cross,
  Maximize,
  Minimize,
  Microphone,
  Paperclip,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react"
import { type ReactNode } from "react"
import { useSearchParams } from "react-router-dom"

import { suggestionFor, type Presentation } from "./agentEntryData"
import { isTicket } from "./comms/ChatsColumn"
import { useOpenChats } from "./comms/chatStore"
import { FactorialAgentIcon } from "./FactorialAgentIcon"
import {
  goHome,
  startConversation,
  sendMessage,
  useConversations,
} from "./one/conversationStore"
import { ConversationView } from "./one/ConversationView"
import "./agent-entry.css"
import { useProfile } from "./profileStore"

export function HybridHome({ children }: { children: ReactNode }) {
  const { conversations, activeId } = useConversations()
  const activeConversation = conversations.find((c) => c.id === activeId)
  const [params] = useSearchParams()
  const openChats = useOpenChats()
  const profile = useProfile()
  const view = params.get("view") ?? (openChats.some(isTicket) ? "inbox" : null)
  const suggestion = suggestionFor(view, profile)
  const [mode, setMode] = useState<Presentation>("idle")
  const [draft, setDraft] = useState("")
  const [notice, setNotice] = useState("")
  const root = useRef<HTMLDivElement>(null)
  const composer = useRef<HTMLDivElement>(null)
  const work = useRef<HTMLDivElement>(null)
  const previousView = useRef(view)
  const open = mode === "side" || mode === "focus"
  useEffect(() => {
    if (activeId) setMode(view ? "side" : "focus")
    else setMode("idle")
  }, [activeId])
  const compact = !!view && mode === "idle"
  const typing = draft.length > 0
  function focusField() {
    root.current
      ?.querySelector<HTMLTextAreaElement>("[data-hybrid-composer] textarea")
      ?.focus()
  }
  useEffect(() => {
    if (previousView.current !== view) {
      previousView.current = view
      setMode("idle")
    }
  }, [view])
  useEffect(() => {
    if (mode === "idle") return
    const timer = window.setTimeout(focusField, 380)
    return () => window.clearTimeout(timer)
  }, [mode])
  // Collapse the entry without consuming the outside interaction or moving focus.
  useEffect(() => {
    if (mode !== "expanded" || !view) return
    const dismissOutside = (event: PointerEvent) => {
      if (event.composedPath().includes(composer.current!)) return
      setMode("idle")
      setNotice("")
    }
    document.addEventListener("pointerdown", dismissOutside, true)
    return () =>
      document.removeEventListener("pointerdown", dismissOutside, true)
  }, [mode, view])
  // The composer stays mounted. Only its geometry follows the destination.
  useLayoutEffect(() => {
    const container = work.current,
      floating = composer.current
    if (
      !(container instanceof HTMLElement) ||
      !(floating instanceof HTMLElement)
    )
      return
    let frame = 0
    const measure = () => {
      const destination = container.querySelector<HTMLElement>(
        open && view
          ? "[data-hybrid-chat-target]"
          : view
            ? "[data-hybrid-dock]"
            : "[data-hybrid-target]"
      )
      if (!destination) return
      const parent = container.getBoundingClientRect(),
        target = destination.getBoundingClientRect()
      const width = compact
        ? 260
        : Math.min(
            open && mode === "side" ? target.width - 28 : 780,
            target.width - (view ? 24 : 0)
          )
      const height = compact ? 40 : typing || open ? 136 : 176
      const x = target.left - parent.left + (target.width - width) / 2
      const y = target.bottom - parent.top - height - (compact ? 4 : 8)
      floating.style.setProperty("--composer-x", `${x}px`)
      floating.style.setProperty("--composer-y", `${Math.max(0, y)}px`)
      floating.style.setProperty(
        "--composer-width",
        `${Math.max(180, width)}px`
      )
      floating.style.setProperty("--composer-height", `${height}px`)
    }
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    })
    observer.observe(container)
    const targets = container.querySelectorAll<HTMLElement>(
      "[data-hybrid-target], [data-hybrid-chat-target], [data-hybrid-dock]"
    )
    targets.forEach((target) => observer.observe(target))
    measure()
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [view, mode, compact, typing, open])
  function close() {
    goHome()
    setMode("idle")
    window.setTimeout(() => {
      if (view)
        root.current
          ?.querySelector<HTMLButtonElement>("[data-hybrid-trigger] button")
          ?.focus()
      else focusField()
    }, 420)
  }
  function send(text = draft) {
    if (!text.trim()) return
    if (activeId) sendMessage(text.trim(), activeId)
    else startConversation(text.trim())
    setMode(view ? "side" : "focus")
    setDraft("")
  }
  function keys(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault()
      close()
    }
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      event.target instanceof HTMLTextAreaElement &&
      !!event.target.closest("[data-hybrid-composer]") &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault()
      send()
    }
  }
  return (
    <div
      className="flex h-full min-h-0 w-full bg-f1-background"
      ref={root}
      data-hybrid-root
      data-mode={view ? mode : "idle"}
      data-view={view ?? "home"}
      data-typing={typing}
      onKeyDown={keys}
    >
      <div className="h-full min-w-0 flex-1" ref={work} data-hybrid-work>
        <div className="h-full" data-hybrid-canvas>
          {children}
        </div>
        <div data-hybrid-dock aria-hidden="true" />
        <div
          className="bg-f1-background"
          data-hybrid-chat
          data-open={open && !!view}
          role={open && view ? "region" : undefined}
          aria-label="Conversation"
          aria-hidden={!open || !view}
        >
          <div className="flex items-center justify-between gap-2 p-4">
            <F0Heading content="New conversation" variant="heading" />
            <div className="flex gap-1">
              {open && view && (
                <F0Button
                  label={
                    mode === "side" ? "Expand conversation" : "Show beside page"
                  }
                  icon={mode === "side" ? Maximize : Minimize}
                  hideLabel
                  variant="ghost"
                  size="sm"
                  onClick={() => setMode(mode === "side" ? "focus" : "side")}
                />
              )}
              <F0Button
                label="Close conversation"
                icon={Cross}
                hideLabel
                variant="ghost"
                size="sm"
                onClick={close}
              />
            </div>
          </div>
          <div
            className="flex flex-col gap-6 p-6"
            data-hybrid-messages
            aria-live="polite"
          >
            {view && activeConversation && (
              <ConversationView conversation={activeConversation} />
            )}
          </div>
          <div data-hybrid-chat-target />
        </div>
        <div
          className="rounded-2xl border border-solid border-f1-border-secondary bg-f1-background"
          ref={composer}
          data-hybrid-composer
          data-compact={compact}
          data-writing={typing || open}
        >
          <div data-hybrid-trigger aria-hidden={!compact}>
            <F0Button
              label="What can I do for you?"
              icon={FactorialAgentIcon}
              size="md"
              variant="ghost"
              onClick={() => {
                setMode("expanded")
                setNotice("")
              }}
            />
          </div>
          <div data-hybrid-editor aria-hidden={compact}>
            <div
              className="flex gap-1"
              data-hybrid-suggestions
              aria-hidden={typing || open}
            >
              <F0Button
                label={suggestion.label}
                icon={Sparkles}
                variant="neutral"
                size="sm"
                onClick={() => {
                  send(suggestion.prompt)
                }}
              />
            </div>
            <div data-hybrid-field>
              <F0TextAreaInput
                label="Message your agent"
                hideLabel
                placeholder="Let me know what I can do for you"
                value={draft}
                onChange={setDraft}
                rows={2}
                maxHeight={72}
              />
            </div>
            <div
              className="flex items-center justify-between"
              data-hybrid-actions
            >
              <F0Button
                label="Attach a file"
                icon={Paperclip}
                hideLabel
                size="md"
                variant="outline"
                onClick={() =>
                  setNotice(
                    "Attachments are not enabled in this interaction prototype."
                  )
                }
              />
              <div className="flex items-center gap-1">
                <F0Button
                  label="Record audio"
                  icon={Microphone}
                  hideLabel
                  size="md"
                  variant="ghost"
                  onClick={() =>
                    setNotice(
                      "Audio recording is not enabled in this interaction prototype."
                    )
                  }
                />
                <F0Button
                  label="Send message"
                  icon={ArrowUp}
                  hideLabel
                  size="md"
                  disabled={!draft.trim()}
                  onClick={() => send()}
                />
              </div>
            </div>
          </div>
        </div>
        {notice && (
          <div
            className="rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2"
            data-hybrid-notice
            role="status"
          >
            <F0Text content={notice} variant="description" />
            <F0Button
              label="Dismiss"
              icon={Cross}
              variant="ghost"
              size="sm"
              onClick={() => setNotice("")}
            />
          </div>
        )}
      </div>
    </div>
  )
}
