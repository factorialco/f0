import { type CSSProperties } from "react"
import type { BaseAvatarProps } from "@/components/avatars/internal/BaseAvatar"
import { F0Icon, type F0IconProps, type IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"

/**
 * The tint a row's ICON glyph can carry. f0's NAMED palette — the same hues
 * `ui/Avatar` colours initials with — deliberately, rather than the semantic
 * families (`critical`, `warning`, `positive`): a colour here says which KIND
 * of thing the row is, so a feed can give every category its own without any of
 * them reading as an alert. For "this is urgent", the left kind is `alert`.
 */
export const listIconColors = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel",
] as const

export type ListIconPaletteColor = (typeof listIconColors)[number]

/**
 * A row's glyph tint: one of {@link listIconColors}, or a HEX of your own.
 *
 * Prefer a palette name. Those eleven hues were picked to sit beside each other
 * in one column and to hold up in both themes, which is the whole job here — a
 * feed's glyphs are read as a SET, and a colour chosen per row without seeing
 * the others is how a card ends up with two greens that mean different things.
 *
 * The hex is for the case the palette genuinely cannot serve: a colour that is
 * already data — a calendar's own colour, a module's brand, a category a user
 * picked themselves. It is treated exactly like a palette hue (a tenth of it as
 * the tile, the hue itself as the icon), so a bespoke colour and a named one
 * still draw the same glyph. `#RGB` and `#RRGGBB` both parse; anything else
 * falls back to the plain, untinted glyph rather than drawing nothing.
 */
export type ListIconColor = ListIconPaletteColor | `#${string}`

/**
 * The tinted glyph, one literal class string per colour: Tailwind reads source
 * text, so a class built from a variable never reaches the stylesheet.
 *
 * The tile is the hue at a TENTH of its strength and the icon is the hue
 * itself, which is what keeps a row of them legible side by side — the icons
 * carry the colour, the tiles only suggest it. Dark mode needs the tile
 * stronger to register against the card at all, hence the second value.
 */
const LIST_ICON_TINT: Record<ListIconPaletteColor, string> = {
  viridian:
    "bg-[hsl(theme(colors.viridian.50)_/_0.1)] text-[hsl(theme(colors.viridian.50))] dark:bg-[hsl(theme(colors.viridian.50)_/_0.24)]",
  malibu:
    "bg-[hsl(theme(colors.malibu.50)_/_0.1)] text-[hsl(theme(colors.malibu.50))] dark:bg-[hsl(theme(colors.malibu.50)_/_0.24)]",
  yellow:
    "bg-[hsl(theme(colors.yellow.50)_/_0.1)] text-[hsl(theme(colors.yellow.50))] dark:bg-[hsl(theme(colors.yellow.50)_/_0.24)]",
  purple:
    "bg-[hsl(theme(colors.purple.50)_/_0.1)] text-[hsl(theme(colors.purple.50))] dark:bg-[hsl(theme(colors.purple.50)_/_0.24)]",
  lilac:
    "bg-[hsl(theme(colors.lilac.50)_/_0.1)] text-[hsl(theme(colors.lilac.50))] dark:bg-[hsl(theme(colors.lilac.50)_/_0.24)]",
  barbie:
    "bg-[hsl(theme(colors.barbie.50)_/_0.1)] text-[hsl(theme(colors.barbie.50))] dark:bg-[hsl(theme(colors.barbie.50)_/_0.24)]",
  smoke:
    "bg-[hsl(theme(colors.smoke.50)_/_0.1)] text-[hsl(theme(colors.smoke.50))] dark:bg-[hsl(theme(colors.smoke.50)_/_0.24)]",
  army: "bg-[hsl(theme(colors.army.50)_/_0.1)] text-[hsl(theme(colors.army.50))] dark:bg-[hsl(theme(colors.army.50)_/_0.24)]",
  flubber:
    "bg-[hsl(theme(colors.flubber.50)_/_0.1)] text-[hsl(theme(colors.flubber.50))] dark:bg-[hsl(theme(colors.flubber.50)_/_0.24)]",
  indigo:
    "bg-[hsl(theme(colors.indigo.50)_/_0.1)] text-[hsl(theme(colors.indigo.50))] dark:bg-[hsl(theme(colors.indigo.50)_/_0.24)]",
  camel:
    "bg-[hsl(theme(colors.camel.50)_/_0.1)] text-[hsl(theme(colors.camel.50))] dark:bg-[hsl(theme(colors.camel.50)_/_0.24)]",
}

