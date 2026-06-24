import { getAvatarColor } from "@/components/avatars/internal/BaseAvatar/utils"
import { internalAvatarColors } from "@/ui/Avatar"

import { type F0ChatUser } from "../types"

/**
 * Per-sender name colour for group messages (WhatsApp-style): the sender name
 * is tinted to match their avatar. We reuse the avatar's own hash
 * ({@link getAvatarColor}) on the same input the avatar uses, then map to the
 * darker `.70` shade of that hue so it stays legible on the light bubble (the
 * avatar fill uses `.50`).
 *
 * Class strings are full literals (not built dynamically) so Tailwind's scanner
 * generates them.
 */
const NAME_COLOR_CLASS: Record<(typeof internalAvatarColors)[number], string> =
  {
    viridian: "text-[hsl(theme(colors.viridian.70))]",
    malibu: "text-[hsl(theme(colors.malibu.70))]",
    yellow: "text-[hsl(theme(colors.yellow.70))]",
    purple: "text-[hsl(theme(colors.purple.70))]",
    lilac: "text-[hsl(theme(colors.lilac.70))]",
    barbie: "text-[hsl(theme(colors.barbie.70))]",
    smoke: "text-[hsl(theme(colors.smoke.70))]",
    army: "text-[hsl(theme(colors.army.70))]",
    flubber: "text-[hsl(theme(colors.flubber.70))]",
    indigo: "text-[hsl(theme(colors.indigo.70))]",
    camel: "text-[hsl(theme(colors.camel.70))]",
  }

/** The hash input must match what the avatar uses, so name + dot agree. */
const colorSeed = (user: F0ChatUser): string =>
  user.avatar?.type === "person"
    ? `${user.avatar.firstName}${user.avatar.lastName ?? ""}`
    : user.name

/** Tailwind text-colour class for a group sender's name, matching their avatar. */
export const senderNameColorClass = (user: F0ChatUser): string =>
  NAME_COLOR_CLASS[getAvatarColor(colorSeed(user)) ?? "viridian"]
