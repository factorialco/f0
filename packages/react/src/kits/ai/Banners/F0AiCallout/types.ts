import type { ReactNode } from "react"
import type { IconType } from "@/components/F0Icon"
import type { DataAttributes } from "@/global.types"

/**
 * How much the message matters, from a report the reader can skim to something
 * they have to act on now.
 *
 * | status     | use it when                                   | example                     |
 * | ---------- | --------------------------------------------- | --------------------------- |
 * | `neutral`  | nothing is asked of the reader                | Summary of a device history |
 * | `info`     | there is something to do, nothing is wrong    | 5 invoices linked           |
 * | `positive` | One endorses what the reader already did      | Approval recommended        |
 * | `warning`  | something may be wrong — look                 | Requires review             |
 * | `critical` | something is wrong — act                      | Request repayment           |
 *
 * `neutral` or `info` is the only pair worth spelling out. `neutral` is the
 * absence of a status — 4% surface, uncoloured title, no glyph of its own —
 * and means there is nothing to do at all, so passing it an `action` warns in
 * development. `info` means the reader has work even when there is no button
 * to offer: the work is often elsewhere, and the button is a convenience,
 * never what earns the colour.
 *
 * One callout is **one evaluation with one severity**. Mixed severity is two
 * callouts, not one.
 */
export const aiCalloutStatuses = [
  "neutral",
  "info",
  "positive",
  "warning",
  "critical",
] as const

export type AiCalloutStatus = (typeof aiCalloutStatuses)[number]

export type AiCalloutAction = {
  label: string
  onClick: () => void
  icon?: IconType
  disabled?: boolean
}

/**
 * One entry in a stacked callout. Each finding is resolved on its own, so each
 * carries its own action — "Review" on a duplicate invoice does something
 * different from "Review" on a tax mismatch.
 */
export type AiCalloutFinding = {
  /**
   * Stable across renders. Findings are resolved and removed one at a time, so
   * an index would re-key the survivors and animate the wrong rows out.
   */
  id: string
  title: string
  description: ReactNode
  action?: AiCalloutAction
}

type AiCalloutSharedProps = DataAttributes & {
  /**
   * Required on purpose — there is no safe default. Defaulting a blocking
   * finding to a mild status is the one mistake nobody catches in review,
   * because the callout still looks correct.
   *
   * One callout is **one evaluation with one severity**, whether it carries a
   * single verdict or a list of findings. Mixed severity is two callouts, not
   * one: "Suggestions to review" in `warning` beside "Issues to resolve" in
   * `critical`, which is how the design draws it.
   */
  status: AiCalloutStatus
  /**
   * A single verdict ("Possible duplicate") when the callout carries one, or
   * what the list adds up to ("Issues to resolve") when it stacks.
   *
   * **This is the only text in the tinted zone, and it is always about the
   * record — never about One and never the record's identity.** Both are
   * already on screen: the byline says who produced this, and the page says
   * which record it is. "One drafted a resolution plan" spends the coloured
   * zone re-announcing the byline; "Six steps to set up this workstation" says
   * what the reader is looking at. It carries the colour because it is the one
   * line that carries severity, so it has to be the conclusion, not the
   * provenance.
   */
  title: string
  /**
   * Overrides the glyph the status would pick. Required for `neutral`, which
   * has no semantic glyph of its own — pass one that describes the content
   * (e.g. `Summary` from `@/icons/ai`).
   */
  icon?: IconType
}

