import { describe, expect, it } from "vitest"

import { type F0ChatUser } from "../../types"
import { senderNameColorClass } from "../sender-color"

const user = (
  id: string,
  name: string,
  avatar?: F0ChatUser["avatar"]
): F0ChatUser => ({ id, name, avatar })

describe("senderNameColorClass", () => {
  it("returns a palette text-colour class with a lighter dark-mode variant", () => {
    const cls = senderNameColorClass(user("u1", "Marcus Bennett"))
    // Light: the darker .70 shade.
    expect(cls).toMatch(/text-\[hsl\(theme\(colors\.[a-z]+\.70\)\)\]/)
    // Dark: the same hue lightened so it reads on the dark bubble.
    expect(cls).toMatch(
      /dark:text-\[color-mix\(in_srgb,hsl\(theme\(colors\.[a-z]+\.50\)\),white_35%\)\]/
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
