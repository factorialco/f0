import { AnimatePresence, motion } from "motion/react"
import { forwardRef, useEffect, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { One } from "@/icons/ai"
import { ChevronDown, ChevronUp, Cross } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"

import type {
  AiCalloutAction,
  AiCalloutFinding,
  AiCalloutStatus,
  F0AiCalloutProps,
} from "./types"

import {
  cardBorderVariants,
  cardClasses,
  rowClasses,
  statusForegroundVariants,
  statusIconColors,
  statusIcons,
  statusTintVariants,
} from "./variants"

const Byline = () => {
  const { ai } = useI18n()

  return (
    // No `opacity-50` here, though Figma draws the byline faint: halving the
    // secondary token takes it from 4.96:1 to 2:1, well under AA, and an
    // attribution nobody can read is the one thing this component cannot
    // ship. It stays subordinate by token and weight instead.
    <span className="flex min-w-0 flex-row items-center gap-1 text-base font-normal text-f1-foreground-secondary">
      <F0Icon icon={One} size="md" color="currentColor" aria-hidden />
      <span className="truncate">{ai.attribution}</span>
    </span>
  )
}

const ActionButton = ({ action }: { action: AiCalloutAction }) => (
  <F0Button
    variant="outline"
    size="md"
    label={action.label}
    icon={action.icon}
    disabled={action.disabled}
    onClick={action.onClick}
  />
)

/**
 * Open, the findings are rows of **one continuous white block** split by
 * hairlines — not separate cards with gaps. Figma composes it as sibling cards
 * that share their edges (`border-b/l/r` only, `mb-[-2px]` to overlap, radius
 * on the first and last alone, a Divider between); one container with internal
 * rules is the same pixels with none of the arithmetic.
 *
 * Tighter than a single verdict: `py-1.5` between text blocks against the
 * single card's `p-4`, because a list is read by scanning and one card is read
 * by stopping. The outer edges get the 12px Figma gives them.
 *
 * `first`/`last` are props rather than CSS `first:`/`last:` variants because
 * the animation splits the rows across two parents: the foldable ones live
 * inside the collapsible box, so the pseudo-class would strip the rule that
 * separates the first of them from the headline row.
 */
const FindingRow = ({
  finding,
  status,
  first = false,
  last = false,
}: {
  finding: AiCalloutFinding
  status: AiCalloutStatus
  first?: boolean
  last?: boolean
}) => (
  <div
    className={cn(
      "flex flex-row items-center justify-between gap-3 border-x-0 border-b-0 border-t border-solid px-3 py-1.5",
      cardBorderVariants({ status }),
      first && "border-t-0 pt-3",
      last && "pb-3"
    )}
  >
    <div className="flex min-w-0 flex-col gap-0.5">
      <span className="text-base font-medium text-f1-foreground">
        {finding.title}
      </span>
      <div className="text-base text-f1-foreground-secondary">
        {finding.description}
      </div>
    </div>
    {finding.action && <ActionButton action={finding.action} />}
  </div>
)

/**
 * `neutral` is the one status with no colour to ring with, and F0's border scale
 * starts at `neutral-20` (10%) where the design asks for `neutral-10` (6%) — so
 * every coloured status draws its ring at exactly its tint's alpha (measured
 * ratio 1) while `neutral` came out 2.5× darker than its own 4% surface, reading
 * as an outline rather than a joint.
 *
 * Rather than borrow a background token for a border, this applies the design's
 * own rule literally: the ring *is* the tint. A transparent border plus
 * `bg-clip-padding` stops the card's white from painting under the border box,
 * so the shell's tint shows through it. No token invented, no value borrowed.
 *
 * Foundations still owes a neutral border token at the 6% step; until then the
 * 1px hairlines keep using `border-f1-border-secondary`, where 10% is
 * not a problem.
 */
const neutralRing = (status: AiCalloutStatus) =>
  status === "neutral" && "border-transparent bg-clip-padding"

export const AiCalloutInternal = forwardRef<HTMLDivElement, F0AiCalloutProps>(
  function AiCalloutInternal(
    {
      status,
      title,
      summary,
      children,
      icon,
      action,
      secondaryAction,
      onClose,
      findings,
      evidence,
      open: controlledOpen,
      defaultOpen,
      onOpenChange,
      ...rest
    },
    ref
  ) {
    const i18n = useI18n()
    const { actions, ai } = i18n
    const shouldReduceMotion = useReducedMotion()
    const stacked = findings !== undefined
    // The two shapes fold in opposite directions, so they cannot share a
    // default. Stacked starts open because the pile is the summary: folded it
    // hides verdicts the reader has not seen yet. A rationale starts folded
    // because it is the reverse — the verdict is already on screen, and the
    // reasoning is there for whoever wants to check it.
    const [uncontrolledOpen, setUncontrolledOpen] = useState(
      defaultOpen ?? stacked
    )
    const open = controlledOpen ?? uncontrolledOpen
    const [headline, ...foldable] = findings ?? []
    // Only worth a toggle when folding would actually hide something. With a
    // single finding the folded and unfolded states are identical, so the
    // control would promise a change it cannot deliver.
    const hasEvidence = (evidence?.items.length ?? 0) > 0
    const isSteps = evidence?.kind === "steps"
    const EvidenceList = isSteps ? "ol" : "ul"
    // Two things can fold, and they are not the same thing: findings that are
    // hidden away, or a rationale that is revealed. Only the first is a pile.
    const canFold = foldable.length > 0 || hasEvidence
    const showDeck = stacked && foldable.length > 0 && !open
    /**
     * Folded, the findings read as a pile of individual cards; open, they are
     * rows inside one container. So the fold needs more than a hint that
     * something is behind — it needs edges, each one step narrower and one step
     * lower, painted farthest-first so the nearer ones cover them.
     *
     * Capped at two. The count is not the job of the illusion: a pile of eight
     * would be a stack of hairlines, and past two edges nobody counts anyway.
     */
    const deckLayers =
      foldable.length === 0
        ? []
        : foldable.length === 1
          ? [{ inset: "inset-x-3", offset: "bottom-0" }]
          : [
              // Figma stacks three whole callouts at 526 / 500 / 476 wide and
              // 8px apart: 13px narrower per side per step. 12 and 24 keep it
              // on the spacing scale and land within a pixel.
              { inset: "inset-x-6", offset: "bottom-0" },
              { inset: "inset-x-3", offset: "bottom-2" },
            ]
    const headerIcon = icon ?? statusIcons[status]

    // Development-only, and in an effect rather than in the render body: a
    // console.warn during render fires again on every re-render, so a single
    // violation turns into a stream. The deps are the *presence* of an action
    // and of a headline rather than the objects themselves — products pass
    // those inline, so a new identity every render would re-log exactly what
    // the effect is here to stop.
    const hasAction = Boolean(action || secondaryAction)
    const hasHeadline = Boolean(headline)

    useEffect(() => {
      if (process.env.NODE_ENV === "production") return

      // The `neutral`/`info` line is enforced here rather than left in a doc:
      // if there is something to do, the callout is not neutral. Without this
      // the two rungs collapse into "grey or blue" and whichever feels calmer
      // wins.
      if (status === "neutral" && hasAction) {
        console.warn(
          "F0AiCallout: `neutral` means there is nothing to do, so it cannot carry an action. A callout that offers a move with nothing wrong is `info`."
        )
      }

      if (status === "neutral" && !icon) {
        console.warn(
          "F0AiCallout: `neutral` carries no semantic glyph, so it needs an `icon` that describes the content (e.g. `Summary` from @/icons/ai)."
        )
      }

      if (stacked && !hasHeadline) {
        console.warn(
          "F0AiCallout: `findings` is empty. A callout titled like a verdict with nothing under it tells the reader something is wrong and not what — rendering nothing instead."
        )
      }
    }, [status, hasAction, icon, stacked, hasHeadline])

    // And actually render nothing, which the warning above promises. The header
    // and shell are built unconditionally below, so without this an empty
    // `findings` array puts a critical pill on the page reading like a verdict
    // with no content under it.
    if (stacked && !hasHeadline) {
      return null
    }

    const header = (
      // `min-h-9` pins the header at Figma's 36px in every combination. With
      // the 24px glyph the row reaches it on its own (6 + 24 + 6), but a
      // `neutral` callout given no icon has only a 20px title row and would
      // otherwise sit 4px shorter than its neighbours.
      <div className="flex min-h-9 flex-row items-center gap-2 px-3 py-1.5">
        <div className="flex min-w-0 flex-1 flex-row items-center gap-2">
          {/* 24px, and outlined. Every current node uses `ExclamationCircle` at
              24 rather than the `…Solid` glyph at 20 the first cut measured,
              which closes the "F0 has no solid icons" gap that was open all
              along: there is nothing left to substitute. */}
          {headerIcon && (
            <F0Icon
              icon={headerIcon}
              size="lg"
              color={statusIconColors[status]}
              aria-hidden
            />
          )}
          <OneEllipsis
            className={cn(
              "text-base font-medium",
              statusForegroundVariants({ status })
            )}
          >
            {title}
          </OneEllipsis>
          {stacked && (
            // Figma gives the stacked header's byline the *status* foreground at
            // 50%, in Medium, and hides the One glyph — unlike the single
            // callout's footer byline, which is grey and keeps the mark. The
            // difference holds up: in the footer the byline is the row's own
            // content, while here it is a suffix to a coloured title and a grey
            // one would read as a different message pasted on.
            <span
              className={cn(
                // Subordinate by size (12 against the title's 14), not by
                // opacity: at 50% the status foreground lands around 2:1.
                "flex min-w-0 flex-row items-center gap-1 text-sm font-medium",
                statusForegroundVariants({ status })
              )}
            >
              {/* The separator is presentation, so it stays out of the
                  translated string. */}
              <span aria-hidden>·</span>
              <span className="truncate">{ai.attribution}</span>
            </span>
          )}
        </div>
        {stacked && canFold && (
          <CollapsibleTrigger asChild>
            <F0Button
              variant="ghost"
              size="sm"
              icon={open ? ChevronUp : ChevronDown}
              label={i18n.t(
                open ? "actions.collapseItem" : "actions.expandItem",
                { title }
              )}
              hideLabel
            />
          </CollapsibleTrigger>
        )}
        {onClose && (
          <F0Button
            variant="ghost"
            size="sm"
            icon={Cross}
            hideLabel
            label={actions.close}
            onClick={onClose}
          />
        )}
      </div>
    )

    const body = stacked ? (
      // The headline row never folds away. Folding to just the header would
      // leave a tinted strip saying "Issues to resolve" with no issue on it —
      // which is dismissing the callout under another name.
      headline && (
        <div
          className={cn(
            cardClasses,
            cardBorderVariants({ status }),
            neutralRing(status)
          )}
        >
          <FindingRow
            finding={headline}
            status={status}
            first
            last={!open || !canFold}
          />
          <AnimatePresence initial={false}>
            {open && canFold && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                className="overflow-hidden"
              >
                <CollapsibleContent forceMount asChild>
                  <div>
                    {foldable.map((finding, index) => (
                      <FindingRow
                        key={finding.id}
                        finding={finding}
                        status={status}
                        last={index === foldable.length - 1}
                      />
                    ))}
                  </div>
                </CollapsibleContent>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )
    ) : (
      <div
        className={cn(
          cardClasses,
          cardBorderVariants({ status }),
          neutralRing(status)
        )}
      >
        {/* One padded block on one white surface: description, the disclosure
            that belongs to it, and the reasoning it opens. Nothing changes
            colour or plane — the hierarchy is carried by the type scale and by
            the bullets. */}
        <div className="flex flex-col items-start gap-2 p-4">
          {/* Title and description are one text block at Figma's 2px, not two
              children of the body's 8px rhythm: 8px between them read as two
              separate things, when the description is the same sentence
              continuing. The 8px stays between this block and the disclosure,
              which *is* a separate thing. */}
          <div className="flex flex-col gap-0.5">
            {summary && (
              <span className="text-base font-medium text-f1-foreground">
                {summary}
              </span>
            )}
            {/* Secondary, and the `summary` above is what makes that work. Three
                earlier cuts got this wrong in three different ways: dark item
                labels over a grey description (the detail outranked the body),
                then everything secondary (flat), then everything dark (flat in
                black). The anchor was never the description — it is the summary
                line. With a dark title in front of it, body copy can sit in
                secondary and the ladder reads by itself.

                Never clipped: the design shows the description whole and folds
                only the detail list, so the "max 3 lines" the feedback asked
                for is not in it. */}
            <div className="text-base text-f1-foreground-secondary">
              {children}
            </div>
          </div>
          {hasEvidence && (
            <>
              {/* The disclosure sits here, under the description it belongs to,
                  and not in the header — that placement is the clearest signal
                  of the relationship. A control in the header says "there are
                  more items"; one under a sentence says "there is reasoning
                  behind this sentence". Ghost, so it never competes with the
                  outlined CTA in the footer. */}
              {/* The wrapper's `-ml-2` cancels the ghost button's own 8px of
                  inline padding so its label lands on the same left edge as the
                  description above and the list below — without it the text
                  column jogs 8px right for one line and back. It goes on a
                  wrapper because `F0Button` omits `className` by design. */}
              <div className="-ml-2">
                <CollapsibleTrigger asChild>
                  <F0Button
                    variant="ghost"
                    size="sm"
                    // Only the verb changes. Replacing the whole label costs
                    // the reader the one thing it is for — naming what is
                    // behind it — and moves the control's width under the
                    // pointer; leaving it identical makes a control that has
                    // just done something look like it did nothing. See/Hide
                    // differ by a character, so the noun stays put.
                    label={i18n.t(
                      open ? "ai.evidence.hide" : "ai.evidence.show",
                      { name: evidence!.name }
                    )}
                    icon={open ? ChevronUp : ChevronDown}
                    iconPosition="right"
                  />
                </CollapsibleTrigger>
              </div>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                    className="w-full overflow-hidden"
                  >
                    <CollapsibleContent forceMount asChild>
                      {/* Preflight is disabled here, so a bare `ul` renders
                          with no marker, no indent and no margin — every one
                          of these is explicit on purpose.

                          A rationale bullets: `outside` puts the discs in the
                          padding so they land on the column the description
                          starts at and the sentences hang off them, which is
                          what stops the text block from stepping sideways.

                          A plan numbers instead, in an `ol`, because the order
                          is part of what it says — and one marker per row
                          either way, which is what ruled out putting a
                          checkbox in front of a disc.

                          Keyed by index on purpose: unlike findings, neither a
                          rationale nor a plan is resolved and removed item by
                          item, so there is no reordering for an index key to
                          get wrong.

                          `[&_strong]:font-medium` is not cosmetic: F0's weight
                          scale stops at 400/500/600, and with preflight
                          disabled nothing normalises the browser's own
                          `strong`, which lands on 700 — off-scale and heavier
                          than the verdict's own title. Products emphasise
                          inline with `strong`; this is what keeps that on the
                          scale. */}
                      <EvidenceList
                        className={cn(
                          "m-0 flex list-outside flex-col gap-1 pl-5 text-base font-normal text-f1-foreground-secondary [&_b]:font-medium [&_strong]:font-medium",
                          isSteps ? "list-decimal" : "list-disc"
                        )}
                      >
                        {evidence!.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </EvidenceList>
                    </CollapsibleContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
        <div
          className={cn(
            rowClasses,
            "px-4 py-3",
            cardBorderVariants({ status })
          )}
        >
          <Byline />
          {(secondaryAction || action) && (
            <div className="flex flex-row items-center gap-2">
              {secondaryAction && (
                <F0Button
                  variant="ghost"
                  size="md"
                  label={secondaryAction.label}
                  icon={secondaryAction.icon}
                  disabled={secondaryAction.disabled}
                  onClick={secondaryAction.onClick}
                />
              )}
              {action && <ActionButton action={action} />}
            </div>
          )}
        </div>
      </div>
    )

    const shell = (
      <div
        ref={ref}
        // Never `role="alert"`. The byline says a machine reached this
        // conclusion, and an assessment is not a system emergency — it should
        // not interrupt whatever the reader is doing.
        role="status"
        aria-live="polite"
        // The pile lives out here, as siblings of the callout rather than
        // inside it. That is the whole difference: in Figma the layers are
        // three frames at the same level, so their edges sit on the page, and
        // nested inside the tinted shell — which also clips — they read as
        // shapes trapped in a red box instead of loose cards behind this one.
        // The padding is the room they show through.
        className={cn(
          "relative w-full",
          showDeck && (deckLayers.length === 1 ? "pb-2" : "pb-4")
        )}
        {...rest}
      >
        {showDeck &&
          deckLayers.map(({ inset, offset }) => (
            // A whole callout behind: its own tint with its own white card
            // pinned to the bottom, exactly as Figma stacks three complete
            // Cards. Only ~8px shows, so the content is left out — rendering it
            // twice would hand a screen reader a copy of what the fold hides.
            <div
              key={inset}
              aria-hidden
              className={cn(
                // Tall enough that its 16px corners are never clamped: a box
                // shorter than 32px makes the browser scale both radii to fit,
                // and a scaled radius here no longer matches the white card's.
                "absolute h-12 overflow-hidden rounded-xl",
                inset,
                offset,
                statusTintVariants({ status })
              )}
            >
              {/* `rounded-b-xl` rather than `rounded-xl`, and 32px tall. At 20px
                  with all four corners the radii summed past the height, so the
                  browser scaled them to 10 while the layer kept 16 — and the
                  tint showed through the gap between the two curves as a red
                  smear in the corner. Bottom-only radii on a box this tall are
                  never clamped, so both curves coincide. */}
              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 top-4 rounded-b-xl border-x-2 border-b-2 border-t-0 border-solid bg-f1-background",
                  cardBorderVariants({ status })
                )}
              />
            </div>
          ))}
        {/* Positioned so DOM order decides the painting: the absolute layers
            would otherwise sit above a static sibling. */}
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-xl",
            statusTintVariants({ status })
          )}
        >
          {header}
          {body}
        </div>
      </div>
    )

    if (!canFold) return shell

    return (
      <Collapsible
        open={open}
        onOpenChange={(next) => {
          setUncontrolledOpen(next)
          onOpenChange?.(next)
        }}
        asChild
      >
        {shell}
      </Collapsible>
    )
  }
)
