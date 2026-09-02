import { Fragment, useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Check, ChevronDown } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Separator } from "@/ui/separator"

import { Widget, WidgetProps } from "@/experimental/Widgets/Widget"

import {
  defaultSlotRenderers,
  defaultSlotSkeleton,
  DEFAULT_EXPECTED_ITEMS_COUNT,
  resolveSlotRenderer,
  resolveWidgetHeader,
  type HomeWidgetChrome,
  type HomeWidgetHeader,
  type HomeRenderCtx,
  type HomeWidgetSlot,
  type SlotRenderers,
  type WidgetParams,
} from "../slotRenderers"

/**
 * SlotWidget — one Home widget rendered from data: the f0 `Widget` frame (the
 * only allowed widget wrapper) with an ordered list of SLOTS stacked below the
 * header, a DASHED divider between consecutive slots.
 *
 * Each slot is `{ visualization, params }`; how a visualization is drawn comes
 * from the merged renderer map (`defaultSlotRenderers` + the `slotRenderers`
 * prop). Bespoke visualizations (e.g. `clock-in`) have no default and must be
 * supplied via `slotRenderers`.
 *
 * `loading` swaps every slot's content for that visualization's SKELETON,
 * keeping the frame, the chrome and the seams — the card doesn't change shape
 * when the data lands, it fills in.
 *
 * THE WAY OUT IS A FOOTER BUTTON. `header.link` is still how a widget declares
 * it, but it lands under the content as a named button rather than as an
 * icon in the header's top-right: that corner belongs to the overflow menu
 * (`actions`), and a button that says "Go to Calendar" needs no tooltip to say
 * where it goes.
 *
 * A CONFIGURABLE widget's `header.title` and `header.info` may be functions of
 * its `params` — "Hours · Design team" rather than "Hours" — so the card says
 * what it is currently showing.
 *
 * `header.info` is NOT an icon in the header: it is the widget's OTHER SIDE. The
 * card turns over to show it (see `flipped`), which is room enough to explain
 * itself in a sentence instead of a tooltip cramped beside the title.
 */
export type SlotWidgetProps = HomeWidgetChrome & {
  header?: HomeWidgetHeader
  /** The params `header.title` / `header.info` are computed from, if they are. */
  params?: WidgetParams
  /**
   * Shows the widget's BACK — `header.info`, centered — by turning the card
   * over. The column drives it from the widget's own menu (`WidgetContainer`).
   */
  flipped?: boolean
  /** Turns it back. Called when the back face is clicked. */
  onFlipBack?: () => void
  fullHeight?: boolean
  slots: HomeWidgetSlot[]
  /**
   * Draws each slot's SKELETON instead of its content. How many placeholder
   * items each one draws is the slot's own `expectedItemsCount`.
   */
  loading?: boolean
  /** Per-visualization renderers, MERGED OVER `defaultSlotRenderers`. */
  slotRenderers?: SlotRenderers
  /**
   * The header's overflow menu — the three dots at its top-right. This is where
   * a column's "Remove widget" lands (see `WidgetContainer`).
   */
  actions?: WidgetProps["actions"]
  /** Forwarded to the f0 `Widget`: the lifted look while the card is dragged. */
  isDragging?: boolean
  ctx?: HomeRenderCtx
}

/**
 * The footer's own spacing, and it exists because of the slots above it: a
 * row-based slot BLEEDS 8px past the card's content box on every side but the
 * top (`SLOT_ROW_BLEED`), and the last slot keeps that bleed at its bottom. So
 * the frame's 12px gap above the footer is already 8px spent — `mt-2` buys it
 * back — and the rows the button sits under start 8px to its left, which
 * `-ml-0.5` nudges it toward.
 */
const FOOTER_CLASS = "-ml-0.5 mt-2"

/**
 * THE TURN. A widget's info lives on its back, so getting there is a flip: half
 * a turn on Y, and a JUMP out of the column and back — the card lifts toward you
 * while it rotates, which is what makes it read as one object turning over
 * rather than two faces crossfading.
 *
 * PLAIN CSS, deliberately. Driving `rotateY` through motion here left the card
 * frozen at an angle: a widget re-renders for reasons that have nothing to do
 * with the turn (a drag, new data), and each of those re-entered motion's
 * animation. A transition on a transform is owned by the browser and cannot be
 * interrupted by a render at all.
 */
const FLIP_MS = 450
const FLIP_EASING = "cubic-bezier(0.4, 0, 0.1, 1)"
/** How far the card lifts toward you at the top of the jump. */
const FLIP_JUMP = 1.04

/**
 * A widget's CONTENT: the slot stack, with the dividers between slots and the
 * skeletons while it loads — everything `SlotWidget` draws, minus the card.
 *
 * Public because the frame is not always wanted. A surface that drills into a
 * widget (an overlay listing the tasks one of its grouped rows summarises) is
 * already a surface: wrapped in a `Widget` it would be a card inside a card,
 * with two borders and two paddings. Rendering the slots here keeps the rows
 * IDENTICAL to the widget's — same slots, same renderers — which composing them
 * by hand would not.
 *
 * Inside a card, prefer `SlotWidget`: it is this plus the frame.
 */