type AiCalloutSingleProps = AiCalloutSharedProps & {
  /**
   * The reason, in one line. "Two of five policy checks failed."
   *
   * **This is the title of the white card**, and the split from the tinted one
   * is by job, not by importance: up there is *what it is*, down here is *why*.
   * Same size and weight on purpose — they are one sentence broken in two, not
   * a heading and a subheading — which is exactly why they must not be two
   * nouns of the same kind. Never a score, a count or a status word here.
   *
   * There are four prose jobs in this shape and each slot gets exactly one:
   * `title` is the verdict, this is the reason, `children` is the nuance that
   * changes what the reader does, and `evidence` is the proof. The test: read
   * only the emphasised text — `title` plus this — and it has to stand alone as
   * a decision. "Rejection recommended · Two of five policy checks failed"
   * does; "Rejection recommended · Client lunch · $712.65" does not, which is
   * why this must not carry the record's identity. The page around the callout
   * already says which expense this is.
   */
  summary?: string
  /** The reasoning behind the verdict. Accepts a list when there is more than one reason. */
  children: ReactNode
  /**
   * **The move the verdict recommends**, rendered outlined. That binding is the
   * rule: if the reasoning above actually concludes something else, the verdict
   * is wrong, not the button. A callout titled "Rejection recommended" whose
   * outlined action is "Request changes" is telling the reader two different
   * things and making them guess which one One meant.
   */
  action?: AiCalloutAction
  /**
   * **The way out of the recommendation** — "Approve anyway" against "Reject".
   * Ghost, so the pair reads as a hierarchy and not as two peers.
   *
   * It has to be the *override*, not a third option. Pairing "Reject" with
   * "Request changes" looks like two buttons but is really three paths with one
   * missing, and the reader cannot tell which of them One is recommending.
   *
   * This reopens the "one action, and only one" rule on purpose. That rule was
   * right for a plain callout, where two outlined buttons were noise for a
   * message with no room to justify either. A recommendation with an auditable
   * rationale is the case the rule pointed at: a decision that needs two paths,
   * somewhere that has the room to explain them.
   */
  secondaryAction?: AiCalloutAction
  /** Dismisses the callout. Acts on the container, so it lives in the header. */
  onClose?: () => void
  /**
   * The reasoning that led to the verdict, revealed on demand. The header
   * gains a toggle; nothing in the body is truncated or clamped, so the
   * description stays fully readable whether this is open or closed.
   */
  evidence?: {
    /**
     * **Names what is behind the disclosure, as a noun phrase** — "the 5
     * checks", "the six steps", "why this was rejected". The component supplies
     * the verb, so it renders as "See the 5 checks" closed and "Hide the 5
     * checks" open.
     *
     * It is required because a bare chevron says "there is more", which is what
     * a list of separate recommendations says too; naming the content is what
     * tells the reader these are not more verdicts. Splitting it this way is
     * also what keeps the label honest: the product cannot pass a verb, so the
     * label can only ever name something.
     */
    name: string
    /**
     * One line per step of the reasoning. Plain nodes rather than
     * title/description pairs: a policy check is usually a single fact, and
     * splitting it in two padded "Receipt verified / Passed." into a heading
     * with a body. Emphasis goes inline, where the number or the rule actually
     * is, instead of always landing on the check's name.
     *
     * They carry no action, and that absence is the contract: the day one
     * needs a button it has become a finding, and the callout should carry
     * `findings`. Work with no button is still fine here — see `kind`.
     */
    items: ReactNode[]
    /**
     * What the disclosure holds, which is the one thing the label cannot
     * enforce on its own.
     *
     * `rationale` (the default) is why the verdict is the verdict: sentences,
     * bulleted, read once and never touched again.
     *
     * `steps` is a plan the reader works through, and the only difference is
     * the marker: numbered, because the order is part of the content — you
     * confirm the device before you order it. Numbers do that job on their own,
     * which is why there are no checkboxes here. Per-item state is work the
     * record already tracks better than a message can, and a message that
     * remembers things is no longer a message.
     *
     * The contract above holds in both: no CTA per item. A step is work the
     * reader does elsewhere, over hours or days, and the moment one needs its
     * own button this is `findings`.
     */
    kind?: "rationale" | "steps"
  }
  /**
   * Uncontrolled initial state of the rationale. Defaults to folded, which is
   * the opposite of the stacked default and deliberately so: here the verdict
   * is already on screen and the reasoning is optional, so opening it is the
   * reader's move, not ours.
   */
  defaultOpen?: boolean
  /** Controlled state. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
  findings?: never
}

type AiCalloutStackedProps = AiCalloutSharedProps & {
  /**
   * Switches the callout to its stacked layout: the byline moves up beside the
   * title because the whole evaluation shares one provenance, each finding gets
   * its own row and its own action, and the header gains a toggle. Passing the
   * list is what turns this on — there is no `stacked` flag, because the product
   * already knows whether it holds one verdict or several.
   *
   * **Order matters.** `findings[0]` is the headline: it stays on screen when
   * the rest are folded, so it is the one row the reader is guaranteed to see.
   * Sort by severity, not by detection order.
   *
   * A list of one is a valid state, not a degenerate case: an evaluation that
   * started with four findings and has had three resolved should not change
   * shape on the last one. It simply loses the toggle and the deck, since
   * folding would hide nothing.
   */
  findings: AiCalloutFinding[]
  /**
   * Uncontrolled initial state. Defaults to open — a folded finding is a
   * finding nobody read. Folded still shows the headline row behind a deck edge,
   * never just the header.
   */
  defaultOpen?: boolean
  /** Controlled state, for folding several callouts together. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: never
  summary?: never
  action?: never
  secondaryAction?: never
  /**
   * A stacked callout already is its own list. Evidence is the other shape:
   * one verdict whose reasoning can be audited.
   */
  evidence?: never
  /**
   * Not available while stacked, and the fold is why. Folding keeps the headline
   * finding on screen, so there is deliberately no state in which the callout
   * shows nothing — one that can be reduced to a tinted strip with no finding on
   * it is dismissable under another name, and unresolved findings would go with
   * it.
   */
  onClose?: never
}

export type F0AiCalloutProps = AiCalloutSingleProps | AiCalloutStackedProps

export interface AiCalloutSkeletonProps {
  status?: AiCalloutStatus
  /** Drops the footer, for callouts that will load without an action. */
  compact?: boolean
}
