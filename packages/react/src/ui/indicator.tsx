import { forwardRef } from "react"

import { EmojiImage } from "@/lib/emojis"

import { F0Icon, IconType } from "../components/F0Icon"
import { cn } from "../lib/utils"

type IndicatorProps = {
  content: string
  label: string
  color?: string
} & ({ icon?: IconType } | { emoji?: string })

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
  function Indicator({ content, label, color, ...props }, ref) {
    return (
      <div key={label} className="flex flex-col gap-1" ref={ref}>
        <p className="text-3xl font-semibold">{content}</p>
        <div className="flex items-center gap-1">
          <p
            className="line-clamp-1 text-f1-foreground-secondary"
            title={label}
          >
            {label}
          </p>
          {"icon" in props && props.icon && (
            <span className={cn("flex", color)}>
              <F0Icon icon={props.icon} />
            </span>
          )}
          {"emoji" in props && props.emoji && (
            <span className={cn("flex", color)}>
              <EmojiImage emoji={props.emoji} size="md" />
            </span>
          )}
        </div>
      </div>
    )
  }
)
