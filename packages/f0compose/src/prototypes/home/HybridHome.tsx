import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { useOnboarding, updateOnboarding } from "./onboarding/state"
import { Textarea as F0TextAreaInput } from "@factorialco/f0-react/dist/experimental"
import {
  ArrowUp,
  Cross,
  Maximize,
  Minimize,
  Microphone,
  Paperclip,
} from "@factorialco/f0-react/icons/app"
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react"
import { type ReactNode } from "react"
import { createPortal } from "react-dom"
import { useSearchParams } from "react-router-dom"

import { emptyStateFor, type Presentation } from "./agentEntryData"
import { AgentEntryContext } from "./AskFactorial"
import { isTicket } from "./comms/ChatsColumn"
import { useOpenChats } from "./comms/chatStore"
import { FactorialAgentIcon } from "./FactorialAgentIcon"
import { HomeSuggestion } from "./HomeSuggestion"
import { ClarifyPanel } from "./one/ClarifyPanel"
import {
  goHome,
  startConversation,
  startHomeWorkflow,
  sendMessage,
  useConversations,
} from "./one/conversationStore"
import { ConversationView } from "./one/ConversationView"
import "./agent-entry.css"
import { PermissionsNote } from "./one/PermissionsNote"
import { useProfile } from "./profileStore"
import { HomeWorking, useHomeRefreshing } from "./setup/homeRefresh"

