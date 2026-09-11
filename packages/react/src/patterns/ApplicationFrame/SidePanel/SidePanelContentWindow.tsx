import { AnimatePresence, motion } from "motion/react"
import { useRef } from "react"
import { useReducedMotion } from "@/lib/a11y"
import { Skeleton } from "@/ui/skeleton"
import { useSidePanel } from "./SidePanelProvider"
import { SidePanelWindow } from "./SidePanelWindow"

/**
 * Window for host-provided panel content when it docks to the opposite edge of
 * whatever else occupies the panel (`contentSide !== side`). ApplicationFrame
 * renders it on `contentSide`. The two stay exclusive — swapping only moves the
 * main content, which covers one window and uncovers the other in place.
 */
export const SidePanelContentWindow = () => {
  const { open, activeContent, contentSide, restoringViewId } = useSidePanel()
  const reducedMotion = useReducedMotion()

  // Keep the last content mounted through the swap-out: `activeContent` clears
  // immediately, but the window holds still (exitStyle "hold") while the main
  // content slides over it — an empty window would flash otherwise.
  const lastContentRef = useRef(activeContent)
  if (activeContent) {
    lastContentRef.current = activeContent
  }
  // While a reload's restore is pending, the window is already up showing a
  // placeholder keyed to the restored id — the crossfade below then fades the
  // real content in when the host re-mounts it.
  const restoring =
    !activeContent && restoringViewId
      ? {
          id: restoringViewId,
          content: (
            <Skeleton
              role="status"
              aria-busy={true}
              className="h-full w-full rounded-none"
            />
          ),
        }
      : null
  const content = activeContent ?? restoring ?? lastContentRef.current

  return (
    <SidePanelWindow
      visible={open && (activeContent !== null || restoring !== null)}
      side={contentSide}
      exitStyle={open ? "hold" : "shrink"}
    >
      {/* Same simultaneous crossfade as the chat's view switch: changing
          content fades the outgoing one out while the next fades in. */}
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
    </SidePanelWindow>
  )
}