export function SlotWidgetContent({
  slots,
  loading = false,
  slotRenderers,
  ctx = {},
}: Pick<SlotWidgetProps, "slots" | "loading" | "slotRenderers" | "ctx">) {
  const renderers = slotRenderers
    ? { ...defaultSlotRenderers, ...slotRenderers }
    : defaultSlotRenderers

  return (
    // ONE child, so a Widget frame's internal `gap-4` applies once to the whole
    // slot stack instead of around every slot AND every divider.
    <div
      className="flex flex-col"
      {...(loading
        ? { "aria-busy": true, "aria-live": "polite" as const }
        : {})}
    >
      {slots.map((slot, index) => {
        const entry = resolveSlotRenderer(renderers[slot.visualization])
        const slotCtx = {
          ...ctx,
          isLastSlot: index === slots.length - 1,
        }
        return (
          <Fragment key={index}>
            {/* Wrapped rather than passing className: Separator spreads its
                rest props AFTER its own classes, so a className would replace
                them (and its 1px height) instead of adding the margin. */}
            {index > 0 ? (
              <div className="my-3">
                <Separator bare />
              </div>
            ) : null}
            {loading ? (
              // A placeholder says nothing worth reading out — the stack
              // above already announces that the widget is busy.
              <div aria-hidden="true">
                {/* A visualization with no skeleton of its own (a bespoke
                    renderer passed as a bare function, an unregistered one)
                    still gets a placeholder rather than the dashed notice. */}
                {(entry?.skeleton ?? defaultSlotSkeleton)(slot.params, {
                  ...slotCtx,
                  expectedItemsCount:
                    slot.expectedItemsCount ?? DEFAULT_EXPECTED_ITEMS_COUNT,
                })}
              </div>
            ) : entry ? (
              entry.render(slot.params, slotCtx)
            ) : (
              <div className="rounded-md border border-dashed border-f1-border p-2 text-f1-foreground-secondary">
                {`No renderer for slot "${slot.visualization}"`}
              </div>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

export function SlotWidget({
  header,
  params,
  fullHeight,
  action,
  summaries,
  headerControls,
  headerActions,
  headerSelect,
  alert,
  status,
  slots,
  loading = false,
  slotRenderers,
  actions,
  flipped = false,
  onFlipBack,
  isDragging,
  ctx = {},
}: SlotWidgetProps) {
  const t = useI18n()
  const shouldReduceMotion = useReducedMotion()
  // The jump is a there-and-back, so it is a moment rather than a state: it is
  // switched on by the turn STARTING and off when the turn has landed. Only a
  // change of `flipped` can start it — a drag's re-renders never do.
  const [jumping, setJumping] = useState(false)
  const mounted = useRef(false)
  useEffect(() => {
    // Not on mount: a card that is already showing a side has not turned to it.
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (shouldReduceMotion) return
    setJumping(true)
    const landed = setTimeout(() => setJumping(false), FLIP_MS)
    return () => clearTimeout(landed)
  }, [flipped, shouldReduceMotion])
  // Everything the params decide (title, info) is resolved first, so from here
  // down the header is the plain one the frame takes. The LINK stays in it: the
  // frame draws it as the title itself.
  // `info` comes OUT: it is not a tooltip beside the title, it is what the card
  // shows when it is turned over.
  /**
   * WHAT THE CARD IS SHOWING, when its header carries a select. It lives HERE
   * rather than in the host: a widget declared as data has nowhere to keep a
   * live choice — params would persist it into a setting, and page state means
   * the page knowing about one particular card — so the card keeps it and hands
   * it to its slots (`ctx.selection`).
   *
   * A SESSION choice, deliberately: the card starts at `headerSelect.value`
   * every time it mounts. Something that should outlive the visit is a param.
   */
  const [picked, setPicked] = useState<string | undefined>(undefined)
  const selection = headerSelect
    ? (picked ?? headerSelect.value ?? headerSelect.options[0]?.value)
    : undefined
  const selected = headerSelect?.options.find(
    (option) => option.value === selection
  )

  const pick = (value: string) => {
    setPicked(value)
    headerSelect?.onChange?.(value)
  }

  // The card's own controls, in the order the header reads: what you can DO,
  // then what it is SHOWING, then whatever the host drew itself.
  const controls =
    headerActions?.length || headerSelect ? (
      <>
        {headerActions?.map((button, index) => (
          <F0Button key={index} variant="ghost" size="sm" {...button} />
        ))}
        {headerSelect ? (
          <Dropdown
            items={headerSelect.options.map((option) => ({
              label: option.label,
              // The menu says which one you are on; the trigger only names it.
              ...(option.value === selection
                ? { icon: Check }
                : option.icon
                  ? { icon: option.icon }
                  : {}),
              onClick: () => pick(option.value),
            }))}
          >
            <F0Button
              variant="ghost"
              size="sm"
              icon={ChevronDown}
              label={selected?.label ?? headerSelect.tooltip ?? ""}
              {...(headerSelect.tooltip
                ? { tooltip: headerSelect.tooltip }
                : {})}
            />
          </Dropdown>
        ) : null}
        {headerControls}
      </>
    ) : (
      headerControls
    )

  const { info, ...headerRest } = resolveWidgetHeader(header, params) ?? {}
  // Dropping `info` can leave the header with nothing in it — then there is no
  // header row to draw, unless the overflow menu needs one to sit in.
  // `headerControls` counts too: a widget whose header is nothing but its own
  // controls (a carousel with a scope switcher and no title) still needs the row
  // they sit in — without it the frame draws no header at all and they vanish.
  const headerProps =
    Object.values(headerRest).some((value) => value !== undefined) ||
    (actions && actions.length > 0) ||
    controls
      ? headerRest
      : undefined

  const front = (
    <Widget
      header={headerProps}
      fullHeight={fullHeight}
      action={action}
      footerClassName={FOOTER_CLASS}
      actions={actions}
      headerControls={controls}
      summaries={summaries}
      {...(alert ? { alert } : { status })}
      isDragging={isDragging}
    >
      <SlotWidgetContent
        // The selection goes DOWN, so a slot that owns its data fetches for
        // whatever the header is showing. So does whether this frame draws a
        // FOOTER: the last slot's bottom bleed is the card's bottom edge only
        // when nothing follows it (see `listMoreButtonClass`).
        ctx={{
          ...ctx,
          hasFooter: Boolean(action),
          ...(selection === undefined ? {} : { selection }),
        }}
        loading={loading}
        slotRenderers={slotRenderers}
        slots={slots}
      />
    </Widget>
  )

  // Nothing to turn over to: the card is just the card.
  if (!info) return front

  return (
    // The scene. `perspective` is what makes the turn a TURN — without it the
    // rotation is a flat squeeze — and it lives on the parent so the faces share
    // one vanishing point.
    <div
      className="[perspective:1200px]"
      style={{ height: fullHeight ? "100%" : undefined }}
    >
      {/* THE JUMP, on its own element: the lift and the turn are two transforms,
          and giving each its own box keeps them from overwriting one another. */}
      <div
        className="h-full"
        // The lift is a moment, so it leaves no other trace in the DOM — this is
        // how a test (and a pair of eyes on a slowed-down clock) can see it.
        data-turning={jumping || undefined}
        style={{
          transform: `scale(${jumping ? FLIP_JUMP : 1})`,
          transition: shouldReduceMotion
            ? undefined
            : `transform ${FLIP_MS / 2}ms ease-out`,
        }}
      >
        {/* THE TURN. */}
        <div
          className="relative h-full [transform-style:preserve-3d]"
          style={{
            transform: `rotateY(${flipped ? 180 : 0}deg)`,
            // No transition under reduced motion: the card still turns (the back
            // has to become visible — `backface-visibility` hides whichever face
            // points away), it just gets there at once.
            transition: shouldReduceMotion
              ? undefined
              : `transform ${FLIP_MS}ms ${FLIP_EASING}`,
          }}
        >
          {/* THE FRONT stays in the flow — it is what gives the card its height,
              so the back can match it without measuring anything. Hidden once it
              faces away, rather than showing through mirrored. */}
          <div
            className={cn(
              "[backface-visibility:hidden]",
              flipped && "pointer-events-none"
            )}
            aria-hidden={flipped}
          >
            {front}
          </div>
          {/* THE BACK: the same box, half a turn ahead. It KEEPS THE TITLE, in
              the place the front wears it, so what you are reading about is never
              in doubt — then the sentence itself, centered, and one small button
              to turn back. */}
          <div
            aria-hidden={!flipped}
            className={cn(
              "absolute inset-0 flex flex-col gap-4",
              "rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4",
              "[backface-visibility:hidden] [transform:rotateY(180deg)]",
              !flipped && "pointer-events-none"
            )}
          >
            {headerProps?.title ? (
              <div className="min-h-6 truncate font-medium text-f1-foreground">
                {headerProps.title}
              </div>
            ) : null}
            {/* The info takes the room the slots had, centered in it. */}
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
              <p className="m-0 text-lg font-medium text-f1-foreground-secondary">
                {info}
              </p>
              <F0Button
                variant="neutral"
                size="sm"
                label={t.widgets.gotIt}
                onClick={onFlipBack}
                // Out of the tab order while it faces away: a control nobody can
                // see should not be the next thing Tab lands on.
                {...(flipped ? {} : { tabIndex: -1 })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
