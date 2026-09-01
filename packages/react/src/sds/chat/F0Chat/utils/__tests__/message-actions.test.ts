import { describe, expect, it } from "vitest"

import { type F0ChatMessage } from "../../types"
import {
  canEditAction,
  hasAnyMessageAction,
  type MessageActionContext,
} from "../message-actions"

const message: F0ChatMessage = {
  id: "m1",
  author: { id: "other", name: "Factorial" },
  body: "Q2 results are out",
  createdAt: new Date().toISOString(),
  isMine: false,
}

const context = (
  overrides: Partial<MessageActionContext> = {}
): MessageActionContext => ({
  message,
  isMine: false,
  channelType: "group",
  capabilities: undefined,
  hasEditMessage: false,
  ...overrides,
})

describe("hasAnyMessageAction", () => {
  it("is true in an ordinary channel — Info and Copy always survive", () => {
    expect(hasAnyMessageAction(context())).toBe(true)
  })

  // The reason the ellipsis exists at all: with nothing behind it, it opens an
  // empty popover.
  it("is false in an announcement channel", () => {
    expect(hasAnyMessageAction(context({ channelType: "announcement" }))).toBe(
      false
    )
  })

  it("comes back to life when the host grants one verb", () => {
    expect(
      hasAnyMessageAction(
        context({
          channelType: "announcement",
          capabilities: { canCopy: true },
        })
      )
    ).toBe(true)
  })

  it("survives on delete alone for a moderator in a locked-down channel", () => {
    expect(
      hasAnyMessageAction(
        context({
          channelType: "announcement",
          capabilities: { canDeleteMessage: () => true },
        })
      )
    ).toBe(true)
  })
})

describe("canEditAction", () => {
  it("needs the host to provide editMessage", () => {
    expect(canEditAction(context({ isMine: true }))).toBe(false)
    expect(canEditAction(context({ isMine: true, hasEditMessage: true }))).toBe(
      true
    )
  })

  // Neither has an affordance in the composer, so loading one into it could
  // only drop it on save.
  it.each(["voice", "card"] as const)(
    "refuses to edit a message carrying a %s attachment",
    (kind) => {
      const withAttachment: F0ChatMessage = {
        ...message,
        attachments: [
          kind === "voice"
            ? { kind: "voice", url: "/note.mp3" }
            : { kind: "card", title: "Set up the chat for your company" },
        ],
      }
      expect(
        canEditAction(
          context({
            message: withAttachment,
            isMine: true,
            hasEditMessage: true,
          })
        )
      ).toBe(false)
    }
  )

  it("respects the edit window", () => {
    const old: F0ChatMessage = {
      ...message,
      createdAt: new Date(Date.now() - 60 * 60_000).toISOString(),
    }
    expect(
      canEditAction(
        context({
          message: old,
          isMine: true,
          hasEditMessage: true,
          editWindowMs: 60_000,
        })
      )
    ).toBe(false)
  })
})
