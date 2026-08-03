import { F0Icon } from "@factorialco/f0-react"
import {
  Check,
  Delete,
  Ellipsis,
  LayersFront,
} from "@factorialco/f0-react/icons/app"
import { Fragment, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import {
  deleteQuestion,
  duplicateQuestion,
  updateQuestion,
  useSurveyDraft,
  type SurveyQuestion,
} from "./surveyDraft"

/**
 * Creation preview window — the Employee Engagement Survey drafted in
 * the ONE conversation (Figma 1350:178521). Question cards replicate f0
 * main's SurveyFormBuilder BaseQuestion (our branch predates
 * kits/surveys): editable title/description, hover actions menu with
 * Required/Duplicate/Delete, interactive inputs per question type.
 * When One adds a question, a placeholder shimmers in its slot (Figma
 * 1356:14761) and the question streams in (see surveyDraft.ts).
 */

/** Chrome's native auto-growing textarea; fine for the prototype. */
const AUTO_SIZE = { fieldSizing: "content" } as React.CSSProperties

/** Progressive text reveal for questions One just streamed in. Reveal
 *  is time-based (~85 chars/s), so throttled timers only lower the
 *  frame rate, never stretch the total duration. */
function useStreamedText(text: string, enabled: boolean) {
  const [count, setCount] = useState(enabled ? 0 : text.length)
  useEffect(() => {
    if (!enabled) return
    const start = performance.now()
    const interval = setInterval(() => {
      const chars = Math.floor((performance.now() - start) / 12)
      setCount(Math.min(chars, text.length))
      if (chars >= text.length) clearInterval(interval)
    }, 24)
    return () => clearInterval(interval)
  }, [enabled, text.length])
  return { shown: text.slice(0, count), done: count >= text.length }
}

function MenuRow({
  icon,
  label,
  critical = false,
  trailing,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  critical?: boolean
  trailing?: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left hover:bg-f1-background-secondary"
    >
      {icon}
      <span
        className={`min-w-0 flex-1 truncate text-base font-medium ${
          critical ? "text-f1-foreground-critical" : "text-f1-foreground"
        }`}
      >
        {label}
      </span>
      {trailing}
    </button>
  )
}

/** SurveyFormBuilder-style per-question actions (kebab on hover). */
function QuestionActionsMenu({ question }: { question: SurveyQuestion }) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [pos, setPos] = useState<{ top: number; right: number } | null>(null)

  const toggle = () => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos((p) =>
      p ? null : { top: rect.bottom + 4, right: window.innerWidth - rect.right }
    )
  }

  // Portalled to <body>: the window column scrolls + clips overflow.
  const menu = pos && (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setPos(null)} />
      <div
        className="f0c-popover fixed z-50 flex w-[200px] flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
        style={{ top: pos.top, right: pos.right, transformOrigin: "top right" }}
      >
        <MenuRow
          icon={<F0Icon icon={Check} size="md" color="default" />}
          label="Required"
          trailing={
            question.required ? (
              <F0Icon icon={Check} size="sm" color="positive" />
            ) : undefined
          }
          onClick={() => {
            updateQuestion(question.id, { required: !question.required })
            setPos(null)
          }}
        />
        <MenuRow
          icon={<F0Icon icon={LayersFront} size="md" color="default" />}
          label="Duplicate"
          onClick={() => {
            duplicateQuestion(question.id)
            setPos(null)
          }}
        />
        <MenuRow
          icon={<F0Icon icon={Delete} size="md" color="critical" />}
          label="Delete"
          critical
          onClick={() => {
            setPos(null)
            deleteQuestion(question.id)
          }}
        />
      </div>
    </>
  )

  return (
    <div
      className={`shrink-0 ${pos ? "" : "opacity-0 group-hover/question:opacity-100"}`}
    >
      {menu && createPortal(menu, document.body)}
      <button
        ref={buttonRef}
        onClick={toggle}
        aria-label={`Question options: ${question.title}`}
        className="flex size-7 cursor-pointer items-center justify-center rounded-[8px] hover:bg-f1-background-secondary"
      >
        <F0Icon icon={Ellipsis} size="sm" color="secondary" />
      </button>
    </div>
  )
}

