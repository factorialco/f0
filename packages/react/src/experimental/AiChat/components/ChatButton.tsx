import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { useChatContext, type ButtonProps } from "@copilotkit/react-ui"
import { motion } from "motion/react"
import { useState } from "react"
import OneIcon from "../OneIcon"

export const ChatButton = (props: ButtonProps) => {
  const { open, setOpen } = useChatContext()
  const translations = useI18n()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      aria-label={translations.ai.openChat}
      className={cn(
        "absolute bottom-4 right-4 overflow-hidden",
        "h-11 w-20 cursor-pointer rounded-full border border-solid border-f1-border-secondary bg-f1-background p-1.5 shadow-lg",
        open ? "hidden" : "block",
        isHovered && "w-fit pr-12 delay-200",
        "transition-all duration-200 ease-in-out motion-reduce:transition-none",
        focusRing()
      )}
      onClick={() => setOpen(!open)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <motion.div
        initial={false}
        className={cn(
          "absolute right-1.5 top-[5px] flex h-8 w-8 items-center justify-center"
        )}
        animate={{
          translateX: isHovered ? "0" : "-34px",
          rotate: isHovered ? "90deg" : "0",
          scale: isHovered ? [1, 0.8, 1] : 1,
        }}
        transition={{
          translateX: { ease: [0.65, 0, 0.35, 1], duration: 0.3 },
          rotate: { ease: [0.25, 0.46, 0.45, 1.34], duration: 0.5 },
          scale: { duration: 0.5, times: [0, 0.4, 1] },
        }}
      >
        <OneIcon />
      </motion.div>
      <div className="pl-2 font-medium text-f1-foreground-secondary">
        {translations.ai.welcome.split(" ").map((word, index, array) => (
          <motion.span
            key={`${word}-${index}`}
            className={cn("inline-block", index < array.length - 1 && "mr-1")}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
              filter: isHovered ? "blur(0px)" : "blur(8px)",
            }}
            transition={{
              duration: isHovered ? 0.3 : 0,
              delay: isHovered ? 0.4 + index * 0.05 : 0,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </button>
  )
}
