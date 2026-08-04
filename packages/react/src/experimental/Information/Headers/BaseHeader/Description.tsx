import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"

import {
  lerp,
  px,
} from "@/experimental/Information/Headers/BaseHeader/collapse"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

export const Description = ({
  description,
  progress = 0,
  tween,
}: {
  description: string
  /** How far the header is condensed, 0 to 1. Steps the text 16px down to 14px. */
  progress?: number
  /** Transition classes, when the header is being switched rather than scrolled. */
  tween?: string
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [needsTruncation, setNeedsTruncation] = useState(false)
  const translations = useI18n()

  /*
   * We render a hidden block (`measure`) which we then use to read the height of the
   * description block without any restrictions applied.
   *
   * If it is bigger than the height of description, we show the "show more" button.
   */
  const descriptionRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)
  const descriptionSize = useResizeObserver({ ref: descriptionRef })
  const measureSize = useResizeObserver({ ref: measureRef })

  useEffect(() => {
    if (measureSize.height && descriptionSize.height) {
      // A pixel of tolerance. The two heights are observed separately, so while
      // the header is condensing there can be a frame where one has reported the
      // new font size and the other has not, and that gap is not truncation.
      setNeedsTruncation(measureSize.height > descriptionSize.height + 1)
    }
  }, [measureSize.height, descriptionSize.height])

  // Both the visible text and the hidden measure take the same size, or the
  // truncation test that compares their heights misreads.
  const size = {
    fontSize: px(lerp(16, 14, progress)),
    lineHeight: px(lerp(24, 20, progress)),
  }

  return (
    <div className="flex max-w-[640px] flex-col gap-1">
      <motion.div
        initial={false}
        animate={{
          height: isExpanded
            ? (measureSize.height ?? descriptionSize.height)
            : (descriptionSize.height ?? "3rem"),
        }}
        transition={{
          duration: needsTruncation ? 0.15 : 0,
          ease: [0.165, 0.84, 0.44, 1],
        }}
        className={cn(
          isExpanded ? "overflow-y-scroll" : "overflow-clip",
          "relative max-h-80"
        )}
      >
        <div
          ref={measureRef}
          style={size}
          className="pointer-events-none invisible absolute left-0 top-0 -z-10 text-f1-foreground-secondary"
          aria-hidden="true"
        >
          {description}
        </div>
        <div
          ref={descriptionRef}
          style={size}
          className={cn(
            "text-f1-foreground-secondary",
            tween,
            !isExpanded && "line-clamp-2"
          )}
        >
          {description}
        </div>
      </motion.div>
      {(needsTruncation || isExpanded) && (
        <button
          onClick={() => setIsExpanded((current) => !current)}
          className="relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover"
        >
          {isExpanded
            ? translations.actions.showLess
            : translations.actions.showAll}
        </button>
      )}
    </div>
  )
}
