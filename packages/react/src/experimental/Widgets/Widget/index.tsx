import { useComposedRefs } from "@radix-ui/react-compose-refs"
import { cva, type VariantProps } from "cva"
import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"

import { F0Button, type F0ButtonProps } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import { F0TagAlert } from "@/components/tags/F0TagAlert"
import { F0TagStatus, StatusVariant } from "@/components/tags/F0TagStatus"
import {
  DropdownInternal,
  DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal.tsx"
import { One as OneIcon } from "@/icons/ai"
import { Ellipsis } from "@/icons/app"
import { AIButton as AIButtonComponent } from "@/kits/ai/AIButton"
import { useI18n } from "@/lib/providers/i18n"
import { Counter } from "@/ui/Counter"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { PrivateBox } from "@/sds/Profile/PrivateBox"
import {
  ChevronRight,
  EyeInvisible,
  EyeVisible,
  Handle,
  InfoCircleLine,
} from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { isExternalHref, Link } from "@/lib/linkHandler"
import { experimentalComponent } from "@/lib/experimental"
import { usePrivacyMode } from "@/lib/privacyMode"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import {
  Card,
  CardComment,
  CardContent,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@/ui/Card"
import { Separator } from "@/ui/separator"
import { Skeleton as SkeletonPrimitive } from "@/ui/skeleton"

export interface WidgetProps {
  header?: {
    title?: string
    subtitle?: string
    comment?: string
    info?: string
    canBeBlurred?: boolean
    /**
     * The way out of the widget: it makes the TITLE ITSELF the link — the title
     * with a chevron after it, one ghost-button-shaped target that lights up on
     * hover. Nothing sits in the header's top-right (that is the overflow menu's)
     * and nothing sits in the footer (that is `action`'s): the name of the widget
     * IS the way into it.
     */
    link?: {
      /**
       * What following it DOES, in words — "Go to Communities". The visible text
       * is the widget's title, so this is what a screen reader announces
       * instead: it names the DESTINATION, which a title alone cannot.
       */
      title: string
      url?: string
      onClick?: () => void
      /** Defaults to the chevron. */
      icon?: IconType
    }
    count?: number
  }
  /** The card's footer button — its call to action. `neutral`/`sm` by default. */
  action?: F0ButtonProps
  /**
   * Extra classes for the FOOTER row that `action` draws in. For content that
   * BLEEDS past the card's content box and wants the footer brought onto its
   * line — Home's row-based slots bleed 8px, which eats the gap above the footer
   * and offsets it from the rows (see `SlotWidget`). Spacing only; `F0Button`
   * takes no className of its own, so this is the seam for it.
   */
  footerClassName?: string
  summaries?: Array<{
    label: string
    value: string | number
    prefixUnit?: string
    postfixUnit?: string
  }>
  alert?: string
  status?: {
    text: string
    variant: StatusVariant
  }
  fullHeight?: boolean
  /**
   * Shows a drag handle to the left of the title. The handle carries
   * `data-gs-handle`, so a gridstack board picks it up as its handle.
   */
  draggable?: boolean
  onDragStart?: () => void
  onDragEnd?: () => void
  /** Lifts the card while it is being dragged. */
  isDragging?: boolean
  /** Marks the card as picked out — a selected tile on an editable board. */
  selected?: boolean
  /** An "Ask One" AI button in the header. */
  AIButton?: () => void
  /** An overflow menu at the header's right, beside `link`. */
  actions?: DropdownItem[]
  /**
   * THE WIDGET'S OWN CONTROLS, in the header's top-right: what the card is
   * currently showing (a scope switcher), or what you can do from it without
   * leaving the page ("New post"). They act on the WIDGET.
   *
   * They sit to the LEFT of the overflow menu, which keeps its corner — the menu
   * is where every widget's items live, and a control that moved depending on
   * whether a card had a menu would be a different control each time.
   *
   * Keep it to one or two `sm` controls. This row is the TITLE'S first, and the
   * title gives up its width to whatever is put beside it: three buttons here
   * and a narrow card has no name left.
   *
   * NOT the way out of the widget — that is `header.link`, drawn as the title
   * itself — and NOT its call to action, which is `action`, in the footer.
   */
  headerControls?: ReactNode
}

const InlineDot = () => (
  <div className="min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" />
)

/**
 * A WIDER CARD SPEAKS UP. The same widget sits in a Home's 396px rail and in
 * the main column beside it, and at the second width a 14px title over small
 * glyphs reads as a footnote pinned to a large surface. Past this width the
 * frame grows its title and its footer button, and its CONTENT grows its glyphs
 * (see {@link useWidgetIsWide}).
 *
 * 480px, so the rail (396px) stays exactly as it is and only a card that has
 * genuinely more room grows.
 */
const WIDE_WIDGET_PX = 480

/**
 * MEASURED, not asked for with a CSS container query, because two of the things
 * that react to it are PROPS rather than classes — `F0Button`'s size, an
 * avatar's — and one source of truth for "wide" beats a media query and a
 * measurement that can disagree by a frame. It starts `false`, so the first
 * paint is the card as it has always been and a wide one grows into it.
 *
 * `clientWidth`, NOT `getBoundingClientRect().width`: a bounding rect is
 * multiplied by any `transform: scale()` an ancestor applies (a zoom-to-fit
 * preview frame, a dragged card's lift), so a card would change its own type
 * scale while it was being scaled. `clientWidth` is the layout metric and
 * ignores transforms.
 */
const useIsWide = (ref: React.RefObject<HTMLElement | null>) => {
  const [isWide, setIsWide] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof ResizeObserver === "undefined") return

    const measure = () => setIsWide(element.clientWidth >= WIDE_WIDGET_PX)

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref])

  return isWide
}

