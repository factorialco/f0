import { AnimatePresence, motion } from "motion/react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { IconType } from "@/components/F0Icon"
import { useCopilotChatInternal } from "@copilotkit/react-core"
import { Message, randomId } from "@copilotkit/shared"
import { useMemo } from "react"
import OneIcon from "../OneIcon"

export type WelcomeScreenSuggestion = {
  icon: IconType
  message: string
  prompt?: string
}

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

  const pickedSuggestions = useMemo(
    () => pickRandomSuggestions(suggestions),
    [suggestions]
  )

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key="welcome"
        className="flex w-full flex-1 flex-col justify-end gap-4"
        initial={{ opacity: 1 }}
      >
        <div className="px-2">
          <motion.div
            className="flex w-fit justify-center"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{
              opacity: { duration: 0.2, ease: "easeOut", delay: 0.4 },
              scale: { duration: 0.3, ease: [0.25, 0.46, 0.45, 1.94] },
              filter: { duration: 0.2, ease: "easeOut", delay: 0.4 },
            }}
          >
            <OneIcon spin size="lg" className="my-4" />
          </motion.div>
          {greeting && (
            <motion.p
              className="text-lg font-semibold text-f1-foreground-secondary"
              initial={{ opacity: 0, filter: "blur(2px)", translateY: -8 }}
              animate={{ opacity: 1, filter: "blur(0px)", translateY: 0 }}
              transition={{
                opacity: { duration: 0.2, ease: "easeOut", delay: 0.5 },
                filter: { duration: 0.2, ease: "easeOut", delay: 0.5 },
                translateY: {
                  duration: 0.2,
                  ease: [0.25, 0.46, 0.45, 1.94],
                  delay: 0.5,
                },
              }}
            >
              {greeting}
            </motion.p>
          )}
          {initialMessages.map((message) => (
            <motion.p
              className="text-lg font-semibold text-f1-foreground"
              key={message.id}
              initial={{ opacity: 0, filter: "blur(2px)", translateY: -8 }}
              animate={{ opacity: 1, filter: "blur(0px)", translateY: 0 }}
              transition={{
                opacity: { duration: 0.2, ease: "easeOut", delay: 0.7 },
                filter: { duration: 0.2, ease: "easeOut", delay: 0.7 },
                translateY: {
                  duration: 0.2,
                  ease: [0.25, 0.46, 0.45, 1.94],
                  delay: 0.7,
                },
              }}
            >
              {message.content}
            </motion.p>
          ))}
        </div>
        <div className="-ml-2 flex flex-col items-start gap-[6px]">
          {pickedSuggestions.map((suggestion, index) => (
            <motion.div
              className="w-full"
              key={index}
              initial={{ opacity: 0, filter: "blur(2px)", translateY: -8 }}
              animate={{ opacity: 1, filter: "blur(0px)", translateY: 0 }}
              transition={{
                opacity: {
                  duration: 0.1,
                  ease: "easeOut",
                  delay: 0.9 + index * 0.1,
                },
                filter: {
                  duration: 0.1,
                  ease: "easeOut",
                  delay: 0.9 + index * 0.1,
                },
                translateY: {
                  duration: 0.1,
                  ease: [0.25, 0.46, 0.45, 1.94],
                  delay: 0.9 + index * 0.1,
                },
              }}
            >
              <ButtonInternal
                className="w-full items-start justify-start overflow-x-hidden"
                variant="ghost"
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
