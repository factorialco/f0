import { F0Button, F0Icon } from "@factorialco/f0-react"
import { F0OneIcon } from "@factorialco/f0-react/dist/ai"
import {
  Check,
  CheckCircleLine,
  ChevronDown,
  ChevronRight,
  LayersFront,
  Lightbulb,
  ThumbsDown,
  ThumbsDownFilled,
  ThumbsUp,
  ThumbsUpFilled,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"

import { Sparkline } from "../Sparkline"
import { ChatSpinner } from "./chat-spinner/ChatSpinner"
import { type Conversation, type MessageContext } from "./conversationStore"

/** Assistant copy supports the `**bold**` production replies use. */
function renderInline(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-f1-foreground">
        {part}
      </strong>
    ) : (
      part
    )
  )
}

/**
 * The F0AiChat "Reasoning" block (f0 main: F0AiMessagesContainer's
 * Thinking + F0ActionItem): Lightbulb header, steps with a connector
 * line, the newest step shimmering while the turn is in progress. Locked
 * open while streaming; renders collapsed once the turn completes
 * (production auto-collapses on completion).
 */
function ReasoningBlock({
  steps,
  inProgress,
}: {
  steps: string[]
  inProgress: boolean
}) {
  const [open, setOpen] = useState(false)
  const expanded = inProgress || open
  return (
    <div className="flex w-full flex-col">
      <button
        type="button"
        disabled={inProgress}
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1 text-base text-f1-foreground-secondary ${
          inProgress
            ? ""
            : "cursor-pointer transition-colors duration-150 hover:text-f1-foreground"
        }`}
      >
        <span className="flex h-6 w-6 items-center justify-start">
          <F0Icon icon={Lightbulb} size="md" />
        </span>
        <span className="flex min-h-6 items-center">Reasoning</span>
        {/* Icon swap, not a rotate class — F0Icon drops className. */}
        {!inProgress && (
          <F0Icon icon={expanded ? ChevronDown : ChevronRight} size="md" />
        )}
      </button>
      {/* Grid-rows collapse instead of an unmount: toggling this used to
          add or remove ~130px in one frame and teleport everything below
          it — the canonical "prevent a jarring change" case. Same 200ms
          + curve as the nav panel's collapse. */}
      <div
        className="f0c-ease-out grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none"
        style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden" aria-hidden={!expanded}>
          <div className="flex flex-col gap-3 pb-1 pt-3">
            {steps.map((step, index) => {
              const executing = inProgress && index === steps.length - 1
              return (
                <div key={index} className="relative">
                  <div className="flex w-full items-start gap-1 text-f1-foreground-secondary">
                    <div className="flex h-5 w-6 shrink-0 items-center justify-start">
                      {executing ? (
                        <div className="flex h-5 w-5 items-center justify-center">
                          <ChatSpinner />
                        </div>
                      ) : (
                        <F0Icon
                          icon={CheckCircleLine}
                          size="md"
                          color="secondary"
                        />
                      )}
                    </div>
                    <p
                      className={`text-pretty leading-5 ${executing ? "shine-text" : ""}`}
                    >
                      {step}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden
                      className="absolute -bottom-3 left-2 top-5 ml-px w-px rounded bg-f1-border-secondary"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Copy + thumbs under the turn's reply (f0 main: TurnFeedback). */
function TurnFeedback({ content }: { content: string }) {
  const [copied, setCopied] = useState(false)
  const [reaction, setReaction] = useState<"like" | "dislike" | null>(null)
  const copy = () => {
    navigator.clipboard?.writeText(content.replace(/\*\*/g, ""))
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="-mt-3 flex items-center">
      <F0Button
        variant="ghost"
        size="sm"
        icon={copied ? Check : LayersFront}
        hideLabel
        label="Copy response"
        onClick={copy}
      />
      <F0Button
        variant="ghost"
        size="sm"
        icon={reaction === "like" ? ThumbsUpFilled : ThumbsUp}
        hideLabel
        label="Good response"
        onClick={() => setReaction((r) => (r === "like" ? null : "like"))}
      />
      <F0Button
        variant="ghost"
        size="sm"
        icon={reaction === "dislike" ? ThumbsDownFilled : ThumbsDown}
        hideLabel
        label="Bad response"
        onClick={() => setReaction((r) => (r === "dislike" ? null : "dislike"))}
      />
    </div>
  )
}

/**
 * Full-screen ONE conversation, matching the Figma design (node
 * 1342:168003): user turns as right-aligned tertiary bubbles
 * (rounded-[22px], inset 88px from the left), assistant turns as plain
 * markdown-style paragraphs, 24px between turns.
 *
 * Clarifying questions do NOT render inline — the ClarifyPanel replaces
 * the prompt bar (Figma 1342:168049); here the pending question shows
 * only as an "Asking question…" status line.
 */
/** The thing the user pointed One at, quoted into their turn. */
function ContextCard({ context }: { context: MessageContext }) {
  return (
    <div className="flex w-full max-w-[420px] flex-col gap-3 rounded-[22px] border border-solid border-f1-border-secondary bg-f1-background p-4">
      <div className="flex items-center gap-2">
        <F0OneIcon size="xs" />
        <span className="truncate text-base font-medium text-f1-foreground">
          {context.title}
        </span>
      </div>
      <div className="flex flex-wrap gap-6">
        {context.stats.map((stat) => (
          <div key={stat.label} className="flex min-w-0 flex-col">
            <span className="truncate text-base text-f1-foreground-secondary">
              {stat.label}
            </span>
            <span className="truncate text-xl font-semibold text-f1-foreground">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
      {context.series && (
        <div className="text-f1-icon-selected">
          <Sparkline series={context.series} className="h-10 w-full" />
        </div>
      )}
    </div>
  )
}

export function ConversationView({
  conversation,
  variant = "canvas",
}: {
  conversation: Conversation
  /**
   * `canvas` is the full-screen thread (Figma 1342:168003) in its centred
   * 712px column; `panel` is the 438px split panel beside a module screen
   * (Figma 2730:458633), which owns the full width it is given.
   */
  variant?: "canvas" | "panel"
}) {
  const endRef = useRef<HTMLDivElement>(null)
  const hasPendingQuestion = conversation.messages.some(
    (m) => m.question && !m.question.answer && !m.question.skipped
  )
  const idle = !conversation.thinking && !conversation.pendingReasoning
  // Feedback belongs to the turn's reply: the last assistant paragraph.
  // Hidden while One is still asking a clarifying question (Figma).
  const lastReplyId =
    idle && !hasPendingQuestion
      ? [...conversation.messages]
          .reverse()
          .find((m) => m.role === "assistant" && m.content)?.id
      : undefined

  // Keep the newest turn in view — the content scrolls under the pinned
  // prompt bar, so every new message/step pulls the thread to the bottom.
  const lastMessageId =
    conversation.messages[conversation.messages.length - 1]?.id
  const visibleSteps = conversation.pendingReasoning?.visible ?? 0
  // Don't yank the thread back if the user scrolled up to re-read: a
  // reasoning step lands every 1.2s and would fight them the whole turn.
  // Pinned state is sampled ON SCROLL — i.e. before the thread grows — so
  // a multi-paragraph reply arriving in one patch can never be mistaken
  // for the user scrolling away.
  const pinnedRef = useRef(true)
  useEffect(() => {
    const scroller = endRef.current?.closest<HTMLElement>(".home-canvas-scroll")
    if (!scroller) return
    const onScroll = () => {
      pinnedRef.current =
        scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight < 160
    }
    scroller.addEventListener("scroll", onScroll, { passive: true })
    return () => scroller.removeEventListener("scroll", onScroll)
  }, [])
  useEffect(() => {
    if (!pinnedRef.current) return
    endRef.current?.scrollIntoView({
      // An explicit "smooth" is NOT downgraded by prefers-reduced-motion —
      // only the CSS scroll-behavior property is, and only in some engines.
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "end",
    })
  }, [lastMessageId, visibleSteps, conversation.thinking])

  /**
   * Spacing is TURN-aware, not per message: the design groups an
   * assistant's paragraphs into one "Assistant Turn" (12px between them)
   * and separates turns by 24px (Figma 2730:458633, and the same
   * structure in the canvas frame). The store emits one message per
   * paragraph, so the grouping is derived from the neighbours here rather
   * than by reshaping the model — a container `gap` cannot express it.
   */
  const spacingFor = (index: number) => {
    if (index === 0) return ""
    const prev = conversation.messages[index - 1]
    const sameTurn =
      prev?.role === "assistant" &&
      conversation.messages[index].role === "assistant"
    return sameTurn ? "mt-3" : "mt-6"
  }

  const body = (message: (typeof conversation.messages)[number]) =>
    message.role === "user" ? (
      <div className="flex flex-col items-end gap-2 pl-[88px] pr-4">
        {/* Clicked, not typed: the card stands in for the question, so
            the answer below it has something to point at. */}
        {message.context ? (
          <ContextCard context={message.context} />
        ) : (
          <div className="rounded-[22px] border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3">
            <p className="text-base text-f1-foreground">{message.content}</p>
          </div>
        )}
      </div>
    ) : message.question ? (
      // Pending → status line; answered/skipped → nothing (the panel
      // held the question, and the answer echoes as a user turn).
      //
      // The SPLIT panel drops the line: the clarifying card sits directly
      // under the thread there, a few pixels away, so announcing it is
      // redundant — and the frame (2730:458633) draws no such line. In the
      // canvas the card is at the far bottom of a 712px column, which is
      // what the line is for.
      variant !== "panel" &&
      !message.question.answer &&
      !message.question.skipped ? (
        <div className="flex items-center gap-2 text-f1-foreground-secondary">
          <span className="size-2.5 shrink-0 rounded-full bg-f1-special-highlight" />
          <p className="text-base">Asking question…</p>
        </div>
      ) : null
    ) : (
      <div className="flex flex-col gap-4">
        {message.reasoning && (
          <ReasoningBlock steps={message.reasoning} inProgress={false} />
        )}
        <p className="text-base text-f1-foreground">
          {renderInline(message.content)}
        </p>
        {message.id === lastReplyId && (
          <TurnFeedback content={message.content} />
        )}
      </div>
    )

  return (
    <div
      className={
        variant === "panel"
          ? "flex w-full flex-1 flex-col px-1 pb-6"
          : "mx-auto flex w-[712px] max-w-full flex-1 flex-col px-3.5 pb-10 pt-2"
      }
    >
      {conversation.messages.map((message, index) => {
        const content = body(message)
        // An answered question renders nothing — wrapping it anyway would
        // leave its margin behind as a phantom gap.
        if (!content) return null
        return (
          <div key={message.id} className={spacingFor(index)}>
            {content}
          </div>
        )
      })}
      {conversation.pendingReasoning ? (
        // Reasoning streams in step by step (F0AiChat pattern).
        <div className={conversation.messages.length ? "mt-6" : ""}>
          <ReasoningBlock
            steps={conversation.pendingReasoning.steps.slice(
              0,
              conversation.pendingReasoning.visible
            )}
            inProgress
          />
        </div>
      ) : (
        conversation.thinking && (
          // ONE's thinking treatment as on f0 main: the globe-spin
          // ChatSpinner + shimmering label (F0ActionItem executing state).
          <div
            className={`flex w-full items-start gap-1 text-f1-foreground-secondary ${
              conversation.messages.length ? "mt-6" : ""
            }`}
          >
            <div className="-mt-[2px] grid h-6 w-6 shrink-0 items-center justify-items-center">
              <ChatSpinner />
            </div>
            <p className="shine-text text-pretty">Thinking…</p>
          </div>
        )
      )}
      <div ref={endRef} aria-hidden />
    </div>
  )
}
