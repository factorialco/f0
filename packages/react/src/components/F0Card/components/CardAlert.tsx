import { forwardRef } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { AlertCircle, CheckCircle, InfoCircle, Warning } from "@/icons/app"
import { Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"

import type { CardAlertProps, CardAlertVariant } from "../types"

/**
 * Tailwind bg classes for the outer container.
 * The outer bg "bleeds through" the header strip area since the strip has no own bg.
 */
const alertBgClass: Record<CardAlertVariant, string> = {
  info: "bg-f1-background-info",
  warning: "bg-f1-background-warning",
  critical: "bg-f1-background-critical",
  positive: "bg-f1-background-positive",
}

/**
 * Raw CSS color values for the card's 2px border — intentionally slightly stronger
 * than the alert bg token (0.12 vs 0.10) to give the border enough visibility.
 * These use the same base variable as `background.{variant}.DEFAULT` in colors.ts:
 *   hsl(var(--{variant}-50) / 0.1) — bg token
 *   hsl(var(--{variant}-50) / 0.12) — border (slightly more opaque)
 */
export const alertBorderColor: Record<CardAlertVariant, string> = {
  info: "hsl(var(--info-50) / 0.12)",
  warning: "hsl(var(--warning-50) / 0.12)",
  critical: "hsl(var(--critical-50) / 0.12)",
  positive: "hsl(var(--positive-50) / 0.12)",
}

const alertTitleColorClass: Record<CardAlertVariant, string> = {
  info: "text-f1-foreground-info",
  warning: "text-f1-foreground-warning",
  critical: "text-f1-foreground-critical",
  positive: "text-f1-foreground-positive",
}

const alertIconColor: Record<
  CardAlertVariant,
  "critical" | "warning" | "info" | "positive"
> = {
  critical: "critical",
  warning: "warning",
  info: "info",
  positive: "positive",
}

const alertDefaultIcon: Record<CardAlertVariant, IconType> = {
  critical: AlertCircle,
  warning: Warning,
  info: InfoCircle,
  positive: CheckCircle,
}

/**
 * The coloured header strip that sits above the card.
 * It has no background of its own — the outer container's bg shows through.
 *
 * Applied classes: pt-2 (8px) pb-1 (4px) px-3 (12px) gap-1 (4px), rounded-t-xl
 */
function CardAlertHeader({
  variant,
  title,
  icon,
  dismissible = false,
  onDismiss,
  action,
}: CardAlertProps) {
  const { actions } = useI18n()
  const alertRole =
    variant === "critical" || variant === "warning" ? "alert" : "status"

  return (
    <div
      role={alertRole}
      className="flex items-center gap-1 rounded-t-xl px-3 pb-1 pt-2"
    >
      <div className="flex h-5 w-5 shrink-0 items-center justify-center">
        <F0Icon
          icon={icon ?? alertDefaultIcon[variant]}
          size="md"
          color={alertIconColor[variant]}
        />
      </div>

      <span
        className={cn(
          "flex-1 text-base font-medium",
          alertTitleColorClass[variant]
        )}
      >
        {title}
      </span>

      {action ? (
        <F0Button
          label={action.label}
          variant="outline"
          size="sm"
          onClick={action.onClick}
          disabled={action.disabled}
          type="button"
        />
      ) : (
        dismissible && (
          <F0Button
            icon={Cross}
            label={actions.close}
            hideLabel
            variant="ghost"
            size="md"
            onClick={onDismiss}
            type="button"
          />
        )
      )}
    </div>
  )
}

/**
 * Wraps the card with an alert header sitting on top.
 *
 * Design (Figma 6042:19084):
 *
 *   ┌─────────────────────────────────┐  ← outer div, alert bg color, rounded-xl
 *   │ ⚠ Title                      ✕ │  ← header strip (no bg — inherits outer)
 *   ├─────────────────────────────────┤
 *   │  ┌───────────────────────────┐  │  ← card (white, 2px border matching alert bg,
 *   │  │  card body                │  │    full rounded-xl)
 *   │  └───────────────────────────┘  │
 *   └─────────────────────────────────┘
 *
 * Dismiss is fully controlled: the consumer removes the alert by passing alert={undefined}
 * (or omitting it) in response to the onDismiss callback.
 */
export const CardAlertWrapper = forwardRef<
  HTMLDivElement,
  {
    alert: CardAlertProps
    fullHeight?: boolean
    children: React.ReactNode
  }
>(function CardAlertWrapper({ alert, fullHeight, children }, ref) {
  const isVisible = alert.visible !== false

  if (isVisible) {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl",
          alertBgClass[alert.variant],
          fullHeight && "flex h-full flex-col"
        )}
      >
        <CardAlertHeader {...alert} />
        <div className={cn(fullHeight && "flex flex-1 flex-col")}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className={cn(fullHeight && "h-full")}>
      {children}
    </div>
  )
})

CardAlertWrapper.displayName = "CardAlertWrapper"
