import { baseColors } from "@factorialco/f0-core"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { forwardRef } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { getAvatarColor } from "@/components/avatars/internal/BaseAvatar/utils"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { DataTestIdWrapper, type WithDataTestIdProps } from "@/lib/data-testid"
import { cn, focusRing } from "@/lib/utils"

export const markerSizes = ["sm", "md", "lg"] as const
export type BaseMapMarkerSize = (typeof markerSizes)[number]

export const markerVariants = [
  "color",
  "icon",
  "letter",
  "person",
  "team",
  "company",
  "image",
] as const
export type BaseMapMarkerVariant = (typeof markerVariants)[number]

// Palette hues plus two neutrals ("neutral" = primary text tone, "grey" =
// secondary) for markers that shouldn't carry any category meaning.
export const markerColors = [
  "neutral",
  "grey",
  "radical",
  "malibu",
  "viridian",
  "flubber",
  "grass",
  "camel",
  "indigo",
  "lilac",
  "orange",
  "purple",
  "yellow",
  "red",
  "army",
  "smoke",
  "barbie",
] as const
export type BaseMapMarkerColor = (typeof markerColors)[number]

// The categorical palette half of `markerColors` (everything but the two
// neutrals), pulled from the core tokens so the values can never drift from
// the f0 palette. No per-hue CSS vars exist (only semantic ones, which remap
// in dark mode), so the raw triplets are the sanctioned source here.
const PALETTE_COLORS = markerColors.filter(
  (c): c is Exclude<BaseMapMarkerColor, "neutral" | "grey"> =>
    c !== "neutral" && c !== "grey"
)

const HUE: Record<BaseMapMarkerColor, string> = {
  neutral: baseColors.grey[100], // primary foreground tone
  grey: baseColors.grey.solid[50], // secondary
  ...(Object.fromEntries(
    PALETTE_COLORS.map((c) => [c, baseColors[c][50]])
  ) as Record<Exclude<BaseMapMarkerColor, "neutral" | "grey">, string>),
}
const hslOf = (c: BaseMapMarkerColor) => `hsl(${HUE[c]})`

// Darkest step of each hue (`<hue>.70`) — used for the label text. The greys
// have no 70 step; `grey` darkens grey.solid.50 by hand.
const HUE_DARK: Record<BaseMapMarkerColor, string> = {
  neutral: baseColors.grey[100],
  grey: "218 14% 30%",
  ...(Object.fromEntries(
    PALETTE_COLORS.map((c) => [c, baseColors[c][70]])
  ) as Record<Exclude<BaseMapMarkerColor, "neutral" | "grey">, string>),
}

/**
 * Raw HSL triplet ("H S% L%") for a palette color, per theme (`.50` light,
 * `.70` dark). For non-DOM consumers that need the sanctioned hue value where
 * the `--<hue>` CSS vars aren't available - e.g. GL line-layer paint, which
 * takes a plain color string. Wrap it as `hsl(...)` at the call site.
 */
export const markerColorTriplet = (c: BaseMapMarkerColor, isDark: boolean) =>
  isDark ? HUE_DARK[c] : HUE[c]

/**
 * The ink color (grey.100) at low opacity - the one shadow tone for markers.
 * Deliberately not a `--neutral-*` var: those invert in dark mode, and a
 * shadow must stay dark on both themes.
 */
export const MARKER_SHADOW_HSL = baseColors.grey[100]

export const markerLabelPlacements = ["right", "bottom", "left", "top"] as const
export type BaseMapMarkerLabelPlacement = (typeof markerLabelPlacements)[number]

/**
 * Every dimension scales proportionally with the marker size (not via a CSS
 * transform), so the relationship between marker, label, border, gap and caret
 * stays constant across sizes. `xl` is not part of the public size prop: it is
 * reserved for the selected state — clicking a marker of any size grows it to
 * `xl` until it is deselected.
 */
export type BaseMapMarkerEffectiveSize = BaseMapMarkerSize | "xl"

export interface BaseMapMarkerMetrics {
  d: number
  border: number
  label: number
  lineH: number
  gap: number
  maxLabelW: number
  caretW: number
  caretH: number
  caretOverlap: number
  shadowY: number
  shadowBlur: number
  icon: "xs" | "sm" | "md" | "lg"
  avatar: "xs" | "sm" | "md" | "lg"
}

