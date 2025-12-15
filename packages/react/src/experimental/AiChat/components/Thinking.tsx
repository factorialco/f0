import Lightbulb from "@/icons/app/Lightbulb"
import { useI18n } from "@/lib/providers/i18n"
import { MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import { AiCollapsibleMessage } from "./AiCollapsibleMessage"

type ThinkingProps = {
  messages: Message[]
  isActive: boolean
  RenderMessage: MessagesProps["RenderMessage"]
  AssistantMessage: MessagesProps["AssistantMessage"]
  inProgress: boolean
}

export const Thinking = ({ messages }: ThinkingProps) => {
  const translations = useI18n()

  return (
    <AiCollapsibleMessage icon={Lightbulb} title={translations.ai.thoughtsGroupTitle}>
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
    </AiCollapsibleMessage>
  )
}
