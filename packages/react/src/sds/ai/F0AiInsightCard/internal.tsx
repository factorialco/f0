import { forwardRef, useState, type KeyboardEvent } from "react"
import { motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { cn, focusRing } from "@/lib/utils"

import { CardHeader } from "./components/CardHeader"
import { CardMetadata } from "./components/CardMetadata"
import { CardSparkline } from "./components/CardSparkline"
import type { F0AiInsightCardProps } from "./types"
import { cardVariants, headingVariants } from "./variants"

export type CardInternalProps = F0AiInsightCardProps & {
  className?: string
}

export const CardInternal = forwardRef<HTMLDivElement, CardInternalProps>(
  (props, ref) => {
    const {
      description,
      heading,
      label,
      selected = false,
      onClick,
      onAskOne,
      className,
      ...contentProps
    } = props

    const [isHovered, setIsHovered] = useState(false)
    const shouldReduceMotion = useReducedMotion()
    const shouldFadeContent = isHovered && !!onAskOne

    const fadeTransition = {
      duration: shouldReduceMotion ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1] as const,
    }

    const handleClick = () => {
      onClick?.()
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        onClick?.()
      }
    }

    return (
      <div className="relative">
        {selected && (
          <>
            <div
              data-testid="selected-border"
              className={cn(
                "absolute -inset-px rounded-2xl",
                "[--gradient-angle:0deg]",
                "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
                "animate-rotate-gradient"
              )}
            />
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute -inset-px rounded-2xl",
                "[--gradient-angle:0deg]",
                "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
                "animate-rotate-gradient opacity-80 blur-sm"
              )}
            />
          </>
        )}
        <div
          ref={ref}
          role={onClick ? "button" : undefined}
          tabIndex={onClick ? 0 : undefined}
          className={cn(
            cardVariants({ selected }),
            selected && "relative border-transparent",
            onClick && "cursor-pointer select-none",
            onClick && focusRing(),
            className
          )}
          onClick={onClick ? handleClick : undefined}
          onKeyDown={onClick ? handleKeyDown : undefined}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardHeader
            description={description}
            isHovered={isHovered}
            onAskOne={onAskOne}
          />

          {contentProps.content === "sparkline" ? (
            <div className="flex flex-1 flex-col gap-2">
              <span className={cn(headingVariants())}>{heading}</span>
              <motion.div
                className="-ml-4 flex flex-1 flex-col"
                animate={{ opacity: shouldFadeContent ? 0 : 1 }}
                transition={fadeTransition}
              >
                <CardSparkline
                  data={contentProps.data}
                  label={label ?? ""}
                  invertStatus={contentProps.invertStatus}
                />
              </motion.div>
            </div>
          ) : (
            <CardMetadata
              heading={heading}
              label={label}
              shouldFadeContent={shouldFadeContent}
              fadeTransition={fadeTransition}
              {...contentProps}
            />
          )}
        </div>
      </div>
    )
  }
)

CardInternal.displayName = "F0AiInsightCardInternal"
