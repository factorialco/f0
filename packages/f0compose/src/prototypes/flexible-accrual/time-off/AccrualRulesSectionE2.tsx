import { F0Button, F0Dialog, F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import {
  ArrowUp,
  Delete,
  Filter,
  Minus,
  Paperclip,
  Pencil,
  Plus,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import type { IconType } from "@factorialco/f0-react"
import { useRef, useState } from "react"

import { NumberInput, Segmented } from "./accrualControls"
import { type AllowanceType } from "./accrualRules"
import { type Allowance } from "./policiesData"

// ─────────────────────────────────────────────────────────────────────────────
// Exploration 2 — Accrual rules
//
// Reframed: a *base allowance* defines how much you start with; *rules* layer
// conditional accrual/deduction on top, authored in natural language via an AI
// chat drawer. Split into (A) structured base setup and (B) an AI-driven rule
// builder with a plain-language rules list.
// ─────────────────────────────────────────────────────────────────────────────

type RuleKind = "accrual" | "deduction" | "condition"
type Rule = { id: string; summary: string; kind: RuleKind }
type ChatMsg = { id: string; role: "user" | "assistant"; text: string }

const KIND_META: Record<
  RuleKind,
  { icon: IconType; label: string; boxBg: string; boxFg: string }
> = {
  accrual: {
    icon: Plus,
    label: "Accrual",
    boxBg: "bg-f1-background-positive",
    boxFg: "text-f1-foreground-positive",
  },
  deduction: {
    icon: Minus,
    label: "Deduction",
    boxBg: "bg-f1-background-critical",
    boxFg: "text-f1-foreground-critical",
  },
  condition: {
    icon: Filter,
    label: "Condition",
    boxBg: "bg-f1-background-info",
    boxFg: "text-f1-foreground-info",
  },
}

const CHIPS: { label: string; kind: RuleKind; starter: string }[] = [
  { label: "Add accrual rule", kind: "accrual", starter: "Give 1 extra day per year of tenure" },
  { label: "Add deduction rule", kind: "deduction", starter: "Deduct half a day for each unpaid leave" },
  { label: "Add a condition", kind: "condition", starter: "Only applies after 6 months of service" },
]

export function AccrualRulesSectionE2({ allowance }: { allowance: Allowance }) {
  const [baseAmount, setBaseAmount] = useState(allowance.amount || 25)
  const [unit, setUnit] = useState<AllowanceType>(
    allowance.unit === "working hours" ? "hours" : "days"
  )

  const [rules, setRules] = useState<Rule[]>([])
  const [chatOpen, setChatOpen] = useState(false)
  const [editing, setEditing] = useState<Rule | null>(null)
  const [chatSession, setChatSession] = useState(0)
  const idRef = useRef(0)

  const openNewChat = () => {
    setEditing(null)
    setChatSession((s) => s + 1)
    setChatOpen(true)
  }
  const openEditChat = (rule: Rule) => {
    setEditing(rule)
    setChatSession((s) => s + 1)
    setChatOpen(true)
  }
  const closeChat = () => {
    setChatOpen(false)
    setEditing(null)
  }
  const deleteRule = (id: string) => setRules((rs) => rs.filter((r) => r.id !== id))

  const submitRule = (summary: string, kind: RuleKind) => {
    if (editing) {
      const id = editing.id
      setRules((rs) => rs.map((r) => (r.id === id ? { ...r, summary, kind } : r)))
    } else {
      setRules((rs) => [...rs, { id: `rule-${idRef.current++}`, summary, kind }])
    }
  }

  return (
    <section className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <F0Heading content="Accrual rules" variant="heading" as="h2" />
        <F0Text
          content="Define how much is granted and how it's deducted, based on a base allowance"
          variant="description"
        />
      </div>

      {/* Part A — Base setup (structured) */}
      <div className="divide-y divide-f1-border-secondary rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
        <SetupRow label="Base allowance" helper="The starting balance before rules apply">
          <NumberInput value={baseAmount} onChange={setBaseAmount} unit={unit} />
        </SetupRow>
        <SetupRow label="Unit" helper="How the balance is measured">
          <Segmented<AllowanceType>
            value={unit}
            onChange={setUnit}
            options={[
              { value: "days", label: "Days" },
              { value: "hours", label: "Hours" },
            ]}
          />
        </SetupRow>
      </div>

      {/* Part B — Rule builder */}
      <div className="flex flex-col gap-3">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <F0Heading content="Rules" variant="heading" as="h3" />
            <F0Text
              content="Conditional accrual and deduction rules layered on the base allowance"
              variant="description"
            />
          </div>
          <F0Button
            label="Set rules with AI"
            variant="default"
            icon={Sparkles}
            onClick={openNewChat}
          />
        </div>

        {rules.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-f1-border-secondary bg-f1-background-secondary px-6 py-10 text-center">
            <F0Icon icon={Sparkles} size="md" />
            <span className="text-sm font-medium text-f1-foreground">
              No rules yet
            </span>
            <span className="text-sm text-f1-foreground-secondary">
              Open the chat to describe one.
            </span>
          </div>
        ) : (
          <div className="divide-y divide-f1-border-secondary rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
            {rules.map((rule) => (
              <RuleRow
                key={rule.id}
                rule={rule}
                onEdit={() => openEditChat(rule)}
                onDelete={() => deleteRule(rule.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* AI chat drawer */}
      <AiRuleChat
        key={chatSession}
        open={chatOpen}
        editing={editing}
        onClose={closeChat}
        onSubmit={submitRule}
      />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function SetupRow({
  label,
  helper,
  children,
}: {
  label: string
  helper: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-f1-foreground">{label}</span>
        <span className="text-xs text-f1-foreground-secondary">{helper}</span>
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  )
}

function RuleRow({
  rule,
  onEdit,
  onDelete,
}: {
  rule: Rule
  onEdit: () => void
  onDelete: () => void
}) {
  const meta = KIND_META[rule.kind]
  return (
    <div className="flex items-center gap-3 p-4">
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${meta.boxBg} ${meta.boxFg}`}
        aria-label={meta.label}
      >
        <F0Icon icon={meta.icon} size="xs" />
      </span>
      <span className="flex-1 text-sm text-f1-foreground">{rule.summary}</span>
      <button
        type="button"
        onClick={onEdit}
        aria-label="Edit rule"
        className="flex h-8 w-8 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-hover hover:text-f1-foreground"
      >
        <F0Icon icon={Pencil} size="sm" />
      </button>
      <button
        type="button"
        onClick={onDelete}
        aria-label="Delete rule"
        className="flex h-8 w-8 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-hover hover:text-f1-foreground-critical"
      >
        <F0Icon icon={Delete} size="sm" />
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// AI chat drawer — F0Dialog right-side panel
// ─────────────────────────────────────────────────────────────────────────────

function AiRuleChat({
  open,
  editing,
  onClose,
  onSubmit,
}: {
  open: boolean
  editing: Rule | null
  onClose: () => void
  onSubmit: (summary: string, kind: RuleKind) => void
}) {
  const [text, setText] = useState(editing?.summary ?? "")
  const [kind, setKind] = useState<RuleKind>(editing?.kind ?? "accrual")
  const [messages, setMessages] = useState<ChatMsg[]>([])
  const msgIdRef = useRef(0)

  const send = () => {
    const trimmed = text.trim()
    if (trimmed === "") return
    onSubmit(trimmed, kind)
    const userId = `m-${msgIdRef.current++}`
    const botId = `m-${msgIdRef.current++}`
    const verb = editing ? "Updated" : "Added"
    setMessages((m) => [
      ...m,
      { id: userId, role: "user", text: trimmed },
      {
        id: botId,
        role: "assistant",
        text: `${verb} ${KIND_META[kind].label.toLowerCase()} rule: "${trimmed}".`,
      },
    ])
    setText("")
  }

  return (
    <F0Dialog
      isOpen={open}
      onClose={onClose}
      position="right"
      width="md"
      disableContentPadding
      title={editing ? "Edit rule with AI" : "Set rules with AI"}
    >
      <div className="flex flex-col gap-4 px-5 py-4">
        <F0Text
          content="Describe the rule in plain language. Each rule you send is added to the list."
          variant="description"
        />

        {/* Conversation log */}
        {messages.length > 0 ? (
          <div className="flex max-h-[40vh] flex-col gap-2 overflow-auto">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user" ? "flex justify-end" : "flex justify-start"
                }
              >
                <span
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-f1-background-accent-bold text-f1-foreground-inverse"
                      : "bg-f1-background-secondary text-f1-foreground"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>
        ) : null}

        {/* Rule kind selector */}
        <div className="flex flex-wrap gap-2">
          {(Object.keys(KIND_META) as RuleKind[]).map((k) => {
            const active = k === kind
            return (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                className={`inline-flex items-center gap-1.5 rounded-full border border-solid px-3 py-1 text-xs font-medium transition-colors ${
                  active
                    ? "border-f1-border-selected-bold bg-f1-background-selected-secondary text-f1-foreground"
                    : "border-f1-border-secondary bg-f1-background text-f1-foreground-secondary hover:border-f1-border-hover"
                }`}
              >
                <F0Icon icon={KIND_META[k].icon} size="xs" />
                {KIND_META[k].label}
              </button>
            )
          })}
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-secondary px-3 py-2">
          <F0Icon icon={Sparkles} size="sm" />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") send()
            }}
            placeholder="Describe a rule… e.g. &quot;give 1 extra day per year of tenure&quot;"
            className="h-8 flex-1 bg-transparent text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none"
          />
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
            disabled={text.trim() === ""}
            onClick={send}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-f1-background-accent-bold text-f1-foreground-inverse disabled:opacity-40"
          >
            <F0Icon icon={ArrowUp} size="sm" />
          </button>
        </div>

        {/* Quick-action chips */}
        <div className="flex flex-wrap gap-2">
          {CHIPS.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={() => {
                setKind(c.kind)
                setText(c.starter)
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-3 py-1 text-xs font-medium text-f1-foreground transition-colors hover:border-f1-border-hover hover:bg-f1-background-hover"
            >
              <F0Icon icon={Sparkles} size="xs" />
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </F0Dialog>
  )
}
