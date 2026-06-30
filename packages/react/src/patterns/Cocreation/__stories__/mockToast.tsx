/**
 * WIP — temporary toast mock for the Cocreation POC.
 *
 * This replicates the look & behaviour of the real toast system landing in
 * https://github.com/factorialco/f0/pull/3493 (feat/toast), but trimmed down to
 * just what the Cocreation story needs (single bottom-left vertical stack, no
 * framer-motion stacking/collapse, no mobile mode). The public API mirrors the
 * real `useToast()` / `ToastProvider` so the swap is mechanical:
 *
 *   1. import { useToast, ToastProvider } from "@/hooks/toast"
 *   2. replace <MockToastProvider> with <ToastProvider> and useMockToast() with useToast()
 *   3. delete this file
 *
 * The card visuals are copied verbatim from the PR's
 * `internal/components/Toast/F0Toast.tsx`.
 */
import { cva } from "cva"
import { nanoid } from "nanoid"
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { createPortal } from "react-dom"

import { F0Button } from "@/components/F0Button"
import { F0Link } from "@/components/F0Link"
import { F0Icon, IconType } from "@/components/F0Icon"
import { AlertCircle, CheckCircle, Cross, Warning } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { toArray } from "@/lib/toArray"
import { cn } from "@/lib/utils"

// ----------------------------------------------------------------------------
// Types (subset of the PR's toast types)
// ----------------------------------------------------------------------------

const toastVariantNames = ["error", "warning", "success", "default"] as const
type MockToastVariant = (typeof toastVariantNames)[number]

type ToastActionButton = {
  type: "button"
  label: string
  onClick: () => void
  icon?: IconType
  keepOpen?: boolean
}

type ToastActionLink = {
  type: "link"
  label: string
  href: string
  keepOpen?: boolean
}

type MockToastActions =
  | ToastActionButton
  | [ToastActionButton]
  | ToastActionLink
  | [ToastActionLink]
  | [ToastActionButton, ToastActionLink]

type MockToastProps = {
  title?: string
  description?: string
  variant?: MockToastVariant
  duration?: number
  forcePauseTimer?: boolean
  onClose?: () => void
  actions?: MockToastActions
}

type ToastId = string

type ToastOptions = {
  title?: string
  description?: string
  variant?: MockToastVariant
  actions?: MockToastActions
  id?: ToastId
} & (
  | { duration?: number; persistent?: undefined }
  | { duration?: undefined; persistent: true }
)

type ToastProviderItem = MockToastProps & {
  id: ToastId
  onClose: () => void
}

// ----------------------------------------------------------------------------
// Toast card (visuals copied from F0Toast.tsx)
// ----------------------------------------------------------------------------

