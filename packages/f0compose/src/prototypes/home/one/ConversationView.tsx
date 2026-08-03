import { F0Button, F0Icon } from "@factorialco/f0-react"
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

import { ChatSpinner } from "./chat-spinner/ChatSpinner"

import { type Conversation } from "./conversationStore"

/** Assistant copy supports the `**bold**` production replies use. */
function renderInline(text: string) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, index) =>
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
      {expanded && (
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
      )}
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
export function ConversationView({
  conversation,
}: {
  conversation: Conversation
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
  const lastMessageId = conversation.messages[conversation.messages.length - 1]?.id
  const visibleSteps = conversation.pendingReasoning?.visible ?? 0
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [lastMessageId, visibleSteps, conversation.thinking])

  return (
    <div className="mx-auto flex w-[712px] max-w-full flex-1 flex-col gap-6 px-3.5 pb-10 pt-2">
      {conversation.messages.map((message) =>
        message.role === "user" ? (
          <div key={message.id} className="flex flex-col items-end pl-[88px] pr-4">
            <div className="rounded-[22px] border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3">
              <p className="text-base text-f1-foreground">{message.content}</p>
            </div>
          </div>
        ) : message.question ? (
          // Pending → status line; answered/skipped → nothing (the panel
          // held the question, and the answer echoes as a user turn).
          !message.question.answer && !message.question.skipped ? (
            <div
              key={message.id}
              className="flex items-center gap-2 text-f1-foreground-secondary"
            >
              <span className="size-2.5 shrink-0 rounded-full bg-f1-special-highlight" />
              <p className="text-base">Asking question…</p>
            </div>
          ) : null
        ) : (
          <div key={message.id} className="flex flex-col gap-4">
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
      )}
      {conversation.pendingReasoning ? (
        // Reasoning streams in step by step (F0AiChat pattern).
        <ReasoningBlock
          steps={conversation.pendingReasoning.steps.slice(
            0,
            conversation.pendingReasoning.visible
          )}
          inProgress
        />
      ) : (
        conversation.thinking && (
          // ONE's thinking treatment as on f0 main: the globe-spin
          // ChatSpinner + shimmering label (F0ActionItem executing state).
          <div className="flex w-full items-start gap-1 text-f1-foreground-secondary">
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
