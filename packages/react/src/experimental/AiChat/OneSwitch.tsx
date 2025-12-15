import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/ui/tooltip"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { motion } from "motion/react"
import { useState } from "react"
import OneIcon from "./OneIcon"
import { useAiChat } from "./providers/AiChatStateProvider"

export const OneSwitch = ({
  className,
  disabled,
}: React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>) => {
  const { enabled, setOpen, open } = useAiChat()
  const translations = useI18n()
  const [isHover, setIsHover] = useState(false)

  if (!enabled) {
    return null
  }

  return (
    <div className="flex items-center">
      <TooltipProvider>
        <Tooltip delayDuration={850} disableHoverableContent>
          <TooltipTrigger asChild>
            <motion.div
              animate={{
                "--gradient-angle": ["0deg", "360deg"],
              }}
              transition={{
                default: {
                  duration: 8,
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
              <SwitchPrimitive.Root
                onCheckedChange={(val) => {
                  setOpen(val)
                }}
                checked={open}
                aria-label={open ? translations.ai.closeChat : translations.ai.openChat}
                className={cn(
                  "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary transition-all hover:bg-f1-background-hover",
                  "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
                  "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
                  "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
                  disabled && "cursor-not-allowed opacity-50",
                  focusRing(),
                  className
                )}
                disabled={disabled}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <SwitchPrimitive.Thumb
                  className={cn(
                    "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                  )}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)",
                  }}
                >
                  <div>
                    <OneIcon size="sm" background={open ? "white" : undefined} hover={isHover} />
                  </div>
                </SwitchPrimitive.Thumb>
              </SwitchPrimitive.Root>
            </motion.div>
          </TooltipTrigger>
          {!open && (
            <TooltipContent side="left" className="font-medium">
              {translations.ai.welcome}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