const toastVariants = cva({
  base: "isolation-isolate pointer-events-auto relative flex w-full flex-col gap-3 rounded-lg border p-3 shadow-lg bg-f1-background-inverse dark:bg-f1-background-inverse-secondary overflow-hidden animate-in fade-in-0 slide-in-from-bottom-4 duration-300 ease-out",
  variants: {
    variant: {
      error: "border-f1-border-critical",
      warning: "border-f1-border-warning",
      success: "border-f1-border-positive",
      default: "border-f1-border py-3 px-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const titleVariants = cva({
  base: "font-medium text-base text-f1-foreground-inverse",
  variants: {
    hasIcon: {
      true: "pt-[1px]",
      false: "",
    },
  },
  defaultVariants: {
    hasIcon: false,
  },
})

const MockToast = forwardRef<HTMLDivElement, MockToastProps>(
  (
    {
      title,
      description,
      variant = "default",
      duration,
      onClose,
      actions,
      forcePauseTimer,
    },
    ref
  ) => {
    const i18n = useI18n()
    const [remainingTime, setRemainingTime] = useState(duration || 0)
    const [isPaused, setIsPaused] = useState(false)

    const { role, ariaLive, icon, progressBarColor } = useMemo(() => {
      const getRoleAndAriaLive = () => {
        if (variant === "error" || variant === "warning") {
          return {
            role: "alert" as const,
            ariaLive: "assertive" as const,
          }
        }
        return {
          role: "status" as const,
          ariaLive: "polite" as const,
        }
      }

      const iconMap: Record<MockToastVariant, IconType | null> = {
        error: AlertCircle,
        warning: Warning,
        success: CheckCircle,
        default: null,
      }

      const progressBarColorMap: Record<MockToastVariant, string> = {
        error: "bg-f1-icon-critical",
        warning: "bg-f1-icon-warning",
        success: "bg-f1-icon-positive",
        default: "bg-f1-foreground-inverse-secondary",
      }

      return {
        ...getRoleAndAriaLive(),
        icon: iconMap[variant],
        progressBarColor: progressBarColorMap[variant],
      }
    }, [variant])

    const handleClose = useCallback(() => {
      onClose?.()
    }, [onClose])

    // Timer logic
    useEffect(() => {
      if (!duration || duration <= 0 || isPaused || forcePauseTimer) {
        return
      }

      const interval = setInterval(() => {
        setRemainingTime((prev) => {
          const next = prev - 16
          if (next <= 0) {
            clearInterval(interval)
            handleClose()
            return 0
          }
          return next
        })
      }, 16)

      return () => clearInterval(interval)
    }, [duration, isPaused, handleClose, forcePauseTimer])

    const handleMouseEnter = () => {
      if (duration && duration > 0) {
        setIsPaused(true)
      }
    }

    const handleMouseLeave = () => {
      if (duration && duration > 0) {
        setIsPaused(false)
      }
    }

    const actionsArray = toArray(actions)
    const buttonActions: ToastActionButton[] = actionsArray.filter(
      (action): action is ToastActionButton => action.type === "button"
    )
    const linkActions: ToastActionLink[] = actionsArray.filter(
      (action): action is ToastActionLink => action.type === "link"
    )

    const handleActionClick = (
      action: ToastActionButton | ToastActionLink,
      originalOnClick?: () => void
    ) => {
      if (originalOnClick) {
        originalOnClick()
      }
      if (!action.keepOpen) {
        handleClose()
      }
    }

    // Calculate progress percentage
    const progress = duration ? (remainingTime / duration) * 100 : 0

    return (
      <div
        ref={ref}
        role={role}
        aria-live={ariaLive}
        className={toastVariants({ variant })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="pointer-events-auto flex flex-row gap-3">
          {icon && (
            <div className="flex-shrink-0 text-f1-foreground-inverse">
              <F0Icon icon={icon} size="lg" />
            </div>
          )}

          <div className="flex flex-1 flex-col gap-1">
            {title && (
              <p
                className={titleVariants({
                  hasIcon: !!icon,
                })}
              >
                {title}
              </p>
            )}
            {description && (
              <p className="line-clamp-3 text-base text-f1-foreground-inverse-secondary">
                {description}
              </p>
            )}

            {(buttonActions.length > 0 || linkActions.length > 0) && (
              <div className="dark mt-1 flex flex-row flex-wrap items-center gap-3">
                {buttonActions.map((buttonAction) => (
                  <F0Button
                    key={`button-${buttonAction.label}`}
                    {...buttonAction}
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleActionClick(buttonAction, buttonAction.onClick)
                    }
                  />
                ))}
                {linkActions.map((linkAction) => (
                  <div
                    key={`link-${linkAction.label}`}
                    onClick={() => handleActionClick(linkAction)}
                  >
                    <F0Link
                      href={linkAction.href}
                      children={linkAction.label}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Close button */}
          {onClose && (
            <div className="dark flex-shrink-0">
              <F0Button
                variant="ghost"
                icon={Cross}
                size="sm"
                hideLabel
                onClick={handleClose}
                label={i18n.actions.close}
              />
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {duration && duration > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] w-full overflow-hidden rounded-b-lg">
            <div
              className={cn("h-full w-full", progressBarColor)}
              style={{
                transform: `translateX(-${100 - progress}%)`,
                transition: isPaused ? "none" : "transform 16ms linear",
              }}
            />
          </div>
        )}
      </div>
    )
  }
)

MockToast.displayName = "MockToast"

// ----------------------------------------------------------------------------
// Provider + hook (mirrors useToast / ToastProvider public API)
// ----------------------------------------------------------------------------

type ToastContextValue = {
  addToast: (toast: ToastProviderItem) => void
  removeToast: (id: ToastId) => void
  clearAll: () => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function MockToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastProviderItem[]>([])

  const addToast = useCallback((toast: ToastProviderItem) => {
    setItems((prev) => [...prev.filter((t) => t.id !== toast.id), toast])
  }, [])

  const removeToast = useCallback((id: ToastId) => {
    setItems((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const clearAll = useCallback(() => {
    setItems([])
  }, [])

  const value = useMemo(
    () => ({ addToast, removeToast, clearAll }),
    [addToast, removeToast, clearAll]
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      {typeof document !== "undefined" &&
        createPortal(
          <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-[100] flex flex-col items-start justify-end gap-4 p-4 sm:right-auto sm:w-[350px]">
            {items.map((item) => (
              <MockToast key={item.id} {...item} />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  )
}

function useToastContext(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    throw new Error("useMockToast must be used inside <MockToastProvider>")
  }
  return ctx
}

export function useMockToast() {
  const { addToast, removeToast, clearAll } = useToastContext()

  const toast = useCallback(
    (options: ToastOptions): ToastId => {
      const id = options.id ?? nanoid()

      addToast({
        duration: options.persistent ? undefined : 10000,
        ...options,
        id,
        onClose: () => removeToast(id),
      })

      return id
    },
    [addToast, removeToast]
  )

  return { toast, removeToast, clearAll }
}
