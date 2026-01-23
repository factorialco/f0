import { type Message } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { memo, useEffect, useMemo, useRef, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import ChevronRight from "@/icons/app/ChevronRight"

import { ActionItem } from "../ActionItem"
import "../styles.css"

// ============================================================================
// Types
// ============================================================================

interface ThinkingIndicatorProps {
  /** Whether the AI is currently processing */
  inProgress: boolean
  /** Messages array to extract thinking state from */
  messages: Message[]
  /** Maximum number of subtasks to display (default: 3) */
  maxSubtasks?: number
}

interface TaskInfo {
  message: string
  detail?: string
}

interface SubtaskItem {
  id: string
  text: string
  timestamp: number
}

// ============================================================================
// Constants
// ============================================================================

const DEFAULT_MAX_SUBTASKS = 3
const DEFAULT_MESSAGE = "Working..."

/** Animation configuration matching f0 design system */
const ANIMATION_CONFIG = {
  /** Main task fade transition */
  mainTask: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  },
  /** Subtask slide + fade transition */
  subtask: {
    initial: { opacity: 0, y: -8, height: 0 },
    animate: (index: number) => ({
      opacity: Math.max(0.4, 1 - index * 0.2),
      y: 0,
      height: "auto",
    }),
    exit: { opacity: 0, y: 8, height: 0 },
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
} as const

// ============================================================================
// Helpers
// ============================================================================

/**
 * Extract the current task info from the most recent thinking message.
 * Searches from the end for efficiency.
 */
function extractCurrentTask(messages: Message[]): TaskInfo | null {
  for (let i = messages.length - 1; i >= 0; i--) {
    const message = messages[i]

    if (message.role !== "assistant" || !message.toolCalls?.length) {
      continue
    }

    const thinkingCall = message.toolCalls.find(
      (call) => call.function.name === "orchestratorThinking"
    )

    if (thinkingCall) {
      try {
        const args = JSON.parse(thinkingCall.function.arguments || "{}")
        if (args.message) {
          return {
            message: args.message,
            detail: args.detail,
          }
        }
      } catch {
        // Invalid JSON, continue searching
      }
    }
  }

  return null
}

/**
 * Generate a unique ID for subtask tracking
 */
function generateSubtaskId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

// ============================================================================
// Subcomponents
// ============================================================================

interface SubtaskRowProps {
  subtask: SubtaskItem
  index: number
}

/**
 * Individual subtask row with chevron icon and animated text
 */
const SubtaskRow = memo(function SubtaskRow({
  subtask,
  index,
}: SubtaskRowProps) {
  return (
    <motion.div
      layout
      key={subtask.id}
      initial={ANIMATION_CONFIG.subtask.initial}
      animate={ANIMATION_CONFIG.subtask.animate(index)}
      exit={ANIMATION_CONFIG.subtask.exit}
      transition={ANIMATION_CONFIG.subtask.transition}
      className="ml-7 flex min-w-0 items-center gap-1 overflow-hidden text-f1-foreground-secondary"
    >
      <F0Icon
        size="sm"
        icon={ChevronRight}
        color="secondary"
        aria-hidden="true"
      />
      <span className="shine-text truncate text-sm">{subtask.text}</span>
    </motion.div>
  )
})

// ============================================================================
// Main Component
// ============================================================================

/**
 * ThinkingIndicator displays the current AI processing state with:
 * - A main task showing what the AI is working on (ActionItem with executing state)
 * - Up to 3 accumulated subtasks that fade in/out smoothly
 *
 * Design principles:
 * - Uses f0 design system patterns (ActionItem, F0Icon, shine-text)
 * - Mobile-friendly with proper touch handling and overflow
 * - Smooth animations using motion/react with AnimatePresence
 * - Performance optimized with memoization and refs for tracking
 */
export const ThinkingIndicator = memo(function ThinkingIndicator({
  inProgress,
  messages,
  maxSubtasks = DEFAULT_MAX_SUBTASKS,
}: ThinkingIndicatorProps) {
  // Extract current task from messages (memoized)
  const currentTask = useMemo(() => extractCurrentTask(messages), [messages])

  // Track accumulated subtasks
  const [subtasks, setSubtasks] = useState<SubtaskItem[]>([])
  const lastDetailRef = useRef<string | null>(null)

  // Add new subtasks when detail changes
  useEffect(() => {
    const newDetail = currentTask?.detail

    if (newDetail && newDetail !== lastDetailRef.current) {
      lastDetailRef.current = newDetail

      setSubtasks((prev) => {
        const newSubtask: SubtaskItem = {
          id: generateSubtaskId(),
          text: newDetail,
          timestamp: Date.now(),
        }
        // Keep only the most recent subtasks
        return [...prev, newSubtask].slice(-maxSubtasks)
      })
    }
  }, [currentTask?.detail, maxSubtasks])

  // Clear state when processing stops
  useEffect(() => {
    if (!inProgress) {
      setSubtasks([])
      lastDetailRef.current = null
    }
  }, [inProgress])

  // Don't render when not in progress
  if (!inProgress) {
    return null
  }

  const displayMessage = currentTask?.message ?? DEFAULT_MESSAGE

  return (
    <div
      className="flex w-full flex-col gap-1"
      role="status"
      aria-live="polite"
      aria-label={`AI is ${displayMessage.toLowerCase()}`}
    >
      {/* Main task - ActionItem with executing state (colorful spinner + shine text) */}
      <AnimatePresence mode="popLayout">
        <motion.div key={displayMessage} {...ANIMATION_CONFIG.mainTask}>
          <ActionItem title={displayMessage} status="executing" />
        </motion.div>
      </AnimatePresence>

      {/* Accumulated subtasks with staggered opacity */}
      <AnimatePresence mode="popLayout">
        {subtasks.map((subtask, index) => (
          <SubtaskRow key={subtask.id} subtask={subtask} index={index} />
        ))}
      </AnimatePresence>
    </div>
  )
})
