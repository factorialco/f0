import { F0Button, F0Icon, F0TagStatus } from "@factorialco/f0-react"
import { F0OneIcon } from "@factorialco/f0-react/dist/ai"
import {
  Check,
  CheckCircleLine,
  ChevronDown,
  ChevronRight,
  LayersFront,
  Lightbulb,
  Pin,
  ThumbsDown,
  ThumbsDownFilled,
  ThumbsUp,
  ThumbsUpFilled,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"

import {
  runStamp,
  type RunEntry,
  type RunOutcome,
} from "../agents/agentThreads"
import { Sparkline } from "../Sparkline"
import { ChatSpinner } from "./chat-spinner/ChatSpinner"
import {
  actOnInsight,
  type Conversation,
  type MessageContext,
  resolveRun,
  type RunResolution,
} from "./conversationStore"
import { HomeQuestion, HomeArtifactView } from "../setup/HomeArtifacts"
import { InsightCard } from "./InsightCard"

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
 * The disclosure chrome the Reasoning block established, extracted so the
 * run history can BE the same affordance rather than merely resemble one
 * (per Oskar: "el mismo estilo que el Reasoning sin el icono de la
 * izquierda").
 *
 * `icon` is optional — that is the whole difference between the two
 * headers. The chevron TRAILS the label in both, which is the detail worth
 * sharing: it is the opposite of where the old history header put it, and
 * two hand-rolled copies would have drifted apart within a week.
 */
type DisclosureIcon = React.ComponentProps<typeof F0Icon>["icon"]

function DisclosureButton({
  label,
  icon,
  expanded,
  locked = false,
  onClick,
}: {
  label: string
  icon?: DisclosureIcon
  expanded: boolean
  locked?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      disabled={locked}
      onClick={onClick}
      className={`flex items-center gap-1 text-base text-f1-foreground-secondary ${
        locked
          ? ""
          : "cursor-pointer transition-colors duration-150 hover:text-f1-foreground"
      }`}
    >
      {icon && (
        <span className="flex h-6 w-6 items-center justify-start">
          <F0Icon icon={icon} size="md" />
        </span>
      )}
      <span className="flex min-h-6 items-center">{label}</span>
      {/* Icon swap, not a rotate class — F0Icon drops className. */}
      {!locked && (
        <F0Icon icon={expanded ? ChevronDown : ChevronRight} size="md" />
      )}
    </button>
  )
}

/**
 * Grid-rows collapse instead of an unmount: toggling this used to add or
 * remove ~130px in one frame and teleport everything below it — the
 * canonical "prevent a jarring change" case. Same 200ms + curve as the nav
 * panel's collapse.
 */
function DisclosurePanel({
  expanded,
  children,
}: {
  expanded: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className="f0c-ease-out grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none"
      style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden" aria-hidden={!expanded}>
        {children}
      </div>
    </div>
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
      <DisclosureButton
        label="Reasoning"
        icon={Lightbulb}
        expanded={expanded}
        locked={inProgress}
        onClick={() => setOpen((o) => !o)}
      />
      <DisclosurePanel expanded={expanded}>
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
      </DisclosurePanel>
    </div>
  )
}

/** Copy + thumbs under the turn's reply (f0 main: TurnFeedback). */
function TurnFeedback({
  content,
  offset = true,
}: {
  content: string
  /** `-mt-3` closes the gap under a thread paragraph. Inside a card there
   *  is no gap to close, so it aligns the glyphs to the text edge instead. */
  offset?: boolean
}) {
  const [copied, setCopied] = useState(false)
  const [reaction, setReaction] = useState<"like" | "dislike" | null>(null)
  const copy = () => {
    navigator.clipboard?.writeText(content.replace(/\*\*/g, ""))
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className={`flex items-center ${offset ? "-mt-3" : "-ml-2"}`}>
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
        onClick={() =>
          setReaction((r) => (r === "dislike" ? null : "dislike"))
        }
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

/**
 * An agent's working plan: numbered steps with explicit thresholds.
 *
 * The number is f0's Counter (Figma 2747:468489) — a 20px pill with no
 * fill, 12px/16px medium in the default foreground. It was a filled grey
 * circle with secondary text, which read as a disabled chip; the outlined
 * counter reads as an index.
 *
 * The ring is `f1-border`, NOT the node's `border-secondary`: at 6% alpha
 * that ring was invisible at 20px against the conversation ground (Oskar).
 * A deliberate deviation from the node — small shapes need more contrast
 * than the token intended for long edges.
 */
function PlanSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="flex list-none flex-col gap-2 p-0">
      {steps.map((step, index) => (
        <li key={index} className="flex gap-2">
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-solid border-f1-border text-sm font-medium text-f1-foreground">
            {index + 1}
          </span>
          <span className="min-w-0 flex-1 text-base text-f1-foreground">
            {step}
          </span>
        </li>
      ))}
    </ol>
  )
}

/** Runs that stopped say so IN WORDS. A `done` gets no tag: they are the
 *  majority, and labelling every one would bury the ones that matter. */
const RUN_STATUS: Record<
  RunOutcome,
  { text: string; variant: "warning" | "critical" } | null
> = {
  done: null,
  needs_input: { text: "Needs you", variant: "warning" },
  blocked: { text: "Blocked", variant: "critical" },
  failed: { text: "Failed", variant: "critical" },
}

/**
 * One action on a blocked run: BLACK for the recommended one, f0's
 * `outline` for everything else.
 *
 * Hand-rolled because f0 has no dark-solid variant — its twelve are
 * default/outline/neutral/critical/ghost/promote/outlinePromote/link/
 * unstyled/mention/selected/ai, and `default` is brand red — and
 * `F0Button` exposes no `className` to retint one. Geometry MIRRORS f0's
 * `md`: `h-8 px-3 rounded text-base font-medium` plus the filled
 * variant's shadow, because it stands beside real `outline` F0Buttons and
 * has to line up with them exactly.
 *
 * `bg-f1-foreground` / `text-f1-background`, NOT
 * `background-inverse` / `foreground-inverse`. The inverse pair does not
 * flip together — `--white-100` is white in BOTH themes while
 * `--neutral-*` flips — so the obvious-looking pair lands white-on-white
 * in dark. These two are the canonical inverting pair, verified in both
 * themes: #0d1625 on white in light, white on #0d1625 in dark.
 *
 * This has been red and black more than once (Oskar). Red is f0's own
 * "primary", and the argument for it was consistency with the design
 * system; the argument against is that it is the loudest thing on a
 * screen whose whole point is that most runs need nothing from you.
 * Black wins on that.
 */
function RunAction({
  action,
  conversationId,
  runAt,
}: {
  action: NonNullable<RunEntry["actions"]>[number]
  conversationId: string
  runAt: string
}) {
  const resolve = () => resolveRun(conversationId, runAt, action)
  if (!action.recommended) {
    return (
      <F0Button
        variant="outline"
        size="md"
        label={action.label}
        onClick={resolve}
      />
    )
  }
  return (
    <button
      type="button"
      onClick={resolve}
      className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center rounded border-none bg-f1-foreground px-3 text-base font-medium text-f1-background shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] transition-opacity duration-150 hover:opacity-90 active:translate-y-px"
    >
      {action.label}
    </button>
  )
}

/**
 * The card's conclusion, in place of its buttons — the agent's answer to
 * the choice you just made, on its own quieter ground so it reads as the
 * end of that thread rather than another paragraph of it.
 *
 * A pinned line appears when the decision taught the agent a durable rule.
 * That is the point of showing it: without it you would reasonably assume
 * you have to make the same call again next week.
 */
function RunConclusion({ resolution }: { resolution: RunResolution }) {
  return (
    <div className="mt-1 flex flex-col items-start gap-2 rounded-xs bg-f1-background-secondary p-2">
      {resolution.reply ? (
        <>
          <span className="text-base text-f1-foreground">
            {resolution.reply}
          </span>
          {resolution.learned && (
            <span className="flex items-start gap-1.5 text-sm text-f1-foreground-secondary">
              <span className="flex h-4 shrink-0 items-center">
                <F0Icon icon={Pin} size="xs" color="secondary" />
              </span>
              {resolution.learned}
            </span>
          )}
          <TurnFeedback content={resolution.reply} offset={false} />
        </>
      ) : (
        <span className="flex items-center gap-2 text-base text-f1-foreground-secondary">
          <span className="flex size-5 items-center justify-center">
            <ChatSpinner />
          </span>
          <span className="shine-text">{resolution.label}…</span>
        </span>
      )}
    </div>
  )
}

/**
 * A run that is WAITING ON YOU, as a card (per Oskar's review, 2026-09-02:
 * the log gave a finished chore and a live blocker the same visual
 * weight, so the eye had to do the triage).
 *
 * Three things follow from that review:
 * - it is a CARD, so it is legible as one object before you read a word.
 *   The ground is WHITE with a plain secondary border, and the only colour
 *   on it is the status tag (per Oskar, second pass): a tinted ground plus
 *   a coloured edge plus a coloured tag said "urgent" three times, and red
 *   is the system's word for destructive, not for "read this first";
 * - the agent's own READ comes before the buttons (`analysis`) — it holds
 *   the context, so handing the decision back untouched wastes it;
 * - exactly ONE action is primary. Two equal buttons make you do the
 *   agent's thinking for it.
 */
function BlockedRun({
  run,
  conversationId,
  resolution,
}: {
  run: RunEntry
  conversationId: string
  resolution?: RunResolution
}) {
  const status = RUN_STATUS[run.outcome]
  /**
   * Reading order runs left to right, so the thing you are most likely to
   * press sits at the END of it (per Oskar): the recommended action is
   * rightmost, the one real alternative sits immediately to its left as
   * its pair, and anything further — an "Ask Diego why", which is a
   * deflection rather than an answer — is pushed to the far left, away
   * from the pair that actually resolves the run.
   */
  const primary = run.actions?.find((a) => a.recommended)
  const others = run.actions?.filter((a) => !a.recommended) ?? []
  const alternative = others[0]
  const asides = others.slice(1)
  return (
    <li className="flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-3">
      {/* Title + tag ONLY. Title, tag AND "date · people" on one line ran
          out of room and wrapped at narrow widths; the meta moved to the
          foot of the card, which is where the history cards already put
          it (Oskar, third pass). */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="text-base font-medium text-f1-foreground">
          {run.summary}
        </span>
        {/* Once you have chosen, the run is no longer waiting on you, so a
            lingering "Needs you" is a lie you have to re-read the card to
            see through. `positive` keeps it in the same dot family as the
            other two rather than inventing a check-icon tag. */}
        {resolution ? (
          <F0TagStatus text="Resolved" variant="positive" />
        ) : (
          status && (
            <F0TagStatus text={status.text} variant={status.variant} />
          )
        )}
      </div>
      {run.reason && (
        <span className="text-base text-f1-foreground-secondary">
          {run.reason}
        </span>
      )}
      {run.analysis && (
        <span className="text-base text-f1-foreground">{run.analysis}</span>
      )}
      <RunMeta run={run} />
      {run.actions &&
        (resolution ? (
          <RunConclusion resolution={resolution} />
        ) : (
          /* `pt-1` on top of the card's `gap-2`: the interaction zone gets
             more air than the prose lines get from each other. */
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {/* BLACK FIRST, then the alternative, all pinned LEFT —
                the order the insight cards use (Figma 2760:589016), which
                Oskar asked these to match. It replaces an earlier layout
                that pushed the pair to the right edge with the aside on
                the left; one order across both surfaces beats two. */}
            {primary && (
              <RunAction
                action={primary}
                conversationId={conversationId}
                runAt={run.at}
              />
            )}
            {alternative && (
              <RunAction
                action={alternative}
                conversationId={conversationId}
                runAt={run.at}
              />
            )}
            {asides.map((action) => (
              <RunAction
                key={action.label}
                action={action}
                conversationId={conversationId}
                runAt={run.at}
              />
            ))}
          </div>
        ))}
    </li>
  )
}

/**
 * "1 Sept, 08:02 · Marie Curie" — when the run happened and who it is
 * about, on one line.
 *
 * The entities used to sit in their own row above the buttons, where they
 * read as a stray caption belonging to nothing (the same orphaning problem
 * as the feedback icons). Attached to the stamp they read as what they
 * are: this run's identity.
 */
function RunMeta({ run }: { run: RunEntry }) {
  const who = run.entities.map((e) => e.label).join(", ")
  return (
    <span className="text-sm text-f1-foreground-tertiary">
      {runStamp(run.at)}
      {who && ` · ${who}`}
    </span>
  )
}

/**
 * Level 3 — the receipt.
 *
 * Mirrors f0's own AI-chat code block (`F0AiChat`'s
 * `markdownRenderers/components/Block.tsx`: `rounded-md
 * bg-f1-background-secondary p-2` with a monospace body) rather than
 * inventing a terminal surface, so a trace here and a fenced block in a
 * One reply are recognisably the same object. That module is internal to
 * F0AiChat and not exported from dist, so the classes are MIRRORED, not
 * imported — if it moves, this is the thing to re-check.
 *
 * The data carries ASCII prefixes and this owns the glyph and the colour,
 * which keeps presentation out of `agentThreads` entirely.
 */
const TRACE_KINDS = [
  // `strong` rather than a comparison on the prefix: the invocation is the
  // one line worth full contrast, and that is a property of the KIND, not
  // something to re-derive from its punctuation.
  {
    prefix: "$ ",
    glyph: "$",
    tint: "text-f1-foreground-tertiary",
    strong: true,
  },
  { prefix: "-> ", glyph: "\u2192", tint: "text-f1-foreground-secondary" },
  { prefix: "OK ", glyph: "\u2713", tint: "text-f1-foreground-positive" },
  { prefix: "! ", glyph: "\u26a0", tint: "text-f1-foreground-warning" },
] as const

function RunTrace({ log }: { log?: string[] }) {
  // A run can be too simple to have left a trace. Saying so beats padding
  // the block out to look busy (per Oskar's Level 3 empty state).
  if (!log || log.length === 0) {
    return (
      <p className="m-0 text-base text-f1-foreground-tertiary">
        Resolved instantly. No complex logs generated.
      </p>
    )
  }
  return (
    <pre className="mx-0 my-0 w-full overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2">
      <code className="font-mono flex flex-col gap-0.5 text-sm">
        {log.map((line, index) => {
          const kind = TRACE_KINDS.find((k) => line.startsWith(k.prefix))
          const body = kind
            ? line.slice(kind.prefix.length).trimStart()
            : line
          return (
            <span key={index} className="flex gap-1.5">
              <span
                aria-hidden
                className={`shrink-0 ${kind?.tint ?? "text-f1-foreground-tertiary"}`}
              >
                {kind?.glyph ?? "\u00b7"}
              </span>
              <span
                className={
                  kind && "strong" in kind
                    ? "text-f1-foreground"
                    : "text-f1-foreground-secondary"
                }
              >
                {body}
              </span>
            </span>
          )
        })}
      </code>
    </pre>
  )
}

/**
 * Levels 2 and 3 of the history — a card that shows only WHAT IT DID, and
 * opens onto why and how.
 *
 * The row this replaces put the summary, the stamp, the entities and a "3
 * checks passed" toggle on screen at once, four runs deep: a flat log that
 * read as machine output, and dense enough to hide the runs that mattered.
 * Same information, three layers (Oskar, second pass, on Claude Code's
 * encapsulation of tool calls): the title is what a person did, `result`
 * is what it concluded, and the trace underneath is the proof. Nobody has
 * to descend further than they care to.
 */
function RunCard({ run }: { run: RunEntry }) {
  const [open, setOpen] = useState(false)
  return (
    <li className="border-0 border-t border-solid border-f1-border-secondary first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center gap-1 border-none bg-transparent px-3 py-2 text-left text-base text-f1-foreground transition-colors duration-150 hover:bg-f1-background-secondary"
      >
        {/* The chevron trails the label, as in Reasoning — not flush
            right, which would read as a list row rather than a
            disclosure. */}
        <span className="flex min-h-6 items-center text-pretty">
          {run.command ?? run.summary}
        </span>
        <F0Icon
          icon={open ? ChevronDown : ChevronRight}
          size="md"
          color="secondary"
        />
      </button>
      <DisclosurePanel expanded={open}>
        <div className="flex flex-col items-start gap-2 px-3 pb-3">
          {run.result && (
            <p className="m-0 text-base text-f1-foreground-secondary">
              {run.result}
            </p>
          )}
          <RunTrace log={run.log} />
          <RunMeta run={run} />
        </div>
      </DisclosurePanel>
    </li>
  )
}
/**
 * TRIAGE, then HISTORY (per Oskar's review). What is waiting on you sits
 * at the top as cards; what is finished collapses underneath, because a
 * manager opening this has one job — unblock the agent — and mixing the
 * two made the eye do that sorting on every visit.
 *
 * History starts CLOSED when something is waiting and open when nothing
 * is: with no decisions to make, the record is the only thing to read.
 */
function RunLog({
  runs,
  conversationId,
  resolutions,
}: {
  runs: RunEntry[]
  conversationId: string
  resolutions?: Record<string, RunResolution>
}) {
  const waiting = runs.filter((r) => r.outcome !== "done")
  const done = runs.filter((r) => r.outcome === "done")
  const [openHistory, setOpenHistory] = useState(waiting.length === 0)
  return (
    <div className="flex flex-col gap-3">
      {waiting.length > 0 && (
        <ul className="flex list-none flex-col gap-2 p-0">
          {waiting.map((run) => (
            <BlockedRun
              key={run.at}
              run={run}
              conversationId={conversationId}
              resolution={resolutions?.[run.at]}
            />
          ))}
        </ul>
      )}
      {done.length > 0 && (
        <div className="flex w-full flex-col">
          <DisclosureButton
            label={`${done.length} completed runs`}
            expanded={openHistory}
            onClick={() => setOpenHistory((o) => !o)}
          />
          <DisclosurePanel expanded={openHistory}>
            <ul className="mb-0 mt-2 flex list-none flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary p-0">
              {done.map((run) => (
                <RunCard key={run.at} run={run} />
              ))}
            </ul>
          </DisclosurePanel>
        </div>
      )}
    </div>
  )
}

export function ConversationView({
  conversation,
}: {
  conversation: Conversation
}) {
  const endRef = useRef<HTMLDivElement>(null)
  /**
   * What is actually on screen: the committed turns, plus whatever the
   * current turn has typed so far. The streaming frame is kept out of
   * `messages` until it finishes, so a half-typed paragraph can never be
   * persisted or scrolled past as though it were final.
   */
  const streaming = conversation.streaming
  const rendered = streaming
    ? [
        ...conversation.messages,
        ...streaming.done,
        // chars < 0 → structure, rendered whole (see streamTurn).
        streaming.chars < 0
          ? streaming.typing
          : {
              ...streaming.typing,
              content: streaming.typing.content.slice(0, streaming.chars),
            },
      ]
    : conversation.messages

  const hasPendingQuestion = conversation.messages.some(
    (m) => m.question && !m.question.answer && !m.question.skipped
  )
  const idle =
    !conversation.thinking && !conversation.pendingReasoning && !streaming
  // Feedback belongs to the turn's reply: the last assistant paragraph.
  // Hidden while One is still asking a clarifying question (Figma).
  // Feedback belongs to the last assistant PARAGRAPH — never to the run
  // log. Thumbs on a record of executions rate nothing, and sitting under
  // the log they read as orphaned controls (per Oskar's review).
  const lastReplyId =
    idle && !hasPendingQuestion
      ? [...conversation.messages]
          .reverse()
          .find((m) => m.role === "assistant" && m.content && !m.runs)?.id
      : undefined

  // Keep the newest turn in view — the content scrolls under the pinned
  // prompt bar, so every new message/step pulls the thread to the bottom.
  const lastMessageId = rendered[rendered.length - 1]?.id
  const visibleSteps = conversation.pendingReasoning?.visible ?? 0
  // The stream grows the last paragraph rather than adding a message, so
  // the scroll has to watch the character count too or the text types
  // itself off the bottom of the screen.
  const streamedChars = streaming
    ? streaming.done.length * 1e6 + streaming.chars
    : 0
  // Don't yank the thread back if the user scrolled up to re-read: a
  // reasoning step lands every 1.2s and would fight them the whole turn.
  // Pinned state is sampled ON SCROLL — i.e. before the thread grows — so
  // a multi-paragraph reply arriving in one patch can never be mistaken
  // for the user scrolling away.
  const pinnedRef = useRef(true)
  useEffect(() => {
    const scroller = endRef.current?.closest<HTMLElement>(
      ".home-canvas-scroll"
    )
    if (!scroller) return
    const onScroll = () => {
      pinnedRef.current =
        scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight <
        160
      // Drives the TOP fade (see .home-canvas-scroll[data-scrolled]). It
      // has to be conditional: the bottom fade can be permanent because
      // the composer is always down there, but a permanent top fade would
      // sit on the first turn even at rest.
      if (scroller.scrollTop > 8) scroller.setAttribute("data-scrolled", "")
      else scroller.removeAttribute("data-scrolled")
    }
    scroller.addEventListener("scroll", onScroll, { passive: true })
    // Once on mount too: reopening a thread restores a scrolled position
    // without ever firing a scroll event.
    onScroll()
    return () => {
      scroller.removeEventListener("scroll", onScroll)
      scroller.removeAttribute("data-scrolled")
    }
  }, [])
  useEffect(() => {
    if (conversation.homeBriefing || conversation.homeSetup) {
      const scroller = endRef.current?.closest<HTMLElement>(
        ".home-canvas-scroll"
      )
      // A landing starts at the greeting. A new co-created preview starts
      // at its beginning, so its tasks/report are seen before the next question.
      const latestReply = [...rendered]
        .reverse()
        .find((m) => m.role === "assistant" && !m.question)
      if (
        scroller &&
        conversation.homeBriefing &&
        !conversation.messages.some((m) => m.role === "user")
      )
        scroller.scrollTop = 0
      else if (latestReply) {
        const target = scroller?.querySelector<HTMLElement>(
          `[data-home-message="${latestReply.id}"]`
        )
        target?.scrollIntoView({ behavior: "auto", block: "start" })
      }
      return
    }
    if (!pinnedRef.current) return
    endRef.current?.scrollIntoView({
      // Instant WHILE STREAMING: a smooth scroll re-triggered every 16ms
      // never arrives, so the view lags behind the text it is chasing.
      // An explicit "smooth" is otherwise NOT downgraded by
      // prefers-reduced-motion — only the CSS property is, and only in
      // some engines.
      behavior:
        streaming ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      block: "end",
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessageId, visibleSteps, streamedChars, conversation.thinking])

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
    const prev = rendered[index - 1]
    const sameTurn =
      prev?.role === "assistant" && rendered[index].role === "assistant"
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
            <p className="text-base text-f1-foreground">
              {message.content}
            </p>
          </div>
        )}
      </div>
    ) : message.question?.intentKey.startsWith("home:") ? (
      <HomeQuestion conversation={conversation} message={message} />
    ) : message.question ? (
      // Pending → status line; answered/skipped → nothing (the panel
      // held the question, and the answer echoes as a user turn).
      //
      // The card is at the far bottom of a 712px column, which is what
      // the line is for.
      !message.question.answer && !message.question.skipped ? (
        <div className="flex w-full items-start gap-1 text-f1-foreground-secondary">
          {/* The One spinner, as the kit uses it for a turn in progress
              (f0 docs: kits/ai F0ActionItem ChatSpinner) — waiting on you
              is still the turn working, and a static pink dot said
              nothing about that. Matches the "Thinking…" line below. */}
          <div className="-mt-[2px] grid size-6 shrink-0 items-center justify-items-center">
            <ChatSpinner />
          </div>
          <p className="shine-text text-pretty">Asking question…</p>
        </div>
      ) : null
    ) : (
      <div className="flex flex-col gap-4">
        {message.reasoning && (
          <ReasoningBlock steps={message.reasoning} inProgress={false} />
        )}
        {message.content && (
          <p className="text-base text-f1-foreground">
            {renderInline(message.content)}
          </p>
        )}
        {message.homeArtifact && (
          <HomeArtifactView
            artifact={message.homeArtifact}
            entrance={
              !!conversation.homeBriefing &&
              conversation.messages[0]?.id === message.id
            }
          />
        )}
        {message.plan && <PlanSteps steps={message.plan} />}
        {message.runs && (
          <RunLog
            runs={message.runs}
            conversationId={conversation.id}
            resolutions={conversation.resolutions}
          />
        )}
        {message.insights && (
          <div className="flex w-full flex-col gap-2">
            {message.insights.map((insight, i) => (
              <InsightCard
                key={insight.id}
                insight={insight}
                index={i}
                acted={conversation.insightsActed?.[insight.id]}
                onAct={(target, index) =>
                  actOnInsight(conversation.id, target, index)
                }
              />
            ))}
          </div>
        )}
        {message.id === lastReplyId && (
          <TurnFeedback content={message.content} />
        )}
      </div>
    )

  return (
    <div className="mx-auto flex w-[712px] max-w-full flex-1 flex-col px-3.5 pb-10 pt-2">
      {rendered.map((message, index) => {
        const content = body(message)
        // An answered question renders nothing — wrapping it anyway would
        // leave its margin behind as a phantom gap.
        if (!content) return null
        return (
          <div
            key={message.id}
            data-home-message={message.id}
            className={spacingFor(index)}
          >
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
        conversation.thinking &&
        !streaming && (
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