const METRICS: Record<BaseMapMarkerEffectiveSize, BaseMapMarkerMetrics> = {
  // Carets are wide (~3/4 of the head) so their flanks continue the circle's
  // curvature - the head melts into a teardrop rather than sprouting a leg.
  // Over half the height tucks behind the head so the tail stays attached.
  sm: {
    d: 16,
    border: 1.5,
    label: 10,
    lineH: 13,
    gap: 2,
    maxLabelW: 96,
    caretW: 14,
    caretH: 10,
    caretOverlap: 5,
    shadowY: 1,
    shadowBlur: 3,
    icon: "xs",
    avatar: "xs",
  },
  md: {
    d: 24,
    border: 2,
    label: 14,
    lineH: 18,
    gap: 3,
    maxLabelW: 132,
    caretW: 22,
    caretH: 14,
    caretOverlap: 7,
    shadowY: 2,
    shadowBlur: 4,
    icon: "sm",
    avatar: "sm",
  },
  lg: {
    d: 32,
    border: 2.5,
    label: 18,
    lineH: 23,
    gap: 4,
    maxLabelW: 168,
    caretW: 29,
    caretH: 18,
    caretOverlap: 9,
    shadowY: 3,
    shadowBlur: 5,
    icon: "md",
    avatar: "md",
  },
  xl: {
    d: 44,
    border: 3,
    label: 20,
    lineH: 26,
    gap: 5,
    maxLabelW: 200,
    caretW: 38,
    caretH: 24,
    caretOverlap: 12,
    shadowY: 4,
    shadowBlur: 7,
    icon: "lg",
    avatar: "lg",
  },
}
export const getMarkerMetrics = (size: BaseMapMarkerEffectiveSize) =>
  METRICS[size]

// --- Selected-pin geometry ------------------------------------------------
// Exported so the map layer's collapse math reasons about the exact same
// footprint the marker renders - one source, no drift.
/** Radius of the dot that marks the coordinate while selected/collapsed. */
export const SELECTED_DOT_R = 5.6
/** Gap between the pin tip and the dot's top edge. */
export const SELECTED_DOT_GAP = 1.5
/**
 * The round head sits this many px lower than a pure pin-tip-to-dot layout
 * would place it, so it reads as dropped toward the dot. The caret's top is
 * raised by the same amount, so the pin tip still meets the dot.
 */
export const SELECTED_HEAD_DROP = 3
/** Y offset of the selected (xl) head group relative to the anchor point. */
export const getSelectedHeadGroupY = (): number => {
  const m = METRICS.xl
  return (
    -(m.d - m.caretOverlap + m.caretH + SELECTED_DOT_R + SELECTED_DOT_GAP) +
    SELECTED_HEAD_DROP
  )
}

interface BaseMapMarkerBaseProps extends WithDataTestIdProps {
  /** Defaults to `"md"`. */
  size?: BaseMapMarkerSize
  /**
   * f0 palette hue (or `neutral` / `grey`) for the `color` / `icon` variants
   * (default `"radical"`). Ignored for avatar/image variants: person / team /
   * company derive their accent (label + dot) from the avatar's own color, and
   * `image` stays neutral.
   */
  color?: BaseMapMarkerColor
  /**
   * Active state: the marker grows to the reserved `xl` size and a white pin
   * indicator drops in underneath.
   */
  selected?: boolean
  /**
   * Collapse to just the coordinate dot (no head, no label). The map uses this
   * to fold a marker out of the way when the selected marker grows over it, so
   * the enlarged head / its dropped label don't clash with a neighbour.
   */
  collapsed?: boolean
  /** Text label. No label is rendered when omitted. */
  label?: string
  /** Toggle the label without removing it (e.g. zoom-dependent). Defaults to `true`. */
  showLabel?: boolean
  /**
   * Where the label sits relative to the marker. Defaults to `"right"`.
   * The map layer flips colliding labels to another side (collision handling
   * lives in F0Map, which knows every marker's screen position).
   */
  labelPlacement?: BaseMapMarkerLabelPlacement
  onClick?: () => void
  ariaLabel?: string
  /** @private */
  className?: string
}

/** The per-variant visual config (the discriminated union half of the props). */
export type BaseMapMarkerVariantProps =
  | { variant?: "color" }
  | { variant: "icon"; icon: IconType }
  | { variant: "letter"; letter: string }
  | { variant: "person"; firstName: string; lastName: string; src?: string }
  | { variant: "team"; name: string; src?: string }
  | { variant: "company"; name: string; src?: string }
  | { variant: "image"; src: string; alt?: string }

