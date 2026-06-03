import type { ReactElement } from "react"
import InfoCircleLine from "@factorialco/f0-react/icons/app/InfoCircleLine"

/**
 * Policy alert card. Pixel-decoded from the Figma SVG export
 * (Policies-experience nodes 2584-33704 / 2584-33787). Every
 * dimension, color and radius below is read from the SVG path data,
 * not transcribed from a CSS dump.
 *
 * THREE variants — `success` / `warning` / `error` — share the same
 * geometry; only the strip background, badge fill, label color and
 * glyph change.
 *
 * Decoded geometry (from `viewBox="0 0 472 116"`):
 *   - Outer card radius: 20.9152px (corner cubic-bezier).
 *   - Strip: y=0..56, height 56px, background = variant tint at 10%.
 *   - Body: y=42.928..115.285 (height 72.36px), background white,
 *     1.089px stroke at color #052657 / opacity 0.06.
 *   - Body OVERLAPS the strip's bottom 13.07px — the "negative gap"
 *     from the Figma spec. Implemented via `marginTop: -13.072px`
 *     so the body's white fill + border visually clip the strip's
 *     bottom curve, exactly as the SVG renders it.
 *
 * Strip badge:
 *   - Center (23.07, 21.46), radius 6.67px → ø 13.3px, solid fill in
 *     the variant accent color, white glyph centered. Glyph stroke
 *     1.6px (matches the SVG's stroke-width).
 *
 * Strip label:
 *   - x=41.5, fill = variant accent (e.g. #B3261E for error,
 *     #0B7D58 for success), text-base font-medium.
 *
 * Title row (body):
 *   - Title typography matches the employee-name cell ("Marcus
 *     Lindberg") in DetailsItemsList → PersonItem → ItemContainer:
 *     `text-base font-medium text-f1-foreground` so it follows
 *     light/dark theme like the rest of the detail page.
 *   - Decorative info icon to the right of the title, ø 13.17px,
 *     outline-only, color #011B4B at opacity 0.45.
 *
 * Description:
 *   - Color #011637 at opacity 0.61, 14px regular, line-height 20px.
 */

export type PolicyAlertVariant = "success" | "warning" | "error"

const VARIANT_TOKENS: Record<
  PolicyAlertVariant,
  { stripBg: string; badgeFill: string; labelColor: string }
> = {
  // Decoded from the green-variant Figma export.
  success: {
    stripBg: "rgba(16, 184, 129, 0.10)",
    badgeFill: "#10B881",
    labelColor: "#0B7D58",
  },
  // Decoded from the warning Figma export the designer shared
  // earlier (orange #FD812F at 10% bg, solid badge, darker label).
  warning: {
    stripBg: "rgba(253, 129, 47, 0.10)",
    badgeFill: "#FD812F",
    labelColor: "#A33F00",
  },
  // Decoded from the red-variant Figma export
  // (Policies-experience node 2584-33787): #FF5C4B/0.1 bg, #B3261E
  // solid badge, #B3261E label.
  error: {
    stripBg: "rgba(255, 92, 75, 0.10)",
    badgeFill: "#B3261E",
    labelColor: "#B3261E",
  },
}

const OUTER_RADIUS = "20.9152px"
const STRIP_HEIGHT = "56px"
const BODY_OVERLAP = "13.072px"

