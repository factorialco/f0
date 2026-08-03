import { F0Button, F0Icon } from "@factorialco/f0-react"
import {
  Add,
  ArrowUp,
  Clock,
  Comment,
  Microphone,
  Settings,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useMemo, useRef, useState } from "react"

import {
  buildSuggestions,
  categorySuggestions,
  ONE_ACTIONS,
  type OneActionId,
  type OneSuggestion,
} from "./one/suggestions"
import { ClarifyPanel } from "./one/ClarifyPanel"
import {
  sendMessage as sendToConversation,
  startConversation,
  useConversations,
} from "./one/conversationStore"
import {
  chatHistoryGroups,
  OnePickerModal,
  routineGroups,
} from "./one/OnePickerModal"

/**
 * The Home "Hey One…" prompt bar (Figma nodes 1339:166817 default,
 * 1339:166926 focus, 1340:11978 typing+suggestions).
 *
 * Suggestion logic ported from the one-notch exploration (see
 * one/suggestions.ts); it forwards into the single global ONE panel —
 * this is not a second chat surface. The action chips (Create / Analyze /
 * Find / Automate) open the same suggestion panel filtered by category;
 * the right-side icons open the chat-history and routines modals.
 */
export function OnePromptBar() {
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
  const inputRef = useRef<HTMLInputElement>(null)
  const gradientBorderRef = useRef<HTMLDivElement>(null)
  const gradientGlowRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  const [activeChip, setActiveChip] = useState<OneActionId | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [modal, setModal] = useState<"chats" | "routines" | null>(null)

  const typedSuggestions = useMemo(() => buildSuggestions(value), [value])
  const suggestions: OneSuggestion[] =
    value.trim().length >= 2
      ? typedSuggestions
      : activeChip
        ? categorySuggestions(activeChip)
        : []
  const panelOpen = suggestions.length > 0

  useEffect(() => {
    for (const el of [gradientBorderRef.current, gradientGlowRef.current]) {
      for (const animation of el?.getAnimations() ?? []) {
        if (
          animation instanceof CSSAnimation &&
          animation.animationName === "f0c-one-orbit"
        ) {
          animation.updatePlaybackRate(focused ? 2 : 1)
        }
      }
    }
  }, [focused])

  const submit = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    // Home screen → start a full-screen conversation (lands in Recents);
    // conversation open → next turn in the same thread.
    if (inConversation) sendToConversation(trimmed)
    else startConversation(trimmed)
    setValue("")
    setActiveChip(null)
    setSelectedIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setValue("")
      setActiveChip(null)
      setSelectedIndex(-1)
      return
    }
    if (!panelOpen) {
      if (e.key === "Enter") submit(value)
      return
    }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((i) => (i + 1) % suggestions.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1))
    } else if (e.key === "Enter") {
      submit(selectedIndex >= 0 ? suggestions[selectedIndex].text : value)
    }
  }

  const toggleChip = (id: OneActionId) => {
    setActiveChip((current) => (current === id ? null : id))
    setSelectedIndex(-1)
    inputRef.current?.focus()
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
    <div className="relative flex w-full flex-col gap-2">
      {/* Suggestions panel — sits above the input, same width */}
      {panelOpen && (
        <div className="absolute bottom-full left-0 right-0 z-30 mb-2 overflow-hidden rounded-md bg-f1-background shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]">
          <div className="flex flex-col p-1">
            {suggestions.map((suggestion, index) => (
              <button
                key={`${suggestion.action.id}-${suggestion.text}`}
                onClick={() => submit(suggestion.text)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`flex w-full cursor-pointer items-center gap-2 rounded-[10px] py-2 pl-2 pr-3 text-left ${
                  index === selectedIndex ? "bg-f1-background-secondary" : ""
                }`}
              >
                <F0Icon icon={suggestion.action.icon} size="sm" color="secondary" />
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
                    <span className="text-f1-foreground">{suggestion.text}</span>
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

      {/* Input — gradient border by default, subtle glow behind on focus.
          Gradient runs orange → red → blue left-to-right (Figma `to-l`
          from #A1ADE5 via #E51943 to #E55619, node 1339:166817). */}
      <div className="relative">
        <div
          ref={gradientGlowRef}
          aria-hidden
          className={`f0c-one-gradient absolute -inset-0.5 rounded-md blur-[8px] transition-opacity duration-200 ${
            focused ? "opacity-40" : "opacity-0"
          }`}
        />
        <div ref={gradientBorderRef} className="f0c-one-gradient relative rounded-md p-px">
          <div className="flex h-[42px] items-center rounded-[11px] bg-f1-background px-1.5">
            <div className="flex min-w-0 flex-1 items-center gap-[2px]">
              <F0Button
                variant="ghost"
                size="md"
                icon={Add}
                hideLabel
                label="Add context"
              />
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                  setSelectedIndex(-1)
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={handleKeyDown}
                placeholder="Hey One…"
                className="min-w-0 flex-1 border-0 bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
              />
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <F0Button
                variant="ghost"
                size="md"
                icon={Microphone}
                hideLabel
                label="Use voice"
              />
              {value.trim().length > 0 && (
                <button
                  onClick={() => submit(value)}
                  aria-label="Send to ONE"
                  className="f0c-pressable flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-[10px] bg-f1-background-accent-bold shadow-[0_2px_6px_-1px_rgba(13,22,37,0.08)]"
                >
                  <F0Icon icon={ArrowUp} size="md" color="#ffffff" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action chips + pickers */}
      <div className="flex w-full items-center justify-between">
        {/* The action chips always show. A collapsed single "Ideas" chip is
            reserved for narrow (responsive) widths where they don't all
            fit — behavior TBD. */}
        <div className="flex items-center gap-2">
          {ONE_ACTIONS.map((action) => (
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
        <div className="flex items-center gap-1">
          <F0Button
            variant="ghost"
            size="sm"
            icon={Comment}
            hideLabel
            label="ONE chats"
            onClick={() => setModal("chats")}
          />
          <F0Button
            variant="ghost"
            size="sm"
            icon={Clock}
            hideLabel
            label="AI Routines"
            onClick={() => setModal("routines")}
          />
          <F0Button
            variant="ghost"
            size="sm"
            icon={Settings}
            hideLabel
            label="ONE settings"
          />
        </div>
      </div>

      {modal === "chats" && (
        <OnePickerModal
          newLabel="New conversation"
          groups={chatHistoryGroups}
          onClose={() => setModal(null)}
          onPick={(title) => {
            setModal(null)
            submit(title)
          }}
        />
      )}
      {modal === "routines" && (
        <OnePickerModal
          newLabel="New routine"
          groups={routineGroups}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}
