import { describe, expect, it } from "vitest"

import { getAvatarColor } from "@/components/avatars/internal/BaseAvatar/utils"
import { internalAvatarColors } from "@/ui/Avatar"

import {
  f0ChatSenderColors,
  type F0ChatSenderColor,
  type F0ChatUser,
} from "../../types"
import {
  messageSurfaceColorClass,
  senderBubbleColorClass,
  senderNameColorClass,
} from "../sender-color"

const user = (
  id: string,
  name: string,
  avatar?: F0ChatUser["avatar"]
): F0ChatUser => ({ id, name, avatar })

const darkNameWhiteMix: Record<F0ChatSenderColor, number> = {
  viridian: 30,
  malibu: 20,
  yellow: 10,
  purple: 35,
  lilac: 30,
  barbie: 25,
  smoke: 25,
  army: 45,
  flubber: 10,
  indigo: 45,
  camel: 25,
  radical: 45,
  orange: 15,
  red: 25,
  grass: 15,
}

// Solved per hue so the mix lands on the mobile app's bubble palette (the
// values in mobile/…/communications/lib/senderColor.ts).
const lightBubbleColorMix: Record<F0ChatSenderColor, number> = {
  viridian: 16.5,
  malibu: 24,
  yellow: 20.5,
  purple: 26.5,
  lilac: 20,
  barbie: 22.5,
  smoke: 20,
  army: 17,
  flubber: 18.5,
  indigo: 22,
  camel: 18.5,
  radical: 19.5,
  orange: 19,
  red: 21.5,
  grass: 17.5,
}

// Solved per hue so every dark bubble lands on the same OKLab lightness (0.30)
// against the achromatic base — see the recipe in `sender-color.ts`.
const darkBubbleColorMix: Record<F0ChatSenderColor, number> = {
  viridian: 39,
  malibu: 37,
  yellow: 31,
  purple: 41,
  lilac: 39.5,
  barbie: 37,
  smoke: 38,
  army: 49.5,
  flubber: 31.5,
  indigo: 47,
  camel: 38.5,
  radical: 43,
  orange: 35,
  red: 36,
  grass: 36,
}

// Assembled by `join` rather than interpolated: a template literal that looks
// like a utility makes Tailwind's scanner treat it as a real candidate, and it
// warns about the unresolvable `theme()` on every build.
const lightBubbleColorMixClass = (
  color: F0ChatSenderColor,
  mix: number
): string =>
  [
    "bg-[color-mix(in_oklch,hsl(theme(colors.",
    color,
    `.50))_${mix}%,hsl(var(--neutral-0)))]`,
  ].join("")

const darkBubbleColorMixClass = (
  color: F0ChatSenderColor,
  mix: number
): string =>
  [
    "dark:bg-[color-mix(in_oklab,hsl(theme(colors.",
    color,
    `.50))_${mix}%,oklab(0.08_0_0))]`,
  ].join("")

describe("f0ChatSenderColors", () => {
  it("exposes the complete sender palette", () => {
    expect(f0ChatSenderColors).toEqual([
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
      "radical",
      "orange",
      "red",
      "grass",
    ])
  })
})

describe("senderNameColorClass", () => {
  it("returns a palette text-colour class with a dark-mode variant", () => {
    const cls = senderNameColorClass(user("u1", "Marcus Bennett"))
    // Light: the darker .70 shade.
    expect(cls).toMatch(/text-\[hsl\(theme\(colors\.[a-z]+\.70\)\)\]/)
    // Dark: the same hue receives only the white mix it needs for contrast.
    expect(cls).toMatch(
      /dark:text-\[color-mix\(in_srgb,hsl\(theme\(colors\.[a-z]+\.50\)\),white_\d+%\)\]/
    )
  })

  it("is deterministic for the same person", () => {
    const a = senderNameColorClass(user("u1", "Grace Liang"))
    const b = senderNameColorClass(user("u1", "Grace Liang"))
    expect(a).toBe(b)
  })

  it("hashes the avatar's name parts (matching the avatar colour) when present", () => {
    // Avatar firstName/lastName drive the colour, not the display `name`.
    const withAvatar = senderNameColorClass(
      user("u1", "ignored display", {
        type: "person",
        firstName: "Grace",
        lastName: "Liang",
      })
    )
    const byName = senderNameColorClass(user("u2", "GraceLiang"))
    expect(withAvatar).toBe(byName)
  })
})

