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

const ToastsContainer = ({
  items,
  position = "top-right",
}: {
  items: ToastProviderItem[]
  position?: ToastContainerPosition
}) => {
  const toasts = useMemo(() => {
    return items
      .slice()
      .reverse()
      .map((item, index) => {
        return {
          ...item,
          isCollapsed: items.length - index - 1 >= minUncollapsedToasts,
        }
      })
  }, [items])

  const collapsedCount = useMemo(() => {
    return toasts.filter((item) => item.isCollapsed).length
  }, [toasts])

  return (
    <div
      className={cn(
        cn(
          "pointer-events-none fixed z-[100] flex overflow-y-auto scrollbar-hide",
          toastContainerPositionClasses[position]
        )
      )}
    >
      <div className="flex w-[350px] max-w-full flex-col gap-2 p-6">
        <div className="relative">
          {toasts
            .filter((item) => item.isCollapsed)
            .map((item, index) => {
              const scale = Math.max(0.7, 1 - index / 10)
              const translateY = Math.min(
                20,
                (collapsedCount - index * scale - 1) * 12
              )
              return (
                <div
                  key={item.id}
                  className={cn(
                    index !== collapsedCount - 1 &&
                      "absolute top-0 left-0 right-0 bottom-0"
                  )}
                  style={{
                    zIndex: 100 - index,
                    transform: `scale(${scale}) translateY(-${translateY}px)`,
                    border: "10px solid red",
                  }}
                >
                  <F0Toast {...item} forcePauseTimer />
                </div>
              )
            })}
        </div>
        {/* Uncollapsed toasts */}
        <div className="relative flex flex-col gap-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {toasts
              .filter((item) => !item.isCollapsed)
              .map((item) => {
                return (
                  <motion.div
                    key={item.id}
                    layout
                    variants={toastVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <F0Toast {...item} forcePauseTimer={item.isCollapsed} />
                  </motion.div>
                )
              })}
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