export function HybridHome({ children }: { children: ReactNode }) {
  const { conversations, activeId } = useConversations()
  const activeConversation = conversations.find((c) => c.id === activeId)
  const followUp =
    (activeConversation?.homeSetup && !activeConversation.homeSetup.paused) ||
    (activeConversation?.widgetCreation &&
      !activeConversation.widgetCreation.completed &&
      !activeConversation.widgetCreation.cancelled)
      ? [...activeConversation.messages]
          .reverse()
          .find(
            (m) =>
              (m.question?.intentKey.startsWith("home:") ||
                m.question?.intentKey.startsWith("widget:")) &&
              !m.question.answer &&
              !m.question.skipped
          )
      : undefined
  const followUpRef = useRef<HTMLDivElement>(null)
  const [params] = useSearchParams()
  const openChats = useOpenChats()
  const profile = useProfile()
  const homeRefreshing = useHomeRefreshing(profile)
  const [questionReady, setQuestionReady] = useState(true)
  useEffect(() => {
    let firstGeneration = false
    try {
      firstGeneration =
        !!activeConversation?.homeBriefing &&
        !localStorage.getItem(`f0compose:home:generated-v1:${profile}`) &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    } catch {
      /* Content remains usable with storage disabled. */
    }
    setQuestionReady(!firstGeneration)
    if (!firstGeneration) return
    const timer = window.setTimeout(() => setQuestionReady(true), 1800)
    return () => window.clearTimeout(timer)
  }, [activeConversation?.id, profile])

  const view = params.get("view") ?? (openChats.some(isTicket) ? "inbox" : null)
  const onboarding = useOnboarding(profile)
  const suggestReport = !view && onboarding.suggestReport
  const emptyState = emptyStateFor(view)
  const [mode, setMode] = useState<Presentation>("idle")
  const [draft, setDraft] = useState("")
  const [notice, setNotice] = useState("")
  const root = useRef<HTMLDivElement>(null)
  const composer = useRef<HTMLDivElement>(null)
  const work = useRef<HTMLDivElement>(null)
  const [homeSlot, setHomeSlot] = useState<HTMLElement | null>(null)
  useLayoutEffect(() => {
    setHomeSlot(
      view
        ? null
        : (work.current?.querySelector<HTMLElement>("[data-hybrid-target]") ??
            null)
    )
  })
  const placeComposer = (content: ReactNode) =>
    !view && homeSlot ? createPortal(content, homeSlot) : content
  const previousView = useRef(view)
  const open = mode === "side" || mode === "focus"
  useEffect(() => {
    // Widget editing opens One only through the explicit New widget action.
    if (view === "widgets") return
    if (activeId)
      setMode(
        !view && activeConversation?.homeBriefing
          ? "idle"
          : view
            ? "side"
            : "focus"
      )
    else setMode("idle")
  }, [activeId])
  useEffect(() => {
    const openEntry = () => setMode(view ? "side" : "expanded")
    window.addEventListener("home-agent:open", openEntry)
    return () => window.removeEventListener("home-agent:open", openEntry)
  }, [view])
  const compact = !!view && mode === "idle"
  const asking =
    questionReady &&
    !!followUp &&
    (!view ||
      (view === "widgets" && open && !!activeConversation?.widgetCreation))
  const typing = draft.length > 0
  function focusField() {
    if (asking) return
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
    if (mode === "idle" || asking) return
    const timer = window.setTimeout(focusField, 380)
    return () => window.clearTimeout(timer)
  }, [mode, asking])
  // Home uses its actual content slot. Only non-home agent modes need geometry.
  useLayoutEffect(() => {
    if (!view) return
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
      // F0's input slot shows either the question OR the composer.
      const panelHeight = asking
        ? (followUpRef.current?.getBoundingClientRect().height ?? 0)
        : 0
      const parent = container.getBoundingClientRect(),
        target = destination.getBoundingClientRect()
      const width = compact
        ? 260
        : Math.min(
            open && mode === "side" ? target.width - 28 : 780,
            target.width - (view ? 24 : 0)
          )
      const height = asking ? panelHeight : compact ? 40 : 168
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
    if (followUpRef.current) observer.observe(followUpRef.current)
    const targets = container.querySelectorAll<HTMLElement>(
      "[data-hybrid-target], [data-hybrid-chat-target], [data-hybrid-dock]"
    )
    targets.forEach((target) => observer.observe(target))
    measure()
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [view, mode, compact, typing, open, followUp?.id, questionReady, asking])
  function close() {
    if (!view) goHome()
    setMode("idle")
    setNotice("")
    window.setTimeout(() => {
      if (view)
        root.current
          ?.querySelector<HTMLButtonElement>('[data-testid="ask-factorial"]')
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
    if (
      event.target instanceof HTMLElement &&
      event.target.closest('[data-home-follow-up], [role="dialog"]')
    )
      return
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
    <AgentEntryContext.Provider
      value={{
        visible: !!view,
        open: () => {
          setMode("side")
          setNotice("")
          if (mode === "side") focusField()
        },
      }}
    >
      <div
        className="flex h-full min-h-0 w-full bg-f1-background-secondary"
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
            className="bg-f1-background-secondary"
            data-hybrid-chat
            data-open={open && !!view}
            role={open && view ? "region" : undefined}
            aria-label="Conversation"
            aria-hidden={!open || !view}
          >
            <div className="flex items-center justify-between gap-2 p-4">
              <F0Heading
                content={view === "widgets" ? "New widget" : "Ask One"}
                variant="heading"
              />
              <div className="flex gap-1">
                {open && view && (
                  <F0Button
                    label={
                      mode === "side"
                        ? "Expand conversation"
                        : "Show beside page"
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
              className={
                activeConversation
                  ? "flex flex-col gap-6 p-6"
                  : "flex flex-col px-6 pt-6"
              }
              data-hybrid-messages
              aria-live="polite"
            >
              {view &&
                (activeConversation ? (
                  <ConversationView conversation={activeConversation} />
                ) : (
                  <div className="mt-auto flex flex-col gap-4">
                    {open && (
                      <FactorialAgentIcon key={view} width={40} height={40} />
                    )}
                    <div className="flex flex-col gap-3">
                      <F0Heading
                        content={emptyState.question}
                        variant="heading"
                      />
                      <div className="flex flex-col items-start gap-2">
                        {emptyState.suggestions.map(({ label, icon }) => (
                          <HomeSuggestion
                            key={label}
                            label={label}
                            icon={icon}
                            size="md"
                            variant="outline"
                            onClick={() => send(label)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div data-hybrid-chat-target />
          </div>
          {placeComposer(
            <div
              style={
                view === "widgets" && asking
                  ? { height: "auto", maxHeight: "65vh", overflowY: "auto" }
                  : !view
                    ? {
                        position: "relative",
                        left: "auto",
                        top: "auto",
                        transform: "none",
                        width: "100%",
                        height: asking ? "auto" : 168,
                        transition: "none",
                      }
                    : undefined
              }
              className={
                asking
                  ? "rounded-2xl border border-solid border-f1-border-secondary bg-f1-background"
                  : undefined
              }
              ref={composer}
              data-hybrid-composer
              hidden={compact}
              data-compact={compact}
              data-writing={typing || open}
            >
              {asking && followUp && activeConversation && (
                <div
                  ref={followUpRef}
                  data-home-follow-up
                  className="max-h-[50vh] w-full overflow-y-auto"
                >
                  <div>
                    {!activeConversation.widgetCreation &&
                      !activeConversation.homeSetup?.purpose && (
                        <div className="px-4 pb-2 pt-4">
                          {homeRefreshing ? (
                            <HomeWorking />
                          ) : (
                            <F0Text
                              content={
                                [...activeConversation.messages]
                                  .reverse()
                                  .find(
                                    (m) =>
                                      m.role === "assistant" &&
                                      !m.question &&
                                      m.content
                                  )?.content ||
                                "Let’s make your home useful for you."
                              }
                            />
                          )}
                        </div>
                      )}
                    <ClarifyPanel
                      key={followUp.id}
                      conversationId={activeConversation.id}
                      message={followUp}
                    />
                  </div>
                </div>
              )}
              <div data-hybrid-editor hidden={asking} aria-hidden={compact || asking}>
                {suggestReport && (
                  <F0Box paddingBottom="sm">
                    <HomeSuggestion
                      label="Create a report for One to monitor and share insights"
                      size="md"
                      onClick={() => {
                        updateOnboarding(profile, { suggestReport: false })
                        startHomeWorkflow(profile, "report")
                        setMode("side")
                      }}
                    />
                  </F0Box>
                )}
                <F0Box
                  position="relative"
                  height="32"
                  background="primary"
                  border="default"
                  borderColor="secondary"
                  borderRadius="xl"
                >
                  <div data-hybrid-field>
                    <F0TextAreaInput
                      label="Message One"
                      hideLabel
                      placeholder="How can I help you today?"
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
                </F0Box>
                <PermissionsNote />
              </div>
            </div>
          )}
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
    </AgentEntryContext.Provider>
  )
}
