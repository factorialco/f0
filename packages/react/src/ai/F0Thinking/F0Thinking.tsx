import Lightbulb from "@/icons/app/Lightbulb"
import { useI18n } from "@/lib/providers/i18n"

import { F0AiCollapsibleMessage } from "../F0AiCollapsibleMessage"
import { F0ThinkingProps } from "./types"

export const F0Thinking = ({ messages, title }: F0ThinkingProps) => {
  const translations = useI18n()

  return (
    <F0AiCollapsibleMessage
      icon={Lightbulb}
      title={title ?? translations.ai.thoughtsGroupTitle}
    >
      <div className="flex flex-col gap-2 pl-7">
        {messages.map((message, index) => (
          <div key={index}>
            {message.role === "assistant" &&
              message.generativeUI?.({
                status: "complete",
                result: { inGroup: true },
              })}
          </div>
        ))}
      </div>
    </F0AiCollapsibleMessage>
  )
}