/**
 * A hex as the `r g b` channels those `rgb(… / …)` classes take — `#4F46E5` →
 * `"79 70 229"`. `#RGB` expands the way CSS expands it; anything else is
 * `undefined`, which is what makes an unusable colour fall back to the plain
 * glyph instead of painting the tile black.
 */
const hexChannels = (hex: string): string | undefined => {
  const digits = hex.slice(1)
  const full =
    digits.length === 3
      ? digits
          .split("")
          .map((digit) => digit + digit)
          .join("")
      : digits
  if (!/^[0-9a-f]{6}$/i.test(full)) {
    return undefined
  }
  const value = parseInt(full, 16)
  return `${(value >> 16) & 255} ${(value >> 8) & 255} ${value & 255}`
}

/**
 * The custom-hex tint. The COLOUR comes in as a CSS variable and the classes
 * stay literal, which is what keeps the two theme steps working: an inline
 * style cannot carry a `dark:` variant, and a Tailwind class cannot carry a
 * value that is only known at runtime. The variable is the seam between them.
 */
const LIST_ICON_TINT_CUSTOM = cn(
  "bg-[rgb(var(--list-icon-tint)_/_0.1)] text-[rgb(var(--list-icon-tint))]",
  "dark:bg-[rgb(var(--list-icon-tint)_/_0.24)]"
)

/** How a glyph paints itself: a palette class, or the variable + its classes. */
export const listIconTint = (
  color: ListIconColor
): { className: string; style?: CSSProperties } | undefined => {
  if (!color.startsWith("#")) {
    return { className: LIST_ICON_TINT[color as ListIconPaletteColor] }
  }

  const channels = hexChannels(color)
  return channels
    ? {
        className: LIST_ICON_TINT_CUSTOM,
        style: { "--list-icon-tint": channels } as CSSProperties,
      }
    : undefined
}

/** Every glyph size a `list` row draws at — see {@link listGlyphSize}. */
export type ListGlyphSize = "sm" | "md" | "lg"

/** The same box `F0AvatarIcon` draws, so a tinted row lines up with a plain one. */
const LIST_ICON_SIZE = {
  sm: "size-6 rounded-sm",
  md: "size-8 rounded",
  lg: "size-10 rounded-md",
} satisfies Record<ListGlyphSize, string>

/**
 * A list row's icon glyph WITH A TINT. Its own component rather than a prop on
 * `F0AvatarIcon`, which is deliberately neutral (a white tile with a border):
 * colouring a glyph is a decision a surface makes, not one the avatar makes.
 * Without a `color` a row draws the plain `F0AvatarIcon` instead; this is the
 * same box either way.
 *
 * Shared, because two surfaces draw it: the Home's `list` slot and the
 * `OneDataCollection` list visualization.
 */
export const ListIconGlyph = ({
  icon,
  tint,
  size,
  state,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: {
  icon: IconType
  tint: NonNullable<ReturnType<typeof listIconTint>>
  size: ListGlyphSize
  state?: F0IconProps["state"]
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>) => (
  <div
    className={cn(
      "flex aspect-square items-center justify-center",
      LIST_ICON_SIZE[size],
      tint.className
    )}
    style={tint.style}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
  >
    {/* No `color`: F0Icon defaults to `currentColor`, which the tile's own
        `text-` class has already set to the hue. */}
    <F0Icon icon={icon} size={size} state={state} />
  </div>
)
