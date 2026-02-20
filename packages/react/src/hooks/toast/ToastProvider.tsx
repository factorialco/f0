import { AnimatePresence, motion } from "motion/react"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
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
  clearAll: () => void
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

// How many toasts are shown fully expanded (not stacked)
const minActiveToasts = 3
// How many stacked toasts are visible (the rest are hidden at same position as last visible)
const maxVisibleStackedToasts = 3
// How long to disable hover after a stacked→active promotion (ms)
const promotionLockDuration = 400

const StackedToasts = ({
  items,
  isTransitioning,
  promotingIds,
}: {
  items: ToastProviderItem[]
  isTransitioning: boolean
  promotingIds: Set<ToastId>
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const lockRef = useRef(false)

  // Dynamic animation speed: more items = slower spring, but keep it snappy
  const baseStiffness = 500
  const baseDamping = 40
  const stiffnessReduction = Math.min(items.length * 15, 150)
  const dampingIncrease = Math.min(items.length * 2, 10)

  // Lock hover interactions during stacked→active promotions
  useEffect(() => {
    if (isTransitioning) {
      lockRef.current = true
      setIsHovered(false)
      const timer = setTimeout(() => {
        lockRef.current = false
      }, promotionLockDuration)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  const handleMouseEnter = () => {
    if (!lockRef.current) setIsHovered(true)
  }

  if (items.length === 0) return null

  return (
    <div
      className="pointer-events-auto relative z-[101] mb-4 flex flex-col gap-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {items.map((item, index) => {
          // index 0 = oldest stacked = front of stack (closest to active area, on top)
          // Clamp visual position for hidden items to the last visible slot
          const visualIndex = Math.min(index, maxVisibleStackedToasts - 1)
          const isVisible = index < maxVisibleStackedToasts

          return (
            <motion.div
              key={item.id}
              layoutId={item.id}
              // Prevent layout animation within stacked area — only use layoutId
              // for cross-component shared layout with active area
              layout={false}
              initial={{
                opacity: 0,
                x: 60,
                scale: 1 - visualIndex * 0.05,
              }}
              animate={isHovered ? "expanded" : "stacked"}
              exit={
                promotingIds.has(item.id)
                  ? { opacity: 1, scale: 1, transition: { duration: 0 } }
                  : { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
              }
              variants={{
                stacked: {
                  x: 0,
                  y: visualIndex * -10,
                  // Hidden items start smaller so they zoom in when becoming visible
                  scale: isVisible ? 1 - visualIndex * 0.05 : 0.9,
                  opacity: isVisible ? 1 : 0,
                  zIndex: items.length - index,
                  height: index === 0 ? "auto" : 0,
                  order: 0,
                },
                expanded: {
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  // Reverse visual order: newest (highest index) at top
                  zIndex: index + 1,
                  order: items.length - 1 - index,
                  height: "auto",
                },
              }}
              transition={{
                type: "spring",
                stiffness: baseStiffness - stiffnessReduction,
                damping: baseDamping + dampingIncrease,
              }}
              className={cn(
                !isHovered && index > 0 && "absolute top-0 left-0 right-0"
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
  const prevStackedIdsRef = useRef<Set<ToastId>>(new Set())
  const promotingIdsRef = useRef<Set<ToastId>>(new Set())
  const [isTransitioning, setIsTransitioning] = useState(false)

  const { stackedItems, activeItems } = useMemo(() => {
    const totalCount = items.length
    const activeCount = Math.min(totalCount, minActiveToasts)

    // Active = oldest N toasts (first added), rendered bottom-to-top via flex-col-reverse
    // So items[0] (oldest) appears at the bottom, items[activeCount-1] at top
    const active = items.slice(0, activeCount)

    // Stacked = newer overflow toasts, oldest-first so index 0 = front of stack
    const stacked = items.slice(activeCount)

    return { stackedItems: stacked, activeItems: active }
  }, [items])

  // Compute promoted ids synchronously during render so initial prop is correct on first paint
  const currentStackedIds = new Set(stackedItems.map((i) => i.id))
  const newlyPromoted = new Set<ToastId>()
  for (const id of prevStackedIdsRef.current) {
    if (!currentStackedIds.has(id) && activeItems.some((i) => i.id === id)) {
      newlyPromoted.add(id)
    }
  }
  prevStackedIdsRef.current = currentStackedIds
  promotingIdsRef.current = newlyPromoted

  // Trigger hover lock in StackedToasts when a promotion occurs
  useEffect(() => {
    if (newlyPromoted.size > 0) {
      setIsTransitioning(true)
      const timer = setTimeout(
        () => setIsTransitioning(false),
        promotionLockDuration
      )
      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stackedItems, activeItems])

  const hasItems = items.length > 0

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-[100] flex overflow-x-hidden overflow-y-auto",
        toastContainerPositionClasses[position]
      )}
    >
      <AnimatePresence>
        {hasItems && (
          <div
            key="toast-panel"
            className="flex w-[350px] max-w-full flex-col p-6"
          >
            {/* Stacked Toasts at the Top */}
            <StackedToasts
              items={stackedItems}
              isTransitioning={isTransitioning}
              promotingIds={promotingIdsRef.current}
            />

            {/* Active Toasts — flex-col-reverse so oldest (index 0) is at the bottom */}
            <div className="relative flex flex-col-reverse gap-4">
              <AnimatePresence mode="popLayout">
                {activeItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layoutId={item.id}
                    layout
                    // Skip entry animation for items promoted from stacked (layoutId handles it)
                    initial={
                      promotingIdsRef.current.has(item.id)
                        ? false
                        : { opacity: 0, x: 60, scale: 0.95 }
                    }
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <F0Toast {...item} forcePauseTimer />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </AnimatePresence>
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

  const clearAll = useCallback(() => {
    setItems([])
  }, [])

  const contextValue = useMemo(
    () => ({
      addToast,
      removeToast,
      clearAll,
    }),
    [addToast, removeToast, clearAll]
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
