/**
 * Scripted, mock AI chat panel — docked on the right like the shell's
 * "Ask / Create with One" assistant. NOT connected to any model: it renders a
 * fixed message list driven by the parent's state machine and replays the same
 * script every time.
 *
 * After the first benchmark, the input becomes active: clicking it auto-fills a
 * scripted follow-up (a weird-named role). The assistant proposes a Mercer
 * match, the user corrects it, and a second report card appears.
 */
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { F0Button, F0Card, F0Icon, F0Text } from "@factorialco/f0-react"
import {
  ArrowRight,
  BarGraph,
  Check,
  ChevronDown,
  ChevronRight,
  Cross,
  Ai,
} from "@factorialco/f0-react/icons/app"

import { reportCardFor } from "../shared/analysisData"

export type ChatMessage = {
  role: "user" | "assistant"
  type: "text" | "report-card" | "thinking"
  content: string
  /** report-card: which role's report it opens. */
  roleId?: string
  /** thinking: the reasoning steps + duration to show when collapsed. */
  thoughts?: string[]
  thinkingSeconds?: number
}

type Props = {
  messages: ChatMessage[]
  thinking: boolean
  liveThoughts: string[]
  revealedThoughts: number
  inputEnabled: boolean
  canFill: boolean
  draft: string
  onFillDraft: () => void
  onSend: () => void
  onOpenReport: (roleId: string) => void
  onClose: () => void
}

// ── Gradual appearance ───────────────────────────────────────────────

