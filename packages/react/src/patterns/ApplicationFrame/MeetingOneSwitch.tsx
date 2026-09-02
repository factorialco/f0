"use client"

import { F0OneSwitch } from "@/kits/ai/F0OneSwitch"
import { useMeetingSurfaceOptional } from "@/sds/meetings/F0Meeting"
import { type F0Rect } from "@/sds/meetings/F0Meeting/types"

import { useAiChatBridge } from "./AiChatBridge"

/**
 * A way out of a full-screen call and into the AI chat, in the call's own header.
 *
 * Full screen only, and deliberately ONE-WAY. Two reasons it cannot be a toggle:
 * the switch stops existing the moment the mode changes, so there is nothing
 * left to press a second time; and the app's own One switch owns closing the
 * chat, which has nothing to do with the call.
 *
 * The mode change is not a nicety either. `F0MeetingSurface` marks every sibling
 * of its portal `inert` while full screen, so a chat opened without leaving that
 * mode would be visibly there and completely unreachable.
 */
export const MeetingOneSwitch = () => {
  const surface = useMeetingSurfaceOptional()
  const { enabled, setOpen, chatWidth, chatSide } = useAiChatBridge()

  if (!surface || surface.effectiveMode !== "fullscreen") return null
  if (!enabled) return null

  return (
    <F0OneSwitch
      // Always off: this opens the chat, it never reports its state. Reading
      // "on" would promise a second press that the switch cannot survive to
      // receive.
      checked={false}
      onCheckedChange={() => {
        setOpen(true)
        // Straight to `floating`, never `panel`: the frame's exclusivity effect
        // resolves a contested slot in favour of whoever just arrived, so a call
        // moved to `panel` with the chat freshly open gets bounced here anyway,
        // one render later.
        surface.setMode("floating")
        surface.resizeRect(fitToContent(surface.panelArea, chatWidth, chatSide))
      }}
    />
  )
}

/** Breathing room, so the page is visibly still there behind the call. */
const CONTENT_PADDING = 24

/**
 * The window, sized to the content area the chat is about to leave it.
 *
 * `panelArea` is the frame's border box and INCLUDES the chat's width — the
 * frame reserves that space with padding rather than by shrinking the box, on
 * purpose, so the reservation cannot feed back into its own measurement. So the
 * chat has to be subtracted here.
 *
 * The result goes through `resizeRect`, never `settleRect`: settling snaps a
 * rect to the viewport margin whenever both offsets are within
 * `SNAP_THRESHOLD`, which a rect this size always is — it would flatten the
 * exact gap being left for the chat.
 */
export const fitToContent = (
  area: F0Rect,
  chatWidth: number,
  chatSide: "left" | "right"
): F0Rect => {
  const left = chatSide === "left" ? chatWidth : 0
  const right = chatSide === "right" ? chatWidth : 0
  return {
    x: area.x + left + CONTENT_PADDING,
    y: area.y + CONTENT_PADDING,
    width: Math.max(0, area.width - left - right - CONTENT_PADDING * 2),
    height: Math.max(0, area.height - CONTENT_PADDING * 2),
  }
}
