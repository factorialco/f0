import { describe, expect, it } from "vitest"

import { getAvatarColor } from "@/components/avatars/internal/BaseAvatar/utils"
import { internalAvatarColors } from "@/ui/Avatar"

import {
  f0ChatSenderColors,
  type F0ChatSenderColor,
  type F0ChatUser,
} from "../../types"
import { senderBubbleColorClass, senderNameColorClass } from "../sender-color"

const user = (
  id: string,
  name: string,
  avatar?: F0ChatUser["avatar"]
): F0ChatUser => ({ id, name, avatar })

const darkNameWhiteMix: Record<F0ChatSenderColor, number> = {
  viridian: 15,
  malibu: 15,
  yellow: 10,
  purple: 25,
  lilac: 20,
  barbie: 20,
  smoke: 15,
  army: 30,
  flubber: 10,
  indigo: 30,
  camel: 20,
  radical: 30,
  orange: 10,
  red: 15,
  grass: 10,
}

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
    const nameHue = nameClass.match(/colors\.([a-z]+)\.70/)?.[1]

    expect(nameHue).toBeDefined()
    expect(bubbleClass).toContain(`colors.${nameHue}.50`)
    expect(bubbleClass).toContain(
      `hsl(theme(colors.${nameHue}.50))_4%,color-mix(in_srgb,hsl(var(--neutral-100))_3%,hsl(var(--neutral-0)))`
    )
    expect(bubbleClass).toContain(
      `dark:bg-[color-mix(in_srgb,hsl(theme(colors.${nameHue}.50))_8%`
    )
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
        [
          "dark:bg-[color-mix(in_srgb,hsl(theme(colors.",
          color,
          ".50))_8%",
        ].join("")
      )
      if (color === "orange" || color === "grass") {
        expect(senderNameColorClass(sender)).toContain("black_6%")
      }
    }
  )
})
