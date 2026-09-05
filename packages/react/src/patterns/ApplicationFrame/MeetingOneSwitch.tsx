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
 *
 * Both sides are forced, and neither is negotiable: the chat to `sidepanel`
 * (`openAsSidePanel` — a full-screen chat spans the frame and there is no side
 * to sit beside), and the call to a window filling what is left.
 */
export const MeetingOneSwitch = () => {
  const surface = useMeetingSurfaceOptional()
  const { enabled, openAsSidePanel, chatWidth, chatSide } = useAiChatBridge()

  if (!surface || surface.effectiveMode !== "fullscreen") return null
  if (!enabled) return null

  return (
    <F0OneSwitch
      // Always off: this opens the chat, it never reports its state. Reading
      // "on" would promise a second press that the switch cannot survive to
      // receive.
      checked={false}
      onCheckedChange={() => {
        // Opens it *as a side panel* whatever state it was in — closed, already
        // open, full screen, or showing someone else's content.
        openAsSidePanel()
        // Straight to `floating`, never `panel`: the frame's exclusivity effect
        // resolves a contested slot in favour of whoever just arrived, so a call
        // moved to `panel` with the chat freshly open gets bounced here anyway,
        // one render later.
        surface.setMode("floating")
        // Sized against the area the chat is about to leave the call. Both state
        // changes are read from the same `panelArea` measured here, which is
        // safe: it is the frame's border box, and neither the chat opening nor
        // the call leaving full screen moves it — the chat is reserved with
        // padding INSIDE that box, and the call's window lives in a portal.
        //
        // Skipped on a compact viewport, and not as a shortcut: there `floating`
        // renders minimized and the chat covers the content instead of docking
        // beside it, so the rect would reserve an edge nothing occupies and get
        // persisted for the next desktop session.
        if (!surface.isCompactViewport) {
          surface.resizeRect(
            fitToContent(surface.panelArea, chatWidth, chatSide)
          )
        }
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
