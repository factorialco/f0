import { getAvatarColor } from "@/components/avatars/internal/BaseAvatar/utils"

import { type F0ChatSenderColor, type F0ChatUser } from "../types"

/**
 * Per-sender name colour for group messages (WhatsApp-style): the sender name
 * is tinted to match their avatar. We reuse the avatar's own hash
 * ({@link getAvatarColor}) on the same input the avatar uses.
 *
 * Light mode uses the darker `.70` shade so it reads on the light bubble. Dark
 * mode uses the smallest per-hue white mix that keeps AA contrast, preserving
 * more chroma than applying the same desaturating mix to every colour.
 *
 * Class strings are full literals (not built dynamically) so Tailwind's scanner
 * generates them.
 */
const NAME_COLOR_CLASS: Record<F0ChatSenderColor, string> = {
  viridian:
    "text-[hsl(theme(colors.viridian.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.viridian.50)),white_15%)]",
  malibu:
    "text-[hsl(theme(colors.malibu.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.malibu.50)),white_15%)]",
  yellow:
    "text-[color-mix(in_srgb,hsl(theme(colors.yellow.70)),black_16%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.yellow.50)),white_10%)]",
  purple:
    "text-[hsl(theme(colors.purple.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.purple.50)),white_25%)]",
  lilac:
    "text-[hsl(theme(colors.lilac.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.lilac.50)),white_20%)]",
  barbie:
    "text-[hsl(theme(colors.barbie.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.barbie.50)),white_20%)]",
  smoke:
    "text-[hsl(theme(colors.smoke.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.smoke.50)),white_15%)]",
  army: "text-[hsl(theme(colors.army.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.army.50)),white_30%)]",
  flubber:
    "text-[color-mix(in_srgb,hsl(theme(colors.flubber.70)),black_10%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.flubber.50)),white_10%)]",
  indigo:
    "text-[hsl(theme(colors.indigo.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.indigo.50)),white_30%)]",
  camel:
    "text-[hsl(theme(colors.camel.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.camel.50)),white_20%)]",
  radical:
    "text-[hsl(theme(colors.radical.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.radical.50)),white_30%)]",
  orange:
    "text-[color-mix(in_srgb,hsl(theme(colors.orange.70)),black_6%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.orange.50)),white_10%)]",
  red: "text-[hsl(theme(colors.red.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.red.50)),white_15%)]",
  grass:
    "text-[color-mix(in_srgb,hsl(theme(colors.grass.70)),black_6%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.grass.50)),white_10%)]",
}

/**
 * A quiet tint of the same palette colour used by the sender's name. Mixing a
 * small amount into the themed neutral surface keeps bubbles calm in both
 * colour modes without changing the message text colour.
 */
const BUBBLE_COLOR_CLASS: Record<F0ChatSenderColor, string> = {
  viridian:
    "bg-[color-mix(in_srgb,hsl(theme(colors.viridian.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.viridian.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  malibu:
    "bg-[color-mix(in_srgb,hsl(theme(colors.malibu.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.malibu.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  yellow:
    "bg-[color-mix(in_srgb,hsl(theme(colors.yellow.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.yellow.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  purple:
    "bg-[color-mix(in_srgb,hsl(theme(colors.purple.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.purple.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  lilac:
    "bg-[color-mix(in_srgb,hsl(theme(colors.lilac.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.lilac.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  barbie:
    "bg-[color-mix(in_srgb,hsl(theme(colors.barbie.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.barbie.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  smoke:
    "bg-[color-mix(in_srgb,hsl(theme(colors.smoke.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.smoke.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  army: "bg-[color-mix(in_srgb,hsl(theme(colors.army.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.army.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  flubber:
    "bg-[color-mix(in_srgb,hsl(theme(colors.flubber.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.flubber.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  indigo:
    "bg-[color-mix(in_srgb,hsl(theme(colors.indigo.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.indigo.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  camel:
    "bg-[color-mix(in_srgb,hsl(theme(colors.camel.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.camel.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  radical:
    "bg-[color-mix(in_srgb,hsl(theme(colors.radical.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.radical.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  orange:
    "bg-[color-mix(in_srgb,hsl(theme(colors.orange.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.orange.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  red: "bg-[color-mix(in_srgb,hsl(theme(colors.red.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.red.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
  grass:
    "bg-[color-mix(in_srgb,hsl(theme(colors.grass.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))] dark:bg-[color-mix(in_srgb,hsl(theme(colors.grass.50))_8%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0))))]",
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
