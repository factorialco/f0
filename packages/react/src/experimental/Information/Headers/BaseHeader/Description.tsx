import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

export const Description = ({ description }: { description: string }) => {
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
      setNeedsTruncation(measureSize.height > descriptionSize.height)
    }
  }, [measureSize.height, descriptionSize.height])

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
          className="pointer-events-none invisible absolute left-0 top-0 -z-10 text-lg text-f1-foreground-secondary"
          aria-hidden="true"
        >
          {description}
        </div>
        <div
          ref={descriptionRef}
          className={cn(
            "text-lg text-f1-foreground-secondary",
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