export type BaseMapMarkerProps = BaseMapMarkerBaseProps &
  BaseMapMarkerVariantProps

const WHITE = "hsl(var(--white-100))"

const BaseMapMarkerBase = forwardRef<HTMLButtonElement, BaseMapMarkerProps>(
  function BaseMapMarker(props, ref) {
    const {
      size = "md",
      selected = false,
      collapsed = false,
      label,
      showLabel = true,
      labelPlacement = "right",
      onClick,
      ariaLabel,
      dataTestId,
      className,
    } = props
    const variant = props.variant ?? "color"
    // Selected markers always render at the reserved `xl` size.
    const m = METRICS[selected ? "xl" : size]
    const interactive = Boolean(onClick)
    const colored =
      variant === "color" || variant === "icon" || variant === "letter"
    // The name F0Avatar hashes into its "random" color - matched here so the
    // label + dot pick up the same hue the avatar itself shows.
    const avatarColorName =
      variant === "person" && "firstName" in props
        ? props.firstName + props.lastName
        : (variant === "team" || variant === "company") && "name" in props
          ? props.name
          : null
    // Accent = label text + dot color (and the head fill for color/icon/letter):
    //  - color/icon/letter: the hue prop (default radical)
    //  - person: the avatar's own color, or grey when it shows a photo instead
    //    of a colored initials chip
    //  - team/company: the avatar's own color (they always have one)
    //  - image: neutral
    const accentColor: BaseMapMarkerColor = colored
      ? (props.color ?? "radical")
      : avatarColorName
        ? variant === "person" && "src" in props && Boolean(props.src)
          ? "grey"
          : ((getAvatarColor(avatarColorName) ?? "grey") as BaseMapMarkerColor)
        : "neutral"
    const shouldReduceMotion = useReducedMotion()

    // F0Icon sizes in px (w-3/4/5/6) - inlined so the glyph animates its real
    // dimensions with the same transition as the head when growing to xl.
    // Selected (xl) bumps the glyph a couple steps past F0Icon's max so it
    // reads clearly in the enlarged head.
    const iconPx = selected ? 32 : { xs: 12, sm: 16, md: 20, lg: 24 }[m.icon]

    // F0Avatar only has discrete size steps, so it can't animate real
    // dimensions like the icon does. For transition continuity it renders at
    // its base-size step and scales up with the same 200ms curve while
    // selected (vector content, so it stays crisp).
    const AVATAR_PX = { xs: 20, sm: 24, md: 32, lg: 40 } as const
    const baseAvatar = METRICS[size].avatar
    const avatarScale = selected
      ? AVATAR_PX[m.avatar] / AVATAR_PX[baseAvatar]
      : 1
    const scaledAvatar = (avatar: React.ReactNode) => (
      <span
        className="flex shrink-0 items-center justify-center transition-transform duration-200 ease-out"
        style={{ transform: `scale(${avatarScale})` }}
      >
        {avatar}
      </span>
    )

    const inner =
      variant === "color" ? null : variant === "icon" && "icon" in props ? (
        <F0Icon
          icon={props.icon}
          size={m.icon}
          color="#ffffff"
          style={{
            width: iconPx,
            height: iconPx,
            transition: "width 200ms ease-out, height 200ms ease-out",
          }}
        />
      ) : variant === "letter" && "letter" in props ? (
        // A single white glyph (route-stop "A" / "B" ...), sized off the same
        // step as the icon so it animates with the head when growing to xl.
        <span
          aria-hidden
          className="font-semibold leading-none"
          style={{
            color: WHITE,
            fontSize: Math.round(iconPx * 0.78),
            transition: "font-size 200ms ease-out",
          }}
        >
          {props.letter.charAt(0).toUpperCase()}
        </span>
      ) : variant === "person" && "firstName" in props ? (
        scaledAvatar(
          <F0Avatar
            avatar={{
              type: "person",
              firstName: props.firstName,
              lastName: props.lastName,
              src: props.src,
            }}
            size={baseAvatar}
          />
        )
      ) : variant === "team" && "name" in props ? (
        scaledAvatar(
          <F0Avatar
            avatar={{ type: "team", name: props.name, src: props.src }}
            size={baseAvatar}
          />
        )
      ) : variant === "company" && "name" in props ? (
        scaledAvatar(
          <F0Avatar
            avatar={{ type: "company", name: props.name, src: props.src }}
            size={baseAvatar}
          />
        )
      ) : variant === "image" && "src" in props ? (
        <img
          src={props.src}
          alt={"alt" in props ? (props.alt ?? "") : ""}
          className="h-full w-full object-cover"
        />
      ) : null

    // Team/company avatars are rounded squares, not circles: the head wraps
    // around the avatar's own shape (squircle border) instead of clipping it.
    const squircle = variant === "team" || variant === "company"

    // One head for every variant: a face with a scaled white border (f0 white
    // token). The shadow lives on the pin group below, not here, so the head +
    // caret cast a single, united shadow.
    const head = (
      <span
        className="relative z-[1] flex shrink-0 items-center justify-center overflow-hidden border-solid transition-all duration-200 ease-out"
        style={{
          width: m.d,
          height: m.d,
          borderRadius: squircle ? Math.round(m.d * 0.3) : 9999,
          borderWidth: m.border,
          borderColor: WHITE,
          backgroundColor: colored ? hslOf(accentColor) : WHITE,
        }}
      >
        {variant === "color" ? (
          <span
            className="rounded-full transition-all duration-200 ease-out"
            style={{
              width: m.d * 0.36,
              height: m.d * 0.36,
              backgroundColor: WHITE,
            }}
          />
        ) : (
          inner
        )}
      </span>
    )

    // The caret emerges from below the head once the head has (mostly) grown:
    // a short delay syncs it to the 200ms grow transition, and a gentle spring
    // slides it out from behind the circle (over half its height stays tucked,
    // so it never detaches). Wide shoulders continue the circle's curvature;
    // the tip is only slightly rounded.
    const caret = (
      <AnimatePresence>
        {selected && (
          <motion.svg
            key="caret"
            width={m.caretW}
            height={m.caretH}
            viewBox="0 0 16 13"
            aria-hidden
            className="absolute left-1/2"
            style={{
              top: m.d - m.caretOverlap - SELECTED_HEAD_DROP,
              marginLeft: -m.caretW / 2,
              // The pin is always white (the head's tail); the dot below carries
              // the color.
              fill: WHITE,
              // Collapse toward the top edge (into the head), not the center.
              transformOrigin: "50% 0%",
            }}
            // Grows downward out of the head bottom (scaleY from the top edge)
            // toward the dot, then collapses back up into the head on exit.
            // Matched to the 200ms head lift (a touch quicker) so the pin
            // settles exactly as the head finishes rising - no lagging spring.
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.18,
                    ease: "easeOut",
                    opacity: { duration: 0.1 },
                  }
            }
          >
            <path d="M0 0h16c-4.2 3-6.6 6.9-7.4 11.7a0.62 0.62 0 0 1-1.2 0C6.6 6.9 4.2 3 0 0Z" />
          </motion.svg>
        )}
      </AnimatePresence>
    )

    // Head + caret cast one shadow over their united silhouette: drop-shadow
    // on the group composites both, so the caret never sits under the head's
    // own shadow.
    const pinGroup = (
      <span
        className="relative inline-flex"
        style={{
          filter: `drop-shadow(0 ${m.shadowY}px ${m.shadowBlur / 2}px hsl(${MARKER_SHADOW_HSL} / 0.3))`,
        }}
      >
        {caret}
        {head}
      </span>
    )

    // --- Active-state geometry --------------------------------------------
    // The marker anchors at a single point (the coordinate). Idle: the head sits
    // centered on it. Active: a dot marks the point, the head lifts onto the
    // teardrop pin, and the label drops to the bottom. The head grows to xl,
    // but the LABEL keeps its regular size/width (from `base`) - only its
    // position changes - so it reads identically to its idle side placement.
    const base = METRICS[size]
    const half = m.d / 2
    const rDot = SELECTED_DOT_R // dot at the coordinate
    const headGroupY = selected ? getSelectedHeadGroupY() : -half
    // On activate the label always goes to the bottom, below the pin.
    const effPlacement: BaseMapMarkerLabelPlacement = selected
      ? "bottom"
      : labelPlacement
    // Label white halo, sized to the (regular) label.
    const halo = `0 0 ${Math.max(2, Math.round(base.label * 0.28))}px ${WHITE}`
    const haloStack = [
      halo,
      halo,
      `0 1px 2px ${WHITE}`,
      `0 -1px 2px ${WHITE}`,
      `1px 0 2px ${WHITE}`,
      `-1px 0 2px ${WHITE}`,
    ].join(",")
    // The active label stays single-line (same width as its idle right/left
    // placement); only the collision `bottom`/`top` sides wrap up to 4 lines.
    const wraps =
      !selected && (effPlacement === "top" || effPlacement === "bottom")
    const wrapClass = wraps
      ? "line-clamp-4 text-center"
      : selected
        ? "whitespace-nowrap text-center"
        : "whitespace-nowrap"
    // The gap between marker and label is folded into the label's padding, so
    // the whole run (head → pin → dot → label) is one contiguous hit area.
    const bh = base.d / 2
    const labelPos: Record<
      BaseMapMarkerLabelPlacement,
      { transform: string; style: React.CSSProperties }
    > = {
      right: {
        transform: `translate(${bh}px, -50%)`,
        style: { paddingLeft: base.gap },
      },
      left: {
        transform: `translate(calc(-100% - ${bh}px), -50%)`,
        style: { paddingRight: base.gap, textAlign: "right" },
      },
      top: {
        transform: `translate(-50%, calc(-100% - ${bh}px))`,
        style: { paddingBottom: base.gap },
      },
      bottom: {
        transform: `translate(-50%, ${selected ? rDot : bh}px)`,
        style: { paddingTop: base.gap + (selected ? 4 : 0) },
      },
    }
    const lp = labelPos[effPlacement]
    // Positioned relative to the anchor point; transitions smoothly (including
    // from its idle side to the bottom) when the marker becomes active.
    const labelNode = label && showLabel && !collapsed && (
      <span
        className={cn(
          "absolute left-0 top-0 font-semibold leading-tight transition-all duration-200 ease-out",
          wrapClass
        )}
        style={{
          color: `hsl(${HUE_DARK[accentColor]})`,
          fontSize: base.label,
          textShadow: haloStack,
          transform: lp.transform,
          maxWidth: wraps ? base.maxLabelW : undefined,
          ...lp.style,
        }}
      >
        {label}
      </span>
    )

    // Dot at the coordinate - grows in on activate, marking the point the head
    // lifted away from.
    const dot = (
      <span
        aria-hidden
        className="absolute left-0 top-0 rounded-full border-solid transition-all duration-200 ease-out"
        style={{
          width: rDot * 2,
          height: rDot * 2,
          marginLeft: -rDot,
          marginTop: -rDot,
          borderWidth: 1.5,
          borderColor: WHITE,
          backgroundColor: hslOf(accentColor),
          boxShadow: `0 1px 2px hsl(${MARKER_SHADOW_HSL} / 0.3)`,
          transform: `scale(${selected || collapsed ? 1 : 0})`,
          opacity: selected || collapsed ? 1 : 0,
        }}
      />
    )
    // Everything hangs off a single anchor point (the coordinate). The head
    // group lifts up: idle it is centered on the point, active it rises onto
    // the pin whose tip meets the dot.
    const body = (
      <>
        {dot}
        <span
          className="absolute left-0 top-0 transition-all duration-200 ease-out"
          style={{
            transform: `translate(-50%, ${headGroupY}px) scale(${collapsed ? 0 : 1})`,
            opacity: collapsed ? 0 : 1,
          }}
        >
          {pinGroup}
        </span>
        {labelNode}
      </>
    )

    return (
      <DataTestIdWrapper dataTestId={dataTestId}>
        {interactive ? (
          <button
            ref={ref}
            type="button"
            aria-label={ariaLabel}
            aria-pressed={selected}
            onClick={onClick}
            className={cn(
              // Hover grows from the center (transform-only, no extra layout).
              "relative inline-flex cursor-pointer border-0 bg-transparent p-0",
              "transition-transform duration-150 hover:scale-[1.05]",
              focusRing("rounded-full"),
              className
            )}
          >
            {body}
          </button>
        ) : (
          <span
            role="img"
            aria-label={ariaLabel}
            className={cn("relative inline-flex", className)}
          >
            {body}
          </span>
        )}
      </DataTestIdWrapper>
    )
  }
)

BaseMapMarkerBase.displayName = "BaseMapMarker"

/**
 * Internal marker-rendering engine. Exposes every knob (size, selected,
 * caret geometry, label placement) because the map's own internals -
 * collision, selection and clustering - drive them. Not part of the public
 * surface: consumers render markers by passing `F0MapPoint[]` to `F0Map`,
 * which keeps size and behavior uniform.
 */
export const BaseMapMarker = BaseMapMarkerBase
