import { F0Icon } from "@/components/F0Icon/F0Icon"
import ChevronRight from "@/icons/app/ChevronRight"
import Lightbulb from "@/icons/app/Lightbulb"
import { useReducedMotion } from "@/lib/a11y"
import { MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import { motion } from "motion/react"
import { useState } from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../ui/collapsible"
import { useAiChatTranslations } from "../providers/AiChatTranslationsProvider"

type ThinkingProps = {
  messages: Message[]
  isActive: boolean
  RenderMessage: MessagesProps["RenderMessage"]
  AssistantMessage: MessagesProps["AssistantMessage"]
  inProgress: boolean
}

export const Thinking = ({ messages }: ThinkingProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const translations = useAiChatTranslations()

  return (
    <div className="mb-1">
      <Collapsible
        className="w-full"
        open={isExpanded}
        onOpenChange={setIsExpanded}
      >
        <CollapsibleTrigger className="flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90">
          <span className="mr-2 *:block">
            <F0Icon icon={Lightbulb} className="block" />
          </span>
          <span className="mr-[2px]">{translations.thoughtsGroupTitle}</span>
          <F0Icon
            icon={ChevronRight}
            className="h-4 w-4 transition-transform duration-200"
          />
        </CollapsibleTrigger>
        <CollapsibleContent forceMount className="ml-7 data-[state=open]:mt-3">
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
              visibility: isExpanded ? "visible" : "hidden",
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-col gap-2"
          >
            {messages.map((message, index) => (
              <div key={index}>
                {message.role === "assistant" &&
                  message.generativeUI?.({
                    status: "complete",
                    result: { inGroup: true },
                  })}
              </div>
            ))}
          </motion.div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
