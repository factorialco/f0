import { AnimatePresence, motion } from "motion/react"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { createPortal } from "react-dom"

import { F0Toast } from "@/internal/components/Toast/F0Toast"
import { F0ToastProps } from "@/internal/components/Toast/types"
import { cn } from "@/lib/utils"

import { ToastId } from "./types"

export type ToastProviderItem = F0ToastProps & {
  id: ToastId
  onClose: () => void
}

type ToastContextValue = {
  addToast: (toast: ToastProviderItem) => void
  removeToast: (id: ToastId) => void
}

const toastContainerPositions = ["top-right"] as const
type ToastContainerPosition = (typeof toastContainerPositions)[number]

const ToastContext = createContext<ToastContextValue | null>(null)

type ToastProviderProps = {
  children: React.ReactNode
}

const toastContainerPositionClasses: Record<ToastContainerPosition, string> = {
  "top-right": "justify-end items-start top-0 right-0 bottom-0",
} as const

const toastVariants = {
  initial: { opacity: 0, y: 20, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
}

const minUncollapsedToasts = 3

const StackedToasts = ({ items }: { items: ToastProviderItem[] }) => {
  const [isHovered, setIsHovered] = useState(false)

  if (items.length === 0) return null

  return (
    <div
      className="pointer-events-auto relative z-[101]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {items.map((item, index) => {
          // Logic for visual compression
          // We want the first item (newest collapsed) to be at the front
          // index 0 -> front
          const reversedIndex = items.length - index - 1
          const isVisible = reversedIndex < 3

          return (
            <motion.div
              key={item.id}
              layout
              initial={false}
              animate={isHovered ? "expanded" : "collapsed"}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.2 },
              }}
              variants={{
                collapsed: {
                  y: reversedIndex * -10, // Items behind go up
                  scale: 1 - reversedIndex * 0.05, // Items behind are smaller
                  opacity: isVisible ? 1 : 0,
                  zIndex: 100 - reversedIndex, // Older (lower index) on top
                  height: reversedIndex === 0 ? "auto" : 0,
                },
                expanded: {
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  // zIndex: 100 - index,
                  height: "auto",
                  marginBottom: 16,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className={cn(
                !isHovered && index > 0 && "absolute top-0 left-0 right-0 mb-4"
              )}
            >
              <F0Toast {...item} forcePauseTimer />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

const ToastsContainer = ({
  items,
  position = "top-right",
}: {
  items: ToastProviderItem[]
  position?: ToastContainerPosition
}) => {
  const { collapsedItems, activeItems } = useMemo(() => {
    const reversedItems = items.slice().reverse()
    // Newer toasts at the bottom -> Active list is the end of the array
    const activeCount = Math.min(reversedItems.length, minUncollapsedToasts)
    const active = reversedItems.slice(reversedItems.length - activeCount)

    // Stack is the rest, reversed so newest-collapsed is at index 0 (Front)
    // UPDATE: User requested older on top with scale 1, so we DON'T reverse anymore.
    // Index 0 = Oldest = Front = Scale 1
    const collapsed = reversedItems.slice(0, reversedItems.length - activeCount)

    return { collapsedItems: collapsed, activeItems: active }
  }, [items])

  return (
    <div
      className={cn(
        cn(
          "pointer-events-none fixed z-[100] flex overflow-y-auto scrollbar-hide",
          toastContainerPositionClasses[position]
        )
      )}
    >
      <div className="flex w-[350px] max-w-full flex-col p-6">
        {/* Stacked Toasts at the Top */}
        <StackedToasts items={collapsedItems} />

        {/* Active Toasts below */}
        <div className="relative flex flex-col gap-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {activeItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={toastVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <F0Toast {...item} forcePauseTimer />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [items, setItems] = useState<ToastProviderItem[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const addToast = useCallback((toast: ToastProviderItem) => {
    setItems((prev) => [...prev, toast])
  }, [])

  const removeToast = useCallback((id: ToastId) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const contextValue = useMemo(
    () => ({
      addToast,
      removeToast,
    }),
    [addToast, removeToast]
  )

  return (
    <ToastContext.Provider value={contextValue}>
      {isMounted &&
        typeof document !== "undefined" &&
        createPortal(<ToastsContainer items={items} />, document.body)}
      {children}
    </ToastContext.Provider>
  )
}

export const useToastContext = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider")
  }
  return context
}
