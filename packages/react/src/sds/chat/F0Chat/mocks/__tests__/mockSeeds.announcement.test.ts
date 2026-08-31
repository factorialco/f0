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

  it("is the two messages in the design: a greeting and a card", () => {
    const messages = buildSeedMessages(seed!).filter(isUserMessage)
    expect(messages).toHaveLength(2)
    expect(messages[0]?.body).toContain("This is your team's chat")
    expect(messages[0]?.attachments).toBeUndefined()

    const card = messages[1]?.attachments?.[0]
    expect(card).toMatchObject({
      kind: "card",
      title: "Give your team access",
    })
    expect(messages[1]?.body).toBe("")
  })

  // Both land on the same day, so the transcript shows exactly one separator.
  it("anchors both posts to yesterday evening", () => {
    const messages = buildSeedMessages(seed!)
    const days = messages.map((m) => new Date(m.createdAt).getDate())
    expect(new Set(days).size).toBe(1)

    const [first, second] = messages
    expect(new Date(first!.createdAt).getHours()).toBe(22)
    // The card is the more recent of the two.
    expect(new Date(second!.createdAt).getTime()).toBeGreaterThan(
      new Date(first!.createdAt).getTime()
    )
  })
})
