import { F0Icon, IconType } from "@/components/F0Icon"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../BaseTag"
import type { Props, Status } from "./types"

const iconMap: Record<Exclude<Status, "neutral">, IconType> = {
  positive: ArrowUp,
  negative: ArrowDown,
}

export const F0TagBalance = forwardRef<HTMLDivElement, Props>(
  ({ text, status }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className={cn(
          {
            positive: "bg-f1-background-positive text-f1-foreground-positive",
            neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
            negative: "bg-f1-background-critical text-f1-foreground-critical",
          }[status]
        )}
        left={
          status === "neutral" ? null : (
            <F0Icon
              icon={iconMap[status]}
              size="sm"
              className={cn(
                {
                  positive: "text-f1-icon-positive",
                  neutral: "text-f1-icon-secondary",
                  negative: "text-f1-icon-critical",
                }[status]
              )}
            />
          )
        }
        additionalAccesibleText={`${status} balance`}
        text={text}
      />
    )
  }
)

F0TagBalance.displayName = "F0TagBalance"
