import { motion } from "motion/react"
import { useEffect, useId, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"
import { F0RichTextDisplay } from "@/components/RichText/F0RichTextDisplay"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

// The description is a single run of prose, so the paragraphs markdown wraps it
// in must not add their own vertical rhythm inside the two-line clamp.
const PROSE = "[&>p]:m-0 [&>p+p]:mt-2"

export const Description = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [needsTruncation, setNeedsTruncation] = useState(false)
  const translations = useI18n()
  const descriptionId = useId()
  const reducedMotion = useReducedMotion()

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
        // The clamp only hides overflow, so a clamped-away link stays focusable:
        // expand on focus or it is reachable while invisible (WCAG 2.4.7).
        onFocusCapture={() => {
          if (needsTruncation) {
            setIsExpanded(true)
          }
        }}
        initial={false}
        animate={{
          height: isExpanded
            ? (measureSize.height ?? descriptionSize.height)
            : (descriptionSize.height ?? "3rem"),
        }}
        transition={{
          duration: reducedMotion || !needsTruncation ? 0 : 0.15,
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
          <F0RichTextDisplay
            format="markdown"
            content={description}
            className={PROSE}
          />
        </div>
        <div
          ref={descriptionRef}
          id={descriptionId}
          className={cn(
            "text-lg text-f1-foreground-secondary",
            !isExpanded && "line-clamp-2"
          )}
        >
          <F0RichTextDisplay
            format="markdown"
            content={description}
            className={PROSE}
          />
        </div>
      </motion.div>
      {needsTruncation || isExpanded ? (
        <button
          type="button"
          aria-controls={descriptionId}
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((current) => !current)}
          className={cn(
            "relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover",
            focusRing()
          )}
        >
          {isExpanded
            ? translations.actions.showLess
            : translations.actions.showAll}
        </button>
      ) : null}
    </div>
  )
}
