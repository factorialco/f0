import { describe, expect, it } from "vitest"

import { chatPermission, type F0ChatPermission } from "../capabilities"

const PERMISSIONS: F0ChatPermission[] = [
  "canSend",
  "canReply",
  "canReact",
  "canUpload",
  "canCopy",
  "canViewInfo",
]

describe("chatPermission", () => {
  it.each(PERMISSIONS)("allows %s by default in a dm", (permission) => {
    expect(chatPermission(permission, "dm", undefined)).toBe(true)
  })

  it.each(PERMISSIONS)("allows %s by default in a group", (permission) => {
    expect(chatPermission(permission, "group", undefined)).toBe(true)
  })

  // The whole point of the type: a noticeboard is read-only with no config.
  it.each(PERMISSIONS)(
    "denies %s by default in an announcement channel",
    (permission) => {
      expect(chatPermission(permission, "announcement", undefined)).toBe(false)
    }
  )

  it("lets the host turn a permission back on in an announcement channel", () => {
    // The admin who actually posts the announcements.
    const capabilities = { canSend: true }
    expect(chatPermission("canSend", "announcement", capabilities)).toBe(true)
    // …and nothing else comes along for the ride.
    expect(chatPermission("canReact", "announcement", capabilities)).toBe(false)
  })

  it("lets the host deny a permission in an ordinary channel", () => {
    expect(chatPermission("canReact", "group", { canReact: false })).toBe(false)
  })

  // Replying needs a composer to reply into — this is the gate that didn't
  // exist, so Reply focused a composer that wasn't mounted.
  it("follows canSend for canReply when the host doesn't say", () => {
    expect(chatPermission("canReply", "group", { canSend: false })).toBe(false)
    expect(chatPermission("canReply", "group", { canSend: true })).toBe(true)
  })

  it("keeps an explicit canReply over the canSend fallback", () => {
    expect(
      chatPermission("canReply", "group", { canSend: false, canReply: true })
    ).toBe(true)
  })
})
