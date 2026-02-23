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
import { useIsMobile } from "@/lib/useIsDesktop"
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
  "top-right":
    "justify-end items-start top-0 right-0 bottom-0 left-0 sm:left-auto",
} as const

// How many toasts are shown fully expanded (not stacked)
const maxActiveToasts = 3
// How many active toasts are shown on mobile
const maxActiveToastsMobile = 2
// How many stacked toasts are visible (the rest are hidden at same position as last visible)
const maxVisibleStackedToasts = 3
// How long to disable hover after a stacked→active promotion (ms)
const promotionLockDuration = 400

const StackedToasts = ({
  items,
  isTransitioning,
  promotingIds,
  onHoverChange,
}: {
  items: ToastProviderItem[]
  isTransitioning: boolean
  promotingIds: Set<ToastId>
  onHoverChange?: (isHovered: boolean) => void
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const lockRef = useRef(false)
  // Track items that have been promoted and should never trigger an exit animation.
  // We accumulate promoted IDs across renders so that even after `promotingIds` clears,
  // we still know to exclude them from AnimatePresence.
  const promotedEverRef = useRef<Set<ToastId>>(new Set())
  for (const id of promotingIds) {
    promotedEverRef.current.add(id)
  }
  // Clean up IDs that are no longer in items at all (already fully removed)
  const currentItemIds = new Set(items.map((i) => i.id))
  for (const id of promotedEverRef.current) {
    if (!currentItemIds.has(id)) {
      promotedEverRef.current.delete(id)
    }
  }

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

  useEffect(() => {
    onHoverChange?.(isHovered)
  }, [isHovered])

  if (items.length === 0) return null

  // Count of actual visible (non-promoted) items for z-index and order calculations
  const visibleCount = items.filter(
    (item) => !promotedEverRef.current.has(item.id)
  ).length

  if (visibleCount === 0) return null

  return (
    <div
      className="pointer-events-auto relative z-[101] mb-4 flex flex-col gap-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {(() => {
          let visibleIndex = 0
          return items.map((item) => {
            const isPromoted = promotedEverRef.current.has(item.id)

            // Promoted items stay in AnimatePresence's children list (preventing exit
            // animation) but render as invisible zero-height elements
            if (isPromoted) {
              return (
                <motion.div
                  key={item.id}
                  style={{
                    position: "absolute",
                    width: 0,
                    height: 0,
                    overflow: "hidden",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                  exit={{ transition: { duration: 0 } }}
                />
              )
            }

            const currentVisibleIndex = visibleIndex
            visibleIndex++

            // currentVisibleIndex 0 = oldest stacked = front of stack (closest to active area, on top)
            // Clamp visual position for hidden items to the last visible slot
            const visualIndex = Math.min(
              currentVisibleIndex,
              maxVisibleStackedToasts - 1
            )
            const isVisible = currentVisibleIndex < maxVisibleStackedToasts

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: 60,
                  scale: 1 - visualIndex * 0.05,
                }}
                animate={isHovered ? "expanded" : "stacked"}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  transition: { duration: 0.2 },
                }}
                variants={{
                  stacked: {
                    x: 0,
                    y: visualIndex * -10,
                    // Hidden items start smaller so they zoom in when becoming visible
                    scale: isVisible ? 1 - visualIndex * 0.05 : 0.9,
                    opacity: isVisible ? 1 : 0,
                    zIndex: visibleCount - currentVisibleIndex,
                    height: currentVisibleIndex === 0 ? "auto" : 0,
                  },
                  expanded: {
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    // Reverse visual order: newest (highest index) at top
                    zIndex: currentVisibleIndex + 1,
                    height: "auto",
                  },
                }}
                // Apply order immediately (outside animation) so the reorder
                // happens before the expand animation starts, not during it.
                style={{
                  order: isHovered ? visibleCount - 1 - currentVisibleIndex : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: baseStiffness - stiffnessReduction,
                  damping: baseDamping + dampingIncrease,
                }}
                className={cn(
                  !isHovered &&
                    currentVisibleIndex > 0 &&
                    "absolute top-0 left-0 right-0"
                )}
              >
                <F0Toast {...item} forcePauseTimer />
              </motion.div>
            )
          })
        })()}
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
  const isMobile = useIsMobile()
  const prevStackedIdsRef = useRef<Set<ToastId>>(new Set())
  const promotingIdsRef = useRef<Set<ToastId>>(new Set())
  const promotedAccumulatorRef = useRef<Set<ToastId>>(new Set())
  const [isTransitioning, setIsTransitioning] = useState(false)
  const stackedContainerRef = useRef<HTMLDivElement>(null)
  const activeContainerRef = useRef<HTMLDivElement>(null)
  // Store the measured Y offset for promoted items to animate from
  const promotionOffsetRef = useRef<number>(0)

  const { stackedItems, activeItems } = useMemo(() => {
    const totalCount = items.length

    const activeCount = Math.min(
      totalCount,
      isMobile ? maxActiveToastsMobile : maxActiveToasts
    )

    // Active = oldest N toasts (first added), rendered bottom-to-top via flex-col-reverse
    // So items[0] (oldest) appears at the bottom, items[activeCount-1] at top
    const active = items.slice(0, activeCount)

    // Stacked = newer overflow toasts, oldest-first so index 0 = front of stack
    const stacked = items.slice(activeCount)

    return { stackedItems: stacked, activeItems: active }
  }, [items, isMobile])

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

  // Accumulate promoted IDs so we can keep them in the stacked list across re-renders.
  // This prevents AnimatePresence from triggering exit animations for promoted items.
  for (const id of newlyPromoted) {
    promotedAccumulatorRef.current.add(id)
  }
  // Clean up IDs that are no longer in activeItems (fully removed from the system)
  for (const id of promotedAccumulatorRef.current) {
    if (!activeItems.some((i) => i.id === id)) {
      promotedAccumulatorRef.current.delete(id)
    }
  }

  // Include promoted items in stacked list so StackedToasts can filter them out
  // before AnimatePresence processes them (avoiding exit animation).
  // We use promotedAccumulatorRef (persists across renders) instead of newlyPromoted
  // (only non-empty for one render) to survive re-renders caused by setIsTransitioning.
  const stackedItemsWithPromoted =
    promotedAccumulatorRef.current.size === 0
      ? stackedItems
      : [
          ...activeItems.filter((i) =>
            promotedAccumulatorRef.current.has(i.id)
          ),
          ...stackedItems,
        ]

  // Measure the Y offset between stacked and active containers for promotion animation.
  // The promoted item should start where the stacked area is (above active) and slide down.
  if (
    newlyPromoted.size > 0 &&
    stackedContainerRef.current &&
    activeContainerRef.current
  ) {
    const stackedRect = stackedContainerRef.current.getBoundingClientRect()
    const activeRect = activeContainerRef.current.getBoundingClientRect()
    // Negative because the stacked area is above the active area
    promotionOffsetRef.current = stackedRect.top - activeRect.top
  }

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

  const [forcePause, setForcePause] = useState(false)
  const onHoverChange = useCallback((isHovered: boolean) => {
    setForcePause(isHovered)
  }, [])

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
            className="flex w-full flex-col p-6 sm:w-[350px]"
          >
            {/* Stacked Toasts at the Top */}
            <div ref={stackedContainerRef}>
              <StackedToasts
                items={stackedItemsWithPromoted}
                isTransitioning={isTransitioning}
                promotingIds={promotingIdsRef.current}
                onHoverChange={onHoverChange}
              />
            </div>

            {/* Active Toasts — desktop only, flex-col-reverse so oldest (index 0) is at the bottom */}
            <div
              ref={activeContainerRef}
              className="relative flex flex-col-reverse gap-4"
            >
              <AnimatePresence mode="popLayout">
                {activeItems.map((item) => {
                  const isPromoted = promotingIdsRef.current.has(item.id)

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      // Promoted: start from stacked position (negative Y) and slide down
                      // New: slide in from right
                      initial={
                        isPromoted
                          ? {
                              opacity: 1,
                              x: 0,
                              y: promotionOffsetRef.current,
                              scale: 1,
                            }
                          : { opacity: 0, x: 60, scale: 0.95 }
                      }
                      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <F0Toast {...item} forcePauseTimer={forcePause} />
                    </motion.div>
                  )
                })}
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
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === toast.id)
      if (existingIndex !== -1) {
        const next = [...prev]
        next[existingIndex] = toast
        return next
      }
      return [...prev, toast]
    })
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
