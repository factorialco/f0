import { describe, expect, it, vi } from "vitest"

import { Microphone, Phone, VideoRecorder } from "@/icons/app"

import {
  ACTION_GAP,
  ACTION_SIZE,
  LEAVE_SIZE,
  OVERFLOW_SLOT,
  collapseActions,
} from "../components/controls/collapse-actions"
import { mergeActions } from "../components/controls/merge-actions"
import { type F0MeetingAction } from "../types"

const action = (
  id: string,
  overrides: Partial<F0MeetingAction> = {}
): F0MeetingAction => ({
  id,
  label: id,
  icon: Microphone,
  ...overrides,
})

const CORE: F0MeetingAction[] = [
  action("core:microphone", { pinned: true, priority: 90, group: "media" }),
  action("core:camera", {
    pinned: true,
    priority: 80,
    group: "media",
    icon: VideoRecorder,
  }),
  action("core:screenShare", { priority: 60, group: "media" }),
  action("core:leave", {
    pinned: true,
    priority: 100,
    group: "leave",
    icon: Phone,
  }),
]

/**
 * Bar width with room for `slots` icon-sized controls plus the permanent
 * overflow button. `extra` covers controls wider than an icon — "Leave"
 * carries its label, so the bar's arithmetic has to know it is 72 and not 40.
 */
const widthFor = (slots: number, extra = 0): number =>
  slots * (ACTION_SIZE + ACTION_GAP) -
  ACTION_GAP +
  extra +
  OVERFLOW_SLOT +
  ACTION_GAP

describe("mergeActions", () => {
  it("keeps the core actions when the host adds nothing", () => {
    expect(mergeActions(CORE).map((item) => item.id)).toEqual(
      CORE.map((item) => item.id)
    )
  })

  it("patches a core action instead of duplicating it", () => {
    const merged = mergeActions(CORE, [
      action("core:microphone", { label: "Silenciar" }),
    ])
    expect(merged.filter((item) => item.id === "core:microphone")).toHaveLength(
      1
    )
    expect(merged.find((item) => item.id === "core:microphone")?.label).toBe(
      "Silenciar"
    )
    // The untouched fields survive the patch.
    expect(merged.find((item) => item.id === "core:microphone")?.pinned).toBe(
      true
    )
  })

  it("accepts a patch that only names the id", () => {
    const merged = mergeActions(CORE, [
      { id: "core:microphone", label: "Mute" },
    ])
    const patched = merged.find((item) => item.id === "core:microphone")
    expect(patched?.label).toBe("Mute")
    expect(patched?.icon).toBe(Microphone)
    expect(patched?.priority).toBe(90)
  })

  it("warns instead of rendering a patch for an id that does not exist", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
    const merged = mergeActions(CORE, [
      { id: "core:raiseHand", label: "Raise" },
    ])
    expect(merged.map((item) => item.id)).not.toContain("core:raiseHand")
    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })

  it("appends unknown host actions", () => {
    const merged = mergeActions(CORE, [action("chat"), action("people")])
    expect(merged.map((item) => item.id)).toContain("chat")
    expect(merged.map((item) => item.id)).toContain("people")
  })

  it("lets the host hide a synthesized action", () => {
    const merged = mergeActions(CORE, [
      action("core:screenShare", { hidden: true }),
    ])
    expect(merged.map((item) => item.id)).not.toContain("core:screenShare")
  })

  it("respects an explicit order and leaves unlisted ids after it", () => {
    const merged = mergeActions(
      CORE,
      [action("chat")],
      ["core:leave", "chat", "core:microphone"]
    )
    expect(merged.slice(0, 3).map((item) => item.id)).toEqual([
      "core:leave",
      "chat",
      "core:microphone",
    ])
  })
})

describe("collapseActions", () => {
  const many = [
    ...CORE,
    action("chat", { priority: 50, group: "collab" }),
    action("people", { priority: 45, group: "collab" }),
    action("notes", { priority: 20, group: "collab" }),
    action("settings", { priority: 10, group: "system" }),
  ]

  it("shows everything when there is room", () => {
    const { visible, overflow } = collapseActions(
      many,
      widthFor(many.length, LEAVE_SIZE - ACTION_SIZE),
      "fullscreen"
    )
    expect(visible).toHaveLength(many.length)
    expect(overflow).toHaveLength(0)
  })

  it("keeps pinned actions no matter how narrow the bar gets", () => {
    const { visible } = collapseActions(many, widthFor(3), "floating")
    const ids = visible.map((item) => item.id)
    expect(ids).toContain("core:microphone")
    expect(ids).toContain("core:camera")
    expect(ids).toContain("core:leave")
  })

  it("drops the lowest priority first", () => {
    const { overflow } = collapseActions(many, widthFor(6), "floating")
    expect(overflow.map((item) => item.id)).toContain("settings")
    expect(overflow.map((item) => item.id)).not.toContain("chat")
  })

  it("renders survivors in the original order, not by priority", () => {
    const { visible } = collapseActions(many, widthFor(5), "floating")
    const ids = visible.map((item) => item.id)
    const original = many
      .map((item) => item.id)
      .filter((id) => ids.includes(id))
    expect(ids).toEqual(original)
  })

  it("reduces a minimized pill to the pinned actions with no overflow menu", () => {
    const { visible, overflow } = collapseActions(many, 280, "minimized")
    expect(visible.every((item) => item.pinned)).toBe(true)
    expect(overflow).toHaveLength(0)
  })

  it("honours per-action mode restrictions", () => {
    const restricted = [
      ...CORE,
      action("onlyFullscreen", { modes: ["fullscreen"] }),
    ]
    const { visible } = collapseActions(
      restricted,
      widthFor(restricted.length),
      "floating"
    )
    expect(visible.map((item) => item.id)).not.toContain("onlyFullscreen")
  })
})
