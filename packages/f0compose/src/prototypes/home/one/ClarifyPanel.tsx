import { F0Button } from "@factorialco/f0-react"
import { ArrowDown, ArrowUp, Cross } from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"

import {
  answerQuestion,
  skipQuestion,
  type ChatMessage,
} from "./conversationStore"

/**
 * The clarifying-questions panel, after f0's F0ClarifyingPanel (kits/ai)
 * and the "follow-up" instance in the Home - Vision Figma (1350:179756):
 * when One asks a clarifying question, the prompt-bar input DISAPPEARS
 * and this panel takes its place at the same width — question + close,
 * radio options, Cancel/Submit footer, keyboard hints underneath.
 *
 * Keyboard: ↑↓ move the highlight, Enter selects (Enter again submits),
 * Esc dismisses. Selecting "Other" opens a free-text row.
 */

/** Radio indicator, matching F0ClarifyingPanel's RadioIndicator. */
function RadioIndicator({ selected }: { selected: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors ${
        selected
          ? "bg-f1-background-selected-bold"
          : "border-2 border-solid border-f1-border bg-f1-background"
      }`}
    >
      {selected && <span className="h-2 w-2 rounded-full bg-f1-background" />}
    </span>
  )
}

export function ClarifyPanel({
  conversationId,
  message,
}: {
  conversationId: string
  message: ChatMessage
}) {
  const question = message.question!
  const [highlight, setHighlight] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [otherText, setOtherText] = useState("")

  const otherSelected =
    choice !== null && question.options[choice] === "Other"
  const canProceed =
    choice !== null && (!otherSelected || otherText.trim().length > 0)

  const submit = () => {
    if (!canProceed || choice === null) return
    const answer = otherSelected ? otherText.trim() : question.options[choice]
    answerQuestion(conversationId, message.id, answer)
  }
  const dismiss = () => skipQuestion(conversationId, message.id)

  // The input is gone while the panel shows, so keys are handled globally.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        dismiss()
      } else if (event.key === "ArrowDown") {
        event.preventDefault()
        setHighlight((h) => (h + 1) % question.options.length)
      } else if (event.key === "ArrowUp") {
        event.preventDefault()
        setHighlight((h) =>
          h <= 0 ? question.options.length - 1 : h - 1
        )
      } else if (event.key === "Enter") {
        // The "Other" input owns its own Enter (see below).
        if (document.activeElement?.tagName === "INPUT") return
        event.preventDefault()
        if (choice === highlight && canProceed) submit()
        else setChoice(highlight)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choice, highlight, canProceed, otherText])

  return (
    <div className="flex w-full flex-col items-center gap-1">
      {/* Card border is the ONE gradient's lavender (Figma: rgba(161,173,229,0.7)) —
          same rationale as the prompt-bar gradient: bespoke ONE surface. */}
      <div className="w-full rounded-md border border-solid border-[rgba(161,173,229,0.7)] bg-f1-background">
        <div className="flex items-start gap-0.5 pl-4 pr-3 pt-3">
          <p className="min-w-0 flex-1 text-lg font-semibold text-f1-foreground">
            {question.text}
          </p>
          <F0Button
            variant="ghost"
            size="sm"
            icon={Cross}
            hideLabel
            label="Dismiss question"
            onClick={dismiss}
          />
        </div>
        <div className="flex flex-col pl-2 pr-3 pt-2" role="radiogroup">
          {question.options.map((option, index) => (
            <div
              key={option}
              role="radio"
              aria-checked={choice === index}
              tabIndex={-1}
              onClick={() => {
                setChoice(index)
                setHighlight(index)
              }}
              onMouseEnter={() => setHighlight(index)}
              className={`flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors ${
                highlight === index ? "bg-f1-background-secondary" : ""
              }`}
            >
              <RadioIndicator selected={choice === index} />
              <span className="text-base font-medium text-f1-foreground">
                {option}
              </span>
            </div>
          ))}
          {otherSelected && (
            <div className="px-2 pt-1">
              <input
                autoFocus
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canProceed) submit()
                }}
                placeholder="Type here…"
                className="w-full rounded-md border border-solid border-f1-border bg-transparent px-3 py-2 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-end gap-3 p-3">
          <F0Button variant="outline" size="md" label="Cancel" onClick={dismiss} />
          <F0Button
            variant="default"
            size="md"
            label="Submit"
            disabled={!canProceed}
            onClick={submit}
          />
        </div>
      </div>
      {/* Keyboard hints (Figma: ↑ ↓ to navigate · Enter to select · Esc to dismiss) */}
      <div className="flex items-center justify-center gap-3 pb-1 text-sm font-medium text-f1-foreground-secondary">
        <span className="flex items-center gap-1">
          <span className="flex items-center">
            <ArrowUp width={12} height={12} />
            <ArrowDown width={12} height={12} />
          </span>
          to navigate
        </span>
        <span>Enter to select</span>
        <span>Esc to dismiss</span>
      </div>
    </div>
  )
}
