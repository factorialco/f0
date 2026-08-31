import { getAvatarColor } from "@/components/avatars/internal/BaseAvatar/utils"

import { type F0ChatSenderColor, type F0ChatUser } from "../types"

/**
 * Per-sender name colour for group messages (WhatsApp-style): the sender name
 * is tinted to match their avatar. We reuse the avatar's own hash
 * ({@link getAvatarColor}) on the same input the avatar uses.
 *
 * Light mode uses the darker `.70` shade so it reads on the light bubble. Dark
 * mode uses the smallest per-hue white mix that keeps AA contrast against the
 * bubble tint below (worst case: the reply quote's 8% white overlay on top of
 * it), preserving more chroma than desaturating every colour by the same step.
 *
 * Class strings are full literals (not built dynamically) so Tailwind's scanner
 * generates them.
 */
const NAME_COLOR_CLASS: Record<F0ChatSenderColor, string> = {
  viridian:
    "text-[hsl(theme(colors.viridian.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.viridian.50)),white_30%)]",
  malibu:
    "text-[hsl(theme(colors.malibu.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.malibu.50)),white_20%)]",
  yellow:
    "text-[color-mix(in_srgb,hsl(theme(colors.yellow.70)),black_16%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.yellow.50)),white_10%)]",
  purple:
    "text-[hsl(theme(colors.purple.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.purple.50)),white_35%)]",
  lilac:
    "text-[hsl(theme(colors.lilac.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.lilac.50)),white_30%)]",
  barbie:
    "text-[hsl(theme(colors.barbie.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.barbie.50)),white_25%)]",
  smoke:
    "text-[hsl(theme(colors.smoke.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.smoke.50)),white_25%)]",
  army: "text-[hsl(theme(colors.army.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.army.50)),white_45%)]",
  flubber:
    "text-[color-mix(in_srgb,hsl(theme(colors.flubber.70)),black_10%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.flubber.50)),white_10%)]",
  indigo:
    "text-[hsl(theme(colors.indigo.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.indigo.50)),white_45%)]",
  camel:
    "text-[hsl(theme(colors.camel.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.camel.50)),white_25%)]",
  radical:
    "text-[hsl(theme(colors.radical.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.radical.50)),white_45%)]",
  orange:
    "text-[color-mix(in_srgb,hsl(theme(colors.orange.70)),black_6%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.orange.50)),white_15%)]",
  red: "text-[hsl(theme(colors.red.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.red.50)),white_25%)]",
  grass:
    "text-[color-mix(in_srgb,hsl(theme(colors.grass.70)),black_6%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.grass.50)),white_15%)]",
}

/**
 * A tint of the same palette colour used by the sender's name.
 *
 * LIGHT mixes the hue into the themed surface in OKLCH. The percentages are
 * solved per hue against the mobile app's precomputed bubble palette
 * (`mobile/…/communications/lib/senderColor.ts`): pastel enough to stay quiet,
 * but separated from the white transcript.
 *
 * DARK cannot use the same recipe. `--neutral-0` is grey-100, a *chromatic*
 * navy, so mixing a hue into it at a low percentage barely moves the result:
 * every sender landed within a few units of the same dark blue, and OKLCH's
 * shortest-arc hue interpolation dragged the warm hues the long way round —
 * yellow arrived at #21223c, a purple. Hence a two-part change here:
 *
 * - The base is a near-black neutral (`oklab(0.08 0 0)`). Achromatic, so the
 *   result keeps the source hue exactly instead of fighting the navy.
 * - The space is OKLab rather than OKLCH. With an achromatic endpoint there is
 *   no hue to interpolate, and the rectangular path can't swing round the wheel.
 *
 * Each percentage is then solved so every hue lands on the SAME OKLab lightness
 * (0.30) — the transcript reads evenly whoever is talking, and each bubble sits
 * a clear step above the page (contrast ≈ 1.3, up from ≈ 1.1). Chroma is left
 * to follow the palette, exactly as it does in light mode.
 */
