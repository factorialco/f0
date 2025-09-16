import { cn } from "@/lib/utils"
import { useChatContext, type WindowProps } from "@copilotkit/react-ui"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { AnimatePresence, motion } from "motion/react"
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useAiChat } from "../providers/AiChatStateProvider"

interface ChatWindowContextType {
  reachedMaxHeight: boolean
  messageContainerScrollTop: number
  setMessageContainerScrollTop: (scrollTop: number) => void
}

const ChatWindowContext = createContext<ChatWindowContextType>({
  reachedMaxHeight: false,
  messageContainerScrollTop: 0,
  setMessageContainerScrollTop: () => {},
})

export const useChatWindowContext = () => useContext(ChatWindowContext)

// also hardcoded in Tailwind classes in DialogPrimitive.Content
const MIN_HEIGHT = 416
const MAX_HEIGHT = 680
const FULL_HEIGHT_MARGIN = 20

const DialogPrimitiveContent = motion(DialogPrimitive.Content)

export const PopupWindow = ({ children }: WindowProps) => {
  const { setOpen, open } = useChatContext()
  const windowRef = useRef<HTMLDivElement>(null)
  const [windowHeight, setWindowHeight] = useState(MIN_HEIGHT)
  const [messageContainerScrollTop, setMessageContainerScrollTop] = useState(0)
  const { mode, shouldPlayEntranceAnimation, setShouldPlayEntranceAnimation } =
    useAiChat()

  useEffect(() => {
    if (!open) return

    const measureHeight = () => {
      if (windowRef.current) {
        const height = windowRef.current.offsetHeight
        setWindowHeight(height)
      }
    }

    let resizeObserver: ResizeObserver | null = null
    let browserResizeObserver: ResizeObserver | null = null
    let animationFrameId: number | null = null

    const setupObservers = () => {
      if (windowRef.current && open) {
        resizeObserver = new ResizeObserver(measureHeight)
        browserResizeObserver = new ResizeObserver(measureHeight)

        resizeObserver.observe(windowRef.current)
        browserResizeObserver.observe(document.documentElement)

        // Initial measurement
        measureHeight()
      }
    }

    animationFrameId = requestAnimationFrame(setupObservers)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      if (browserResizeObserver) {
        browserResizeObserver.disconnect()
      }
    }
  }, [open])

  const chatWindowContext = useMemo(
    () => ({
      reachedMaxHeight:
        windowHeight >= MAX_HEIGHT ||
        windowHeight >=
          document.documentElement.clientHeight - FULL_HEIGHT_MARGIN,
      messageContainerScrollTop,
      setMessageContainerScrollTop,
    }),
    [messageContainerScrollTop, windowHeight]
  )

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen} modal={false}>
      <DialogPrimitive.Portal>
        <AnimatePresence>
          <DialogPrimitiveContent
            layoutId="ai-chat"
            layoutDependency={mode}
            initial={
              shouldPlayEntranceAnimation ? { opacity: 0, scale: 0.9 } : false
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={
              shouldPlayEntranceAnimation
                ? { duration: 0.3, ease: "easeOut" }
                : { duration: 0.2, ease: "easeOut" }
            }
            onAnimationComplete={() => {
              if (shouldPlayEntranceAnimation) {
                setShouldPlayEntranceAnimation(false)
              }
            }}
            onPointerDownOutside={(e) => {
              e.preventDefault()
            }}
            onInteractOutside={(e) => {
              e.preventDefault()
            }}
            style={{ display: open ? "fixed" : "none" }}
            className={cn(
              "fixed bottom-4 right-4 isolate z-50 w-[90%] origin-bottom-right rounded-xl border bg-f1-background shadow-lg",
              "flex max-h-[min(680px,calc(100%-16px))] min-h-[416px] max-w-[464px] flex-col overflow-hidden rounded-xl border-solid border-f1-border shadow"
            )}
            ref={windowRef}
          >
            <ChatWindowContext.Provider value={chatWindowContext}>
              {children}
            </ChatWindowContext.Provider>
          </DialogPrimitiveContent>
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export const SidebarWindow = ({ children }: WindowProps) => {
  const { open } = useChatContext()
  const { mode, shouldPlayEntranceAnimation, setShouldPlayEntranceAnimation } =
    useAiChat()
  const [messageContainerScrollTop, setMessageContainerScrollTop] = useState(0)
  const chatWindowContext = useMemo(
    () => ({
      reachedMaxHeight: true,
      messageContainerScrollTop,
      setMessageContainerScrollTop,
    }),
    [messageContainerScrollTop]
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          aria-hidden={!open}
          className="relative flex h-full w-[360px] flex-col overflow-hidden bg-f1-special-page shadow xs:rounded-xl"
          layoutId="ai-chat"
          layoutDependency={mode}
          initial={shouldPlayEntranceAnimation ? { opacity: 0, x: 100 } : false}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onAnimationComplete={() => {
            if (shouldPlayEntranceAnimation) {
              setShouldPlayEntranceAnimation(false)
            }
          }}
        >
          <ChatWindowContext.Provider value={chatWindowContext}>
            {children}
          </ChatWindowContext.Provider>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
