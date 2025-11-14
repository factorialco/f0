import { F0Icon, F0IconProps, IconType } from "@/components/F0Icon"
import { AlertCircle, CheckCircle, InfoCircle, Warning } from "@/icons/app"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../internal/BaseTag"
import type { Level, Props } from "./types"

const iconMap: Record<Level, IconType> = {
  info: InfoCircle,
  warning: Warning,
  critical: AlertCircle,
  positive: CheckCircle,
}

export const F0TagAlert = forwardRef<HTMLDivElement, Props>(
  ({ text, level }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    const iconColors: Record<Level, F0IconProps["color"]> = {
      info: "info",
      warning: "warning",
      critical: "critical",
      positive: "positive",
    }

    const iconColor = iconColors[level]

    return (
      <BaseTag
        ref={ref}
        className={cn(
          "pl-0.5",
          {
            info: "bg-f1-background-info text-f1-foreground-info",
            warning: "bg-f1-background-warning text-f1-foreground-warning",
            critical: "bg-f1-background-critical text-f1-foreground-critical",
            positive: "bg-f1-background-positive text-f1-foreground-positive",
          }[level]
        )}
        left={
          <F0Icon
            icon={iconMap[level]}
            size="md"
            aria-hidden
            color={iconColor}
          />
        }
        text={text}
      />
    )
  }
)

F0TagAlert.displayName = "F0TagAlert"
