import { Check, LayersFront } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Button as ShadcnButton } from "@/ui/button"
import { AnimatePresence, motion } from "motion/react"
import {
  ComponentProps,
  forwardRef,
  MouseEventHandler,
  useEffect,
  useState,
} from "react"
import { F0Icon } from "../../F0Icon"
import { iconOnlyVariants } from "./internal"

export type CopyButtonProps = Omit<
  ComponentProps<typeof ShadcnButton>,
  "onClick" | "children" | "title" | "label" | "hideLabel" | "icon" | "round"
> & {
  valueToCopy: string
  copiedTooltipLabel?: string
  copyTooltipLabel?: string
  onCopy?: MouseEventHandler<HTMLButtonElement>
}

const copyIconMotionVariants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0 },
}
const copyIconTransition = { duration: 0.15, ease: "easeOut" }

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      valueToCopy,
      onCopy,
      copyTooltipLabel: customCopyTooltipLabel,
      copiedTooltipLabel: customCopiedTooltipLabel,
      variant = "neutral",
      size = "sm",
      ...props
    },
    ref
  ) => {
    const [isCopying, setIsCopying] = useState(false)
    const translations = useI18n()

    const defaultCopyLabel = customCopyTooltipLabel ?? translations.actions.copy
    const defaultCopiedLabel = customCopiedTooltipLabel ?? "Copied"
    const currentTooltipLabel = isCopying
      ? defaultCopiedLabel
      : defaultCopyLabel

    useEffect(() => {
      let timeoutId: ReturnType<typeof setTimeout> | null = null
      if (isCopying) {
        timeoutId = setTimeout(() => setIsCopying(false), 1000)
      }
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
      }
    }, [isCopying])

    const handleCopyClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation()
      window.navigator.clipboard.writeText(valueToCopy)
      setIsCopying(true)
      onCopy?.(event)
    }

    return (
      <ShadcnButton
        ref={ref}
        variant={variant}
        size={size}
        round
        onClick={handleCopyClick}
        aria-live="polite"
        aria-label={currentTooltipLabel}
        title={currentTooltipLabel}
        {...props}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isCopying ? "check" : "copy"}
            variants={copyIconMotionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={copyIconTransition}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              verticalAlign: "middle",
              width: "1em",
              height: "1em",
            }}
          >
            <F0Icon
              size={size === "sm" ? "sm" : "md"}
              icon={isCopying ? Check : LayersFront}
              className={iconOnlyVariants({ variant })}
            />
          </motion.span>
        </AnimatePresence>
      </ShadcnButton>
    )
  }
)

CopyButton.displayName = "CopyButton"
