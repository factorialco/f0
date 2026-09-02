"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { useAiChatToggle } from "@/kits/ai/F0AiChat/providers/useAiChatToggle"
import { DEFAULT_CHAT_WIDTH } from "@/kits/ai/F0AiChat/utils/constants"

/**
 * Lets the meeting header reach the AI chat, which it cannot do directly.
 *
 * `_ApplicationFrame` mounts `F0Meeting` ABOVE the AI provider, deliberately —
 * "switching the call between fullscreen and a floating window must not
 * re-render the chat". So anything rendered through the meeting's
 * `headerContent` sits inside `MeetingSurfaceProvider` but outside
 * `AiChatStateProvider`, and `useAiChat()` does not throw there: it returns a
 * proxy whose every function is a no-op. A switch wired straight to it would
 * render `null` and, if it did render, do nothing — silently, with no warning.
 *
 * Rather than invert the two providers and take the re-render the comment warns
 * about, a child inside the AI provider publishes upward into a store held above
 * it. Same shape as `setFrameRect` in this very file: the frame already does
 * this for the meeting's panel geometry.
 */

type AiChatBridgeValue = {
  enabled: boolean
  open: boolean
  setOpen: (open: boolean) => void
  /**
   * How much room the chat panel takes, and which edge it takes it from.
   *
   * The meeting needs this to size itself around the chat, and cannot read it
   * itself: `panelArea` is the frame's border box, and the frame reserves the
   * chat with PADDING rather than by shrinking that box — deliberately, so the
   * reservation cannot feed back into the measurement.
   */
  chatWidth: number
  chatSide: "left" | "right"
}

const noop = () => {}

const AiChatBridgeContext = createContext<AiChatBridgeValue>({
  enabled: false,
  open: false,
  setOpen: noop,
  chatWidth: 0,
  chatSide: "right",
})

export const useAiChatBridge = (): AiChatBridgeValue =>
  useContext(AiChatBridgeContext)

type PublishedState = {
  enabled: boolean
  open: boolean
  chatWidth: number
  chatSide: "left" | "right"
}

export const AiChatBridgeProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<PublishedState>({
    enabled: false,
    open: false,
    chatWidth: 0,
    chatSide: "right",
  })
  // A ref, not state: the publisher writes the setter on every render and we
  // must not re-render the whole frame each time its identity changes.
  const setOpenRef = useRef<(open: boolean) => void>(noop)

  const publish = useCallback(
    (next: PublishedState & { setOpen: (v: boolean) => void }) => {
      setOpenRef.current = next.setOpen
      setState((current) =>
        current.enabled === next.enabled &&
        current.open === next.open &&
        current.chatWidth === next.chatWidth &&
        current.chatSide === next.chatSide
          ? current
          : {
              enabled: next.enabled,
              open: next.open,
              chatWidth: next.chatWidth,
              chatSide: next.chatSide,
            }
      )
    },
    []
  )

  const value = useMemo<AiChatBridgeValue>(
    () => ({
      enabled: state.enabled,
      open: state.open,
      chatWidth: state.chatWidth,
      chatSide: state.chatSide,
      setOpen: (open: boolean) => setOpenRef.current(open),
    }),
    [state.enabled, state.open, state.chatWidth, state.chatSide]
  )

  return (
    <AiChatBridgePublisherContext.Provider value={publish}>
      <AiChatBridgeContext.Provider value={value}>
        {children}
      </AiChatBridgeContext.Provider>
    </AiChatBridgePublisherContext.Provider>
  )
}

const AiChatBridgePublisherContext =
  createContext<
    (next: PublishedState & { setOpen: (open: boolean) => void }) => void
  >(noop)

/**
 * Renders nothing. Mount it INSIDE the AI provider — its only job is to read the
 * toggle from where the context actually exists and hand it upward.
 */
export const AiChatBridgePublisher = () => {
  const publish = useContext(AiChatBridgePublisherContext)
  const { enabled, open, setOpen } = useAiChatToggle()
  const { chatWidth, panelSide, panelContentSide, panelContent } = useAiChat()

  // Which edge the panel will actually occupy: hosted content can dock to the
  // opposite side from the chat, and whichever is showing is the one that takes
  // the space.
  const chatSide = panelContent ? panelContentSide : panelSide

  useEffect(() => {
    publish({
      enabled,
      open,
      setOpen,
      chatWidth: chatWidth || DEFAULT_CHAT_WIDTH,
      chatSide,
    })
  }, [publish, enabled, open, setOpen, chatWidth, chatSide])

  return null
}
