import { cva } from "cva"
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react"

import {
  AlertAvatarProps,
  F0AvatarAlert,
} from "@/components/avatars/F0AvatarAlert"
import { F0Button } from "@/components/F0Button"
import { F0Link } from "@/components/F0Link"
import { Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { toArray } from "@/lib/toArray"
import { cn } from "@/lib/utils"
import { Spinner } from "@/ui/Spinner"

import {
  F0ToastProps,
  F0ToastVariant,
  ToastActionButton,
  ToastActionLink,
} from "./types"

const toastVariants = cva({
  base: "isolation-isolate pointer-events-auto relative flex w-full flex-col gap-3 rounded-lg p-3 shadow-lg backdrop-blur-sm bg-f1-background-inverse dark:bg-f1-background-tertiary overflow-hidden",
  variants: {
    variant: {
      error: "",
      warning: "",
      success: "",
      loading: "",
      default: "",
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
      error: "text-f1-foreground-inverse",
      warning: "text-f1-foreground-inverse",
      success: "text-f1-foreground-inverse",
      loading: "text-f1-foreground-inverse",
      default: "text-f1-foreground-inverse",
    },
    hasIcon: {
      true: "pt-[3px]",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    hasIcon: false,
  },
})

const F0Toast = forwardRef<HTMLDivElement, F0ToastProps>(
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
    // Key the countdown off the visible CONTENT, not just `duration`. The store
    // replaces the item in place on the same id, and most variant pairs recompute
    // to the same duration (success → error, both 5s) — keying only on `duration`
    // wouldn't restart the timer, so the resolved toast would inherit the previous
    // `remainingTime` and dismiss a few frames after it paints.
    const contentSig = `${duration ?? ""}|${variant}|${title ?? ""}|${description ?? ""}`
    const [prevSig, setPrevSig] = useState(contentSig)
    // Pause is derived from ACTUAL hover, tracked unconditionally (not gated on
    // `duration`), so hovering during `loading` still holds the resolved toast,
    // and an in-place update never discards a legitimate hover pause.
    const [isHovered, setIsHovered] = useState(false)

    // Reset DURING render (not in an effect) so `remainingTime` is never
    // momentarily 0 while `duration > 0`, which would trip the auto-close effect
    // below and dismiss the toast mid-resolution.
    if (contentSig !== prevSig) {
      setPrevSig(contentSig)
      setRemainingTime(duration || 0)
    }

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
        loading: null,
        default: null,
      }

      const progressBarColorMap: Record<F0ToastVariant, string> = {
        error: "bg-f1-icon-critical",
        warning: "bg-f1-icon-warning",
        success: "bg-f1-icon-positive",
        loading: "bg-f1-foreground-inverse-secondary",
        default: "bg-f1-foreground-inverse-secondary",
      }

      return {
        ...getRoleAndAriaLive(),
        avatarType: avatarTypeMap[variant],
        progressBarColor: progressBarColorMap[variant],
      }
    }, [variant])

    const handleClose = useCallback(() => {
      onClose?.()
    }, [onClose])

    // Timer logic — tick the remaining time down to 0. The close itself is
    // triggered by the effect below, so we never call onClose (which updates the
    // parent toast store) from inside a state updater during render.
    useEffect(() => {
      if (!duration || duration <= 0 || isHovered || forcePauseTimer) {
        return
      }

      const interval = setInterval(() => {
        setRemainingTime((prev) => Math.max(prev - 16, 0))
      }, 16)

      return () => clearInterval(interval)
    }, [duration, isHovered, forcePauseTimer])

    // Close once the timer has run out.
    useEffect(() => {
      if (duration && duration > 0 && remainingTime <= 0) {
        handleClose()
      }
    }, [remainingTime, duration, handleClose])

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    const actionsArray = toArray(actions)
    const buttonActions: ToastActionButton[] = actionsArray.filter(
      (action): action is ToastActionButton => action.type === "button"
    )
    const linkActions: ToastActionLink[] = actionsArray.filter(
      (action): action is ToastActionLink => action.type === "link"
    )
    const isLoading = variant === "loading"
    const hasActions = buttonActions.length > 0 || linkActions.length > 0
    // Whether the toast closes itself. If it doesn't (persistent: no timer), it
    // MUST keep a close affordance, otherwise a persistent toast with only a
    // keepOpen action is undismissable.
    const willAutoDismiss = duration != null && duration > 0

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
        <div
          className={cn(
            "pointer-events-auto flex flex-row gap-3",
            // top-align icon + controls with the title when there's a
            // description (multi-line); centre for a single-line toast
            description ? "items-start" : "items-center"
          )}
        >
          {isLoading ? (
            // aria-hidden: the Spinner has its own aria-live/aria-busy, which
            // would nest a second live region inside the toast's role="status".
            // The title already announces the state, so hide the spinner from AT.
            <div className="flex-shrink-0" aria-hidden="true">
              <Spinner size="small" className="text-f1-foreground-inverse" />
            </div>
          ) : (
            avatarType && (
              <div className="flex-shrink-0">
                <F0AvatarAlert type={avatarType} size="sm" />
              </div>
            )
          )}

          <div className="flex flex-1 flex-col gap-1">
            {title && (
              <p
                className={titleVariants({
                  variant,
                  hasIcon: !!avatarType || isLoading,
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
          </div>

          {/* Action(s) — inline on the trailing edge (never below the text).
              Link sits to the LEFT of the primary button (button is trailing). */}
          {!isLoading && hasActions && (
            <div className="dark flex flex-shrink-0 flex-row flex-wrap items-center gap-3">
              {linkActions.map((linkAction) => (
                <div
                  key={`link-${linkAction.label}`}
                  onClick={() => handleActionClick(linkAction)}
                >
                  <F0Link href={linkAction.href} children={linkAction.label} />
                </div>
              ))}
              {buttonActions.map((buttonAction) => (
                <F0Button
                  key={`button-${buttonAction.label}`}
                  label={buttonAction.label}
                  icon={buttonAction.icon}
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleActionClick(buttonAction, buttonAction.onClick)
                  }
                />
              ))}
            </div>
          )}

          {/* Close — the manual dismiss. Hidden when the action is the only
              control AND the toast auto-dismisses (so the ✕ isn't adjacent to the
              action). But a toast that WON'T auto-dismiss (persistent) always
              keeps the ✕, even with an action, so it's never a dead-end. */}
          {onClose && !isLoading && (!hasActions || !willAutoDismiss) && (
            <div className="dark flex-shrink-0">
              <F0Button
                variant="outline"
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
        {!isLoading && duration && duration > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] w-full overflow-hidden rounded-b-lg">
            <div
              className={cn("h-full w-full", progressBarColor)}
              style={{
                transform: `translateX(-${100 - progress}%)`,
                transition: isHovered ? "none" : "transform 16ms linear",
              }}
            />
          </div>
        )}
      </div>
    )
  }
)

F0Toast.displayName = "F0Toast"

export { F0Toast }
