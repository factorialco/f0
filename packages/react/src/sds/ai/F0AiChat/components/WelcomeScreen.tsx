import { useCopilotChatInternal } from "@copilotkit/react-core"
import { Message, randomId } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { useMemo } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { cn } from "@/lib/utils"

import { F0OneIcon } from "../../F0OneIcon"
import { useAiChat } from "../providers/AiChatStateProvider"
import { WelcomeScreenSuggestion } from "../types"

export type { WelcomeScreenSuggestion }

const MAX_SUGGESTIONS = 3

function pickRandomSuggestions(
  list: WelcomeScreenSuggestion[],
  amount: number = MAX_SUGGESTIONS
): WelcomeScreenSuggestion[] {
  const shuffled = [...list].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, amount)
}

export const WelcomeScreen = ({
  greeting,
  initialMessages = [],
  suggestions = [],
}: {
  greeting?: string
  // todo make it string
  initialMessages?: Message[]
  suggestions?: WelcomeScreenSuggestion[]
}) => {
  const { sendMessage } = useCopilotChatInternal()
  const { visualizationMode } = useAiChat()
  const isFullscreen = visualizationMode === "fullscreen"

  const pickedSuggestions = useMemo(
    () => pickRandomSuggestions(suggestions),
    [suggestions]
  )

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key="welcome"
        className={cn(
          "flex w-full flex-1 flex-col gap-6 sm:gap-4",
          isFullscreen ? "items-start justify-center" : "justify-end"
        )}
        initial={{ opacity: 1 }}
      >
        <div
          className={cn(isFullscreen ? "flex flex-col items-start" : "pl-3")}
        >
          <motion.div
            className="flex w-fit justify-center"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            <F0OneIcon spin size="lg" className="my-4" />
          </motion.div>
          {greeting && (
            <motion.p
              className={cn(
                "text-lg font-semibold leading-[24px] gradient-text",
                isFullscreen && "text-2xl"
              )}
              initial={{ opacity: 0, filter: "blur(2px)", y: -8 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: 0.5,
              }}
            >
              {greeting}
            </motion.p>
          )}
          {initialMessages.map((message) => (
            <motion.p
              className={cn(
                "text-xl font-semibold leading-[24px] text-f1-foreground",
                isFullscreen && "text-2xl"
              )}
              key={message.id}
              initial={{ opacity: 0, filter: "blur(2px)", y: -8 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: 0.7,
              }}
            >
              {message.content}
            </motion.p>
          ))}
        </div>
        <div
          className={cn(
            "flex flex-col gap-[6px]",
            isFullscreen
              ? "w-full max-w-[540px] items-center -mx-3"
              : "items-start"
          )}
        >
          {pickedSuggestions.map((suggestion, index) => (
            <motion.div
              className="w-full"
              key={index}
              initial={{ opacity: 0, filter: "blur(2px)", y: -8 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.1,
                ease: "easeOut",
                delay: 0.9 + index * 0.1,
              }}
            >
              <ButtonInternal
                variant="ghost"
                className="border border-solid border-f1-border-secondary shadow sm:border-none sm:shadow-none"
                label={suggestion.message}
                icon={suggestion.icon}
                onClick={() =>
                  sendMessage({
                    id: randomId(),
                    role: "user",
                    content: suggestion.prompt || suggestion.message,
                  })
                }
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
