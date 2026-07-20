import { AnimatePresence, motion } from "motion/react"
import { useRef } from "react"

import { useReducedMotion } from "@/lib/a11y"

import { useAiChat } from "../../providers/AiChatStateProvider"
import { SidebarWindow } from "./ChatWindow"

/**
 * Window for hosted side-panel content when it docks to the opposite edge of
 * the AI chat (`panelContentSide !== panelSide`). ApplicationFrame renders it
 * on `panelContentSide`; `<F0AiChat />` keeps the chat on `panelSide`. The two
 * stay exclusive — swapping only moves the main content, which covers one
 * window and uncovers the other in place.
 */
export const HostedPanelWindow = () => {
  const { open, panelContent, panelContentSide } = useAiChat()
  const reducedMotion = useReducedMotion()

  // Keep the last content mounted through the swap-out: `panelContent` clears
  // immediately, but the window holds still (exitStyle "hold") while the main
  // content slides over it — an empty window would flash otherwise.
  const lastContentRef = useRef(panelContent)
  if (panelContent) lastContentRef.current = panelContent
  const content = panelContent ?? lastContentRef.current

  return (
    <SidebarWindow
      visible={open && panelContent !== null}
      side={panelContentSide}
      exitStyle={open ? "hold" : "shrink"}
    >
      {/* Same simultaneous crossfade as F0AiChat's view switch: changing
          conversations fades the outgoing one out while the next fades in. */}
      <AnimatePresence initial={false}>
        <motion.div
          key={content ? `panel:${content.id}` : "panel:none"}
          className="absolute inset-0 flex flex-col overflow-hidden"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.15, ease: "easeOut" }}
        >
          {content?.content}
        </motion.div>
      </AnimatePresence>
    </SidebarWindow>
  )
}
