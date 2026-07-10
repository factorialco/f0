import { getAvatarColor } from "@/components/avatars/internal/BaseAvatar/utils"
import { internalAvatarColors } from "@/ui/Avatar"

import { type F0ChatUser } from "../types"

/**
 * Per-sender name colour for group messages (WhatsApp-style): the sender name
 * is tinted to match their avatar. We reuse the avatar's own hash
 * ({@link getAvatarColor}) on the same input the avatar uses.
 *
 * Light mode uses the darker `.70` shade so it reads on the light bubble; dark
 * mode lightens the same hue (the `.50` shade mixed toward white) because the
 * dark shades disappear on the dark bubble. Same hue, contrast on both themes.
 *
 * Class strings are full literals (not built dynamically) so Tailwind's scanner
 * generates them.
 */
const NAME_COLOR_CLASS: Record<(typeof internalAvatarColors)[number], string> =
  {
    viridian:
      "text-[hsl(theme(colors.viridian.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.viridian.50)),white_35%)]",
    malibu:
      "text-[hsl(theme(colors.malibu.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.malibu.50)),white_35%)]",
    yellow:
      "text-[hsl(theme(colors.yellow.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.yellow.50)),white_35%)]",
    purple:
      "text-[hsl(theme(colors.purple.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.purple.50)),white_35%)]",
    lilac:
      "text-[hsl(theme(colors.lilac.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.lilac.50)),white_35%)]",
    barbie:
      "text-[hsl(theme(colors.barbie.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.barbie.50)),white_35%)]",
    smoke:
      "text-[hsl(theme(colors.smoke.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.smoke.50)),white_35%)]",
    army: "text-[hsl(theme(colors.army.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.army.50)),white_35%)]",
    flubber:
      "text-[hsl(theme(colors.flubber.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.flubber.50)),white_35%)]",
    indigo:
      "text-[hsl(theme(colors.indigo.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.indigo.50)),white_35%)]",
    camel:
      "text-[hsl(theme(colors.camel.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.camel.50)),white_35%)]",
  }

/** The hash input must match what the avatar uses, so name + dot agree. */
const colorSeed = (user: F0ChatUser): string =>
  user.avatar?.type === "person"
    ? `${user.avatar.firstName}${user.avatar.lastName ?? ""}`
    : user.name

/** Tailwind text-colour class for a group sender's name, matching their avatar. */
export const senderNameColorClass = (user: F0ChatUser): string =>
  NAME_COLOR_CLASS[getAvatarColor(colorSeed(user)) ?? "viridian"]
