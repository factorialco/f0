import { type Message } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"

import { F0Icon } from "@/components/F0Icon"
import ChevronRight from "@/icons/app/ChevronRight"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { ChatSpinner } from "./ChatSpinner"

interface ThinkingIndicatorProps {
  inProgress: boolean
  messages: Message[]
}

/**
 * A single thinking indicator that shows:
 * - "Working..." with spinner at the top
 * - Current task below (from latest thinking message)
 * - Subtask with chevron if available
 *
 * This replaces multiple per-message ActionItem renders.
 */
export const ThinkingIndicator = ({
  inProgress,
  messages,
}: ThinkingIndicatorProps) => {
  const translation = useI18n()

  // Extract the current task from the latest thinking message
  const currentTask = extractCurrentTask(messages)

  // Don't show if not in progress or no current task
  if (!inProgress || !currentTask) {
    return null
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentTask.message}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="flex w-full flex-col gap-0.5 text-f1-foreground-secondary"
      >
        {/* Main "Working..." row with spinner */}
        <div className="flex items-start gap-2">
          <div className="-mt-[2px] grid h-6 w-6 shrink-0 items-center justify-items-center">
            <ChatSpinner />
          </div>
          <p className={cn("text-pretty text-sm", "shine-text")}>
            {translation.ai.working}
          </p>
        </div>

        {/* Current task row */}
        {currentTask.message && (
          <motion.div
            key={currentTask.message}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="ml-8 flex items-center gap-1 text-xs text-f1-foreground-secondary"
          >
            <F0Icon size="sm" icon={ChevronRight} color="secondary" />
            <span>{currentTask.message}</span>
          </motion.div>
        )}

        {/* Subtask row */}
        {currentTask.detail && (
          <motion.div
            key={currentTask.detail}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="ml-12 flex items-center gap-1 text-xs text-f1-foreground-secondary"
          >
            <F0Icon size="sm" icon={ChevronRight} color="secondary" />
            <span>{currentTask.detail}</span>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

interface TaskInfo {
  message: string
  detail?: string
}

/**
 * Extract the current task info from the latest thinking message
 */
function extractCurrentTask(messages: Message[]): TaskInfo | null {
  // Find the latest message with orchestratorThinking tool call
  for (let i = messages.length - 1; i >= 0; i--) {
    const message = messages[i]
    if (message.role !== "assistant" || !message.toolCalls) {
      continue
    }

    const thinkingCall = message.toolCalls.find(
      (call) => call.function.name === "orchestratorThinking"
    )

    if (thinkingCall) {
      try {
        const args = JSON.parse(thinkingCall.function.arguments || "{}")
        return {
          message: args.message || "",
          detail: args.detail,
        }
      } catch {
        // Invalid JSON, skip
      }
    }
  }

  return null
}
