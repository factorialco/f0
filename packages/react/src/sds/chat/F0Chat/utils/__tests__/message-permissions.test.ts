import { describe, expect, it } from "vitest"

import { type F0ChatMessage } from "../../types"
import { canEditChatMessage } from "../message-permissions"

const message = (overrides: Partial<F0ChatMessage> = {}): F0ChatMessage => ({
  id: "m1",
  author: { id: "me", name: "Me" },
  body: "Hi",
  createdAt: new Date().toISOString(),
  isMine: true,
  ...overrides,
})

const withHandler = { hasEditMessage: true }

describe("canEditChatMessage", () => {
  it("allows editing my own recent message", () => {
    expect(canEditChatMessage(message(), withHandler)).toBe(true)
  })

  it("refuses when the host provides no editMessage handler", () => {
    expect(canEditChatMessage(message(), { hasEditMessage: false })).toBe(false)
  })

  it("refuses someone else's message by default", () => {
    expect(canEditChatMessage(message({ isMine: false }), withHandler)).toBe(
      false
    )
  })

  it("refuses a tombstone", () => {
    expect(canEditChatMessage(message({ deleted: true }), withHandler)).toBe(
      false
    )
  })

  it("refuses a message that has not settled server-side", () => {
    expect(
      canEditChatMessage(message({ status: "sending" }), withHandler)
    ).toBe(false)
    expect(canEditChatMessage(message({ status: "failed" }), withHandler)).toBe(
      false
    )
  })

  it("refuses a voice note — there is no text to change", () => {
    const voiceNote = message({
      body: "",
      attachments: [{ kind: "voice", url: "https://example.test/a.ogg" }],
    })
    expect(canEditChatMessage(voiceNote, withHandler)).toBe(false)
  })

  it("applies the edit window to my own messages", () => {
    const old = new Date(Date.now() - 10 * 60 * 1000).toISOString()
    expect(
      canEditChatMessage(message({ createdAt: old }), {
        ...withHandler,
        editWindowMs: 5 * 60 * 1000,
      })
    ).toBe(false)
    expect(
      canEditChatMessage(message({ createdAt: old }), {
        ...withHandler,
        editWindowMs: 30 * 60 * 1000,
      })
    ).toBe(true)
  })

  it("has no time limit when no edit window is set", () => {
    const ancient = new Date(2020, 0, 1).toISOString()
    expect(
      canEditChatMessage(message({ createdAt: ancient }), withHandler)
    ).toBe(true)
  })

  it("lets a host capability replace the owner and window policy", () => {
    const old = new Date(2020, 0, 1).toISOString()
    const theirs = message({ isMine: false, createdAt: old })
    expect(
      canEditChatMessage(theirs, {
        ...withHandler,
        editWindowMs: 1000,
        capabilities: { canEditMessage: () => true },
      })
    ).toBe(true)
    expect(
      canEditChatMessage(message(), {
        ...withHandler,
        capabilities: { canEditMessage: () => false },
      })
    ).toBe(false)
  })

  it("keeps the voice-note and tombstone rules above any capability", () => {
    const capabilities = { canEditMessage: () => true }
    expect(
      canEditChatMessage(message({ deleted: true }), {
        ...withHandler,
        capabilities,
      })
    ).toBe(false)
    expect(
      canEditChatMessage(
        message({
          attachments: [{ kind: "voice", url: "https://example.test/a.ogg" }],
        }),
        { ...withHandler, capabilities }
      )
    ).toBe(false)
  })
})
