import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowUp } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

export const ChatTextarea = () => {
  const translation = useI18n()

  return (
    <motion.div
      className={cn(
        "relative isolate m-3 mt-2 flex flex-col gap-3 rounded-lg border border-solid border-f1-border",
        "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-[inherit] after:bg-f1-foreground-secondary after:opacity-0 after:blur-[5px] after:content-['']",
        "from-[#E55619] via-[#A1ADE5] to-[#E51943] after:scale-90 after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
        "after:transition-all after:delay-200 after:duration-300",
        "before:bg-white before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:content-['']"
      )}
      animate={{
        "--gradient-angle": ["0deg", "360deg"],
      }}
      transition={{
        default: {
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        },
      }}
      style={
        {
          "--gradient-angle": "180deg",
        } as React.CSSProperties
      }
    >
      <div className="grid grid-cols-1 grid-rows-1">
        <textarea
          disabled
          name="one-ai-input"
          placeholder={translation.ai.inputPlaceholder}
          className={cn(
            "col-start-1 row-start-1",
            "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
            "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
            "cursor-not-allowed opacity-60"
          )}
        />
      </div>
      <div className="flex flex-row-reverse p-3 pt-0">
        <ButtonInternal
          type="button"
          disabled
          variant="neutral"
          label={translation.ai.sendMessage}
          icon={ArrowUp}
          hideLabel
        />
      </div>
    </motion.div>
  )
}
