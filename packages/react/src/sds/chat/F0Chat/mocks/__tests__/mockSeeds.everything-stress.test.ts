import { describe, expect, it } from "vitest"

import { isUserMessage } from "../../types"
import { initialConvState, SEED_BY_ID } from "../mockSeeds"

describe("Everything Chat stress seed", () => {
  const seed = SEED_BY_ID.get("grp-everything-stress")

  it("provides an extremely long paginated and unread transcript", () => {
    expect(seed).toBeDefined()
    expect(seed?.lines.length).toBeGreaterThan(380)
    expect(seed).toMatchObject({
      type: "group",
      unread: 40,
      olderPages: 10,
      pinned: true,
      alwaysTyping: true,
      multiTyping: true,
      myRole: "admin",
    })
  })

  it("contains every supported rich message shape", () => {
    const messages = seed?.lines.filter((line) => !("system" in line)) ?? []
    const attachments = messages.flatMap((message) => message.attachments ?? [])
    const files = attachments.filter((attachment) => attachment.kind === "file")
    const fileNames = files.map((attachment) => attachment.name)

    expect(new Set(attachments.map((attachment) => attachment.kind))).toEqual(
      new Set(["image", "file", "location", "voice"])
    )
    expect(fileNames).toEqual(
      expect.arrayContaining([
        "extremely-long-report.pdf",
        "annual-model.xlsx",
        "all-offices.csv",
        "customer-handoff.docx",
        "release-notes.md",
        "worker-output.txt",
        "product-walkthrough.webm",
        "launch-deck.pptx",
        "archive-upload.zip",
      ])
    )
    expect(files.some((attachment) => attachment.progress === 63)).toBe(true)
    expect(messages.some((message) => message.replyToIndex != null)).toBe(true)
    expect(messages.some((message) => message.mentions?.length)).toBe(true)
    expect(messages.some((message) => message.mentionedEveryone)).toBe(true)
    expect(messages.some((message) => message.reactions?.length)).toBe(true)
    expect(messages.some((message) => message.linkPreviews?.length === 1)).toBe(
      true
    )
    expect(messages.some((message) => message.linkPreviews?.length === 2)).toBe(
      true
    )
    expect(messages.some((message) => message.deleted)).toBe(true)
    expect(messages.some((message) => message.edited)).toBe(true)
  })

  it("covers every outgoing status and membership event", () => {
    const messages = seed?.lines.filter((line) => !("system" in line)) ?? []
    const systemEvents =
      seed?.lines.flatMap((line) =>
        "system" in line ? [line.system.event] : []
      ) ?? []

    expect(
      new Set(messages.flatMap((message) => message.status ?? []))
    ).toEqual(new Set(["sending", "sent", "delivered", "read", "failed"]))
    expect(new Set(systemEvents)).toEqual(
      new Set(["member.added", "member.removed", "member.left"])
    )
    expect(messages.some((message) => message.readByCount === 57)).toBe(true)
    expect(messages.some((message) => (message.readBy?.length ?? 0) > 40)).toBe(
      true
    )
  })

  it("propagates the special states into the runtime messages", () => {
    const messages = initialConvState(seed!).messages.filter(isUserMessage)
    const failed = messages.find((message) => message.status === "failed")
    const sending = messages.find((message) => message.status === "sending")

    expect(failed).toMatchObject({
      failureReason: "Simulated network error for the stress fixture",
    })
    expect(failed?.readAt).toBeUndefined()
    expect(sending?.readAt).toBeUndefined()
    expect(messages.some((message) => message.deleted)).toBe(true)
    expect(messages.some((message) => message.editedAt)).toBe(true)
    expect(messages.some((message) => message.readByCount === 57)).toBe(true)
  })
})
