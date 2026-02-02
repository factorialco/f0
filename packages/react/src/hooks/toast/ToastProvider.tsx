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

const toastContainerPositions = ["bottom-center"] as const
type ToastContainerPosition = (typeof toastContainerPositions)[number]

const ToastContext = createContext<ToastContextValue | null>(null)

type ToastProviderProps = {
  children: React.ReactNode
}

const toastContainerPositionClasses: Record<ToastContainerPosition, string> = {
  "bottom-center": "justify-center items-end",
} as const

const ToastsContainer = ({
  items,
  position = "bottom-center",
}: {
  items: ToastProviderItem[]
  position?: ToastContainerPosition
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-4 z-[100] flex",
        toastContainerPositionClasses[position]
      )}
    >
      <div className="flex w-[350px] max-w-full flex-col gap-2">
        {items.map((item) => (
          <F0Toast key={item.id} {...item} />
        ))}
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
