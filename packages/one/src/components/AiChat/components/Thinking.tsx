import { MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import Lightbulb from "@factorialco/f0-react/icons/app/Lightbulb"
import { useI18n } from "../../../lib/providers/i18n"
import { CollapsibleMessage } from "../../CollapsibleMessage"

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
    <CollapsibleMessage
      icon={Lightbulb}
      title={translations.ai.thoughtsGroupTitle}
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
    </CollapsibleMessage>
  )
}
