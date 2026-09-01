import { describe, expect, it } from "vitest"

import { isUserMessage } from "../../types"
import { buildSeedMessages, SEED_BY_ID, SEEDS } from "../mockSeeds"

describe("the announcement seed", () => {
  const seed = SEED_BY_ID.get("dm-factorial")

  it("leads the list — it's the welcome screen", () => {
    expect(SEEDS[0]?.id).toBe("dm-factorial")
  })

  it("is read-only through its TYPE, not a capabilities flag", () => {
    expect(seed?.type).toBe("announcement")
    expect(seed?.readOnly).toBeUndefined()
    expect(seed?.readOnlyNotice).toBe("Only Factorial can send messages")
  })

  // Same copy as factorial's noticeboard (admin variant).
  it("is the three messages in the design: a greeting, the pitch and a card", () => {
    const messages = buildSeedMessages(seed!).filter(isUserMessage)
    expect(messages).toHaveLength(3)
    expect(messages[0]?.body).toContain("Welcome to your company's chat")
    expect(messages[0]?.attachments).toBeUndefined()
    expect(messages[1]?.body).toContain("No new app, no new password")
    expect(messages[1]?.attachments).toBeUndefined()

    const card = messages[2]?.attachments?.[0]
    expect(card).toMatchObject({
      kind: "card",
      title: "Set up the chat for your company",
    })
    expect(messages[2]?.body).toBe("")
  })

  // They all land on the same day, so the transcript shows exactly one separator.
  it("anchors every post to yesterday evening", () => {
    const messages = buildSeedMessages(seed!)
    const days = messages.map((m) => new Date(m.createdAt).getDate())
    expect(new Set(days).size).toBe(1)

    expect(new Date(messages[0]!.createdAt).getHours()).toBe(22)
    // Oldest first, the card last.
    const times = messages.map((m) => new Date(m.createdAt).getTime())
    expect(times).toEqual([...times].sort((a, b) => a - b))
  })
})