describe("senderBubbleColorClass", () => {
  it("uses a soft tint of the same palette hue as the sender name", () => {
    const sender = user("u1", "Marcus Bennett")
    const nameClass = senderNameColorClass(sender)
    const bubbleClass = senderBubbleColorClass(sender)
    const nameHue = nameClass.match(/colors\.([a-z]+)\.70/)?.[1] as
      | F0ChatSenderColor
      | undefined

    if (!nameHue) throw new Error("Expected the sender name hue")
    expect(bubbleClass).toContain(`colors.${nameHue}.50`)
    expect(bubbleClass).toContain(
      lightBubbleColorMixClass(nameHue, lightBubbleColorMix[nameHue])
    )
    expect(bubbleClass).toContain(
      darkBubbleColorMixClass(nameHue, darkBubbleColorMix[nameHue])
    )
    expect(bubbleClass).not.toContain("--neutral-100")
  })

  it("matches the avatar colour seed", () => {
    const withAvatar = senderBubbleColorClass(
      user("u1", "ignored display", {
        type: "person",
        firstName: "Grace",
        lastName: "Liang",
      })
    )
    const byName = senderBubbleColorClass(user("u2", "GraceLiang"))

    expect(withAvatar).toBe(byName)
  })

  it("uses an explicit colour chosen to match a photo avatar", () => {
    const sender = {
      ...user("u1", "Marcus Bennett", {
        type: "person",
        firstName: "Marcus",
        lastName: "Bennett",
        src: "/avatars/person02.jpg",
      }),
      avatarColor: "orange" as const,
    }

    expect(senderNameColorClass(sender)).toContain("colors.orange.70")
    expect(senderBubbleColorClass(sender)).toContain("colors.orange.50")
  })

  it("allows different people to share the same explicit colour", () => {
    const first = {
      ...user("u1", "Marcus Bennett"),
      avatarColor: "orange" as const,
    }
    const second = {
      ...user("u2", "Avery Chen"),
      avatarColor: "orange" as const,
    }

    expect(senderNameColorClass(first)).toBe(senderNameColorClass(second))
    expect(senderBubbleColorClass(first)).toBe(senderBubbleColorClass(second))
  })

  it("stays stable across chat sessions for an image avatar", () => {
    const firstSession = user("u1", "Grace Liang", {
      type: "person",
      firstName: "Grace",
      lastName: "Liang",
      src: "https://example.com/grace.jpg",
    })
    const nextSession = user("u1", "Grace Liang", {
      type: "person",
      firstName: "Grace",
      lastName: "Liang",
      src: "https://example.com/grace.jpg",
    })

    expect(senderBubbleColorClass(firstSession)).toBe(
      senderBubbleColorClass(nextSession)
    )
    expect(senderNameColorClass(firstSession)).toBe(
      senderNameColorClass(nextSession)
    )
  })

  it.each(internalAvatarColors)(
    "keeps the %s palette mapping aligned between avatar, name, and bubble",
    (color) => {
      let index = 0
      let name = `Sender ${index}`
      while (getAvatarColor(name) !== color) {
        index += 1
        name = `Sender ${index}`
      }

      const sender = user(`u-${color}`, name)
      expect(senderNameColorClass(sender)).toContain(`colors.${color}.70`)
      expect(senderBubbleColorClass(sender)).toContain(`colors.${color}.50`)

      if (color === "yellow") {
        expect(senderNameColorClass(sender)).toContain("black_16%")
      }
      if (color === "flubber") {
        expect(senderNameColorClass(sender)).toContain("black_10%")
      }
    }
  )

  it.each(f0ChatSenderColors)(
    "supports the explicit %s sender colour",
    (color: F0ChatSenderColor) => {
      const sender = {
        ...user(`u-${color}`, `Sender ${color}`),
        avatarColor: color,
      }

      expect(senderNameColorClass(sender)).toContain(`colors.${color}.`)
      expect(senderNameColorClass(sender)).toContain(
        [
          "dark:text-[color-mix(in_srgb,hsl(theme(colors.",
          color,
          `.50)),white_${darkNameWhiteMix[color]}%)]`,
        ].join("")
      )
      expect(senderBubbleColorClass(sender)).toContain(`colors.${color}.50`)
      expect(senderBubbleColorClass(sender)).toContain(
        darkBubbleColorMixClass(color, darkBubbleColorMix[color])
      )
      expect(senderBubbleColorClass(sender)).toContain(
        lightBubbleColorMixClass(color, lightBubbleColorMix[color])
      )
      expect(senderBubbleColorClass(sender)).not.toContain("--neutral-100")
      if (color === "orange" || color === "grass") {
        expect(senderNameColorClass(sender)).toContain("black_6%")
      }
    }
  )
})

describe("message surface colour", () => {
  it.each(f0ChatSenderColors)(
    "uses the explicit %s hue for incoming message surfaces",
    (color: F0ChatSenderColor) => {
      const sender = {
        ...user(`u-${color}`, `Sender ${color}`),
        avatarColor: color,
      }

      const main = messageSurfaceColorClass(sender, false)
      expect(main).toBe(senderBubbleColorClass(sender))
    }
  )

  it("keeps my message surface neutral in both themes", () => {
    const sender = user("me", "Me")

    expect(messageSurfaceColorClass(sender, true)).toBe(
      "bg-f1-background-secondary"
    )
  })

  it.each(f0ChatSenderColors)(
    "tints the %s dark bubble against an achromatic base, not the navy surface",
    (color: F0ChatSenderColor) => {
      const dark = senderBubbleColorClass({
        ...user(`u-${color}`, `Sender ${color}`),
        avatarColor: color,
      })
        .split(" ")
        .find((cls) => cls.startsWith("dark:bg-"))

      // Mixing into `--neutral-0` (a chromatic navy) is what flattened every
      // sender into the same blue and sent the warm hues round the wheel.
      expect(dark).not.toContain("--neutral-0")
      expect(dark).toContain("oklab(0.08_0_0)")
      // OKLCH would interpolate the hue; with an achromatic endpoint OKLab
      // can't, which is the whole point.
      expect(dark).toContain("color-mix(in_oklab,")
    }
  )
})