function Appear({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShown(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return (
    <div
      className={[
        "transition-all duration-300 ease-out",
        shown ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
      ].join(" ")}
    >
      {children}
    </div>
  )
}

// ── Message text — F0Text with markdown (bold + bullet lists) ────────

function balanceMarkers(s: string): string {
  let out = s
  if (out.endsWith("*") && !out.endsWith("**")) out = out.slice(0, -1)
  if ((out.split("**").length - 1) % 2 === 1) out += "**"
  return out
}

function Paragraphs({ text }: { text: string }) {
  const blocks = text.split("\n\n").filter((p) => p.length > 0)
  return (
    <div className="flex flex-col gap-2">
      {blocks.map((block, i) => {
        const lines = block.split("\n").filter((l) => l.length > 0)
        const isList =
          lines.length > 0 && lines.every((l) => l.trimStart().startsWith("- "))
        if (isList) {
          return (
            <div key={i} className="flex flex-col gap-1">
              {lines.map((l, j) => (
                <div key={j} className="flex items-start gap-2">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-f1-foreground-secondary"
                    aria-hidden
                  />
                  <F0Text
                    content={balanceMarkers(l.replace(/^\s*-\s+/, ""))}
                    variant="body"
                  />
                </div>
              ))}
            </div>
          )
        }
        return <F0Text key={i} content={balanceMarkers(block)} variant="body" />
      })}
    </div>
  )
}

function RichText({ text }: { text: string }) {
  return <Paragraphs text={text} />
}

function Typewriter({ text }: { text: string }) {
  const total = text.length
  const [n, setN] = useState(0)
  const step = Math.max(1, Math.ceil(total / 75))
  useEffect(() => {
    if (n >= total) return
    const id = setTimeout(() => setN((v) => Math.min(total, v + step)), 24)
    return () => clearTimeout(id)
  }, [n, total, step])
  return <Paragraphs text={text.slice(0, n)} />
}

// ── Reasoning trace ──────────────────────────────────────────────────

function StepRow({ text, pending }: { text: string; pending?: boolean }) {
  return (
    <div className="flex items-start gap-2">
      {pending ? (
        <span
          className="mt-1.5 h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-f1-foreground-secondary"
          aria-hidden
        />
      ) : (
        <span className="mt-0.5 shrink-0 text-f1-foreground-secondary">
          <F0Icon icon={Check} size="xs" />
        </span>
      )}
      <F0Text content={text} variant="small" />
    </div>
  )
}

function LiveTrace({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col gap-2 px-1">
      <div className="flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center text-f1-foreground-secondary">
          <F0Icon icon={Ai} size="sm" />
        </span>
        <F0Text content="Thinking…" variant="label" />
      </div>
      <div className="flex flex-col gap-1.5 border-l border-f1-border-secondary pl-3">
        {steps.map((s, i) => (
          <Appear key={i}>
            <StepRow text={s} pending={i === steps.length - 1} />
          </Appear>
        ))}
      </div>
    </div>
  )
}

function CollapsedTrace({
  thoughts,
  seconds,
}: {
  thoughts: string[]
  seconds: number
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col gap-2 px-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-2 text-left"
        aria-expanded={open}
      >
        <span className="flex h-5 w-5 items-center justify-center text-f1-foreground-secondary">
          <F0Icon icon={Ai} size="sm" />
        </span>
        <span className="flex-1">
          <F0Text content={`Thought for ${seconds}s`} variant="label" />
        </span>
        <span className="text-f1-foreground-secondary">
          <F0Icon icon={open ? ChevronDown : ChevronRight} size="sm" />
        </span>
      </button>
      {open && (
        <div className="flex flex-col gap-1.5 border-l border-f1-border-secondary pl-3">
          {thoughts.map((s, i) => (
            <StepRow key={i} text={s} />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Bubbles ──────────────────────────────────────────────────────────

function Bubble({
  isUser,
  children,
}: {
  isUser: boolean
  children: React.ReactNode
}) {
  return (
    <div className={isUser ? "flex justify-end" : "flex justify-start"}>
      <div
        style={{ maxWidth: "80%" }}
        className={[
          "min-w-0 break-words rounded-2xl px-4 py-2.5",
          isUser
            ? "rounded-br-sm bg-f1-background-selected"
            : "rounded-bl-sm bg-f1-background-secondary",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  )
}

// Follow-up input — a read-only textarea that wraps and auto-grows so the
// whole autofilled message is visible.
function FollowUpInput({
  draft,
  inputEnabled,
  canFill,
  onFillDraft,
  onSend,
}: {
  draft: string
  inputEnabled: boolean
  canFill: boolean
  onFillDraft: () => void
  onSend: () => void
}) {
  const ref = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${el.scrollHeight}px`
  }, [draft])
  return (
    <div className="border-t border-f1-border-secondary p-3">
      <div className="flex items-end gap-2 rounded-lg border border-f1-border bg-f1-background-secondary px-3 py-2">
        <textarea
          ref={ref}
          rows={1}
          value={draft}
          readOnly
          disabled={!inputEnabled}
          onClick={inputEnabled && canFill ? onFillDraft : undefined}
          placeholder={
            inputEnabled
              ? "Click to ask a follow-up…"
              : "Ask anything… (demo — chat is scripted)"
          }
          style={{ maxHeight: 140 }}
          className="w-full cursor-pointer resize-none overflow-y-auto bg-transparent text-f1-foreground outline-none placeholder:text-f1-foreground-secondary disabled:cursor-not-allowed"
        />
        <F0Button
          label="Send"
          hideLabel
          icon={ArrowRight}
          disabled={!draft}
          onClick={onSend}
        />
      </div>
    </div>
  )
}

export function AnalysisChatPanel({
  messages,
  thinking,
  liveThoughts,
  revealedThoughts,
  inputEnabled,
  canFill,
  draft,
  onFillDraft,
  onSend,
  onOpenReport,
  onClose,
}: Props) {
  // Portal to <body> so the panel escapes the shell's stacking context and can
  // sit above the floating dev control (z-index 1000) while staying below the
  // report dialog (z-index 9998).
  return createPortal(
    <div
      style={{ zIndex: 1001 }}
      className="fixed right-0 top-0 flex h-full w-[400px] min-w-0 flex-col border-l border-f1-border bg-f1-background shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-f1-border-secondary p-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-f1-background-accent">
          <F0Icon icon={Ai} size="sm" />
        </div>
        <div className="flex flex-1 flex-col">
          <F0Text content="Ask or create with One" variant="label" />
          <F0Text content="Mercer benchmark assistant" variant="small" />
        </div>
        <F0Button
          label="Close"
          variant="neutral"
          icon={Cross}
          hideLabel
          onClick={onClose}
        />
      </div>

      {/* Messages */}
      <div className="flex min-w-0 flex-1 flex-col gap-3 overflow-y-auto p-4">
        {messages.map((message, i) => {
          if (message.type === "thinking")
            return (
              <Appear key={i}>
                <CollapsedTrace
                  thoughts={message.thoughts ?? []}
                  seconds={message.thinkingSeconds ?? 0}
                />
              </Appear>
            )
          if (message.type === "report-card") {
            const roleId = message.roleId ?? "swe"
            const card = reportCardFor(roleId)
            return (
              <Appear key={i} delay={400}>
                <div className="transition-shadow rounded-xl hover:shadow-md cursor-pointer">
                  <F0Card
                    title={card.title}
                    description={card.subtitle}
                    onClick={() => onOpenReport(roleId)}
                    metadata={[
                      {
                        icon: BarGraph,
                        property: {
                          type: "text",
                          label: "Report",
                          value: "Tap to open the full report",
                        },
                      },
                    ]}
                  />
                </div>
              </Appear>
            )
          }
          const isUser = message.role === "user"
          return (
            <Appear key={i}>
              <Bubble isUser={isUser}>
                {isUser ? (
                  <RichText text={message.content} />
                ) : (
                  <Typewriter text={message.content} />
                )}
              </Bubble>
            </Appear>
          )
        })}
        {thinking && (
          <Appear>
            <LiveTrace steps={liveThoughts.slice(0, revealedThoughts)} />
          </Appear>
        )}
        {messages.length === 0 && !thinking && (
          <div className="flex flex-col gap-2 rounded-xl border border-f1-border-secondary bg-f1-background-secondary p-4">
            <F0Text content="Mercer salary benchmark" variant="label" />
            <F0Text
              content="Open a role and press Analyze in the Salaries section to benchmark all its levels against Mercer market data."
              variant="small"
            />
          </div>
        )}
      </div>

      {/* Follow-up input — active after the first report; click to autofill */}
      <FollowUpInput
        draft={draft}
        inputEnabled={inputEnabled}
        canFill={canFill}
        onFillDraft={onFillDraft}
        onSend={onSend}
      />
    </div>,
    document.body
  )
}
