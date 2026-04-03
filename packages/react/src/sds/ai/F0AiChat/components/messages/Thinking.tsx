import Lightbulb from "@/icons/app/Lightbulb"
import { useI18n } from "@/lib/providers/i18n"

import { F0ActionItem } from "../../../F0ActionItem"
import { ThinkingProps } from "./types"
import { AiCollapsibleMessage } from "../shared/AiCollapsibleMessage"

/**
 * Parse the user-friendly progress title from an orchestratorThinking
 * tool call's arguments JSON string.
 */
function parseThinkingTitle(argsJson: string): string {
  try {
    const parsed = JSON.parse(argsJson)
    return (parsed.message as string) || "thinking"
  } catch {
    return "thinking"
  }
}

/**
 * Collect all orchestratorThinking tool call titles from a group of messages.
 * With separate parentMessageId (AG-UI), multiple tool calls are on a single
 * message. With separate messages, each has one tool call. This handles both.
 */
function collectThinkingTitles(messages: ThinkingProps["messages"]): string[] {
  const titles: string[] = []
  for (const message of messages) {
    if (message.role !== "assistant") continue
    for (const tc of (
      message as {
        toolCalls?: { function: { name: string; arguments: string } }[]
      }
    ).toolCalls ?? []) {
      if (tc.function.name === "orchestratorThinking") {
        titles.push(parseThinkingTitle(tc.function.arguments))
      }
    }
  }
  return titles
}

export const Thinking = ({ messages, title }: ThinkingProps) => {
  const translations = useI18n()
  const titles = collectThinkingTitles(messages)

  return (
    <AiCollapsibleMessage
      icon={Lightbulb}
      title={title ?? translations.ai.thoughtsGroupTitle}
    >
      <div className="flex flex-col gap-2 pl-7">
        {titles.map((thinkingTitle, index) => (
          <div key={index} className="-ml-1">
            <F0ActionItem title={thinkingTitle} status="completed" inGroup />
          </div>
        ))}
      </div>
    </AiCollapsibleMessage>
  )
}
