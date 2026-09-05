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
   * Open the chat AS A SIDE PANEL, whatever it was doing before.
   *
   * `setOpen(true)` is not enough for a caller that then sizes itself around the
   * chat, and the reason is the case that looks least likely: a chat that is
   * ALREADY open. Expanded (`fullscreen`) or showing a canvas, it spans the
   * frame — there is no side to leave room beside — and `setOpen(true)` is a
   * no-op, so it stays that way over the window just sized for it. Both states
   * survive a reload too: closing resets the mode
   * (`AiChatStateProvider`), but `open` and `visualizationMode` are
   * persisted together, so a chat left open and expanded comes back that way.
   */
  openAsSidePanel: () => void
  /**
   * How much room the chat panel takes, and which edge it takes it from.
   *
   * The meeting needs this to size itself around the chat, and cannot read it
   * itself: `panelArea` is the frame's border box, and the frame reserves the
   * chat with PADDING rather than by shrinking that box — deliberately, so the
   * reservation cannot feed back into the measurement.
   *
   * Both describe where the chat lands AFTER `openAsSidePanel`, not where the
   * panel is now.
   */
  chatWidth: number
  chatSide: "left" | "right"
}

const noop = () => {}

const AiChatBridgeContext = createContext<AiChatBridgeValue>({
  enabled: false,
  open: false,
  setOpen: noop,
  openAsSidePanel: noop,
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

/** What the publisher hands up: the state, plus the callbacks kept in refs. */
type PublishedActions = PublishedState & {
  setOpen: (open: boolean) => void
  openAsSidePanel: () => void
}

export const AiChatBridgeProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<PublishedState>({
    enabled: false,
    open: false,
    chatWidth: 0,
    chatSide: "right",
  })
  // Refs, not state: the publisher writes the callbacks on every render and we
  // must not re-render the whole frame each time an identity changes.
  const setOpenRef = useRef<(open: boolean) => void>(noop)
  const openAsSidePanelRef = useRef<() => void>(noop)

  const publish = useCallback((next: PublishedActions) => {
    setOpenRef.current = next.setOpen
    openAsSidePanelRef.current = next.openAsSidePanel
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
  }, [])

  const value = useMemo<AiChatBridgeValue>(
    () => ({
      enabled: state.enabled,
      open: state.open,
      chatWidth: state.chatWidth,
      chatSide: state.chatSide,
      setOpen: (open: boolean) => setOpenRef.current(open),
      openAsSidePanel: () => openAsSidePanelRef.current(),
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
  createContext<(next: PublishedActions) => void>(noop)

/**
 * Renders nothing. Mount it INSIDE the AI provider — its only job is to read the
 * toggle from where the context actually exists and hand it upward.
 */
export const AiChatBridgePublisher = () => {
  const publish = useContext(AiChatBridgePublisherContext)
  const { enabled, open, setOpen } = useAiChatToggle()
  const { chatWidth, resizable, panelSide, setVisualizationMode } = useAiChat()

  // The edge the CHAT takes — `panelSide`, not the side hosted content happens
  // to be docked to. Opening the chat clears that content (see
  // `useAiChatToggle`), so a content side never survives the press, and sizing
  // against it would leave the gap on the wrong edge.
  const chatSide = panelSide

  // Mirror the frame's own reservation exactly: with `resizable` off it reserves
  // the default and ignores the persisted width. They share a localStorage key,
  // so that persisted value can be a width some other host chose.
  const reservedWidth = resizable
    ? chatWidth || DEFAULT_CHAT_WIDTH
    : DEFAULT_CHAT_WIDTH

  const openAsSidePanel = useCallback(() => {
    // Mode first, then open. Only `fullscreen` forces the panel open from a mode
    // change, so this order can never leave the panel showing in a mode the
    // caller did not ask for; and `setOpen` from the toggle is what swaps out
    // hosted content in favour of the chat.
    setVisualizationMode("sidepanel")
    setOpen(true)
  }, [setVisualizationMode, setOpen])

  useEffect(() => {
    publish({
      enabled,
      open,
      setOpen,
      openAsSidePanel,
      chatWidth: reservedWidth,
      chatSide,
    })
  }, [
    publish,
    enabled,
    open,
    setOpen,
    openAsSidePanel,
    reservedWidth,
    chatSide,
  ])

  return null
}
