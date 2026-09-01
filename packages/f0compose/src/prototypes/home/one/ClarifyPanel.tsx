import { F0Button, F0Icon } from "@factorialco/f0-react"
import {
  ArrowDown,
  ArrowUp,
  Check,
  Cross,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"

import {
  answerQuestion,
  skipQuestion,
  type ChatMessage,
} from "./conversationStore"

/**
 * The clarifying-questions panel, after f0's F0ClarifyingPanel (kits/ai)
 * and the "follow-up" instances in the Home - Vision Figma (1350:179756
 * in the canvas, 2732:462941 in the split panel): when One asks a
 * clarifying question, the composer DISAPPEARS and this panel takes its
 * place at the same width — question + close, options, Cancel/Submit
 * footer, keyboard hints underneath.
 *
 * Two option modes, both drawn from the frames: RADIOS when exactly one
 * answer makes sense, CHECKBOXES when the question is "which of these"
 * and more than one can be picked (`question.multi`).
 *
 * Keyboard: ↑↓ move the highlight, Enter selects (single mode: Enter again
 * submits; multi mode: it toggles), Esc dismisses. Selecting "Other" opens
 * a free-text row.
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

/**
 * Checkbox indicator — 20px on a 6px radius, off the frame. Hand-rolled
 * rather than f0's `F0Checkbox` so it is the same 20px box as the radio
 * above it (F0Checkbox's button is 24px and takes no className): the two
 * are the same list in two modes, and a size change between them would
 * shift the labels.
 */
function CheckIndicator({ selected }: { selected: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-xs transition-colors ${
        selected
          ? "bg-f1-background-selected-bold"
          : "border border-solid border-f1-border bg-f1-background"
      }`}
    >
      {selected && <F0Icon icon={Check} size="xs" color="inverse" />}
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
  const multi = question.multi ?? false
  const [highlight, setHighlight] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [checked, setChecked] = useState<number[]>([])
  const [otherText, setOtherText] = useState("")

  const otherSelected =
    !multi && choice !== null && question.options[choice] === "Other"
  const canProceed = multi
    ? checked.length > 0
    : choice !== null && (!otherSelected || otherText.trim().length > 0)

  /**
   * Ticking EVERY option resolves to "Both" — the intents write their
   * follow-through copy for that word, so the frame can drop the third
   * "Both" radio and still reach the same answer. Anything in between
   * (2 of 3, say) joins the labels and falls to the generic resolve.
   */
  const multiAnswer = () => {
    const picked = [...checked].sort().map((i) => question.options[i])
    if (picked.length === question.options.length && picked.length > 1) {
      return "Both"
    }
    return picked.join(" and ")
  }

  const submit = () => {
    if (!canProceed) return
    const answer = multi
      ? multiAnswer()
      : otherSelected
        ? otherText.trim()
        : question.options[choice!]
    answerQuestion(conversationId, message.id, answer)
  }
  const dismiss = () => skipQuestion(conversationId, message.id)

  const toggle = (index: number) => {
    if (multi) {
      setChecked((c) =>
        c.includes(index) ? c.filter((i) => i !== index) : [...c, index]
      )
    } else {
      setChoice(index)
    }
    setHighlight(index)
  }

  const isSelected = (index: number) =>
    multi ? checked.includes(index) : choice === index

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
        setHighlight((h) => (h <= 0 ? question.options.length - 1 : h - 1))
      } else if (event.key === "Enter") {
        // The "Other" input owns its own Enter (see below).
        if (document.activeElement?.tagName === "INPUT") return
        event.preventDefault()
        // Single mode: Enter on the option that is ALREADY chosen submits.
        // Multi mode Enter only ever toggles — submitting on a second
        // press would send the answer the moment you tried to untick one.
        if (!multi && choice === highlight && canProceed) submit()
        else toggle(highlight)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choice, checked, highlight, canProceed, otherText, multi])

  return (
    <div className="flex w-full flex-col items-center gap-1">
      {/* The ONE glow, off 2732:462941: a blurred gradient sitting BEHIND
          the card (a sibling painted first, not a z-index game), so only
          the ~4px that spills past the border is visible. Border stays the
          gradient's lavender, as in both frames. The gradient itself is a
          real CSS class in Home's stylesheet — arbitrary Tailwind blur +
          multi-stop gradient utilities are exactly what silently drops
          here. */}
      <div className="relative w-full">
        <div aria-hidden className="f0c-clarify-glow" />
        <div className="relative w-full rounded-md border border-solid border-[rgba(161,173,229,0.7)] bg-f1-background">
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
          <div
            className="flex flex-col pl-2 pr-3 pt-2"
            role={multi ? "group" : "radiogroup"}
          >
            {question.options.map((option, index) => (
              <div
                key={option}
                role={multi ? "checkbox" : "radio"}
                aria-checked={isSelected(index)}
                tabIndex={-1}
                onClick={() => toggle(index)}
                onMouseEnter={() => setHighlight(index)}
                // No transition: the highlight is driven by ArrowUp/Down, a
                // keyboard action the user repeats quickly. Fading the
                // selection makes stepping through the list feel laggy and
                // smears two rows together while it catches up.
                className={`flex cursor-pointer items-center gap-2 rounded px-2 py-2 ${
                  highlight === index ? "bg-f1-background-secondary" : ""
                }`}
              >
                {multi ? (
                  <CheckIndicator selected={isSelected(index)} />
                ) : (
                  <RadioIndicator selected={isSelected(index)} />
                )}
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
            <F0Button
              variant="outline"
              size="md"
              label="Cancel"
              onClick={dismiss}
            />
            <F0Button
              variant="default"
              size="md"
              label="Submit"
              disabled={!canProceed}
              onClick={submit}
            />
          </div>
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
