import { F0Icon } from "@/components/F0Icon"
import { Check, LayersFront } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Action, ActionButtonProps, ActionButtonVariant } from "@/ui/Action"
import { AnimatePresence, motion } from "motion/react"
import { forwardRef, MouseEventHandler, useEffect, useState } from "react"
import { iconOnlyVariants } from "../../components/F0Button/internal"

export type ButtonCopyProps = Omit<
  ActionButtonProps,
  | "onClick"
  | "children"
  | "title"
  | "label"
  | "hideLabel"
  | "icon"
  | "href"
  | "target"
  | "aria-label"
> & {
  valueToCopy: string
  copiedTooltipLabel?: string
  copyTooltipLabel?: string
  onCopy?: MouseEventHandler<HTMLElement>
  variant?: ActionButtonVariant
}

const copyIconMotionVariants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0 },
}
const copyIconTransition = { duration: 0.15, ease: "easeOut" }

export const ButtonCopy = forwardRef<HTMLButtonElement, ButtonCopyProps>(
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

    const handleCopyClick: MouseEventHandler<HTMLElement> = (event) => {
      event.stopPropagation()
      window.navigator.clipboard.writeText(valueToCopy)
      setIsCopying(true)
      onCopy?.(event)
    }

    return (
      <Action
        ref={ref}
        variant={variant}
        size={size}
        onClick={handleCopyClick}
        aria-live="polite"
        aria-label={currentTooltipLabel}
        title={currentTooltipLabel}
        {...props}
        compact={true}
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
            }}
          >
            <F0Icon
              size={size === "sm" ? "sm" : "md"}
              icon={isCopying ? Check : LayersFront}
              className={iconOnlyVariants({
                variant,
              })}
            />
          </motion.span>
        </AnimatePresence>
      </Action>
    )
  }
)

ButtonCopy.displayName = "ButtonCopy"
