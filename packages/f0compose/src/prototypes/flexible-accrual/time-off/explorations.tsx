import { F0Button, F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { Sparkles } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

export type ExplorationId =
  | "open-chat"
  | "guided-wizard"
  | "templates"
  | "hybrid"
  | "one-led"

export const EXPLORATIONS: { id: ExplorationId; label: string }[] = [
  { id: "open-chat", label: "E1 · Open Chat" },
  { id: "guided-wizard", label: "E2 · Guided Wizard" },
  { id: "templates", label: "E3 · Templates" },
  { id: "hybrid", label: "E4 · Hybrid" },
  { id: "one-led", label: "E5 · One-led" },
]

export function ExplorationSwitcher({
  exploration,
  onChange,
}: {
  exploration: ExplorationId
  onChange: (id: ExplorationId) => void
}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center">
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-lg">
        <span className="px-3 text-xs font-semibold uppercase tracking-wide text-f1-foreground-secondary">
          Explorations
        </span>
        {EXPLORATIONS.map((e) => {
          const active = e.id === exploration
          return (
            <button
              key={e.id}
              type="button"
              onClick={() => onChange(e.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "bg-f1-background-info-secondary text-f1-foreground-info"
                  : "text-f1-foreground hover:bg-f1-background-hover"
              }`}
            >
              {e.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Co-create side panel (one panel, four UX patterns)
// ─────────────────────────────────────────────────────────────────────────────

type Message = { from: "one" | "you"; text: string }

const TEMPLATES = [
  {
    id: "portugal-hire-date",
    title: "Portugal · Join-date rule",
    rule: "If hired ≤ day 15 of the month accrue full month, otherwise 0.",
  },
  {
    id: "tenure-step",
    title: "Tenure step",
    rule: "Every 5 years, +1 day for ICs and +2 days for Directors.",
  },
  {
    id: "rolling-12",
    title: "UK Sick · Rolling 12-month entitlement",
    rule: "Allow up to 5 sick days in any rolling 12-month window.",
  },
  {
    id: "mid-cycle-relocation",
    title: "Mid-cycle relocation",
    rule: "Pro-rate accrual when location changes mid-cycle.",
  },
]

const WIZARD_QUESTIONS = [
  "Who does this rule apply to? (e.g. all employees, ICs, a country)",
  "How much does it grant or deduct? (days, hours, or a formula)",
  "When does it take effect? (cycle start, anniversary, hire date)",
  "What event triggers it? (always on, joiner, location change …)",
  "Should it apply across other policies as well?",
]

export function CoCreatePanel({
  fieldLabel,
  exploration,
  onClose,
  onApply,
}: {
  fieldLabel: string
  exploration: ExplorationId
  onClose: () => void
  onApply: (value: string) => void
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages(exploration, fieldLabel))
  const [draft, setDraft] = useState("")
  const [wizardStep, setWizardStep] = useState(0)

  const send = (text: string) => {
    if (!text.trim()) return
    setMessages((m) => [
      ...m,
      { from: "you", text },
      {
        from: "one",
        text: oneReply(exploration, text, wizardStep),
      },
    ])
    setDraft("")
    if (exploration === "guided-wizard")
      setWizardStep((s) => Math.min(s + 1, WIZARD_QUESTIONS.length - 1))
  }

  const applyTemplate = (rule: string) => {
    setMessages((m) => [
      ...m,
      { from: "you", text: `Use template: "${rule}"` },
      {
        from: "one",
        text:
          exploration === "hybrid"
            ? `Loaded template. Anything you'd like to tweak before applying?`
            : `Template applied. I'll configure the field accordingly.`,
      },
    ])
  }

  return (
    <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-solid border-f1-border-secondary bg-f1-background shadow-xl">
      <div className="flex items-start justify-between border-b border-solid border-f1-border-secondary p-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <F0Icon icon={Sparkles} size="sm" />
            <span className="text-xs font-semibold uppercase tracking-wide text-f1-foreground-info">
              {labelFor(exploration)}
            </span>
          </div>
          <F0Heading
            content={`Co-create: ${fieldLabel}`}
            variant="heading"
            as="h3"
          />
          <F0Text
            content="One will draft the rule. Nothing is saved until you Apply."
            variant="description"
          />
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md p-1 text-f1-foreground-secondary hover:bg-f1-background-hover hover:text-f1-foreground"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {(exploration === "templates" || exploration === "hybrid") && (
        <div className="flex flex-col gap-2 border-b border-solid border-f1-border-secondary p-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-f1-foreground-secondary">
            Templates
          </span>
          <div className="flex flex-col gap-2">
            {TEMPLATES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => applyTemplate(t.rule)}
                className="rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-3 text-left text-sm transition-colors hover:border-f1-border-hover hover:bg-f1-background-hover"
              >
                <div className="font-medium text-f1-foreground">{t.title}</div>
                <div className="text-xs text-f1-foreground-secondary">
                  {t.rule}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-3">
          {messages.map((m, i) => (
            <Bubble key={i} message={m} />
          ))}
        </div>
      </div>

      <div className="border-t border-solid border-f1-border-secondary p-4">
        {exploration === "guided-wizard" && wizardStep < WIZARD_QUESTIONS.length ? (
          <div className="mb-2 rounded-md bg-f1-background-info-secondary/40 p-2 text-xs text-f1-foreground-info">
            Question {wizardStep + 1} / {WIZARD_QUESTIONS.length}:{" "}
            {WIZARD_QUESTIONS[wizardStep]}
          </div>
        ) : null}
        <div className="flex items-end gap-2">
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                send(draft)
              }
            }}
            rows={2}
            placeholder={placeholderFor(exploration)}
            className="flex-1 resize-none rounded-md border border-solid border-f1-border bg-f1-background px-3 py-2 text-sm focus:border-f1-border-hover focus:outline-none"
          />
          <F0Button label="Send" onClick={() => send(draft)} />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-f1-foreground-secondary hover:underline"
          >
            Cancel
          </button>
          <F0Button
            label="Apply"
            onClick={() =>
              onApply(messages.filter((m) => m.from === "you").pop()?.text ??
                "Rule drafted by One")
            }
          />
        </div>
      </div>
    </div>
  )
}

