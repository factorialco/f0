import type { ReactNode } from "react"
import {
  SidePanelWindow,
  resolveWindowExit,
  type WindowExitCustom,
} from "@/patterns/ApplicationFrame/SidePanel/SidePanelWindow"
import { DropOverlay } from "../../../F0AiChatTextArea"
import { F0AiPong } from "../../../F0AiPong"
import { useAiChat } from "../../providers/AiChatStateProvider"
import { useAiChatWindowSurface } from "./useAiChatWindowSurface"

// The shell itself is the panel's, not the chat's — see `SidePanelWindow`.
// Re-exported here because the exit resolver is tested against this path and
// read by the windows that share the shell.
export { resolveWindowExit, type WindowExitCustom }

/**
 * The AI chat's occupancy of the side panel: the shared shell, plus the things
 * only a chat wants inside it — a file-drop overlay, the widget drag-to-quote
 * invitation, and the Pong easter egg.
 */
export const SidebarWindow = ({
  children,
  visible,
  side,
  exitStyle = "shrink",
  acceptsWidgetDrop = false,
}: {
  children?: ReactNode
  /** Overrides the context `open` as the mount condition — lets the frame
   * drive per-window visibility when chat and hosted content split edges. */
  visible?: boolean
  /** Edge this window docks to. Defaults to the context `panelSide`. */
  side?: "left" | "right"
  /**
   * Exit animation. "shrink" is the regular close (width + fade). "hold"
   * keeps the window still while the main content slides over it — used for
   * the swap between the AI chat and hosted content on opposite edges, so
   * the panels feel like they were always there.
   */
  exitStyle?: "shrink" | "hold"
  /** Enables dashboard-widget quoting for the real chat/composer view only. */
  acceptsWidgetDrop?: boolean
}) => {
  const { open, visualizationMode, fileDragOver, activeGame, closeGame } =
    useAiChat()
  const isVisible = visible ?? open
  const isCanvasMode = visualizationMode === "canvas"

  const { surfaceRef, surfaceProps, decorations } = useAiChatWindowSurface({
    isVisible,
    acceptsWidgetDrop,
  })

  return (
    <SidePanelWindow
      visible={visible}
      side={side}
      exitStyle={exitStyle}
      // In canvas mode the chat sits flush against the canvas with only the
      // resize handle between them.
      flushInnerSeam={isCanvasMode}
      surfaceRef={surfaceRef}
      surfaceProps={surfaceProps}
      decorations={
        <>
          {/* `canDrop` gates only the file drop — quoting a dragged widget
              needs no upload handler, so it renders on its own. */}
          {decorations.canDrop ||
          (decorations.canAcceptWidgetDrop &&
            decorations.dragQuote !== null) ? (
            <DropOverlay
              visible={
                (decorations.canDrop && fileDragOver) ||
                decorations.dragQuote !== null
              }
              mode={decorations.dragQuote !== null ? "discuss" : "files"}
              onFilesDropped={decorations.onFilesDropped}
            />
          ) : null}
          {activeGame === "pong" ? <F0AiPong onClose={closeGame} /> : null}
        </>
      }
    >
      {children}
    </SidePanelWindow>
  )
}