const BUBBLE_COLOR_CLASS: Record<F0ChatSenderColor, string> = {
  viridian:
    "bg-[color-mix(in_oklch,hsl(theme(colors.viridian.50))_16.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.viridian.50))_39%,oklab(0.08_0_0))]",
  malibu:
    "bg-[color-mix(in_oklch,hsl(theme(colors.malibu.50))_24%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.malibu.50))_37%,oklab(0.08_0_0))]",
  yellow:
    "bg-[color-mix(in_oklch,hsl(theme(colors.yellow.50))_20.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.yellow.50))_31%,oklab(0.08_0_0))]",
  purple:
    "bg-[color-mix(in_oklch,hsl(theme(colors.purple.50))_26.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.purple.50))_41%,oklab(0.08_0_0))]",
  lilac:
    "bg-[color-mix(in_oklch,hsl(theme(colors.lilac.50))_20%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.lilac.50))_39.5%,oklab(0.08_0_0))]",
  barbie:
    "bg-[color-mix(in_oklch,hsl(theme(colors.barbie.50))_22.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.barbie.50))_37%,oklab(0.08_0_0))]",
  smoke:
    "bg-[color-mix(in_oklch,hsl(theme(colors.smoke.50))_20%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.smoke.50))_38%,oklab(0.08_0_0))]",
  army: "bg-[color-mix(in_oklch,hsl(theme(colors.army.50))_17%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.army.50))_49.5%,oklab(0.08_0_0))]",
  flubber:
    "bg-[color-mix(in_oklch,hsl(theme(colors.flubber.50))_18.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.flubber.50))_31.5%,oklab(0.08_0_0))]",
  indigo:
    "bg-[color-mix(in_oklch,hsl(theme(colors.indigo.50))_22%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.indigo.50))_47%,oklab(0.08_0_0))]",
  camel:
    "bg-[color-mix(in_oklch,hsl(theme(colors.camel.50))_18.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.camel.50))_38.5%,oklab(0.08_0_0))]",
  radical:
    "bg-[color-mix(in_oklch,hsl(theme(colors.radical.50))_19.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.radical.50))_43%,oklab(0.08_0_0))]",
  orange:
    "bg-[color-mix(in_oklch,hsl(theme(colors.orange.50))_19%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.orange.50))_35%,oklab(0.08_0_0))]",
  red: "bg-[color-mix(in_oklch,hsl(theme(colors.red.50))_21.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.red.50))_36%,oklab(0.08_0_0))]",
  grass:
    "bg-[color-mix(in_oklch,hsl(theme(colors.grass.50))_17.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.grass.50))_36%,oklab(0.08_0_0))]",
}

/** The hash input must match what the avatar uses, so name + dot agree. */
const colorSeed = (user: F0ChatUser): string =>
  user.avatar?.type === "person"
    ? `${user.avatar.firstName}${user.avatar.lastName ?? ""}`
    : user.name

const senderColor = (user: F0ChatUser): F0ChatSenderColor =>
  user.avatarColor ?? getAvatarColor(colorSeed(user)) ?? "viridian"

/** Tailwind text-colour class for a group sender's name, matching their avatar. */
export const senderNameColorClass = (user: F0ChatUser): string =>
  NAME_COLOR_CLASS[senderColor(user)]

/** Tailwind background class for an incoming bubble, matching its sender. */
export const senderBubbleColorClass = (user: F0ChatUser): string =>
  BUBBLE_COLOR_CLASS[senderColor(user)]

/**
 * Background for any top-level surface owned by a message.
 *
 * Own bubbles stay neutral in both themes — `f1-background-tertiary` (4%) no
 * longer separates from the transcript now that the incoming tints are this
 * strong, so this is the `-secondary` step (10%). In dark that lands at the
 * same OKLab lightness as the coloured bubbles, so a run of mine reads as the
 * same weight as everyone else's, only without the hue.
 */
export const messageSurfaceColorClass = (
  user: F0ChatUser,
  isMine: boolean
): string =>
  isMine ? "bg-f1-background-secondary" : senderBubbleColorClass(user)