function ScaleRow() {
  const [picked, setPicked] = useState<string | null>(null)
  return (
    <div className="mt-1 flex w-full items-center gap-3">
      {["1", "2", "3", "4", "5"].map((option) => (
        <button
          key={option}
          onClick={() => setPicked(option)}
          className={`f0c-pressable flex h-10 min-w-0 flex-1 cursor-pointer items-center justify-center rounded-lg border border-solid text-base font-medium text-f1-foreground ${
            picked === option
              ? "border-f1-border-hover bg-f1-background-secondary"
              : "border-f1-border-secondary bg-f1-background hover:bg-f1-background-secondary"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

function CheckboxRow({ label }: { label: string }) {
  const [checked, setChecked] = useState(false)
  return (
    <button
      onClick={() => setChecked((c) => !c)}
      className="flex w-full cursor-pointer items-center gap-3 rounded-md px-1 py-1.5 text-left hover:bg-f1-background-secondary"
    >
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-[6px] border border-solid ${
          checked
            ? "border-f1-border-hover bg-f1-background-selected-bold"
            : "border-f1-border bg-f1-background"
        }`}
      >
        {checked && <F0Icon icon={Check} size="xs" color="#ffffff" />}
      </span>
      <span className="text-base text-f1-foreground">{label}</span>
    </button>
  )
}

/** The type-specific answer input under the title/description. */
function QuestionBody({ question }: { question: SurveyQuestion }) {
  if (question.type === "rating") return <ScaleRow />
  if (question.type === "multi-select")
    return (
      <div className="flex flex-col">
        {(question.options ?? []).map((option) => (
          <CheckboxRow key={option} label={option} />
        ))}
      </div>
    )
  return (
    <textarea
      rows={3}
      placeholder="Write your feedback…"
      className="w-full resize-none rounded-md border border-solid border-f1-border bg-transparent px-3 py-2 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
    />
  )
}

/**
 * A builder question card: streams its text in when One just added it,
 * then behaves like every other card — editable, duplicable, deletable.
 */
function SurveyQuestionCard({ question }: { question: SurveyQuestion }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [streaming, setStreaming] = useState(Boolean(question.justAdded))
  const title = useStreamedText(question.title, streaming)
  const description = useStreamedText(question.description ?? "", streaming)

  // One just added this question in the placeholder's slot — keep it in
  // view while it streams, then hand over to the editable card.
  useEffect(() => {
    if (!streaming) return
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }, [streaming])
  useEffect(() => {
    if (streaming && title.done && description.done) {
      const settle = setTimeout(() => setStreaming(false), 150)
      return () => clearTimeout(settle)
    }
  }, [streaming, title.done, description.done])

  return (
    <div
      ref={cardRef}
      className="group/question flex w-full flex-col gap-2 rounded-xl border border-solid border-f1-border bg-f1-background px-3 py-3 transition-colors hover:border-f1-border-hover"
    >
      <div className="flex flex-row items-start gap-2">
        {streaming ? (
          <p className="w-full px-2 py-1 text-lg font-semibold text-f1-foreground">
            {title.shown}
            {question.required && title.done && (
              <span className="text-f1-foreground-critical"> *</span>
            )}
          </p>
        ) : (
          <div className="relative w-full">
            <textarea
              value={question.title}
              rows={1}
              aria-label="Question title"
              placeholder="Question title"
              onChange={(e) =>
                updateQuestion(question.id, { title: e.target.value })
              }
              className="w-full resize-none border-0 bg-transparent px-2 py-1 text-lg font-semibold text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
              style={AUTO_SIZE}
            />
            {/* Required asterisk floats after the text, builder-style. */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold">
              <span className="opacity-0">{question.title}</span>
              {question.required && (
                <span className="text-f1-foreground-critical"> *</span>
              )}
            </div>
          </div>
        )}
        {!streaming && <QuestionActionsMenu question={question} />}
      </div>
      {(question.description !== undefined || !streaming) &&
        (streaming ? (
          title.done && (
            <p className="px-2 text-base text-f1-foreground-secondary">
              {description.shown}
            </p>
          )
        ) : (
          <textarea
            value={question.description ?? ""}
            rows={1}
            aria-label="Question description"
            placeholder="Add a description…"
            onChange={(e) =>
              updateQuestion(question.id, { description: e.target.value })
            }
            className="w-full resize-none border-0 bg-transparent px-2 text-base text-f1-foreground-secondary outline-none placeholder:text-f1-foreground-tertiary"
            style={AUTO_SIZE}
          />
        ))}
      {(!streaming || (title.done && description.done)) && (
        <div className={streaming ? "f0c-card-in px-2" : "px-2"}>
          <QuestionBody question={question} />
        </div>
      )}
    </div>
  )
}

/** "Adding a new question…" placeholder (Figma 1356:14761) — holds the
 *  incoming question's slot, shimmering, scrolled into view. */
function AddingQuestionCard() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }, [])
  return (
    <div
      ref={ref}
      className="f0c-card-in flex w-full items-center rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-4 py-3"
    >
      <span className="shine-text text-base font-medium text-f1-foreground-secondary">
        Adding a new question…
      </span>
    </div>
  )
}

export function PreviewWindow() {
  const { questions, addingAt } = useSurveyDraft()
  return (
    <div className="flex flex-col gap-3 p-3">
      {questions.map((question, index) => (
        <Fragment key={question.id}>
          {addingAt === index && <AddingQuestionCard />}
          <SurveyQuestionCard question={question} />
        </Fragment>
      ))}
      {addingAt !== null && addingAt >= questions.length && (
        <AddingQuestionCard />
      )}
    </div>
  )
}