/**
 * Whether the surrounding widget is WIDE, for content that has to size itself to
 * the card it landed in — Home's list rows step their glyphs up a size here (see
 * `slotRenderers`).
 *
 * A CONTEXT rather than a prop or a second measurement, because a widget's
 * content is handed to the frame as `children`: it is built before the frame
 * renders and cannot be told, but it renders INSIDE it and can therefore ask.
 * One observer on the card answers for everything in it.
 *
 * `undefined` outside a `Widget`: NOT the narrow card, just no card at all. The
 * two differ for anything sizing itself off the answer — a row in a dialog has
 * the room of a wide one, so it must not inherit the narrow card compromise.
 */
const WidgetIsWideContext = React.createContext<boolean | undefined>(undefined)

/** Whether the surrounding card is wide; `false` when there is no card. */
export const useWidgetIsWide = () =>
  React.useContext(WidgetIsWideContext) ?? false

/** As {@link useWidgetIsWide}, but `undefined` tells you there is NO card. */
export const useWidgetIsWideOrUnset = () =>
  React.useContext(WidgetIsWideContext)

/**
 * The TITLE AS A LINK: title text plus a chevron, in one target that behaves like
 * a ghost button — a tint on hover, a ring on focus. The negative margin with the
 * matching padding is what keeps the title on the same line it sits on when it is
 * NOT a link, so the header doesn't shift between the two.
 */
const TITLE_LINK_CLASS = cn(
  "-mx-1.5 inline-flex min-w-0 items-center gap-1 rounded-sm px-1.5 py-0.5",
  "border-none bg-transparent text-left no-underline",
  // The COLOUR lives here, on the link, for two reasons: an anchor otherwise
  // falls back to the browser's blue, and `F0Icon` paints itself from
  // `currentColor` — so the chevron is the title's colour by inheritance rather
  // than by being told twice.
  "text-f1-foreground",
  "cursor-pointer transition-colors hover:bg-f1-background-secondary-hover",
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"
)

/**
 * The widget's title, linked or not. Linked, it is a real anchor when it has a
 * `url` (so it can be opened in a new tab, copied, middle-clicked — and only
 * ANOTHER HOST opens a tab by itself) and a button when all it has is an
 * `onClick`.
 */
const WidgetTitle = ({
  title,
  link,
  isWide,
}: {
  title: string
  link?: NonNullable<WidgetProps["header"]>["link"]
  /** The card has room: the title steps up a size (see {@link WIDE_WIDGET_PX}). */
  isWide?: boolean
}) => {
  // `text-lg` IS the design's wide title, token for token: 1rem on a 1.5rem line
  // box at -0.01em (f0's `fontSize.lg`), `font-semibold` for its 600 — the one
  // thing `CardTitle`'s own `font-medium` doesn't already give. Its `m-0`,
  // `text-left` and `hsl(var(--neutral-100))` are the h3's computed values here
  // and `text-f1-foreground` respectively, so nothing needs to say them twice.
  //
  // 24px is also the `min-h-6` the header row already reserves, so growing the
  // title never moves anything beside it.
  const titleClass = cn("truncate", isWide && "text-lg font-semibold")

  if (!link) return <CardTitle className={titleClass}>{title}</CardTitle>

  const content = (
    <>
      <CardTitle className={titleClass}>{title}</CardTitle>
      {/* No colour of its own: `currentColor` makes it exactly the title's, and
          the two read as ONE label rather than a label beside a control. */}
      <F0Icon size="sm" icon={link.icon ?? ChevronRight} />
    </>
  )

  // `aria-label` names the DESTINATION while the visible text stays the title.
  // The title is contained in it ("Communications" in "Go to Communications"),
  // which is what WCAG's label-in-name asks for.
  const control = link.url ? (
    <Link
      href={link.url}
      onClick={link.onClick}
      aria-label={link.title}
      className={TITLE_LINK_CLASS}
      {...(isExternalHref(link.url)
        ? { target: "_blank" as const, rel: "noreferrer" }
        : {})}
    >
      {content}
    </Link>
  ) : (
    <button
      type="button"
      onClick={link.onClick}
      aria-label={link.title}
      className={TITLE_LINK_CLASS}
    >
      {content}
    </button>
  )

  // The tooltip says WHERE, above the title: the visible text is the widget's
  // name, which tells you what you are looking at but not what clicking it does.
  // Same words as the accessible name, so both audiences get the destination.
  return <Tooltip label={link.title}>{control}</Tooltip>
}

