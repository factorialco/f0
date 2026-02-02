import { cva } from "cva"
import { AnimatePresence, motion } from "motion/react"
import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react"

import {
  AlertAvatarProps,
  F0AvatarAlert,
} from "@/components/avatars/F0AvatarAlert"
import { F0Button } from "@/components/F0Button"
import { F0Link } from "@/components/F0Link"
import { Cross } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { toArray } from "@/lib/toArray"
import { cn } from "@/lib/utils"

import {
  F0ToastProps,
  F0ToastVariant,
  ToastActionButton,
  ToastActionLink,
} from "./types"

const toastVariants = cva({
  base: "relative flex w-full flex-col gap-3 rounded-lg border p-3 shadow-lg bg-f1-background-inverse dark:bg-f1-background-inverse-secondary overflow-hidden",
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
  base: "font-medium text-base",
  variants: {
    variant: {
      error: "text-f1-icon-critical",
      warning: "text-f1-icon-warning",
      success: "text-f1-icon-positive",
      default: "text-f1-foreground-inverse",
    },
    titleOnly: {
      true: "pt-1",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    titleOnly: false,
  },
})

const F0Toast = forwardRef<HTMLDivElement, F0ToastProps>(
  (
    { title, description, variant = "default", duration, onClose, actions },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion()
    const [isClosing, setIsClosing] = useState(false)
    const [remainingTime, setRemainingTime] = useState(duration || 0)
    const [isPaused, setIsPaused] = useState(false)
    const startTimeRef = useRef<number | null>(null)
    const animationFrameRef = useRef<number | null>(null)

    const { role, ariaLive, avatarType, progressBarColor } = useMemo(() => {
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

      const avatarTypeMap: Record<
        F0ToastVariant,
        AlertAvatarProps["type"] | null
      > = {
        error: "critical",
        warning: "warning",
        success: "positive",
        default: null,
      }

      const progressBarColorMap: Record<F0ToastVariant, string> = {
        error: "bg-f1-icon-critical",
        warning: "bg-f1-icon-warning",
        success: "bg-f1-icon-positive",
        default: "bg-f1-foreground-inverse-secondary",
      }

      return {
        ...getRoleAndAriaLive(),
        avatarType: avatarTypeMap[variant],
        progressBarColor: progressBarColorMap[variant],
      }
    }, [variant])

    const handleClose = useCallback(() => {
      setIsClosing(true)
      // If reduced motion is preferred, we can call onClose immediately
      // But keeping a small timeout aligns with the exit animation logic generally
      // However, we rely on onExitComplete from AnimatePresence for the actual removal usually.
      // But here we are likely controlled by a parent or just self-managing via onClose.
      // If onClose is provided, we should call it after animation.
    }, [])

    // Timer logic
    useEffect(() => {
      if (!duration || duration <= 0 || isPaused || isClosing) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
          animationFrameRef.current = null
        }
        return
      }

      if (!startTimeRef.current) {
        startTimeRef.current = Date.now()
      }

      const animate = () => {
        if (isPaused || isClosing) return

        const now = Date.now()
        // We need to account for the time elapsed since the last start
        // But simpler: just decrement remainingTime based on delta
        // Actually, requestAnimationFrame is better for smooth progress bar
        // But for state updates (remainingTime), it might cause too many re-renders if we update it every frame for the bar.
        // Wait, the progress bar needs to be smooth.
        // Using CSS transition for the progress bar is smoother and cleaner than state updates.
        // Let's use a simpler approach for the close timeout:
        
        // We can track the *end time*.
        // But we need to pause.
        
        // Alternative: Update remaining time periodically or use a ref for the actual time tracking
        // and only update state for the progress bar if we weren't using CSS.
        // BUT the requirement says: "bar will decrease from right to left depending on the remaining time"
        // and "if the user hovers the toast the time stops".
        
        // If we use CSS transition, pausing is hard (we'd need to compute current width and set it).
        // Let's stick to the plan: update remainingTime. 
        // To avoid excessive re-renders, maybe we can update it less frequently?
        // But for a smooth 3px bar, we might want 60fps? 
        // Actually, CSS transition is best for smoothness.
        // We can set the transition duration to `remainingTime`.
        // When pausing, we get the computed width and set it explicitly, disabling transition.
        // When resuming, we set width to 0 with transition duration = remainingTime.
        
        // Let's try the requestAnimationFrame approach for precise timing logic for *closing*,
        // but for the visual bar, we can use the state.
        
        // Actually, updating state every 16ms (60fps) is fine for React.
      }
      
      // Let's implement the interval approach from the plan as it's robust enough.
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
    }, [duration, isPaused, isClosing, handleClose])

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
      <AnimatePresence
        onExitComplete={() => {
          onClose?.()
        }}
      >
        {!isClosing && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.3,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            ref={ref}
            role={role}
            aria-live={ariaLive}
            className={toastVariants({ variant })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-row gap-3">
              {avatarType && (
                <div className="flex-shrink-0">
                  <F0AvatarAlert type={avatarType} size="sm" />
                </div>
              )}

              <div className="flex flex-1 flex-col gap-1">
                {title && (
                  <p
                    className={titleVariants({
                      variant,
                      titleOnly: !description,
                    })}
                  >
                    {title}
                  </p>
                )}
                {description && (
                  <p className="text-base text-f1-foreground-inverse-secondary">
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
                    label="Close"
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
          </motion.div>
        )}
      </AnimatePresence>
    )
  }
)

F0Toast.displayName = "F0Toast"

export { F0Toast }