export function PolicyAlertCard(props: {
  variant: PolicyAlertVariant
  stripLabel: string
  title: string
  description: string
  /** Optional right-aligned slot on the body header row (e.g. a
   *  "Review" outline button). The component does NOT render any
   *  default action — callers pass the button they want. */
  bodyAction?: ReactElement
}) {
  const { variant, stripLabel, title, description, bodyAction } = props
  const tokens = VARIANT_TOKENS[variant]

  return (
    <div
      className="relative flex flex-col items-stretch self-stretch"
      style={{ borderRadius: OUTER_RADIUS }}
    >
      {/* Strip */}
      <div
        className="flex items-center self-stretch"
        style={{
          height: STRIP_HEIGHT,
          padding: "0 13.072px",
          paddingBottom: "19.608px",
          paddingTop: "6.536px",
          background: tokens.stripBg,
          borderTopLeftRadius: OUTER_RADIUS,
          borderTopRightRadius: OUTER_RADIUS,
        }}
      >
        <div className="flex items-center" style={{ gap: "10px" }}>
          <BadgeIcon variant={variant} fill={tokens.badgeFill} />
          <span
            className="font-medium text-base"
            style={{ color: tokens.labelColor }}
          >
            {stripLabel}
          </span>
        </div>
      </div>

      {/* Body — sits 13.07px on top of the strip via negative margin
          so the white fill + border visually clip the strip's bottom
          curve, exactly as the SVG renders it. */}
      <div
        className="relative flex flex-col items-stretch self-stretch bg-f1-background"
        style={{
          marginTop: `-${BODY_OVERLAP}`,
          padding: "12px 16px 16px 16px",
          gap: "8px",
          borderRadius: OUTER_RADIUS,
          border: "1.089px solid rgba(5, 38, 87, 0.06)",
        }}
      >
        {/* Body row — outer flex (text-block | bodyAction). The
            outer row aligns the action button to the TOP of the
            text block (`items-start`), not its center, so the
            button visually anchors next to the title rather than
            floating between title and description. The inner
            column owns the title/description vertical rhythm at a
            tight 4px gap regardless of whether an action is
            present, which keeps the no-action variant pixel-
            identical to the previous layout. `flex-1` on the
            inner column forces the description to wrap BEFORE it
            collides with the action button — without it, the
            description would flow under the button (the bug from
            the previous justify-between layout). */}
        <div className="flex items-start gap-4 self-stretch">
          <div className="flex flex-1 flex-col items-start gap-1">
            <span className="flex items-center" style={{ gap: "8px" }}>
              <span className="font-medium text-f1-foreground text-base">
                {title}
              </span>
              <InfoGlyph />
            </span>
            <p
              className="m-0"
              style={{
                color: "rgba(1, 22, 55, 0.61)",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "-0.07px",
              }}
            >
              {description}
            </p>
          </div>
          {bodyAction}
        </div>
      </div>
    </div>
  )
}

/**
 * Solid-fill circular badge with a white glyph. Per-variant glyph:
 *   - success → check
 *   - warning → exclamation mark
 *   - error   → exclamation mark (matches F0TagAlert critical:
 *               same glyph, just on a red circle instead of yellow)
 *
 * Why error switched from X to exclamation: aligns with the
 * canonical `F0TagAlert level="critical"` which uses the same
 * exclamation glyph. Keeping both icons identical (only the
 * background color differs) means the eye reads "this is severe"
 * by hue rather than by glyph — consistent with the design
 * system's tag/badge family.
 */
function BadgeIcon({
  variant,
  fill,
}: {
  variant: PolicyAlertVariant
  fill: string
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="8" cy="8" r="6.67" fill={fill} />
      {variant === "success" && (
        <path
          d="M5.0 8.2 L7.2 10.4 L11.2 5.6"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {(variant === "warning" || variant === "error") && (
        <>
          <path
            d="M8 5.2 L8 8.6"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="8" cy="10.6" r="0.9" fill="#FFFFFF" />
        </>
      )}
    </svg>
  )
}

/**
 * Decorative outline-only info icon. Uses the canonical
 * `InfoCircleLine` from `@factorialco/f0-react/icons/app`. Sized to
 * ~13px to match the Figma spec; rendered at `currentColor` with
 * the same low-opacity blue used elsewhere in the card so it reads
 * as decorative metadata rather than an action.
 */
function InfoGlyph() {
  return (
    <InfoCircleLine
      width={14}
      height={14}
      aria-hidden="true"
      style={{
        flexShrink: 0,
        color: "#011B4B",
        opacity: 0.45,
      }}
    />
  )
}