const Container = forwardRef<
  HTMLDivElement,
  WidgetProps & { children: ReactNode }
>(function Container(
  {
    header,
    children,
    action,
    footerClassName,
    summaries,
    alert,
    status,
    fullHeight = false,
    actions,
    headerControls,
    AIButton,
    draggable = false,
    onDragStart,
    onDragEnd,
    isDragging = false,
    selected = false,
  },
  ref
) {
  // The card measures ITSELF, so the ref is both the caller's and ours.
  const cardRef = useRef<HTMLDivElement>(null)
  const composedRef = useComposedRefs(ref, cardRef)
  const isWide = useIsWide(cardRef)

  useEffect(() => {
    if (!isDragging || !onDragEnd) return
    // The pointer can be released anywhere, so the end of a drag is a document
    // concern rather than this card's.
    const handleGlobalMouseUp = () => onDragEnd()
    document.addEventListener("mouseup", handleGlobalMouseUp)
    return () => document.removeEventListener("mouseup", handleGlobalMouseUp)
  }, [isDragging, onDragEnd])

  const t = useI18n()
  const { enabled: privacyModeEnabled, toggle: togglePrivacyMode } =
    usePrivacyMode()

  useEffect(() => {
    if (alert && status) {
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      )
    }
  }, [alert, status])

  const isRealNode = (node: React.ReactNode): boolean => {
    return (
      !!node &&
      !(
        React.isValidElement(node) &&
        node.type === React.Fragment &&
        React.Children.count(node.props.children) === 0
      )
    )
  }

  return (
    <WidgetIsWideContext.Provider value={isWide}>
      <Card
        className={cn(
          fullHeight ? "h-full" : "",
          "relative flex gap-3 border-f1-border-secondary",
          draggable && "hover:border-f1-border-hover",
          selected &&
            "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
          isDragging &&
            "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
        )}
        ref={composedRef}
      >
        {header && (
          <CardHeader className="-mr-1 -mt-1">
            <div className="flex w-full flex-1 flex-col gap-4">
              <div className="flex flex-1 flex-row flex-nowrap items-center justify-between gap-2">
                {draggable && (
                  <div
                    className="-ml-1 flex h-6 w-6 shrink-0 items-center justify-center text-f1-icon-secondary hover:cursor-grab"
                    onMouseDown={onDragStart}
                    data-gs-handle="true"
                  >
                    <F0Icon icon={Handle} size="xs" />
                  </div>
                )}
                {/* `min-w-0` rather than `truncate`: the ellipsis belongs to the
                  TITLE, which carries its own (see `WidgetTitle`), and an
                  `overflow: hidden` here clipped the linked title's hover
                  background where it bleeds past the content box. */}
                <div className="flex min-h-6 min-w-0 grow flex-row items-center gap-1">
                  {header.title && (
                    <WidgetTitle
                      title={header.title}
                      link={header.link}
                      isWide={isWide}
                    />
                  )}
                  {header.subtitle && (
                    <div className="flex flex-row items-center gap-1">
                      <InlineDot />
                      <CardSubtitle className="truncate">
                        {header.subtitle}
                      </CardSubtitle>
                    </div>
                  )}
                  {header.info && (
                    <Tooltip label={header.info}>
                      <F0Icon
                        icon={InfoCircleLine}
                        size="sm"
                        className="text-f1-foreground-secondary"
                      />
                    </Tooltip>
                  )}
                  {header.count && (
                    <div className="ml-0.5">
                      <Counter value={header.count} />
                    </div>
                  )}
                </div>
                <div className="flex flex-row items-center gap-3">
                  {alert && <F0TagAlert text={alert} level="critical" />}
                  {status && (
                    <F0TagStatus text={status.text} variant={status.variant} />
                  )}
                  {headerControls}
                  {AIButton && (
                    <AIButtonComponent
                      size="sm"
                      label={t.ai.ask}
                      onClick={AIButton}
                      icon={OneIcon}
                    />
                  )}
                  {actions && (
                    <DropdownInternal items={actions} align="end">
                      <F0Button
                        icon={Ellipsis}
                        label="Actions"
                        variant="ghost"
                        size="sm"
                        hideLabel
                      />
                    </DropdownInternal>
                  )}
                  {/* No link here: it is the TITLE (see `WidgetTitle`). This
                    corner belongs to the overflow menu. */}
                </div>
              </div>
              {header.comment && (
                <div className="flex flex-row items-center gap-3 overflow-visible">
                  <PrivateBox>
                    <CardComment>{header.comment}</CardComment>
                  </PrivateBox>
                  {!!header.canBeBlurred && (
                    <span>
                      <F0Button
                        icon={privacyModeEnabled ? EyeInvisible : EyeVisible}
                        hideLabel
                        label="hide/show"
                        variant="outline"
                        onClick={togglePrivacyMode}
                        size="sm"
                      />
                    </span>
                  )}
                </div>
              )}
            </div>
          </CardHeader>
        )}
        <CardContent className="flex h-full flex-col gap-4">
          {summaries && (
            <div className="flex flex-row">
              {summaries.map((summary, index) => (
                <div key={index} className="grow">
                  <div className="mb-0.5 text-sm text-f1-foreground-secondary">
                    {summary.label}
                  </div>
                  <div className="flex flex-row items-end gap-0.5 text-2xl font-semibold">
                    {!!summary.prefixUnit && (
                      <div className="text-lg font-medium">
                        {summary.prefixUnit}
                      </div>
                    )}
                    {summary.value}
                    {!!summary.postfixUnit && (
                      <div className="text-lg font-medium">
                        {summary.postfixUnit}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          {React.Children.toArray(children)
            .filter(isRealNode)
            .map((child, index) => {
              return (
                <React.Fragment key={index}>
                  {index > 0 && <Separator bare />}
                  {child}
                </React.Fragment>
              )
            })}
        </CardContent>
        {action && (
          <CardFooter className={cn(footerClassName)}>
            {/* Both are DEFAULTS, not decisions: `action` is spread after them,
              so a widget that asks for a particular variant or size still gets
              it.

              `outline` only once the card is WIDE. In the rail the footer button
              sits directly under a dense stack of rows, and a bordered rectangle
              across the card there reads as one more row; the filled `neutral`
              reads as a control. With the room a wide card has, that fill
              becomes the heaviest thing on the card and the border is enough. */}
            <F0Button
              variant={isWide ? "outline" : "neutral"}
              size={isWide ? "md" : "sm"}
              {...action}
            />
          </CardFooter>
        )}
      </Card>
    </WidgetIsWideContext.Provider>
  )
})

const skeletonVariants = cva({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60",
    },
  },
})

export type WidgetSkeletonProps = {
  header?: {
    title?: string
    subtitle?: string
  }
} & (
  | VariantProps<typeof skeletonVariants>
  | {
      height: "full"
    }
)

const Skeleton = forwardRef<HTMLDivElement, WidgetSkeletonProps>(
  function Skeleton({ header, height }, ref) {
    return (
      <Card
        className={cn(
          "flex gap-4 border-f1-border-secondary",
          height === "full" && "h-full"
        )}
        ref={ref}
        aria-live="polite"
        aria-busy={true}
      >
        <CardHeader className="-mr-1 -mt-1">
          <div
            className="flex h-6 w-full flex-row items-center gap-1.5"
            aria-hidden={true}
          >
            {header?.title ? (
              <CardTitle>{header.title}</CardTitle>
            ) : (
              <SkeletonPrimitive className="h-4 w-full max-w-16" />
            )}
            {header?.subtitle && <CardSubtitle>{header.subtitle}</CardSubtitle>}
          </div>
        </CardHeader>
        <CardContent
          aria-hidden={true}
          className={cn(height !== "full" && skeletonVariants({ height }))}
        >
          {[...Array(4)].map((_, i) => (
            <SkeletonPrimitive
              key={i}
              className={`mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][i]}`}
            />
          ))}
        </CardContent>
      </Card>
    )
  }
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Widget = withDataTestId(
  experimentalComponent("Widget", withSkeleton(Container, Skeleton))
)
