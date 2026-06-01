import { F0Button, F0Icon } from "@factorialco/f0-react"
import {
  ArrowUp,
  ChevronDown,
  Delete,
  Paperclip,
  Plus,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import { useRef, useState } from "react"

// ─────────────────────────────────────────────────────────────────────────────
// One rule-creation modal — a simulated conversation with One.
//
// One asks what condition/exception the user wants, the user describes a rule in
// plain language, One reframes it and shows a simulation of how it would play
// out, then the user confirms (Save). Used for both Base entitlement and
// Accrual rules — only the prompt copy, chips and simulation differ.
// ─────────────────────────────────────────────────────────────────────────────

export type OneRuleKind = "base" | "accrual"

type ChipCfg = { label: string; text: string }
type KindCfg = {
  title: string
  question: string
  chips: ChipCfg[]
  simTitle: string
  sim: string[]
}

const KIND_CFG: Record<OneRuleKind, KindCfg> = {
  base: {
    title: "Base entitlement",
    question:
      "Describe the condition you want to add to the base entitlement. I'll work out the formula, who it applies to, and any exceptions.",
    chips: [
      { label: "Prorate by days worked", text: "Vacation days = (days worked per week / 5) × 23 annual days" },
      { label: "Part-timers prorated by hours", text: "Part-timers get 23 days prorated by their contracted hours" },
    ],
    simTitle: "Here's how that would play out:",
    sim: [
      "Works 5 days/week → 23 days",
      "Works 4 days/week → 18.4 days",
      "Works 3 days/week → 13.8 days",
    ],
  },
  accrual: {
    title: "Accrual rules",
    question:
      "Describe the new accrual condition you want to create. I'll work out when it applies and how it changes accrual.",
    chips: [
      { label: "No accrual during probation", text: "During probation, accrue 0 days" },
      {
        label: "Zero for partial months",
        text: "If full month not worked, accrue 0 for the month; if full month worked, accrue 2 days",
      },
    ],
    simTitle: "Here's how that would play out:",
    sim: [
      "Full month worked → +2 days",
      "Partial month worked → +0 days",
      "On leave the whole month → +0 days",
    ],
  },
}

type Message = {
  id: string
  role: "one" | "user"
  text: string
  sim?: string[]
  simTitle?: string
}

export function OneRuleModal({
  kind,
  initialText,
  onCancel,
  onSave,
  onDelete,
}: {
  kind: OneRuleKind
  initialText?: string
  onCancel: () => void
  onSave: (text: string) => void
  onDelete: () => void
}) {
  const cfg = KIND_CFG[kind]
  const idRef = useRef(0)
  const nextId = () => `m-${idRef.current++}`

  const [input, setInput] = useState("")
  const [proposed, setProposed] = useState<string>(initialText ?? "")
  const [messages, setMessages] = useState<Message[]>(() => {
    const base: Message[] = [{ id: "q", role: "one", text: cfg.question }]
    if (initialText) {
      base.push({ id: "u0", role: "user", text: initialText })
      base.push({
        id: "a0",
        role: "one",
        text: `Great — I'll frame this as a rule: "${initialText}".`,
        simTitle: cfg.simTitle,
        sim: cfg.sim,
      })
    }
    return base
  })

  const send = () => {
    const t = input.trim()
    if (t === "") return
    setMessages((m) => [
      ...m,
      { id: nextId(), role: "user", text: t },
      {
        id: nextId(),
        role: "one",
        text: `Great — I'll frame this as a rule: "${t}". Review the simulation below, then save.`,
        simTitle: cfg.simTitle,
        sim: cfg.sim,
      },
    ])
    setProposed(t)
    setInput("")
  }

  const canSave = proposed.trim() !== ""

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-f1-background-overlay p-6"
      onClick={onCancel}
    >
      <div
        className="flex h-[85vh] max-h-[760px] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-f1-background shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header pill */}
        <div className="p-4">
          <div className="flex items-center gap-2 rounded-xl border border-solid border-f1-border-secondary px-4 py-3">
            <span className="flex-1 text-lg font-semibold text-f1-foreground">
              {cfg.title}
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-f1-background-secondary text-f1-foreground-secondary">
              <F0Icon icon={ChevronDown} size="xs" />
            </span>
          </div>
        </div>

        {/* Conversation */}
        <div className="flex min-h-[320px] flex-1 flex-col gap-4 overflow-auto px-5 pb-2">
          {messages.map((m) =>
            m.role === "user" ? (
              <div key={m.id} className="flex justify-end">
                <span className="max-w-[85%] rounded-xl bg-f1-background-secondary px-3 py-2 text-sm text-f1-foreground">
                  {m.text}
                </span>
              </div>
            ) : (
              <div key={m.id} className="flex gap-2">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-f1-background-accent text-f1-foreground-accent">
                  <F0Icon icon={Sparkles} size="xs" />
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <span className="text-base text-f1-foreground">{m.text}</span>
                  {m.sim ? (
                    <div className="flex flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-secondary p-3">
                      {m.simTitle ? (
                        <span className="text-xs font-semibold uppercase tracking-wide text-f1-foreground-secondary">
                          {m.simTitle}
                        </span>
                      ) : null}
                      {m.sim.map((row) => (
                        <span key={row} className="text-sm text-f1-foreground">
                          {row}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            )
          )}
        </div>

        {/* AI input + chips */}
        <div className="flex flex-col gap-2 px-5 pb-3 pt-2">
          <div className="rounded-xl border border-solid border-f1-border bg-f1-background p-2 shadow-sm">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send()
              }}
              placeholder="Tell One what to change…"
              className="h-9 w-full bg-transparent px-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none"
            />
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                aria-label="Attach a file"
                className="flex h-8 w-8 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-hover"
              >
                <F0Icon icon={Paperclip} size="sm" />
              </button>
              <button
                type="button"
                aria-label="Send"
                disabled={input.trim() === ""}
                onClick={send}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-f1-foreground-secondary hover:bg-f1-background-hover disabled:opacity-40"
              >
                <F0Icon icon={ArrowUp} size="sm" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {cfg.chips.map((c) => (
              <button
                key={c.label}
                type="button"
                onClick={() => setInput(c.text)}
                className="inline-flex items-center gap-1.5 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-3 py-1.5 text-sm font-medium text-f1-foreground transition-colors hover:border-f1-border-hover hover:bg-f1-background-hover"
              >
                <F0Icon icon={Plus} size="xs" />
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-5 py-3">
          <F0Button label="Delete rule" variant="critical" icon={Delete} onClick={onDelete} />
          <div className="flex items-center gap-2">
            <F0Button label="Cancel" variant="outline" onClick={onCancel} />
            <F0Button
              label="Save"
              variant="default"
              onClick={() => onSave(proposed.trim())}
              disabled={!canSave}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