function Bubble({ message }: { message: Message }) {
  const mine = message.from === "you"
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
          mine
            ? "bg-f1-background-info-secondary text-f1-foreground"
            : "bg-f1-background-secondary text-f1-foreground"
        }`}
      >
        {!mine && (
          <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-f1-foreground-info">
            <F0Icon icon={Sparkles} size="xs" /> One
          </div>
        )}
        <div>{message.text}</div>
      </div>
    </div>
  )
}

function initialMessages(
  exploration: ExplorationId,
  fieldLabel: string
): Message[] {
  switch (exploration) {
    case "open-chat":
      return [
        {
          from: "one",
          text: `Describe the rule you want for "${fieldLabel}" in plain English. I'll compile it into a configuration.`,
        },
      ]
    case "guided-wizard":
      return [
        {
          from: "one",
          text: `Let's set up "${fieldLabel}". I'll ask a few questions — feel free to type free-form at any point.`,
        },
        { from: "one", text: WIZARD_QUESTIONS[0] },
      ]
    case "templates":
      return [
        {
          from: "one",
          text: `Pick a template that's close to what you want for "${fieldLabel}". I'll fill the fields, you tweak.`,
        },
      ]
    case "hybrid":
      return [
        {
          from: "one",
          text: `Start from a template, then we'll refine it together for "${fieldLabel}".`,
        },
      ]
    case "one-led":
      return [
        {
          from: "one",
          text: `Let's set up "${fieldLabel}". Describe the rule in your own words.`,
        },
      ]
  }
}

function oneReply(
  exploration: ExplorationId,
  userText: string,
  wizardStep: number
): string {
  if (exploration === "guided-wizard") {
    const next = WIZARD_QUESTIONS[wizardStep + 1]
    if (!next)
      return "Got everything I need. I'll generate a rule preview — review on the right and Apply when ready."
    return `Got it. ${next}`
  }
  if (exploration === "open-chat")
    return `I parsed: "${userText}". I'll set the field and show a preview. Anything to adjust?`
  if (exploration === "templates")
    return `Adjusted from the template. Apply to save, or tell me what to change.`
  return `Refined the template with: "${userText}". Apply when ready.`
}

function labelFor(exploration: ExplorationId): string {
  return EXPLORATIONS.find((e) => e.id === exploration)?.label ?? ""
}

function placeholderFor(exploration: ExplorationId): string {
  switch (exploration) {
    case "open-chat":
      return "e.g. If hired after the 15th of the month, accrue nothing that month."
    case "guided-wizard":
      return "Type your answer…"
    case "templates":
      return "Tweak the template (optional)…"
    case "hybrid":
      return "Refine the template with One…"
    case "one-led":
      return "Describe the rule — One will configure it."
  }
}
