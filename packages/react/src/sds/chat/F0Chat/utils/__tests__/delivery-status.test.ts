import { describe, expect, it } from "vitest"

import { type F0ChatMessage, type F0ChatMessageStatus } from "../../types"
import { deliveryState } from "../delivery-status"

const message = (
  status: F0ChatMessageStatus | undefined,
  overrides: Partial<F0ChatMessage> = {}
): F0ChatMessage => ({
  id: "m1",
  author: { id: "me", name: "Me" },
  body: "hi",
  createdAt: new Date().toISOString(),
  isMine: true,
  status,
  ...overrides,
})

describe("deliveryState", () => {
  it("reports nothing for a message that isn't mine", () => {
    expect(deliveryState(message("read", { isMine: false }))).toBeNull()
  })

  // Still in flight: the sending clock beside the bubble already covers it.
  it("reports nothing while sending, or without a status at all", () => {
    expect(deliveryState(message("sending"))).toBeNull()
    expect(deliveryState(message(undefined))).toBeNull()
  })

  it("collapses sent and delivered into one state", () => {
    expect(deliveryState(message("sent"))).toBe("sent")
    expect(deliveryState(message("delivered"))).toBe("sent")
  })

  it("reports a failure", () => {
    expect(deliveryState(message("failed"))).toBe("failed")
  })

  it("reads a DM as soon as the host says so", () => {
    expect(deliveryState(message("read"))).toBe("read")
  })

  describe("in a group", () => {
    const inGroup = (memberCount?: number) => ({ isGroup: true, memberCount })

    it("holds at sent until every other member has read it", () => {
      expect(
        deliveryState(message("read", { readByCount: 2 }), inGroup(5))
      ).toBe("sent")
      expect(
        deliveryState(message("read", { readByCount: 4 }), inGroup(5))
      ).toBe("read")
    })

    it("counts readBy identities when the host sends them instead", () => {
      expect(
        deliveryState(
          message("read", {
            readBy: [
              { id: "a", name: "A" },
              { id: "b", name: "B" },
            ],
          }),
          inGroup(3)
        )
      ).toBe("read")
    })

    // Never expose a partial tally as "read".
    it("holds at sent when receipt data is missing", () => {
      expect(deliveryState(message("read"), inGroup(5))).toBe("sent")
    })

    it("trusts the host when the member count is unknown", () => {
      expect(deliveryState(message("read"), inGroup(undefined))).toBe("read")
    })

    it("reads a group of one without waiting for receipts", () => {
      expect(deliveryState(message("read"), inGroup(1))).toBe("read")
    })
  })
})
